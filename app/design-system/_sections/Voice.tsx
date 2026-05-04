import { Badge, Card, Cluster, Stack } from "../../components/ui";
import { Block, SectionOpener } from "./_shared";

const banned = {
  clinical: ["patient", "treatment", "therapy", "therapist", "clinical", "clinician", "intervention", "modality", "diagnosis", "disorder", "condition", "disability services"],
  industry: ["music therapy", "studio hire", "music production services", "clients", "users"],
  sales: ["Get Started", "Sign Up Now", "Limited Time", "Don't Miss Out", "trailing !"],
};

const approved = ["participant", "you", "your song", "your story", "discovery call", "session", "support coordinator", "plan manager", "self-managed", "plan-managed", "studio", "track", "song"];

const microcopyRules: { component: string; rule: string; good: string; bad: string }[] = [
  { component: "Button label", rule: "Verb phrase, sentence case, no '!'.", good: "Book a free discovery call", bad: "Get Started!" },
  { component: "Field error", rule: "Plain language, no blame.", good: "Please use a valid email address.", bad: "Email is invalid." },
  { component: "Field hint", rule: "Preventive, helps before error.", good: "We'll only use this to send your session reminders.", bad: "Don't enter a fake email." },
  { component: "Empty state", rule: "Calm description + how it unblocks.", good: "No sessions scheduled yet. Your coordinator will add them here.", bad: "Nothing to see here!" },
  { component: "Loading", rule: "Plain. No personality.", good: "Loading…", bad: "Hold tight!" },
  { component: "Confirm dialog", rule: "Specific verbs as actions.", good: "Cancel session  +  Keep session", bad: "OK + Cancel" },
  { component: "Avatar fallback", rule: "Initials in display face.", good: "TR (Tony Rako)", bad: "🎵" },
  { component: "Time", rule: "12-hour, lowercase am/pm.", good: "2:00 pm", bad: "14:00 / 02:00 PM" },
  { component: "Date", rule: "Natural language.", good: "Tuesday 6 May", bad: "06/05/2026" },
];

const readability = [
  { rule: "Reading age (participant copy)", value: "Year 7 max (FK Grade Level ≤ 7)" },
  { rule: "Sentence length", value: "Avg ≤ 18 words, max 24" },
  { rule: "Voice", value: "Active by default" },
  { rule: "Word choice", value: "Saxon over Latinate (use, not utilise)" },
  { rule: "Acronyms", value: "Spell out on first use" },
  { rule: "Numerals", value: "UI: numerals · Body: words 1–9" },
  { rule: "Directionals", value: '"Below" / "above" forbidden — use "next" / "previous"' },
];

export default function Voice() {
  return (
    <section id="voice" style={{ scrollMarginTop: 110 }}>
      <SectionOpener
        number="03"
        eyebrow="Voice"
        title="Voice rules are component contracts."
        lead="Brand voice doesn't live in a separate document. It's wired into the components themselves. Button warns in dev mode if a label ends with '!'. Field won't render hint and error at the same time."
      />

      <Stack space={9}>
        <Block label="Approved core terms" sub="Use these.">
          <Card pad="lg" elevation="flat">
            <Cluster space={2}>
              {approved.map((w) => <Badge key={w} tone="success">{w}</Badge>)}
            </Cluster>
          </Card>
        </Block>

        <Block label="Banned everywhere" sub="Hospital / clinical / doctor register. Resonant Studios is not a clinical service.">
          <Card pad="lg" elevation="flat">
            <Cluster space={2}>
              {banned.clinical.map((w) => <Badge key={w} tone="error">{w}</Badge>)}
            </Cluster>
          </Card>
        </Block>

        <Block label="Banned in NDIS-facing copy" sub="Industry / commodity register.">
          <Card pad="lg" elevation="flat">
            <Cluster space={2}>
              {banned.industry.map((w) => <Badge key={w} tone="error">{w}</Badge>)}
            </Cluster>
          </Card>
        </Block>

        <Block label="Banned in CTAs" sub="Sales register. Calm, never peppy.">
          <Card pad="lg" elevation="flat">
            <Cluster space={2}>
              {banned.sales.map((w) => <Badge key={w} tone="error">{w}</Badge>)}
            </Cluster>
          </Card>
        </Block>

        <Block label="Microcopy patterns" sub="Component-by-component.">
          <Card pad="lg" elevation="flat">
            <Stack space={5}>
              {microcopyRules.map((r) => (
                <div key={r.component} style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--s-3)" }}>
                  <Cluster space={3} align="baseline" justify="between">
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500 }}>{r.component}</div>
                    <Badge tone="default">{r.rule}</Badge>
                  </Cluster>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-3)", marginTop: "var(--s-3)" }}>
                    <div style={{ padding: "var(--s-3)", background: "var(--success-wash)", borderRadius: "var(--r-2)" }}>
                      <div style={{ fontSize: 10, color: "var(--success)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Good</div>
                      <div style={{ fontSize: 13, color: "var(--ink)" }}>{r.good}</div>
                    </div>
                    <div style={{ padding: "var(--s-3)", background: "var(--error-wash)", borderRadius: "var(--r-2)" }}>
                      <div style={{ fontSize: 10, color: "var(--error)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Avoid</div>
                      <div style={{ fontSize: 13, color: "var(--ink)" }}>{r.bad}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Stack>
          </Card>
        </Block>

        <Block label="Plain English Australia" sub="Readability targets — enforced via npm run lint:copy.">
          <Card pad="lg" elevation="flat">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {readability.map((r) => (
                  <tr key={r.rule} style={{ borderTop: "1px solid var(--rule)" }}>
                    <td style={{ padding: "var(--s-3) var(--s-2)", fontSize: 13, fontWeight: 500, color: "var(--ink)", width: "40%" }}>{r.rule}</td>
                    <td style={{ padding: "var(--s-3) var(--s-2)", fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.5 }}>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Block>
      </Stack>
    </section>
  );
}
