import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Code2, Cloud, ShieldCheck } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenContact }) {
  const navigate = useNavigate();

  const handleExploreServices = () => {
    navigate('/services');
  };

  return (
    <section className="hero-section-ritovex" id="hero">
      <div className="container hero-container-ritovex">
        {/* Left Text Column */}
        <div className="hero-left-col reveal-on-scroll reveal-left">
          <div className="badge-pill">
            <span className="badge-pulse-dot"></span>
            <span className="badge-text">Build what matters.</span>
          </div>

          <h1 className="hero-title-ritovex">
            Technology that moves your business forward.
          </h1>

          <div className="hero-description-group">
            <p className="hero-subtitle-ritovex">
              Inkore is a software development and technology company building reliable web, mobile, cloud, and enterprise solutions for businesses of all sizes.
            </p>
            <p className="hero-subtitle-sub">
              From idea to deployment, we turn complex business requirements into simple, scalable digital products.
            </p>
          </div>

          <div className="hero-actions-ritovex">
            <button className="btn-ritovex-dark btn-hero-primary" onClick={onOpenContact}>
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </button>

            <button className="btn-ritovex-outline btn-hero-secondary" onClick={handleExploreServices}>
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Key Technology Highlights */}
          <div className="hero-pillars">
            <div className="hero-pillar-item">
              <Code2 size={18} className="pillar-icon" />
              <span>Web & Mobile</span>
            </div>
            <div className="hero-pillar-item">
              <Cloud size={18} className="pillar-icon" />
              <span>Cloud & DevOps</span>
            </div>
            <div className="hero-pillar-item">
              <Layers size={18} className="pillar-icon" />
              <span>Enterprise Apps</span>
            </div>
          </div>
        </div>

        {/* Right Visual Image Column */}
        <div className="hero-right-col reveal-on-scroll reveal-right delay-2">
          <div className="hero-image-container">
            <div className="hero-cutout-frame">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Inkore Software Engineers Collaborating"
                className="hero-cutout-img"
              />
            </div>

            {/* Sleek Floating Metric Card positioned cleanly at the bottom edge */}
            <div className="hero-floating-stat-bar">
              <div className="stat-pill-item">
                <div className="stat-pill-icon">
                  <Sparkles size={18} />
                </div>
                <div className="stat-pill-text">
                  <span className="stat-pill-val">End-to-End</span>
                  <span className="stat-pill-lbl">Idea to Deployment</span>
                </div>
              </div>

              <div className="stat-pill-divider"></div>

              <div className="stat-pill-item">
                <div className="stat-pill-icon icon-green">
                  <ShieldCheck size={18} />
                </div>
                <div className="stat-pill-text">
                  <span className="stat-pill-val">99.9% Reliable</span>
                  <span className="stat-pill-lbl">Enterprise Scalable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

