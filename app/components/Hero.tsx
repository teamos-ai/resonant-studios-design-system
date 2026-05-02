export default function Hero() {
  return (
    <section
      className="grid-2"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "88px 40px 64px",
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
        gap: 56,
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            color: "var(--primary)",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          Music-based NDIS support
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 5.2vw, 4.4rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            fontWeight: 500,
            margin: 0,
            color: "var(--ink)",
          }}
        >
          A song that&rsquo;s
          <br />
          <em style={{ fontStyle: "italic", color: "var(--primary)" }}>really</em> yours.
        </h1>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "var(--ink-muted)",
            marginTop: 24,
            maxWidth: 500,
          }}
        >
          We work with self-managed and plan-managed NDIS participants through personalised sessions that build
          confidence, skill, and self-expression — ending, if you want, in a Spotify-ready song that&rsquo;s really yours.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
          <button className="btn">Book an intro call</button>
          <button className="btn btn-secondary">How sessions run</button>
        </div>
        <div
          style={{
            display: "flex",
            gap: 26,
            marginTop: 40,
            fontSize: 13,
            color: "var(--ink-muted)",
            flexWrap: "wrap",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--secondary)" }} />
            Plan-managed
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--secondary)" }} />
            Self-managed
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--secondary)" }} />
            All experience levels
          </span>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            aspectRatio: "4 / 5",
            borderRadius: 28,
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(165deg, #CB9870 0%, #8E5D34 35%, #553B4B 70%, #2B2722 100%)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/paper-grain.svg)",
              backgroundSize: 260,
              opacity: 0.22,
              mixBlendMode: "overlay",
            }}
          />
          <svg
            viewBox="0 0 400 500"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="hero-glow" cx="0.35" cy="0.25" r="0.7">
                <stop offset="0%" stopColor="rgba(255, 230, 200, 0.45)" />
                <stop offset="100%" stopColor="rgba(255, 230, 200, 0)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="400" height="500" fill="url(#hero-glow)" />
            <ellipse cx="200" cy="340" rx="130" ry="140" fill="#4A3328" opacity="0.55" />
            <ellipse cx="200" cy="340" rx="105" ry="118" fill="#3A261D" opacity="0.7" />
            <circle cx="200" cy="335" r="28" fill="#1a100c" />
            <circle cx="200" cy="335" r="22" fill="#2B2722" />
            <rect x="190" y="60" width="20" height="210" fill="#3A261D" opacity="0.85" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={i}
                x1={193 + i * 3}
                y1={60}
                x2={193 + i * 3}
                y2={450}
                stroke="#D9BFA2"
                strokeWidth="0.5"
                opacity="0.5"
              />
            ))}
          </svg>
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              color: "#F0E2D2",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Photo placeholder · hands on guitar, morning studio light
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: -40,
            bottom: 40,
            background: "var(--bg-elevated)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
            padding: 16,
            boxShadow: "var(--shadow-md)",
            width: 240,
          }}
        >
          <div
            style={{
              color: "var(--primary)",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 6,
            }}
          >
            Session 4 of 8
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 500,
              lineHeight: 1.2,
              color: "var(--ink)",
            }}
          >
            Vocal take, take two
          </div>
          <div style={{ color: "var(--ink-muted)", fontSize: 12, marginTop: 4 }}>Tue · 2:00 pm · with Jess</div>
        </div>
      </div>
    </section>
  );
}
