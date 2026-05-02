import { type ReactNode } from "react";
import Card from "./Card";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";

export type FormShellProps = {
  /** Eyebrow above the heading. Optional. */
  eyebrow?: ReactNode;
  /** Heading text. Display face. */
  title: ReactNode;
  /** Rendered heading element. Default `h2` for marketing pages. Pass a deeper level (e.g. `h5`) when the shell is nested inside a styleguide demo so the document outline stays clean. */
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Lead paragraph below the heading. Optional. */
  description?: ReactNode;
  /** Footer note (privacy, what-happens-next). Optional. Sentence case, no '!'. */
  footnote?: ReactNode;
  /** Children render inside the shell. Either inline form fields or a GHL embed iframe. */
  children: ReactNode;
  /** Max width override. Default 640px (form-shaped). */
  maxWidth?: number | string;
};

/**
 * Frame for embedded forms (Go High Level or in-house). Provides the
 * surface, heading hierarchy, and microcopy contracts (privacy footnote,
 * voice rules) so embedded form HTML reads as part of the system.
 *
 * Pair with the GHL custom-CSS snippet at
 * `handoff/integrations/ghl-form.css` so GHL field markup inherits
 * tier-2 tokens.
 */
export default function FormShell({
  eyebrow,
  title,
  titleAs = "h2",
  description,
  footnote,
  children,
  maxWidth = 640,
}: FormShellProps) {
  return (
    <Card pad="lg" elevation="md" radius={4} style={{ maxWidth }}>
      <div style={{ marginBottom: "var(--s-6)" }}>
        {eyebrow && <Eyebrow style={{ marginBottom: 12 }}>{eyebrow}</Eyebrow>}
        <Heading level="h2" as={titleAs} style={{ fontSize: 30, lineHeight: 1.1 }}>{title}</Heading>
        {description && (
          <p style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55, marginTop: 12 }}>{description}</p>
        )}
      </div>
      <div>{children}</div>
      {footnote && (
        <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: "var(--s-4)", lineHeight: 1.5 }}>{footnote}</p>
      )}
    </Card>
  );
}
