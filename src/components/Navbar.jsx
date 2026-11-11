import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header-ritovex">
      <div className="container navbar-container-ritovex">
        {/* Brand Logo with exact Inkore image asset */}
        <Link to="/" className="navbar-logo-ritovex" onClick={() => setMobileMenuOpen(false)}>
          <img 
            src="./assets/logo-transparent.png" 
            alt="Inkore Technologies" 
            className="navbar-brand-logo-img"
          />
        </Link>

        {/* Center Nav Links */}
        <nav className="navbar-links-ritovex">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => `nav-link-ritovex ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link-ritovex ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>

          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-link-ritovex ${isActive ? 'active' : ''}`}
          >
            Services
          </NavLink>

          <NavLink 
            to="/work" 
            className={({ isActive }) => `nav-link-ritovex ${isActive ? 'active' : ''}`}
          >
            Work
          </NavLink>

          <NavLink 
            to="/estimate" 
            className={({ isActive }) => `nav-link-ritovex ${isActive ? 'active' : ''}`}
          >
            Estimator
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link-ritovex ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Right Info & Phone */}
        <div className="navbar-right-ritovex">
          <div className="phone-contact-box" onClick={onOpenContact}>
            <div className="phone-icon-box">
              <PhoneCall size={18} />
            </div>
            <div className="phone-text-group">
              <span className="phone-label">Call Any Time</span>
              <span className="phone-number">+1 (800) 465-6738</span>
            </div>
          </div>

          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-ritovex">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/work" onClick={() => setMobileMenuOpen(false)}>Work / Portfolio</Link>
          <Link to="/estimate" onClick={() => setMobileMenuOpen(false)}>Cost Estimator</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <button className="btn-ritovex-dark" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
