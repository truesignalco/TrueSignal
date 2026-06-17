// @ts-nocheck
import React from 'react';
import { WIRE_PAPER, WIRE_ACCENT, WIRE_INK, WIRE_NAVY, WLabel } from './primitives';

export const PARTNER_EXPECT = [
  {
    headline: "Regular cadence",
    sub: "Scheduled check-ins so consumer thinking stays connected to what's happening in the business.",
    body: "Standing working sessions — weekly or biweekly, set in advance so they hold. Each one is built around the consumer questions actually shaping decisions in your business that week, not a generic update.",
    pace: "Weekly · Biweekly",
  },
  {
    headline: "Fast response",
    sub: "Async questions answered within 24–48 hours, not days.",
    body: "Strategic questions don't always wait for the next meeting. Pings, decks, and decisions land in your inbox with an senior consumer perspective— typically same-day and never beyond two business days.",
    pace: "24–48 hours",
  },
  {
    headline: "Quarterly step-back",
    sub: "A dedicated session to assess direction and adjust the agenda.",
    body: "Every three months we pause the day-to-day rhythm for a longer working session — looking back at what we've learned, looking forward at what's changing in your category, and resetting priorities for the quarter ahead.",
    pace: "Every 90 days",
  },
];

export const PARTNER_EXPECT_HEADLINE = "What to expect as a Signal Partner.";

export function PartnerExpectA() {
  return (
    <section style={{ background: WIRE_PAPER, padding: '100px 80px', borderTop: '1px solid #ddd' }}>
      <WLabel>The Working Rhythm</WLabel>
      <div style={{ height: 24 }} />
      <h2 className="serif" style={{
        fontSize: 52, fontWeight: 500, lineHeight: 1.1,
        margin: 0, maxWidth: 820, letterSpacing: '-0.015em',
      }}>
        {PARTNER_EXPECT_HEADLINE}
      </h2>
      <div style={{ height: 56 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
        {PARTNER_EXPECT.map((it, i) => (
          <div key={i}>
            <div style={{ fontSize: 22, color: WIRE_ACCENT, fontFamily: 'Cormorant Garamond, serif', marginBottom: 16 }}>0{i+1}</div>
            <hr className="wrule-orange" style={{ width: 36, margin: '0 0 20px' }} />
            <h3 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2, margin: '0 0 12px' }}>
              {it.headline}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: '#3d3d3d', margin: '0 0 16px', fontStyle: 'italic' }}>
              {it.sub}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: '#555', margin: 0 }}>
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PartnerExpectB() {
  return (
    <section style={{ background: WIRE_PAPER, padding: '100px 80px', borderTop: '1px solid #ddd' }}>
      <WLabel>The Working Rhythm</WLabel>
      <div style={{ height: 24 }} />
      <h2 className="serif" style={{
        fontSize: 52, fontWeight: 500, lineHeight: 1.1,
        margin: 0, maxWidth: 820, letterSpacing: '-0.015em',
      }}>
        {PARTNER_EXPECT_HEADLINE}
      </h2>
      <div style={{ height: 56 }} />
      <div style={{ position: 'relative', maxWidth: 1100 }}>
        {/* connecting rule */}
        <div style={{ position: 'absolute', left: 18, top: 14, bottom: 14, width: 1.4, background: WIRE_ACCENT, opacity: 0.4 }} />
        {PARTNER_EXPECT.map((it, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '60px 1fr 200px', gap: 40,
            padding: '32px 0',
            borderBottom: i < PARTNER_EXPECT.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
            alignItems: 'baseline', position: 'relative',
          }}>
            {/* dot */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 16, height: 16, borderRadius: '50%',
                background: WIRE_PAPER, border: `2px solid ${WIRE_ACCENT}`,
                position: 'absolute', left: 10, top: 4, zIndex: 1,
              }} />
            </div>
            <div>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.15, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                {it.headline}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#3d3d3d', margin: '0 0 8px', fontStyle: 'italic' }}>
                {it.sub}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: '#555', margin: 0, maxWidth: 620 }}>
                {it.body}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: 11, color: '#888', letterSpacing: '0.2em', marginBottom: 6 }}>CADENCE</div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: WIRE_ACCENT }}>{it.pace}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PartnerExpectC() {
  return (
    <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '100px 80px' }}>
      <WLabel style={{ color: WIRE_ACCENT }}>The Working Rhythm</WLabel>
      <div style={{ height: 24 }} />
      <h2 className="serif" style={{
        fontSize: 52, fontWeight: 500, lineHeight: 1.1,
        margin: 0, maxWidth: 820, letterSpacing: '-0.015em',
      }}>
        {PARTNER_EXPECT_HEADLINE}
      </h2>
      <div style={{ height: 56 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
          background: 'rgba(255,255,255,0.18)' }}>
        {PARTNER_EXPECT.map((it, i) => (
          <div key={i} style={{ background: WIRE_NAVY, padding: '36px 32px' }}>
            <div className="mono" style={{ fontSize: 12, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 18 }}>
              0{i+1}
            </div>
            <h3 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2, margin: '0 0 12px' }}>
              {it.headline}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(243,239,232,0.9)', margin: '0 0 16px', fontStyle: 'italic' }}>
              {it.sub}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(243,239,232,0.7)', margin: 0 }}>
              {it.body}
            </p>
            <div style={{ height: 20 }} />
            <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em' }}>{it.pace.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PartnerExpectMobile({ onNavy = false }) {
  const bg = onNavy ? WIRE_NAVY : WIRE_PAPER;
  const fg = onNavy ? '#f3efe8' : WIRE_INK;
  const muted = onNavy ? 'rgba(243,239,232,0.7)' : '#555';
  return (
    <section style={{ background: bg, color: fg, padding: '48px 20px',
        borderTop: onNavy ? 'none' : '1px solid #ddd' }}>
      <WLabel style={{ color: WIRE_ACCENT }}>The Working Rhythm</WLabel>
      <div style={{ height: 16 }} />
      <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.15, margin: 0 }}>
        {PARTNER_EXPECT_HEADLINE}
      </h2>
      <div style={{ height: 28 }} />
      {PARTNER_EXPECT.map((it, i) => (
        <div key={i} style={{
          borderTop: `1.2px solid ${onNavy ? 'rgba(255,255,255,0.25)' : '#ddd'}`,
          padding: '20px 0',
        }}>
          <span className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.15em' }}>0{i+1} · {it.pace.toUpperCase()}</span>
          <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.2, margin: '8px 0 8px' }}>
            {it.headline}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: muted, margin: '0 0 10px', fontStyle: 'italic' }}>
            {it.sub}
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: muted, margin: 0 }}>
            {it.body}
          </p>
        </div>
      ))}
    </section>
  );
}
