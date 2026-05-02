import { MessagesSquare, Sparkles, Music, FileText, Mic, Headphones, Play } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Phase = {
  label: string;
  sub: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  state: "done" | "current" | "upcoming";
};

const phases: Phase[] = [
  { label: "Intro call", sub: "A free conversation", Icon: MessagesSquare, state: "done" },
  { label: "Goal setting", sub: "Shape the work together", Icon: Sparkles, state: "done" },
  { label: "Skill sessions", sub: "Build confidence", Icon: Music, state: "current" },
  { label: "Write", sub: "Shape the song", Icon: FileText, state: "upcoming" },
  { label: "Record", sub: "Tracking sessions", Icon: Mic, state: "upcoming" },
  { label: "Mix", sub: "Make it sound like you", Icon: Headphones, state: "upcoming" },
  { label: "Release", sub: "Spotify-ready", Icon: Play, state: "upcoming" },
];

function styleFor(s: Phase["state"]) {
  if (s === "done") return { bg: "var(--secondary)", ink: "white" };
  if (s === "current") return { bg: "var(--accent)", ink: "white" };
  return { bg: "var(--bg-elevated)", ink: "var(--ink-muted)" };
}

export default function Journey() {
  return (
    <section id="journey" style={{ padding: "96px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 20,
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
                marginBottom: 12,
              }}
            >
              The journey
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 500,
                margin: 0,
              }}
            >
              From first session to <em style={{ fontStyle: "italic", color: "var(--primary)" }}>final mix.</em>
            </h2>
          </div>
          <div style={{ color: "var(--ink-muted)", fontSize: 14, maxWidth: 340 }}>
            Every journey is tailored — these are the phases most participants move through.
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${phases.length}, 1fr)`,
            gap: 8,
            position: "relative",
          }}
        >
          {phases.map((p, i) => {
            const s = styleFor(p.state);
            const Icon = p.Icon;
            return (
              <div
                key={p.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    background: s.bg,
                    color: s.ink,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: p.state === "current" ? "var(--shadow-md)" : "var(--shadow-xs)",
                    zIndex: 1,
                  }}
                >
                  <Icon width={22} height={22} strokeWidth={1.5} aria-hidden />
                </div>
                {i < phases.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 28,
                      left: "70%",
                      right: "-30%",
                      height: 1,
                      background: "var(--rule-strong)",
                    }}
                  />
                )}
                <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500, marginTop: 14 }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>{p.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
