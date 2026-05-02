import { forwardRef, type HTMLAttributes } from "react";

type SpaceToken = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type ClusterProps = HTMLAttributes<HTMLDivElement> & {
  /** Gap between items. References `--s-{n}` tokens. */
  space?: SpaceToken;
  /** Vertical alignment of items. */
  align?: "start" | "center" | "end" | "baseline";
  /** Horizontal distribution. */
  justify?: "start" | "center" | "end" | "between";
  /** Wrap behaviour. Default `wrap`. */
  wrap?: "wrap" | "nowrap";
};

const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
} as const;

const Cluster = forwardRef<HTMLDivElement, ClusterProps>(function Cluster(
  { space = 3, align = "center", justify = "start", wrap = "wrap", style, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: wrap,
        gap: `var(--s-${space})`,
        alignItems: align,
        justifyContent: justifyMap[justify],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Cluster;
