"use client";

import { useState } from "react";
import Script from "next/script";
import {
  Calendar,
  Clock,
  Accessibility as AccessibilityIcon,
  Music,
  Music2,
  Music4,
  Mic,
  Mic2,
  Headphones,
  Guitar,
  Piano,
  Drum,
  Disc3,
  Radio,
  AudioLines,
  AudioWaveform,
  Volume2,
  Speaker,
  Play,
  Pause,
  ListMusic,
} from "lucide-react";
import {
  Eyebrow,
  Heading,
  Stack,
  Cluster,
  Card,
  Button,
  Badge,
  Input,
  Textarea,
  Field,
  Logo,
  Avatar,
  PullQuote,
  AcknowledgementOfCountry,
  ValidationSummary,
  FormShell,
  SchedulerShell,
  type ValidationError,
} from "../../components/ui";
import { ContextRow, Demo, SectionOpener } from "./_shared";

/** Curated music + studio icon set. All render in --primary, 1.5 stroke. */
const iconPack: { Icon: typeof Music; label: string }[] = [
  { Icon: Music, label: "Music" },
  { Icon: Music2, label: "Music2" },
  { Icon: Music4, label: "Music4" },
  { Icon: Mic, label: "Mic" },
  { Icon: Mic2, label: "Mic2" },
  { Icon: Headphones, label: "Headphones" },
  { Icon: Speaker, label: "Speaker" },
  { Icon: Volume2, label: "Volume" },
  { Icon: Radio, label: "Radio" },
  { Icon: Guitar, label: "Guitar" },
  { Icon: Piano, label: "Piano" },
  { Icon: Drum, label: "Drum" },
  { Icon: Disc3, label: "Disc" },
  { Icon: AudioLines, label: "Audio lines" },
  { Icon: AudioWaveform, label: "Waveform" },
  { Icon: ListMusic, label: "Playlist" },
  { Icon: Play, label: "Play" },
  { Icon: Pause, label: "Pause" },
];

export default function Components() {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  return (
    <section id="components" style={{ scrollMarginTop: 110 }}>
      <SectionOpener
        number="02"
        eyebrow="Components"
        title={<>Eighteen primitives, <em style={{ fontStyle: "italic", color: "var(--primary)" }}>token-driven.</em></>}
        lead="Every example below reads from tier-2 semantic tokens only. Flip the theme switch in the floating nav — nothing here will hard-code its way through it."
      />

      <Stack space={9}>
        <Demo title="Button" code="<Button variant='primary'>Book a free discovery call</Button>" notes="4 variants × 3 sizes. Loading state. Dev-mode warns if label ends with '!'.">
          <Cluster space={3}>
            <Button>Book a free discovery call</Button>
            <Button variant="secondary">How sessions run</Button>
            <Button variant="ghost">Refer a participant</Button>
            <Button variant="tertiary">Email Tony</Button>
          </Cluster>
          <Cluster space={3}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button loading>Saving</Button>
            <Button disabled>Disabled</Button>
          </Cluster>
        </Demo>

        <Demo title="Card" code="<Card pad='lg' elevation='md'>…</Card>" notes="4 elevations × 4 pads × 3 radii — all token-driven.">
          <Cluster space={4} align="start">
            <Card pad="md" elevation="sm" style={{ width: 200 }}>
              <Stack space={2}>
                <Eyebrow>Session 4 of 8</Eyebrow>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17 }}>Vocal take, take two</div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>Tue · 2:00 pm · with Tony</div>
              </Stack>
            </Card>
            <Card pad="lg" elevation="md" radius={4} style={{ width: 200 }}>
              <Stack space={2}>
                <Eyebrow tone="secondary">Plan-managed</Eyebrow>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17 }}>$210.69 / session</div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>Billed to your plan manager.</div>
              </Stack>
            </Card>
          </Cluster>
        </Demo>

        <Demo title="Badge" code="<Badge tone='primary'>Plan-managed</Badge>" notes="7 tones × 2 sizes.">
          <Cluster space={2}>
            <Badge>Default</Badge>
            <Badge tone="primary">Plan-managed</Badge>
            <Badge tone="secondary">Self-managed</Badge>
            <Badge tone="accent">Coordinator</Badge>
            <Badge tone="success">Booked</Badge>
            <Badge tone="warning">Reschedule</Badge>
            <Badge tone="error">Cancelled</Badge>
          </Cluster>
        </Demo>

        <Demo title="Field + Input + Textarea" code="<Field label='Email' required hint='…'><Input type='email' /></Field>" notes="Hint and error mutually exclusive. Error sets aria-invalid + role='alert'.">
          <Stack space={4}>
            <Field label="Your name" required hint="First name is enough.">
              <Input placeholder="First name" />
            </Field>
            <Field label="Email" required hint="We'll only use this to send your session reminders.">
              <Input type="email" placeholder="you@example.com" />
            </Field>
            <Field
              label="Email (with error state)"
              required
              error="Please use a valid email address — we'll send the discovery call confirmation here."
            >
              <Input type="email" defaultValue="not-an-email" />
            </Field>
            <Field label="What would a good outcome look like? (optional)">
              <Textarea placeholder="A song I'm proud of · more confidence · just to see what it's like" />
            </Field>
          </Stack>
        </Demo>

        <Demo title="ValidationSummary" code="<ValidationSummary errors={[…]} />" notes="Programmatically focused when errors appear. Each error links to its field.">
          <Stack space={3}>
            <ValidationSummary errors={errors} />
            <Cluster space={2}>
              <Button size="sm" onClick={() => setErrors([
                { fieldId: "demo-email", message: "Please use a valid email address." },
                { fieldId: "demo-phone", message: "Please include an area code." },
              ])}>
                Trigger errors
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setErrors([])}>
                Clear
              </Button>
            </Cluster>
          </Stack>
        </Demo>

        <Demo title="Avatar" code="<Avatar name='Tony Rako' src='…' size='lg' />" notes="Pass src for a real photo. Three sizes — sm 28 px, md 40 px, lg 56 px. Falls back to initials in the display face when src is omitted (never emoji).">
          <Cluster space={3} align="center">
            {/* Console portrait — polished founder headshot. sm / md / lg. */}
            <Avatar name="Tony Rako" size="sm" src="/library/participants/antony-console-portrait.jpg" />
            <Avatar name="Tony Rako" size="md" src="/library/participants/antony-console-portrait.jpg" />
            <Avatar name="Tony Rako" size="lg" src="/library/participants/antony-console-portrait.jpg" />
            {/* Window-light portrait — editorial / storytelling. sm / md / lg. */}
            <Avatar name="Tony Rako" size="sm" src="/library/participants/antony-portrait-window-light.jpg" />
            <Avatar name="Tony Rako" size="md" src="/library/participants/antony-portrait-window-light.jpg" />
            <Avatar name="Tony Rako" size="lg" src="/library/participants/antony-portrait-window-light.jpg" />
          </Cluster>
        </Demo>

        <Demo
          title="Logo"
          code="<Logo variant='mark' size={48} />"
          notes="App icon — speaker mesh with wood trim. The square is the canonical brand glyph: floating nav, favicon, social avatar. It's self-contained (its own dark body + wood trim + white R) so it sits cleanly on both light and dark surfaces without a theme swap. Wordmark is being replaced — new rectangle lock-up coming."
        >
          {/* Mark — three sizes, all the same self-sufficient asset */}
          <Cluster space={6} align="center" justify="center">
            <Logo variant="mark" size={72} href="#" />
            <Logo variant="mark" size={48} href="#" />
            <Logo variant="mark" size={32} href="#" />
          </Cluster>

          {/* Surface check — same icon on a light surface and a dark surface, proving it works on both. */}
          <Cluster space={4} align="center" justify="center" style={{ marginTop: "var(--s-5)", paddingTop: "var(--s-5)", borderTop: "1px solid var(--rule)" }}>
            <div style={{ background: "var(--linen-100)", padding: "var(--s-4) var(--s-5)", borderRadius: "var(--r-3)", display: "inline-flex", alignItems: "center", gap: 12 }}>
              <Logo variant="mark" size={40} href="#" />
              <span style={{ fontSize: 11, color: "rgba(var(--ink-on-light-rgb), 0.66)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>On light</span>
            </div>
            <div style={{ background: "var(--slate-800)", padding: "var(--s-4) var(--s-5)", borderRadius: "var(--r-3)", display: "inline-flex", alignItems: "center", gap: 12 }}>
              <Logo variant="mark" size={40} href="#" />
              <span style={{ fontSize: 11, color: "rgba(var(--ink-on-dark-rgb), 0.66)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>On dark</span>
            </div>
          </Cluster>

          {/* Wordmark — rectangle speaker-mesh lock-up. Same self-sufficient asset, just wider. */}
          <div style={{ marginTop: "var(--s-5)", paddingTop: "var(--s-5)", borderTop: "1px solid var(--rule)" }}>
            <div style={{ fontSize: 11, color: "var(--ink-soft)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "var(--s-3)", textAlign: "center" }}>
              Wordmark
            </div>
            <Cluster space={5} align="center" justify="center">
              <Logo variant="wordmark" size={80} href="#" />
              <Logo variant="wordmark" size={56} href="#" />
              <Logo variant="wordmark" size={36} href="#" />
            </Cluster>
          </div>
        </Demo>

        <Demo
          title="Icon pack"
          code="<Music size={24} strokeWidth={1.5} color='var(--primary)' />"
          notes="Curated Lucide icons for music, instruments, and studio surfaces. All render in `var(--primary)` — the terracotta is legible against both light and dark surfaces, no theme conditional needed. Stroke weight is 1.5 (the system standard, lighter than Lucide's 2 default)."
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
              gap: "var(--s-3)",
            }}
          >
            {iconPack.map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--s-2)",
                  padding: "var(--s-4) var(--s-3)",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--rule)",
                  borderRadius: "var(--r-3)",
                }}
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  color="var(--primary)"
                  aria-hidden="true"
                />
                <span style={{ fontSize: 11, color: "var(--ink-muted)", fontFamily: "var(--font-body)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--ink-soft)", textAlign: "center", margin: 0, lineHeight: 1.55 }}>
            Source: <a href="https://lucide.dev" style={{ color: "var(--primary)" }}>lucide.dev</a> via{" "}
            <code style={{ background: "var(--bg)", padding: "1px 5px", borderRadius: 4, fontSize: 11 }}>lucide-react</code>.
            Tree-shaken — only the imported icons ship in the bundle.
          </p>
        </Demo>

        <Demo title="PullQuote" code="<PullQuote attribution='…'>“…”</PullQuote>" notes="DM Serif italic. Optional attribution.">
          <PullQuote
            attribution={
              <>
                <strong style={{ color: "var(--ink)" }}>Sam</strong> · 8 sessions · finished his first single,{" "}
                <em style={{ fontStyle: "italic" }}>“Morning window”</em>
              </>
            }
          >
            “The first time I heard my voice come back through the speakers, properly recorded — I just sat there. It
            felt like something I&rsquo;d made, not something that had been made for me.”
          </PullQuote>
        </Demo>

        <Demo
          title="FormShell"
          code="<FormShell title=…>{ghlForm}</FormShell>"
          notes="Frame for embedded GHL forms. The live Resonant Studios discovery-call survey is below. Paste the GHL custom-CSS snippet from the BRIEF into GHL → form Settings → Styles → Custom CSS so the field markup inherits our tokens."
        >
          <FormShell
            eyebrow="Free discovery call"
            title="Tell us a little about you."
            titleAs="h5"
            description="Thirty minutes, no commitment. We'll talk through your goals and how sessions might work for you."
            footnote="We'll never share your details. You'll pick a time on the next screen."
            maxWidth="100%"
          >
            <div
              style={{
                background: "var(--bg)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--r-3)",
                overflow: "hidden",
                minHeight: 480,
              }}
            >
              <iframe
                src="https://link.teamos.ai/widget/survey/NBTWVrqTd7WOcix3a26N"
                title="Resonant Studios — discovery call survey"
                id="NBTWVrqTd7WOcix3a26N"
                scrolling="no"
                style={{ width: "100%", border: "none", overflow: "hidden", display: "block", minHeight: 480 }}
              />
            </div>
            {/* GHL auto-resize bootstrap. Same script in the SchedulerShell demo below;
                Next dedupes by src so it loads exactly once. afterInteractive (not
                lazyOnload) — lazyOnload waits for the page to reach idle, which never
                happens on this 35k-px-tall styleguide with 70+ lazy images, so the
                widget would never bootstrap. */}
            <Script src="https://link.teamos.ai/js/form_embed.js" strategy="afterInteractive" />
          </FormShell>
        </Demo>

        <Demo
          title="SchedulerShell"
          code="<SchedulerShell title=…>{ghlCalendar}</SchedulerShell>"
          notes="Frame for the GHL calendar embed. Header above, iframe full-width below — no side meta column. The iframe is the real Resonant Studios discovery-call calendar, embedded live."
        >
          <SchedulerShell
            eyebrow="Book your free discovery call"
            title="Thirty minutes, on the phone."
            titleAs="h5"
            description="Times shown in your local timezone. We'll send a calendar invite once you've booked."
          >
            <div
              style={{
                background: "var(--bg)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--r-3)",
                overflow: "hidden",
                minHeight: 720,
                width: "100%",
              }}
            >
              <iframe
                src="https://link.teamos.ai/widget/booking/Ug1YEiTRiM0UIdqWB2l7"
                title="Resonant Studios — book a discovery call"
                id="Ug1YEiTRiM0UIdqWB2l7_1777726768572"
                scrolling="no"
                style={{ width: "100%", border: "none", overflow: "hidden", display: "block", minHeight: 720 }}
              />
            </div>
            {/* GHL auto-resize bootstrap. Loads once (Next dedupes by src). */}
            <Script src="https://link.teamos.ai/js/form_embed.js" strategy="afterInteractive" />
          </SchedulerShell>
        </Demo>

        <Demo title="AcknowledgementOfCountry" code="<AcknowledgementOfCountry />" notes="Defaults to Wadawurrung + Bunurong (Werribee/Wyndham). Override with children.">
          <AcknowledgementOfCountry />
        </Demo>

        <Card pad="lg" elevation="flat">
          <Stack space={2}>
            <Eyebrow tone="secondary">Live in the floating nav</Eyebrow>
            <Heading level="h4" as="h4">AccessibilityMenu</Heading>
            <p style={{ color: "var(--ink-muted)", lineHeight: 1.55, margin: 0, fontSize: 14 }}>
              Already running — click <strong style={{ color: "var(--ink)" }}>Accessibility</strong> in the floating
              nav above. Settings persist to localStorage.
            </p>
          </Stack>
        </Card>
      </Stack>
    </section>
  );
}
