import React, { useState } from 'react';
import { Box, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import './Services.css';

export default function Services({ onSelectService }) {
  const [selectedModalService, setSelectedModalService] = useState(null);

  const servicesList = [
    {
      num: '01',
      title: 'Web Design',
      shortDesc: 'Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive layouts. It involves aspects like graphic design, typography, and color schemes to enhance user engagement.',
      fullDesc: 'Custom high-converting website designs engineered with interactive wireframes, custom design systems, and mobile responsive layouts built for maximum conversion.',
      techs: ['Figma', 'UI/UX Design', 'Design Systems', 'Responsive Web']
    },
    {
      num: '02',
      title: 'Web Development',
      shortDesc: 'Involves the coding and programming that makes a website functional and interactive. This includes front-end development (what users see) and back-end development (server, database, and application logic).',
      fullDesc: 'High-speed web applications and SaaS platforms powered by React, Next.js 14, Node.js, and multi-region cloud databases.',
      techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind']
    },
    {
      num: '03',
      title: 'Branding',
      shortDesc: 'The process of creating a unique identity for a company or product, encompassing its name, logo, messaging, and overall market perception. It aims to establish recognition and a positive emotional connection with the target audience.',
      fullDesc: 'Complete brand identity systems including logo design, brand guidelines, typography, messaging strategy, and visual design assets for brand recognition.',
      techs: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Typography', 'Style Guides']
    },
    {
      num: '04',
      title: 'Product Design',
      shortDesc: 'Encompasses the entire process of creating a new product, from conceptualization and research to prototyping and final execution. It focuses on solving user problems and enhancing the overall user experience and functionality of a product.',
      fullDesc: 'End-to-end digital product design covering user research, journey mapping, wireframing, interactive prototyping, and UX engineering.',
      techs: ['Figma', 'Prototyping', 'User Research', 'UI/UX Engineering', 'Wireframing']
    }
  ];

  return (
    <section className="services-section-ritovex" id="services">
      <div className="container section-padding">
        <div className="text-center max-w-700 reveal-on-scroll">
          <div className="badge-pill dark">
            <Box size={14} />
            <span>Services</span>
          </div>
          <h2 className="section-title dark-text">Your Needs, Our Expertise</h2>
          <p className="section-subtitle dark-text">
            Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results. Let's build something amazing.
          </p>
        </div>

        {/* Services Accordion List matching Screenshot 3 */}
        <div className="services-list-ritovex">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className={`service-row-ritovex reveal-on-scroll delay-${idx + 1}`}
              onClick={() => setSelectedModalService(service)}
            >
              <div className="service-row-header">
                <div className="service-row-title-group">
                  <span className="service-row-num">{service.num}</span>
                  <h3 className="service-row-title">{service.title}</h3>
                </div>
                <div className="service-arrow-circle">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              <p className="service-row-desc">{service.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="modal-overlay" onClick={() => setSelectedModalService(null)}>
          <div className="modal-content glass-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedModalService(null)}>
              <X size={20} />
            </button>

            <span className="badge-pill">{selectedModalService.num} Service</span>
            <h2 className="modal-title" style={{ color: '#111827', marginTop: '12px' }}>
              {selectedModalService.title}
            </h2>
            <p className="modal-description" style={{ color: '#4b5563', margin: '16px 0' }}>
              {selectedModalService.fullDesc}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#111827', marginBottom: '10px' }}>TECH STACK & TOOLS</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedModalService.techs.map((t, i) => (
                  <span key={i} style={{ background: '#f3f4f6', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#111827' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button 
              className="btn-ritovex-dark" 
              style={{ width: '100%' }}
              onClick={() => {
                const sName = selectedModalService.title;
                setSelectedModalService(null);
                onSelectService(sName);
              }}
            >
              Request Quote for {selectedModalService.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
