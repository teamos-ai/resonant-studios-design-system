"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import AccessibilityMenu from "../components/ui/AccessibilityMenu";

const sections = [
  { href: "#foundations", label: "Foundations" },
  { href: "#components", label: "Components" },
  { href: "#voice", label: "Voice" },
  { href: "#examples", label: "Examples" },
  { href: "#accessibility", label: "Accessibility" },
  { href: "#library", label: "Library" },
];

const STORAGE_KEY = "rs-a11y";

/* ============================================================
   ThemeToggle — single-press light/dark toggle next to the
   AccessibilityMenu. Shares the rs-a11y localStorage key with
   the popover, and dispatches `rs-a11y-update` so the popover
   re-syncs its own state when this button is pressed.
   ============================================================ */
function ThemeToggle() {
  const [resolved, setResolved] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const compute = (): "light" | "dark" => {
      const explicit = document.documentElement.getAttribute("data-theme");
      if (explicit === "light") return "light";
      if (explicit === "dark") return "dark";
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    };
    setResolved(compute());

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onMq = () => setResolved(compute());
    const observer = new MutationObserver(() => setResolved(compute()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    mq.addEventListener("change", onMq);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const toggle = () => {
    const next = resolved === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const settings = raw ? JSON.parse(raw) : {};
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...settings, theme: next }));
    } catch {
      // ignore — quota exceeded or disabled
    }
    window.dispatchEvent(new CustomEvent("rs-a11y-update"));
  };

  const Icon = resolved === "light" ? Moon : Sun;
  const label = resolved === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggle}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        background: "transparent",
        color: "var(--ink)",
        border: "1.5px solid var(--rule-strong)",
        borderRadius: 10,
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
        transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
      }}
    >
      <Icon size={18} strokeWidth={1.75} />
    </button>
  );
}

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<string>("foundations");

  useEffect(() => {
    const ids = sections.map((s) => s.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-110px 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 1],
      },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header
        className="rs-floating-nav"
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          width: "calc(100% - 32px)",
          maxWidth: 1008,
          background: "color-mix(in srgb, var(--bg-elevated) 60%, transparent)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          border: "1px solid var(--rule)",
          borderRadius: 20,
          padding: "8px 8px 8px 16px",
          display: "flex",
          alignItems: "center",
          /* Logo flush left, controls flush right via space-between. The nav
             sits absolutely centred so cluster widths can't shift it. */
          justifyContent: "space-between",
          gap: 12,
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* LEFT — logo. */}
        <a
          href="/design-system"
          aria-label="Resonant Studios — design system"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            lineHeight: 0,
            flexShrink: 0,
          }}
        >
          {/* Theme-agnostic app-icon — speaker-mesh body inside a wood-trimmed
              squircle on a transparent canvas, so it works on light, dark, and
              glass surfaces alike. A single <Image> replaces the previous dual
              mark-on-light / mark-on-dark swap for this nav. The `<Logo>`
              primitive (used in the Components demo) still uses the theme-aware
              swap for cases where the surface IS theme-bound. */}
          <Image
            src="/library/logos/app-icon--speaker-mesh.png"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            priority
            style={{ height: 40, width: 40 }}
          />
        </a>

        {/* CENTRE — section anchor links. A normal flex child (no absolute
            positioning) so `justify-content: space-between` on the parent
            distributes the remaining width equally between [logo→nav] and
            [nav→controls]. The two gaps stay visually balanced regardless
            of how wide the controls cluster grows. */}
        <nav
          aria-label="Design system sections"
          className="rs-floating-nav__links"
          style={{
            display: "flex",
            gap: 4,
            fontSize: 13,
          }}
        >
          {sections.map((s) => {
            const id = s.href.slice(1);
            const isActive = id === active;
            return (
              <a
                key={s.href}
                href={s.href}
                aria-current={isActive ? "location" : undefined}
                style={{
                  padding: "8px 14px",
                  borderRadius: 10,
                  background: isActive ? "var(--primary-wash)" : "transparent",
                  color: isActive ? "var(--primary)" : "var(--ink-muted)",
                  textDecoration: "none",
                  fontWeight: isActive ? 600 : 500,
                  whiteSpace: "nowrap",
                  transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
                }}
              >
                {s.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT — controls cluster. */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <ThemeToggle />
          <AccessibilityMenu />
        </div>
      </header>

      <main id="main">{children}</main>

      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          padding: "32px 32px",
          marginTop: 64,
          color: "var(--ink-muted)",
          fontSize: 13,
          textAlign: "center",
          maxWidth: 880,
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-3)",
        }}
      >
        <div>
          <a
            href="https://resonantstudios.com.au"
            style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}
          >
            ← resonantstudios.com.au
          </a>
        </div>
        <div>
          Resonant Studios design system · Direction B · Locked 2026-05-02 · See{" "}
          <code style={{ background: "var(--bg-elevated)", padding: "2px 6px", borderRadius: "var(--r-1)" }}>BRIEF.md</code>{" "}
          for canonical decisions.
        </div>
      </footer>
    </>
  );
}
