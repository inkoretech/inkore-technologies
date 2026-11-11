import React, { useState } from 'react';
import { Box, Send, PhoneCall, Mail, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import './LetsTalk.css';

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="lets-talk-section-ritovex" id="contact">
      <div className="container section-padding">
        <div className="lets-talk-grid-ritovex">
          {/* Left Text & Contact Info */}
          <div className="lets-talk-info reveal-on-scroll reveal-left">
            <div className="badge-pill">
              <Box size={14} />
              <span>Let's Build</span>
            </div>

            <h2 className="lets-talk-heading">
              Have an idea? <br />
              Let's build it.
            </h2>

            <p className="lets-talk-subtitle">
              Whether you're starting a new product, improving an existing system, or looking to automate your business, Inkore can help turn your requirements into technology that delivers.
            </p>

            <div className="cta-action-callout">
              <span>Let's talk about your project.</span>
            </div>

            <div className="lets-talk-contact-list">
              <div className="talk-contact-card reveal-on-scroll delay-1">
                <div className="talk-icon-box"><Mail size={20} /></div>
                <div>
                  <span className="talk-label">Email Us</span>
                  <a href="mailto:hello@inkoretech.com" className="talk-val">hello@inkoretech.com</a>
                </div>
              </div>

              <div className="talk-contact-card reveal-on-scroll delay-2">
                <div className="talk-icon-box"><PhoneCall size={20} /></div>
                <div>
                  <span className="talk-label">Call Any Time</span>
                  <a href="tel:+18004656738" className="talk-val">+1 (800) 465-6738</a>
                </div>
              </div>

              <div className="talk-contact-card reveal-on-scroll delay-3">
                <div className="talk-icon-box"><MapPin size={20} /></div>
                <div>
                  <span className="talk-label">Headquarters</span>
                  <span className="talk-val">Innovation Tech Park, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lets-talk-form-card reveal-on-scroll reveal-right delay-2">
            {submitted ? (
              <div className="talk-success-box">
                <div className="talk-success-icon"><CheckCircle size={44} /></div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you <strong>{formData.name}</strong>. Our engineering team will review your inquiry and get back to you within 2 business hours.</p>
                <button className="btn-ritovex-dark" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="talk-form">
                <h3 className="talk-form-title">Send Us a Message</h3>

                <div className="talk-form-group">
                  <label className="talk-form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="talk-form-input"
                  />
                </div>

                <div className="talk-form-row">
                  <div className="talk-form-group">
                    <label className="talk-form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="talk-form-input"
                    />
                  </div>

                  <div className="talk-form-group">
                    <label className="talk-form-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="talk-form-input"
                    />
                  </div>
                </div>

                <div className="talk-form-group">
                  <label className="talk-form-label">Select Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="talk-form-input talk-form-select"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Backend & API Development">Backend & API Development</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Automation & AI">Automation & AI</option>
                  </select>
                </div>

                <div className="talk-form-group">
                  <label className="talk-form-label">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project goals and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="talk-form-input talk-form-textarea"
                  />
                </div>

                <button type="submit" className="btn-ritovex-dark talk-submit-btn" disabled={submitting}>
                  {submitting ? 'Connecting...' : 'Start a Conversation'}
                  <Send size={16} />
                </button>

                <div className="talk-privacy-note">
                  <ShieldCheck size={14} />
                  <span>Strict NDA Guaranteed. We respect your privacy.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
