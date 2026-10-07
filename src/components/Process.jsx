import React from 'react';
import { Box, FileSearch, Edit3, Rocket } from 'lucide-react';
import './Process.css';

export default function Process({ onOpenContact }) {
  const steps = [
    {
      num: '01',
      icon: <FileSearch size={24} />,
      title: 'Discovery & Strategy',
      desc: 'We start by understanding your vision, goals, target audience, and business requirements to create a customized technical roadmap.'
    },
    {
      num: '02',
      icon: <Edit3 size={24} />,
      title: 'Design & Development',
      desc: 'Our engineering team crafts intuitive UI/UX prototypes and writes high-performance scalable code during bi-weekly agile sprints.'
    },
    {
      num: '03',
      icon: <Rocket size={24} />,
      title: 'Deployment & Growth',
      desc: 'We launch your platform on enterprise cloud infrastructure with continuous monitoring, zero-downtime CI/CD, and 24/7 technical support.'
    }
  ];

  return (
    <section className="process-section-ritovex" id="process">
      <div className="container section-padding">
        <div className="process-grid-ritovex">
          {/* Left Column */}
          <div className="process-left-col reveal-on-scroll reveal-left">
            <div className="badge-pill">
              <Box size={14} />
              <span>Working Process</span>
            </div>

            <h2 className="process-heading-ritovex">
              Explore Our 3 Step <br />
              Working Process
            </h2>

            <button className="btn-ritovex-dark process-btn" onClick={onOpenContact}>
              Start Projects
            </button>
          </div>

          {/* Right Column - 3 Stacked Cards */}
          <div className="process-right-col">
            {steps.map((step, idx) => (
              <div key={step.num} className={`process-card-ritovex reveal-on-scroll delay-${idx + 1}`}>
                <div className="process-card-top">
                  <div className="process-icon-circle">
                    {step.icon}
                  </div>
                  <span className="process-number-large">{step.num}</span>
                </div>

                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
