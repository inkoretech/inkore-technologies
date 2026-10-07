import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenContact, onOpenDemo }) {
  return (
    <section className="hero-section-ritovex" id="hero">
      <div className="container hero-container-ritovex">
        {/* Left Text Column */}
        <div className="hero-left-col reveal-on-scroll reveal-left">
          <div className="badge-pill">
            <span>Creative Ideas That Inspire Growth</span>
          </div>

          <h1 className="hero-title-ritovex">
            World's Best Creative <br />
            Agency Team
          </h1>

          <p className="hero-subtitle-ritovex">
            Inkore Technologies — crafting legendary digital products and enterprise software through bold ideas, strategic engineering genius, and flawless execution that dominates the global stage.
          </p>

          <div className="hero-actions-ritovex">
            <button className="btn-ritovex-dark" onClick={onOpenContact}>
              Get Started
            </button>

            <div className="play-btn-wrapper" onClick={onOpenDemo}>
              <div className="play-icon-circle">
                <Play size={16} fill="#111827" />
              </div>
              <span>Watch Demo</span>
            </div>
          </div>
        </div>

        {/* Right Image Cutout Column */}
        <div className="hero-right-col reveal-on-scroll reveal-right delay-2">
          <div className="hero-cutout-frame">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" 
              alt="Inkore Creative Technology Team"
              className="hero-cutout-img"
            />

            {/* Floating Metric Pill Overlay */}
            <div className="floating-hero-badge">
              <div className="floating-hero-badge-icon">
                <Sparkles size={20} />
              </div>
              <div>
                <div className="floating-hero-badge-title">4.9 / 5.0 Rating</div>
                <div className="floating-hero-badge-sub">150+ Projects Launched</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
