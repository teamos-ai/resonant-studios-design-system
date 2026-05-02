function NextSession() {
  return (
    <div style={{ background: 'linear-gradient(135deg, var(--oat) 0%, var(--oat-deep) 100%)', color: 'var(--ink)', borderRadius: 22, padding: 30, position: 'relative', overflow: 'hidden', border: '1px solid var(--rule)', boxShadow: '0 2px 14px rgba(0,0,0,0.25)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/paper-grain.svg)', backgroundSize: 260, opacity: 0.06, mixBlendMode: 'screen', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: 120 }}>
        <svg viewBox="0 0 240 240" width="240" height="240">
          <g fill="none" stroke="#E8A574" strokeWidth="1" opacity="0.45">
            <circle cx="120" cy="120" r="30"/>
            <circle cx="120" cy="120" r="55"/>
            <circle cx="120" cy="120" r="80"/>
            <circle cx="120" cy="120" r="105"/>
          </g>
        </svg>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ color: 'var(--copper)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 14 }}>Your next session · 4 of 8</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 500, margin: 0, color: 'var(--ink)' }}>
          Laying down the<br/><em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>vocal take.</em>
        </h2>
        <div style={{ display: 'flex', gap: 28, marginTop: 24, fontSize: 14 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 600 }}>When</div>
            <div style={{ color: 'var(--ink)', fontSize: 15 }}>Tue 22 April · 2:00 pm</div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 600 }}>With</div>
            <div style={{ color: 'var(--ink)', fontSize: 15 }}>Jess, facilitator</div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 4, fontWeight: 600 }}>Where</div>
            <div style={{ color: 'var(--ink)', fontSize: 15 }}>Studio B · Brunswick</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
          <button style={{ background: 'var(--plum)', color: 'var(--paper)', border: 'none', borderRadius: 10, padding: '11px 18px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Get directions</button>
          <button style={{ background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)', borderRadius: 10, padding: '11px 18px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>Reschedule</button>
        </div>
      </div>
    </div>
  );
}
window.NextSession = NextSession;
