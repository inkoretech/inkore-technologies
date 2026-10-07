import React from 'react';
import { Box, Star, ArrowUpRight, Sparkle } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const tickerServices = [
    'Web Design', 'UI/UX Design', 'Product Design', 'Digital Marketing', 'Mobile Apps', 'Web Development'
  ];

  const testimonialsData = [
    {
      id: 1,
      quote: "I came to them with a vague idea, and they helped me refine it into a concrete plan. Throughout the process, they kept me informed and involved, ensuring I was happy with the direction.",
      name: "Alisa Olivia",
      role: "CTO at Ritovex",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote: "Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their attention to detail.",
      name: "Jordan Walk",
      role: "Software Engineer at Briks",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote: "Inkore Technologies delivered our Next.js SaaS platform 3 weeks ahead of schedule. Their team's code quality and architecture decisions saved us months of future tech debt.",
      name: "Marcus Vance",
      role: "VP of Product at NovaHealth",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="testimonials-section-ritovex" id="testimonials">
      {/* Top Full-Width Dark Service Marquee Ticker Bar matching Screenshot 2 */}
      <div className="dark-marquee-bar">
        <div className="marquee-content-track">
          {tickerServices.concat(tickerServices).map((service, idx) => (
            <React.Fragment key={idx}>
              <div className="marquee-service-pill">
                <span>{service}</span>
                <ArrowUpRight size={14} />
              </div>
              <span className="marquee-star">✳</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Testimonials Section */}
      <div className="container section-padding">
        <div className="text-center max-w-700 reveal-on-scroll">
          <div className="badge-pill">
            <Box size={14} />
            <span>Testimonial</span>
          </div>
          <h2 className="section-title">What Our Clients are Saying</h2>
          <p className="section-subtitle">
            Hear directly from our clients about their experiences and the results we've delivered. Explore Client Feedback
          </p>
        </div>

        {/* Testimonial Cards Row matching Screenshot 2 */}
        <div className="testimonial-cards-grid-ritovex">
          {testimonialsData.map((item, idx) => (
            <div key={item.id} className={`testimonial-card-ritovex reveal-on-scroll delay-${idx + 1}`}>
              {/* 5 Stars */}
              <div className="ritovex-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#111827" color="#111827" />
                ))}
              </div>

              {/* Quote text */}
              <p className="ritovex-quote-text">{item.quote}</p>

              <div className="ritovex-card-divider"></div>

              {/* Author footer */}
              <div className="ritovex-author-box">
                <img src={item.avatar} alt={item.name} className="ritovex-author-avatar" />
                <div className="ritovex-author-info">
                  <h4 className="ritovex-author-name">{item.name}</h4>
                  <p className="ritovex-author-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
