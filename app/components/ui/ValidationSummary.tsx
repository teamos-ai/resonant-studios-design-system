"use client";

import { forwardRef, useEffect, useRef, type HTMLAttributes } from "react";

export type ValidationError = {
  /** ID of the offending field. Anchors the error link to the input. */
  fieldId: string;
  /** Plain-language description of what to fix. */
  message: string;
};

export type ValidationSummaryProps = HTMLAttributes<HTMLDivElement> & {
  /** List of errors. When the list changes from empty to non-empty, focus moves to the summary so screen readers announce it. */
  errors: ValidationError[];
  /** Heading copy. Plain language. */
  heading?: string;
};

/**
 * Top-of-form error summary. Programmatically focused when errors appear so
 * screen-reader users hear them immediately. Each error links to its field.
 */
const ValidationSummary = forwardRef<HTMLDivElement, ValidationSummaryProps>(
  function ValidationSummary({ errors, heading = "Please fix these to continue.", style, ...rest }, ref) {
    // `HTMLDivElement | null` (rather than just `HTMLDivElement`) gives a
    // MutableRefObject — assignments to `.current` are allowed. Necessary
    // for the `setRefs` callback below, which forwards to the parent ref.
    const ownRef = useRef<HTMLDivElement | null>(null);
    const setRefs = (node: HTMLDivElement | null) => {
      ownRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    };

    useEffect(() => {
      if (errors.length > 0) ownRef.current?.focus();
    }, [errors.length]);

    if (errors.length === 0) return null;

    return (
      <div
        ref={setRefs}
        role="alert"
        tabIndex={-1}
        aria-labelledby="rs-validation-summary-heading"
        style={{
          padding: "var(--s-4) var(--s-5)",
          background: "var(--error-wash)",
          border: "1px solid var(--error)",
          borderRadius: "var(--r-2)",
          color: "var(--ink)",
          ...style,
        }}
        {...rest}
      >
        <div
          id="rs-validation-summary-heading"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--fs-body)", marginBottom: "var(--s-2)" }}
        >
          {heading}
        </div>
        <ul style={{ margin: 0, paddingLeft: "var(--s-4)", color: "var(--ink-muted)", fontSize: "var(--fs-small)", lineHeight: 1.55 }}>
          {errors.map((e) => (
            <li key={e.fieldId}>
              <a
                href={`#${e.fieldId}`}
                style={{ color: "var(--error)", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                {e.message}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

export default ValidationSummary;
