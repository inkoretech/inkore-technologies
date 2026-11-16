import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Code2, ArrowUpRight } from 'lucide-react';
import { servicesList } from './Services';
import './Footer.css';

const techPills = [
  'Web Architecture', 'Mobile Apps', 'Cloud Infrastructure', 'Enterprise Systems', 'DevOps Automation', 'AI Integration',
];

export default function Footer({ onOpenContact }) {
  return (
    <footer className="foot" data-nav="dark">
      <div className="foot__glow" aria-hidden="true" />
      <div className="container foot__inner">
        {/* Brand statement */}
        <div className="foot__cta">
          <div>
            <Link to="/" className="foot__logo">
              <img src="./assets/logo-white.png" alt="Inkore Technologies" />
            </Link>
            <button className="foot__headline reveal-on-scroll" onClick={onOpenContact} aria-label="Contact Inkore">
              <span className="display">Engineering Digital</span>
              <span className="display foot__headline-blue">
                Excellence.
                <span className="foot__headline-arrow"><ArrowUpRight size={28} /></span>
              </span>
            </button>
          </div>
          <div className="foot__pills">
            {techPills.map((t) => <span key={t} className="chip on-dark">{t}</span>)}
          </div>
        </div>

        <div className="foot__grid">
          <div>
            <h4 className="mono">Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Work / Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mono">Capabilities</h4>
            <ul>
              {servicesList.map((s) => (
                <li key={s.title}><Link to="/services">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mono">Direct Contact</h4>
            <ul className="foot__contact">
              <li><Mail size={15} /><a href="mailto:hello@inkoretech.com">hello@inkoretech.com</a></li>
              <li><Phone size={15} /><a href="tel:+917012666848">+91 70126 66848</a></li>
              <li><MapPin size={15} /><span>Kochi, Kerala, India</span></li>
              <li><Globe size={15} /><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn Corporate</a></li>
              <li><Code2 size={15} /><a href="https://github.com" target="_blank" rel="noreferrer">GitHub Open Source</a></li>
            </ul>
          </div>
        </div>

        <div className="foot__wordmark" aria-hidden="true">inkore</div>

        <div className="foot__bar mono">
          <span>© 2026 Inkore Technologies. All rights reserved.</span>
          <a href="mailto:hello@inkoretech.com">hello@inkoretech.com</a>
        </div>
      </div>
    </footer>
  );
}
