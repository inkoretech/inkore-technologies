import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Mail, Phone, Globe, Code2, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenContact }) {
  const techPills = [
    'Web', 'Mobile', 'Cloud', 'Enterprise', 'Automation', 'AI'
  ];

  return (
    <footer className="footer-section-ritovex-dark">
      <div className="container">
        {/* Main 4 Column Grid */}
        <div className="footer-brand-grid">
          {/* Brand & Tagline Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo">
              <Box size={28} className="logo-cube-icon" />
              <span className="footer-logo-text">INKORE</span>
            </Link>

            <p className="footer-brand-tagline">
              Build what matters.
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

          {/* Column 1: Company */}
          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Company</h4>
            <ul className="footer-col-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/services">Technologies</Link></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>Careers</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Services</h4>
            <ul className="footer-col-links">
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Development</Link></li>
              <li><Link to="/services">Custom Software</Link></li>
              <li><Link to="/services">Cloud & DevOps</Link></li>
              <li><Link to="/services">AI & Automation</Link></li>
              <li><Link to="/services">API Development</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Contact</h4>
            <ul className="footer-contact-items">
              <li>
                <Mail size={16} />
                <a href="mailto:hello@inkoretech.com">Email Us</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+18004656738">Phone Support</a>
              </li>
              <li>
                <Globe size={16} />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <Code2 size={16} />
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
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

