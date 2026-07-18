"use client";
// @ts-nocheck
import React from 'react';
import { WireRoot, WNav, WNavMobile, WFooter, WLabel, WNoteBlock, WBtnPrimary, WBtnOutline, WIRE_ACCENT, WIRE_INK, WIRE_NAVY, WIRE_PAPER, WIRE_GRAY, WIRE_FILL, WNote, WFade } from './primitives';
import { CTAStrip } from './home';
import { DynamicSection, customRichTextComponents } from './dynamic-section';
import { PortableText } from '@portabletext/react';

export const ABOUT_QUOTE = "I kept seeing the same gap — businesses exceptional at what they make, with far less clarity on who actually buys it.";

export const ABOUT_DIFFERENT = [
  { t: "Cross-industry pattern recognition", d: "We've seen how consumers behave across categories most specialists never bridge." },
  { t: "Judgment over process", d: "We translate insight into decisions — not just decks that gather dust on a shelf." },
  { t: "A senior strategist, not a team", d: "You work directly with someone who has done this across categories — no junior translation layer, no learning on your dime." }
];

export function AboutHeader({ mobile }: { mobile?: boolean }) {
  return (
    <section style={{
      background: WIRE_NAVY, color: '#f3efe8',
      padding: mobile ? '112px 20px 56px' : '220px 80px 120px'
    }}>
      <WFade>
        <WLabel style={{ color: WIRE_ACCENT }}>About True Signal</WLabel>
        <div style={{ height: mobile ? 16 : 24 }} />
        <h1 className="serif" style={{
          fontSize: mobile ? 40 : 76, fontWeight: 500,
          margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 1100
        }}>
          Built by someone who has <em style={{ color: WIRE_ACCENT }}>lived inside the problem.</em>
        </h1>
      </WFade>
    </section>);
}

export function AboutCDesktop({ aboutPageData }: any) {
  return (
    <WireRoot>

      <AboutHeader mobile={false} />

      {/* Founder letter */}
      <section style={{ background: WIRE_PAPER, padding: '120px 80px' }}>
        <WFade>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <WLabel>A letter from the founder</WLabel>
            <div style={{ height: 32 }} />
            
            {aboutPageData?.founderLetter ? (
              <PortableText value={aboutPageData.founderLetter} components={customRichTextComponents} />
            ) : (
              <>
                <p className="serif" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.3, color: WIRE_NAVY, margin: 0, letterSpacing: '-0.01em' }}>
                  I kept seeing the same gap — businesses exceptional at what they make,
                  with <em style={{ color: WIRE_ACCENT }}>far less clarity on who actually buys it.</em>
                </p>
                <div style={{ height: 36 }} />
                <p style={{ fontSize: 17, lineHeight: 1.75, color: '#3d3d3d', margin: 0 }}>
                  That pattern showed up everywhere I worked — consumer goods, food and
                  beverage, manufacturing, entertainment. Brands at every stage from
                  emerging to established. The consumer was an afterthought until it
                  became a crisis.
                </p>
                <div style={{ height: 24 }} />
                <p style={{ fontSize: 17, lineHeight: 1.75, color: '#3d3d3d', margin: 0 }}>
                  True Signal exists to change that — to bring senior-level consumer
                  strategy thinking to the businesses that need it most, without the
                  big-firm overhead, the junior teams, or the bloated timelines.
                </p>
              </>
            )}

            <div style={{ height: 36 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <hr style={{ width: 36, border: 0, borderTop: `1.4px solid ${WIRE_ACCENT}`, margin: 0 }} />
              <span className="serif" style={{ fontStyle: 'italic', fontSize: 22, fontWeight: 500 }}>Jessica</span>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: '#888' }}>FOUNDER</span>
            </div>
          </div>
        </WFade>
      </section>

      {/* What makes us different */}
      {aboutPageData?.whatMakesUsDifferent?.map((section: any, idx: number) => (
        <DynamicSection key={idx} section={section} />
      ))}

      {/* Engagement Snapshots */}
      {aboutPageData?.engagementSnapshots?.map((section: any, idx: number) => (
        <DynamicSection key={idx} section={section} />
      ))}

      {/* Client perspective / testimonial slots */}
      <section style={{ display: 'none', background: WIRE_PAPER, padding: '100px 80px' }}>
        <WFade>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
            <div>
              <WLabel>Client perspective</WLabel>
              <div style={{ height: 12 }} />
              <h2 className="serif" style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.015em' }}>
                What it's like to work with us.
              </h2>
            </div>
            <span className="serif" style={{ fontStyle: 'italic', fontSize: 17, color: '#888', maxWidth: 360 }}>
              We'll fill these in as engagements complete and clients are open to sharing.
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {[
              { tag: 'F&B · Emerging', placeholder: 'Founder pull-quote about repositioning + outcome.' },
              { tag: 'Mfg · DTC', placeholder: 'COO quote on the DTC readiness sprint.' },
              { tag: 'PE · Portfolio', placeholder: 'Operating partner quote on the consumer landscape work.' },
              { tag: 'Regional brand', placeholder: 'Marketing lead on the rebrand.' }].
              map((s, i) =>
                <div key={i} className="wb wb-dash" style={{ background: '#fff', padding: 28, minHeight: 200 }}>
                  <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 14 }}>{s.tag.toUpperCase()}</div>
                  <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.35, color: '#999', margin: 0 }}>
                    "{s.placeholder}"
                  </div>
                  <div style={{ height: 18 }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: WIRE_FILL }} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#888' }}>[Name, Title]</div>
                      <div style={{ fontSize: 11, color: '#aaa' }}>[Company]</div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </WFade>
      </section>

      <CTAStrip />
      <WFooter />
    </WireRoot>);
}

export function AboutCMobile({ aboutPageData }: any) {
  return (
    <WireRoot>

      <AboutHeader mobile />
      <section style={{ background: WIRE_PAPER, padding: '48px 20px' }}>
        <WLabel>A letter from the founder</WLabel>
        <div style={{ height: 20 }} />
        
        {aboutPageData?.founderLetter ? (
          <PortableText value={aboutPageData.founderLetter} components={customRichTextComponents} />
        ) : (
          <>
            <p className="serif" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.3, color: WIRE_NAVY, margin: 0 }}>
              I kept seeing the same gap — businesses exceptional at what they make,
              with <em style={{ color: WIRE_ACCENT }}>far less clarity on who actually buys it.</em>
            </p>
            <div style={{ height: 20 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#3d3d3d', margin: 0 }}>
              That pattern showed up everywhere — consumer goods, F&amp;B, manufacturing, entertainment. The consumer was an afterthought until it became a crisis.
            </p>
            <div style={{ height: 16 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#3d3d3d', margin: 0 }}>
              True Signal exists to change that — senior-level consumer strategy without the big-firm overhead.
            </p>
          </>
        )}

        <div style={{ height: 24 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <hr style={{ width: 24, border: 0, borderTop: `1.4px solid ${WIRE_ACCENT}`, margin: 0 }} />
          <span className="serif" style={{ fontStyle: 'italic', fontSize: 18 }}>Jessica</span>
        </div>
      </section>

      {/* What makes us different */}
      <div style={{ margin: '0' }}>
        {aboutPageData?.whatMakesUsDifferent?.map((section: any, idx: number) => (
          <DynamicSection key={idx} section={section} mobile={true} />
        ))}
      </div>

      {/* Engagement Snapshots */}
      <div style={{ margin: '0' }}>
        {aboutPageData?.engagementSnapshots?.map((section: any, idx: number) => (
          <DynamicSection key={idx} section={section} mobile={true} />
        ))}
      </div>

      <section style={{ display: 'none', background: WIRE_PAPER, padding: '48px 20px' }}>
        <WLabel>Client perspective</WLabel>
        <div style={{ height: 12 }} />
        <h2 className="serif" style={{ fontSize: 24, fontWeight: 500, lineHeight: 1.15, margin: 0 }}>What it's like to work with us.</h2>
        <div style={{ height: 8 }} />
        <span className="serif" style={{ fontStyle: 'italic', fontSize: 13, color: '#888' }}>
          To be added as engagements complete.
        </span>
        <div style={{ height: 20 }} />
        {[
          { tag: 'F&B · Emerging', p: 'Founder pull-quote on repositioning.' },
          { tag: 'Mfg · DTC', p: 'COO on the DTC readiness sprint.' }].
          map((s, i) =>
            <div key={i} className="wb wb-dash" style={{ background: '#fff', padding: 18, marginBottom: 12 }}>
              <div className="mono" style={{ fontSize: 10, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 10 }}>{s.tag.toUpperCase()}</div>
              <div className="serif" style={{ fontSize: 16, fontStyle: 'italic', color: '#999', lineHeight: 1.35 }}>"{s.p}"</div>
              <div style={{ marginTop: 12, fontSize: 11, color: '#aaa' }}>— [Name, Title]</div>
            </div>
          )}
      </section>

      <CTAStrip mobile />
      <WFooter mobile />
    </WireRoot>);
}

export const DEFAULT_SNAPSHOTS = [
  { tag: 'F&B · EMERGING', situation: 'Founder-led brand pricing on instinct.', outcome: 'Repositioned premium tier; 24% margin lift in 6 mo.' },
  { tag: 'MFG · DTC', situation: 'Industrial manufacturer launching direct.', outcome: 'Killed the wrong SKU before launch. Saved a quarter.' },
  { tag: 'PE · PORTFOLIO', situation: 'Holding co. evaluating a regional acquisition.', outcome: 'Consumer landscape clarified deal thesis in 9 days.' }
];

export function BonusSnapshots({ desktop, snapshotsData = DEFAULT_SNAPSHOTS }: { desktop?: boolean, snapshotsData?: any }) {
  return (
    <section style={{ background: WIRE_PAPER, padding: desktop ? '64px 80px' : '48px 20px', borderTop: '1px solid #ddd' }}>
      <WFade>
        <WLabel>Engagement Snapshots</WLabel>
        <div style={{ height: 16 }} />
        <h2 className="serif" style={{ fontSize: desktop ? 48 : 28, fontWeight: 500, lineHeight: 1.05, margin: 0, maxWidth: 700, letterSpacing: '-0.015em' }}>
          What working together <em style={{ color: WIRE_ACCENT }}>actually looks like.</em>
        </h2>
        <div style={{ height: 12 }} />
        <p style={{ fontSize: 15, color: '#555', maxWidth: 580, margin: 0 }}>
          Anonymized situation → outcome snapshots — no logos required.
        </p>
        <div style={{ height: 36 }} />
        <div style={{ display: 'grid', gridTemplateColumns: desktop ? 'repeat(3, 1fr)' : '1fr', gap: 20 }}>
          {snapshotsData.map((s: any, i: number) =>
              <div key={i} className="wb" style={{ padding: 24, background: '#fff', minHeight: desktop ? 260 : 'auto' }}>
                <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 16 }}>{s.tag}</div>
                <div className="serif" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.2, marginBottom: 18 }}>{s.situation || s.sit}</div>
                <hr className="wrule-orange" style={{ width: 24, margin: '0 0 14px' }} />
                <div className="serif" style={{ fontSize: 18, fontStyle: 'italic', color: '#3d3d3d', lineHeight: 1.4 }}>{s.outcome || s.out}</div>
              </div>
            )}
        </div>
      </WFade>
    </section>);
}
