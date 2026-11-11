import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, ShieldCheck, Trophy } from 'lucide-react';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import './WorkPage.css';

export default function WorkPage({ onOpenContact }) {
  const navigate = useNavigate();

  return (
    <div className="work-page-wrapper">
      {/* 1. Work Page Hero */}
      <section className="work-hero-section">
        <div className="container text-center reveal-on-scroll">
          <div className="badge-pill">
            <Sparkles size={14} />
            <span>Featured Case Studies & Work</span>
          </div>

          <h1 className="work-hero-title">
            Engineering Digital Excellence across Industries
          </h1>

          <p className="work-hero-subtitle">
            From venture-backed startups to enterprise organizations, discover how Inkore engineers high-performance web applications, scalable mobile apps, and robust cloud architectures.
          </p>

          <div className="work-hero-metrics-bar">
            <div className="work-metric-item">
              <span className="work-metric-val">150+</span>
              <span className="work-metric-lbl">Digital Products Built</span>
            </div>
            <div className="work-metric-sep">•</div>
            <div className="work-metric-item">
              <span className="work-metric-val">99.9%</span>
              <span className="work-metric-lbl">Uptime SLA Maintained</span>
            </div>
            <div className="work-metric-sep">•</div>
            <div className="work-metric-item">
              <span className="work-metric-val">$120M+</span>
              <span className="work-metric-lbl">Client Transaction Volume</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filterable Portfolio Component */}
      <Portfolio />

      {/* 3. Client Testimonials */}
      <Testimonials />

      {/* 4. Bottom Project Callout */}
      <section className="work-cta-section">
        <div className="container">
          <div className="work-cta-box reveal-on-scroll">
            <div className="work-cta-content">
              <h2>Ready to build your next breakthrough product?</h2>
              <p>Schedule a technical discovery session with our lead architects to discuss your roadmap.</p>
            </div>
            <button className="btn-ritovex-dark work-cta-btn" onClick={onOpenContact}>
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

