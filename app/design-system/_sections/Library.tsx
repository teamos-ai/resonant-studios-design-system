"use client";

import { useState } from "react";
import { Card, Cluster, Eyebrow, Stack } from "../../components/ui";
import { LibraryCard, SectionOpener, chipStyle, type LibraryCategory, type LibraryImage } from "./_shared";
import libraryManifest from "../../../public/library/manifest.json";

export default function Library() {
  const categories = (libraryManifest.categories ?? []) as LibraryCategory[];
  const images = (libraryManifest.images ?? []) as LibraryImage[];
  const [activeCat, setActiveCat] = useState<string>("all");

  const filtered = activeCat === "all" ? images : images.filter((i) => i.category === activeCat);
  const grouped: Record<string, LibraryImage[]> = {};
  for (const cat of categories) grouped[cat.id] = [];
  for (const img of images) {
    if (grouped[img.category]) grouped[img.category].push(img);
  }

  return (
    <section id="library" style={{ scrollMarginTop: 110 }}>
      <SectionOpener
        number="06"
        eyebrow="Library"
        title="Reference imagery for the website build."
        lead="Drop images into public/library/<category>/, add an entry to manifest.json, and they appear here. The website's image components will read from the same manifest, so adding here = available for production use."
      />

      <Stack space={6}>
        <div style={{ textAlign: "center" }}>
          <Cluster space={2} justify="center">
            <button onClick={() => setActiveCat("all")} style={chipStyle(activeCat === "all")} aria-pressed={activeCat === "all"}>
              All ({images.length})
            </button>
            {categories.map((c) => (
              <button key={c.id} onClick={() => setActiveCat(c.id)} style={chipStyle(activeCat === c.id)} aria-pressed={activeCat === c.id}>
                {c.label} ({grouped[c.id]?.length ?? 0})
              </button>
            ))}
          </Cluster>
        </div>

        {filtered.length === 0 ? (
          <Card pad="lg" elevation="flat" style={{ textAlign: "center" }}>
            <Stack space={3} align="center">
              <Eyebrow tone="muted">Empty</Eyebrow>
              <p style={{ color: "var(--ink)", margin: 0, fontSize: 15, fontWeight: 500 }}>
                No images in this category yet.
              </p>
              <p style={{ color: "var(--ink-muted)", margin: 0, fontSize: 13, lineHeight: 1.55, maxWidth: 440 }}>
                Drop files into{" "}
                <code style={{ background: "var(--bg)", padding: "2px 6px", borderRadius: 4 }}>public/library/{activeCat === "all" ? "<category>" : activeCat}/</code>
                {" "}and add an entry to{" "}
                <code style={{ background: "var(--bg)", padding: "2px 6px", borderRadius: 4 }}>manifest.json</code>.{" "}
                <a href="/library/README.md" style={{ color: "var(--primary)" }}>Read the schema →</a>
              </p>
            </Stack>
          </Card>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "var(--s-4)" }}>
            {filtered.map((img) => (
              <LibraryCard key={img.filename} img={img} categoryLabel={categories.find((c) => c.id === img.category)?.label ?? img.category} />
            ))}
          </div>
        )}
      </Stack>
    </section>
  );
}
