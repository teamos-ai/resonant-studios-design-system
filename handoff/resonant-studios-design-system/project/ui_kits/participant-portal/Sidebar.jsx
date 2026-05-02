function Sidebar() {
  const items = [
    { i: 'home',            label: 'Overview',   active: true },
    { i: 'calendar',        label: 'Sessions' },
    { i: 'music',           label: 'My song' },
    { i: 'sparkles',        label: 'Goals' },
    { i: 'messages-square', label: 'Messages', badge: 2 },
    { i: 'file-text',       label: 'My plan' },
  ];
  return (
    <aside style={{ width: 240, background: 'var(--paper-deep)', borderRight: '1px solid var(--rule)', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 4, minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px 20px' }}>
        <svg width="26" height="26" viewBox="0 0 64 64">
          <g fill="none" stroke="#E8A574" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="32" cy="32" r="4" fill="#E8A574" stroke="none"/>
            <circle cx="32" cy="32" r="10" opacity="0.9"/>
            <circle cx="32" cy="32" r="17" opacity="0.65"/>
            <circle cx="32" cy="32" r="24" opacity="0.4"/>
          </g>
        </svg>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--ink)' }}>Resonant <em style={{ fontStyle: 'italic' }}>Studios</em></span>
      </div>
      {items.map(it => (
        <a key={it.label} style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '10px 12px', borderRadius: 10,
          fontSize: 14,
          color: it.active ? 'var(--paper)' : 'var(--ink-muted)',
          background: it.active ? 'var(--plum)' : 'transparent',
          fontWeight: it.active ? 600 : 500,
          textDecoration: 'none', cursor: 'pointer',
        }}>
          <i data-lucide={it.i} style={{ width: 18, height: 18, strokeWidth: 1.5 }}></i>
          <span style={{ flex: 1 }}>{it.label}</span>
          {it.badge && <span style={{ background: it.active ? 'rgba(35,31,26,0.18)' : 'var(--copper)', color: it.active ? 'var(--paper)' : 'var(--paper)', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>{it.badge}</span>}
        </a>
      ))}
      <div style={{ flex: 1 }}/>
      <div style={{ borderTop: '1px solid var(--rule)', marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 8px 0' }}>
        <div style={{ width: 32, height: 32, borderRadius: 16, background: 'var(--copper-wash)', color: 'var(--copper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14 }}>S</div>
        <div style={{ fontSize: 13 }}>
          <div style={{ fontWeight: 600, color: 'var(--ink)' }}>Sam C.</div>
          <div style={{ color: 'var(--ink-soft)', fontSize: 11 }}>Participant</div>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
