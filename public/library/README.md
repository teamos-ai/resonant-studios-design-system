# Resonant Studios — image library

Reference imagery for the website build. Drop images here, name them properly, then add an entry to `manifest.json`. The design system reads the manifest and renders everything in the **05 · Library** section at `/design-system#library`.

## How to add an image

1. **Drop the image** in the right category folder. Folders are loose — pick the closest match:
   - `hero/` — big landing-page heroes
   - `studio/` — the working studio (walls, surfaces, atmosphere)
   - `equipment/` — instruments, mics, gear
   - `participants/` — hands on instruments, intimate detail (never group photos)
   - `mood/` — texture, light, material reference for grading + tone
   - `ui-inspiration/` — reference UI / typography / layout from other sites
2. **Name the file** with hyphens, no spaces, no upper-case. Pattern: `<short-description>--<context>.<ext>`. Example: `condenser-mic--morning-light.jpg`.
3. **Add an entry** to `manifest.json` — see "Manifest format" below.
4. **Refresh** `/design-system#library`. The image and its tags should now appear.

## File format guidance

| What | Format | Reason |
|---|---|---|
| Photographs | `.jpg` (q 80–85), or `.webp` for production | Keep file size ≤ 400 KB for fast review |
| Illustrations / vector | `.svg` | Tiny + crisp at any size |
| UI screenshots | `.png` (no JPG artefacts on text) | Sharp text |
| Reference videos | not in library — link to Vimeo/YouTube in `notes` | Keep repo lean |

Max width 2400 px on desktop heroes; 1200 px is enough for everything else. The design system displays at 600 px max.

## Manifest format

`manifest.json` is the source of truth. The categories list shapes the filter chips; the images list is everything browseable.

```jsonc
{
  "version": 1,
  "categories": [
    { "id": "hero", "label": "Hero", "description": "Big hero shots." }
    // …
  ],
  "images": [
    {
      "filename": "studio/condenser-mic--morning-light.jpg",
      "title": "Condenser microphone, morning studio light",
      "category": "studio",
      "tags": ["microphone", "warm-light", "detail-shot"],
      "alt": "Side-on detail of a black condenser microphone with a soft window of morning light catching the grille.",
      "source": "Tony's studio · 2026-04",
      "notes": "Reference for the 'studio detail' direction in the brand README."
    }
  ]
}
```

### Required fields

| Field | What |
|---|---|
| `filename` | Path **under `public/library/`**, forward slashes, no leading slash. |
| `title` | Plain English. Sentence case. Used as the visible caption. |
| `category` | Must match a `categories[].id`. |

### Highly encouraged

| Field | What |
|---|---|
| `alt` | Descriptive alt text for accessibility. Required when the image goes into production use. |
| `tags` | Free-form. Filter chips in the library section are derived from these. |
| `source` | Where it came from (Tony's studio, photographer name, Unsplash link, etc.). |
| `notes` | Why this image is in the library. What it references. |
| `credit` | Photographer credit if licensed. Show under the image in the UI. |

## Voice rules apply to titles + alt text

- Sentence case ("Condenser microphone, morning light"), never Title Case
- No exclamation marks
- Descriptive, not interpretive ("hands on guitar fretboard" not "the moment of creation")
- Plain English. If you write "the participant", swap to "a participant" or describe what's actually shown.

## What NOT to put here

- People's faces unless we have explicit written consent. NDIS context — assume consent is needed.
- Stock-smiling-headshot photography. Editorial detail only.
- High-saturation HDR landscapes. Warm + slightly desaturated only.
- Logos of other companies (unless `category: "ui-inspiration"` and clearly attributed).
- Anything copyrighted that we don't have rights to.

## When the marketing site builds

The website's `<Image>` components will pull from the same manifest by `category` + `tags`. So adding an image here = it can be selected for production use immediately. No second copy.
