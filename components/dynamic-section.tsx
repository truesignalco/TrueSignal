"use client";
import React from 'react';
import { WIRE_PAPER, WIRE_ACCENT, WIRE_INK, WIRE_NAVY, WIRE_GRAY, WLabel } from './primitives';
import { PortableText } from '@portabletext/react';

export const customRichTextComponents = {
  marks: {
    accent: ({ children }: any) => <em style={{ color: WIRE_ACCENT }}>{children}</em>,
    medium: ({ children }: any) => <span style={{ fontSize: 17, lineHeight: 1.75, color: '#3d3d3d', margin: 0 }}>{children}</span>,
  },
  block: {
    normal: ({ children }: any) => <p style={{ fontSize: 17, lineHeight: 1.75, color: '#3d3d3d', margin: '0 0 32px' }}>{children}</p>,
    'large-serif': ({ children }: any) => <p className="serif" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.3, color: WIRE_NAVY, margin: '0 0 32px', letterSpacing: '-0.01em' }}>{children}</p>
  }
};

const headlineRichTextComponents = {
  marks: customRichTextComponents.marks,
  block: {
    normal: ({ children }: any) => <>{children}</>
  }
};

export function DynamicSection({ section, onNavy = false, mobile = false }: { section: any, onNavy?: boolean, mobile?: boolean }) {
  if (!section || !section.items) return null;

  const { label, headline, description, style, items } = section;

  const renderHeadline = (hl: any) => {
    if (!hl) return null;
    if (typeof hl === 'string') return hl;
    return <PortableText value={hl} components={headlineRichTextComponents} />;
  };

  if (mobile) {
    const isDark = style === 'style-c' || style === 'style-e' || style === 'style-f' || onNavy;
    const bg = isDark ? WIRE_NAVY : WIRE_PAPER;
    const fg = isDark ? '#f3efe8' : WIRE_INK;
    const muted = isDark ? 'rgba(243,239,232,0.7)' : '#555';

    return (
      <section style={{ background: bg, color: fg, padding: '48px 20px', borderTop: isDark ? 'none' : '1px solid #ddd' }}>
        {label && <WLabel style={{ color: WIRE_ACCENT }}>{label}</WLabel>}
        <div style={{ height: 16 }} />
        {headline && <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.15, margin: 0 }}>{renderHeadline(headline)}</h2>}
        <div style={{ height: 28 }} />
        
        {items.map((it: any, i: number) => (
          <div key={i} style={{ borderTop: `1.2px solid ${isDark ? 'rgba(255,255,255,0.25)' : '#ddd'}`, padding: '20px 0' }}>
            <span className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.15em' }}>
              0{i+1}{it.meta && ` · ${it.meta.toUpperCase()}`}
            </span>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.2, margin: '8px 0 8px' }}>
              {it.title}
            </h3>
            {it.subtitle && (
              <p style={{ fontSize: 14, lineHeight: 1.55, color: muted, margin: '0 0 10px', fontStyle: 'italic' }}>
                {it.subtitle}
              </p>
            )}
            {it.body && (
              <p style={{ fontSize: 13, lineHeight: 1.6, color: muted, margin: 0 }}>
                {it.body}
              </p>
            )}
          </div>
        ))}
      </section>
    );
  }

  // Desktop styles
  switch (style) {
    case 'style-a': // White Grid
      return (
        <section style={{ background: WIRE_PAPER, padding: '100px 80px', borderTop: '1px solid #ddd' }}>
          {label && <WLabel>{label}</WLabel>}
          <div style={{ height: 24 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 820, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          <div style={{ height: 56 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
            {items.map((it: any, i: number) => (
              <div key={i}>
                <div style={{ fontSize: 22, color: WIRE_ACCENT, fontFamily: 'Cormorant Garamond, serif', marginBottom: 16 }}>0{i+1}</div>
                <hr className="wrule-orange" style={{ width: 36, margin: '0 0 20px' }} />
                <h3 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2, margin: '0 0 12px' }}>
                  {it.title}
                </h3>
                {it.subtitle && (
                  <p style={{ fontSize: 16, lineHeight: 1.5, color: '#3d3d3d', margin: '0 0 16px', fontStyle: 'italic' }}>
                    {it.subtitle}
                  </p>
                )}
                {it.body && (
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: '#555', margin: 0 }}>
                    {it.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      );

    case 'style-b': // White List
      return (
        <section style={{ background: WIRE_PAPER, padding: '100px 80px', borderTop: '1px solid #ddd' }}>
          {label && <WLabel>{label}</WLabel>}
          <div style={{ height: 24 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 820, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          <div style={{ height: 56 }} />
          <div style={{ position: 'relative', maxWidth: 1100 }}>
            <div style={{ position: 'absolute', left: 18, top: 14, bottom: 14, width: 1.4, background: WIRE_ACCENT, opacity: 0.4 }} />
            {items.map((it: any, i: number) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px', gap: 40, padding: '32px 0', borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none', alignItems: 'baseline', position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: WIRE_PAPER, border: `2px solid ${WIRE_ACCENT}`, position: 'absolute', left: 10, top: 4, zIndex: 1 }} />
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.15, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                    {it.title}
                  </h3>
                  {it.subtitle && (
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: '#3d3d3d', margin: '0 0 8px', fontStyle: 'italic' }}>
                      {it.subtitle}
                    </p>
                  )}
                  {it.body && (
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: '#555', margin: 0, maxWidth: 620 }}>
                      {it.body}
                    </p>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  {it.meta && (
                    <>
                      <div className="mono" style={{ fontSize: 11, color: '#888', letterSpacing: '0.2em', marginBottom: 6 }}>CADENCE</div>
                      <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: WIRE_ACCENT }}>{it.meta}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case 'style-c': // Navy Grid
      return (
        <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '100px 80px' }}>
          {label && <WLabel style={{ color: WIRE_ACCENT }}>{label}</WLabel>}
          <div style={{ height: 24 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 820, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          <div style={{ height: 56 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.18)' }}>
            {items.map((it: any, i: number) => (
              <div key={i} style={{ background: WIRE_NAVY, padding: '36px 32px' }}>
                <div className="mono" style={{ fontSize: 12, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 18 }}>
                  0{i+1}
                </div>
                <h3 className="serif" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2, margin: '0 0 12px' }}>
                  {it.title}
                </h3>
                {it.subtitle && (
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(243,239,232,0.9)', margin: '0 0 16px', fontStyle: 'italic' }}>
                    {it.subtitle}
                  </p>
                )}
                {it.body && (
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(243,239,232,0.7)', margin: 0 }}>
                    {it.body}
                  </p>
                )}
                {it.meta && (
                  <>
                    <div style={{ height: 20 }} />
                    <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em' }}>{it.meta.toUpperCase()}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      );

    case 'style-d': // White Minimal
      return (
        <section style={{ background: WIRE_PAPER, padding: '100px 80px', borderTop: '1px solid #ddd' }}>
          {label && <WLabel>{label}</WLabel>}
          <div style={{ height: 24 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 820, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          <div style={{ height: 56 }} />
          <div style={{ borderTop: `1.4px solid ${WIRE_INK}` }}>
            {items.map((it: any, i: number) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 48, padding: '32px 0', borderBottom: `1px solid ${WIRE_INK}`, alignItems: 'baseline' }}>
                <span className="serif" style={{ fontSize: 56, color: WIRE_ACCENT, fontStyle: 'italic', lineHeight: 1, fontWeight: 400 }}>0{i+1}</span>
                <div>
                  <div className="serif" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.01em', maxWidth: 880, marginBottom: it.subtitle || it.body ? 16 : 0 }}>
                    {it.title}
                  </div>
                  {it.subtitle && (
                    <p style={{ fontSize: 18, lineHeight: 1.6, color: '#3d3d3d', margin: '0 0 8px', fontStyle: 'italic' }}>
                      {it.subtitle}
                    </p>
                  )}
                  {it.body && (
                    <p style={{ fontSize: 16, lineHeight: 1.65, color: '#555', margin: 0, maxWidth: 720 }}>
                      {it.body}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case 'style-e': // Navy Minimal
      return (
        <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '100px 80px' }}>
          {label && <WLabel style={{ color: WIRE_ACCENT }}>{label}</WLabel>}
          <div style={{ height: 24 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 820, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          <div style={{ height: 56 }} />
          <div style={{ borderTop: `1.4px solid rgba(255,255,255,0.2)` }}>
            {items.map((it: any, i: number) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 48, padding: '32px 0', borderBottom: `1px solid rgba(255,255,255,0.2)`, alignItems: 'baseline' }}>
                <span className="serif" style={{ fontSize: 56, color: WIRE_ACCENT, fontStyle: 'italic', lineHeight: 1, fontWeight: 400 }}>0{i+1}</span>
                <div>
                  <div className="serif" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.01em', maxWidth: 880, marginBottom: it.subtitle || it.body ? 16 : 0 }}>
                    {it.title}
                  </div>
                  {it.subtitle && (
                    <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(243,239,232,0.9)', margin: '0 0 8px', fontStyle: 'italic' }}>
                      {it.subtitle}
                    </p>
                  )}
                  {it.body && (
                    <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(243,239,232,0.7)', margin: 0, maxWidth: 720 }}>
                      {it.body}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case 'style-f': // Navy List
    default:
      return (
        <section style={{ background: WIRE_NAVY, color: '#f3efe8', padding: '100px 80px' }}>
          {label && <WLabel style={{ color: WIRE_ACCENT }}>{label}</WLabel>}
          <div style={{ height: 24 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 820, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          <div style={{ height: 56 }} />
          <div style={{ position: 'relative', maxWidth: 1100 }}>
            <div style={{ position: 'absolute', left: 18, top: 14, bottom: 14, width: 1.4, background: WIRE_ACCENT, opacity: 0.4 }} />
            {items.map((it: any, i: number) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 200px', gap: 40, padding: '32px 0', borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none', alignItems: 'baseline', position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: WIRE_NAVY, border: `2px solid ${WIRE_ACCENT}`, position: 'absolute', left: 10, top: 4, zIndex: 1 }} />
                </div>
                <div>
                  <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.15, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                    {it.title}
                  </h3>
                  {it.subtitle && (
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(243,239,232,0.9)', margin: '0 0 8px', fontStyle: 'italic' }}>
                      {it.subtitle}
                    </p>
                  )}
                  {it.body && (
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(243,239,232,0.7)', margin: 0, maxWidth: 620 }}>
                      {it.body}
                    </p>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  {it.meta && (
                    <>
                      <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 6 }}>CADENCE</div>
                      <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: WIRE_ACCENT }}>{it.meta}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case 'style-g': // About: Different Grid
      return (
        <section style={{ background: WIRE_GRAY, color: WIRE_INK, padding: '100px 80px' }}>
          {label && <WLabel>{label}</WLabel>}
          <div style={{ height: 32 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.1, margin: 0, maxWidth: 820, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          {headline && <div style={{ height: 32 }} />}
          {description && (
            <p style={{ fontSize: 16, color: '#555', maxWidth: 680, margin: '0 0 56px' }}>
              {description}
            </p>
          )}
          {!description && headline && <div style={{ height: 56 }} />}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
            {items.map((it: any, i: number) => (
              <div key={i}>
                <span className="serif" style={{ fontSize: 56, color: WIRE_ACCENT, fontStyle: 'italic', lineHeight: 1 }}>{it.tag ? it.tag : (it.meta ? it.meta : `0${i + 1}`)}</span>
                <hr className="wrule-orange" style={{ width: 32, margin: '20px 0' }} />
                <h3 className="serif" style={{ fontSize: 26, fontWeight: 500, lineHeight: 1.2, margin: '0 0 14px', color: WIRE_INK }}>{it.title}</h3>
                {it.subtitle && (
                  <p style={{ fontSize: 16, lineHeight: 1.5, color: '#4a4a4a', margin: '0 0 16px', fontStyle: 'italic' }}>
                    {it.subtitle}
                  </p>
                )}
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#4a4a4a', margin: 0 }}>{it.body}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case 'style-h': // About: Snapshots Cards
      return (
        <section style={{ background: WIRE_PAPER, padding: '64px 80px', borderTop: '1px solid #ddd' }}>
          {label && <WLabel>{label}</WLabel>}
          <div style={{ height: 16 }} />
          {headline && (
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, margin: 0, maxWidth: 700, letterSpacing: '-0.015em' }}>
              {renderHeadline(headline)}
            </h2>
          )}
          {headline && <div style={{ height: 12 }} />}
          {description && (
            <p style={{ fontSize: 15, color: '#555', maxWidth: 580, margin: 0 }}>
              {description}
            </p>
          )}
          <div style={{ height: 36 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {items.map((it: any, i: number) => (
              <div key={i} className="wb" style={{ padding: 24, background: '#fff', minHeight: 260 }}>
                <div className="mono" style={{ fontSize: 11, color: WIRE_ACCENT, letterSpacing: '0.2em', marginBottom: 16 }}>
                  {it.tag ? it.tag.toUpperCase() : (it.meta ? it.meta.toUpperCase() : `0${i+1}`)}
                </div>
                <div className="serif" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.2, marginBottom: 18 }}>{it.title}</div>
                <hr className="wrule-orange" style={{ width: 24, margin: '0 0 14px' }} />
                {it.subtitle && (
                  <div className="serif" style={{ fontSize: 18, fontStyle: 'italic', color: '#3d3d3d', lineHeight: 1.4, marginBottom: 8 }}>{it.subtitle}</div>
                )}
                {it.body && (
                  <div style={{ fontSize: 14, color: '#555', lineHeight: 1.5 }}>{it.body}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      );
  }
}
