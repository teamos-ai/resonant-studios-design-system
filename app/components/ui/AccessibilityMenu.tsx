"use client";

import { useEffect, useRef, useState } from "react";
import { Accessibility, Sun, Moon, Monitor, Type, ChevronDown, Check } from "lucide-react";

export type Theme = "light" | "dark" | "system";
export type Readable = "default" | "easy" | "dyslexia";

const STORAGE_KEY = "rs-a11y";

type Settings = {
  theme: Theme;
  readable: Readable;
  reduceMotion: boolean;
  highContrast: boolean;
};

const DEFAULTS: Settings = {
  theme: "system",
  readable: "default",
  reduceMotion: false,
  highContrast: false,
};

function readSettings(): Settings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    return DEFAULTS;
  }
}

function writeSettings(s: Settings) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    // ignore
  }
}

function applyToDom(s: Settings) {
  const root = document.documentElement;
  if (s.theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", s.theme);
  if (s.readable === "default") root.removeAttribute("data-readable");
  else root.setAttribute("data-readable", s.readable);
  if (s.reduceMotion) {
    root.style.setProperty("--dur-fast", "0ms");
    root.style.setProperty("--dur-mid", "0ms");
    root.style.setProperty("--dur-slow", "0ms");
  } else {
    root.style.removeProperty("--dur-fast");
    root.style.removeProperty("--dur-mid");
    root.style.removeProperty("--dur-slow");
  }
  if (s.highContrast) root.setAttribute("data-contrast", "more");
  else root.removeAttribute("data-contrast");
}

/**
 * Sticky-nav accessibility control. Persists user preferences across
 * sessions via localStorage and applies them to the document root as
 * data attributes the design tokens listen to.
 *
 * Voice: button label is "Accessibility" (sentence case, no '!').
 * Closes on Escape, click-outside, or selecting the same option twice.
 */
export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULTS);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const initial = readSettings();
    setS(initial);
    applyToDom(initial);

    // Sync if another control (e.g. the nav's standalone ThemeToggle) writes
    // to the same localStorage key. Both dispatch `rs-a11y-update`.
    const onExternal = () => setS(readSettings());
    window.addEventListener("rs-a11y-update", onExternal);
    return () => window.removeEventListener("rs-a11y-update", onExternal);
  }, []);

  // Restore focus to the trigger when the popover closes.
  useEffect(() => {
    if (wasOpen.current && !open) triggerRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  const update = (patch: Partial<Settings>) => {
    setS((prev) => {
      const next = { ...prev, ...patch };
      applyToDom(next);
      writeSettings(next);
      return next;
    });
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-rs-a11y-menu]") && !t.closest("[data-rs-a11y-trigger]")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={triggerRef}
        data-rs-a11y-trigger
        aria-label="Accessibility settings"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: open ? "var(--primary-wash)" : "transparent",
          color: open ? "var(--primary)" : "var(--ink)",
          border: "1.5px solid var(--rule-strong)",
          borderRadius: "var(--r-2)",
          padding: "10px 14px",
          fontSize: "var(--fs-small)",
          fontWeight: 500,
          cursor: "pointer",
          minHeight: "var(--tap-target)", // 48px
          transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
        }}
      >
        <Accessibility size={18} strokeWidth={1.75} />
        <span>Accessibility</span>
        <ChevronDown
          size={14}
          strokeWidth={2}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform var(--dur-fast) var(--ease)" }}
        />
      </button>

      {open && (
        <div
          data-rs-a11y-menu
          role="dialog"
          aria-label="Accessibility settings"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            width: 320,
            background: "var(--bg-elevated)",
            border: "1px solid var(--rule)",
            borderRadius: "var(--r-3)",
            padding: 18,
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            zIndex: 30,
          }}
        >
          <Group label="Theme">
            <Segmented
              value={s.theme}
              onChange={(v) => update({ theme: v as Theme })}
              options={[
                { value: "light", label: "Light", icon: <Sun size={14} strokeWidth={2} /> },
                { value: "dark", label: "Dark", icon: <Moon size={14} strokeWidth={2} /> },
                { value: "system", label: "Auto", icon: <Monitor size={14} strokeWidth={2} /> },
              ]}
            />
          </Group>

          <Group label="Reading" hint="Pick what makes the words easiest for you.">
            <Segmented
              value={s.readable}
              onChange={(v) => update({ readable: v as Readable })}
              options={[
                { value: "default", label: "Default" },
                { value: "easy", label: "Easy read", icon: <Type size={14} strokeWidth={2} /> },
                { value: "dyslexia", label: "Dyslexia" },
              ]}
            />
          </Group>

          <Group label="Motion">
            <Toggle
              checked={s.reduceMotion}
              onChange={(v) => update({ reduceMotion: v })}
              label="Reduce motion"
              hint="Removes animations and transitions."
            />
          </Group>

          <Group label="Contrast">
            <Toggle
              checked={s.highContrast}
              onChange={(v) => update({ highContrast: v })}
              label="More contrast"
              hint="Strengthens borders and edges."
            />
          </Group>

          <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "var(--s-3)", fontSize: "var(--fs-micro)", color: "var(--ink-muted)", lineHeight: 1.45 }}>
            Settings are saved to this browser. We never share them.
          </div>
        </div>
      )}
    </div>
  );
}

function Group({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: "var(--fs-micro)", fontWeight: 600, color: "var(--ink)", marginBottom: "var(--s-2)", letterSpacing: "-0.005em" }}>{label}</div>
      {children}
      {hint && <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.45 }}>{hint}</div>}
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
        borderRadius: "var(--r-2)",
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
              fontSize: "var(--fs-micro)",
              fontWeight: 500,
              background: active ? "var(--primary)" : "transparent",
              color: active ? "var(--primary-ink)" : "var(--ink)",
              border: "none",
              borderRadius: 8, /* sub-chip inside the segmented control, intentionally between --r-1 (6) and --r-2 (10). */
              cursor: "pointer",
              minHeight: 44, /* WCAG 2.5.5 AA floor — see BRIEF §5 carve-out. */
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
          borderRadius: "var(--r-2)",
          padding: "12px 14px",
          cursor: "pointer",
          minHeight: "var(--tap-target)", // 48px
          textAlign: "left",
          color: "var(--ink)",
        }}
      >
        <span
          aria-hidden
          style={{
            width: 36,
            height: 20,
            borderRadius: "var(--r-pill)",
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
              borderRadius: "var(--r-pill)",
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
      {hint && <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.45 }}>{hint}</div>}
    </div>
  );
}
