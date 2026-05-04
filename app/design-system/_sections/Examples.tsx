"use client";

import { useState } from "react";
import { Music, Mic, Headphones, MessagesSquare, Sparkles, FileText, Play, Check } from "lucide-react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Cluster,
  Eyebrow,
  Field,
  FormShell,
  Heading,
  Input,
  Lead,
  PullQuote,
  Stack,
  Textarea,
  ValidationSummary,
  type ValidationError,
} from "../../components/ui";
import { Block, SectionOpener } from "./_shared";

/* =================================================================
   04 — Examples
   In-context compositions showing how the primitives blend together
   into real surfaces (marketing, portal, forms, editorial, FAQ).
   These are bigger than Components demos — they live at the size
   they'd ship at, on real surfaces.
   ================================================================= */

export default function Examples() {
  return (
    <section id="examples" style={{ scrollMarginTop: 110 }}>
      <SectionOpener
        number="04"
        eyebrow="Examples"
        title="The system, in use."
        lead="Six in-context compositions — marketing hero, pricing card, portal bento, discovery-call form, story block, FAQ stack — showing how the primitives, tokens, and voice rules blend on real surfaces."
      />

      <Stack space={9}>
        <Block label="Marketing hero block" sub="Eyebrow → display H1 with italic emphasis → Lead → CTA cluster, plus a floating session card.">
          <MarketingHeroExample />
        </Block>

        <Block label="Pricing card" sub="What participants see at checkout. NDIS line item 04_104_0125_6_1, $70.23/hour weekday day rate, $210.69 per 3-hour session.">
          <PricingExample />
        </Block>

        <Block label="Participant portal bento" sub="Logged-in dashboard pattern — next session, current track, goal progress, recent message.">
          <PortalBentoExample />
        </Block>

        <Block label="Discovery-call form" sub="Hand-rolled with our Field, Input, Textarea, ValidationSummary, and Button primitives. (The GHL embed in Components is the production version.)">
          <FormExample />
        </Block>

        <Block label="Participant story" sub="Editorial pattern — pull quote, attribution with avatar, audio player mock, session count badges.">
          <StoryExample />
        </Block>

        <Block label="FAQ stack" sub="Card-based question + answer pattern. Will switch to Accordion when v1.1 lands.">
          <FaqExample />
        </Block>

        <Block label="Business cards" sub="Three brand registers — editorial, terra, sage — driven entirely by tier-2 tokens. Cassette form references the studio's analog roots; same person, three voices.">
          <BusinessCardsExample />
        </Block>
      </Stack>
    </section>
  );
}

/* ============= 1. Marketing hero ============= */

function MarketingHeroExample() {
  return (
    <Stage>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "var(--s-7)", alignItems: "center" }} className="grid-2">
        <div>
          <Eyebrow>Music-based NDIS support</Eyebrow>
          <Heading
            level="display"
            as="h3"
            style={{ marginTop: "var(--s-3)", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
          >
            A song that&rsquo;s really yours.
          </Heading>
          <Lead style={{ marginTop: "var(--s-4)" }}>
            Personalised, music-based sessions that build confidence, skill, and self-expression — ending, if you
            want, in a Spotify-ready song that&rsquo;s really yours.
          </Lead>
          <Cluster space={2} style={{ marginTop: "var(--s-5)" }}>
            <Button>Book a free discovery call</Button>
            <Button variant="secondary">How sessions run</Button>
          </Cluster>
          <Cluster space={4} style={{ marginTop: "var(--s-5)" }}>
            <SmallDot label="Plan-managed" />
            <SmallDot label="Self-managed" />
            <SmallDot label="All experience levels" />
          </Cluster>
        </div>

        {/* Floating session card */}
        <div style={{ position: "relative", height: "100%", minHeight: 280 }}>
          <Card pad="lg" elevation="md" radius={4} style={{ position: "absolute", top: "50%", left: 0, right: 0, transform: "translateY(-50%)" }}>
            <Eyebrow>Session 4 of 8</Eyebrow>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, lineHeight: 1.2, marginTop: "var(--s-2)" }}>
              Vocal take, take two
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 4 }}>Tue · 2:00 pm · with Tony</div>
            <div style={{ marginTop: "var(--s-4)", display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
              <Avatar name="Tony Rako" size="sm" />
              <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>You&rsquo;re working on it together.</span>
            </div>
          </Card>
        </div>
      </div>
    </Stage>
  );
}

function SmallDot({ label }: { label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-muted)" }}>
      <span style={{ width: 8, height: 8, borderRadius: "var(--r-pill)", background: "var(--secondary)" }} aria-hidden />
      {label}
    </span>
  );
}

/* ============= 2. Pricing card ============= */

function PricingExample() {
  return (
    <Stage>
      <Card pad="lg" elevation="md" radius={4} style={{ maxWidth: 480, margin: "0 auto" }}>
        <Stack space={4}>
          <div>
            <Eyebrow>12-week programme</Eyebrow>
            <div style={{ display: "flex", alignItems: "baseline", gap: "var(--s-2)", marginTop: "var(--s-3)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 6vw, 3.6rem)", fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                $210.69
              </span>
              <span style={{ fontSize: 14, color: "var(--ink-muted)" }}>/ 3-hour session</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: "var(--s-2)", lineHeight: 1.55, fontVariantNumeric: "tabular-nums" }}>
              $70.23 per hour · NDIS line item 04_104_0125_6_1 · weekday daytime rate
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--s-4)" }}>
            <p style={{ fontSize: 14, color: "var(--ink-muted)", lineHeight: 1.6, margin: 0 }}>
              Weekly one-on-one music production sessions for 12 weeks, fully customised to your goals — building
              skills, confidence, and the song itself.
            </p>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
            {[
              "One-on-one with Tony in the studio",
              "3 hours per week, every week",
              "A finished, professionally produced track",
              "Released on Spotify under your name",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)", lineHeight: 1.55 }}>
                <Check size={16} strokeWidth={2} color="var(--secondary)" style={{ marginTop: 3, flexShrink: 0 }} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Cluster space={2}>
            <Badge tone="primary">Plan-managed</Badge>
            <Badge tone="primary">Self-managed</Badge>
          </Cluster>

          <Button>Book a free discovery call</Button>
          <p style={{ fontSize: 12, color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
            Billed to your plan manager. No out-of-pocket if you&rsquo;re plan-managed.
          </p>
        </Stack>
      </Card>
    </Stage>
  );
}

/* ============= 3. Participant portal bento ============= */

function PortalBentoExample() {
  return (
    <Stage>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridAutoRows: "minmax(180px, auto)", gap: "var(--s-3)" }} className="grid-2">
        {/* Next session — spans 2 rows */}
        <Card pad="lg" elevation="sm" radius={3} style={{ gridRow: "span 2" }}>
          <Stack space={4}>
            <Eyebrow>Next session</Eyebrow>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, lineHeight: 1.2, color: "var(--ink)" }}>
                Vocal take, take two
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 4 }}>Tuesday 6 May · 2:00 pm</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", paddingTop: "var(--s-3)", borderTop: "1px solid var(--rule)" }}>
              <Avatar name="Tony Rako" size="md" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>Tony</div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>Your facilitator</div>
              </div>
            </div>
            <Cluster space={2}>
              <Badge tone="success">Confirmed</Badge>
              <Badge>Session 4 of 8</Badge>
            </Cluster>
          </Stack>
        </Card>

        {/* Goal progress */}
        <Card pad="md" elevation="sm" radius={3}>
          <Stack space={3}>
            <Eyebrow tone="secondary">Goal</Eyebrow>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500, color: "var(--ink)" }}>
              Confidence on stage
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-muted)", marginBottom: 6, fontVariantNumeric: "tabular-nums" }}>
                <span>4 of 8 sessions</span>
                <span>50%</span>
              </div>
              <div style={{ height: 6, borderRadius: "var(--r-pill)", background: "var(--bg)", overflow: "hidden" }}>
                <div style={{ width: "50%", height: "100%", background: "var(--secondary)" }} />
              </div>
            </div>
          </Stack>
        </Card>

        {/* Current track */}
        <Card pad="md" elevation="sm" radius={3}>
          <Stack space={3}>
            <Eyebrow tone="secondary">Current track</Eyebrow>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
              <button
                aria-label="Play preview of Morning window"
                style={{ width: 44, height: 44, borderRadius: "var(--r-pill)", border: "none", background: "var(--primary)", color: "var(--primary-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
              >
                <Play size={16} fill="currentColor" />
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: "var(--ink)" }}>
                  &ldquo;Morning window&rdquo;
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-muted)", fontVariantNumeric: "tabular-nums", marginTop: 2 }}>
                  0:48 / 2:41
                </div>
              </div>
            </div>
          </Stack>
        </Card>

        {/* Recent message — full width.
            `1 / -1` spans whatever column count exists (2 on desktop, 1 if
            the .grid-2 mobile collapse rule fires). `span 2` would force the
            grid to always create 2 columns even when collapsed, defeating
            the mobile fix. */}
        <Card pad="md" elevation="sm" radius={3} style={{ gridColumn: "1 / -1" }}>
          <div style={{ display: "flex", gap: "var(--s-3)", alignItems: "flex-start" }}>
            <Avatar name="Tony Rako" size="sm" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--s-3)" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>Tony</div>
                <div style={{ fontSize: 11, color: "var(--ink-soft)", flexShrink: 0 }}>2 hours ago</div>
              </div>
              <p style={{ fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.55, margin: "4px 0 0" }}>
                Good work on the vocal take. I&rsquo;ve roughed in the harmony layer for you to try Tuesday — bring
                a notebook if you want to write the bridge.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Stage>
  );
}

/* ============= 4. Discovery-call form (hand-rolled) ============= */

function FormExample() {
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const next: ValidationError[] = [];
    if (!data.get("name")) next.push({ fieldId: "form-ex-name", message: "Please tell us your first name." });
    if (!data.get("email")) next.push({ fieldId: "form-ex-email", message: "Please use a valid email address." });
    setErrors(next);
    setShowSummary(true);
  };

  return (
    <Stage>
      <FormShell
        eyebrow="Free discovery call"
        title="Tell us a little about you."
        titleAs="h4"
        description="Thirty minutes, no commitment. We'll talk through your goals and how sessions might work for you."
        footnote="We never share your details. You'll pick a time on the next screen."
        maxWidth="100%"
      >
        <form onSubmit={handleSubmit} noValidate>
          <Stack space={4}>
            {showSummary && <ValidationSummary errors={errors} />}

            <Field label="Your name" required hint="First name is enough.">
              <Input id="form-ex-name" name="name" placeholder="First name" />
            </Field>

            <Field label="Email" required hint="We'll only use this to send your session reminders.">
              <Input id="form-ex-email" name="email" type="email" placeholder="you@example.com" />
            </Field>

            <Field label="Phone (optional)">
              <Input id="form-ex-phone" name="phone" type="tel" placeholder="04xx xxx xxx" />
            </Field>

            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: "var(--s-2)" }}>
                How is your NDIS plan managed?
              </legend>
              <Stack space={2}>
                {[
                  { id: "plan", label: "Plan-managed", hint: "Invoices go to your plan manager." },
                  { id: "self", label: "Self-managed", hint: "We invoice you directly." },
                  { id: "unsure", label: "Not sure yet", hint: "We'll help you figure it out." },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--s-3)",
                      padding: "var(--s-3) var(--s-4)",
                      background: "var(--bg)",
                      border: "1px solid var(--rule)",
                      borderRadius: "var(--r-2)",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name="ndis"
                      value={opt.id}
                      defaultChecked={opt.id === "plan"}
                      style={{ accentColor: "var(--primary)", marginTop: 3, flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{opt.label}</div>
                      <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 2 }}>{opt.hint}</div>
                    </div>
                  </label>
                ))}
              </Stack>
            </fieldset>

            <Field label="What would a good outcome look like? (optional)">
              <Textarea
                id="form-ex-outcome"
                name="outcome"
                rows={3}
                placeholder="A song I'm proud of · more confidence on stage · just to see what it's like"
              />
            </Field>

            <Button type="submit" style={{ alignSelf: "flex-start" }}>Book a free discovery call</Button>
          </Stack>
        </form>
      </FormShell>
    </Stage>
  );
}

/* ============= 5. Participant story ============= */

function StoryExample() {
  return (
    <Stage>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "var(--s-7)", alignItems: "center" }} className="grid-2">
        <div
          style={{
            aspectRatio: "4 / 5",
            borderRadius: "var(--r-4)",
            overflow: "hidden",
            background: "var(--bg-elevated)",
            backgroundImage: "url(/library/studio/studio-side.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "var(--shadow-md)",
          }}
          role="img"
          aria-label="Studio side — wood paneling and monitors."
        />

        <div>
          <Eyebrow>Participant story</Eyebrow>
          <PullQuote
            size="md"
            attribution={
              <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginTop: "var(--s-2)" }}>
                <Avatar name="Sam" size="sm" tone="secondary" />
                <span>
                  <strong style={{ color: "var(--ink)" }}>Sam</strong> · 8 sessions · finished his first single,{" "}
                  <em style={{ fontStyle: "italic" }}>&ldquo;Morning window&rdquo;</em>
                </span>
              </div>
            }
            style={{ marginTop: "var(--s-3)" }}
          >
            &ldquo;The first time I heard my voice come back through the speakers, properly recorded — I just sat
            there. It felt like something I&rsquo;d made, not something that had been made for me.&rdquo;
          </PullQuote>

          <Card pad="md" elevation="sm" radius={3} style={{ marginTop: "var(--s-5)", display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
            <button
              aria-label="Play preview of Morning window"
              style={{ width: 44, height: 44, borderRadius: "var(--r-pill)", border: "none", background: "var(--primary)", color: "var(--primary-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
            >
              <Play size={16} fill="currentColor" />
            </button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: "var(--ink)" }}>
                &ldquo;Morning window&rdquo; — Sam
              </div>
              <div style={{ height: 4, borderRadius: 2, background: "var(--bg)", marginTop: 8, overflow: "hidden" }}>
                <div style={{ width: "30%", height: "100%", background: "var(--primary)" }} />
              </div>
            </div>
            <span style={{ fontSize: 11, color: "var(--ink-soft)", fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
              0:48 / 2:41
            </span>
          </Card>

          <Cluster space={2} style={{ marginTop: "var(--s-4)" }}>
            <Badge tone="primary">Vocals</Badge>
            <Badge tone="primary">Lyrics by Sam</Badge>
            <Badge tone="success">Released on Spotify</Badge>
          </Cluster>
        </div>
      </div>
    </Stage>
  );
}

/* ============= 6. FAQ stack ============= */

const faqs = [
  {
    q: "Is this music therapy?",
    a: "No. Resonant Studios is a music production studio, not a clinical service. We work with NDIS participants on real songwriting and recording — under Capacity Building, Social Community and Civic Participation, not under any therapy line item.",
  },
  {
    q: "How does NDIS billing work?",
    a: "We invoice your plan manager directly if you're plan-managed (no out-of-pocket). If you're self-managed, we invoice you and you claim it back through the NDIS portal. Each 3-hour session is $210.69 — the standard NDIS weekday daytime rate.",
  },
  {
    q: "Do I need to know how to play an instrument?",
    a: "No experience needed. Some participants come in singing, some come in writing, some come in just listening. We meet you where you are and build from there.",
  },
  {
    q: "What if I miss a session?",
    a: "Let your support coordinator know as soon as you can. We don't charge for cancellations made more than 48 hours ahead. Inside 48 hours, the standard NDIS short-notice cancellation rule applies.",
  },
];

function FaqExample() {
  return (
    <Stage>
      <Stack space={3} style={{ maxWidth: 640, margin: "0 auto" }}>
        {faqs.map((f, i) => (
          <Card key={f.q} pad="md" elevation="sm" radius={3}>
            <Cluster space={3} align="start">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  color: "var(--primary)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  paddingTop: 4,
                  fontVariantNumeric: "tabular-nums",
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <Heading level="h4" as="h4">{f.q}</Heading>
                <p style={{ fontSize: 14, color: "var(--ink-muted)", lineHeight: 1.6, marginTop: "var(--s-2)" }}>
                  {f.a}
                </p>
              </div>
            </Cluster>
          </Card>
        ))}
      </Stack>
    </Stage>
  );
}

/* ============= Stage wrapper — the "in use" surface =============
   Mirrors the Demo card from Components but with a slightly different
   visual cue (lighter background, thicker padding) so reviewers know
   "this is a composition example, not a primitive specimen". */

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <Card pad="lg" elevation="flat" radius={4} style={{ background: "var(--bg)" }}>
      {children}
    </Card>
  );
}

/* ============= 7. Business cards ============= */

/* Cassette-shaped business-card mockups. Three variants — editorial,
   terra, sage — covering the warm/professional/calm registers of the
   brand. Each card consumes only tier-2 semantic tokens so it inherits
   theme switching and contrast guarantees from the foundation layer. */

type CardVariant = {
  /** Outer cassette body colour. */
  body: string;
  /** Inner label panel colour. */
  label: string;
  /** Ink (text) colour on the label. Should clear AA on `label`. */
  ink: string;
  /** Quieter ink for footer / role lines. */
  inkSoft: string;
  /** Accent stripe colour (above and below the tape window). */
  accent: string;
  /** Side-A badge colours. */
  badgeBg: string;
  badgeInk: string;
  /** Whether the display name renders in italic (signature register). */
  italicName?: boolean;
  /** Optional descriptor under the name e.g. "Recording Studio". */
  descriptor: string;
};

const CARD_VARIANTS: { id: string; tone: string; v: CardVariant }[] = [
  {
    id: "editorial",
    tone: "Editorial — cream body, slate label",
    v: {
      body: "var(--linen-100)",
      label: "var(--slate-800)",
      ink: "#E6E8EA",
      inkSoft: "rgba(230, 232, 234, 0.66)",
      accent: "var(--terra-500)",
      badgeBg: "var(--linen-100)",
      badgeInk: "var(--slate-800)",
      descriptor: "Music production studio",
    },
  },
  {
    id: "terra",
    tone: "Terra — slate body, terracotta label",
    v: {
      body: "var(--slate-800)",
      label: "var(--terra-500)",
      ink: "#FFFFFF",
      inkSoft: "rgba(255, 255, 255, 0.82)",
      accent: "var(--terra-800)",
      badgeBg: "#FFFFFF",
      badgeInk: "var(--terra-700)",
      italicName: true,
      descriptor: "Music production studio",
    },
  },
  {
    id: "sage",
    tone: "Sage — cream body, forest label",
    v: {
      body: "var(--linen-100)",
      label: "var(--forest-600)",
      ink: "#FFFFFF",
      inkSoft: "rgba(255, 255, 255, 0.82)",
      accent: "var(--forest-800)",
      badgeBg: "#FFFFFF",
      badgeInk: "var(--forest-700)",
      descriptor: "Music production studio",
    },
  },
];

function BusinessCardsExample() {
  return (
    <Stack space={5}>
      {CARD_VARIANTS.map(({ id, tone, v }) => (
        <div key={id}>
          <Eyebrow tone="muted" style={{ marginBottom: "var(--s-3)" }}>{tone}</Eyebrow>
          <CassetteCard v={v} />
        </div>
      ))}
    </Stack>
  );
}

function CassetteCard({ v }: { v: CardVariant }) {
  const screw = (corner: { top?: number; right?: number; bottom?: number; left?: number }) => (
    <span
      aria-hidden
      style={{
        position: "absolute",
        ...corner,
        width: 8,
        height: 8,
        borderRadius: "var(--r-pill)",
        background: "rgba(0, 0, 0, 0.35)",
        boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255, 255, 255, 0.08)",
      }}
    />
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 640,
        aspectRatio: "1.75 / 1",
        background: v.body,
        borderRadius: "var(--r-3)",
        boxShadow: "var(--shadow-md)",
        padding: "clamp(14px, 2.4%, 22px)",
        overflow: "hidden",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {/* Body screws — 4 corners. */}
      {screw({ top: 10, left: 10 })}
      {screw({ top: 10, right: 10 })}
      {screw({ bottom: 10, left: 10 })}
      {screw({ bottom: 10, right: 10 })}

      {/* Label panel — inset, takes the full inner area. */}
      <div
        style={{
          position: "absolute",
          inset: "clamp(22px, 4%, 32px)",
          background: v.label,
          color: v.ink,
          borderRadius: "var(--r-2)",
          padding: "clamp(14px, 3%, 22px) clamp(18px, 4%, 28px)",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          fontFamily: "var(--font-body)",
          boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Top accent stripe. */}
        <div aria-hidden style={{ position: "absolute", top: "20%", left: 0, right: 0, height: 1, background: v.accent, opacity: 0.55 }} />
        <div aria-hidden style={{ position: "absolute", bottom: "20%", left: 0, right: 0, height: 1, background: v.accent, opacity: 0.55 }} />

        {/* Top row — name + descriptor. */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: v.italicName ? "italic" : "normal",
              fontSize: "clamp(22px, 4.4%, 34px)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
              color: v.ink,
            }}
          >
            Tony Rako
          </div>
          <div
            style={{
              fontSize: "clamp(10px, 1.4%, 12px)",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: v.inkSoft,
              marginTop: 4,
            }}
          >
            Founder · Resonant Studios
          </div>
        </div>

        {/* Centre row — Side A badge + tape window. */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(8px, 2%, 16px)",
            paddingTop: "clamp(6px, 1.5%, 10px)",
            paddingBottom: "clamp(6px, 1.5%, 10px)",
          }}
        >
          {/* Side A badge. */}
          <div
            aria-hidden
            style={{
              flexShrink: 0,
              padding: "8px 10px",
              borderRadius: "var(--r-1)",
              background: v.badgeBg,
              color: v.badgeInk,
              fontFamily: "var(--font-body)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.1,
              boxShadow: "0 1px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            Side<br />A
          </div>

          {/* Tape window — hub gears + tape spool. */}
          <TapeWindow />
        </div>

        {/* Bottom row — contact line. */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            fontSize: "clamp(10px, 1.5%, 12px)",
            fontWeight: 500,
            color: v.inkSoft,
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "0.02em",
            paddingTop: 4,
          }}
        >
          <span>info@resonantstudios.com.au</span>
          <span style={{ opacity: 0.6 }}>·</span>
          <span>www.resonantstudios.com.au</span>
        </div>
      </div>
    </div>
  );
}

function TapeWindow() {
  // The tape window is intentionally rendered with raw black/brown so it
  // reads as plastic + magnetic tape regardless of the surrounding label
  // colour. This is the one place in the design system where neutral
  // greyscale is correct because we're rendering a plastic component, not
  // a UI surface — outside the BRIEF's "warm dark" rule.
  return (
    <svg
      viewBox="0 0 220 70"
      role="img"
      aria-label="Tape window with hub gears"
      style={{ flex: 1, height: "auto", maxHeight: 70, display: "block" }}
    >
      {/* Inner well */}
      <rect x="0" y="0" width="220" height="70" rx="6" fill="#0F0F10" />

      {/* Tape strip between the hubs */}
      <rect x="55" y="28" width="110" height="14" fill="url(#tape)" />

      {/* Left hub */}
      <circle cx="38" cy="35" r="24" fill="#1A1A1B" />
      <circle cx="38" cy="35" r="15" fill="#262628" stroke="#3A3A3C" strokeWidth="1" />
      {/* hub spokes */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <rect
          key={`l-${deg}`}
          x="36.5"
          y="22"
          width="3"
          height="6"
          fill="#3A3A3C"
          transform={`rotate(${deg} 38 35)`}
        />
      ))}

      {/* Right hub */}
      <circle cx="182" cy="35" r="24" fill="#1A1A1B" />
      <circle cx="182" cy="35" r="15" fill="#262628" stroke="#3A3A3C" strokeWidth="1" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <rect
          key={`r-${deg}`}
          x="180.5"
          y="22"
          width="3"
          height="6"
          fill="#3A3A3C"
          transform={`rotate(${deg} 182 35)`}
        />
      ))}

      <defs>
        <linearGradient id="tape" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4A2E18" />
          <stop offset="0.5" stopColor="#704224" />
          <stop offset="1" stopColor="#4A2E18" />
        </linearGradient>
      </defs>
    </svg>
  );
}
