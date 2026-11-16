import React, { useEffect, useState } from 'react';
import { Send, PhoneCall, Mail, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { servicesList } from './Services';
import './LetsTalk.css';

export const SERVICE_OPTIONS = servicesList.map((s) => s.title);

export const SELECT_SERVICE_EVENT = 'inkore:select-service';

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Let a service's "Request Quote" button preselect the service here
  useEffect(() => {
    const onSelect = (e) => {
      if (e.detail && SERVICE_OPTIONS.includes(e.detail)) {
        setFormData((f) => ({ ...f, service: e.detail }));
        setSubmitted(false);
      }
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  const update = (k) => (e) => setFormData({ ...formData, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="talk" id="contact">
      <div className="container section-padding">
        <div className="talk__panel reveal-on-scroll reveal-scale">
          <div className="dot-grid talk__dots" aria-hidden="true" />

          <div className="talk__info">
            <span className="eyebrow on-dark">Let&apos;s Build</span>
            <h2 className="display talk__title">
              Have an idea?
              <span className="serif-accent">Let&apos;s build it.</span>
            </h2>
            <p className="talk__lead" data-split>
              Whether you&apos;re starting a new product, improving an existing system, or looking to automate your business, Inkore can help turn your requirements into technology that delivers.
            </p>
            <p className="talk__callout mono">Let&apos;s talk about your project.</p>

            <ul className="talk__contacts">
              <li>
                <span className="talk__icon"><Mail size={16} /></span>
                <div><span className="mono">Email Us</span><a href="mailto:hello@inkoretech.com">hello@inkoretech.com</a></div>
              </li>
              <li>
                <span className="talk__icon"><PhoneCall size={16} /></span>
                <div><span className="mono">Call Any Time</span><a href="tel:+917012666848">+91 70126 66848</a></div>
              </li>
              <li>
                <span className="talk__icon"><MapPin size={16} /></span>
                <div><span className="mono">Headquarters</span><span>Kochi, Kerala, India</span></div>
              </li>
            </ul>
          </div>

          <div className="talk__form-wrap">
            {submitted ? (
              <div className="talk__success">
                <CheckCircle size={44} />
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you <strong>{formData.name}</strong>. Our engineering team will review your inquiry and get back to you within 2 business hours.
                </p>
                <button className="btn btn-ghost-light" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="talk__form" onSubmit={handleSubmit}>
                <h3 className="talk__form-title">Send Us a Message</h3>

                <label className="talk__field">
                  <span className="mono">Full Name *</span>
                  <input required placeholder="John Doe" value={formData.name} onChange={update('name')} />
                </label>

                <div className="talk__row">
                  <label className="talk__field">
                    <span className="mono">Email Address *</span>
                    <input required type="email" placeholder="john@company.com" value={formData.email} onChange={update('email')} />
                  </label>
                  <label className="talk__field">
                    <span className="mono">Phone Number</span>
                    <input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={update('phone')} />
                  </label>
                </div>

                <label className="talk__field">
                  <span className="mono">Select Service</span>
                  <select value={formData.service} onChange={update('service')}>
                    {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>

                <label className="talk__field">
                  <span className="mono">Project Details *</span>
                  <textarea required rows={4} placeholder="Tell us about your project goals and requirements..." value={formData.message} onChange={update('message')} />
                </label>

                <button type="submit" className="btn btn-primary talk__submit" disabled={submitting}>
                  {submitting ? 'Connecting...' : 'Start a Conversation'} <Send size={15} />
                </button>

                <p className="talk__privacy mono"><ShieldCheck size={13} /> Strict NDA Guaranteed. We respect your privacy.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
