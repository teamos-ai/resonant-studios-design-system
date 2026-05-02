function Story() {
  return (
    <section style={{ background: 'var(--paper-deep)', padding: '96px 40px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center' }}>
        <div style={{
          aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden', position: 'relative',
          background: 'linear-gradient(150deg, #B07848 0%, #6B4B5E 55%, #2B2722 100%)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/paper-grain.svg)', backgroundSize: 220, opacity: 0.22, mixBlendMode: 'overlay' }}/>
          <svg viewBox="0 0 300 380" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
            <ellipse cx="150" cy="160" rx="42" ry="48" fill="#2B1E18" opacity="0.7"/>
            <rect x="140" y="200" width="20" height="160" fill="#1A110C" opacity="0.7"/>
            <circle cx="150" cy="160" r="14" fill="#0d0806"/>
            {/* mic grille */}
            <ellipse cx="150" cy="150" rx="30" ry="36" fill="none" stroke="#CB9870" strokeWidth="0.5" opacity="0.3"/>
          </svg>
          <div style={{ position: 'absolute', bottom: 16, left: 16, color: 'var(--copper-wash)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>Photo · studio mic detail</div>
        </div>
        <div>
          <div style={{ color: 'var(--copper)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>Participant story</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1.2, letterSpacing: '-0.015em', fontWeight: 400, fontStyle: 'italic', color: 'var(--ink)' }}>
            "The first time I heard my voice come back through the speakers, properly recorded — I just sat there. It felt like something I'd made, not something that had been made for me."
          </div>
          <div style={{ marginTop: 20, fontSize: 14, color: 'var(--ink-muted)' }}>
            <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Sam</span> · 8 sessions · finished his first single, <em style={{ fontStyle: 'italic' }}>"Morning window"</em>
          </div>
          <div style={{ marginTop: 24, background: 'var(--oat-deep)', color: 'var(--ink)', border: '1px solid var(--rule)', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <button style={{ width: 36, height: 36, borderRadius: 18, border: 'none', background: 'var(--copper)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="7,5 19,12 7,19"/></svg>
            </button>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontStyle: 'italic' }}>"Morning window" — Sam</div>
              <div style={{ height: 4, borderRadius: 2, background: 'var(--paper-deep)', marginTop: 8, overflow: 'hidden' }}>
                <div style={{ width: '30%', height: '100%', background: 'var(--copper)' }}/>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums', fontWeight: 500, fontSize: 11, color: 'var(--ink-soft)' }}>0:48 / 2:41</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Story = Story;
