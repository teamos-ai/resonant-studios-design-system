"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Card, Cluster, Eyebrow, Heading, Lead, Stack, Badge } from "../../components/ui";

/* =================================================================
   Shared helpers used across the design-system sections.
   ================================================================= */

export function SectionOpener({
  number,
  eyebrow,
  title,
  lead,
  total = 6,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  /** Total number of sections for the "X of N" progress label. Defaults to 6. */
  total?: number;
}) {
  /* `total` is intentionally unused — kept on the prop API so callers
     don't have to change. The "X of N" label was removed in the
     distillation pass; the numbered badge is the section anchor. */
  void total;

  return (
    <header style={{ paddingTop: 160, paddingBottom: 64, textAlign: "center" }}>
      {/* Badge + eyebrow, in a tidy horizontal cluster.
          The 56×3 brand rule and the redundant "X of N" tabular label
          were removed — the numbered badge is the section anchor on
          its own. The italic-primary emphasis word in the title is now
          reserved for the load-bearing sections (Foundations, Components). */}
      <Cluster space={3} align="center" justify="center">
        <span
          aria-label={`Section ${parseInt(number, 10)}`}
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            padding: "8px 14px",
            background: "var(--primary)",
            color: "var(--primary-ink)",
            borderRadius: "var(--r-2)",
            fontFamily: "var(--font-display)",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            boxShadow: "var(--shadow-xs)",
          }}
        >
          {number}
        </span>
        <Eyebrow style={{ fontSize: 13 }}>{eyebrow}</Eyebrow>
      </Cluster>

      <Heading
        level="display"
        as="h2"
        style={{ marginTop: "var(--s-6)", fontSize: "clamp(2.2rem, 4.4vw, 3.2rem)" }}
      >
        {title}
      </Heading>
      <Lead style={{ marginTop: "var(--s-4)", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>{lead}</Lead>
    </header>
  );
}

export function Block({ label, sub, children }: { label: string; sub?: string; children: ReactNode }) {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: sub ? "var(--s-5)" : "var(--s-4)" }}>
        {/* Real h3 — screen-reader users navigate by headings. Eyebrow is the visual treatment. */}
        <Eyebrow as="h3" tone="secondary" style={{ marginBottom: "var(--s-2)" }}>{label}</Eyebrow>
        {sub && <p style={{ fontSize: 14, color: "var(--ink-muted)", margin: "0 auto", lineHeight: 1.55, maxWidth: 560 }}>{sub}</p>}
      </div>
      {children}
    </div>
  );
}

export function PillarBlock({
  title,
  sub,
  rows,
}: {
  title: string;
  sub: string;
  rows: { area: string; commitment: string }[];
}) {
  return (
    <Block label={title} sub={sub}>
      <Card pad="lg" elevation="flat">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {rows.map((r) => (
              <tr key={r.area} style={{ borderTop: "1px solid var(--rule)" }}>
                <td style={{ padding: "var(--s-3) var(--s-2)", fontSize: 13, fontWeight: 500, color: "var(--ink)", width: "30%", verticalAlign: "top" }}>{r.area}</td>
                <td style={{ padding: "var(--s-3) var(--s-2)", fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.55 }}>{r.commitment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Block>
  );
}

/* Stable kebab-case anchor from a free-form title — lowercases, replaces
   non-alphanumeric runs with `-`, trims leading/trailing dashes. Used by
   `<Demo>` to give every primitive its own deep-link target (#button,
   #field-input-textarea). */
function slugifyDemoTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function Demo({ title, code, notes, children }: { title: string; code: string; notes: string; children: ReactNode }) {
  const anchorId = slugifyDemoTitle(title);
  return (
    <section id={anchorId} style={{ scrollMarginTop: 110 }}>
      <Stack space={4}>
        <div style={{ textAlign: "center" }}>
          {/* h4 — sits inside h3 (Block label) which sits inside h2 (SectionOpener). */}
          <Heading level="h4" as="h4">{title}</Heading>
          <code
            style={{
              display: "inline-block",
              marginTop: 8,
              fontSize: 12,
              color: "var(--primary)",
              background: "var(--bg-elevated)",
              padding: "6px 10px",
              borderRadius: "var(--r-2)",
            }}
          >
            {code}
          </code>
          <p style={{ marginTop: 10, fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.55, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>{notes}</p>
        </div>
        <Card pad="lg" elevation="flat" style={{ background: "var(--bg-sunken)" }}>
          <Stack space={4}>{children}</Stack>
        </Card>
      </Stack>
    </section>
  );
}

export function FontSpecimen({
  name,
  role,
  weights,
  sample,
  family,
}: {
  name: string;
  role: string;
  weights: string;
  sample: ReactNode;
  family: string;
}) {
  const isDisplay = family.includes("display");
  return (
    <Card pad="lg" elevation="sm" radius={4}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)", height: "100%" }}>
        <div>
          <div style={{ fontFamily: family, fontSize: 28, lineHeight: 1.1, fontWeight: isDisplay ? 500 : 600, color: "var(--ink)", letterSpacing: "-0.01em" }}>
            {name}
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 4 }}>{role}</div>
        </div>
        <div
          style={{
            fontFamily: family,
            fontSize: isDisplay ? "clamp(1.6rem, 3vw, 2.2rem)" : "1rem",
            lineHeight: isDisplay ? 1.1 : 1.55,
            color: "var(--ink)",
            fontWeight: isDisplay ? 500 : 400,
            letterSpacing: isDisplay ? "-0.02em" : "0",
            flex: 1,
          }}
        >
          {sample}
        </div>
        <div style={{ fontSize: 11, color: "var(--ink-soft)", paddingTop: "var(--s-3)", borderTop: "1px solid var(--rule)", fontFamily: "var(--font-body)", fontVariantNumeric: "tabular-nums" }}>
          {weights}
        </div>
      </div>
    </Card>
  );
}

/* =================================================================
   SectionDivider — image break between sections.
   Lives inside the centred column (NOT full bleed) and matches the
   page's viewport rules. Same dim + vignette treatment as the hero,
   but contained inside a rounded card and shorter.
   ================================================================= */
export function SectionDivider({
  src,
  alt,
  caption,
  height = 360,
}: {
  /** Path under public/. Should already exist in the library. */
  src: string;
  /** Required descriptive alt — the image is meaningful, not decorative. */
  alt: string;
  /** Optional small caption below the image (e.g. tag list, source credit). */
  caption?: ReactNode;
  /** Card height in px. Default 360 — feels substantial without dominating. */
  height?: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        borderRadius: "var(--r-5)",
        overflow: "hidden",
        background: "var(--bg-elevated)",
        border: "1px solid var(--rule)",
        boxShadow: "var(--shadow-md)",
        marginTop: "var(--s-9)",
        marginBottom: "var(--s-9)",
      }}
      className="rs-reduced-data-fallback"
      role="img"
      aria-label={alt}
    >
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 880px) 100vw, 880px"
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {/* Flat dim — pushes the image into the background. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.42)",
          pointerEvents: "none",
        }}
      />
      {/* Soft vignette — matches the hero treatment, lighter (this is a divider, not the entry). */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.35) 90%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
        }}
      />
      {caption && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "clamp(16px, 2.5vw, 24px)",
            color: "var(--ink-on-image)",
            fontSize: "var(--fs-small)",
            fontWeight: 500,
            letterSpacing: "0.02em",
            display: "flex",
            justifyContent: "center",
            /* textShadow is raw rgba under the image-overlay carve-out. */
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

export function ContextRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-muted)" }}>
      <span style={{ color: "var(--primary)", display: "inline-flex" }} aria-hidden>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export function chipStyle(active: boolean): React.CSSProperties {
  return {
    padding: "8px 14px",
    fontSize: 13,
    fontWeight: 500,
    background: active ? "var(--primary-wash)" : "var(--bg-elevated)",
    color: active ? "var(--primary)" : "var(--ink-muted)",
    border: `1px solid ${active ? "transparent" : "var(--rule)"}`,
    borderRadius: 10,
    cursor: "pointer",
    transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)",
    fontFamily: "var(--font-body)",
    minHeight: 36,
  };
}

export type LibraryCategory = { id: string; label: string; description?: string };
export type LibraryImage = {
  filename: string;
  title: string;
  category: string;
  tags?: string[];
  alt?: string;
  source?: string;
  notes?: string;
  credit?: string;
};

export function LibraryCard({ img, categoryLabel }: { img: LibraryImage; categoryLabel: string }) {
  return (
    <Card pad="none" elevation="sm" radius={3} style={{ overflow: "hidden" }}>
      <div
        className="rs-reduced-data-fallback"
        style={{
          aspectRatio: "4 / 3",
          background: "var(--bg-sunken)",
          backgroundImage: `url(/library/${img.filename})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={img.alt ?? img.title}
      />
      <div style={{ padding: "var(--s-4)" }}>
        <Cluster space={2} style={{ marginBottom: "var(--s-2)" }}>
          <Badge tone="primary">{categoryLabel}</Badge>
          {img.tags?.slice(0, 2).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </Cluster>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, lineHeight: 1.25, color: "var(--ink)", marginBottom: 4 }}>
          {img.title}
        </div>
        {img.notes && <p style={{ fontSize: 12, color: "var(--ink-muted)", margin: 0, lineHeight: 1.5 }}>{img.notes}</p>}
        {img.source && <p style={{ fontSize: 11, color: "var(--ink-soft)", margin: "var(--s-2) 0 0", lineHeight: 1.5 }}>{img.source}</p>}
      </div>
    </Card>
  );
}
