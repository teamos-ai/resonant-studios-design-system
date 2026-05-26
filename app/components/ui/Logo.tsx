import Image from "next/image";
import { forwardRef, type AnchorHTMLAttributes } from "react";

export type LogoVariant = "mark" | "wordmark";

export type LogoProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * `mark` = the square speaker-mesh + wood-trim app icon (1:1).
   * `wordmark` = the rectangle speaker-mesh wordmark with full
   * Resonant studios.com.au lock-up inside the same wood-trimmed frame.
   * Both are self-contained skeuomorphic assets and sit cleanly on any
   * surface without a theme swap.
   */
  variant?: LogoVariant;
  /** Glyph height in px. Wordmark scales proportionally (~1.5× width). */
  size?: number;
  /** Anchor target. Default `/`. */
  href?: string;
  /**
   * Vestigial. The new assets are self-contained (their own dark body
   * + wood trim + white R), so they sit cleanly on both light and dark
   * surfaces with one file each. Prop kept for API compatibility.
   */
  tone?: "auto" | "light" | "dark";
  /** Mark this logo as the LCP candidate (e.g. site nav). */
  priority?: boolean;
};

/* Both assets are skeuomorphic — they bring their own dark speaker-mesh
   body, wood trim, and white letterforms, so one file per variant covers
   both light and dark surfaces. No theme swap is needed. */
const ASSETS = {
  mark: { src: "/library/logos/app-icon--speaker-mesh.png", aspect: 1 },
  wordmark: { src: "/library/logos/wordmark--speaker-mesh.png", aspect: 600 / 400 },
} as const;

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(function Logo(
  { variant = "mark", size = 28, href = "/", priority = false, style, ...rest },
  ref,
) {
  const { src, aspect } = ASSETS[variant];
  const width = Math.round(size * aspect);

  return (
    <a
      ref={ref}
      href={href}
      aria-label="Resonant Studios"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        lineHeight: 0,
        ...style,
      }}
      {...rest}
    >
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={width}
        height={size}
        priority={priority}
        style={{ display: "block", height: size, width }}
      />
    </a>
  );
});

export default Logo;
