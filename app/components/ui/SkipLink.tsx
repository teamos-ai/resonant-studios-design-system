import { forwardRef, type AnchorHTMLAttributes } from "react";

export type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Anchor target. Default `#main`. */
  href?: string;
  /** Visible label. Default `Skip to main content`. Plain English required. */
  children?: React.ReactNode;
};

/**
 * Visible-on-focus skip link. First focusable element on every page.
 * Hidden until keyboard users tab to it; never hidden via `display: none`
 * (screen readers must still find it).
 */
const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(function SkipLink(
  { href = "#main", style, children = "Skip to main content", ...rest },
  ref,
) {
  return (
    <a
      ref={ref}
      href={href}
      className="skip-link"
      style={style}
      {...rest}
    >
      {children}
    </a>
  );
});

export default SkipLink;
