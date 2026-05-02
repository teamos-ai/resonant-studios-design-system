function SongProject() {
  const takes = [
    { n: 'Take 03 · v3 mix',  d: '14 April', dur: '2:41', current: true },
    { n: 'Take 02 · rough',   d: '07 April', dur: '2:38' },
    { n: 'Take 01 · demo',    d: '31 March', dur: '2:12' },
  ];
  return (
    <div style={{ background: 'var(--paper-deep)', color: 'var(--ink)', borderRadius: 22, overflow: 'hidden', border: '1px solid var(--rule)', boxShadow: '0 2px 14px rgba(0,0,0,0.25)', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/paper-grain.svg)', backgroundSize: 260, opacity: 0.04, mixBlendMode: 'screen', pointerEvents: 'none' }}/>
      <div style={{ position: 'relative', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ color: 'var(--copper)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Your song · draft</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontStyle: 'italic', fontWeight: 400, marginTop: 6, letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--ink)' }}>"Morning window"</div>
          </div>
          <span style={{ background: 'var(--copper-wash)', color: 'var(--copper)', fontSize: 11, padding: '4px 12px', borderRadius: 999, fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0, marginTop: 4 }}>Mix v3</span>
        </div>

        {/* player */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
          <button style={{ width: 44, height: 44, borderRadius: 22, border: 'none', background: 'var(--copper)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="7,5 19,12 7,19"/></svg>
          </button>
          <div style={{ flex: 1 }}>
            <svg viewBox="0 0 300 24" width="100%" height="24" preserveAspectRatio="none">
              {Array.from({length: 75}).map((_, i) => {
                const h = [6,10,14,18,12,8,16,11,4,14,9,13,17,6,10,15,8,12,16,11][i % 20];
                const past = i < 24;
                return <rect key={i} x={i*4} y={(24-h)/2} width="2" height={h} fill={past ? '#E8A574' : 'rgba(251,247,238,0.28)'} rx="1"/>;
              })}
            </svg>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums', fontWeight: 500, fontSize: 11, color: 'var(--ink-soft)', minWidth: 70, textAlign: 'right' }}>1:18 / 2:41</div>
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--copper)', fontWeight: 700, marginBottom: 10 }}>Takes</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {takes.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, background: t.current ? 'var(--copper-wash)' : 'transparent', cursor: 'pointer' }}>
                <i data-lucide={t.current ? 'pause' : 'play'} style={{ width: 14, height: 14, strokeWidth: 1.5, color: t.current ? 'var(--copper)' : 'var(--ink-soft)' }}></i>
                <span style={{ flex: 1, fontSize: 13, color: t.current ? 'var(--ink)' : 'var(--ink-muted)', fontWeight: t.current ? 600 : 400 }}>{t.n}</span>
                <span style={{ fontSize: 11, color: 'var(--ink-soft)', fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>{t.d}</span>
                <span style={{ fontSize: 11, color: 'var(--ink-soft)', fontFamily: 'var(--font-body)', fontVariantNumeric: 'tabular-nums', fontWeight: 500, minWidth: 34, textAlign: 'right' }}>{t.dur}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.SongProject = SongProject;
