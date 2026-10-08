import React from 'react';
import { Box, FolderCheck, Briefcase, Trophy, Users, Search, Layout, Code2, ShieldCheck, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import Services from './Services';
import WhyUs from './WhyUs';
import './AboutUsPage.css';

export default function AboutUsPage({ onNavigateHome, onOpenContact, onSelectService }) {
  const approachSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We deeply analyze your business objectives, operational challenges, user needs, and tech requirements.',
      icon: <Search size={24} />
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Crafting intuitive UI/UX designs and robust software architecture blueprints tailored for performance.',
      icon: <Layout size={24} />
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Clean, agile software development across modern web, mobile, API, and enterprise tech stacks.',
      icon: <Code2 size={24} />
    },
    {
      num: '04',
      title: 'Test',
      desc: 'Rigorous automated testing, security audits, and QA validation to ensure 99.9% reliable execution.',
      icon: <ShieldCheck size={24} />
    },
    {
      num: '05',
      title: 'Launch',
      desc: 'Seamless deployment to production cloud infrastructure with zero downtime and CI/CD pipelines.',
      icon: <Rocket size={24} />
    },
    {
      num: '06',
      title: 'Scale',
      desc: 'Continuous monitoring, cloud optimization, and ongoing feature updates as your business grows.',
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <div className="about-page-wrapper">
      {/* 1. About Us Hero Banner */}
      <section className="about-hero-section">
        <div className="container text-center max-w-850 reveal-on-scroll">
          <div className="badge-pill mb-16">
            <Box size={14} />
            <span>About Inkore</span>
          </div>
          <h1 className="about-hero-title">We build technology that works for your business.</h1>
          <p className="about-hero-subtitle">
            At Inkore, we believe software should do more than just work — it should solve real problems, improve efficiency, and create better experiences.
          </p>
          <div className="about-hero-actions">
            <button className="btn-ritovex-dark" onClick={onOpenContact}>
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>
            <a href="#approach" className="btn-ritovex-light">
              Explore Our Approach
            </a>
          </div>
        </div>
      </section>

      {/* 2. Stat Cards Row & Full Narrative Section */}
      <section className="about-details-section">
        <div className="container section-padding">
          {/* Top 4 Stat Cards Row */}
          <div className="about-stats-top-row">
            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-1">
              <div className="stat-card-icon"><FolderCheck size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={150} suffix="+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">Reliable Custom Solutions Delivered</p>
            </div>

            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-2">
              <div className="stat-card-icon"><Briefcase size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={12} suffix="+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">Years of Technical Engineering</p>
            </div>

            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-3">
              <div className="stat-card-icon"><Trophy size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={45} suffix="+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">Enterprise Platforms Scaled</p>
            </div>

            <div className="ritovex-stat-card card-hover-3d reveal-on-scroll delay-4">
              <div className="stat-card-icon"><Users size={26} /></div>
              <div className="stat-card-val"><AnimatedCounter end={99} suffix="%+" /></div>
              <div className="stat-card-divider"></div>
              <p className="stat-card-desc">Client Retention & Partnership</p>
            </div>
          </div>

          {/* Main About Layout: Image Left, Full Narrative Right */}
          <div className="about-success-grid">
            <div className="about-cutout-frame-large reveal-on-scroll reveal-left">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" 
                alt="Inkore Team Engineering Solutions"
                className="about-cutout-img" 
              />
            </div>

            <div className="about-pillars-content reveal-on-scroll reveal-right">
              <div className="badge-pill">
                <Box size={14} />
                <span>Who We Are</span>
              </div>

              <h2 className="about-pillars-heading">Custom Software Built for Impact & Scalability</h2>
              
              <div className="about-full-narrative">
                <p>
                  At Inkore, we believe software should do more than just work — it should solve real problems, improve efficiency, and create better experiences.
                </p>
                <p>
                  We work with startups, growing businesses, and enterprises to design and develop custom software solutions tailored to their unique needs.
                </p>
                <p>
                  From modern web applications and mobile apps to APIs, automation, cloud solutions, and enterprise platforms, our team combines technology, creativity, and business understanding to deliver solutions that create real value.
                </p>
              </div>

              <button className="btn-ritovex-dark mt-24" onClick={onOpenContact}>
                <span>Get a Free Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Approach Section (Understand → Design → Build → Test → Launch → Scale) */}
      <section className="about-approach-section" id="approach">
        <div className="container section-padding">
          <div className="text-center max-w-700 reveal-on-scroll mb-56">
            <div className="badge-pill">
              <Box size={14} />
              <span>Methodology</span>
            </div>
            <h2 className="section-title">Our approach is simple.</h2>
            <p className="section-subtitle">
              A structured, transparent engineering lifecycle designed to turn complex business requirements into high-value digital products.
            </p>
          </div>

          {/* 6 Step Cards Grid */}
          <div className="approach-cards-grid">
            {approachSteps.map((step, idx) => (
              <div key={step.title} className={`approach-card card-hover-3d reveal-on-scroll delay-${(idx % 3) + 1}`}>
                <div className="approach-card-header">
                  <div className="approach-icon-box">{step.icon}</div>
                  <span className="approach-step-num">{step.num}</span>
                </div>
                <h3 className="approach-card-title">{step.title}</h3>
                <p className="approach-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <Services onSelectService={onSelectService} />

      {/* 5. Why Inkore Section */}
      <WhyUs onOpenContact={onOpenContact} />
    </div>
  );
}

