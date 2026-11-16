import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowRight, PhoneCall } from 'lucide-react';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true, mobile: 'Home' },
  { to: '/about', label: 'About Us', mobile: 'About Us' },
  { to: '/services', label: 'Services', mobile: 'Services' },
  { to: '/work', label: 'Work', mobile: 'Work / Portfolio' },
  { to: '/contact', label: 'Contact', mobile: 'Contact' },
];

export default function Navbar({ onOpenContact }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) window.__lenis?.stop(); else window.__lenis?.start();
    return () => { document.body.style.overflow = ''; window.__lenis?.start(); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={close} aria-label="Inkore Technologies home">
          <img className="nav__logo nav__logo--dark" src="./logo-transparent.png" alt="Inkore Technologies" />
          <img className="nav__logo nav__logo--light" src="./logo-white.png" alt="" aria-hidden="true" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__right">
          <button className="nav__phone" onClick={onOpenContact}>
            <span className="nav__phone-icon"><PhoneCall size={16} /></span>
            <span className="nav__phone-text">
              <span className="mono">Call Any Time</span>
              <strong>+91 70126 66848</strong>
            </span>
          </button>
          <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`} data-lenis-prevent>
        <div className="container">
          {links.map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={close} className={({ isActive }) => `nav__drawer-link ${isActive ? 'is-active' : ''}`}>
              <span className="mono">0{i + 1}</span>
              {l.mobile}
              <ArrowUpRight size={20} />
            </NavLink>
          ))}
          <button className="btn btn-primary nav__drawer-cta" onClick={() => { close(); onOpenContact(); }}>
            Start a Project <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
