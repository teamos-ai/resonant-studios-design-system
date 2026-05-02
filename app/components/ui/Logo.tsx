import Image from "next/image";
import { forwardRef, type AnchorHTMLAttributes } from "react";

export type LogoVariant = "mark" | "wordmark";

export type LogoProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * `mark` = the eighth-note R glyph alone (square, ~1:1).
   * `wordmark` = full Resonant studios.com.au lock-up (~3:1).
   */
  variant?: LogoVariant;
  /** Glyph height in px. Wordmark scales proportionally to ~3× width. */
  size?: number;
  /** Anchor target. Default `/`. */
  href?: string;
  /**
   * Force a specific tone. Defaults to `auto` — swaps with the active
   * theme via CSS (`data-theme` + `prefers-color-scheme`). Use `light`
   * or `dark` only when the surface colour is fixed regardless of theme.
   */
  tone?: "auto" | "light" | "dark";
  /** Mark this logo as the LCP candidate (e.g. site nav). Defaults to false. */
  priority?: boolean;
};

/**
 * `mark` points at the nav-grade square (public/assets/nav/) so the styleguide
 * Logo demo and the floating nav are guaranteed to share one square asset.
 * `wordmark` stays in the library since it's the wider lock-up.
 */
const ASSETS = {
  mark: { onLight: "/assets/nav/mark-on-light.png", onDark: "/assets/nav/mark-on-dark.png" },
  wordmark: { onLight: "/library/logos/wordmark-on-light.png", onDark: "/library/logos/wordmark-on-dark.png" },
} as const;

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(function Logo(
  { variant = "wordmark", tone = "auto", size = 28, href = "/", priority = false, style, ...rest },
  ref,
) {
  const aspect = variant === "mark" ? 1 : 3.0;
  const width = Math.round(size * aspect);
  const assets = ASSETS[variant];

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    lineHeight: 0,
    ...style,
  };

  if (tone === "light" || tone === "dark") {
    const src = tone === "light" ? assets.onLight : assets.onDark;
    return (
      <a ref={ref} href={href} aria-label="Resonant Studios" style={baseStyle} {...rest}>
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          width={width}
          height={size}
          priority={priority}
          style={{ display: "block", height: size, width: "auto" }}
        />
      </a>
    );
  }

  // auto — render both, CSS swap shows one. Next.js sizes both as WebP at ~2× rendered dims.
  return (
    <a ref={ref} href={href} aria-label="Resonant Studios" style={baseStyle} {...rest}>
      <Image
        src={assets.onLight}
        alt=""
        aria-hidden="true"
        width={width}
        height={size}
        priority={priority}
        className="rs-logo--on-light"
        style={{ height: size, width: "auto" }}
      />
      <Image
        src={assets.onDark}
        alt=""
        aria-hidden="true"
        width={width}
        height={size}
        priority={priority}
        className="rs-logo--on-dark"
        style={{ height: size, width: "auto" }}
      />
    </a>
  );
});

export default Logo;
