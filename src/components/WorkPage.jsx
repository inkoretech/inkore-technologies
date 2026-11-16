import React from 'react';
import { ArrowRight } from 'lucide-react';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import PageHero from './PageHero';
import './WorkPage.css';

export default function WorkPage({ onOpenContact }) {

  return (
    <div className="work-page-wrapper">
      {/* 1. Work Page Hero */}
      <PageHero
        eyebrow="Featured Case Studies & Work"
        title="Engineering Digital Excellence"
        accent="across Industries"
        subtitle="From venture-backed startups to enterprise organizations, discover how Inkore engineers high-performance web applications, scalable mobile apps, and robust cloud architectures."
        meta={[
          { value: '150+', label: 'Digital Products Built' },
          { value: '99.9%', label: 'Uptime SLA Maintained' },
          { value: '$120M+', label: 'Client Transaction Volume' },
        ]}
      />

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

