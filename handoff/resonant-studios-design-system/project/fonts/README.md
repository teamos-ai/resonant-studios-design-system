# Fonts

## In use

| Role | Family | Source |
|---|---|---|
| Display / headings | **DM Serif Display** (Regular + Italic) | `DMSerifDisplay-Regular.ttf`, `DMSerifDisplay-Italic.ttf` — uploaded brand files |
| Body / UI | **Manrope** (200 / 300 / 400 / 500 / 600 / 700 / 800) | All seven TTFs in this folder — uploaded brand files |
| Mono / numerals (rare) | **Manrope** with `font-variant-numeric: tabular-nums` | Same Manrope files |

## Notes

DM Serif Display is a single-weight face (Regular + Italic). The CSS type scale declares `font-weight: 500` on headings for historical reasons — the browser falls back to 400 gracefully. If you need heavier weight differentiation, use size + italic rather than weight.

Body and mono: Manrope is now uploaded and wired up via @font-face. Only JetBrains Mono remains as a Google Fonts substitute — if Resonant has a licensed monospace, drop it here and we'll swap it the same way.
