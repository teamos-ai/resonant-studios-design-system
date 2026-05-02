import { forwardRef, type HTMLAttributes } from "react";

export type LeadProps = HTMLAttributes<HTMLParagraphElement>;

const Lead = forwardRef<HTMLParagraphElement, LeadProps>(function Lead({ style, children, ...rest }, ref) {
  return (
    <p
      ref={ref}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-lead)",
        lineHeight: 1.5,
        color: "var(--ink-muted)",
        fontWeight: 400,
        margin: 0,
        maxWidth: "var(--w-prose)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
});

export default Lead;
