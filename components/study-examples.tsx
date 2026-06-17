// @ts-nocheck
import React from 'react';
import { WIRE_PAPER, WIRE_ACCENT, WIRE_INK, WIRE_NAVY, WLabel } from './primitives';

export const STUDY_EXAMPLES = [
  "An F&B founder whose brand grew on instinct and needs a consumer story before their first major retail pitch",
  "A manufacturer entering consumer retail with little to no consumer research capability and a board asking for confidence to proceed",
  "A PE firm evaluating a consumer brand acquisition needing a fast, credible read on whether the loyalty is real",
  "A brand with one strong product and a leadership team asking what to build next, without losing what made them",
];

export const STUDY_EXAMPLES_HEADLINE = "A Signal Study could look like:";

export function StudyExamplesA() {
  return (
    <section style={{ background: WIRE_PAPER, padding: '100px 80px', borderTop: `1px solid #ddd` }}>
      <WLabel>For Example</WLabel>
      <div style={{ height: 24 }} />
      <h2 className="serif" style={{
        fontSize: 52, fontWeight: 500, lineHeight: 1.1,
        margin: 0, maxWidth: 820, letterSpacing: '-0.015em',
      }}>
        {STUDY_EXAMPLES_HEADLINE}
      </h2>
      <div style={{ height: 56 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 56, rowGap: 48 }}>
        {STUDY_EXAMPLES.map((ex, i) => (
          <div key={i}>
            <div style={{ fontSize: 22, color: WIRE_ACCENT, fontFamily: 'Cormorant Garamond, serif', marginBottom: 16 }}>0{i+1}</div>
            <hr className="wrule-orange" style={{ width: 36, margin: '0 0 20px' }} />
            <div className="serif" style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.3 }}>
              {ex}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StudyExamplesB() {
  return (
    <section style={{ background: WIRE_PAPER, padding: '100px 80px', borderTop: `1px solid #ddd` }}>
      <WLabel>For Example</WLabel>
      <div style={{ height: 24 }} />
      <h2 className="serif" style={{
        fontSize: 52, fontWeight: 500, lineHeight: 1.1,
        margin: 0, maxWidth: 820, letterSpacing: '-0.015em',
      }}>
        {STUDY_EXAMPLES_HEADLINE}
      </h2>
      <div style={{ height: 56 }} />
      <div style={{ borderTop: `1.4px solid ${WIRE_INK}` }}>
        {STUDY_EXAMPLES.map((ex, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr',
            gap: 48, padding: '32px 0',
            borderBottom: `1px solid ${WIRE_INK}`,
            alignItems: 'baseline',
          }}>
            <span className="serif" style={{
              fontSize: 56, color: WIRE_ACCENT, fontStyle: 'italic',
              lineHeight: 1, fontWeight: 400,
            }}>0{i+1}</span>
            <div className="serif" style={{
              fontSize: 30, fontWeight: 500, lineHeight: 1.3,
              letterSpacing: '-0.01em', maxWidth: 880,
            }}>
              {ex}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StudyExamplesC() {
  return (
    <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '100px 80px' }}>
      <WLabel style={{ color: WIRE_ACCENT }}>For Example</WLabel>
      <div style={{ height: 24 }} />
      <h2 className="serif" style={{
        fontSize: 52, fontWeight: 500, lineHeight: 1.1,
        margin: 0, maxWidth: 820, letterSpacing: '-0.015em',
      }}>
        {STUDY_EXAMPLES_HEADLINE}
      </h2>
      <div style={{ height: 56 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
          background: 'rgba(255,255,255,0.18)' }}>
        {STUDY_EXAMPLES.map((ex, i) => (
          <div key={i} style={{ background: WIRE_NAVY, padding: '36px 32px' }}>
            <div className="mono" style={{ fontSize: 12, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 16 }}>
              0{i+1}
            </div>
            <div className="serif" style={{ fontSize: 26, fontWeight: 500, lineHeight: 1.3 }}>
              {ex}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StudyExamplesMobile({ onNavy = false }) {
  const bg = onNavy ? WIRE_NAVY : WIRE_PAPER;
  const fg = onNavy ? '#f3efe8' : WIRE_INK;
  return (
    <section style={{ background: bg, color: fg, padding: '48px 20px',
        borderTop: onNavy ? 'none' : `1px solid #ddd` }}>
      <WLabel style={{ color: WIRE_ACCENT }}>For Example</WLabel>
      <div style={{ height: 16 }} />
      <h2 className="serif" style={{
        fontSize: 28, fontWeight: 500, lineHeight: 1.15, margin: 0,
      }}>{STUDY_EXAMPLES_HEADLINE}</h2>
      <div style={{ height: 28 }} />
      {STUDY_EXAMPLES.map((ex, i) => (
        <div key={i} style={{
          borderTop: `1.2px solid ${onNavy ? 'rgba(255,255,255,0.25)' : WIRE_INK}`,
          padding: '18px 0',
        }}>
          <span className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.15em' }}>0{i+1}</span>
          <div className="serif" style={{ fontSize: 19, fontWeight: 500, lineHeight: 1.3, marginTop: 6 }}>
            {ex}
          </div>
        </div>
      ))}
    </section>
  );
}
