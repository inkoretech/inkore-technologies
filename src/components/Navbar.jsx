import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Box, PhoneCall, Menu, X } from 'lucide-react';
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
        {/* Logo */}
        <Link to="/" className="navbar-logo-ritovex" onClick={() => setMobileMenuOpen(false)}>
          <Box size={24} className="logo-cube-icon" />
          <span className="logo-text-ritovex">Inkore</span>
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

          <a 
            href="#blog" 
            className="nav-link-ritovex"
            onClick={(e) => { e.preventDefault(); handleSectionClick('blog'); }}
          >
            Blog
          </a>

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
          <a href="#blog" onClick={() => handleSectionClick('blog')}>Blog</a>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <button className="btn-ritovex-dark" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
