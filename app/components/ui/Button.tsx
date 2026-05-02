"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  /** Visual treatment. `primary` (terracotta CTA, default) · `secondary` (outline, ink-coloured) · `ghost` (text-only, primary-coloured on wash) · `tertiary` (sage filled). */
  variant?: ButtonVariant;
  /** Size. `md` (default) matches the 48px touch-target floor. `sm` clears WCAG 2.5.5 AA (44px) and is reserved for dense, non-primary actions; never use it for the journey-advancing CTA. `lg` is the hero-section emphasis size. */
  size?: ButtonSize;
  /** Async working state. Disables interaction and shows a spinner. */
  loading?: boolean;
  /** Native `type`. Default `button` (never submit by accident). */
  type?: "button" | "submit" | "reset";
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
  tertiary: "btn btn-sec",
};

const sizeStyle: Record<ButtonSize, React.CSSProperties> = {
  // `sm` clears the WCAG 2.5.5 AA target floor (44px) but sits below the
  // BRIEF's 48px Material spec — see BRIEF §5 carve-out. Reserve `sm` for
  // dense, non-primary actions inside forms or cards. Default `md` for
  // anything a participant taps to advance the journey.
  sm: { fontSize: "var(--fs-small)", padding: "10px 14px", minHeight: 44 },
  md: { fontSize: "var(--fs-body)", padding: "12px 20px", minHeight: 48 },
  lg: { fontSize: "var(--fs-lead)", padding: "14px 24px", minHeight: 56 },
};

if (process.env.NODE_ENV !== "production") {
  // Voice contract: button labels must not end with `!`.
  // Warns once per offending label.
  const seen = new Set<string>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).__rs_button_warn = (label: string) => {
    if (seen.has(label)) return;
    seen.add(label);
    console.warn(
      `[ResonantStudios] Button label "${label}" ends with "!". Voice rule: buttons are calm — no exclamation marks. See BRIEF.md → Voice in components.`,
    );
  };
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    type = "button",
    className,
    style,
    children,
    "aria-disabled": ariaDisabled,
    ...rest
  },
  ref,
) {
  if (process.env.NODE_ENV !== "production" && typeof children === "string" && children.trim().endsWith("!")) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).__rs_button_warn?.(children);
  }

  const isDisabled = disabled || loading;
  const cls = [variantClass[variant], className].filter(Boolean).join(" ");

  return (
    <button
      ref={ref}
      type={type}
      className={cls}
      disabled={isDisabled}
      aria-disabled={isDisabled || ariaDisabled}
      aria-busy={loading || undefined}
      style={{ ...sizeStyle[size], ...style }}
      {...rest}
    >
      {loading && (
        <span
          aria-hidden
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            animation: "rs-spin 0.8s linear infinite",
            display: "inline-block",
          }}
        />
      )}
      {children}
      <style>{`@keyframes rs-spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
});

export default Button;
