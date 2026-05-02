# Resonant Studios — Design System

> Music-based NDIS support delivered with the warmth of a working studio and the rigour of a structured service.

---

## About Resonant Studios

Resonant Studios supports self-managed and plan-managed NDIS participants through personalised, music-based sessions that build confidence, skill, and self-expression in a safe, accessible environment. Each participant's journey is tailored to their goals and can lead to a professionally produced, Spotify-ready song that captures something real, personal, and worth sharing.

Resonant Studios is **not** a recording studio for hire and **not** a clinical healthcare service. It sits deliberately in between — a structured support programme delivered inside a real creative environment.

### Audience

- **Participants** — NDIS participants exploring music as a vehicle for personal goals (communication, confidence, emotional regulation, creative expression).
- **Support coordinators & plan managers** — referring participants; need clarity on outcomes, scope, and how sessions map to plan goals.
- **Families & carers** — need to trust the environment is safe, warm, and genuinely skilled.

### Brand adjectives

Warm · crafted · calm · accessible · professional · human · *premium but not exclusive*.

---

## Sources & references

This system was built from a written creative brief only. No codebase, Figma file, slide template, or existing website was attached. Imagery direction, tone, and palette decisions are derived from the brief and commonly associated editorial / acoustic-brand references called out in it:

- Modern acoustic guitar brand warmth (think Taylor, Maton editorial pages)
- Editorial landing page composition (magazine-like rhythm, not SaaS grids)
- Tactile soft-modern UI (rounded cards, soft shadow, paper grain)

If a real codebase, Figma, or brand doc exists, please re-import it — this system should be reconciled against the source of truth before production use.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `colors_and_type.css` | CSS custom properties. Import this in any artifact that uses the brand. |
| `fonts/` | Webfonts used by the brand. |
| `assets/` | Logos, background textures, placeholder photography direction. |
| `preview/` | Small HTML cards that populate the Design System review tab. |
| `ui_kits/website/` | Marketing site kit — hero, service explainer, journey, booking CTA. |
| `ui_kits/participant-portal/` | Participant-facing portal kit — session schedule, goals, song project view. |
| `SKILL.md` | Agent-Skills compatible entry point. |

---

## Content fundamentals

Tone: a **structured support service delivered by musicians.** Warm but clear. Outcome-focused. Never sales-y. Never framed as studio hire.

### Voice rules

- **Second person, singular.** Address the participant (or their support person) as *you*.
- **We**, not *Resonant Studios*, in running copy — the brand speaks as a small team.
- **Sentence case everywhere.** Not Title Case. Not ALL CAPS (except for tiny eyebrow labels with generous letter-spacing).
- **Plain language over jargon.** "Sessions," "goals," "songs," "your plan" — not "therapeutic intervention," "clinical outcomes," "service modality."
- **No exclamation marks.** Calm, not peppy.
- **No emoji.** Ever. They undercut the crafted, professional register.
- **Numerals for counts, spelled out for rhythm.** "8 sessions" in UI. "Eight weeks in the studio" in editorial body.
- **Avoid medicalised language.** No "patients," "treatment," "therapy" (unless a qualified therapist is specifically credentialed). Say "support," "sessions," "work together."
- **Avoid producer-speak.** No "drop the track," "in the booth," "vibes." Say "record," "in the studio," "the song you're making."

### Examples

**Headlines** — short, concrete, human. One idea per headline.

- ✅ *"A song that's really yours."*
- ✅ *"Music-based NDIS support, made with you."*
- ✅ *"From first session to final mix."*
- ❌ *"Unleash Your Sonic Potential!"*
- ❌ *"Revolutionary Therapeutic Audio Solutions."*

**Body** — direct, warm, grounded in what actually happens.

- ✅ *"We work with self-managed and plan-managed NDIS participants. Every journey starts with a conversation about what you want to get out of the sessions — building confidence, working on communication, or finishing a song you're proud of."*
- ❌ *"Our innovative platform leverages music therapy modalities to deliver measurable outcomes across a diverse participant cohort."*

**Microcopy** — quietly helpful.

- Button: *"Book an intro call"* (not "Get Started")
- Field helper: *"We'll only use this to send your session reminders."*
- Empty state: *"No sessions scheduled yet. Your coordinator will add them here."*

### What we call things

| Use | Don't use |
|---|---|
| Session | Appointment, class |
| Participant | Client, patient, user |
| Support coordinator | Case manager |
| Your plan | Your funding |
| The studio | The booth, the facility |
| Song / track | Record, cut, single |
| Intro call | Discovery call, consultation |

---

## Visual foundations

A warm, tactile, editorial system. Paper and wood, not glass and neon.

### Colour

- **Surfaces**: warm paper `#F5EFE4` and soft oat `#EDE4D1`. These replace white as the default page background. True white (`#FFFFFF`) appears only inside photographs or as a rarely-used elevation surface.
- **Text**: warm charcoal `#2B2722` (not pure black). Secondary `#6B6459`. Muted `#9A9185`.
- **Primary accent**: muted plum `#6B4B5E`. Used for primary CTAs, links, and key brand moments. Never saturated — always a little dusty.
- **Secondary accent**: sage teal `#7A8F82`. Used for supporting state, progress, and calm signals.
- **Highlight**: burnished copper `#B07848`. Used sparingly for emphasis, pull-quote underlines, section numerals, the logo glyph. Never as a CTA colour — it's a spice, not a sauce.
- **Semantic**: success `#6F8C6A` (moss), warning `#C48A3A` (amber), error `#9C4A3C` (rust). All desaturated to stay in register with the warm palette.

Avoid: pure black, pure white, cool blues, saturated purples, neon anything.

### Typography

**Two faces only.** The Resonant system ships with exactly two type families and no others:

- **DM Serif Display** — *headings only* (H1–H3, pull quotes, display numerals). Regular + Italic. Italic cuts are a signature, used for emphasis inside headlines and for song titles.
- **Manrope** — *everything else*. Body, UI, buttons, labels, captions, numerals, tabular data, code. Weights 200–800 available; the common set is body 400, labels 600, buttons 500.

Hex values, session codes, and anything that wants a monospaced feel use Manrope with `font-variant-numeric: tabular-nums` — there is no separate mono face.

Typographic rhythm is *editorial*: generous leading (1.5–1.7 on body), comfortable measure (60–72ch on long-form), large display sizes with tight (~1.05) leading. Italic and roman mix inside the same headline is encouraged.

See `preview/type-*.html` for full scale and examples.

### Grain & texture

Every page has a subtle paper-grain overlay (see `assets/paper-grain.svg`) at 4–8% opacity. It lives in a `::before` pseudo-element on the body, `pointer-events: none`, fixed. Never skip this — it's what makes surfaces feel like paper instead of CSS.

### Imagery

- **Subject**: acoustic instruments, studio microphones, hands on instruments, textured walls, intimate detail shots of real creative environments.
- **Colour grading**: warm, natural, slightly desaturated. Shadows hold colour (never crushed to black). Think morning light through a studio window.
- **Never**: stock smiling-headshot photography, neon-lit producer studios, clinical hospital imagery, overly processed HDR.
- **Crop**: generous. Let instruments breathe.

### Cards & surfaces

- **Radius**: cards `16px`, inputs/buttons `12px`, pills `999px`. Never sharp corners anywhere.
- **Elevation**: soft, warm shadows. Not grey — tinted with the background. E.g. `0 1px 2px rgba(43, 39, 34, 0.04), 0 8px 24px -8px rgba(43, 39, 34, 0.08)`. Three levels: `shadow-sm`, `shadow-md`, `shadow-lg`.
- **Borders**: `1px solid rgba(43, 39, 34, 0.08)` — hairline warm charcoal at low alpha. Never a hard `#000` rule.
- **Fill**: cards sit on `--surface-paper` and use `--surface-oat` or pure `#FFFFFF` as their fill to lift off the page.

### Spacing

8px base grid. Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Section padding on desktop is generous — 96–128px top/bottom. Cramped layouts break the calm.

### Motion

- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo-ish). Everything eases out. No bounces. No springs.
- **Duration**: 200ms for micro (hover, press), 400ms for component (menu open, accordion), 600ms for scene (route transition).
- **Fades over slides.** A cross-fade with a 4–8px Y offset is the house transition. No parallax, no large motion.

### Interaction states

- **Hover (buttons, primary)**: background darkens by ~6% (use `color-mix` with 6% charcoal).
- **Hover (links)**: underline appears with `text-underline-offset: 4px`, copper colour.
- **Hover (cards)**: elevation steps up one level, transform `translateY(-2px)`, 200ms.
- **Press**: `transform: scale(0.98)`, 120ms.
- **Focus**: `2px` copper ring with a `2px` paper-coloured offset (`outline + outline-offset`). Always visible, never removed.
- **Disabled**: 40% opacity, `cursor: not-allowed`, no hover change.

### Layout

- **Max content width** on marketing: 1200px, with a preferred 1040px for editorial text blocks.
- **Grid**: 12-col, 24px gutter desktop, 16px tablet, 16px mobile gutter.
- **Fixed elements**: a single top nav, 72px tall, with a subtle paper-grain + 60% alpha backdrop when scrolled. No sticky sidebars on marketing.

### Transparency & blur

- Used sparingly. The scrolled-nav backdrop (`backdrop-filter: blur(12px) saturate(1.1)` over 70% paper) is the main place.
- Never full-page blurs, never frosted hero overlays on marketing.

### What to avoid (house rules)

- Pure black text, pure white surfaces, sharp 90° corners.
- Gradients, especially bluish-purple or neon.
- Drop shadows that are grey/black (they must be tinted warm).
- Left-border accent cards ("colored stripe + rounded corner" quote cards).
- Emoji.
- Hand-drawn SVG illustrations unless commissioned.
- Icon-for-icon's-sake. If an icon doesn't add meaning, leave it out.
- Loud progress indicators. Prefer a calm bar or a simple "3 of 8" label.

---

## Iconography

We use **Lucide** (stroke-based, 1.5px stroke weight, `24px` default) as the icon system. It matches the warm, editorial register — neither sharp-corporate nor playful — and is CDN-available so there's no font to ship.

### Rules

- **Stroke weight**: 1.5px. Do not use Lucide's default 2px — it reads too heavy against Manrope.
- **Size**: 20px inline with body, 24px in nav, 32–40px in feature grids. Never smaller than 16px.
- **Colour**: icons inherit text colour (`currentColor`). Copper only when an icon is part of a brand moment (e.g. the logo glyph, a pull-quote bullet). Never multicoloured.
- **Pairing with text**: 8px gap. Icon optically centred on the cap height, not the baseline.
- **Never fill**. Lucide is stroke-only in our usage.

### Usage

Load via CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="music" stroke-width="1.5"></i>
<script>lucide.createIcons();</script>
```

Common icons used by this brand: `music`, `mic`, `calendar`, `headphones`, `heart`, `user`, `users`, `arrow-right`, `check`, `chevron-down`, `play`, `pause`.

### Emoji & unicode

Not used. If you feel tempted to reach for 🎵, stop — use `data-lucide="music"` instead.

### Logo mark

The brand mark is a soft concentric-circle glyph suggesting a speaker cone / vinyl groove / resonance ring, rendered in copper at full colour, charcoal for monochrome contexts. See `assets/logo.svg` and `assets/logomark.svg`.

---

Missing font files are substituted from Google Fonts (see `fonts/README.md`). Please flag if you have licensed type preferences so we can swap them in.
