import { Badge, Card, Cluster, Stack } from "../../components/ui";
import { Block, PillarBlock, SectionOpener } from "./_shared";

const wcagFloor = [
  { area: "WCAG target", commitment: "2.2 AA minimum across all interactive surfaces. AAA body contrast for long-form (7:1)." },
  { area: "Touch targets", commitment: "48 × 48 px minimum (Material spec, exceeds Apple 44 × 44)." },
  { area: "Focus rings", commitment: "2 px primary outline + 2 px offset, always visible." },
  { area: "Heading hierarchy", commitment: "One h1 per page. Enforced by Heading component's level/as split." },
  { area: "Language", commitment: "<html lang='en-AU'> set globally." },
  { area: "Skip link", commitment: "First focusable element on every page." },
];

const accommodations = [
  { area: "Reduced motion", commitment: "prefers-reduced-motion always honoured. Transforms collapse, durations → 0." },
  { area: "Increased contrast", commitment: "prefers-contrast: more honoured. Borders thicken." },
  { area: "Reduced data", commitment: "prefers-reduced-data honoured. Heavy library imagery becomes solid swatches." },
  { area: "Easy-read mode", commitment: "User-toggleable: 1.125rem body, 45ch measure, more whitespace." },
  { area: "Dyslexia font", commitment: "Optional Atkinson Hyperlegible (Braille Institute, free)." },
];

const formsA11y = [
  { area: "Labels", commitment: "Visible labels always. Field component refuses to render without one." },
  { area: "Required indicator", commitment: "Visible '*' + aria-required + sr-only 'Required'." },
  { area: "Errors", commitment: "Plain language. role='alert'. Linked from validation summary." },
  { area: "Validation summary", commitment: "Programmatically focused when errors appear." },
  { area: "Focus return", commitment: "Popovers (e.g. AccessibilityMenu) return focus to their trigger when closed." },
];

export default function Accessibility() {
  return (
    <section id="accessibility" style={{ scrollMarginTop: 110 }}>
      <SectionOpener
        number="05"
        eyebrow="Accessibility"
        title="Load-bearing, not a polish pass."
        lead="For an NDIS business, accessibility isn't a checkbox at the end. These are concrete commitments — wired through the system at the token, component, and route level."
      />

      <Cluster space={2} justify="center" style={{ marginBottom: "var(--s-7)" }}>
        <Badge tone="success">WCAG 2.2 AA</Badge>
        <Badge tone="success">AAA body contrast</Badge>
        <Badge tone="success">48 px touch targets</Badge>
        <Badge tone="primary">en-AU</Badge>
      </Cluster>

      <Stack space={9}>
        <PillarBlock title="WCAG floor" sub="The minimum." rows={wcagFloor} />
        <PillarBlock title="Accommodations" sub="Beyond the minimum." rows={accommodations} />
        <PillarBlock title="Forms" sub="The hardest surface." rows={formsA11y} />

        <Block label="Verification" sub="How we keep it honest.">
          <Card pad="lg" elevation="flat">
            <p style={{ margin: 0, color: "var(--ink-muted)", lineHeight: 1.6 }}>
              Plain English Australia readability check runs via{" "}
              <code style={{ background: "var(--bg)", padding: "2px 6px", borderRadius: 4 }}>npm run lint:copy</code>.
              The Impeccable hardening pass ran 2026-05-02; current score 18.5 / 20 after fixes.
            </p>
          </Card>
        </Block>
      </Stack>
    </section>
  );
}
