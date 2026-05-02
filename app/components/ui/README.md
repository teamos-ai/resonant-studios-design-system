# Resonant Studios — UI primitives

> Design-system primitives. Reusable across the marketing site and the participant portal. Tokenised, accessible, voice-checked. See [`/BRIEF.md`](../../../BRIEF.md) for the canonical decisions these implement.

## Quick start

```tsx
import { Button, Card, Field, Input, Stack, Heading, Lead } from "@/app/components/ui";

export default function Example() {
  return (
    <Card pad="lg" elevation="md">
      <Stack space={4}>
        <Heading level="h2">Tell us a little about you.</Heading>
        <Lead>Thirty minutes, no commitment.</Lead>
        <Field label="Email" required hint="We'll only use this to send your session reminders.">
          <Input type="email" placeholder="you@example.com" />
        </Field>
        <Button>Book a free discovery call</Button>
      </Stack>
    </Card>
  );
}
```

## Hard rules

1. **Never reference primitive tokens** (`--terra-300`, `--linen-100`) inside a component file. Always tier-2 semantic (`--primary`, `--bg`, `--ink`).
2. **Never inline hex codes.** A linter check lands in round 4c.
3. **Always forward `aria-*` and `data-*`** through `...rest`. Accessibility hooks must reach the DOM.
4. **Always accept `className`** as an escape hatch — discouraged but available.
5. **Reach the 48 px touch target** for any interactive element a participant taps to advance the journey (`min-height: 48px` from token `--tap-target`). The `Button` size `sm` (44 px) is an explicit carve-out at the WCAG 2.5.5 AA floor — reserve for dense, non-primary actions inside forms and cards. Never the journey-advancing CTA.
6. **Voice rules are component contracts**, not guidelines. See `Button` (warns on trailing `!` in dev) and `Field` (refuses to show hint + error simultaneously).

## Inventory (v1)

### Layout

| Component | Purpose | Key props |
|---|---|---|
| `Container` | Width-constrained wrapper | `width: "content" \| "editorial" \| "prose"` (1200/1040/680) |
| `Section` | Vertical-padded surface band | `tone: "default" \| "elevated" \| "sunken"` · `pad: "sm" \| "md" \| "lg"` |
| `Stack` | Vertical flex with token gap | `space: 1–10` (maps to `--s-{n}`) · `align` |
| `Cluster` | Horizontal flex with wrap | `space: 1–10` · `align` · `justify` · `wrap` |

### Typography

| Component | Purpose | Key props |
|---|---|---|
| `Heading` | h1–h4 + display | `level` controls visual size · `as` controls rendered tag (use to keep outline correct) |
| `Lead` | Oversized intro paragraph | — |
| `Eyebrow` | Uppercase kicker | `tone: "primary" \| "secondary" \| "muted"` |

### Forms

| Component | Purpose | Key props |
|---|---|---|
| `Input` | Text/email/tel input | `invalid` (sets `aria-invalid`) |
| `Textarea` | Multi-line input | `invalid` |
| `Field` | Label + control + hint/error wrapper | `label` (required) · `required` · `hint` **OR** `error` (mutually exclusive) |
| `ValidationSummary` | Top-of-form error roll-up | `errors: { fieldId, message }[]` — focuses programmatically when populated |

### Surfaces

| Component | Purpose | Key props |
|---|---|---|
| `Card` | Bordered surface with shadow | `elevation: "flat" \| "sm" \| "md" \| "lg"` · `pad: "none" \| "sm" \| "md" \| "lg"` · `radius: 3 \| 4 \| 5` |
| `Badge` | Pill chip | `tone: 7 options` · `size: "sm" \| "md"` |

### Interactive

| Component | Purpose | Key props |
|---|---|---|
| `Button` | Primary action | `variant: "primary" \| "secondary" \| "ghost" \| "tertiary"` · `size: "sm" \| "md" \| "lg"` · `loading` |
| `SkipLink` | First-focusable bypass | `href` (default `#main`) |
| `AccessibilityMenu` | Sticky-nav a11y settings | None — self-contained, persists to localStorage |

### Brand

| Component | Purpose | Key props |
|---|---|---|
| `Logo` | Concentric-ring mark + wordmark | `variant: "full" \| "mark"` · `tone: "primary" \| "ink" \| "current"` · `size` |
| `Avatar` | Initial-fallback avatar | `name` (required) · `src` (optional) · `size` · `tone` |
| `PullQuote` | Italic display-face callout | `attribution` · `size: "md" \| "lg"` |
| `AcknowledgementOfCountry` | First Nations acknowledgement | `children` (override default Wadawurrung + Bunurong text) |

### Embeds

| Component | Purpose | Key props |
|---|---|---|
| `FormShell` | GHL form wrapper | `eyebrow` · `title` · `description` · `footnote` · `children` (the embedded form) |
| `SchedulerShell` | GHL calendar wrapper | `eyebrow` · `title` · `description` · `context` · `children` (the iframe) · `footnote` |

## Voice contract

Each component below enforces a brand voice rule:

| Component | Enforces |
|---|---|
| `Button` | Dev warning if `children` ends with `!`. Sentence case expected. |
| `Field` | Hint and error mutually exclusive. Required indicator is visible `*` + `aria-required` + sr-only "Required". |
| `Avatar` | Initials in display face only. Refuses emoji-shaped content. |
| `AcknowledgementOfCountry` | Defaults to Wadawurrung + Bunurong (Werribee/Wyndham). Override with `children` for specific contexts. |

## Variant philosophy

Variants follow Material/Apple convention: **string unions, not enums**. This keeps the type narrow and the autocomplete useful:

```tsx
<Button variant="primary" size="lg">…</Button>
<Card elevation="md" pad="lg">…</Card>
<Badge tone="success">…</Badge>
```

Don't add a variant unless **two distinct callsites** need it. Three identical inline overrides = promote to variant.

## Accessibility

Every component meets the round-1 accessibility floor (see [`/BRIEF.md`](../../../BRIEF.md) → "Accessibility floor"). Specifics worth noting:

- **`Button`** — sets `disabled` AND `aria-disabled` AND `aria-busy` (when loading). Spinner is `aria-hidden`.
- **`Field`** — generates an ID if one isn't provided, wires `aria-describedby` to hint OR error, sets `aria-invalid`, sets `aria-required`.
- **`ValidationSummary`** — `role="alert"`, `tabIndex={-1}`, programmatically focused when errors arrive.
- **`SkipLink`** — visible only on focus (transform-based), never `display: none`.
- **`AccessibilityMenu`** — keyboard-navigable, `aria-expanded`, `role="dialog"`, closes on Escape and click-outside.
- **`Avatar`** — `role="img"` with accessible name (the `name` prop). Image has empty `alt` since name is on the wrapper.

## What's NOT here

These intentionally live in `app/components/site/` (marketing one-offs, not in the system):

- `SiteNav`, `SiteFooter` — compose system primitives, surface-specific copy
- `SiteHero` — same logic

These are **deferred to v1.1** when the participant portal kicks off:

- `Tabs`, `Accordion`, `Modal`, `Tooltip`, `Toast`, `Breadcrumb`
- `DateTimePicker` (using GHL embed for v1)
- `EmptyState`, `ProgressBar`
- `LayeredDemoPlayer` (the hero acapella → full-mix build)
- `PhaseTracker` (the journey component)
- `AudioPlayer` (with mandatory transcript link)

## Files

```
app/components/ui/
├── AccessibilityMenu.tsx
├── AcknowledgementOfCountry.tsx
├── Avatar.tsx
├── Badge.tsx
├── Button.tsx
├── Card.tsx
├── Cluster.tsx
├── Container.tsx
├── Eyebrow.tsx
├── Field.tsx
├── FormShell.tsx
├── Heading.tsx
├── Input.tsx        # exports Input + Textarea
├── Lead.tsx
├── Logo.tsx
├── PullQuote.tsx
├── SchedulerShell.tsx
├── Section.tsx
├── SkipLink.tsx
├── Stack.tsx
├── ValidationSummary.tsx
├── README.md        # this file
└── index.ts         # barrel export
```

## See it live

`/design-system` — overview · `/design-system/foundations` · `/design-system/components` · `/design-system/voice` · `/design-system/accessibility`
