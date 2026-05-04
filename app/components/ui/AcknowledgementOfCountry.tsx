// readability-exempt: Acknowledgement of Country wording is culturally significant and should not be simplified for grade-level targets.
import { forwardRef, type HTMLAttributes } from "react";

export type AcknowledgementOfCountryProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * Custom acknowledgement text. Defaults to the generic placeholder pending
   * Tony's preferred phrasing (see BRIEF.md → Open items).
   *
   * Use the specific Traditional Custodians' name when locked. Avoid
   * "the land on which we work" alone — name the people.
   */
  children?: React.ReactNode;
};

const DEFAULT_TEXT =
  "We acknowledge the Traditional Custodians of the lands on which we work and create — the Wadawurrung and Bunurong peoples — and pay our respects to their Elders past, present, and emerging. Sovereignty was never ceded.";

const AcknowledgementOfCountry = forwardRef<HTMLDivElement, AcknowledgementOfCountryProps>(
  function AcknowledgementOfCountry({ style, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="note"
        aria-label="Acknowledgement of Country"
        style={{
          padding: "var(--s-3) var(--s-4)",
          border: "1px solid var(--rule)",
          borderRadius: "var(--r-2)",
          fontSize: "var(--fs-micro)",
          lineHeight: 1.55,
          color: "var(--ink-muted)",
          ...style,
        }}
        {...rest}
      >
        {children ?? DEFAULT_TEXT}
      </div>
    );
  },
);

export default AcknowledgementOfCountry;
