"use client";
// @ts-nocheck
import React from 'react';
import {
  WireRoot, WNav, WNavMobile, WFooter, WLabel, WNoteBlock,
  WBtnPrimary, WPara, WIRE_ACCENT, WIRE_INK, WIRE_NAVY, WIRE_PAPER,
  WFade, NewsletterSubscribe
} from './primitives';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';


export const HOME_SUBLINE = "True Signal LLC translates consumer insight into clear strategic direction for businesses entering new markets, scaling beyond instinct, or navigating a major decision.";

export const STAR = [
  { n: '01', t: 'Signal', d: "Identify the tipping point making consumer understanding urgent" },
  { n: '02', t: 'Truth', d: "Uncover what's known, assumed, and missing" },
  { n: '03', t: 'Alignment', d: "Synthesize into shared understanding the team can act on" },
  { n: '04', t: 'Resolve', d: "Clear strategic direction — not research that sits on a shelf" }];

export const PROBLEM_COLS = [
  "Founder-led brands scaling beyond instinct",
  "Manufacturers going DTC for the first time",
  "PE firms with consumer-facing portfolio companies",
  "Companies making major brand or growth decisions"];

export const INDUSTRIES = ["Consumer Goods", "Food & Beverage", "Manufacturing", "Entertainment", "Regional Business"];

// Sacred hero headline
export function HeroHeadline({ size = 76, mode = 'inline-italic', light, accent = WIRE_ACCENT, lineHeight = 1.04 }: any) {
  const fg = light ? '#f3efe8' : WIRE_INK;
  if (mode === 'stacked') {
    return (
      <h1 className="serif display" style={{ fontSize: size, lineHeight, fontWeight: 500, color: fg, margin: 0, letterSpacing: '-0.015em' }}>
        Helping businesses<br />
        that have never had to<br />
        think about the consumer —<br />
        <em style={{ color: accent, fontWeight: 600 }}>start.</em>
      </h1>);
  }
  if (mode === 'masthead') {
    return (
      <h1 className="serif display" style={{ fontSize: size, lineHeight, fontWeight: 500, color: fg, margin: 0, letterSpacing: '-0.02em' }}>
        Helping businesses<br />
        that have never had to think<br />
        about the consumer{' '}
        <span style={{ display: 'inline-block', borderTop: `2px solid ${accent}`, padding: '0 4px' }}>
          <em style={{ color: accent, fontWeight: 600 }}>— start.</em>
        </span>
      </h1>);
  }
  return (
    <h1 className="serif display" style={{ fontSize: size, lineHeight, fontWeight: 500, color: fg, margin: 0, letterSpacing: '-0.015em', textShadow: light ? '0px 4px 24px rgba(0,0,0,0.6)' : 'none' }}>
      Helping businesses that have never had to think about the consumer — <em style={{ color: accent, fontWeight: 600 }}>start.</em>
    </h1>);
}

// ── Shared mini-sections ─────────────────────────────────────────

export function CredibilityBar({ mobile }: any) {
  return (
    <section style={{ background: WIRE_PAPER, padding: mobile ? '40px 20px' : '56px 80px' }}>
      <WLabel>Industries we've worked across</WLabel>
      <div style={{ height: mobile ? 16 : 22 }} />
      <div className="serif" style={{
        fontSize: mobile ? 20 : 28, fontWeight: 500, color: WIRE_INK,
        display: 'flex', flexWrap: 'wrap', gap: mobile ? '4px 14px' : '8px 24px',
        alignItems: 'baseline'
      }}>
        {INDUSTRIES.map((ind, i) =>
          <React.Fragment key={ind}>
            <span>{ind}</span>
            {i < INDUSTRIES.length - 1 && <span style={{ color: WIRE_ACCENT, opacity: 0.7 }}>·</span>}
          </React.Fragment>
        )}
      </div>
    </section>);
}

export function CTAStrip({ mobile }: { mobile?: boolean }) {
  return (
    <section style={{
      background: WIRE_ACCENT, color: 'white', padding: mobile ? '48px 20px' : '72px 80px',
      display: 'flex', flexDirection: mobile ? 'column' : 'row', alignItems: mobile ? 'flex-start' : 'center',
      justifyContent: 'space-between', gap: 24
    }}>
      <h2 className="serif" style={{ fontSize: mobile ? 32 : 48, fontWeight: 500, margin: 0, lineHeight: 1.1, maxWidth: 720 }}>
        Ready to find your <em>True Signal</em>?
      </h2>
      <Link href="/contact" style={{ textDecoration: 'none' }}>
        <button style={{
          background: 'white', color: WIRE_ACCENT, border: 0, cursor: 'pointer',
          padding: mobile ? '14px 22px' : '18px 28px', fontSize: mobile ? 14 : 15,
          fontWeight: 600, fontFamily: 'inherit'
        }}>Start the Conversation →</button>
      </Link>
    </section>);
}

export function MobileFrame({ children }: any) {
  return <WireRoot>{children}</WireRoot>;
}

export function HomeV6Desktop() {
  return (
    <WireRoot>
      
      {/* Hero — V2 asymmetric 7:5 */}
      <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '220px 0 120px', position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex' }}>

        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: `linear-gradient(to bottom, rgba(247,245,242,0) 88%, rgba(247,245,242,0.3) 93%, rgba(247,245,242,0.7) 97%, #f7f5f2 100%)` }} />
        <WFade style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 'clamp(40px, 5vw, 80px)', position: 'relative', zIndex: 2, width: '100%', pointerEvents: 'none' }}>
            <div style={{ flex: '0 1 1400px', width: '100%', display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'clamp(24px, 4vw, 56px)', paddingRight: 'clamp(40px, 5vw, 80px)', pointerEvents: 'none' }}>
              <div style={{ pointerEvents: 'auto', minWidth: 0 }}>
                <WLabel style={{ color: WIRE_ACCENT }}>Consumer Strategy Advisory</WLabel>
                <div style={{ height: 32 }} />
                <HeroHeadline light size="clamp(48px, 6vw, 96px)" />
              </div>
              <div style={{ alignSelf: 'end', paddingBottom: 12, pointerEvents: 'auto', minWidth: 0 }}>
                <hr className="wrule-orange" style={{ width: 48, margin: '0 0 20px' }} />
                <p style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.55, opacity: 0.85, margin: 0, maxWidth: 560, overflowWrap: 'break-word' }}>{HOME_SUBLINE}</p>
                <div style={{ height: 36 }} />
                <WBtnPrimary href="/contact">Let's Talk</WBtnPrimary>
              </div>
            </div>

            {/* Animated Hero Logo for Desktop */}
            <div className="ultrawide-only" style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'center', pointerEvents: 'none', opacity: 0.9 }}>
              <img src="/logos/true-signal-mark-star-orange.svg" alt="" style={{ width: 'clamp(200px, 15vw, 400px)' }} className="hero-logo-animating" />
            </div>
          </div>
        </WFade>
      </section>

      {/* Problem — V2 sticky-left layout */}
      <section style={{ background: WIRE_PAPER, padding: '120px 80px' }}>
        <WFade delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, maxWidth: 1800, margin: '0 auto' }}>
            <div style={{ position: 'sticky', top: 80, alignSelf: 'start' }}>
              <WLabel>Why True Signal</WLabel>
              <div style={{ height: 24 }} />
              <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.05, margin: 0, letterSpacing: '-0.015em' }}>
                Most businesses know what they make. Few truly know <em style={{ color: WIRE_ACCENT }}>who buys it</em> — and why.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {PROBLEM_COLS.map((col, i) =>
                <div key={i} style={{ borderTop: `1.4px solid ${WIRE_INK}`, paddingTop: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                    <span className="mono" style={{ fontSize: 12, color: WIRE_ACCENT, fontWeight: 600, letterSpacing: '0.1em' }}>0{i + 1}</span>
                    <div className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2 }}>{col}</div>
                  </div>
                  <div style={{ height: 12 }} />
                  <WPara lines={2} last="65%" style={{ paddingLeft: 36 }} />
                </div>
              )}
            </div>
          </div>
        </WFade>
      </section>

      {/* STAR — horizontal 4-up, V1 treatment */}
      <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '120px 80px' }}>
        <WFade>
          <div style={{ maxWidth: 1800, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <WLabel style={{ color: WIRE_ACCENT }}>How it Works</WLabel>
                <div style={{ height: 16 }} />
                <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.015em' }}>
                  Every engagement follows the same north star.
                </h2>
              </div>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.3em', fontWeight: 600,
                color: WIRE_ACCENT, textTransform: 'uppercase', flex: '0 0 auto',
              }}>S · T · A · R</span>
            </div>
            <div style={{ height: 72 }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
              {STAR.map((s, i) =>
                <div key={s.n} style={{ borderTop: `1.4px solid ${WIRE_ACCENT}`, paddingTop: 24 }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 44, color: '#8a93a6', fontWeight: 400, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
                  <div className="serif" style={{ fontSize: 30, fontWeight: 500, marginBottom: 14, color: '#fff' }}>{s.t}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.75, margin: 0 }}>{s.d}</p>
                </div>
              )}
            </div>
          </div>
        </WFade>
      </section>

      <CredibilityBar />
      <CTAStrip />
      {/* <NewsletterSubscribe desktop /> */}
      <WFooter />
    </WireRoot>);
}

export function HomeV6Mobile() {
  return (
    <MobileFrame>
      
      <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '112px 20px 140px', position: 'relative', overflow: 'hidden', minHeight: '60vh', display: 'flex' }}>

        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: `linear-gradient(to bottom, rgba(247,245,242,0) 88%, rgba(247,245,242,0.3) 93%, rgba(247,245,242,0.7) 97%, #f7f5f2 100%)` }} />
        <WFade>
          <div style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              <WLabel style={{ color: WIRE_ACCENT }}>Consumer Strategy</WLabel>
              <div style={{ height: 20 }} />
              <HeroHeadline light size={34} lineHeight={1.08} />
              <hr className="wrule-orange" style={{ width: 36, margin: '28px 0 16px' }} />
              <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.85, margin: 0 }}>{HOME_SUBLINE}</p>
              <div style={{ height: 24 }} />
              <WBtnPrimary href="/contact" mobile>Let's Talk</WBtnPrimary>
            </div>
          </div>
        </WFade>
      </section>
      <section style={{ background: WIRE_PAPER, padding: '48px 20px' }}>
        <WFade delay={0.1}>
          <WLabel>Why True Signal</WLabel>
          <div style={{ height: 16 }} />
          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.1, margin: 0 }}>
            Most businesses know what they make. <em style={{ color: WIRE_ACCENT }}>Few truly know who buys it</em>.
          </h2>
          <div style={{ height: 28 }} />
          {PROBLEM_COLS.map((col, i) =>
            <div key={i} style={{ borderTop: `1.2px solid ${WIRE_INK}`, padding: '18px 0' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                <span className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.15em' }}>0{i + 1}</span>
                <div className="serif" style={{ fontSize: 19, fontWeight: 500, lineHeight: 1.25 }}>{col}</div>
              </div>
            </div>
          )}
        </WFade>
      </section>
      <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '48px 20px' }}>
        <WFade>
          <WLabel style={{ color: WIRE_ACCENT }}>How it Works</WLabel>
          <div style={{ height: 16 }} />
          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.15, margin: 0 }}>Every engagement follows the same north star.</h2>
          <div style={{ height: 28 }} />
          {STAR.map((s) =>
            <div key={s.n} style={{ borderTop: `1.4px solid ${WIRE_ACCENT}`, padding: '18px 0' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#8a93a6', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500, marginBottom: 8, color: '#fff' }}>{s.t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.75, margin: 0 }}>{s.d}</p>
            </div>
          )}
        </WFade>
      </section>
      <CredibilityBar mobile />
      <CTAStrip mobile />
      {/* <NewsletterSubscribe desktop={false} /> */}
      <WFooter mobile />
    </MobileFrame>);
}
