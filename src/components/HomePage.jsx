import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import Portfolio from './Portfolio';
import Process from './Process';
import WhyUs from './WhyUs';
import LetsTalk from './LetsTalk';
import Articles from './Articles';

export default function HomePage({ onOpenContact, onSelectService }) {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero 
        onOpenContact={onOpenContact} 
      />

      {/* 2. Partner Ticker & About Us Section */}
      <AboutUs onOpenContact={onOpenContact} />

      {/* 3. Dark Services Section */}
      <Services onSelectService={onSelectService} />

      {/* 4. Featured Portfolio / Case Studies */}
      <Portfolio />

      {/* 5. 3-Step Agile Process */}
      <Process onOpenContact={onOpenContact} />

      {/* 6. Why Inkore Section */}
      <WhyUs onOpenContact={onOpenContact} />

      {/* 7. Let's Start Talk Contact Section */}
      <LetsTalk />

      {/* 8. Blog & Insights Section */}
      <Articles />
    </>
  );
}
