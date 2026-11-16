import React from 'react';
import { Target, Sliders, TrendingUp, Cpu, LifeBuoy } from 'lucide-react';
import './WhyUs.css';

const pillars = [
  { num: '01', title: 'Business First', desc: 'We start by understanding your business, users, and goals before choosing technology.', icon: Target },
  { num: '02', title: 'Built Around You', desc: 'No two businesses are the same. We create solutions tailored to your requirements.', icon: Sliders },
  { num: '03', title: 'Scalable by Design', desc: 'Our solutions are built to grow seamlessly with your business and future needs.', icon: TrendingUp },
  { num: '04', title: 'Modern Tech', desc: 'We use modern practices and tech stacks to build secure, maintainable software.', icon: Cpu },
  { num: '05', title: 'End-to-End Support', desc: 'From initial idea to deployment and scaling, we are with you throughout the journey.', icon: LifeBuoy },
];

export default function WhyUs() {
  return (
    <section className="why" id="why-us" data-nav="dark">
      <div className="dot-grid why__dots" aria-hidden="true" />
      <div className="container section-padding why__inner">
        <div className="why__head">
          <span className="eyebrow on-dark reveal-on-scroll">Why Inkore?</span>
          <h2 className="display">
            <span className="line-mask"><span>Technology. Expertise.</span></span>
            <span className="line-mask"><span className="serif-accent">Partnership.</span></span>
          </h2>
        </div>

        <div className="why__grid">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className={`why-cell reveal-on-scroll reveal-up delay-${i + 1}`}>
                <div className="why-cell__top">
                  <span className="mono why-cell__num">{p.num}</span>
                  <span className="why-cell__icon"><Icon size={18} /></span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
