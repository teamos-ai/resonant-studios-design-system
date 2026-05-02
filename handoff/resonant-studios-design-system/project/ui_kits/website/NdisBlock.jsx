function NdisBlock() {
  return (
    <section style={{ padding: '0 40px 96px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', background: 'var(--oat-deep)', border: '1px solid var(--rule)', borderRadius: 28, overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/paper-grain.svg)', backgroundSize: 260, opacity: 0.14, mixBlendMode: 'overlay', pointerEvents: 'none' }}/>
        <div style={{ position: 'relative', padding: '56px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ color: 'var(--copper)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>NDIS support</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.6rem)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
              Plan‑managed and<br/><em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>self‑managed</em>, welcome.
            </h2>
            <p style={{ color: 'var(--ink-muted)', fontSize: 16, lineHeight: 1.6, marginTop: 20, maxWidth: 480 }}>
              We work with participants whose sessions fall under Capacity Building — Social, Community and Civic Participation. Your coordinator or plan manager can book with us directly.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              ['Plan‑managed',  'Invoice sent to your plan manager. No out‑of‑pocket.'],
              ['Self‑managed',  'We invoice you directly; you claim in the portal.'],
              ['Support coord.', 'Refer a participant — we\'ll handle intake from there.'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: 'var(--oat)', border: '1px solid var(--rule)', borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--copper)' }}/>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500, color: 'var(--ink)' }}>{t}</div>
                  <div style={{ color: 'var(--ink-muted)', fontSize: 13, marginTop: 2 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.NdisBlock = NdisBlock;
