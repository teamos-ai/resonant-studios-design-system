import { forwardRef, type HTMLAttributes } from "react";

type SpaceToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  /** Vertical gap. References `--s-{n}` tokens. */
  space?: SpaceToken;
  /** Horizontal alignment of children. */
  align?: "start" | "center" | "end" | "stretch";
};

const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { space = 4, align = "stretch", style, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `var(--s-${space})`,
        alignItems: align,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Stack;
