import { forwardRef, type HTMLAttributes } from "react";

export type CardElevation = "flat" | "sm" | "md" | "lg";
export type CardPad = "sm" | "md" | "lg" | "none";
export type CardRadius = 3 | 4 | 5;

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Shadow depth. `flat` = no shadow (just border). Default `sm`. */
  elevation?: CardElevation;
  /** Inner padding. Default `md`. `none` for unpadded surfaces. */
  pad?: CardPad;
  /** Corner radius token. `3` = 14px (default), `4` = 20px, `5` = 28px. */
  radius?: CardRadius;
  /** Render as a different element. */
  as?: "div" | "section" | "article" | "aside";
};

const padMap: Record<CardPad, string | 0> = {
  none: 0,
  sm: "var(--s-4)",
  md: "var(--s-5)",
  lg: "var(--s-7)",
};

const shadowMap: Record<CardElevation, string> = {
  flat: "none",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
};

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { elevation = "sm", pad = "md", radius = 3, as: Tag = "div", style, children, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref as never}
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--rule)",
        borderRadius: `var(--r-${radius})`,
        boxShadow: shadowMap[elevation],
        padding: padMap[pad],
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Card;
