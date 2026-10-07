import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Calendar,
  X,
  ShieldCheck
} from 'lucide-react';
import './ContactSection.css';

export default function ContactSection({ initialService, initialMessage, isModal = false, onCloseModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Web Development',
    budget: '$10k - $25k',
    message: initialMessage || ''
  });

  useEffect(() => {
    if (initialService) setFormData(prev => ({ ...prev, service: initialService }));
    if (initialMessage) setFormData(prev => ({ ...prev, message: initialMessage }));
  }, [initialService, initialMessage]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const formElement = (
    <div className="contact-form-card glass-card">
      {submitted ? (
        <div className="contact-success-state animate-fade-in">
          <div className="success-icon-box">
            <CheckCircle size={48} />
          </div>
          <h3>Consultation Request Received!</h3>
          <p>
            Thank you <strong>{formData.name}</strong>. A Senior Solution Architect from Inkore Technologies has received your project details and will email you back within <strong>2 business hours</strong>.
          </p>

          <div className="success-ref-box">
            <span>Reference ID: <strong>#INK-{Math.floor(100000 + Math.random() * 900000)}</strong></span>
          </div>

          <div className="success-actions">
            <button className="btn-secondary width-100" onClick={() => {
              setSubmitted(false);
              if (onCloseModal) onCloseModal();
            }}>
              <span>Close Window</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <h3 className="form-title">Let's Build Something Great</h3>
          <p className="form-subtitle">Fill out the form below to receive a non-binding proposal & architecture estimate within 24 hours.</p>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Work Email *</label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Company / Organization</label>
              <input
                type="text"
                placeholder="e.g. Acme Health Corp"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Primary Service Needed</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="form-input form-select"
              >
                <option value="Web Development">Web Application Development</option>
                <option value="Mobile App Engineering">Mobile App Engineering (iOS/Android)</option>
                <option value="Cloud & DevOps">Cloud & DevOps Infrastructure</option>
                <option value="AI & Machine Learning">AI & Machine Learning Solutions</option>
                <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                <option value="UI/UX Product Design">UI/UX Product Design</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Project Details & Requirements *</label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your project goals, desired launch timeline, and key features..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input form-textarea"
            />
          </div>

          <button type="submit" className="btn-primary width-100 form-submit-btn" disabled={submitting}>
            {submitting ? (
              <span>Sending Proposal Request...</span>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <Send size={18} />
              </>
            )}
          </button>

          <div className="form-privacy-note">
            <ShieldCheck size={14} />
            <span>Strict NDA Guaranteed. We never share your project info or email.</span>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="modal-overlay" onClick={onCloseModal}>
        <div className="modal-content contact-modal-box animate-scale-up" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onCloseModal}>
            <X size={20} />
          </button>
          {formElement}
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Contact Info Column */}
          <div className="contact-info-col">
            <div className="pill-badge">
              <Sparkles size={14} />
              <span>Get in Touch</span>
            </div>

            <h2 className="contact-heading">
              Ready to Accelerate Your <span className="gradient-text">Digital Products?</span>
            </h2>

            <p className="contact-lead">
              Whether you need to build a new web app, launch a mobile platform, or scale cloud infrastructure, Inkore Technologies is ready to engineer your vision.
            </p>

            {/* Live Support Indicator */}
            <div className="live-status-pill">
              <span className="live-dot animate-pulse"></span>
              <span>3 Senior Architects Available for Discovery Today</span>
            </div>

            {/* Contact Details List */}
            <div className="contact-methods-list">
              <div className="contact-method-card">
                <div className="method-icon"><Mail size={22} /></div>
                <div>
                  <span className="method-label">Direct Email</span>
                  <a href="mailto:hello@inkoretech.com" className="method-val">hello@inkoretech.com</a>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="method-icon"><Phone size={22} /></div>
                <div>
                  <span className="method-label">Direct Phone / WhatsApp</span>
                  <a href="tel:+18004656738" className="method-val">+1 (800) 465-6738</a>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="method-icon"><MapPin size={22} /></div>
                <div>
                  <span className="method-label">Headquarters</span>
                  <span className="method-val">Innovation Tech Park, Suite 700, CA</span>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="contact-guarantees-box">
              <div className="guarantee-item">
                <Clock size={16} />
                <span>Response within 2 Hours</span>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={16} />
                <span>NDA Signed First</span>
              </div>
              <div className="guarantee-item">
                <Calendar size={16} />
                <span>Free Architectural Roadmap</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="contact-form-col">
            {formElement}
          </div>
        </div>
      </div>
    </section>
  );
}
