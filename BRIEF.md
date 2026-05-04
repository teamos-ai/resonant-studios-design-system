# Resonant Studios — design system brief

> **Single source of truth.** If anything in this file conflicts with another doc in this repo, this file wins. Update it deliberately when decisions change.

Last updated: 2026-05-02

---

## What Resonant Studios is

A boutique, NDIS-aligned music production studio in Melbourne's west — Werribee / Wyndham / Hoppers Crossing / Point Cook. Domain: `resonantstudios.com.au`. Founded by **Tony Rako**, who brings 25+ years of professional music production experience and lived disability experience to the work.

Each participant works through a 12-week program (weekly 3-hour sessions) toward a finished, professionally produced song released on Spotify under their own name. The studio sits deliberately between two things it is not: it's not a recording studio for hire, and it's not a clinical music-therapy service. It's a structured support service delivered by a working musician.

NDIS specifics:

- **Unregistered provider.** Serves self-managed and plan-managed participants only.
- **Line item:** `04_104_0125_6_1` (Capacity Building — Social, Community and Civic Participation), $70.23/hour weekday day rate, $210.69 per 3-hour session.
- **Lead magnet:** free 30–45 minute discovery call (phone or Zoom).

## Audience

Two registers, one system.

| Audience | Surface | Register |
|---|---|---|
| **Participants** (and families/carers) | Home, For Participants, Stories, Discovery call form | Warm, affirming, informal. "Your song. Your story. Your way." |
| **Support coordinators + plan managers** | For Support Coordinators, FAQ, intake docs | Professional, structured, NDIS-literate. Lead with outcomes, line items, plan-goal alignment. |

Both registers run through the same components — variant via copy, not via separate components.

## Brand essence

**Adjectives:** warm · crafted · calm · accessible · professional · human · *premium but not exclusive.*

**Master tagline:** *Your song. Your story. On Spotify.*

**Tone of voice in one line:** a structured support service delivered by musicians. Warm but clear. Outcome-focused. Never sales-y. Never framed as studio hire. Never clinical.

## Locked design decisions

### 1. Colour direction (Round 1)

**Direction B — "Field Recording"**, dual-mode, dark default.

| Role | Light mode | Dark mode |
|---|---|---|
| Background | `#EDE9DF` linen | `#181C1F` slate |
| Elevated surface | `#FFFFFF` | `#22272B` |
| Sunken | `#DDD7C8` | `#131618` |
| Ink | `#1F1E1B` | `#E6E8EA` |
| **Primary (CTA)** | `#C76F46` terracotta | `#E58F66` lifted terracotta |
| **Secondary** | `#728C73` forest | `#9BB89C` lifted forest |
| Accent | `#4A4F5C` slate | `#8C95A8` lifted slate |
| Success | `#6F8C6A` | `#A8CFA1` |
| Warning | `#C48A3A` | `#E8C07A` |
| Error | `#9C4A3C` | `#E89A88` |

Pure `#000` is **forbidden** — it causes halation for users with astigmatism. Warm dark only.

> **Image-overlay carve-out.** When content sits on top of a real photograph (hero scrims, SectionDivider scrims, captions on photographic surfaces), the no-#000 rule is suspended. Photo scrims read as flat dim against the image, not as banded surfaces, and the cream `--ink-on-image` (`#F5EFE4`) avoids tinting white text with terracotta or sage casts. Two tokens enforce the standard cases — `--ink-on-image` and `--scrim-image` (`rgba(0,0,0,0.58)`). Gradient color stops and `text-shadow` blurs may continue to use raw `rgba(0,0,0,X)` inline as a consequence (gradient stops aren't separately addressable as tokens). This carve-out applies *only* to overlays on photographs, never to UI surfaces.

**Light-mode contrast note (added 2026-05-02).** `--primary` and `--secondary` light-mode mappings were stepped one notch deeper (`terra-500` → `terra-600`; `forest-500` → `forest-600`) so that white-on-button text clears WCAG AA (4.5:1) at body size — `terra-600 + #FFF = 6.77:1`, `forest-600 + #FFF = 6.10:1`. `--ink-soft` light alpha was raised `0.46` → `0.65` so caption/footnote copy clears AA on the linen-100 surface. Hover and pressed shifted one step deeper to keep the staircase intact. Dark-mode tokens unchanged.

The original brand-guidelines draft asked for "warm orange + corporate blue / deep navy." Direction B is the agreed evolution: terracotta is the warm orange; slate carries the cool/professional/trust load that navy was meant to do, sitting more naturally with the warm acoustic register.

### 2. Typography (locked from handoff)

Two faces only:

- **DM Serif Display** — H1–H3, pull quotes, display numerals, song titles. Italic cuts are signature.
- **Manrope** — body, UI, buttons, labels, captions, numerals, tabular-nums for code/hex/session codes.
- **Atkinson Hyperlegible** — opt-in dyslexia-friendly body face via the accessibility menu.

### 3. Token discipline (Round 3)

Three-tier model:

1. **Primitive** — raw tones (`--terra-300`, `--forest-500`). Never referenced in components.
2. **Semantic** — role tokens (`--primary`, `--bg`, `--ink`). Components consume these only.
3. **Component** — per-component overrides (`--btn-primary-bg`). Reserved; added only when a 4th identical override appears.

**Hard rules:**

- No hex codes in component files. Ever.
- No primitive tokens in component files.
- Mode switching = swap tier-2 values; never edit components.
- One-off inline `style={{}}` must reference tier-2 tokens only.

### 4. Component scope (Round 2)

**v1 (ship-blocking):** Button · Card · Input · Field · Badge · Eyebrow · Heading · Lead · Container · Section · Stack · Cluster · SkipLink · Logo · Avatar · PullQuote · AccessibilityMenu · FormShell · SchedulerShell · PhaseTracker · AcknowledgementOfCountry · ValidationSummary · AudioPlayer

**v1.1 (deferred to portal kickoff):** Tabs · Accordion · Modal · Tooltip · Toast · Breadcrumb · DateTimePicker · EmptyState · ProgressBar · LayeredDemoPlayer (the hero acapella→full-mix audio build).

**Cut from system entirely:** Nav and Footer are marketing-site one-offs at `app/components/site/`, not in the system.

### 5. Accessibility floor (Round 1, locked)

| Area | Commitment |
|---|---|
| WCAG target | **2.2 AA** minimum across all interactive surfaces; **AAA** body contrast for long-form (7:1) |
| Touch targets | 48×48px minimum for journey-advancing actions (Material spec, exceeds Apple's 44×44). `Button size="sm"` is an explicit carve-out at 44×44 (WCAG 2.5.5 AA floor) — reserved for dense, non-primary actions inside forms or cards. |
| Focus rings | 2px primary outline + 2px offset, always visible, never `outline: none` |
| Reduced motion | `prefers-reduced-motion: reduce` always honoured — transforms collapse, only opacity transitions remain |
| Increased contrast | `prefers-contrast: more` honoured — borders thicken, shadows strengthen |
| Easy-read mode | User-toggleable: 1.125rem body, 45ch measure, simpler microcopy, more whitespace |
| Dyslexia-friendly font | Optional toggle to **Atkinson Hyperlegible** |
| Forms | Visible labels always, never placeholder-as-label, error messages with `role="alert"` |
| Skip link | First focusable element on every page, visible on focus |
| Audio | Never autoplay; transcript link mandatory; captions for any video |
| Heading hierarchy | One `h1` per page, no skipped levels — enforced via `<Heading>` component |
| Language attribute | `lang="en-AU"` |
| Reduced data | `prefers-reduced-data` honoured — heavy hero imagery becomes solid colour |

### 5b. Shape language (Round 4e, locked)

**Rounded squares, not pills.** The system avoids fully circular pill shapes for chips, badges, nav links, and buttons. They read as "rounded squares" — the corner softening is present but the form stays rectilinear.

| Element | Radius |
|---|---|
| Buttons | `--r-2` (10px) |
| Inputs | `--r-2` (10px) |
| Badges / chips / nav links | `--r-2` (10px), aliased as `--r-chip` |
| Cards (default) | `--r-3` (14px) |
| Feature cards | `--r-4` (20px) |
| Floating nav | `--r-4` (20px) |
| Hero cards | `--r-5` (28px) |

**Reserved for genuinely circular elements only:** avatars, switch tracks, status dots, audio play buttons. These use `--r-pill` (999px) — a circle by intent, not a default.

This guidance carries forward to the website build: when we hit a "should this be pill-shaped or rounded-square?" decision, default to rounded-square unless the element is a face / toggle track / dot.

### 6. Motion philosophy (Round 1, locked)

| Rule |
|---|
| Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo) only. No springs, no bounces. |
| Durations: 140ms micro · 220ms component · 420ms scene |
| Entrance: fade + 4–8px Y-rise. Exit: fade only (no Y). |
| Hover: background colour shift; never transform on text-bearing elements. |
| Press: `scale(0.98)` on buttons only. |
| Focus: instant — never animate focus rings. |
| Forbidden: parallax · auto-rotating carousels · auto-playing video · loops > 5s · animated GIFs |
| Reduced motion: all transforms → static; durations → 0; opacity-only |

### 7. Voice in components (Round 3)

Brand voice is enforced as component contracts, not just guidance.

**Banned words:**

- **Hospital / clinical / doctor register** (everywhere): `patient` · `treatment` · `therapy` · `therapist` · `clinical` · `clinician` · `intervention` · `modality` · `diagnosis` · `disorder` · `condition` · `disability services`
- **Industry / commodity register** (NDIS-facing copy): `music therapy` · `studio hire` · `music production services` · `clients` · `users`
- **Sales register** (CTAs): `Get Started` · `Sign Up Now` · `Limited Time` · `Don't Miss Out` · trailing `!`

**Approved core terms:** `participant` · `you` · `your song` · `your story` · `discovery call` · `session` · `support coordinator` · `plan manager` · `self-managed` · `plan-managed` · `studio` · `track` / `song`.

**Founder name — strict rule.** The studio's founder is referred to as **Tony** in all public-facing surfaces, design-system content, AI-generated copy, marketing assets, business cards, social bios, voice contracts, and component examples. Never `Antony`, `Anthony`, `Mr Rako`, or `Antony Rako`. Approved forms: `Tony` (most contexts) · `Tony Rako` (formal — invoices, legal, NDIS plan documents). When generating new copy, components, or assets from this design system — including any AI-assisted output — always default to `Tony`. This rule overrides all prior uses of `Antony` anywhere in this repo.

**Plain English Australia readability targets:**

| Rule | Threshold |
|---|---|
| Reading age (participant copy) | Year 7 max (Flesch-Kincaid Grade Level ≤ 7) |
| Sentence length | Avg ≤ 18 words, max 24 |
| Voice | Active by default |
| Word choice | Saxon over Latinate (use/help/buy, not utilise/facilitate/purchase) |
| Acronyms | Spell out on first use ("NDIS — National Disability Insurance Scheme") |
| Numerals | UI: numerals always. Body: words for 1–9. |
| Directionals | "Below" / "above" forbidden — use "next" / "previous" |

**Microcopy contracts:**

- **Button label:** verb phrase, sentence case, no `!`, no exclamation. Default tone: warm command.
- **Field error:** plain language, never blame, tells user *what to do*.
- **Field hint:** preventive, helps before error.
- **Empty state:** calm description + who/how unblocks it.
- **Loading:** plain ("Loading…", "One moment.") — never "Hold tight!"
- **Confirm dialog:** specific verbs ("Cancel session" + "Keep session"), never "OK / Cancel".
- **Toast:** important info never auto-dismisses.
- **Avatar fallback:** initials in display face, never emoji.
- **Time:** 12-hour, lowercase am/pm, no leading zero ("2:00 pm").
- **Date:** natural language ("Tuesday 6 May").
- **Required indicator:** visible `*` + `aria-required="true"` + sr-only "Required".

### 8. Integrations

- **Forms:** embed Go High Level forms inside a `<FormShell>`. CSS snippet in `app/design-system/integrations/ghl.css` maps GHL selectors to system tokens.
- **Scheduler:** embed Go High Level calendar inside a `<SchedulerShell>`. Same CSS approach. Minimum lead-time enforced in GHL config (no same-week bookings).
- **Spotify:** every participant's finished track lives on Spotify under their name — surfaced via the audio player and `<PullQuote>` patterns.

### 9. Folder structure

```
app/
├── components/
│   ├── ui/                # Design-system primitives (the system)
│   └── site/              # Marketing one-offs (Nav, Footer, Hero) — not in the system
├── design-system/         # /design-system route — live styleguide
└── (other routes)
public/
├── fonts/                 # DM Serif Display, Manrope (TTF)
└── assets/                # Logos, marks, paper grain
handoff/                   # Original Claude Design bundle + playbook PDFs (canonical reference)
BRIEF.md                   # This file
```

## Pages confirmed

From the brand guidelines:

1. Home
2. For Participants
3. For Support Coordinators
4. How It Works
5. FAQ
6. Contact / Book

Primary CTA on every page: **"Book a free discovery call"** (sentence case).
Secondary CTA on referrer-facing pages: **"Refer a participant."**

## Imagery direction

- Subjects: Tony's actual gear — keyboard, drum pads, condenser microphone. Hands on instruments. Textured walls. Studio detail shots.
- Grading: warm, natural, slightly desaturated. Shadows hold colour.
- **Forbidden:** stock smiling-headshot photography · neon-lit producer studios · clinical hospital imagery · groups high-fiving / laughing · overly processed HDR.
- Crop generously.

## Iconography

Lucide icons, **1.5px** stroke weight (not 2px default), `currentColor` only. Sizes: 20px inline body, 24px nav, 32–40px feature grids. Never smaller than 16px. Never multi-coloured. Never filled.

## Business goals (FYI for product decisions)

- $50,000 revenue in first 12 months. ~$4,200/mo by month 12.
- 10–15 unique participants in year 1; 5+ becoming long-term (6+ months).
- Admin time under 5 hours/week by month 6 (automation in GHL).
- 3–5 support-coordinator referrals per month.
- 60%+ discovery-call → first-session conversion rate.

## Locked logo (2026-05-02)

The eighth-note R glyph is the canonical mark. Four files live under `public/library/logos/`:

| File | Use on |
|---|---|
| `wordmark-on-light.png` | Light surfaces (`--bg` in light mode). The default web wordmark. |
| `wordmark-on-dark.png` | Dark surfaces (`--bg` in dark mode). |
| `mark-on-light.png` | Favicon, app icon, social avatar — light backgrounds. |
| `mark-on-dark.png` | Same — dark backgrounds. |

The `<Logo>` primitive auto-swaps between the on-light / on-dark variants via the `.rs-logo--on-light` / `.rs-logo--on-dark` CSS classes — same precedence chain as the colour tokens (manual `data-theme` wins, OS preference falls through). Force a fixed tone with `tone="light"` or `tone="dark"` only when the surface colour is fixed regardless of theme (e.g. a brand sticker on a coloured card).

The legacy concentric-circles SVG at `public/assets/logo.svg` is deprecated; remove on next pass.

## Open items / TBD

- Photography: replace placeholder gradient hero with real studio shots once available.
- Spotify integration spec: how/where the participant's finished track surfaces (audio player UI + Spotify deep link).
- Acknowledgement of Country exact wording — currently using a generic Wadawurrung + Bunurong default; needs Tony's preferred phrasing.
