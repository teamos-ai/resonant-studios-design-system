import { forwardRef, type HTMLAttributes } from "react";

export type PullQuoteProps = HTMLAttributes<HTMLElement> & {
  /** Attribution text (name, role, project). Optional. */
  attribution?: React.ReactNode;
  /** Visual size. `md` (default) for inline editorial, `lg` for hero callouts. */
  size?: "md" | "lg";
};

const sizeFs: Record<NonNullable<PullQuoteProps["size"]>, string> = {
  md: "clamp(1.5rem, 2.4vw, 2rem)",
  lg: "clamp(2rem, 3.4vw, 2.8rem)",
};

const PullQuote = forwardRef<HTMLElement, PullQuoteProps>(function PullQuote(
  { attribution, size = "md", style, children, ...rest },
  ref,
) {
  return (
    <figure ref={ref} style={{ margin: 0, ...style }} {...rest}>
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: sizeFs[size],
          lineHeight: 1.2,
          letterSpacing: "-0.015em",
          color: "var(--ink)",
        }}
      >
        {children}
      </blockquote>
      {attribution && (
        <figcaption
          style={{
            marginTop: "var(--s-3)",
            fontSize: "var(--fs-small)",
            color: "var(--ink-muted)",
          }}
        >
          {attribution}
        </figcaption>
      )}
    </figure>
  );
});

export default PullQuote;
