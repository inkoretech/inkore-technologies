import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Layers, 
  TrendingUp,
  Globe,
  Smartphone
} from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'Cloud & AI'];

  const projects = [
    {
      id: 'nova-health',
      category: 'Web Apps',
      title: 'NovaHealth Telemedicine SaaS',
      subtitle: 'Next.js 14, Node.js, WebRTC, PostgreSQL',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      impact: '2.5M Patient Visits',
      description: 'End-to-end cloud platform for healthcare providers enabling encrypted video consultations, electronic health records (EHR), and automated appointment scheduling.',
      results: [
        '99.99% uptime SLA across multi-region AWS cloud',
        'HIPAA & GDPR fully compliant architecture',
        'Reduced patient waiting times by 65%'
      ],
      techs: ['Next.js 14', 'Node.js', 'WebRTC', 'AWS ECS', 'PostgreSQL']
    },
    {
      id: 'finflow-mobile',
      category: 'Mobile Apps',
      title: 'FinFlow Global Payment App',
      subtitle: 'Flutter, iOS/Android, Firebase, Plaid API',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      impact: '$45M Monthly Volume',
      description: 'Cross-platform mobile banking app providing instant peer-to-peer transfers, multi-currency accounts, and automated AI spending analytics.',
      results: [
        '4.9 / 5.0 rating on Apple App Store & Google Play',
        'Sub-100ms transaction execution speeds',
        'Over 350,000 active monthly users'
      ],
      techs: ['Flutter', 'Dart', 'Firebase', 'Plaid API', 'Stripe Connect']
    },
    {
      id: 'logitrack-ai',
      category: 'Cloud & AI',
      title: 'LogiTrack AI Fleet Logistics',
      subtitle: 'Python, TensorFlow, React, Docker, GCP',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      impact: '-28% Fuel Costs',
      description: 'Enterprise AI platform tracking 85,000 delivery vehicles worldwide with real-time GPS telemetry, route optimization, and driver safety alerts.',
      results: [
        'Saved 2.4 million gallons of fuel in Year 1',
        'Predictive vehicle maintenance alert accuracy >94%',
        'Seamless integration with SAP and Oracle ERPs'
      ],
      techs: ['Python', 'TensorFlow', 'React', 'Kubernetes', 'Google Cloud']
    },
    {
      id: 'veloce-store',
      category: 'Web Apps',
      title: 'Veloce High-Speed E-Commerce',
      subtitle: 'React, Shopify Storefront API, GraphQL',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      impact: '+310% Sales Conversion',
      description: 'Headless e-commerce web platform engineered for luxury apparel brand, featuring 0.3s page transitions and instant localized checkout.',
      results: [
        '100/100 Mobile Lighthouse speed benchmark score',
        '+310% checkout conversion rate uplift post-launch',
        'Handled 45,000 concurrent users during Black Friday sale'
      ],
      techs: ['React', 'Shopify Storefront', 'GraphQL', 'Vercel Edge']
    },
    {
      id: 'apex-pay',
      category: 'Mobile Apps',
      title: 'Apex Pay NFC Mobile Wallet',
      subtitle: 'Swift, Kotlin, Native NFC, Web3 SDK',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      impact: '500k Downloads',
      description: 'Native iOS & Android digital wallet supporting contactless tap-to-pay, loyalty card digitization, and instant crypto-to-fiat conversion.',
      results: [
        'Awarded Best Mobile UI/UX Design 2025',
        'Zero security breaches across 10M+ transactions',
        '98% user onboarding completion rate'
      ],
      techs: ['Swift', 'Kotlin', 'NFC Hardware', 'AWS KMS']
    },
    {
      id: 'cybershield',
      category: 'Cloud & AI',
      title: 'CyberShield Autonomous SOC',
      subtitle: 'Go, Python, Machine Learning, AWS',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      impact: '99.8% Threat Accuracy',
      description: 'Autonomous cyber security intelligence center analyzing gigabytes of enterprise log traffic per second for zero-day threat detection.',
      results: [
        'Automated response to 94% of suspicious network anomalies',
        'Reduced incident containment time from 6 hours to 45 seconds',
        'Deployed across 30 Fortune 500 corporate IT networks'
      ],
      techs: ['Go', 'Python', 'Kafka', 'ElasticSearch', 'AWS S3']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge">
            <Sparkles size={14} />
            <span>Case Studies & Portfolio</span>
          </div>
          <h2>
            Engineering Success for <span className="gradient-text">Market Leaders</span>
          </h2>
          <p>
            Explore a selection of web applications, mobile platforms, and enterprise solutions designed and built by Inkore Technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-3 portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                  <span className="view-case-btn">View Case Study</span>
                </div>
                <div className="project-impact-badge">
                  <TrendingUp size={13} />
                  <span>{project.impact}</span>
                </div>
              </div>

              <div className="project-card-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <div className="project-tech-chips">
                  {project.techs.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card project-modal animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <div className="project-modal-hero">
              <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-img" />
              <div className="project-modal-badge">{selectedProject.impact}</div>
            </div>

            <div className="project-modal-body">
              <span className="project-category">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-section-block">
                <h4 className="modal-subheading">Key Results & Achievements</h4>
                <div className="modal-feature-list">
                  {selectedProject.results.map((res, idx) => (
                    <div key={idx} className="modal-feature-item">
                      <CheckCircle2 size={18} className="feat-check" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-subheading">Technologies Used</h4>
                <div className="service-tech-list">
                  {selectedProject.techs.map((t, idx) => (
                    <span key={idx} className="tech-tag large">{t}</span>
                  ))}
                </div>
              </div>

              <button className="btn-primary width-100" onClick={() => setSelectedProject(null)}>
                <span>Close Case Study</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
