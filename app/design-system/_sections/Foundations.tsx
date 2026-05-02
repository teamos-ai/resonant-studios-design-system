import { Card, Eyebrow, Stack } from "../../components/ui";
import { Block, FontSpecimen, SectionOpener } from "./_shared";
import { TokenCode } from "./TokenCode";

/* Hex values mirror the resolved tokens from globals.css.
   Per the 3-tier model: components reference `var(--<role>)`, never these
   hex strings — they're shown here for designer reference only. */
const colourRoles: {
  token: string;
  label: string;
  role: string;
  light: string;
  dark: string;
}[] = [
  { token: "--bg",            label: "Background",      role: "Page surface",         light: "#EDE9DF", dark: "#181C1F" },
  { token: "--bg-elevated",   label: "Elevated",        role: "Cards, popovers",      light: "#FFFFFF", dark: "#22272B" },
  { token: "--bg-sunken",     label: "Sunken",          role: "Recessed bands",       light: "#DDD7C8", dark: "#131618" },
  { token: "--ink",           label: "Ink",             role: "Primary text",         light: "#1F1E1B", dark: "#E6E8EA" },
  { token: "--ink-muted",     label: "Ink muted",       role: "Secondary text",       light: "rgba(31,30,27,0.66)",   dark: "rgba(230,232,234,0.70)" },
  { token: "--ink-soft",      label: "Ink soft",        role: "Captions",             light: "rgba(31,30,27,0.46)",   dark: "rgba(230,232,234,0.52)" },
  { token: "--ink-faint",     label: "Ink faint",       role: "Disabled, dividers",   light: "rgba(31,30,27,0.24)",   dark: "rgba(230,232,234,0.28)" },
  { token: "--rule",          label: "Rule",            role: "Hairline borders",     light: "rgba(31,30,27,0.10)",   dark: "rgba(230,232,234,0.10)" },
  { token: "--rule-strong",   label: "Rule strong",     role: "Form borders",         light: "rgba(31,30,27,0.22)",   dark: "rgba(230,232,234,0.22)" },
  { token: "--primary",       label: "Primary",         role: "CTAs, active state",   light: "#C76F46", dark: "#E58F66" },
  { token: "--primary-hover", label: "Primary hover",   role: "Lifted CTA",           light: "#A95930", dark: "#F0A57F" },
  { token: "--primary-wash",  label: "Primary wash",    role: "Tinted backgrounds",   light: "rgba(199,111,70,0.14)", dark: "rgba(229,143,102,0.18)" },
  { token: "--secondary",     label: "Secondary",       role: "Sage surfaces",        light: "#728C73", dark: "#9BB89C" },
  { token: "--secondary-wash",label: "Secondary wash",  role: "Sage tint",            light: "rgba(114,140,115,0.14)",dark: "rgba(155,184,156,0.18)" },
  { token: "--accent",        label: "Accent",          role: "Slate, professional",  light: "#4A4F5C", dark: "#8C95A8" },
  { token: "--accent-wash",   label: "Accent wash",     role: "Slate tint",           light: "rgba(74,79,92,0.10)",   dark: "rgba(140,149,168,0.18)" },
  { token: "--success",       label: "Success",         role: "Confirmations",        light: "#6F8C6A", dark: "#A8CFA1" },
  { token: "--warning",       label: "Warning",         role: "Caution",              light: "#C48A3A", dark: "#E8C07A" },
  { token: "--error",         label: "Error",           role: "Validation",           light: "#9C4A3C", dark: "#E89A88" },
];

/** Convert "#RRGGBB" or "rgba(r,g,b,a)" into a normalised "rgb(r, g, b)" string for designers. */
function toRgb(value: string): string | null {
  const hex = value.match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
  }
  const rgba = value.match(/^rgba?\(([^)]+)\)$/);
  if (rgba) {
    const parts = rgba[1].split(",").map((s) => s.trim());
    if (parts.length === 4) return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${parts[3]})`;
    return `rgb(${parts[0]}, ${parts[1]}, ${parts[2]})`;
  }
  return null;
}

const typeScale = [
  { token: "--fs-display", label: "Display", sample: "A song that's really yours.", display: true },
  { token: "--fs-h1", label: "H1", sample: "A song that's really yours.", display: true },
  { token: "--fs-h2", label: "H2", sample: "From first session to final mix.", display: true },
  { token: "--fs-h3", label: "H3", sample: "Tell us a little about you.", display: true },
  { token: "--fs-h4", label: "H4 (sans)", sample: "Plan-managed", display: false },
  { token: "--fs-lead", label: "Lead", sample: "Personalised, music-based sessions.", display: false },
  { token: "--fs-body", label: "Body", sample: "Every session is one-on-one.", display: false },
  { token: "--fs-small", label: "Small", sample: "We'll only use this to send reminders.", display: false },
  { token: "--fs-micro", label: "Micro", sample: "MUSIC-BASED NDIS SUPPORT", display: false },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128].map((px, i) => ({ token: `--s-${i + 1}`, px }));

const radii = [
  { token: "--r-1", px: 6, use: "Tags" },
  { token: "--r-2", px: 10, use: "Inputs, buttons" },
  { token: "--r-3", px: 14, use: "Cards" },
  { token: "--r-4", px: 20, use: "Feature cards" },
  { token: "--r-5", px: 28, use: "Hero cards" },
  { token: "--r-pill", px: 999, use: "Pills" },
];

const shadows = [
  { token: "--shadow-xs", use: "Buttons, chips" },
  { token: "--shadow-sm", use: "Cards (default)" },
  { token: "--shadow-md", use: "Lifted cards" },
  { token: "--shadow-lg", use: "Modals, hero" },
];

export default function Foundations() {
  return (
    <section id="foundations" style={{ scrollMarginTop: 110 }}>
      <SectionOpener
        number="01"
        eyebrow="Foundations"
        title={<>The <em style={{ fontStyle: "italic", color: "var(--primary)" }}>tier-2 tokens</em> every component sees.</>}
        lead="These are the only tokens components reference. Mode switching swaps the values they point to — no component file ever needs to change."
      />

      <Stack space={9}>
        {/* Colour */}
        <Block label="Colour" sub="Semantic roles. Each card shows both the light-mode and dark-mode hex (and RGB) the token resolves to.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "var(--s-3)" }}>
            {colourRoles.map((c) => (
              <Card key={c.token} pad="sm" elevation="flat">
                <div style={{ height: 48, background: `var(${c.token})`, borderRadius: "var(--r-2)", border: "1px solid var(--rule)" }} />
                <div style={{ marginTop: "var(--s-3)" }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{c.label}</div>
                  <TokenCode style={{ fontSize: 11, display: "block" }}>{c.token}</TokenCode>
                  <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4, lineHeight: 1.4 }}>{c.role}</div>
                  <div style={{ marginTop: "var(--s-3)", paddingTop: "var(--s-2)", borderTop: "1px solid var(--rule)", display: "flex", flexDirection: "column", gap: 6, fontVariantNumeric: "tabular-nums" }}>
                    <ColourValueRow modeLabel="Light" value={c.light} />
                    <ColourValueRow modeLabel="Dark"  value={c.dark} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Block>

        {/* Type */}
        <Block label="Typography" sub="Two faces only. DM Serif Display for headings. Manrope for everything else. Atkinson Hyperlegible loads on opt-in for dyslexia mode.">
          <Stack space={5}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }} className="grid-2">
              <FontSpecimen
                name="DM Serif Display"
                role="Headings · pull quotes · display numerals"
                weights="Regular + Italic"
                sample={<span>A song that&rsquo;s <em style={{ fontStyle: "italic" }}>really</em> yours.</span>}
                family="var(--font-display)"
              />
              <FontSpecimen
                name="Manrope"
                role="Body · UI · buttons · numerals · code"
                weights="200, 300, 400, 500, 600, 700, 800"
                sample={<span>Personalised, music-based sessions that build confidence.</span>}
                family="var(--font-body)"
              />
            </div>

            <Card pad="lg" elevation="flat">
              <Stack space={5}>
                <div style={{ textAlign: "center", paddingBottom: "var(--s-3)", borderBottom: "1px solid var(--rule)" }}>
                  <Eyebrow tone="muted">Type scale</Eyebrow>
                </div>
                {typeScale.map((t) => (
                  <div key={t.token} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "var(--s-4)", alignItems: "baseline", borderTop: "1px solid var(--rule)", paddingTop: "var(--s-3)" }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{t.label}</div>
                      <TokenCode style={{ fontSize: 11 }}>{t.token}</TokenCode>
                    </div>
                    <div
                      style={{
                        fontFamily: t.display ? "var(--font-display)" : "var(--font-body)",
                        fontSize: `var(${t.token})`,
                        lineHeight: t.display ? 1.1 : 1.4,
                        color: "var(--ink)",
                        letterSpacing: t.token === "--fs-micro" ? "0.16em" : "-0.01em",
                        textTransform: t.token === "--fs-micro" ? "uppercase" : "none",
                        fontWeight: t.token === "--fs-micro" ? 600 : 400,
                      }}
                    >
                      {t.sample}
                    </div>
                  </div>
                ))}
              </Stack>
            </Card>
          </Stack>
        </Block>

        <Block label="Spacing" sub="8 px base scale.">
          <Card pad="lg" elevation="flat">
            <Stack space={3}>
              {spacing.map((s) => (
                <div key={s.token} style={{ display: "grid", gridTemplateColumns: "100px 70px 1fr", gap: "var(--s-4)", alignItems: "center" }}>
                  <TokenCode style={{ fontSize: 13, color: "var(--ink)" }}>{s.token}</TokenCode>
                  <span style={{ fontSize: 13, color: "var(--ink-muted)", fontVariantNumeric: "tabular-nums" }}>{s.px}px</span>
                  <div style={{ height: 14, width: s.px, background: "var(--primary)", borderRadius: 2 }} />
                </div>
              ))}
            </Stack>
          </Card>
        </Block>

        <Block label="Radii" sub="Soft corners always. Pill reserved for circular elements only — avatars, switch tracks, status dots.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "var(--s-3)" }}>
            {radii.map((r) => (
              <Card key={r.token} pad="md" elevation="flat" style={{ textAlign: "center" }}>
                <div style={{ width: 60, height: 60, background: "var(--primary-wash)", borderRadius: r.token === "--r-pill" ? "var(--r-pill)" : `var(${r.token})`, border: "1px solid var(--primary)", margin: "0 auto var(--s-3)" }} />
                <TokenCode style={{ fontSize: 12, color: "var(--ink)" }}>{r.token}</TokenCode>
                <div style={{ fontSize: 11, color: "var(--ink-muted)", marginTop: 4 }}>{r.px === 999 ? "pill" : `${r.px}px`}</div>
                <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4 }}>{r.use}</div>
              </Card>
            ))}
          </div>
        </Block>

        <Block label="Shadows" sub="Tinted, never grey-black.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "var(--s-4)" }}>
            {shadows.map((s) => (
              <div key={s.token} style={{ padding: "var(--s-7) var(--s-5)", background: "var(--bg-elevated)", borderRadius: "var(--r-3)", boxShadow: `var(${s.token})`, textAlign: "center" }}>
                <TokenCode style={{ fontSize: 12, color: "var(--ink)" }}>{s.token}</TokenCode>
                <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 6 }}>{s.use}</div>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Motion" sub="One easing — out-expo. Three durations: 140 ms · 220 ms · 420 ms. No springs, no bounces.">
          <Card pad="lg" elevation="flat">
            <p style={{ fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "var(--ink)" }}>Forbidden:</strong> parallax · springs · bounces · auto-rotating
              carousels · loops &gt; 5 s · animated GIFs.{" "}
              <strong style={{ color: "var(--ink)" }}>prefers-reduced-motion</strong> always honoured — transforms
              collapse, only opacity transitions remain.
            </p>
          </Card>
        </Block>
      </Stack>
    </section>
  );
}

function ColourValueRow({ modeLabel, value }: { modeLabel: string; value: string }) {
  const rgb = toRgb(value);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)" }}>
          {modeLabel}
        </span>
        <code style={{ fontSize: 10.5, color: "var(--ink)", background: "transparent", padding: 0, fontVariantNumeric: "tabular-nums" }}>
          {value}
        </code>
      </div>
      {rgb && rgb !== value && (
        <div style={{ textAlign: "right" }}>
          <code style={{ fontSize: 9.5, color: "var(--ink-muted)", background: "transparent", padding: 0, fontVariantNumeric: "tabular-nums" }}>
            {rgb}
          </code>
        </div>
      )}
    </div>
  );
}
