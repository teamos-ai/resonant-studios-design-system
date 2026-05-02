function GoalsCard() {
  const goals = [
    { t: 'Build confidence performing in front of others', p: 70, state: 'In progress' },
    { t: 'Develop song‑writing skills', p: 45, state: 'In progress' },
    { t: 'Finish a professionally recorded song', p: 20, state: 'Up next' },
  ];
  return (
    <div style={{ background: 'var(--oat)', border: '1px solid var(--rule)', borderRadius: 18, padding: 24, boxShadow: '0 2px 10px rgba(0,0,0,0.18)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
        <div>
          <div style={{ color: 'var(--copper)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Your plan goals</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, marginTop: 4, whiteSpace: 'nowrap', color: 'var(--ink)' }}>What we're working on</div>
        </div>
        <button style={{ background: 'transparent', border: 'none', color: 'var(--copper)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Edit goals</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {goals.map((g, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
              <div style={{ fontSize: 14, color: 'var(--ink)', minWidth: 0, flex: 1, lineHeight: 1.4 }}>{g.t}</div>
              <div style={{ fontSize: 10.5, color: 'var(--ink-soft)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0, fontWeight: 600 }}>{g.state}</div>
            </div>
            <div style={{ height: 5, borderRadius: 3, background: 'var(--paper-deep)', overflow: 'hidden' }}>
              <div style={{ width: `${g.p}%`, height: '100%', background: i === 2 ? 'var(--sage)' : 'var(--copper)', borderRadius: 3 }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.GoalsCard = GoalsCard;
