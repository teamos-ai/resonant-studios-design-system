function MessagesPanel() {
  return (
    <div style={{ background: 'var(--oat)', border: '1px solid var(--rule)', borderRadius: 18, padding: 22, boxShadow: '0 2px 10px rgba(0,0,0,0.18)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 17, background: 'var(--sage-wash)', color: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 13 }}>J</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Jess — facilitator</div>
            <div style={{ fontSize: 11, color: 'var(--sage)', display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--sage)' }}/>Usually replies in a few hours</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ alignSelf: 'flex-start', maxWidth: '82%', background: 'var(--paper-deep)', color: 'var(--ink)', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', fontSize: 14, lineHeight: 1.5, border: '1px solid var(--rule)' }}>
          Had a listen to the take from last week — really good work on the second verse. Do you want to try one more pass before Tom gets stuck into the mix?
        </div>
        <div style={{ alignSelf: 'flex-end', maxWidth: '82%', background: 'var(--plum)', color: 'var(--paper)', borderRadius: '14px 14px 4px 14px', padding: '10px 14px', fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>
          Yeah let's do one more. I think I want to change the "window" line.
        </div>
        <div style={{ alignSelf: 'flex-start', maxWidth: '82%', background: 'var(--paper-deep)', color: 'var(--ink)', borderRadius: '14px 14px 14px 4px', padding: '10px 14px', fontSize: 14, lineHeight: 1.5, border: '1px solid var(--rule)' }}>
          Perfect — I'll block the first half of Tuesday for vocals.
        </div>
      </div>
      <div style={{ marginTop: 14, border: '1.5px solid var(--rule-strong)', borderRadius: 12, padding: '8px 12px', background: 'var(--paper-deep)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <input placeholder="Message Jess…" style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink)', padding: '6px 0' }}/>
        <button style={{ background: 'var(--plum)', color: 'var(--paper)', border: 'none', borderRadius: 8, padding: '6px 12px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Send</button>
      </div>
    </div>
  );
}
window.MessagesPanel = MessagesPanel;
