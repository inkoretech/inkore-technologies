import React from 'react';

/**
 * Shared hero banner for inner pages.
 * title: uppercase display line · accent: optional serif italic line
 */
export default function PageHero({ eyebrow, title, accent, subtitle, actions, meta, children }) {
  return (
    <section className="page-hero">
      <div className="dot-grid" aria-hidden="true" data-parallax="0.12" />
      <span className="page-hero-glow" aria-hidden="true" data-parallax="-0.2" />
      <div className="container page-hero-inner">
        {eyebrow && <span className="eyebrow reveal-on-scroll">{eyebrow}</span>}
        <h1 className="display page-hero-title">
          <span className="line-mask"><span>{title}</span></span>
          {accent && <span className="line-mask"><span className="serif-accent">{accent}</span></span>}
        </h1>
        {subtitle && <p className="page-hero-sub" data-split>{subtitle}</p>}
        {actions && <div className="page-hero-actions reveal-on-scroll delay-3">{actions}</div>}
        {meta && (
          <div className="page-hero-meta">
            {meta.map((m, i) => (
              <div key={m.label} className={`reveal-on-scroll delay-${i + 3}`}>
                <strong>{m.value}</strong>
                <span className="mono">{m.label}</span>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
