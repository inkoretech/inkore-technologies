import React, { useState } from 'react';
import { ArrowUpRight, Clock, Calendar, X } from 'lucide-react';
import './Articles.css';

const articles = [
  {
    id: 1,
    title: 'The Future of Web Development: Next.js 14 & Edge Computing',
    category: 'Web Engineering',
    date: 'March 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore how sub-second server actions, partial pre-rendering, and edge deployment are reshaping modern enterprise web application architectures.',
    content: 'Edge computing is revolutionizing how we deliver web apps to millions of concurrent users worldwide. By processing logic closer to the user, page load latency decreases by up to 70%.',
  },
  {
    id: 2,
    title: 'Building 60FPS Cross-Platform Mobile Apps with Flutter 3',
    category: 'Mobile Apps',
    date: 'March 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How Inkore engineered a high-throughput mobile wallet app achieving seamless 60fps rendering, offline sync, and biometric security.',
    content: 'Cross-platform mobile frameworks have reached complete parity with native Swift and Kotlin. Learn how compilation optimizations enable native performance from a single codebase.',
  },
  {
    id: 3,
    title: 'Scaling Enterprise Cloud Architectures & Kubernetes CI/CD',
    category: 'DevOps & AI',
    date: 'March 05, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A comprehensive guide to auto-scaling microservices on AWS/GCP while cutting monthly cloud infrastructure expenditure by 35%.',
    content: 'Modern enterprise systems require resilience and instant scalability. Discover our proven infrastructure-as-code patterns for zero-downtime rolling updates.',
  },
];

export default function Articles() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="blog" id="blog">
      <div className="container section-padding">
        <div className="section-head">
          <div>
            <span className="eyebrow reveal-on-scroll">Blog &amp; Insights</span>
            <h2 className="display">
              <span className="line-mask"><span>Explore Our Latest</span></span>
              <span className="line-mask"><span className="accent">Blog Posts</span></span>
            </h2>
          </div>
          <p data-split>
            Stay updated with expert engineering guides, architecture benchmarks, and tech trends written by the Inkore team.
          </p>
        </div>

        <div className="blog__grid">
          {articles.map((a, i) => (
            <div key={a.id} className="blog-cell" data-speed={i === 1 ? -100 : 60}>
            <button className={`blog-card reveal-on-scroll reveal-up delay-${i + 1}`} onClick={() => setSelected(a)}>
              <div className="blog-card__media">
                <img src={a.image} alt={a.title} loading="lazy" />
                <span className="blog-card__cat mono">{a.category}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta mono">
                  <span><Calendar size={12} /> {a.date}</span>
                  <span><Clock size={12} /> {a.readTime}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <div className="blog-card__foot">
                  <span className="mono">Read Full Article</span>
                  <span className="arrow-circle"><ArrowUpRight size={16} /></span>
                </div>
              </div>
            </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" data-lenis-prevent onClick={() => setSelected(null)}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelected(null)} aria-label="Close"><X size={18} /></button>
            <img className="blog-modal__img" src={selected.image} alt={selected.title} />
            <span className="eyebrow">{selected.category}</span>
            <h2 className="modal-title">{selected.title}</h2>
            <p className="modal-label">Published on {selected.date} • {selected.readTime}</p>
            <p className="modal-description">{selected.content}</p>
            <button className="btn btn-ink" onClick={() => setSelected(null)}>Close Article</button>
          </div>
        </div>
      )}
    </section>
  );
}
