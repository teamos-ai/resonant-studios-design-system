import { forwardRef, type HTMLAttributes } from "react";

export type ContainerWidth = "content" | "editorial" | "prose";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  /** Max width preset. `content` = 1200px (default), `editorial` = 1040px, `prose` = 680px. */
  width?: ContainerWidth;
  /** Render as a different element. Default `div`. */
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
};

const widthVar: Record<ContainerWidth, string> = {
  content: "var(--w-content)",
  editorial: "var(--w-editorial)",
  prose: "var(--w-prose)",
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { width = "content", as: Tag = "div", style, children, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref as never}
      style={{
        maxWidth: widthVar[width],
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--s-5)",
        paddingRight: "var(--s-5)",
        width: "100%",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Container;
