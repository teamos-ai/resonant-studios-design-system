export default function CtaBand() {
  return (
    <section id="contact" style={{ padding: "96px 40px" }}>
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          background: "var(--bg-elevated)",
          border: "1px solid var(--rule)",
          borderRadius: 28,
          padding: "64px 56px",
          textAlign: "center",
          boxShadow: "var(--shadow-lg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/assets/paper-grain.svg)",
            backgroundSize: 260,
            opacity: 0.05,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
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
            Ready to start?
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              margin: 0,
              color: "var(--ink)",
            }}
          >
            Book a <em style={{ fontStyle: "italic", color: "var(--primary)" }}>free intro call.</em>
          </h2>
          <p
            style={{
              color: "var(--ink-muted)",
              fontSize: 17,
              lineHeight: 1.55,
              marginTop: 18,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Thirty minutes, no commitment. We&rsquo;ll talk through your goals and how sessions might work for you.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <button className="btn">Book an intro call</button>
            <button className="btn btn-secondary">Refer a participant</button>
          </div>
        </div>
      </div>
    </section>
  );
}
