import { forwardRef, type HTMLAttributes } from "react";

export type SectionTone = "default" | "elevated" | "sunken";
export type SectionPad = "sm" | "md" | "lg";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Surface tone. `default` = page bg. `elevated` = lifted card. `sunken` = recessed band. */
  tone?: SectionTone;
  /** Vertical padding. `sm` = 48px, `md` = 96px (default), `lg` = 128px. */
  pad?: SectionPad;
};

const padMap: Record<SectionPad, string> = {
  sm: "var(--s-7)",
  md: "var(--s-9)",
  lg: "var(--s-10)",
};

const toneBg: Record<SectionTone, string> = {
  default: "var(--bg)",
  elevated: "var(--bg-elevated)",
  sunken: "var(--bg-sunken)",
};

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { tone = "default", pad = "md", style, children, ...rest },
  ref,
) {
  return (
    <section
      ref={ref}
      style={{
        background: toneBg[tone],
        paddingTop: padMap[pad],
        paddingBottom: padMap[pad],
        ...style,
      }}
      {...rest}
    >
      {children}
    </section>
  );
});

export default Section;
