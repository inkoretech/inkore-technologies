import React, { useEffect, useRef } from 'react';
import { FileSearch, Edit3, Rocket, ArrowUpRight } from 'lucide-react';
import './Process.css';

const steps = [
  {
    num: '01',
    icon: FileSearch,
    title: 'Discovery & Strategy',
    desc: 'We start by understanding your vision, goals, target audience, and business requirements to create a customized technical roadmap.',
  },
  {
    num: '02',
    icon: Edit3,
    title: 'Design & Development',
    desc: 'Our engineering team crafts intuitive UI/UX prototypes and writes high-performance scalable code during bi-weekly agile sprints.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Deployment & Growth',
    desc: 'We launch your platform on enterprise cloud infrastructure with continuous monitoring, zero-downtime CI/CD, and 24/7 technical support.',
  },
];

export default function Process({ onOpenContact }) {
  const timelineRef = useRef(null);

  // Fill the timeline line as the user scrolls through the steps
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height));
      el.style.setProperty('--fill', p.toFixed(3));
      el.querySelectorAll('.process-step').forEach((step) => {
        const sr = step.getBoundingClientRect();
        step.classList.toggle('is-active', sr.top < vh * 0.7);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="process" id="process">
      <div className="container section-padding process__grid">
        <div className="process__intro">
          <span className="eyebrow reveal-on-scroll">Working Process</span>
          <h2 className="display process__title">
            <span className="line-mask"><span>Explore Our 3 Step</span></span>
            <span className="line-mask"><span className="serif-accent">Working Process</span></span>
          </h2>
          <button className="btn btn-primary reveal-on-scroll delay-3" onClick={onOpenContact}>
            Start Projects <ArrowUpRight size={16} />
          </button>
        </div>

        <ol className="process__timeline" ref={timelineRef}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.num} className={`process-step reveal-on-scroll reveal-right delay-${i + 1}`}>
                <span className="process-step__node" aria-hidden="true" />
                <div className="process-step__card">
                  <span className="process-step__bignum" aria-hidden="true">{s.num}</span>
                  <div className="process-step__head">
                    <span className="process-step__icon"><Icon size={20} /></span>
                    <span className="mono process-step__num">{s.num}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
