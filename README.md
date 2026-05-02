# Resonant Studios — website

Music-based NDIS support delivered with the warmth of a working studio and the rigour of a structured service.

This repository is the production website for Resonant Studios, built in Next.js (App Router) with the Resonant Design System. Designed for handoff via GitHub and deployment via Vercel.

## Stack

- **Next.js 15** (App Router, React 18, TypeScript)
- **CSS custom properties** for design tokens (no Tailwind, no CSS-in-JS runtime)
- **Self-hosted fonts** — DM Serif Display (display) and Manrope (body/UI)
- **lucide-react** for icons (1.5px stroke, currentColor)

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is Vercel-ready. After pushing to GitHub:

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `next build`
4. Output: `.next`
5. Deploy.

No environment variables are required for the marketing site.

## Project structure

```
.
├── app/
│   ├── layout.tsx          # Root layout (metadata, body)
│   ├── page.tsx            # Marketing home
│   ├── globals.css         # Design tokens + base styles + paper-grain overlay
│   └── components/         # Page sections (Nav, Hero, HowItWorks, …)
├── public/
│   ├── fonts/              # DM Serif Display + Manrope (TTF)
│   └── assets/             # Logos, marks, paper-grain
├── handoff/                # Original design bundle (source of truth)
│   └── resonant-studios-design-system/
└── …
```

## Design system

The canonical design tokens live in `handoff/resonant-studios-design-system/project/colors_and_type.css`. The runtime copy in `app/globals.css` mirrors it 1:1 (with `/fonts/...` / `/assets/...` paths adapted for Next.js `public/`).

Refer to `handoff/resonant-studios-design-system/project/README.md` for:

- Brand voice and content rules (sentence case, second person, no emoji…)
- Visual foundations (colour, type, grain, radii, motion, spacing)
- Iconography (Lucide, 1.5px stroke)

If you change tokens, change them in **both** files or refactor `globals.css` to `@import` the canonical CSS.

## Components on the marketing home

| Section      | File                              | Purpose                                 |
| ------------ | --------------------------------- | --------------------------------------- |
| Nav          | `app/components/Nav.tsx`          | Sticky top nav with brand mark + CTAs   |
| Hero         | `app/components/Hero.tsx`         | Headline, lead, CTAs, hero card         |
| How it works | `app/components/HowItWorks.tsx`   | 3-step explainer cards                  |
| Journey      | `app/components/Journey.tsx`      | Phase tracker (Lucide icons, 3 states)  |
| NDIS block   | `app/components/NdisBlock.tsx`    | Funding paths (plan / self / coord)     |
| Story        | `app/components/Story.tsx`        | Pull-quote, audio preview               |
| CTA band     | `app/components/CtaBand.tsx`      | Final intro-call CTA                    |
| Footer       | `app/components/Footer.tsx`       | Sitemap, acknowledgement of country     |

## House rules (summary)

- Warm dark surfaces (`#000` / `#1A1A1A`), white ink, copper as primary CTA
- DM Serif Display for headings (italic for emphasis); Manrope everywhere else
- Paper grain overlay at 4% opacity on body via `::before`
- Out-expo easing, 140/220/420ms — no bounces, no springs
- Sentence case, second person ("you"), no emoji, no producer-speak

See the design system README for the full set.

## License

Proprietary — Resonant Studios.
