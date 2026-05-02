import Image from "next/image";
import { Eyebrow, Heading, Lead, Cluster, Badge } from "../../components/ui";

const HERO_IMAGE = "/library/hero/music-studio.jpg";

export default function Hero() {
  return (
    <header style={{ paddingBottom: "var(--s-9)" }}>
      {/* Full-bleed, full-viewport hero. The figcaption owns the entire fold:
          badges → H1 → bento with the orientation copy. */}
      <figure
        style={{
          position: "relative",
          margin: 0,
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          /* Full above the fold. */
          height: "100vh",
          minHeight: 720,
          overflow: "hidden",
          background: "var(--bg)",
        }}
        className="rs-reduced-data-fallback"
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Layer 1 — flat dim. Token-driven (see globals.css image-overlay
            carve-out). Vignette gradient stops below remain raw rgba — they
            are color stops inside a gradient, not separately addressable
            surfaces, and fall under the same carve-out. */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--scrim-image)",
            pointerEvents: "none",
          }}
        />

        {/* Layer 2 — vignette. */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 90%, rgba(0,0,0,0.65) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Caption — fills the figure, content stacked centre. */}
        <figcaption
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--s-6)",
            padding: "clamp(96px, 12vh, 140px) clamp(20px, 5vw, 64px) clamp(24px, 5vh, 64px)",
            textAlign: "center",
            color: "var(--ink-on-image)",
          }}
        >
          <Cluster space={2} justify="center">
            <Badge tone="primary">Resonant Studios</Badge>
            <Badge>Design system · v0.1</Badge>
          </Cluster>

          <Heading
            level="display"
            as="h1"
            style={{
              color: "var(--ink-on-image)",
              fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)",
              lineHeight: 1.05,
              maxWidth: "20ch",
              /* textShadow uses raw rgba — falls under the image-overlay carve-out;
                 shadow blur stops aren't separately addressable as tokens. */
              textShadow: "0 2px 32px rgba(0, 0, 0, 0.65)",
              margin: 0,
            }}
          >
            The <em style={{ fontStyle: "italic", color: "var(--primary)" }}>Resonant Studios</em> design system.
          </Heading>

          {/* Bento — frosted-glass card holding the orientation copy. Theme-aware
              tokens inside (var(--ink), var(--bg-elevated)) so it adapts to light/dark. */}
          <div
            style={{
              maxWidth: 720,
              width: "100%",
              background: "color-mix(in srgb, var(--bg-elevated) 78%, transparent)",
              backdropFilter: "blur(20px) saturate(1.2)",
              WebkitBackdropFilter: "blur(20px) saturate(1.2)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--r-4)",
              padding: "clamp(20px, 3.6vw, 32px)",
              boxShadow: "var(--shadow-lg)",
              color: "var(--ink)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "var(--s-4)",
            }}
          >
            <Eyebrow>How to use this page</Eyebrow>
            <Lead style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 600 }}>
              Everything you need to design and build for Resonant Studios lives below — design tokens, primary
              and secondary colours with hex and RGB values, typography scale and font specimens, spacing,
              radii, shadows, motion, the eighteen React component primitives, voice and microcopy rules, our
              accessibility commitments, and the live image library for the website build.
            </Lead>
            <Cluster space={2} justify="center">
              <Badge tone="secondary">01 Foundations</Badge>
              <Badge tone="secondary">02 Components</Badge>
              <Badge tone="secondary">03 Voice</Badge>
              <Badge tone="secondary">04 Accessibility</Badge>
              <Badge tone="secondary">05 Library</Badge>
            </Cluster>
            <p style={{ fontSize: "var(--fs-small)", color: "var(--ink-soft)", margin: 0 }}>
              Use the floating nav to jump between sections, or scroll on through.
            </p>
          </div>
        </figcaption>
      </figure>
    </header>
  );
}
