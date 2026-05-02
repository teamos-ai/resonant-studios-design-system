type Palette = {
  name: string;
  register: string;
  light: ModePalette;
  dark: ModePalette;
};

type ModePalette = {
  bg: string;
  elevated: string;
  ink: string;
  inkMuted: string;
  rule: string;
  primary: string;
  primaryInk: string;
  primaryHover: string;
  secondary: string;
  secondaryInk: string;
  accent: string;
  shadow: string;
};

const palettes: Palette[] = [
  {
    name: "A — Studio Workshop",
    register: "Wooden, hand-tooled, hushed. Taylor Guitars · Maton · A24",
    light: {
      bg: "#F5EFE4",
      elevated: "#FFFFFF",
      ink: "#231F1A",
      inkMuted: "rgba(35,31,26,0.66)",
      rule: "rgba(35,31,26,0.10)",
      primary: "#B07848",
      primaryInk: "#FFFFFF",
      primaryHover: "#9C6638",
      secondary: "#7A8F82",
      secondaryInk: "#FFFFFF",
      accent: "#6B4B5E",
      shadow: "0 1px 2px rgba(35,31,26,0.04), 0 8px 24px -8px rgba(35,31,26,0.10)",
    },
    dark: {
      bg: "#191614",
      elevated: "#231F1A",
      ink: "#F0E8DA",
      inkMuted: "rgba(240,232,218,0.70)",
      rule: "rgba(240,232,218,0.10)",
      primary: "#E8A574",
      primaryInk: "#1A0F08",
      primaryHover: "#F2B98C",
      secondary: "#B7CFBC",
      secondaryInk: "#0F1A12",
      accent: "#D9A6B8",
      shadow: "0 1px 2px rgba(0,0,0,0.30), 0 8px 24px -8px rgba(0,0,0,0.50)",
    },
  },
  {
    name: "B — Field Recording",
    register: "Documentary, journalistic. Topo Designs · Pitchfork · NPR Music",
    light: {
      bg: "#EDE9DF",
      elevated: "#FFFFFF",
      ink: "#1F1E1B",
      inkMuted: "rgba(31,30,27,0.66)",
      rule: "rgba(31,30,27,0.10)",
      primary: "#C76F46",
      primaryInk: "#FFFFFF",
      primaryHover: "#A95930",
      secondary: "#728C73",
      secondaryInk: "#FFFFFF",
      accent: "#4A4F5C",
      shadow: "0 1px 2px rgba(31,30,27,0.05), 0 8px 24px -8px rgba(31,30,27,0.10)",
    },
    dark: {
      bg: "#181C1F",
      elevated: "#22272B",
      ink: "#E6E8EA",
      inkMuted: "rgba(230,232,234,0.70)",
      rule: "rgba(230,232,234,0.10)",
      primary: "#E58F66",
      primaryInk: "#1A0E08",
      primaryHover: "#F0A57F",
      secondary: "#9BB89C",
      secondaryInk: "#0E1A10",
      accent: "#8C95A8",
      shadow: "0 1px 2px rgba(0,0,0,0.30), 0 8px 24px -8px rgba(0,0,0,0.50)",
    },
  },
  {
    name: "C — Pressed Linen",
    register: "Editorial, premium-quiet. Aesop · Le Labo · Frieze · Maharam",
    light: {
      bg: "#EFE9DC",
      elevated: "#FFFFFF",
      ink: "#1A1714",
      inkMuted: "rgba(26,23,20,0.66)",
      rule: "rgba(26,23,20,0.10)",
      primary: "#C9883A",
      primaryInk: "#1A1108",
      primaryHover: "#B17428",
      secondary: "#9DBFA8",
      secondaryInk: "#0E1A12",
      accent: "#7E5C5C",
      shadow: "0 1px 2px rgba(26,23,20,0.04), 0 8px 24px -8px rgba(26,23,20,0.10)",
    },
    dark: {
      bg: "#1C1916",
      elevated: "#28241F",
      ink: "#F2EBDD",
      inkMuted: "rgba(242,235,221,0.70)",
      rule: "rgba(242,235,221,0.10)",
      primary: "#E5B873",
      primaryInk: "#1A1108",
      primaryHover: "#F0C68A",
      secondary: "#BFD9C8",
      secondaryInk: "#0E1A12",
      accent: "#C29797",
      shadow: "0 1px 2px rgba(0,0,0,0.30), 0 8px 24px -8px rgba(0,0,0,0.50)",
    },
  },
];

function Sample({ p, modeLabel }: { p: ModePalette; modeLabel: string }) {
  return (
    <div
      style={{
        background: p.bg,
        color: p.ink,
        borderRadius: 16,
        padding: 28,
        border: `1px solid ${p.rule}`,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mode label */}
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 600,
          color: p.inkMuted,
        }}
      >
        {modeLabel}
      </div>

      {/* Eyebrow */}
      <div
        style={{
          color: p.primary,
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Music-based NDIS support
      </div>

      {/* Headline */}
      <div
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 32,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          fontWeight: 500,
          color: p.ink,
        }}
      >
        A song that&rsquo;s
        <br />
        <em style={{ fontStyle: "italic", color: p.primary }}>really</em> yours.
      </div>

      {/* Lead */}
      <div style={{ fontSize: 13.5, lineHeight: 1.5, color: p.inkMuted }}>
        Personalised, music-based sessions that build confidence, skill, and self-expression.
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button
          style={{
            background: p.primary,
            color: p.primaryInk,
            border: "none",
            borderRadius: 10,
            padding: "10px 16px",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'Manrope', sans-serif",
            cursor: "pointer",
            boxShadow: p.shadow,
          }}
        >
          Book an intro call
        </button>
        <button
          style={{
            background: "transparent",
            color: p.ink,
            border: `1.5px solid ${p.ink}`,
            borderRadius: 10,
            padding: "10px 16px",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'Manrope', sans-serif",
            cursor: "pointer",
          }}
        >
          How sessions run
        </button>
      </div>

      {/* Session card */}
      <div
        style={{
          background: p.elevated,
          borderRadius: 14,
          padding: "14px 16px",
          border: `1px solid ${p.rule}`,
          boxShadow: p.shadow,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            background: p.secondary,
            color: p.secondaryInk,
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
          }}
          aria-hidden
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: p.primary,
              marginBottom: 2,
            }}
          >
            Session 4 of 8
          </div>
          <div
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 1.2,
              color: p.ink,
            }}
          >
            Vocal take, take two
          </div>
          <div style={{ fontSize: 11, color: p.inkMuted, marginTop: 2 }}>Tue · 2:00 pm · with Jess</div>
        </div>
      </div>

      {/* Swatch row */}
      <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
        {[
          ["bg", p.bg],
          ["elevated", p.elevated],
          ["primary", p.primary],
          ["secondary", p.secondary],
          ["accent", p.accent],
          ["ink", p.ink],
        ].map(([label, color]) => (
          <div key={label} style={{ flex: 1 }}>
            <div
              style={{
                background: color,
                height: 22,
                borderRadius: 4,
                border: `1px solid ${p.rule}`,
              }}
            />
            <div style={{ fontSize: 9, color: p.inkMuted, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>
              {label}
            </div>
            <div
              style={{
                fontSize: 9,
                color: p.inkMuted,
                fontVariantNumeric: "tabular-nums",
                fontFamily: "'Manrope', monospace",
              }}
            >
              {color}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DirectionsPage() {
  return (
    <main
      style={{
        maxWidth: 1480,
        margin: "0 auto",
        padding: "48px 32px 96px",
        fontFamily: "'Manrope', sans-serif",
        color: "#F0E8DA",
      }}
    >
      <header style={{ marginBottom: 32 }}>
        <div
          style={{
            color: "#E8A574",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          Round 1 · Colour direction review
        </div>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 3.4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontWeight: 500,
            margin: 0,
          }}
        >
          Three directions for <em style={{ fontStyle: "italic", color: "#E8A574" }}>Resonant Studios.</em>
        </h1>
        <p style={{ color: "rgba(240,232,218,0.70)", fontSize: 16, lineHeight: 1.55, marginTop: 16, maxWidth: 720 }}>
          Same headline, body, button structure, and session card across all three so the only variable is colour. Each
          column shows light mode (paper) on top, dark mode (mocha / slate / espresso) below.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {palettes.map((palette) => (
          <section
            key={palette.name}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 20,
              padding: 16,
            }}
          >
            <div style={{ padding: "4px 8px 8px" }}>
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                }}
              >
                {palette.name}
              </div>
              <div style={{ fontSize: 12, color: "rgba(240,232,218,0.60)", lineHeight: 1.45 }}>{palette.register}</div>
            </div>
            <Sample p={palette.light} modeLabel="Light · Paper" />
            <Sample p={palette.dark} modeLabel="Dark · Mocha" />
          </section>
        ))}
      </div>

      <footer style={{ marginTop: 48, color: "rgba(240,232,218,0.60)", fontSize: 13, lineHeight: 1.6 }}>
        Tell me which direction lands — A, B, or C — or which elements to splice (e.g. &ldquo;A but with C&rsquo;s
        eucalyptus secondary&rdquo;). I&rsquo;ll lock the palette and move to round 2: component scope cut.
      </footer>
    </main>
  );
}
