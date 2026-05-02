#!/usr/bin/env node
/**
 * Resonant Studios — Plain English Australia readability check.
 *
 * Walks app/**\/*.{tsx,ts} (excluding the design-system styleguide and the
 * round1/round2 review pages), extracts user-facing string literals from
 * JSX text + Lead/Heading/Eyebrow/Field children, and computes
 * Flesch-Kincaid Grade Level + average sentence length.
 *
 * Fails the build if grade > 7 (BRIEF.md target) or avg sentence length
 * exceeds 18 words across the corpus.
 *
 * Usage:
 *   node scripts/readability-check.mjs              # check all participant-facing routes
 *   node scripts/readability-check.mjs --verbose    # list every flagged string
 *
 * Wire into CI by adding to package.json:
 *   "scripts": { "lint:copy": "node scripts/readability-check.mjs" }
 *
 * The check intentionally skips the styleguide pages — they document the
 * system to a developer audience, not participants.
 */

import { readFile, readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, relative, dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..", "app");
const SKIP_DIRS = new Set(["design-system", "round1", "round2", "directions", "round1-directions"]);
const SKIP_FILES = new Set(["layout.tsx", "globals.css"]);

const VERBOSE = process.argv.includes("--verbose");

const TARGETS = {
  gradeLevelMax: 7, // BRIEF.md → Plain English Australia
  avgSentenceWordsMax: 18,
  /** Below this many words FK is statistically unreliable — skip the file. */
  corpusMinWords: 50,
};

/** Files can opt out by adding `// readability-exempt: <reason>` near the top. */
const EXEMPT_DIRECTIVE = /\/\/\s*readability-exempt:\s*(.+)/;

/** Collect .tsx files we should check. */
async function collect(dir, out = []) {
  const entries = await readdir(dir);
  for (const name of entries) {
    if (SKIP_DIRS.has(name)) continue;
    const path = join(dir, name);
    const st = await stat(path);
    if (st.isDirectory()) {
      await collect(path, out);
    } else if (name.endsWith(".tsx") && !SKIP_FILES.has(name)) {
      out.push(path);
    }
  }
  return out;
}

/**
 * Naive but useful extraction: pulls JSX text content (between `>` and `<`)
 * plus values of common copy props (label / hint / error / placeholder /
 * description / footnote / title).
 */
function extractStrings(source) {
  const strings = [];
  // JSX text: chunks between > and < that contain at least one letter
  const jsxText = /(?<=>)([^<>{}\n][^<>{}]*[a-z][^<>{}]*)(?=<)/gi;
  for (const m of source.matchAll(jsxText)) {
    const s = m[1].replace(/\s+/g, " ").trim();
    if (s.length > 6 && /[a-z]/i.test(s)) strings.push(s);
  }
  // Copy-bearing props
  const propRx = /\b(label|hint|error|placeholder|description|footnote|title|eyebrow)\s*=\s*["']([^"']{6,})["']/g;
  for (const m of source.matchAll(propRx)) {
    strings.push(m[2]);
  }
  return strings;
}

const SENTENCE_END = /[.!?](?:\s|$)/g;
const SYLLABLE_VOWEL_GROUP = /[aeiouy]+/g;

function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const m = word.match(SYLLABLE_VOWEL_GROUP);
  return m ? m.length : 1;
}

function fkGradeLevel(text) {
  const words = text.split(/\s+/).filter(Boolean);
  const sentences = (text.match(SENTENCE_END) ?? [""]).length || 1;
  const syllables = words.reduce((s, w) => s + countSyllables(w), 0);
  const w = words.length || 1;
  const grade = 0.39 * (w / sentences) + 11.8 * (syllables / w) - 15.59;
  return { grade: Math.max(0, grade), words: w, sentences, syllables };
}

function check(file, source) {
  const exempt = source.match(EXEMPT_DIRECTIVE);
  if (exempt) {
    return { file, exempt: exempt[1].trim() };
  }
  const strings = extractStrings(source);
  if (strings.length === 0) return null;
  const corpus = strings.join(". ");
  const { grade, words, sentences } = fkGradeLevel(corpus);
  if (words < TARGETS.corpusMinWords) {
    return { file, skipped: `corpus ${words} words (need ${TARGETS.corpusMinWords}+ for reliable FK)` };
  }
  const avgSentenceWords = words / sentences;
  return {
    file,
    grade: Number(grade.toFixed(1)),
    avgSentenceWords: Number(avgSentenceWords.toFixed(1)),
    stringsCount: strings.length,
    strings,
  };
}

const files = await collect(ROOT);
const results = [];
for (const f of files) {
  const src = await readFile(f, "utf8");
  const r = check(f, src);
  if (r) results.push(r);
}

let failed = false;
console.log("\nResonant Studios — readability check\n");
console.log("Targets: grade ≤", TARGETS.gradeLevelMax, "· avg sentence words ≤", TARGETS.avgSentenceWordsMax);
console.log("─".repeat(60));

let checked = 0;
for (const r of results) {
  const rel = relative(process.cwd(), r.file);
  if (r.exempt) {
    console.log(`◌ ${rel}  (exempt: ${r.exempt})`);
    continue;
  }
  if (r.skipped) {
    if (VERBOSE) console.log(`· ${rel}  (skipped: ${r.skipped})`);
    continue;
  }
  checked++;
  const gradeOk = r.grade <= TARGETS.gradeLevelMax;
  const lenOk = r.avgSentenceWords <= TARGETS.avgSentenceWordsMax;
  const ok = gradeOk && lenOk;
  if (!ok) failed = true;
  const mark = ok ? "✓" : "✗";
  console.log(`${mark} ${rel}`);
  console.log(`  grade ${r.grade}${gradeOk ? "" : "  (over target)"}` + ` · avg sentence ${r.avgSentenceWords} words${lenOk ? "" : "  (over target)"} · ${r.stringsCount} strings`);
  if (VERBOSE && !ok) {
    for (const s of r.strings) console.log("    · " + s);
  }
}

console.log("─".repeat(60));
if (failed) {
  console.log("\nFAILED. Simplify the flagged copy or run with --verbose to see every string.");
  console.log("Reference: BRIEF.md → Voice in components → Plain English Australia.\n");
  process.exit(1);
}
console.log("\nPASSED. Plain English Australia targets met across", checked, "checked file(s).");
console.log(`(${results.filter((r) => r.exempt).length} exempt, ${results.filter((r) => r.skipped).length} skipped — corpus too small.)\n`);
