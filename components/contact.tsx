"use client";
// @ts-nocheck
import React, { useState } from 'react';
import { WireRoot, WNav, WNavMobile, WFooter, WLabel, WNoteBlock, WIRE_ACCENT, WIRE_INK, WIRE_NAVY, WIRE_PAPER, WNote, WFade } from './primitives';

export function Field({ label, placeholder, type = "text", value, onChange, required }: any) {
  return (
    <label style={{ display: 'block' }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', marginBottom: 8 }}>{label}</div>
      <input type={type} required={required} value={value} onChange={onChange} placeholder={placeholder || ''} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1.4px solid ${WIRE_INK}`, height: 38, color: WIRE_INK, fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
    </label>);
}

export function Select({ label, options, value, onChange, required }: any) {
  return (
    <label style={{ display: 'block' }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', marginBottom: 8 }}>{label}</div>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={onChange} required={required} style={{ width: '100%', appearance: 'none', background: 'transparent', border: 'none', borderBottom: `1.4px solid ${WIRE_INK}`, height: 38, color: WIRE_INK, fontSize: 14, fontFamily: 'inherit', outline: 'none', paddingRight: 24, borderRadius: 0 }}>
          <option value="" disabled>Select…</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <span style={{ color: WIRE_INK, position: 'absolute', right: 0, top: 10, pointerEvents: 'none' }}>▾</span>
      </div>
    </label>);
}

export function TextArea({ label, placeholder, value, onChange, required }: any) {
  return (
    <label style={{ display: 'block' }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', marginBottom: 8 }}>{label}</div>
      <textarea required={required} value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical', background: 'transparent', border: `1.4px solid ${WIRE_INK}`, height: 140, padding: '14px 16px', color: WIRE_INK, fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
    </label>);
}

export function Info({ label, val }: any) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: '#888', marginBottom: 4 }}>{label.toUpperCase()}</div>
      <div className="serif" style={{ fontSize: 18, color: WIRE_INK }}>{val}</div>
    </div>);
}

function useContactState() {
  const [data, setData] = useState({
    first: '', last: '', company: '', email: '', phone: '', situation: '', stage: '', message: '', intro: false
  });
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.intro && !data.phone.trim()) {
      alert("Please provide a phone number if you're open to an introductory call.");
      return;
    }
    setSent(true);
    alert("Thank you! Your message has been received.\n\n(Note: Email sending is currently a placeholder. We can integrate an email service like Resend to make this fully functional.)");
  };
  return { data, setData, sent, onSubmit };
}

export function BonusProcessStrip({ desktop }: { desktop?: boolean }) {
  return (
    <section style={{ background: WIRE_PAPER, padding: desktop ? '56px 80px' : '48px 20px', borderTop: '1px solid #ddd' }}>
      <WFade>
      <WLabel style={{ color: WIRE_ACCENT }}>Working with us</WLabel>
      <div style={{ height: 12 }} />
      <h2 className="serif" style={{ fontSize: desktop ? 36 : 24, fontWeight: 500, margin: 0, letterSpacing: '-0.015em' }}>
        What to expect in the first two weeks.
      </h2>
      <div style={{ height: 28 }} />
      <div style={{ display: 'grid', gridTemplateColumns: desktop ? 'repeat(4, 1fr)' : '1fr', gap: desktop ? 0 : 20 }}>
        {[
        ['Day 1', 'Intro call. 30 min.'],
        ['Week 1', 'Scoping note + proposal.'],
        ['Week 2', 'Kickoff or sprint begins.'],
        ['Always', 'You own the work.']].
        map(([k, v], i) =>
        <div key={i} style={{ borderLeft: (desktop && i > 0) ? `1px solid ${WIRE_INK}` : 'none', padding: desktop ? '0 18px' : 0 }}>
            <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em' }}>{k.toUpperCase()}</div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 500, marginTop: 6 }}>{v}</div>
          </div>
        )}
      </div>
      </WFade>
    </section>);
}

export function ContactDesktop() {
  const { data, setData, sent, onSubmit } = useContactState();
  return (
    <WireRoot>
      
      <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '220px 80px 100px' }}>
        <WFade>
        <WLabel style={{ color: WIRE_ACCENT }}>Let's Talk</WLabel>
        <div style={{ height: 24 }} />
        <h1 className="serif" style={{ fontSize: 68, fontWeight: 500, lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em' }}>
          Tell us what you're <em style={{ color: WIRE_ACCENT }}>working on.</em>
        </h1>
        <div style={{ height: 32 }} />
        <p style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 760, opacity: 0.85, margin: 0 }}>
          Every engagement starts with a conversation. There's no pitch — just a genuine exploration of whether True Signal is the right fit for where you are.
        </p>
        </WFade>
      </section>

      <section style={{ background: '#fff', padding: '100px 80px', position: 'relative' }}>
        <WFade delay={0.1}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 4fr', gap: 80, maxWidth: 1280, alignItems: 'start' }}>
          {/* form */}
          <form onSubmit={onSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <Field required label="First name" value={data.first} onChange={e => setData({...data, first: e.target.value})} />
              <Field required label="Last name" value={data.last} onChange={e => setData({...data, last: e.target.value})} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <Field required label="Company" value={data.company} onChange={e => setData({...data, company: e.target.value})} />
              <Field required type="email" label="Email" value={data.email} onChange={e => setData({...data, email: e.target.value})} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <Field label="Phone (optional)" type="tel" value={data.phone} onChange={e => setData({...data, phone: e.target.value})} />
              <Select required label="What best describes your situation?" options={['Manufacturer exploring DTC', 'Emerging F&B brand', 'Private equity / acquisition', 'Regional or local business', 'Other']} value={data.situation} onChange={e => setData({...data, situation: e.target.value})} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <Select required label="Where are you in your thinking?" options={['Early exploration', 'Specific project in mind', 'Ready to start']} value={data.stage} onChange={e => setData({...data, stage: e.target.value})} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <TextArea required label="Tell us about what you're working on" placeholder="What's the consumer question keeping you up at night?" value={data.message} onChange={e => setData({...data, message: e.target.value})} />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#3d3d3d', marginBottom: 32, cursor: 'pointer' }}>
              <input type="checkbox" checked={data.intro} onChange={e => setData({...data, intro: e.target.checked})} style={{ width: 18, height: 18, accentColor: WIRE_ACCENT, cursor: 'pointer' }} />
              I'm open to a brief introductory call
            </label>
            <button type="submit" disabled={sent} style={{
              background: sent ? '#ccc' : WIRE_ACCENT, color: 'white', border: 0, cursor: sent ? 'default' : 'pointer',
              padding: '18px 30px', fontSize: 15, fontWeight: 600, fontFamily: 'inherit'
            }}>{sent ? 'Sent Successfully ✓' : 'Send My Signal →'}</button>
          </form>

          {/* contact info card */}
          <aside className="wb wb-soft" style={{ background: WIRE_PAPER, padding: 32, alignSelf: 'start' }}>
            <WLabel>Reach Us</WLabel>
            <div style={{ height: 24 }} />
            <Info label="Web" val="truesignalco.com" />
            <Info label="Email" val="hello@truesignalco.com" />

            <div style={{ height: 28 }} />
            <div style={{ borderLeft: `2px solid ${WIRE_ACCENT}`, paddingLeft: 14 }}>
              <div className="hand" style={{ fontSize: 18, color: WIRE_ACCENT, lineHeight: 1.2 }}>
                Most inquiries hear back<br />within 1 business day.
              </div>
            </div>
          </aside>
        </div>
        </WFade>
      </section>

      <BonusProcessStrip desktop />

      <WFooter />
    </WireRoot>);
}

export function ContactMobile() {
  const { data, setData, sent, onSubmit } = useContactState();
  return (
    <WireRoot>
      
      <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '112px 20px 48px' }}>
        <WLabel style={{ color: WIRE_ACCENT }}>Let's Talk</WLabel>
        <div style={{ height: 16 }} />
        <h1 className="serif" style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.05, margin: 0 }}>
          Tell us what you're <em style={{ color: WIRE_ACCENT }}>working on.</em>
        </h1>
        <div style={{ height: 20 }} />
        <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.85, margin: 0 }}>
          Every engagement starts with a conversation. No pitch — just a genuine exploration of whether True Signal is the right fit.
        </p>
      </section>
      <section style={{ background: '#fff', padding: '40px 20px' }}>
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Field required label="First name" value={data.first} onChange={e => setData({...data, first: e.target.value})} />
          <Field required label="Last name" value={data.last} onChange={e => setData({...data, last: e.target.value})} />
          <Field required label="Company" value={data.company} onChange={e => setData({...data, company: e.target.value})} />
          <Field required type="email" label="Email" value={data.email} onChange={e => setData({...data, email: e.target.value})} />
          <Field label="Phone (optional)" type="tel" value={data.phone} onChange={e => setData({...data, phone: e.target.value})} />
          <Select required label="What best describes your situation?" options={['Manufacturer DTC', 'Emerging F&B', 'PE / acquisition', 'Regional / local', 'Other']} value={data.situation} onChange={e => setData({...data, situation: e.target.value})} />
          <Select required label="Where are you in your thinking?" options={['Early exploration', 'Specific project', 'Ready to start']} value={data.stage} onChange={e => setData({...data, stage: e.target.value})} />
          <TextArea required label="Tell us about your project" placeholder="What's the consumer question keeping you up at night?" value={data.message} onChange={e => setData({...data, message: e.target.value})} />
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, cursor: 'pointer' }}>
            <input type="checkbox" checked={data.intro} onChange={e => setData({...data, intro: e.target.checked})} style={{ width: 16, height: 16, accentColor: WIRE_ACCENT, cursor: 'pointer' }} />
            I'm open to a brief introductory call
          </label>
          <button type="submit" disabled={sent} style={{ background: sent ? '#ccc' : WIRE_ACCENT, color: 'white', border: 0, padding: '14px 22px', fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: sent ? 'default' : 'pointer' }}>
            {sent ? 'Sent Successfully ✓' : 'Send My Signal →'}
          </button>
        </form>
      </section>
      <section style={{ background: WIRE_PAPER, padding: '32px 20px' }}>
        <WLabel>Reach Us</WLabel>
        <div style={{ height: 16 }} />
        <Info label="Web" val="truesignalco.com" />
        <Info label="Email" val="hello@truesignalco.com" />
      </section>

      <BonusProcessStrip />

      <WFooter mobile />
    </WireRoot>);
}
