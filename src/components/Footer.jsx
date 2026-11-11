import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Code2, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenContact }) {
  const techPills = [
    'Web Architecture', 'Mobile Apps', 'Cloud Infrastructure', 'Enterprise Systems', 'DevOps Automation', 'AI Integration'
  ];

  return (
    <footer className="footer-section-ritovex-dark">
      <div className="container">
        {/* Main 4 Column Grid */}
        <div className="footer-brand-grid">
          {/* Brand & Tagline Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo">
              <img 
                src="./assets/logo-white.png" 
                alt="Inkore Technologies" 
                className="footer-brand-logo-img"
              />
            </Link>

            <p className="footer-brand-tagline">
              Engineering Digital Excellence.
            </p>

            <div className="footer-tech-chips-bar">
              {techPills.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="footer-tech-chip">{tech}</span>
                  {idx < techPills.length - 1 && <span className="footer-chip-dot">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Column 1: Company Navigation */}
          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Navigation</h4>
            <ul className="footer-col-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Work / Portfolio</Link></li>
              <li><Link to="/estimate">Cost Estimator</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Capabilities</h4>
            <ul className="footer-col-links">
              <li><Link to="/services">Web Application Development</Link></li>
              <li><Link to="/services">Mobile App Engineering</Link></li>
              <li><Link to="/services">Custom Software Architecture</Link></li>
              <li><Link to="/services">Cloud & DevOps Infrastructure</Link></li>
              <li><Link to="/services">AI Integration & Automation</Link></li>
              <li><Link to="/services">High-Throughput APIs</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Direct Contact</h4>
            <ul className="footer-contact-items">
              <li>
                <Mail size={16} />
                <a href="mailto:hello@inkoretech.com">hello@inkoretech.com</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+18004656738">+1 (800) 465-6738</a>
              </li>
              <li>
                <Globe size={16} />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn Corporate</a>
              </li>
              <li>
                <Code2 size={16} />
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub Open Source</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub Bar & Copyright */}
        <div className="footer-sub-bar">
          <p className="footer-copy-text">
            © 2026 Inkore Technologies. All rights reserved.
          </p>

          <div className="footer-social-inline">
            <a href="mailto:hello@inkoretech.com" className="footer-mail-link">hello@inkoretech.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
