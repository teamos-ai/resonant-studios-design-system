import { type ReactNode } from "react";
import Card from "./Card";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";

export type SchedulerShellProps = {
  /** Eyebrow above the heading. Optional. */
  eyebrow?: ReactNode;
  /** Heading text. Display face. */
  title: ReactNode;
  /** Rendered heading element. Default `h2` for marketing pages. Pass a deeper level (e.g. `h5`) when the shell is nested inside a styleguide demo so the document outline stays clean. */
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Lead paragraph below the heading. Optional. */
  description?: ReactNode;
  /** Left-column content — meta list, accessibility note, etc. Optional. */
  context?: ReactNode;
  /** Right-column content — calendar grid + time slots. Typically a GHL iframe. */
  children: ReactNode;
  /** Footnote (timezone, confirmation note). Optional. */
  footnote?: ReactNode;
};

/**
 * Frame for the embedded scheduler (Go High Level calendar). Two-column
 * layout: left = human-readable context, right = the calendar widget.
 * Surrounding chrome belongs to the system; the iframe sits inside it.
 *
 * On narrow viewports the columns stack.
 */
export default function SchedulerShell({
  eyebrow,
  title,
  titleAs = "h2",
  description,
  context,
  children,
  footnote,
}: SchedulerShellProps) {
  return (
    <Card pad="lg" elevation="md" radius={4}>
      <div style={{ marginBottom: "var(--s-5)" }}>
        {eyebrow && <Eyebrow style={{ marginBottom: 10 }}>{eyebrow}</Eyebrow>}
        <Heading level="h2" as={titleAs} style={{ fontSize: 26 }}>{title}</Heading>
        {description && (
          <p style={{ color: "var(--ink-muted)", fontSize: 14, lineHeight: 1.55, marginTop: 10, maxWidth: 480 }}>{description}</p>
        )}
      </div>
      <div
        className="grid-2"
        style={{
          display: "grid",
          /* Auto-stack on narrow widths via grid-template-columns + minmax — the calendar (right) needs ~280px floor. */
          gridTemplateColumns: context ? "minmax(240px, 1fr) minmax(280px, 1fr)" : "1fr",
          gap: "var(--s-6)",
          alignItems: "start",
        }}
      >
        {context && <div>{context}</div>}
        <div>{children}</div>
      </div>
      {footnote && (
        <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: "var(--s-4)", lineHeight: 1.5 }}>{footnote}</p>
      )}
    </Card>
  );
}
