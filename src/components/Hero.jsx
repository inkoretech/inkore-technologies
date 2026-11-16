import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, Code2, Cloud, ShieldCheck, Cpu } from 'lucide-react';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const TITLE = 'Technology';
const SERIF = 'that moves your business forward.';

export default function Hero({ onOpenContact }) {
  const navigate = useNavigate();
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 900px) and (pointer: fine)',
        },
        ({ conditions }) => {
          if (!conditions.motion) return undefined;

          /* 1. Intro timeline */
          const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
          tl.from('.hero__meta', { y: -20, autoAlpha: 0, duration: 0.8 })
            .from('.hero__char', {
              yPercent: 120,
              rotateX: -80,
              autoAlpha: 0,
              duration: 1.2,
              stagger: 0.045,
            }, '-=0.4')
            .from('.hero__word', {
              y: 40,
              autoAlpha: 0,
              filter: 'blur(10px)',
              duration: 1,
              stagger: 0.06,
            }, '-=0.9')
            .from('.hero__orb', { scale: 0, autoAlpha: 0, duration: 1.6, ease: 'elastic.out(1, 0.6)' }, '-=1.2')
            .from('.hero__ring', { scale: 0.4, autoAlpha: 0, rotate: -90, duration: 1.4, stagger: 0.12 }, '<')
            .from('.hero__desc > *', { y: 30, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, '-=1.1')
            .from('.hero__actions > *', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, '-=0.7')
            .from('.hero-pill', { x: 40, autoAlpha: 0, duration: 0.9, stagger: 0.12 }, '-=0.8');

          /* 2. Ambient motion */
          gsap.to('.hero__ring--1', { rotate: 360, duration: 40, ease: 'none', repeat: -1 });
          gsap.to('.hero__ring--2', { rotate: -360, duration: 60, ease: 'none', repeat: -1 });
          gsap.to('.hero__satellite', { rotate: 360, duration: 14, ease: 'none', repeat: -1 });
          gsap.to('.hero__orb-core', { scale: 1.06, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 });

          /* 3. Scroll-scrubbed exit */
          gsap.timeline({
            scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 0.6 },
          })
            .to('.hero__title-top', { yPercent: -30, letterSpacing: '0.02em', ease: 'none' }, 0)
            .to('.hero__title-serif', { yPercent: -60, autoAlpha: 0.2, ease: 'none' }, 0)
            .to('.hero__visual', { yPercent: 35, scale: 1.25, ease: 'none' }, 0)
            .to('.hero__blob--a', { yPercent: 50, ease: 'none' }, 0)
            .to('.hero__blob--b', { yPercent: -40, ease: 'none' }, 0);

          /* 4. Cursor-reactive orb, blobs and magnetic buttons (desktop only) */
          if (!conditions.desktop) return undefined;
          const el = root.current;
          const orbX = gsap.quickTo('.hero__visual-inner', 'x', { duration: 0.9, ease: 'power3' });
          const orbY = gsap.quickTo('.hero__visual-inner', 'y', { duration: 0.9, ease: 'power3' });
          const blobX = gsap.quickTo('.hero__blob--a', 'x', { duration: 1.6, ease: 'power3' });
          const blobY = gsap.quickTo('.hero__blob--a', 'y', { duration: 1.6, ease: 'power3' });

          const onMove = (e) => {
            const r = el.getBoundingClientRect();
            const nx = (e.clientX - r.left) / r.width - 0.5;
            const ny = (e.clientY - r.top) / r.height - 0.5;
            orbX(nx * 60); orbY(ny * 60);
            blobX(nx * -120); blobY(ny * -80);
          };
          el.addEventListener('pointermove', onMove);

          const magnets = gsap.utils.toArray('.hero__actions .btn');
          const handlers = magnets.map((btn) => {
            const mx = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
            const my = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
            const move = (e) => {
              const b = btn.getBoundingClientRect();
              mx((e.clientX - b.left - b.width / 2) * 0.3);
              my((e.clientY - b.top - b.height / 2) * 0.4);
            };
            const leave = () => { mx(0); my(0); };
            btn.addEventListener('pointermove', move);
            btn.addEventListener('pointerleave', leave);
            return { btn, move, leave };
          });

          return () => {
            el.removeEventListener('pointermove', onMove);
            handlers.forEach(({ btn, move, leave }) => {
              btn.removeEventListener('pointermove', move);
              btn.removeEventListener('pointerleave', leave);
            });
          };
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero" ref={root}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__blob hero__blob--c" />
        <div className="dot-grid hero__dots" />
      </div>

      {/* Brand orb (the blue dot from the Inkore logo) */}
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__visual-inner">
          <span className="hero__ring hero__ring--1"><i /></span>
          <span className="hero__ring hero__ring--2"><i /><i /></span>
          <span className="hero__orb">
            <span className="hero__orb-core" />
            <span className="hero__satellite"><i /></span>
          </span>
        </div>
      </div>

      <div className="container hero__inner">
        <div className="hero__meta">
          <span className="eyebrow">Engineering Digital Excellence</span>
          <ul className="hero__meta-list mono">
            <li><Code2 size={13} /> Web &amp; Mobile Systems</li>
            <li><Cloud size={13} /> Cloud &amp; DevOps Architecture</li>
            <li><Cpu size={13} /> AI Integration &amp; Automation</li>
          </ul>
        </div>

        <h1 className="hero__title" aria-label={`${TITLE} ${SERIF}`}>
          <span className="display hero__title-top" aria-hidden="true">
            {TITLE.split('').map((c, i) => (
              <span key={i} className="hero__char">{c}</span>
            ))}
          </span>
          <span className="serif-accent hero__title-serif" aria-hidden="true">
            {SERIF.split(' ').map((w, i) => (
              <span key={i} className="hero__word">{w}&nbsp;</span>
            ))}
          </span>
        </h1>

        <div className="hero__bottom">
          <div>
            <div className="hero__desc">
              <p className="hero__lead">
                We are a specialized software engineering and technology company building scalable web applications, native &amp; cross-platform mobile apps, and robust cloud architectures.
              </p>
              <p className="hero__lead-sub">
                From early-stage concept to global production deployment, we engineer simple, resilient digital products that empower enterprises and redefine user engagement.
              </p>
            </div>

            <div className="hero__actions">
              <button className="btn btn-primary" onClick={onOpenContact}>
                Start a Project <ArrowUpRight size={16} />
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/services')}>
                Explore Our Services
              </button>
            </div>
          </div>

          <div className="hero__pills">
            <div className="hero-pill">
              <span className="hero-pill__icon"><Sparkles size={16} /></span>
              <div>
                <strong>End-to-End</strong>
                <span className="mono">Concept to Production</span>
              </div>
            </div>
            <div className="hero-pill">
              <span className="hero-pill__icon hero-pill__icon--ink"><ShieldCheck size={16} /></span>
              <div>
                <strong>99.9% Reliable</strong>
                <span className="mono">Enterprise Scalable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
