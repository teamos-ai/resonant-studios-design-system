import { useId, type ReactElement, cloneElement } from "react";

export type FieldProps = {
  /** Visible label. Required — never use placeholder-as-label. */
  label: string;
  /** Marks field as required. Renders visible `*`, sets `aria-required="true"`, adds sr-only "Required". */
  required?: boolean;
  /** Preventive helper. Mutually exclusive with `error`. */
  hint?: string;
  /** Corrective error. When present, hint is hidden and the input gains the invalid state. Plain language. Tells user what to do. */
  error?: string;
  /** The interactive control. Single child element (Input, Textarea, select, etc.). */
  children: ReactElement;
};

/**
 * Field composes a label + control + helper or error message.
 *
 * Voice rules:
 * - hint is preventive ("We'll only use this to send your session reminders.")
 * - error is corrective ("Please use a valid email address.")
 * - hint and error are mutually exclusive — error wins.
 */
export default function Field({ label, required, hint, error, children }: FieldProps) {
  const generatedId = useId();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childProps = (children as any).props ?? {};
  const inputId = childProps.id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  const describedBy = error ? errorId : hint ? hintId : undefined;

  const child = cloneElement(children, {
    id: inputId,
    "aria-describedby": describedBy,
    "aria-required": required || undefined,
    "aria-invalid": !!error || undefined,
    invalid: !!error || undefined,
    required: required || undefined,
  });

  return (
    <div>
      <label
        htmlFor={inputId}
        style={{
          display: "block",
          fontSize: "var(--fs-small)",
          fontWeight: 600,
          color: "var(--ink)",
          marginBottom: 6,
        }}
      >
        {label}
        {required && (
          <>
            <span aria-hidden style={{ color: "var(--primary)", marginLeft: 4 }}>
              *
            </span>
            <span style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>
              {" "}Required
            </span>
          </>
        )}
      </label>
      {child}
      {error ? (
        <div
          id={errorId}
          role="alert"
          style={{ fontSize: "var(--fs-micro)", color: "var(--error)", marginTop: 6, lineHeight: 1.45 }}
        >
          {error}
        </div>
      ) : hint ? (
        <div
          id={hintId}
          style={{ fontSize: "var(--fs-micro)", color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.45 }}
        >
          {hint}
        </div>
      ) : null}
    </div>
  );
}
