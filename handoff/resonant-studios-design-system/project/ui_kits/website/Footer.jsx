function Footer() {
  return (
    <footer style={{ background: 'var(--paper-deep)', color: 'var(--ink-muted)', borderTop: '1px solid var(--rule)', padding: '64px 40px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 64 64">
                <g fill="none" stroke="#CB9870" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="32" cy="32" r="4" fill="#CB9870" stroke="none"/>
                  <circle cx="32" cy="32" r="10" opacity="0.85"/>
                  <circle cx="32" cy="32" r="17" opacity="0.6"/>
                  <circle cx="32" cy="32" r="24" opacity="0.35"/>
                </g>
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--ink)' }}>Resonant <em style={{ fontStyle: 'italic' }}>Studios</em></span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 320, margin: 0 }}>
              Music‑based NDIS support for self‑managed and plan‑managed participants.
            </p>
            <div style={{ marginTop: 20, padding: '12px 14px', border: '1px solid var(--rule)', borderRadius: 10, fontSize: 12, lineHeight: 1.5 }}>
              We acknowledge the Traditional Custodians of the land on which we work, and pay our respects to Elders past and present.
            </div>
          </div>
          {[
            ['Programme',  ['How it works', 'The journey', 'Sessions', 'Stories']],
            ['NDIS',       ['Plan‑managed', 'Self‑managed', 'Support coordinators', 'Pricing']],
            ['Contact',    ['Book an intro call', 'Email us', 'Studio location', 'FAQ']],
          ].map(([h, items]) => (
            <div key={h}>
              <div style={{ color: 'var(--ink)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>{h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
                {items.map(x => <a key={x} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>{x}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--rule)', marginTop: 48, paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-soft)' }}>
          <span>© 2026 Resonant Studios</span>
          <span>NDIS registration · Privacy · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
