import React, { useState } from 'react';
import { Box, CheckCircle2, Plus, Minus } from 'lucide-react';
import LetsTalk from './LetsTalk';
import Services from './Services';
import './ServicesPage.css';

export default function ServicesPage({ onOpenContact, onSelectService }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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
      {/* 1. Services Hero Banner matching Screenshot 1 */}
      <section className="services-hero-section">
        <div className="container text-left reveal-on-scroll">
          <h1 className="services-hero-title">Creative Solutions</h1>
          <p className="services-hero-subtitle">
            We deliver innovative, tailor-made strategies that solve problems, spark ideas, and bring your vision to life — efficiently and effectively.
          </p>
          <div className="services-hero-actions">
            <button className="btn-ritovex-dark" onClick={onOpenContact}>
              Start Projects
            </button>
            <button className="btn-ritovex-orange" onClick={onOpenContact}>
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 2. Dark Services Rows Component */}
      <Services onSelectService={onSelectService} />

      {/* 3. Why Choose Our Services Split Section matching Screenshot 4 */}
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
            <div className="badge-pill">
              <Box size={14} />
              <span>Benefit</span>
            </div>

            <h2 className="why-split-heading">Why Choose Our Services</h2>
            <p className="why-split-lead">
              Get high-quality results, faster delivery, and tailored solutions that grow with your business. We focus on value, efficiency, and long-term success for every project.
            </p>

            <div className="why-split-points-list">
              <div className="why-split-point-item">
                <div className="orange-check-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4>Fast & Reliable Delivery</h4>
                  <p>We prioritize timely completion without compromising quality.</p>
                </div>
              </div>

              <div className="why-split-point-item">
                <div className="orange-check-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4>Tailored to Your Needs</h4>
                  <p>Every solution is customized to fit your unique goals and challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions with Left Box matching Screenshot 2 */}
      <section className="services-faq-section">
        <div className="container section-padding">
          <div className="text-center max-w-700 reveal-on-scroll">
            <div className="badge-pill">
              <Box size={14} />
              <span>FAQS</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              We use modern, reliable technologies to craft fast, user-friendly digital experiences. Our stack is built for performance, scalability, and smooth development.
            </p>
          </div>

          <div className="services-faq-grid">
            {/* Left Box */}
            <div className="faq-left-cta-card reveal-on-scroll reveal-left">
              <h3>Still Have More Questions?</h3>
              <div className="faq-card-line"></div>
              <p>If you’re curious or need more info, feel free to reach out — we’re here to help!</p>
              <button className="btn-ritovex-dark" onClick={onOpenContact}>
                Contact Us Now
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
