import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FolderCheck, Briefcase, Trophy, Users, PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import './AboutUs.css';

export default function AboutUs({ onOpenContact }) {
  const navigate = useNavigate();

  const partnerLogos = [
    'abbvie', 'align', 'BŪNGE', 'DISCOVER', 'ESSEX', 'HOLOGIC', 'Insulet'
  ];

  return (
    <section className="about-section-ritovex" id="about">
      {/* Partner Logo Ticker Bar */}
      <div className="partner-ticker-wrapper">
        <div className="ticker-badge">
          <span>Trusted Partners Worldwide for Success</span>
        </div>
        <div className="container">
          <div className="partner-logos-row">
            {partnerLogos.map((logo, idx) => (
              <React.Fragment key={idx}>
                <span className="partner-logo-item">{logo}</span>
                {idx < partnerLogos.length - 1 && <span className="partner-dot">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main About Us Section */}
      <div className="container section-padding">
        <div className="text-center max-w-750 reveal-on-scroll">
          <div className="badge-pill">
            <Box size={14} />
            <span>About Inkore</span>
          </div>
          <h2 className="section-title">We build technology that works for your business.</h2>
          <p className="section-subtitle">
            At Inkore, we believe software should do more than just work — it should solve real problems, improve efficiency, and create better experiences. We work with startups, growing businesses, and enterprises to design and develop custom software solutions tailored to their unique needs.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid-ritovex">
          {/* Left Cutout Image */}
          <div className="about-image-wrapper reveal-on-scroll reveal-left">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
              alt="Inkore Team Engineers" 
              className="about-cutout-img"
            />
          </div>

          {/* Right Stats & Info */}
          <div className="about-content-right">
            <div className="stats-2x2-grid">
              <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-1">
                <div className="stat-card-icon"><FolderCheck size={26} /></div>
                <div className="stat-card-val"><AnimatedCounter end={150} suffix="+" /></div>
                <div className="stat-card-divider"></div>
                <p className="stat-card-desc">Reliable Custom Solutions Delivered</p>
              </div>

              <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-2">
                <div className="stat-card-icon"><Briefcase size={26} /></div>
                <div className="stat-card-val"><AnimatedCounter end={12} suffix="+" /></div>
                <div className="stat-card-divider"></div>
                <p className="stat-card-desc">Years of Strategic Engineering</p>
              </div>

              <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-3">
                <div className="stat-card-icon"><Trophy size={26} /></div>
                <div className="stat-card-val"><AnimatedCounter end={45} suffix="+" /></div>
                <div className="stat-card-divider"></div>
                <p className="stat-card-desc">Enterprise Platform Deployments</p>
              </div>

              <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-4">
                <div className="stat-card-icon"><Users size={26} /></div>
                <div className="stat-card-val"><AnimatedCounter end={99} suffix="%+" /></div>
                <div className="stat-card-divider"></div>
                <p className="stat-card-desc">Client Satisfaction & Partnership</p>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="about-actions-row reveal-on-scroll delay-3">
              <button className="btn-ritovex-dark" onClick={() => navigate('/about')}>
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </button>

              <div className="phone-contact-box" onClick={onOpenContact}>
                <div className="phone-icon-box">
                  <PhoneCall size={18} />
                </div>
                <div className="phone-text-group">
                  <span className="phone-label">Get a Free Quote</span>
                  <span className="phone-number">+1 (800) 465-6738</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

