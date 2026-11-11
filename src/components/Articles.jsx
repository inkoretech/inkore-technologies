import React, { useState } from 'react';
import { Box, ArrowUpRight, Clock, Calendar, X } from 'lucide-react';
import './Articles.css';

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'The Future of Web Development: Next.js 14 & Edge Computing',
      category: 'Web Engineering',
      date: 'March 18, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Explore how sub-second server actions, partial pre-rendering, and edge deployment are reshaping modern enterprise web application architectures.',
      content: 'Edge computing is revolutionizing how we deliver web apps to millions of concurrent users worldwide. By processing logic closer to the user, page load latency decreases by up to 70%.'
    },
    {
      id: 2,
      title: 'Building 60FPS Cross-Platform Mobile Apps with Flutter 3',
      category: 'Mobile Apps',
      date: 'March 12, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      excerpt: 'How Inkore engineered a high-throughput mobile wallet app achieving seamless 60fps rendering, offline sync, and biometric security.',
      content: 'Cross-platform mobile frameworks have reached complete parity with native Swift and Kotlin. Learn how compilation optimizations enable native performance from a single codebase.'
    },
    {
      id: 3,
      title: 'Scaling Enterprise Cloud Architectures & Kubernetes CI/CD',
      category: 'DevOps & AI',
      date: 'March 05, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      excerpt: 'A comprehensive guide to auto-scaling microservices on AWS/GCP while cutting monthly cloud infrastructure expenditure by 35%.',
      content: 'Modern enterprise systems require resilience and instant scalability. Discover our proven infrastructure-as-code patterns for zero-downtime rolling updates.'
    }
  ];

  return (
    <section className="articles-section-ritovex" id="blog">
      <div className="container section-padding">
        <div className="text-center max-w-700 reveal-on-scroll">
          <div className="badge-pill">
            <Box size={14} />
            <span>Blog & Insights</span>
          </div>
          <h2 className="section-title">Explore Our Latest Blog Posts</h2>
          <p className="section-subtitle">
            Stay updated with expert engineering guides, architecture benchmarks, and tech trends written by the Inkore team.
          </p>
        </div>

        {/* 3 Article Cards Grid */}
        <div className="articles-grid-ritovex">
          {articles.map((art, idx) => (
            <div 
              key={art.id} 
              className={`article-card-ritovex reveal-on-scroll delay-${idx + 1}`}
              onClick={() => setSelectedArticle(art)}
            >
              <div className="article-image-box">
                <img src={art.image} alt={art.title} className="article-img" />
                <span className="article-category-badge">{art.category}</span>
              </div>

              <div className="article-card-body">
                <div className="article-meta">
                  <span><Calendar size={13} /> {art.date}</span>
                  <span>•</span>
                  <span><Clock size={13} /> {art.readTime}</span>
                </div>

                <h3 className="article-title">{art.title}</h3>
                <p className="article-excerpt">{art.excerpt}</p>

                <div className="article-card-footer">
                  <span>Read Full Article</span>
                  <div className="article-arrow-box">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content glass-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedArticle(null)}>
              <X size={20} />
            </button>

            <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }} />
            <span className="badge-pill">{selectedArticle.category}</span>
            <h2 style={{ color: '#111827', margin: '12px 0 8px 0', fontSize: '1.5rem' }}>{selectedArticle.title}</h2>
            <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '16px' }}>Published on {selectedArticle.date} • {selectedArticle.readTime}</p>
            <p style={{ color: '#374151', lineHeight: '1.75', fontSize: '0.98rem', marginBottom: '24px' }}>{selectedArticle.content}</p>

            <button className="btn-ritovex-dark" style={{ width: '100%' }} onClick={() => setSelectedArticle(null)}>
              Close Article
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
