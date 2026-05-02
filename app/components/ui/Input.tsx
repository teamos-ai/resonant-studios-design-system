import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Marks the field as in error. Sets `aria-invalid="true"` and switches to error border. */
  invalid?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid, className, ...rest },
  ref,
) {
  const cls = ["input", className].filter(Boolean).join(" ");
  return (
    <input
      ref={ref}
      className={cls}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
});

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, className, rows = 4, style, ...rest },
  ref,
) {
  const cls = ["input", className].filter(Boolean).join(" ");
  return (
    <textarea
      ref={ref}
      className={cls}
      rows={rows}
      aria-invalid={invalid || undefined}
      style={{ resize: "vertical", minHeight: 96, ...style }}
      {...rest}
    />
  );
});

export default Input;
