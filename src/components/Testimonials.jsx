import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import './Testimonials.css';

const tickerServices = [
  'Web Design', 'UI/UX Design', 'Product Design', 'Digital Marketing', 'Mobile Apps', 'Web Development',
];

const testimonials = [
  {
    id: 1,
    quote: 'I came to them with a vague idea, and they helped me refine it into a concrete plan. Throughout the process, they kept me informed and involved, ensuring I was happy with the direction.',
    name: 'Alisa Olivia',
    role: 'CTO at Ritovex',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    quote: 'Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their attention to detail.',
    name: 'Jordan Walk',
    role: 'Software Engineer at Briks',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    quote: "Inkore Technologies delivered our Next.js SaaS platform 3 weeks ahead of schedule. Their team's code quality and architecture decisions saved us months of future tech debt.",
    name: 'Marcus Vance',
    role: 'VP of Product at NovaHealth',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const go = (d) => setIdx((i) => (i + d + n) % n);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="voices" id="testimonials">
      {/* Dark service marquee */}
      <div className="voices__ticker" aria-hidden="true" data-nav="dark">
        <div data-marquee="right"><div className="voices__ticker-track">
          {tickerServices.concat(tickerServices).map((t, i) => (
            <span key={i} className="voices__ticker-item">
              {t} <ArrowUpRight size={14} />
              <span className="voices__ticker-star">✳</span>
            </span>
          ))}
        </div></div>
      </div>

      <div className="container section-padding voices__grid">
        <div>
          <span className="eyebrow reveal-on-scroll">Testimonial</span>
          <h2 className="display voices__title">
            <span className="line-mask"><span>What Our Clients</span></span>
            <span className="line-mask"><span className="accent">are Saying</span></span>
          </h2>
          <p className="voices__sub" data-split>
            Hear directly from our clients about their experiences and the results we&apos;ve delivered. Explore Client Feedback
          </p>

          <div className="voices__avatars reveal-on-scroll delay-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={`voices__avatar ${i === idx ? 'is-active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Show review from ${t.name}`}
              >
                <img src={t.avatar} alt="" />
              </button>
            ))}
          </div>
          <div className="voices__nav reveal-on-scroll delay-3">
            <button className="arrow-circle" onClick={() => go(-1)} aria-label="Previous review"><ArrowLeft size={17} /></button>
            <button className="arrow-circle" onClick={() => go(1)} aria-label="Next review"><ArrowRight size={17} /></button>
            <span className="mono voices__count">{String(idx + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
          </div>
        </div>

        <div
          className="voices__stack reveal-on-scroll reveal-right delay-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((t, i) => {
            const pos = (i - idx + n) % n;
            return (
              <figure key={t.id} className={`voice-card voice-card--${pos}`} aria-hidden={pos !== 0}>
                <div className="voice-card__stars">
                  {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span className="mono">{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
