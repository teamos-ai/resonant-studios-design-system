import { forwardRef, type HTMLAttributes, type ElementType } from "react";

export type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /** Visual size. Default `h2`. */
  level?: HeadingLevel;
  /** Override the rendered element while keeping styling. Defaults to the level (`h2` for level `h2`). Use to keep the document outline correct without a visual jump. */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
};

const sizeMap: Record<HeadingLevel, { fontSize: string; lineHeight: number }> = {
  display: { fontSize: "var(--fs-display)", lineHeight: 1.05 },
  h1: { fontSize: "var(--fs-h1)", lineHeight: 1.1 },
  h2: { fontSize: "var(--fs-h2)", lineHeight: 1.15 },
  h3: { fontSize: "var(--fs-h3)", lineHeight: 1.2 },
  h4: { fontSize: "var(--fs-h4)", lineHeight: 1.3 },
};

const fontFor: Record<HeadingLevel, string> = {
  display: "var(--font-display)",
  h1: "var(--font-display)",
  h2: "var(--font-display)",
  h3: "var(--font-display)",
  h4: "var(--font-body)", // h4 is sans by design — closer to body emphasis
};

const weightFor: Record<HeadingLevel, number> = {
  display: 500,
  h1: 500,
  h2: 500,
  h3: 500,
  h4: 600,
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level = "h2", as, style, children, ...rest },
  ref,
) {
  const Tag = (as ?? (level === "display" ? "h1" : level)) as ElementType;
  const size = sizeMap[level];
  return (
    <Tag
      ref={ref}
      style={{
        fontFamily: fontFor[level],
        fontWeight: weightFor[level],
        fontSize: size.fontSize,
        lineHeight: size.lineHeight,
        letterSpacing: level === "h4" ? "-0.005em" : "var(--track-tight)",
        color: "var(--ink)",
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Heading;
