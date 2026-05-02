import { forwardRef, type HTMLAttributes } from "react";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  /** Person's full name. Used to derive initials and as the accessible label. */
  name: string;
  /** Optional photo URL. Falls back to initials in display face. Never emoji. */
  src?: string;
  /** Size. `sm` = 28px, `md` = 40px (default), `lg` = 56px. */
  size?: AvatarSize;
  /** Background tone. Defaults to secondary (sage). */
  tone?: "primary" | "secondary" | "accent" | "muted";
};

const sizePx: Record<AvatarSize, number> = { sm: 28, md: 40, lg: 56 };
const fontPx: Record<AvatarSize, number> = { sm: 11, md: 15, lg: 20 };

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase() || "•";
}

const toneBg = {
  primary: "var(--primary-wash)",
  secondary: "var(--secondary-wash)",
  accent: "var(--accent-wash)",
  muted: "var(--bg-elevated)",
} as const;

const toneFg = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  muted: "var(--ink-2)",
} as const;

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { name, src, size = "md", tone = "secondary", style, ...rest },
  ref,
) {
  const px = sizePx[size];
  return (
    <div
      ref={ref}
      role="img"
      aria-label={name}
      style={{
        width: px,
        height: px,
        borderRadius: "var(--r-pill)",
        background: toneBg[tone],
        color: toneFg[tone],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0,
        fontFamily: "var(--font-display)",
        fontSize: fontPx[size],
        fontWeight: 500,
        ...style,
      }}
      {...rest}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span aria-hidden>{initials(name)}</span>
      )}
    </div>
  );
});

export default Avatar;
