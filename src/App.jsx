import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import LetsTalk from './components/LetsTalk';
import { useScrollReveal } from './hooks/useScrollReveal';

function AppContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState('');

  // Enable continuous scroll reveal loading animations across all sections
  useScrollReveal();

  const handleSelectServiceForQuote = (serviceName) => {
    setSelectedServiceForForm(serviceName);
    setIsContactModalOpen(true);
  };

  const handleOpenGeneralContact = () => {
    setSelectedServiceForForm('');
    setIsContactModalOpen(true);
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

          {/* Standalone About Us Page Route matching Screenshots 1, 2, 3, 4 */}
          <Route 
            path="/about" 
            element={
              <AboutUsPage 
                onOpenContact={handleOpenGeneralContact} 
                onSelectService={handleSelectServiceForQuote} 
              />
            } 
          />

          {/* Dedicated Services Page Route matching Screenshots 1, 2, 3, 4 */}
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onOpenContact={handleOpenGeneralContact} 
                onSelectService={handleSelectServiceForQuote} 
              />
            } 
          />

          {/* Dedicated Contact Us Page Route matching Screenshots 1 & 2 */}
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

      {/* Footer matching Screenshot 4 */}
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
