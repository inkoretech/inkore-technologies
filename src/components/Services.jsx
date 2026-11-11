import React, { useState } from 'react';
import { Box, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import './Services.css';

export default function Services({ onSelectService }) {
  const [selectedModalService, setSelectedModalService] = useState(null);

  const servicesList = [
    {
      num: '01',
      title: 'Web Development',
      shortDesc: 'Modern, responsive web applications, SaaS products, and portals engineered for performance, speed, and seamless user experiences.',
      fullDesc: 'We design and engineer high-performance web platforms, SaaS products, and enterprise web applications using modern frameworks like React, Next.js, Node.js, and cloud databases.',
      techs: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      num: '02',
      title: 'Mobile App Development',
      shortDesc: 'Native and cross-platform mobile apps for iOS and Android built with smooth UI, offline capabilities, and high performance.',
      fullDesc: 'End-to-end mobile app engineering from concept and UI/UX design to App Store and Google Play deployment, leveraging React Native, Flutter, and native mobile technologies.',
      techs: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'REST & GraphQL']
    },
    {
      num: '03',
      title: 'Custom Software Development',
      shortDesc: 'Tailored enterprise software solutions and business systems designed to solve complex operational challenges and scale smoothly.',
      fullDesc: 'Custom software platforms engineered specifically around your business rules, operational workflows, and security requirements to drive real business growth and efficiency.',
      techs: ['System Architecture', 'Microservices', 'Python', 'Java / Spring', 'PostgreSQL']
    },
    {
      num: '04',
      title: 'Backend & API Development',
      shortDesc: 'Secure, high-throughput server architecture, microservices, REST & GraphQL APIs, and database optimizations.',
      fullDesc: 'Scalable backend engines and secure API integrations built to power high-traffic applications, process data asynchronously, and connect third-party platforms.',
      techs: ['RESTful APIs', 'GraphQL', 'Node.js', 'Python / FastAPI', 'Redis', 'PostgreSQL']
    },
    {
      num: '05',
      title: 'Cloud & DevOps',
      shortDesc: 'Cloud infrastructure provisioning, automated CI/CD deployment pipelines, containerization, and 99.9% uptime management.',
      fullDesc: 'Modernize your application infrastructure on AWS, Google Cloud, or Azure with Docker, Kubernetes, automated deployment pipelines, and proactive security monitoring.',
      techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines']
    },
    {
      num: '06',
      title: 'Automation & AI',
      shortDesc: 'Intelligent process automation, AI/LLM integrations, machine learning pipelines, and smart workflow optimization.',
      fullDesc: 'Empower your software with artificial intelligence, custom LLM agents, automated document processing, and intelligent workflow automation to maximize operational speed.',
      techs: ['OpenAI / LLMs', 'Python', 'LangChain', 'Workflow Automation', 'Machine Learning']
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
