"use client";
// @ts-nocheck
// Wireframe primitives for True Signal
// Mid-fi sketchy: handwritten labels + real copy in target fonts, grayscale
// fills, light orange accents to mark emphasis. Sketch mode adds wobble +
// hand-drawn feel; Clean mode is straight-edged.

export const WIRE_INK = '#2a2a2a';
export const WIRE_DIM = '#9a9a9a';
export const WIRE_FILL = '#ececec';
export const WIRE_FILL_2 = '#dcdcdc';
export const WIRE_ACCENT = '#c4622d';
export const WIRE_NAVY = '#1a2235';
export const WIRE_PAPER = '#f7f5f2';
export const WIRE_GRAY = '#f2f2f2';

import Link from 'next/link';
import { motion } from 'framer-motion';

// ── Components ──────────────────────────────────────────────────

export function WFade({ children, style, delay = 0, y = 20, className }: any) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Wraps any artboard's content with the .wire-root scope.
export function WireRoot({ children, style }: any) {
  return <div className="wire-root" style={{ width: '100%', minHeight: '100%', ...style }}>{children}</div>;
}

// Small caps accent label — orange.
export function WLabel({ children, dim, style }: any) {
  return <div className={'wlabel' + (dim ? ' wlabel-dim' : '')} style={style}>{children}</div>;
}

// Handwritten margin annotation — orange-ish, Caveat.
export function WNote({ children, style, dim }: any) {
  return <span className={'wnote' + (dim ? ' wnote-dim' : '')} style={style}>{children}</span>;
}

// Block-level annotation, includes a leader line.
export function WNoteBlock({ children, style }: any) {
  return (
    <div className="wnote-block" style={{ position: 'relative', ...style }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
        <div style={{ width: 14, height: 14, flex: '0 0 14px', position: 'relative' }}>
          <svg viewBox="0 0 14 14" width="14" height="14" style={{ display: 'block' }}>
            <path d="M2,2 C6,4 10,8 12,12" stroke={WIRE_ACCENT} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="1.4" fill={WIRE_ACCENT}/>
          </svg>
        </div>
        <span className="wnote">{children}</span>
      </div>
    </div>
  );
}

// Site nav placeholder
export function WNav({ dark }: any) {
  const fg = dark ? '#f3efe8' : WIRE_INK;
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '40px 80px', color: fg, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
      <Link href="/">
        <img 
          src={dark ? '/logos/true-signal-lockup-A-primary-light.svg' : '/logos/true-signal-lockup-A-primary-dark.svg'} 
          alt="True Signal" 
          style={{ height: 64, cursor: 'pointer', display: 'block', filter: 'drop-shadow(0px 2px 12px rgba(0,0,0,0.4))' }} 
        />
      </Link>
      <nav style={{ display: 'flex', gap: 36, fontSize: 14, opacity: 0.9 }}>
        <Link href="/" style={{ textDecoration: 'none', color: fg }}>Home</Link>
        <Link href="/services" style={{ textDecoration: 'none', color: fg }}>Services</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: fg }}>About</Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: fg }}>Contact</Link>
      </nav>
    </nav>
  );
}

// Mobile nav (just logo + hamburger)
export function WNavMobile({ dark }: any) {
  const fg = dark ? '#f3efe8' : WIRE_INK;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px', background: dark ? WIRE_NAVY : '#fff', color: fg,
    }}>
      <Link href="/">
        <img 
          src={dark ? '/logos/true-signal-lockup-A-primary-light.svg' : '/logos/true-signal-lockup-A-primary-dark.svg'} 
          alt="True Signal" 
          style={{ height: 48, cursor: 'pointer', display: 'block', filter: 'drop-shadow(0px 2px 12px rgba(0,0,0,0.4))' }} 
        />
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ width: 22, height: 1.5, background: fg }} />
        <div style={{ width: 22, height: 1.5, background: fg }} />
        <div style={{ width: 22, height: 1.5, background: fg }} />
      </div>
    </div>
  );
}

// Footer placeholder
export function WFooter({ mobile }: { mobile?: boolean }) {
  const logoSrc = '/logos/true-signal-lockup-A-primary-light.svg';
  if (mobile) return (
    <div style={{ background: WIRE_NAVY, color: '#cfd2da', padding: '32px 20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
      <img src={logoSrc} alt="True Signal"
           style={{ height: 24, width: 'auto', display: 'block', alignSelf: 'flex-start' }} />
      <div style={{ display: 'flex', gap: 18, fontSize: 13, flexWrap: 'wrap' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
      </div>
      <div style={{ fontSize: 11, opacity: 0.6 }}>© 2025 True Signal LLC. All rights reserved.</div>
    </div>
  );
  return (
    <div style={{ background: WIRE_NAVY, color: '#cfd2da', padding: '48px 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src={logoSrc} alt="True Signal"
           style={{ height: 28, width: 'auto', display: 'block' }} />
      <div style={{ display: 'flex', gap: 28, fontSize: 13 }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
      </div>
      <div style={{ fontSize: 11, opacity: 0.6 }}>© 2025 True Signal LLC. All rights reserved.</div>
    </div>
  );
}

// "X" image placeholder with optional caption (caption uses hand font).
export function WImg({ aspect = '16 / 9', caption, dark, style }: any) {
  return (
    <div style={{
      position: 'relative', aspectRatio: aspect, width: '100%',
      ...style,
    }} className={dark ? 'wimg-dark' : 'wimg'}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
      }}>
        <line x1="0" y1="0" x2="100" y2="100" stroke={dark ? '#3a4456' : '#bdb6a6'} strokeWidth="0.3"/>
        <line x1="100" y1="0" x2="0" y2="100" stroke={dark ? '#3a4456' : '#bdb6a6'} strokeWidth="0.3"/>
      </svg>
      {caption && (
        <div className="hand" style={{
          position: 'absolute', bottom: 8, left: 12,
          fontSize: 18, color: dark ? '#bcc4d0' : '#6a6a6a',
        }}>{caption}</div>
      )}
    </div>
  );
}

// A single bar (placeholder for a line of text).
export function WBar({ w = '100%', h = 10, light, style }: any) {
  return <div className={'wbar' + (light ? ' wbar-light' : '')} style={{ width: w, height: h, ...style }} />;
}

// Stack of text bars to suggest a paragraph.
// User feedback: removed — the gray placeholder bars read as visual clutter.
// Kept as a no-op so call sites don't need to be touched.
export function WPara(props: any) { return null; }

// Buttons
export function WBtnPrimary({ children, mobile, href, onClick }: any) {
  const btn = (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClick} className="wbtn-primary" style={mobile ? { padding: '12px 18px', fontSize: 13 } : {}}>
      {children} →
    </motion.button>
  );
  if (href) return <Link href={href} style={{textDecoration: 'none', display: 'inline-block'}}>{btn}</Link>;
  return btn;
}
export function WBtnOutline({ children, onDark, mobile, href, onClick }: any) {
  const btn = (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClick} className={'wbtn-outline' + (onDark ? ' on-dark' : '')} style={mobile ? { padding: '11px 18px', fontSize: 13 } : {}}>
      {children} →
    </motion.button>
  );
  if (href) return <Link href={href} style={{textDecoration: 'none', display: 'inline-block'}}>{btn}</Link>;
  return btn;
}

// Generic light-orange highlight wrapper for "emphasis here" hand-circled feel.
export function WCircle({ children, style }: any) {
  return (
    <span style={{
      position: 'relative', display: 'inline-block', padding: '2px 6px',
      ...style,
    }}>
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" style={{
        position: 'absolute', inset: '-6px -10px', width: 'calc(100% + 20px)', height: 'calc(100% + 12px)',
        pointerEvents: 'none',
      }}>
        <ellipse cx="50" cy="25" rx="46" ry="20" fill="none" stroke={WIRE_ACCENT} strokeWidth="0.6" opacity="0.7"/>
      </svg>
      {children}
    </span>
  );
}

// Newsletter Subscribe block
export function NewsletterSubscribe({ desktop = true }: any) {
  return (
    <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: desktop ? '100px 80px' : '64px 20px' }}>
      <WFade>
      <div style={{ display: 'grid', gridTemplateColumns: desktop ? '1fr 1fr' : '1fr', gap: desktop ? 80 : 40, alignItems: 'start', maxWidth: 1280, margin: '0 auto' }}>
        <div>
          <WLabel style={{ color: WIRE_ACCENT }}>Subscribe · Quarterly</WLabel>
          <div style={{ height: 24 }} />
          <h2 className="serif" style={{ fontSize: desktop ? 48 : 36, fontWeight: 500, margin: 0, letterSpacing: '-0.015em' }}>
            Get <em style={{ color: WIRE_ACCENT }}>The Signal</em> in your inbox.
          </h2>
          <div style={{ height: 24 }} />
          <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.8, maxWidth: 400, margin: 0 }}>
            The patterns we're noticing across categories. No newsletter slop. Easy to leave.
          </p>
        </div>
        <div style={{ background: '#fff', color: WIRE_INK, padding: desktop ? '48px' : '32px', borderRadius: 2 }}>
          <WLabel>Email</WLabel>
          <div style={{ height: 8 }} />
          <input 
            type="email" 
            placeholder="you@company.com" 
            style={{ 
              width: '100%', border: 'none', borderBottom: `1.4px solid ${WIRE_INK}`, 
              padding: '12px 0', fontSize: 18, fontFamily: 'inherit', outline: 'none',
              background: 'transparent'
            }} 
          />
          <div style={{ height: 32 }} />
          <WBtnPrimary onClick={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>Subscribe</WBtnPrimary>
        </div>
      </div>
      </WFade>
    </section>
  );
}
