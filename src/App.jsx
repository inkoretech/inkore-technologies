import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import WorkPage from './components/WorkPage';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useParallax } from './hooks/useParallax';
import { useSmoothScroll, smoothScrollTo } from './hooks/useSmoothScroll';
import { useGsapScroll } from './hooks/useGsapScroll';
import { SELECT_SERVICE_EVENT } from './components/LetsTalk';

function AppContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState('');

  // Enable continuous scroll reveal loading animations across all sections
  useSmoothScroll();
  useScrollReveal();
  useParallax();
  useGsapScroll();

  const handleSelectServiceForQuote = (serviceName) => {
    setSelectedServiceForForm(serviceName);
    setIsContactModalOpen(true);
    // Preselect the service in the contact form and bring it into view
    const announce = () => window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: serviceName }));
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      announce();
      smoothScrollTo(contactElem);
    } else {
      window.location.hash = '#/contact';
      setTimeout(announce, 150);
    }
  };

  const handleOpenGeneralContact = () => {
    setSelectedServiceForForm('');
    // Smooth scroll to contact form if present or navigate to /contact
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      smoothScrollTo(contactElem);
    } else {
      window.location.hash = '#/contact';
    }
  };

  return (
    <div className="app-main-wrapper">
      <ScrollToTop />
      {/* Scroll Progress Reading Indicator Bar */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar onOpenContact={handleOpenGeneralContact} />

      <main>
        <Routes>
          {/* Main Home Page Route */}
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenContact={handleOpenGeneralContact} 
                onSelectService={handleSelectServiceForQuote} 
              />
            } 
          />

          {/* Standalone About Us Page Route */}
          <Route 
            path="/about" 
            element={
              <AboutUsPage 
                onOpenContact={handleOpenGeneralContact} 
                onSelectService={handleSelectServiceForQuote} 
              />
            } 
          />

          {/* Dedicated Services Page Route */}
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onOpenContact={handleOpenGeneralContact} 
                onSelectService={handleSelectServiceForQuote} 
              />
            } 
          />

          {/* Dedicated Work / Portfolio Page Route */}
          <Route 
            path="/work" 
            element={
              <WorkPage 
                onOpenContact={handleOpenGeneralContact} 
              />
            } 
          />

          {/* Dedicated Contact Us Page Route */}
          <Route 
            path="/contact" 
            element={
              <ContactUsPage 
                onOpenContact={handleOpenGeneralContact} 
              />
            } 
          />

          {/* Catch-all Fallback Route */}
          <Route 
            path="*" 
            element={
              <HomePage 
                onOpenContact={handleOpenGeneralContact} 
                onSelectService={handleSelectServiceForQuote} 
              />
            } 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenGeneralContact} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
