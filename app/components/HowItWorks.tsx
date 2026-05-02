const steps = [
  {
    n: "01",
    t: "Start with a conversation",
    d: "A free intro call with a facilitator to understand your goals, how you like to work, and what a good session looks like for you.",
  },
  {
    n: "02",
    t: "Meet in the studio",
    d: "Weekly sessions in a real creative space. We build skills, confidence, and the song itself — one piece at a time.",
  },
  {
    n: "03",
    t: "Leave with something real",
    d: "A professionally produced, Spotify-ready track that captures something personal and worth sharing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: "var(--bg-sunken)", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            color: "var(--primary)",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 14,
          }}
        >
          How it works
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 3.4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontWeight: 500,
            margin: 0,
            maxWidth: 720,
          }}
        >
          A structured programme, <em style={{ fontStyle: "italic" }}>built around you.</em>
        </h2>
        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 56,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--rule)",
                borderRadius: 20,
                padding: 28,
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 40,
                  color: "var(--primary)",
                  fontWeight: 500,
                  lineHeight: 1,
                  marginBottom: 20,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  marginBottom: 10,
                  color: "var(--ink)",
                }}
              >
                {s.t}
              </div>
              <div style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
