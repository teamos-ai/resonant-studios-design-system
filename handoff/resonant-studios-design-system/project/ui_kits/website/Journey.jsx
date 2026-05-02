function Journey() {
  const phases = [
    { label: 'Intro call',     sub: 'A free conversation',     icon: 'messages-square', state: 'done' },
    { label: 'Goal setting',   sub: 'Shape the work together', icon: 'sparkles',        state: 'done' },
    { label: 'Skill sessions', sub: 'Build confidence',        icon: 'music',           state: 'current' },
    { label: 'Write',          sub: 'Shape the song',          icon: 'file-text',       state: 'upcoming' },
    { label: 'Record',         sub: 'Tracking sessions',       icon: 'mic',             state: 'upcoming' },
    { label: 'Mix',            sub: 'Make it sound like you',  icon: 'headphones',      state: 'upcoming' },
    { label: 'Release',        sub: 'Spotify‑ready',           icon: 'play',            state: 'upcoming' },
  ];
  const styleFor = s => {
    if (s === 'done')    return { bg: 'var(--sage)',     ink: 'white' };
    if (s === 'current') return { bg: 'var(--plum)',     ink: 'white' };
    return { bg: 'var(--oat-deep)', ink: 'var(--ink-muted)' };
  };
  return (
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ color: 'var(--copper)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>The journey</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 3.4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 500, margin: 0 }}>
              From first session to <em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>final mix.</em>
            </h2>
          </div>
          <div style={{ color: 'var(--ink-muted)', fontSize: 14, maxWidth: 340 }}>
            Every journey is tailored — these are the phases most participants move through.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${phases.length}, 1fr)`, gap: 8, position: 'relative' }}>
          {phases.map((p, i) => {
            const s = styleFor(p.state);
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: 56, height: 56, borderRadius: 28, background: s.bg, color: s.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: p.state === 'current' ? 'var(--shadow-md)' : 'var(--shadow-xs)', zIndex: 1 }}>
                  <i data-lucide={p.icon} style={{ width: 22, height: 22, strokeWidth: 1.5 }}></i>
                </div>
                {i < phases.length - 1 && (
                  <div style={{ position: 'absolute', top: 28, left: '70%', right: '-30%', height: 1, background: 'var(--rule-strong)' }}/>
                )}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, marginTop: 14 }}>{p.label}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 2 }}>{p.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Journey = Journey;
