import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import LetsTalk from './LetsTalk';
import Articles from './Articles';

export default function HomePage({ onOpenContact, onSelectService }) {
  return (
    <>
      {/* 1. Hero Section (Screenshot 5) */}
      <Hero 
        onOpenContact={onOpenContact} 
        onOpenDemo={onOpenContact} 
      />

      {/* 2. Partner Ticker & About Us Section */}
      <AboutUs onOpenContact={onOpenContact} />

      {/* 3. Dark Services Section (Screenshot 3) */}
      <Services onSelectService={onSelectService} />

      {/* 4. Let's Start Talk Contact Section */}
      <LetsTalk />

      {/* 5. Blog & Insights Section */}
      <Articles />
    </>
  );
}
