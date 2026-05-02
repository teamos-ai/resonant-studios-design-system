"use client";

import { useState, type CSSProperties } from "react";

/**
 * Click-to-copy `<code>` for token names in the styleguide. The styleguide-only
 * helper — not a system primitive — so it lives in `_sections/` rather than
 * `components/ui/`. Renders a non-button `<code>` with `role="button"` for
 * accessibility, sentence-case "Copied" feedback (no `!` per voice rule).
 */
export function TokenCode({
  children,
  style,
}: {
  children: string;
  style?: CSSProperties;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard blocked — fall through silently */
    }
  };

  return (
    <code
      role="button"
      tabIndex={0}
      onClick={onCopy}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCopy();
        }
      }}
      title={copied ? "Copied" : `Copy ${children}`}
      aria-label={copied ? `Copied ${children}` : `Copy ${children}`}
      style={{
        cursor: "pointer",
        background: copied ? "var(--success-wash)" : "transparent",
        color: copied ? "var(--success)" : "var(--ink-muted)",
        padding: 0,
        transition:
          "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
        ...style,
      }}
    >
      {children}
    </code>
  );
}
