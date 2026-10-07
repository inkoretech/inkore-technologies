import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Check } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section-ritovex-dark">
      <div className="container">
        {/* Top Newsletter Bar matching Screenshot 4 */}
        <div className="footer-top-newsletter-row">
          <h3 className="newsletter-ritovex-title">
            Get the latest tips for enterprise software growth and tech strategy straight to your inbox!
          </h3>

          <form className="newsletter-inline-form" onSubmit={handleSubscribe}>
            {subscribed ? (
              <div className="newsletter-success-tag">
                <Check size={16} /> Subscribed!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-underline-input"
                />
                <button type="submit" className="newsletter-arrow-btn">
                  <span>Subscribe Now</span>
                  <ArrowUpRight size={18} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* 4 Navigation Columns matching Screenshot 4 */}
        <div className="footer-4cols-grid">
          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Site Map</h4>
            <ul className="footer-col-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#articles">Blogs & Articles</a></li>
            </ul>
          </div>

          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Support</h4>
            <ul className="footer-col-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>Contact Us</a></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Team Members</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>Schedule Call</a></li>
            </ul>
          </div>

          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Utilities</h4>
            <ul className="footer-col-links">
              <li><a href="#">Licensing</a></li>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Instructions</a></li>
            </ul>
          </div>

          <div className="footer-col-ritovex">
            <h4 className="footer-col-head">Contact Us</h4>
            <ul className="footer-contact-items">
              <li><Phone size={15} /> <span>+1 (800) 465-6738</span></li>
              <li><Mail size={15} /> <span>hello@inkoretech.com</span></li>
              <li><MapPin size={15} /> <span>Innovation Tech Park, CA 92101</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Social Row matching Screenshot 4 */}
        <div className="footer-sub-bar">
          <p className="footer-copy-text">
            Designed by <strong>Ritovex</strong> • Powered by <strong>Inkore Technologies</strong>
          </p>

          <div className="footer-social-inline">
            <span>Follow Us</span>
            <div className="social-icons-group">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="X">x</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        {/* Huge Metallic Striped Typography Banner matching Screenshot 4 */}
        <div className="huge-brand-banner">
          <span className="metallic-striped-text">INKORE</span>
        </div>
      </div>
    </footer>
  );
}
