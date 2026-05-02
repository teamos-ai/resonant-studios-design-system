import { forwardRef, type HTMLAttributes } from "react";

export type EyebrowTone = "primary" | "secondary" | "muted";

export type EyebrowProps = HTMLAttributes<HTMLDivElement> & {
  /** Colour role. `primary` = copper terracotta (default), `secondary` = forest, `muted` = ink-muted. */
  tone?: EyebrowTone;
  /** Render as a different element. Supports semantic headings — use `h3` / `h4` when an Eyebrow is acting as a section sub-heading so screen-reader users can navigate by heading. */
  as?: "div" | "span" | "p" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const toneMap: Record<EyebrowTone, string> = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  muted: "var(--ink-muted)",
};

const Eyebrow = forwardRef<HTMLDivElement, EyebrowProps>(function Eyebrow(
  { tone = "primary", as: Tag = "div", style, children, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref as never}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-micro)",
        fontWeight: 600,
        letterSpacing: "var(--track-eyebrow)",
        textTransform: "uppercase",
        color: toneMap[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Eyebrow;
