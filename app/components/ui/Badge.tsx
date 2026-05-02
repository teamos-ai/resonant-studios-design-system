import { forwardRef, type HTMLAttributes } from "react";

export type BadgeTone = "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "error";
export type BadgeSize = "sm" | "md";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Colour role. Maps to wash + foreground from semantic tokens. */
  tone?: BadgeTone;
  /** Size. `sm` = 4×10px padding, `md` = 6×12px. */
  size?: BadgeSize;
};

const sizeStyle: Record<BadgeSize, React.CSSProperties> = {
  sm: { padding: "4px 10px", fontSize: "var(--fs-micro)" },
  md: { padding: "6px 12px", fontSize: "var(--fs-small)" },
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone = "default", size = "sm", className, style, children, ...rest },
  ref,
) {
  const cls = ["badge", tone !== "default" ? tone : "", className].filter(Boolean).join(" ");
  return (
    <span ref={ref} className={cls} style={{ ...sizeStyle[size], ...style }} {...rest}>
      {children}
    </span>
  );
});

export default Badge;
