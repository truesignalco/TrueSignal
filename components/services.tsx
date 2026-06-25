"use client";
// @ts-nocheck
import React, { useState } from 'react';
import { WireRoot, WNav, WNavMobile, WFooter, WLabel, WNoteBlock, WBtnPrimary, WBtnOutline, WIRE_ACCENT, WIRE_INK, WIRE_NAVY, WIRE_PAPER, WIRE_GRAY, WFade } from './primitives';
import { StudyExamplesC, StudyExamplesMobile } from './study-examples';
import { PartnerExpectB, PartnerExpectMobile } from './partner-expect';
import Link from 'next/link';

export const TIERS = [
  {
    key: 'sprint',
    label: 'Signal Sprint',
    cadence: '1–2 weeks',
    headline: "Fast, focused. One key question answered.",
    description: "When a decision can't wait. A Signal Sprint delivers a clear consumer read on one defined question. Choose the type that fits where you are — an Audit to map your gaps, a Read to answer one pressing question, or a Test to validate a concept or positioning. Every Sprint ends with a strategic brief and a clear path forward.",
    deliverables: ["Signal Audit — Consumer gap diagnostic", "Signal Read — One question answered", "Signal Test — One focused consumer test"],
    fit: "Teams facing an immediate consumer question — or anyone who wants to see how we work before committing to a larger project.",
    shortFit: "Immediate decisions · First engagements"
  },
  {
    key: 'study',
    label: 'Signal Study',
    cadence: '6–12 weeks',
    headline: "Comprehensive. Consumer grounded. Built to move the business.",
    description: "For the questions that require real depth. A Signal Study goes end-to-end — from stakeholder interviews and research to strategic frameworks and leadership presentations.",
    deliverables: ["Strategic Insight deck — The consumer read", "Consumer grounded framework — Your strategic North Star", "Leadership ready presentation — The room gets it and moves", "Activation recommendations — What to do next, and why"],
    fit: "Companies at an inflection point. Brands preparing for a major launch, repositioning, or expansion. PE firms evaluating portfolio companies or planning consumer-led growth.",
    shortFit: "Inflection points · PE diligence & growth"
  },
  {
    key: 'partner',
    label: 'Signal Partner',
    cadence: 'Monthly retainer',
    headline: "Ongoing. Embedded. The consumer voice in every decision.",
    description: "For teams that need a senior consumer strategist on a consistent basis — not just for one project. Signal Partner is a fractional advisory relationship: a defined number of hours per month, regular touchpoints, and ongoing ownership of the consumer strategy agenda.",
    deliverables: ["Signal Check — 4 hrs/month", "Signal Partner — 8 hrs/month", "Signal Embedded — 15+ hrs/month"],
    fit: "Teams navigating active growth, a major launch, or a post-acquisition build — where consumer clarity is needed on a consistent basis, not just once.",
    shortFit: "Ongoing capability · Fractional advisory"
  }];

export const SERVICES_INTRO = "Every engagement is scoped to where you are and what you need. Start with a Sprint. Go deeper with a Study. Build ongoing capability with a Partner.";

export function tierLabel(t) {
  if (t.key === 'partner') return 'Engagement Levels';
  if (t.key === 'study') return 'Every Study Includes';
  return 'Sprint Options';
}

export function ServicesHeader({ mobile }: any) {
  return (
    <section style={{
      background: WIRE_NAVY, color: '#f3efe8',
      padding: mobile ? '112px 20px 56px' : '220px 80px 120px'
    }}>
      <WFade>
        <WLabel style={{ color: WIRE_ACCENT }}>What We Do</WLabel>
        <div style={{ height: mobile ? 16 : 24 }} />
        <h1 className="serif" style={{
          fontSize: mobile ? 40 : 76, fontWeight: 500,
          margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 980
        }}>
          Three ways to <em style={{ color: WIRE_ACCENT }}>work together.</em>
        </h1>
        <div style={{ height: mobile ? 24 : 40 }} />
        <p style={{ fontSize: mobile ? 15 : 19, lineHeight: 1.55, maxWidth: 720, margin: 0, opacity: 0.85 }}>
          {SERVICES_INTRO}
        </p>
      </WFade>
    </section>);
}

export function ResearchNote({ mobile }: any) {
  return (
    <section style={{ background: WIRE_PAPER, padding: mobile ? '40px 20px' : '64px 80px' }}>
      <div style={{ maxWidth: 880, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '180px 1fr', gap: mobile ? 12 : 56 }}>
        <WLabel>A note on research</WLabel>
        <p className="serif" style={{ fontSize: mobile ? 18 : 22, lineHeight: 1.5, margin: 0, fontWeight: 400, color: '#4a4a4a' }}>
          Not every engagement requires new research. When it does, we design and oversee it — from qualitative interviews to quantitative concept testing and segmentation. Research costs are always scoped separately and passed through transparently.
        </p>
      </div>
    </section>);
}

export function ServicesBottomCTA({ mobile }: any) {
  return (
    <section style={{
      background: WIRE_ACCENT, color: 'white',
      padding: mobile ? '40px 20px' : '64px 80px',
      display: 'flex', alignItems: mobile ? 'flex-start' : 'center',
      flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', gap: 20
    }}>
      <div className="serif" style={{ fontSize: mobile ? 22 : 28, fontWeight: 500, lineHeight: 1.25, maxWidth: 760 }}>
        Not sure where to start? A Signal Sprint is the lowest-risk way to find out.
      </div>
      <Link href="/contact" style={{ textDecoration: 'none' }}>
        <button style={{
          background: 'white', color: WIRE_ACCENT, border: 0, cursor: 'pointer',
          padding: mobile ? '12px 18px' : '14px 22px', fontSize: 14, fontWeight: 600, fontFamily: 'inherit'
        }}>
          Start with a Sprint →
        </button>
      </Link>
    </section>);
}

export function ServicesBDesktop({ activeIndex = 0 }: any) {
  const active = TIERS[activeIndex];
  const others = TIERS.filter((_, i) => i !== activeIndex);
  const deepenLabel = activeIndex === 0 ?
    'Most engagements deepen from here' :
    activeIndex === 1 ?
      'For ongoing capability' :
      'Also available';
  const deepenSub = activeIndex === 0 ?
    'A Sprint is a starting point, not the destination.' :
    activeIndex === 1 ?
      'When a single project becomes a continuous practice.' :
      'For one-off and project-scope work.';
  return (
    <WireRoot>

      <ServicesHeader />
      <section style={{ background: WIRE_PAPER, padding: '80px 80px 0' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 56, flexWrap: 'wrap' }}>
          {TIERS.map((t, i) =>
            <button key={t.key} className="tab-pill" data-index={i} style={{
              padding: '14px 24px', fontSize: 14, fontFamily: 'inherit', fontWeight: 600,
              border: i === activeIndex ? `1.4px solid ${WIRE_INK}` : '1.4px solid transparent',
              background: i === activeIndex ? WIRE_INK : 'transparent',
              color: i === activeIndex ? '#f3efe8' : WIRE_INK,
              borderRadius: 999, cursor: 'default',
              display: 'flex', alignItems: 'center', gap: 10
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: i === activeIndex ? WIRE_ACCENT : '#bbb'
              }} />
              {t.label}
              <span style={{ opacity: 0.6, fontSize: 12, fontWeight: 400 }}>· {t.cadence}</span>
            </button>
          )}
        </div>
      </section>
      <section style={{ background: WIRE_PAPER, padding: '0 80px 100px' }}>
        <WFade>
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64, maxWidth: 1800, margin: '0 auto' }}>
            <div>
              <h2 className="serif" style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em' }}>
                {active.headline}
              </h2>
              <div style={{ height: 32 }} />
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#3d3d3d', maxWidth: 640, margin: 0, fontWeight: "400" }}>{active.description}</p>
              <div style={{ height: 40 }} />
              <div style={{ borderLeft: `2px solid ${WIRE_ACCENT}`, paddingLeft: 18 }}>
                <WLabel>Ideal for</WLabel>
                <p style={{ fontSize: 17, lineHeight: 1.55, color: '#3d3d3d', margin: '8px 0 0', fontStyle: 'italic' }}>{active.fit}</p>
              </div>
            </div>
            <div className="wb wb-soft" style={{ background: '#fff', padding: 32, alignSelf: 'start' }}>
              <WLabel>{tierLabel(active)}</WLabel>
              <div style={{ height: 20 }} />
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {active.deliverables.map((d, i) =>
                  <li key={d} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 8, fontSize: 16, color: '#3d3d3d' }}>
                    <span className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.15em' }}>0{i + 1}</span>{d}
                  </li>
                )}
              </ul>
              <hr style={{ border: 0, borderTop: `1px solid #ddd`, margin: '24px 0' }} />
              <div className="mono" style={{ fontSize: 11, color: '#888', letterSpacing: '0.15em', marginBottom: 8 }}>TIMEFRAME</div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500 }}>{active.cadence}</div>
            </div>
          </div>
        </WFade>
      </section>
      {activeIndex === 1 && <StudyExamplesC />}
      {activeIndex === 2 && <PartnerExpectB />}
      <section style={{ background: WIRE_GRAY, padding: '64px 80px' }}>
        <WFade delay={0.1}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 16 }}>
            <WLabel>{deepenLabel}</WLabel>
            <span className="serif" style={{ fontStyle: 'italic', color: '#666', fontSize: 16 }}>{deepenSub}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 1800, margin: '0 auto' }}>
            {others.map((t, i) => {
              const highlight = activeIndex === 0 && t.key === 'study';
              return (
                <div key={t.key} className="wb" style={{
                  background: highlight ? WIRE_NAVY : '#fff',
                  color: highlight ? '#f3efe8' : WIRE_INK,
                  padding: 28, position: 'relative'
                }}>
                  {highlight &&
                    <div style={{
                      position: 'absolute', top: -10, left: 24,
                      background: WIRE_ACCENT, color: 'white', padding: '4px 12px',
                      fontSize: 10, fontWeight: 600, letterSpacing: '0.15em',
                      fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase'
                    }}>Most common next step</div>
                  }
                  <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 12 }}>
                    {t.label.toUpperCase()} · {t.cadence.toUpperCase()}
                  </div>
                  <div className="serif" style={{ fontSize: 26, fontWeight: 500, lineHeight: 1.2, marginBottom: 14 }}>{t.headline}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: highlight ? 'rgba(255,255,255,0.8)' : '#666', margin: 0 }}>{t.shortFit}</p>
                  <div style={{ height: 16 }} />
                  <button className="tab-pill mono" data-index={TIERS.findIndex(tier => tier.key === t.key)} style={{
                    background: 'none', border: 'none', padding: 0, fontSize: 12,
                    color: highlight ? 'white' : WIRE_ACCENT, letterSpacing: '0.15em', cursor: 'pointer'
                  }}>VIEW DETAILS →</button>
                </div>);
            })}
          </div>
        </WFade>
      </section>
      <ResearchNote />
      <ServicesBottomCTA />
      <WFooter />
    </WireRoot>);
}

export function ServicesBDesktopInteractive() {
  const [idx, setIdx] = useState(0);
  return (
    <div onClickCapture={(e) => {
      let el = e.target as any;
      while (el && el !== e.currentTarget) {
        if (el.tagName === 'BUTTON' && el.classList.contains('tab-pill')) {
          const next = parseInt(el.getAttribute('data-index'), 10);
          if (!isNaN(next) && next !== idx) setIdx(next);
          break;
        }
        el = el.parentElement;
      }
    }} style={{ minHeight: '100%' }}>
      <style>{`.wbtn-primary, .wbtn-outline { cursor: pointer !important; }
              .wire-root button { cursor: pointer; }`}</style>
      <ServicesBDesktop activeIndex={idx} />
    </div>);
}

export function ServicesBMobile({ activeIndex = 0 }: any) {
  const active = TIERS[activeIndex];
  return (
    <WireRoot>

      <ServicesHeader mobile />
      <section style={{ background: WIRE_PAPER, padding: '32px 20px' }}>
        <WFade>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 32 }}>
            {TIERS.map((t, i) =>
              <button key={t.key} className="tab-pill" data-index={i} style={{
                padding: '10px 16px', fontSize: 12, fontFamily: 'inherit', fontWeight: 600,
                border: '1.2px solid ' + (i === activeIndex ? WIRE_INK : '#bbb'),
                background: i === activeIndex ? WIRE_INK : 'transparent',
                color: i === activeIndex ? '#f3efe8' : WIRE_INK,
                borderRadius: 999, whiteSpace: 'nowrap'
              }}>{t.label}</button>
            )}
          </div>
          <div className="mono" style={{ fontSize: 10, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 10 }}>
            {active.cadence.toUpperCase()}
          </div>
          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.1, margin: 0 }}>{active.headline}</h2>
          <div style={{ height: 18 }} />
          <p style={{ fontSize: 14, lineHeight: 1.6, color: '#3d3d3d', margin: 0 }}>{active.description}</p>
          <div style={{ height: 24 }} />
          <div className="wb wb-soft" style={{ padding: 18, background: '#fff' }}>
            <WLabel>{tierLabel(active)}</WLabel>
            <div style={{ height: 12 }} />
            {active.deliverables.map((d, i) =>
              <div key={d} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 6, fontSize: 14, padding: '4px 0' }}>
                <span className="mono" style={{ fontSize: 10, color: WIRE_ACCENT, letterSpacing: '0.15em' }}>0{i + 1}</span>{d}
              </div>
            )}
          </div>
          <div style={{ height: 18 }} />
          <div style={{ borderLeft: `2px solid ${WIRE_ACCENT}`, paddingLeft: 14 }}>
            <WLabel>Ideal for</WLabel>
            <p style={{ fontSize: 13, lineHeight: 1.55, margin: '6px 0 0', fontStyle: 'italic', color: '#3d3d3d' }}>{active.fit}</p>
          </div>
        </WFade>
      </section>
      {activeIndex === 1 && <StudyExamplesMobile onNavy />}
      {activeIndex === 2 && <PartnerExpectMobile />}
      <ResearchNote mobile />
      <ServicesBottomCTA mobile />
      <WFooter mobile />
    </WireRoot>);
}

export function ServicesBMobileInteractive() {
  const [idx, setIdx] = useState(0);
  return (
    <div onClickCapture={(e) => {
      let el = e.target as any;
      while (el && el !== e.currentTarget) {
        if (el.tagName === 'BUTTON' && el.classList.contains('tab-pill')) {
          const next = parseInt(el.getAttribute('data-index'), 10);
          if (!isNaN(next) && next !== idx) setIdx(next);
          break;
        }
        el = el.parentElement;
      }
    }} style={{ minHeight: '100%' }}>
      <style>{`.wire-root button { cursor: pointer; }`}</style>
      <ServicesBMobile activeIndex={idx} />
    </div>);
}
