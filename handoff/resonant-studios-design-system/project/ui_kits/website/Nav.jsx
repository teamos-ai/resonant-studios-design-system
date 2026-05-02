function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 20,
      padding: '16px 40px',
      background: 'rgba(35, 31, 26, 0.82)',
      backdropFilter: 'blur(12px) saturate(1.1)',
      borderBottom: '1px solid var(--rule)',
      display: 'flex', alignItems: 'center', gap: 28,
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <svg width="30" height="30" viewBox="0 0 64 64">
          <g fill="none" stroke="#B07848" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="32" cy="32" r="4" fill="#B07848" stroke="none"/>
            <circle cx="32" cy="32" r="10" opacity="0.85"/>
            <circle cx="32" cy="32" r="17" opacity="0.6"/>
            <circle cx="32" cy="32" r="24" opacity="0.35"/>
            <circle cx="32" cy="32" r="30" opacity="0.18"/>
          </g>
        </svg>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
          Resonant <em style={{ fontStyle: 'italic' }}>Studios</em>
        </span>
      </a>
      <div style={{ display: 'flex', gap: 28, marginLeft: 28, fontSize: 14, whiteSpace: 'nowrap' }}>
        <a style={{ color: 'var(--ink)', fontWeight: 500, textDecoration: 'none', borderBottom: '1.5px solid var(--copper)', paddingBottom: 3, whiteSpace: 'nowrap' }}>How it works</a>
        <a style={{ color: 'var(--ink-muted)', textDecoration: 'none', whiteSpace: 'nowrap' }}>The journey</a>
        <a style={{ color: 'var(--ink-muted)', textDecoration: 'none', whiteSpace: 'nowrap' }}>NDIS</a>
        <a style={{ color: 'var(--ink-muted)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Stories</a>
        <a style={{ color: 'var(--ink-muted)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Contact</a>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
        <button style={{ background: 'transparent', border: 'none', color: 'var(--ink)', fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap' }}>Sign in</button>
        <button className="btn" style={{ whiteSpace: 'nowrap' }}>Book an intro call</button>
      </div>
    </nav>
  );
}
window.Nav = Nav;
