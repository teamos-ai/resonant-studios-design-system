"use client";

import { useEffect, useState } from "react";
import {
  Accessibility,
  Sun,
  Moon,
  Monitor,
  Type,
  ChevronDown,
  Check,
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
} from "lucide-react";

type Theme = "light" | "dark" | "system";
type Readable = "default" | "easy" | "dyslexia";

export default function Round2Page() {
  const [theme, setTheme] = useState<Theme>("system");
  const [readable, setReadable] = useState<Readable>("default");
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Apply settings to <html> as data attributes.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (readable === "default") root.removeAttribute("data-readable");
    else root.setAttribute("data-readable", readable);
  }, [readable]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--motion-pref", reduceMotion ? "reduce" : "no-preference");
    if (reduceMotion) {
      root.style.setProperty("--dur-fast", "0ms");
      root.style.setProperty("--dur-mid", "0ms");
      root.style.setProperty("--dur-slow", "0ms");
    } else {
      root.style.removeProperty("--dur-fast");
      root.style.removeProperty("--dur-mid");
      root.style.removeProperty("--dur-slow");
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (highContrast) document.documentElement.setAttribute("data-contrast", "more");
    else document.documentElement.removeAttribute("data-contrast");
  }, [highContrast]);

  // Close menu on Escape / click outside.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-a11y-menu]") && !t.closest("[data-a11y-trigger]")) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* ============= STICKY NAV WITH ACCESSIBILITY MENU ============= */}
      <nav
        aria-label="Primary"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          padding: "16px 32px",
          background: "color-mix(in srgb, var(--bg) 82%, transparent)",
          backdropFilter: "blur(12px) saturate(1.1)",
          WebkitBackdropFilter: "blur(12px) saturate(1.1)",
          borderBottom: "1px solid var(--rule)",
          display: "flex",
          alignItems: "center",
          gap: 28,
        }}
      >
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--ink)" }}
        >
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <g fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="32" cy="32" r="4" fill="var(--primary)" stroke="none" />
              <circle cx="32" cy="32" r="10" opacity="0.85" />
              <circle cx="32" cy="32" r="17" opacity="0.6" />
              <circle cx="32" cy="32" r="24" opacity="0.35" />
              <circle cx="32" cy="32" r="30" opacity="0.18" />
            </g>
          </svg>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 21,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Resonant <em style={{ fontStyle: "italic" }}>Studios</em>
          </span>
        </a>

        <div style={{ display: "flex", gap: 28, marginLeft: 28, fontSize: 14, whiteSpace: "nowrap" }}>
          {["How it works", "The journey", "NDIS", "Stories", "Contact"].map((label, i) => (
            <a
              key={label}
              href="#"
              style={{
                color: i === 0 ? "var(--ink)" : "var(--ink-muted)",
                fontWeight: i === 0 ? 500 : 400,
                textDecoration: "none",
                borderBottom: i === 0 ? "1.5px solid var(--primary)" : "none",
                paddingBottom: 3,
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
          {/* Accessibility menu trigger */}
          <div style={{ position: "relative" }}>
            <button
              data-a11y-trigger
              aria-label="Accessibility settings"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: menuOpen ? "var(--primary-wash)" : "transparent",
                color: menuOpen ? "var(--primary)" : "var(--ink)",
                border: "1.5px solid var(--rule-strong)",
                borderRadius: 999,
                padding: "8px 12px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                minHeight: 40,
                transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
              }}
            >
              <Accessibility size={18} strokeWidth={1.75} />
              <span>Accessibility</span>
              <ChevronDown
                size={14}
                strokeWidth={2}
                style={{
                  transform: menuOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform var(--dur-fast) var(--ease)",
                }}
              />
            </button>

            {menuOpen && (
              <div
                data-a11y-menu
                role="dialog"
                aria-label="Accessibility settings"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: 320,
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--rule)",
                  borderRadius: 14,
                  padding: 18,
                  boxShadow: "var(--shadow-lg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <Group label="Theme">
                  <Segmented
                    value={theme}
                    onChange={(v) => setTheme(v as Theme)}
                    options={[
                      { value: "light", label: "Light", icon: <Sun size={14} strokeWidth={2} /> },
                      { value: "dark", label: "Dark", icon: <Moon size={14} strokeWidth={2} /> },
                      { value: "system", label: "Auto", icon: <Monitor size={14} strokeWidth={2} /> },
                    ]}
                  />
                </Group>

                <Group label="Reading" hint="Pick what makes the words easiest for you.">
                  <Segmented
                    value={readable}
                    onChange={(v) => setReadable(v as Readable)}
                    options={[
                      { value: "default", label: "Default" },
                      { value: "easy", label: "Easy read", icon: <Type size={14} strokeWidth={2} /> },
                      { value: "dyslexia", label: "Dyslexia" },
                    ]}
                  />
                </Group>

                <Group label="Motion">
                  <Toggle
                    checked={reduceMotion}
                    onChange={setReduceMotion}
                    label="Reduce motion"
                    hint="Removes animations and transitions."
                  />
                </Group>

                <Group label="Contrast">
                  <Toggle
                    checked={highContrast}
                    onChange={setHighContrast}
                    label="More contrast"
                    hint="Strengthens borders and edges."
                  />
                </Group>

                <div
                  style={{
                    borderTop: "1px solid var(--rule)",
                    paddingTop: 12,
                    fontSize: 12,
                    color: "var(--ink-muted)",
                    lineHeight: 1.45,
                  }}
                >
                  Settings are saved to this browser. We never share them.
                </div>
              </div>
            )}
          </div>

          <button className="btn" style={{ whiteSpace: "nowrap" }}>
            Book an intro call
          </button>
        </div>
      </nav>

      <main id="main" style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 96px" }}>
        <header style={{ marginBottom: 48 }}>
          <div className="eyebrow">Round 2 · Embeds + nav controls</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              margin: "12px 0 0",
            }}
          >
            How the <em style={{ fontStyle: "italic", color: "var(--primary)" }}>booking</em>
            {" "}and{" "}
            <em style={{ fontStyle: "italic", color: "var(--primary)" }}>scheduler</em> embeds will look.
          </h1>
          <p style={{ color: "var(--ink-muted)", fontSize: 17, lineHeight: 1.55, marginTop: 16, maxWidth: 720 }}>
            Use the <strong>Accessibility</strong> button in the nav to switch between dark/light, turn on easy-read,
            switch to a dyslexia-friendly font, reduce motion, or increase contrast — every setting flows through the
            tokens so the form and scheduler restyle live.
          </p>
        </header>

        {/* ============= GHL FORM EMBED WRAPPER ============= */}
        <section style={{ marginBottom: 80 }}>
          <SectionHead
            eyebrow="Booking form (Go High Level embed)"
            title={
              <>
                Wrap the GHL form in a <em style={{ fontStyle: "italic", color: "var(--primary)" }}>FormShell</em>.
              </>
            }
            sub="The shell handles the heading, lead, surface, and shadow. The fields use system tokens via custom CSS pasted into GHL's form settings."
          />

          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--rule)",
              borderRadius: 20,
              padding: 40,
              boxShadow: "var(--shadow-md)",
              maxWidth: 640,
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 12 }}>Free intro call</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 30,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 500,
                marginBottom: 12,
              }}
            >
              Tell us a little about you.
            </h2>
            <p style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55, marginBottom: 28 }}>
              Thirty minutes, no commitment. We&rsquo;ll talk through your goals and how sessions might work for you.
            </p>

            {/* Mocked GHL form. Real embed: <iframe src="..." /> with our custom-CSS snippet applied. */}
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={(e) => e.preventDefault()}>
              <Field label="Your name" htmlFor="name" required>
                <input id="name" className="input" placeholder="First name" required />
              </Field>
              <Field
                label="Email"
                htmlFor="email"
                required
                hint="We&rsquo;ll only use this to send your session reminders."
              >
                <input id="email" type="email" className="input" placeholder="you@example.com" required />
              </Field>
              <Field label="Phone (optional)" htmlFor="phone">
                <input id="phone" type="tel" className="input" placeholder="04xx xxx xxx" />
              </Field>

              <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
                <legend style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>
                  How is your NDIS plan managed?
                </legend>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {ndisOptions.map((opt) => (
                    <label
                      key={opt.id}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "12px 14px",
                        background: "var(--bg)",
                        border: "1px solid var(--rule)",
                        borderRadius: 10,
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name="ndis"
                        value={opt.id}
                        defaultChecked={opt.id === "plan"}
                        style={{ accentColor: "var(--primary)", marginTop: 3 }}
                      />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>{opt.label}</div>
                        <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 2 }}>{opt.hint}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field label="What would a good outcome look like? (optional)" htmlFor="outcome">
                <textarea
                  id="outcome"
                  className="input"
                  rows={3}
                  placeholder="A song I'm proud of · more confidence on stage · just to see what it's like"
                  style={{ resize: "vertical", minHeight: 96 }}
                />
              </Field>

              <button type="submit" className="btn" style={{ marginTop: 8, alignSelf: "flex-start" }}>
                Book an intro call <ArrowRight size={16} strokeWidth={2} />
              </button>
              <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 4 }}>
                You&rsquo;ll pick a time on the next screen. We&rsquo;ll never share your details.
              </p>
            </form>
          </div>
        </section>

        {/* ============= GHL CALENDAR EMBED WRAPPER ============= */}
        <section style={{ marginBottom: 80 }}>
          <SectionHead
            eyebrow="Scheduler (Go High Level calendar)"
            title={
              <>
                The <em style={{ fontStyle: "italic", color: "var(--primary)" }}>SchedulerShell</em> frames the GHL calendar.
              </>
            }
            sub="Calendar grid, time slots, and confirmation step all live inside the GHL iframe — the surrounding chrome is ours, so nothing reads like a third-party widget."
          />

          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--rule)",
              borderRadius: 20,
              padding: 32,
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 32, alignItems: "start" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Pick a time</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    fontWeight: 500,
                    marginBottom: 12,
                  }}
                >
                  Thirty minutes, on the phone.
                </h2>
                <p style={{ color: "var(--ink-muted)", fontSize: 14, lineHeight: 1.55, marginBottom: 20 }}>
                  Times shown in your local timezone. We&rsquo;ll send a calendar invite once you&rsquo;ve booked.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
                  <Meta icon={<CalendarIcon size={14} strokeWidth={1.75} />} label="Tuesday 6 May" />
                  <Meta icon={<Clock size={14} strokeWidth={1.75} />} label="30 minutes · with Jess" />
                  <Meta icon={<Accessibility size={14} strokeWidth={1.75} />} label="Auslan + plain-English available — ask in the form." />
                </div>
              </div>

              {/* Mock calendar grid */}
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--rule)",
                  borderRadius: 14,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500 }}>May 2026</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <CalNav>‹</CalNav>
                    <CalNav>›</CalNav>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, fontSize: 11 }}>
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div key={i} style={{ textAlign: "center", color: "var(--ink-soft)", padding: "4px 0" }}>{d}</div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 3;
                    const isToday = day === 2;
                    const isSelected = day === 6;
                    const hasSlot = day > 0 && day < 31 && [3, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28].includes(day);
                    const inMonth = day > 0 && day < 32;
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={!hasSlot && !isToday}
                        style={{
                          aspectRatio: "1",
                          border: "none",
                          borderRadius: 8,
                          background: isSelected
                            ? "var(--primary)"
                            : hasSlot
                            ? "var(--primary-wash)"
                            : "transparent",
                          color: isSelected
                            ? "var(--primary-ink)"
                            : !inMonth
                            ? "var(--ink-faint)"
                            : hasSlot
                            ? "var(--primary)"
                            : "var(--ink-soft)",
                          fontWeight: isSelected ? 600 : 500,
                          fontSize: 13,
                          cursor: hasSlot || isToday ? "pointer" : "default",
                          fontVariantNumeric: "tabular-nums",
                          outline: isToday && !isSelected ? "1.5px solid var(--primary)" : "none",
                          outlineOffset: -1,
                        }}
                      >
                        {inMonth ? day : ""}
                      </button>
                    );
                  })}
                </div>

                <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontSize: 11, color: "var(--ink-muted)", marginBottom: 4 }}>
                    Available times · Tue 6 May
                  </div>
                  {["10:00 am", "11:30 am", "2:00 pm", "3:30 pm"].map((t, i) => (
                    <button
                      key={t}
                      type="button"
                      style={{
                        padding: "10px 12px",
                        textAlign: "left",
                        background: i === 1 ? "var(--primary)" : "var(--bg-elevated)",
                        color: i === 1 ? "var(--primary-ink)" : "var(--ink)",
                        border: i === 1 ? "1.5px solid var(--primary)" : "1.5px solid var(--rule-strong)",
                        borderRadius: 10,
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer",
                        fontVariantNumeric: "tabular-nums",
                        minHeight: 40,
                      }}
                    >
                      {t}
                      {i === 1 && (
                        <span style={{ marginLeft: 8, fontSize: 11, opacity: 0.85 }}>· selected</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============= GHL CUSTOM CSS NOTES ============= */}
        <section>
          <SectionHead
            eyebrow="GHL custom CSS"
            title={
              <>
                Paste this into the form&rsquo;s <em style={{ fontStyle: "italic" }}>Custom CSS</em> field.
              </>
            }
            sub="GHL's form builder lets you paste CSS that overrides the default theme. This snippet maps GHL's selectors onto our tokens so embedded forms inherit the system."
          />
          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--rule)",
              borderRadius: 14,
              padding: 24,
              fontFamily: "var(--font-mono)",
              fontVariantNumeric: "tabular-nums",
              fontSize: 13,
              lineHeight: 1.55,
              color: "var(--ink)",
              overflowX: "auto",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{ghlCss}</pre>
          </div>
        </section>
      </main>
    </>
  );
}

/* ============= small subcomponents (round-2 only — cleaned up in round 4) ============= */

function Group({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)", marginBottom: 8, letterSpacing: "-0.005em" }}>
        {label}
      </div>
      {children}
      {hint && (
        <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.45 }}>{hint}</div>
      )}
    </div>
  );
}

function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: ReadonlyArray<{ value: T; label: string; icon?: React.ReactNode }>;
}) {
  return (
    <div
      role="radiogroup"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${options.length}, 1fr)`,
        background: "var(--bg)",
        border: "1px solid var(--rule)",
        borderRadius: 10,
        padding: 3,
        gap: 2,
      }}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "8px 10px",
              fontSize: 12,
              fontWeight: 500,
              background: active ? "var(--primary)" : "transparent",
              color: active ? "var(--primary-ink)" : "var(--ink)",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              minHeight: 36,
              transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
            }}
          >
            {opt.icon}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint?: string;
}) {
  return (
    <div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          background: "var(--bg)",
          border: "1px solid var(--rule)",
          borderRadius: 10,
          padding: "10px 12px",
          cursor: "pointer",
          minHeight: 44,
          textAlign: "left",
          color: "var(--ink)",
        }}
      >
        <span
          aria-hidden
          style={{
            width: 36,
            height: 20,
            borderRadius: 999,
            background: checked ? "var(--primary)" : "var(--rule-strong)",
            position: "relative",
            transition: "background var(--dur-fast) var(--ease)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 2,
              left: checked ? 18 : 2,
              width: 16,
              height: 16,
              borderRadius: 999,
              background: checked ? "var(--primary-ink)" : "var(--bg-elevated)",
              transition: "left var(--dur-fast) var(--ease)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {checked && <Check size={10} strokeWidth={3} color="var(--primary)" />}
          </span>
        </span>
        <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>
      </button>
      {hint && (
        <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.45 }}>{hint}</div>
      )}
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          fontWeight: 500,
          margin: "0 0 8px",
        }}
      >
        {title}
      </h2>
      <p style={{ color: "var(--ink-muted)", fontSize: 15, lineHeight: 1.55, maxWidth: 720, margin: 0 }}>{sub}</p>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        style={{
          display: "block",
          fontSize: 14,
          fontWeight: 600,
          color: "var(--ink)",
          marginBottom: 6,
        }}
      >
        {label}
        {required && (
          <span aria-hidden style={{ color: "var(--primary)", marginLeft: 4 }}>*</span>
        )}
      </label>
      {children}
      {hint && (
        <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.45 }}>{hint}</div>
      )}
    </div>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink-muted)" }}>
      <span style={{ color: "var(--primary)", display: "inline-flex" }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function CalNav({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      style={{
        width: 28,
        height: 28,
        borderRadius: 8,
        border: "1px solid var(--rule)",
        background: "var(--bg-elevated)",
        color: "var(--ink-muted)",
        fontSize: 14,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
}

const ndisOptions = [
  { id: "plan", label: "Plan-managed", hint: "Invoices go to your plan manager." },
  { id: "self", label: "Self-managed", hint: "We invoice you directly." },
  { id: "unsure", label: "Not sure yet", hint: "We’ll help you figure it out." },
];

const ghlCss = `/* Resonant Studios — paste into GHL form Settings → Styles → Custom CSS */
.ghl-form,
.ghl-form-content {
  font-family: 'Manrope', system-ui, sans-serif;
  background: transparent;
  color: var(--ink, #E6E8EA);
}
.ghl-form-content label,
.ghl-form-content .form-control-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink, #E6E8EA);
  margin-bottom: 6px;
}
.ghl-form-content input[type="text"],
.ghl-form-content input[type="email"],
.ghl-form-content input[type="tel"],
.ghl-form-content textarea,
.ghl-form-content select {
  width: 100%;
  min-height: 48px;
  background: var(--bg-elevated, #22272B);
  border: 1.5px solid var(--rule-strong, rgba(230,232,234,0.22));
  border-radius: 10px;
  padding: 12px 14px;
  font: inherit;
  color: var(--ink, #E6E8EA);
  transition: border-color 140ms cubic-bezier(0.22,1,0.36,1),
              box-shadow 140ms cubic-bezier(0.22,1,0.36,1);
}
.ghl-form-content input:focus,
.ghl-form-content textarea:focus,
.ghl-form-content select:focus {
  outline: none;
  border-color: var(--primary, #E58F66);
  box-shadow: 0 0 0 3px var(--primary-wash, rgba(229,143,102,0.18));
}
.ghl-form-content input[aria-invalid="true"] {
  border-color: var(--error, #E89A88);
}
.ghl-form-content button[type="submit"],
.ghl-form-content .btn-submit {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1.5px solid transparent;
  background: var(--primary, #E58F66);
  color: var(--primary-ink, #1A0E08);
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.40);
}
.ghl-form-content button[type="submit"]:hover {
  background: var(--primary-hover, #F0A57F);
}`;
