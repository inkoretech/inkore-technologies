import React, { useState } from 'react';
import { ArrowUpRight, X, Smartphone, Search, Palette, Megaphone, Boxes, PenTool } from 'lucide-react';
import './Services.css';

export const servicesList = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile apps for iOS and Android built with smooth UI, offline capabilities, and high performance.',
    fullDesc: 'End-to-end mobile app engineering from concept and UI/UX design to App Store and Google Play deployment, leveraging React Native, Flutter, and native mobile technologies.',
    techs: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'REST & GraphQL'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    shortDesc: 'Technical, on-page, and local SEO that helps customers find your business on Google and turns search traffic into enquiries.',
    fullDesc: 'We audit and optimize your website structure, speed, content, and keywords, set up Google Business Profile and analytics, and track rankings so you can see exactly how your visibility grows month by month.',
    techs: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'Google Search Console', 'Analytics'],
  },
  {
    num: '03',
    icon: Palette,
    title: 'Branding',
    shortDesc: 'Logo, visual identity, and brand guidelines that give your business a consistent, memorable look across every touchpoint.',
    fullDesc: 'From brand strategy and naming to logo design, color palettes, typography, and brand guidelines, we create an identity that reflects who you are and stays consistent across your website, social media, and print.',
    techs: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Typography', 'Print & Social Assets'],
  },
  {
    num: '04',
    icon: Megaphone,
    title: 'Digital Marketing',
    shortDesc: 'Social media, paid ads, and content campaigns planned around your goals and measured on real leads and sales.',
    fullDesc: 'We plan and run campaigns across Google Ads, Meta (Facebook & Instagram), and LinkedIn, create content that fits your audience, and report on the numbers that matter: reach, leads, and return on ad spend.',
    techs: ['Social Media', 'Google Ads', 'Meta Ads', 'Content Marketing', 'Email Campaigns'],
  },
  {
    num: '05',
    icon: Boxes,
    title: 'Custom Software Development',
    shortDesc: 'Tailored enterprise software solutions and business systems designed to solve complex operational challenges and scale smoothly.',
    fullDesc: 'Custom software platforms engineered specifically around your business rules, operational workflows, and security requirements to drive real business growth and efficiency.',
    techs: ['System Architecture', 'Microservices', 'Python', 'Java / Spring', 'PostgreSQL'],
  },
  {
    num: '06',
    icon: PenTool,
    title: 'UI/UX Design',
    shortDesc: 'User research, wireframes, and polished interface design for websites and apps that are easy and enjoyable to use.',
    fullDesc: 'We map user journeys, build wireframes and interactive prototypes, and design clean, accessible interfaces in Figma, handing developers a complete design system so the final product matches the design.',
    techs: ['User Research', 'Wireframes', 'Prototyping', 'Figma', 'Design Systems'],
  },
];

export default function Services({ onSelectService }) {
  const [active, setActive] = useState(null);

  return (
    <section className="svc" id="services">
      <div className="container section-padding">
        <div className="section-head">
          <div>
            <span className="eyebrow reveal-on-scroll">Services</span>
            <h2 className="display">
              <span className="line-mask"><span>Your Needs,</span></span>
              <span className="line-mask"><span className="accent">Our Expertise</span></span>
            </h2>
          </div>
          <p data-split>
            Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results. Let&apos;s build something amazing.
          </p>
        </div>

        <div className="svc__grid">
          {servicesList.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="svc-cell" data-speed={idx % 3 === 1 ? -120 : 80}>
              <button
                type="button"
                className={`svc-card reveal-on-scroll reveal-up delay-${(idx % 3) + 1}`}
                onClick={() => setActive(s)}
              >
                <div className="svc-card__top">
                  <span className="svc-card__icon"><Icon size={18} /></span>
                  <span className="svc-card__num">{s.num}</span>
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.shortDesc}</p>
                <div className="svc-card__foot">
                  <div className="svc-card__chips">
                    {s.techs.slice(0, 3).map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <span className="arrow-circle"><ArrowUpRight size={17} /></span>
                </div>
              </button>
              </div>
            );
          })}
        </div>
      </div>

      {active && (
        <div className="modal-overlay" data-lenis-prevent onClick={() => setActive(null)}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActive(null)} aria-label="Close">
              <X size={18} />
            </button>
            <span className="eyebrow">{active.num} Service</span>
            <h2 className="modal-title">{active.title}</h2>
            <p className="modal-description">{active.fullDesc}</p>
            <p className="modal-label">Tech Stack &amp; Tools</p>
            <div className="modal-chips">
              {active.techs.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                const name = active.title;
                setActive(null);
                onSelectService && onSelectService(name);
              }}
            >
              Request Quote for {active.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
