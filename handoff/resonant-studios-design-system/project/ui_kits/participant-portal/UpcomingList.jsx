function UpcomingList() {
  const items = [
    { d: '29', m: 'Apr', t: 'Writing the bridge',   meta: 'Tue · 2:00 pm · Jess' },
    { d: '06', m: 'May', t: 'Tracking guitar',      meta: 'Tue · 2:00 pm · Jess' },
    { d: '13', m: 'May', t: 'Mix review session',   meta: 'Tue · 2:00 pm · Jess + Tom' },
    { d: '20', m: 'May', t: 'Final mix + release',  meta: 'Tue · 2:00 pm · full team' },
  ];
  return (
    <div style={{ background: 'var(--oat)', border: '1px solid var(--rule)', borderRadius: 18, padding: 24, boxShadow: '0 2px 10px rgba(0,0,0,0.18)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div>
          <div style={{ color: 'var(--copper)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Upcoming</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, marginTop: 4, whiteSpace: 'nowrap', color: 'var(--ink)' }}>Next four sessions</div>
        </div>
        <a style={{ fontSize: 13, color: 'var(--copper)', fontWeight: 600, textDecoration: 'none', cursor: 'pointer' }}>See all →</a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid var(--rule)' }}>
            <div style={{ width: 48, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, lineHeight: 1, color: 'var(--ink)' }}>{it.d}</div>
              <div style={{ fontSize: 10, color: 'var(--ink-soft)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2, fontWeight: 600 }}>{it.m}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: 'var(--ink)', fontWeight: 500 }}>{it.t}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 2 }}>{it.meta}</div>
            </div>
            <i data-lucide="chevron-right" style={{ width: 16, height: 16, strokeWidth: 1.5, color: 'var(--ink-soft)' }}></i>
          </div>
        ))}
      </div>
    </div>
  );
}
window.UpcomingList = UpcomingList;
