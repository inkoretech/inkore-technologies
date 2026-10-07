import React from 'react';
import { Box, FolderCheck, Briefcase, Trophy, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import Services from './Services';
import './AboutUsPage.css';

export default function AboutUsPage({ onNavigateHome, onOpenContact, onSelectService }) {
  return (
    <div className="about-page-wrapper">
      {/* 1. About Us Hero Banner matching Screenshot 1 */}
      <section className="about-hero-section">
        <div className="container text-center max-w-700 reveal-on-scroll">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            We're a creative agency fueled by passion and purpose. We partner with brands to craft unforgettable experiences and meaningful connections. From concept to execution, we blend strategic thinking with innovative design to deliver results that don't just look good — they perform. Let's create something extraordinary together.
          </p>
          <div className="about-hero-actions">
            <a href="#services" className="btn-ritovex-dark">
              Our Services
            </a>
            <button className="btn-ritovex-light" onClick={onOpenContact}>
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stat Cards Row + "Your Success, Our Priority" Section matching Screenshot 2 */}
      <section className="about-details-section">
        <div className="container section-padding">
          {/* Top 4 Stat Cards Row */}
          <div className="about-stats-top-row">
            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-1">
              <div className="stat-card-icon"><FolderCheck size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={150} suffix="+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">We deliver great work always</p>
            </div>

            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-2">
              <div className="stat-card-icon"><Briefcase size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={12} suffix="+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">Experience you can count on</p>
            </div>

            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-3">
              <div className="stat-card-icon"><Trophy size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={45} suffix="+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">Award-Winning Work, Trusted Results</p>
            </div>

            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-4">
              <div className="stat-card-icon"><Users size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={99} suffix="%+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">We have happy Clients worldwide</p>
            </div>
          </div>

          {/* Main About Layout: Image Left, 4 Pillars Right */}
          <div className="about-success-grid">
            <div className="about-cutout-frame-large reveal-on-scroll reveal-left">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80" 
                alt="Inkore Team Lead"
                className="about-cutout-img" 
              />
            </div>

            <div className="about-pillars-content reveal-on-scroll reveal-right">
              <div className="badge-pill">
                <Box size={14} />
                <span>About Us</span>
              </div>

              <h2 className="about-pillars-heading">Your Success, Our Priority.</h2>
              <p className="about-pillars-desc">
                We're dedicated to helping you achieve your goals with a simple, user-friendly experience. We believe our commitment to your success sets us apart.
              </p>

              <div className="pillars-2x2-grid">
                <div className="pillar-item">
                  <h4>Innovate to Lead</h4>
                  <p>Foster creativity and embrace innovation to stay ahead of the competition.</p>
                </div>
                <div className="pillar-item">
                  <h4>Optimize for Growth</h4>
                  <p>Streamline processes and resources to maximize efficiency and profitability.</p>
                </div>
                <div className="pillar-item">
                  <h4>Engage with Purpose</h4>
                  <p>Build meaningful relationships with customers through structured execution.</p>
                </div>
                <div className="pillar-item">
                  <h4>Scale with Strategy</h4>
                  <p>Expand your business by implementing structured, scalable plans.</p>
                </div>
              </div>

              <button className="btn-ritovex-dark" onClick={onOpenContact}>
                Start Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dark Services Section matching Screenshot 3 */}
      <Services onSelectService={onSelectService} />
    </div>
  );
}
