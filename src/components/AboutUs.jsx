import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderCheck, Briefcase, Trophy, Users, PhoneCall, ArrowUpRight } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import './AboutUs.css';

const partnerLogos = [
  'MOBILE APP', 'SEO', 'BRANDING', 'MARKETING', 'CUSTOM SOFTWARE', 'UI/UX',
];

const stats = [
  { icon: FolderCheck, end: 150, suffix: '+', desc: 'Custom Digital Solutions Delivered' },
  { icon: Briefcase, end: 12, suffix: '+', desc: 'Years of Strategic IT Engineering' },
  { icon: Trophy, end: 45, suffix: '+', desc: 'Enterprise Cloud Platforms' },
  { icon: Users, end: 99, suffix: '%+', desc: 'Client Retention & Partnership' },
];

export default function AboutUs({ onOpenContact }) {
  const navigate = useNavigate();

  return (
    <section className="about" id="about">
      {/* Partner logo marquee */}
      <div className="marquee">
        <span className="marquee__label mono">Technology</span>
        <div className="marquee__viewport" aria-hidden="true">
          <div className="marquee__track-wrap" data-marquee><div className="marquee__track">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
              <span key={i} className="marquee__item">
                {logo}
                <span className="marquee__star">✦</span>
              </span>
            ))}
          </div></div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="about__head">
          <span className="eyebrow reveal-on-scroll">About Inkore</span>
          <h2 className="display about__title">
            <span className="line-mask"><span>We build technology</span></span>
            <span className="line-mask"><span className="serif-accent">that works for your business.</span></span>
          </h2>
          <p className="about__lead" data-split>
            At Inkore, we believe software should do more than just work — it should solve real operational problems, improve efficiency, and create scalable digital experiences. We work with ambitious startups and global enterprises to design, engineer, and deploy custom software tailored to their exact requirements.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__visual reveal-on-scroll reveal-clip">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Inkore Software Engineers Collaborating"
              data-parallax="-0.06"
            />
            <div className="about__badge">
              <span className="about__badge-icon"><Trophy size={18} /></span>
              <div>
                <strong>Enterprise Proven</strong>
                <span className="mono">Over 150+ Digital Systems</span>
              </div>
            </div>
          </div>

          <div className="about__right">
            <div className="about__stats">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.desc} className={`about-stat reveal-on-scroll delay-${i + 1}`}>
                    <span className="about-stat__icon"><Icon size={18} /></span>
                    <strong className="about-stat__val"><AnimatedCounter end={s.end} suffix={s.suffix} /></strong>
                    <span className="about-stat__desc mono">{s.desc}</span>
                  </div>
                );
              })}
            </div>

            <div className="about__actions reveal-on-scroll delay-3">
              <button className="btn btn-ink" onClick={() => navigate('/about')}>
                Learn More About Us <ArrowUpRight size={16} />
              </button>
              <button className="about__phone" onClick={onOpenContact}>
                <span className="about__phone-icon"><PhoneCall size={16} /></span>
                <span>
                  <span className="mono">Get a Free Consultation</span>
                  <strong>+91 70126 66848</strong>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
