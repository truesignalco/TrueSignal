"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WIRE_INK, WIRE_NAVY } from './primitives';

export function SiteNav({ dark = true }: { dark?: boolean }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomeInitial = isHomePage && !scrolled;
  
  // The links always stay light, but logo is dark initially on home page
  const fg = '#ffffff';
  const logoSrc = isHomeInitial ? '/logos/true-signal-lockup-A-primary-light.svg' : '/logos/true-signal-lockup-A-primary-dark.svg';
  const logoHeight = isHomeInitial ? 96 : 64;

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
        padding: scrolled ? '20px clamp(20px, 5vw, 80px)' : '40px clamp(20px, 5vw, 80px)', color: fg,
        background: scrolled ? 'rgba(26, 34, 53, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease'
      }} className="site-nav">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <img 
            src={logoSrc} 
            alt="True Signal" 
            style={{ height: logoHeight, cursor: 'pointer', display: 'block', filter: scrolled ? 'none' : 'drop-shadow(0px 2px 12px rgba(0,0,0,0.4))', transition: 'height 0.3s ease' }} 
            className="nav-logo"
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="desktop-flex" style={{ gap: 'clamp(20px, 3vw, 48px)', fontSize: 'clamp(14px, 1.2vw, 16px)', opacity: 1, fontWeight: 500, whiteSpace: 'nowrap' }}>
          <Link href="/" style={{ textDecoration: 'none', color: fg }}>Home</Link>
          <Link href="/services" style={{ textDecoration: 'none', color: fg }}>Services</Link>
          <Link href="/about" style={{ textDecoration: 'none', color: fg }}>About</Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: fg }}>Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-flex" style={{ flexDirection: 'column', gap: 6, cursor: 'pointer', padding: 10 }} onClick={() => setMenuOpen(true)}>
          <div style={{ width: 28, height: 2, background: fg }} />
          <div style={{ width: 28, height: 2, background: fg }} />
          <div style={{ width: 28, height: 2, background: fg }} />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{ 
          position: 'fixed', inset: 0, zIndex: 100, background: WIRE_NAVY, color: '#f3efe8',
          display: 'flex', flexDirection: 'column', padding: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img 
              src="/logos/true-signal-lockup-A-primary-dark.svg" 
              alt="True Signal" 
              style={{ height: 48, filter: 'drop-shadow(0px 2px 12px rgba(0,0,0,0.4))' }} 
            />
            <div style={{ padding: 10, cursor: 'pointer', fontSize: 40, lineHeight: 1 }} onClick={() => setMenuOpen(false)}>
              &times;
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 100, fontSize: 32, fontWeight: 500, paddingLeft: 10 }}>
             <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#f3efe8' }}>Home</Link>
             <Link href="/services" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#f3efe8' }}>Services</Link>
             <Link href="/about" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#f3efe8' }}>About</Link>
             <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#f3efe8' }}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
