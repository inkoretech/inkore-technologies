import React from 'react';
import { MapPin, PhoneCall, Mail } from 'lucide-react';
import LetsTalk from './LetsTalk';
import PageHero from './PageHero';
import './ContactUsPage.css';

export default function ContactUsPage({ onOpenContact }) {
  return (
    <div className="contact-page-wrapper">
      {/* 1. Contact Us Hero Header matching Screenshot 1 */}
      <PageHero
        title="Contact Us"
        subtitle="Whether you need a custom web application, mobile app engineering, or cloud architecture consultation, our team is ready to help transform your vision into reality."
      />

      {/* 2. Let's Start Talk Form Component */}
      <LetsTalk />

      {/* 3. 3 Contact Info Cards Row matching Screenshot 2 */}
      <section className="contact-cards-section">
        <div className="container section-padding">
          <div className="contact-3cards-grid">
            {/* Card 1: Address */}
            <div className="ritovex-info-card card-hover-3d reveal-on-scroll delay-1">
              <div className="info-card-icon-box">
                <MapPin size={22} />
              </div>
              <div className="info-card-divider"></div>
              <h3 className="info-card-title">Our Address</h3>
              <p className="info-card-text">
                Kochi, Kerala, <br />
                India
              </p>
            </div>

            {/* Card 2: Phone */}
            <div className="ritovex-info-card card-hover-3d reveal-on-scroll delay-2">
              <div className="info-card-icon-box">
                <PhoneCall size={22} />
              </div>
              <div className="info-card-divider"></div>
              <h3 className="info-card-title">Phone</h3>
              <p className="info-card-text">
                +91 70126 66848
              </p>
            </div>

            {/* Card 3: Email */}
            <div className="ritovex-info-card card-hover-3d reveal-on-scroll delay-3">
              <div className="info-card-icon-box">
                <Mail size={22} />
              </div>
              <div className="info-card-divider"></div>
              <h3 className="info-card-title">Email</h3>
              <p className="info-card-text">
                hello@inkoretech.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
