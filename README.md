# Resonant Studios — Design System

Design tokens, UI primitives, voice contracts, and accessibility commitments for the Resonant Studios brand. The whole system is exposed as a live styleguide route built with Next.js 15 (App Router).

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000/design-system](http://localhost:3000/design-system).

The bare root (`/`) redirects to the styleguide, so any deployment of this repo will land visitors directly on the system.

## Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint        # next lint (TS + React rules)
npm run lint:copy   # Plain English Australia readability check on UI strings
```

## What's here

| Path | Purpose |
| ---- | ------- |
| `app/globals.css` | Three-tier token system (primitive → semantic → component). Theme-aware; dark default, manual `data-theme` override or OS-follow. |
| `app/components/ui/` | The 23 v1 primitives — Button, Card, Field, Input, Heading, AccessibilityMenu, ValidationSummary, FormShell, SchedulerShell, etc. All consume tier-2 semantic tokens only; never a hex code. |
| `app/design-system/` | The live styleguide route. Six sections: Foundations, Components, Voice, Examples, Accessibility, Library. |
| `public/library/` | Reference imagery (studio, equipment, participants, hero, mood) consumed by the Library section and the in-context Examples. |
| `public/fonts/` | Self-hosted DM Serif Display + Manrope. |
| `BRIEF.md` | Canonical source of truth — locked decisions on colour, typography, motion, shape, voice, and accessibility floor. If anything in source disagrees with the BRIEF, the BRIEF wins. |
| `.impeccable.md` | Project design context derived from the BRIEF, used by the impeccable family of design skills. |
| `scripts/readability-check.mjs` | Flesch-Kincaid + Plain English Australia checks against UI copy. |

## House rules (the short list)

- **Tokens:** components consume tier-2 (`var(--primary)`, `var(--ink)`) only. No hex in component files. No primitive token (`--terra-300`, `--linen-100`) in component files. Mode switching = swap tier-2 values; never edit components.
- **Shape language:** rounded squares, not pills. `--r-pill` is reserved for genuinely circular elements (avatars, switch tracks, status dots, audio play buttons).
- **Motion:** out-expo only — `cubic-bezier(0.22, 1, 0.36, 1)`. Three durations: `140ms` micro · `220ms` component · `420ms` scene. No springs, no bounces.
- **Accessibility:** WCAG 2.2 AA across all interactive surfaces; AAA body contrast for long-form. 48 px touch targets (Material spec). Focus rings always visible — `outline: none` is forbidden. `prefers-reduced-motion`, `prefers-contrast: more`, `prefers-reduced-data` all honoured.
- **Voice:** brand voice is enforced as a component contract, not guidance. Button warns in dev for trailing `!`. Field refuses to render hint and error simultaneously. Banned-word list is in BRIEF §7.

See `BRIEF.md` and `app/components/ui/README.md` for the full spec.

## Stack

- Next.js 15 (App Router) · React 18 · TypeScript
- CSS custom properties for tokens (no Tailwind, no CSS-in-JS runtime)
- `lucide-react` for icons (1.5 px stroke, `currentColor`)
- Self-hosted fonts via `@font-face` with `font-display: swap`

## License

Proprietary — Resonant Studios.
