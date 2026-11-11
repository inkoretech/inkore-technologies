import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CheckCircle2, Plus, Minus, ArrowRight, Sparkles } from 'lucide-react';
import LetsTalk from './LetsTalk';
import Services from './Services';
import './ServicesPage.css';

export default function ServicesPage({ onOpenContact, onSelectService }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const navigate = useNavigate();

  const faqItems = [
    {
      q: 'What Services Do You Offer?',
      a: 'Inkore Technologies offers end-to-end IT solutions including custom web application development, mobile app engineering (iOS & Android), enterprise cloud architecture, DevOps automation, AI/LLM integration, and UI/UX product design.'
    },
    {
      q: 'What Is the Project Timeline?',
      a: 'A typical MVP or custom web application takes 4 to 8 weeks to develop in bi-weekly agile sprints. Enterprise cloud platforms or complex mobile apps take 10 to 16 weeks depending on feature scope.'
    },
    {
      q: 'Do You Offer Ongoing Support?',
      a: 'Yes, absolutely. We believe in building long-term relationships with our clients. Our ongoing support packages ensure your digital assets remain secure, up-to-date, and perform optimally.'
    },
    {
      q: 'How Do You Ensure Quality?',
      a: 'We enforce automated unit & integration testing (>85% test coverage), peer code reviews, continuous CI/CD pipelines, and strict SOC2/GDPR security standards across every release.'
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* 1. Services Hero Banner */}
      <section className="services-hero-section">
        <div className="container text-left reveal-on-scroll">
          <div className="badge-pill">
            <Sparkles size={14} />
            <span>Full-Cycle Engineering</span>
          </div>
          <h1 className="services-hero-title">Creative & Resilient IT Solutions</h1>
          <p className="services-hero-subtitle">
            We deliver innovative, tailor-made digital engineering that solves complex problems, accelerates market delivery, and scales smoothly alongside your enterprise.
          </p>
          <div className="services-hero-actions">
            <button className="btn-ritovex-dark" onClick={onOpenContact}>
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>
            <button className="btn-ritovex-light" onClick={() => navigate('/estimate')}>
              <span>Calculate Project Cost</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Dark Services Rows Component */}
      <Services onSelectService={onSelectService} />

      {/* 3. Why Choose Our Services Split Section */}
      <section className="why-services-split-section">
        <div className="why-services-split-grid">
          {/* Left Column Image */}
          <div className="why-split-img-box reveal-on-scroll reveal-left">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
              alt="Inkore Team Collaboration" 
              className="why-split-img"
            />
          </div>

          {/* Right Column Box */}
          <div className="why-split-dark-box reveal-on-scroll reveal-right">
            <div className="badge-pill dark">
              <Box size={14} />
              <span>Enterprise Advantages</span>
            </div>

            <h2 className="why-split-heading">Why Choose Inkore Engineering</h2>
            <p className="why-split-lead">
              Get high-quality results, predictable delivery sprints, and bespoke solutions that grow with your business. We focus on business value, efficiency, and long-term partnership.
            </p>

            <div className="why-split-points-list">
              <div className="why-split-point-item">
                <div className="blue-check-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4>Fast & Reliable Agile Delivery</h4>
                  <p>Bi-weekly release sprints with continuous automated testing and 99.9% reliability.</p>
                </div>
              </div>

              <div className="why-split-point-item">
                <div className="blue-check-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4>Architected for High Concurrency</h4>
                  <p>Every system is designed to handle millions of transactions with zero performance bottlenecks.</p>
                </div>
              </div>

              <div className="why-split-point-item">
                <div className="blue-check-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4>Modern Technology Stacks</h4>
                  <p>React, Next.js, Flutter, Python, Go, Kubernetes, and enterprise cloud infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="services-faq-section">
        <div className="container section-padding">
          <div className="text-center max-w-700 reveal-on-scroll">
            <div className="badge-pill">
              <Box size={14} />
              <span>FAQS</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Have questions about timelines, technology selection, or engagement models? Here is everything you need to know about partnering with Inkore.
            </p>
          </div>

          <div className="services-faq-grid">
            {/* Left Box */}
            <div className="faq-left-cta-card reveal-on-scroll reveal-left">
              <h3>Have Specific Requirements?</h3>
              <div className="faq-card-line"></div>
              <p>Our senior solution architects are available for a detailed technical consultation to review your architecture.</p>
              <button className="btn-ritovex-dark" onClick={onOpenContact}>
                Contact Our Architects
              </button>
            </div>

            {/* Right Accordion */}
            <div className="faq-right-accordion-list reveal-on-scroll reveal-right">
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`services-faq-item ${isOpen ? 'open' : ''}`}>
                    <button 
                      className="services-faq-question-btn" 
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    >
                      <span>{item.q}</span>
                      <div className="faq-plus-icon">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="services-faq-answer animate-fade-in">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Let's Start Talk Contact Section */}
      <LetsTalk />
    </div>
  );
}
