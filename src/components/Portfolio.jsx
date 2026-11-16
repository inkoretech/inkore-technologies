import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CheckCircle2, X, TrendingUp } from 'lucide-react';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Web Apps', 'Mobile Apps', 'Cloud & AI'];

const projects = [
  {
    id: 'nova-health',
    subtitle: 'Next.js 14, Node.js, WebRTC, PostgreSQL',
    category: 'Web Apps',
    title: 'NovaHealth Telemedicine SaaS',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    impact: '2.5M Patient Visits',
    description: 'End-to-end cloud platform for healthcare providers enabling encrypted video consultations, electronic health records (EHR), and automated appointment scheduling.',
    results: ['99.99% uptime SLA across multi-region AWS cloud', 'HIPAA & GDPR fully compliant architecture', 'Reduced patient waiting times by 65%'],
    techs: ['Next.js 14', 'Node.js', 'WebRTC', 'AWS ECS', 'PostgreSQL'],
  },
  {
    id: 'finflow-mobile',
    subtitle: 'Flutter, iOS/Android, Firebase, Plaid API',
    category: 'Mobile Apps',
    title: 'FinFlow Global Payment App',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    impact: '$45M Monthly Volume',
    description: 'Cross-platform mobile banking app providing instant peer-to-peer transfers, multi-currency accounts, and automated AI spending analytics.',
    results: ['4.9 / 5.0 rating on Apple App Store & Google Play', 'Sub-100ms transaction execution speeds', 'Over 350,000 active monthly users'],
    techs: ['Flutter', 'Dart', 'Firebase', 'Plaid API', 'Stripe Connect'],
  },
  {
    id: 'logitrack-ai',
    subtitle: 'Python, TensorFlow, React, Docker, GCP',
    category: 'Cloud & AI',
    title: 'LogiTrack AI Fleet Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    impact: '-28% Fuel Costs',
    description: 'Enterprise AI platform tracking 85,000 delivery vehicles worldwide with real-time GPS telemetry, route optimization, and driver safety alerts.',
    results: ['Saved 2.4 million gallons of fuel in Year 1', 'Predictive vehicle maintenance alert accuracy >94%', 'Seamless integration with SAP and Oracle ERPs'],
    techs: ['Python', 'TensorFlow', 'React', 'Kubernetes', 'Google Cloud'],
  },
  {
    id: 'veloce-store',
    subtitle: 'React, Shopify Storefront API, GraphQL',
    category: 'Web Apps',
    title: 'Veloce High-Speed E-Commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    impact: '+310% Sales Conversion',
    description: 'Headless e-commerce web platform engineered for luxury apparel brand, featuring 0.3s page transitions and instant localized checkout.',
    results: ['100/100 Mobile Lighthouse speed benchmark score', '+310% checkout conversion rate uplift post-launch', 'Handled 45,000 concurrent users during Black Friday sale'],
    techs: ['React', 'Shopify Storefront', 'GraphQL', 'Vercel Edge'],
  },
  {
    id: 'apex-pay',
    subtitle: 'Swift, Kotlin, Native NFC, Web3 SDK',
    category: 'Mobile Apps',
    title: 'Apex Pay NFC Mobile Wallet',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    impact: '500k Downloads',
    description: 'Native iOS & Android digital wallet supporting contactless tap-to-pay, loyalty card digitization, and instant crypto-to-fiat conversion.',
    results: ['Awarded Best Mobile UI/UX Design 2025', 'Zero security breaches across 10M+ transactions', '98% user onboarding completion rate'],
    techs: ['Swift', 'Kotlin', 'NFC Hardware', 'AWS KMS'],
  },
  {
    id: 'cybershield',
    subtitle: 'Go, Python, Machine Learning, AWS',
    category: 'Cloud & AI',
    title: 'CyberShield Autonomous SOC',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    impact: '99.8% Threat Accuracy',
    description: 'Autonomous cyber security intelligence center analyzing gigabytes of enterprise log traffic per second for zero-day threat detection.',
    results: ['Automated response to 94% of suspicious network anomalies', 'Reduced incident containment time from 6 hours to 45 seconds', 'Deployed across 30 Fortune 500 corporate IT networks'],
    techs: ['Go', 'Python', 'Kafka', 'ElasticSearch', 'AWS S3'],
  },
];

export default function Portfolio() {
  const [cat, setCat] = useState('All');
  const [selected, setSelected] = useState(null);
  const stackRef = useRef(null);

  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat);

  // Stacking cards: each card shrinks and dims as the next one slides over it
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray('.stack-item');
        items.forEach((item, i) => {
          const next = items[i + 1];
          if (!next) return;
          const card = item.querySelector('.work-card');
          gsap.to(card, {
            scale: 0.92,
            filter: 'brightness(0.6)',
            ease: 'none',
            scrollTrigger: {
              trigger: next,
              start: 'top 65%',
              end: 'top top+=140',
              scrub: 0.3,
            },
          });
        });
        gsap.from('.work-card__media img', {
          scale: 1.25,
          ease: 'none',
          stagger: 0,
          scrollTrigger: { trigger: stackRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }, stackRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [cat]);

  return (
    <section className="work" id="portfolio" data-nav="dark">
      <div className="container section-padding work__inner">
        <div className="section-head">
          <div>
            <span className="eyebrow on-dark reveal-on-scroll">Case Studies &amp; Portfolio</span>
            <h2 className="display">
              <span className="line-mask"><span>Engineering Success for</span></span>
              <span className="line-mask"><span className="accent">Market Leaders</span></span>
            </h2>
          </div>
          <p data-split>
            Explore a selection of web applications, mobile platforms, and enterprise solutions designed and built by Inkore Technologies.
          </p>
        </div>

        <div className="work__filters reveal-on-scroll" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              className={`work__filter mono ${cat === c ? 'is-active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="work__stack" ref={stackRef}>
          {list.map((p, i) => (
            <div key={p.id} className="stack-item" style={{ '--i': i }}>
              <article className="work-card" onClick={() => setSelected(p)}>
                <div className="work-card__media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <span className="work-card__impact mono"><TrendingUp size={12} /> {p.impact}</span>
                <span className="work-card__index mono">{String(i + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}</span>
                <div className="work-card__body">
                  <span className="mono work-card__industry">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p className="work-card__sub">{p.subtitle}</p>
                  <div className="work-card__foot">
                    <div className="work-card__chips">
                      {p.techs.slice(0, 3).map((t) => <span key={t} className="chip on-dark">{t}</span>)}
                    </div>
                    <span className="work-card__view mono">View Case Study <ArrowUpRight size={15} /></span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" data-lenis-prevent onClick={() => setSelected(null)}>
          <div className="modal-content work-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelected(null)} aria-label="Close"><X size={18} /></button>
            <div className="work-modal__hero">
              <img src={selected.image} alt={selected.title} />
              <span className="work-card__impact mono"><TrendingUp size={12} /> {selected.impact}</span>
            </div>
            <div className="work-modal__body">
              <span className="eyebrow">{selected.category}</span>
              <h2 className="modal-title">{selected.title}</h2>
              <p className="modal-description">{selected.description}</p>
              <p className="modal-label">Key Results &amp; Achievements</p>
              <ul className="work-modal__results">
                {selected.results.map((r) => (
                  <li key={r}><CheckCircle2 size={17} /> {r}</li>
                ))}
              </ul>
              <p className="modal-label">Technologies Used</p>
              <div className="modal-chips">
                {selected.techs.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
              <button className="btn btn-ink" onClick={() => setSelected(null)}>Close Case Study</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
