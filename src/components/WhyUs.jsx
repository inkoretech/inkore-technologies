import React from 'react';
import { 
  Target, 
  Sliders, 
  TrendingUp, 
  Cpu, 
  LifeBuoy, 
  Sparkles
} from 'lucide-react';
import './WhyUs.css';

export default function WhyUs() {
  const pillars = [
    {
      num: '01',
      title: 'Business First',
      desc: 'We start by understanding your business, users, and goals before choosing technology.',
      icon: <Target size={20} />
    },
    {
      num: '02',
      title: 'Built Around You',
      desc: 'No two businesses are the same. We create solutions tailored to your requirements.',
      icon: <Sliders size={20} />
    },
    {
      num: '03',
      title: 'Scalable by Design',
      desc: 'Our solutions are built to grow seamlessly with your business and future needs.',
      icon: <TrendingUp size={20} />
    },
    {
      num: '04',
      title: 'Modern Tech',
      desc: 'We use modern practices and tech stacks to build secure, maintainable software.',
      icon: <Cpu size={20} />
    },
    {
      num: '05',
      title: 'End-to-End Support',
      desc: 'From initial idea to deployment and scaling, we are with you throughout the journey.',
      icon: <LifeBuoy size={20} />
    }
  ];

  return (
    <section className="why-compact-section" id="why-us">
      <div className="container section-padding-compact">
        {/* Header */}
        <div className="text-center max-w-650 reveal-on-scroll mb-32">
          <div className="badge-pill sm-pill">
            <Sparkles size={12} className="icon-sparkle" />
            <span>Why Inkore?</span>
          </div>
          <h2 className="section-title-sm">Technology. Expertise. Partnership.</h2>
        </div>

        {/* Compact 5 Pillar Row */}
        <div className="why-compact-grid">
          {pillars.map((item) => (
            <div key={item.num} className="why-compact-card">
              <div className="compact-card-top">
                <div className="compact-icon-box">{item.icon}</div>
                <span className="compact-num">{item.num}</span>
              </div>
              <h3 className="compact-title">{item.title}</h3>
              <p className="compact-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



