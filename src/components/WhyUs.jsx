import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Users, 
  CheckCircle, 
  Sparkles, 
  Layers,
  Clock,
  Lock,
  Award
} from 'lucide-react';
import './WhyUs.css';

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState('process');

  const capabilities = [
    {
      id: 'process',
      title: 'Agile Delivery Process',
      icon: <Zap size={20} />,
      content: {
        headline: 'Transparent 2-Week Sprint Deliveries',
        description: 'We eliminate project delays and unexpected costs using structured agile sprints. Every fortnight, you receive executable code builds and live staging demos.',
        points: [
          'Bi-weekly live video demos & client feedback loops',
          'Full access to dedicated Jira / GitHub repositories',
          'Dedicated Scrum Master and Solution Architect',
          'Flexible scope adjustments as market needs evolve'
        ]
      }
    },
    {
      id: 'security',
      title: 'Security & IP Guarantee',
      icon: <ShieldCheck size={20} />,
      content: {
        headline: '100% IP Transfer & Bank-Grade Security',
        description: 'Your intellectual property is completely protected. We enforce strict Non-Disclosure Agreements (NDAs) and transfer full copyright ownership upon delivery.',
        points: [
          'Immediate NDA signature prior to discovery calls',
          'Complete source code & IP ownership transfer',
          'SOC2 Type II & GDPR compliance standards',
          'Encrypted data storage and vulnerability penetration testing'
        ]
      }
    },
    {
      id: 'architecture',
      title: 'Future-Proof Architecture',
      icon: <Cpu size={20} />,
      content: {
        headline: 'Zero Tech Debt & Scalable Cloud Stack',
        description: 'We build for long-term reliability. Our modular microservices architectures scale seamlessly from thousands to millions of concurrent users.',
        points: [
          'Decoupled frontend & backend microservices',
          'Automated unit & integration test suites (>85% coverage)',
          'Auto-scaling cloud setup on AWS / GCP / Azure',
          'Comprehensive API documentation & developer handoff'
        ]
      }
    },
    {
      id: 'team',
      title: 'Senior Dedicated Engineering',
      icon: <Users size={20} />,
      content: {
        headline: 'Top 3% Tech Talent Working Exclusively for You',
        description: 'No junior developers learning on your budget. Inkore pairs your team with seasoned full-stack engineers, cloud architects, and UI/UX specialists.',
        points: [
          'Engineers with 6+ years average industry experience',
          'Direct Slack / Teams communication with developers',
          'Time zone aligned working hours for seamless collaboration',
          'Zero recruitment hassle & fast 48-hour pod onboarding'
        ]
      }
    }
  ];

  const currentTabContent = capabilities.find(c => c.id === activeTab).content;

  return (
    <section className="section-padding why-us-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge pill-badge-purple">
            <Sparkles size={14} />
            <span>Why Choose Inkore</span>
          </div>
          <h2>
            Built for Businesses That <span className="gradient-text-purple">Demand Speed & Excellence</span>
          </h2>
          <p>
            We don't just write code — we serve as your end-to-end technology partner, ensuring your software launches on time, scales reliably, and beats the competition.
          </p>
        </div>

        {/* Interactive Capability Tabs */}
        <div className="why-us-grid">
          {/* Tab Selection Column */}
          <div className="tab-buttons-column">
            {capabilities.map((tab) => (
              <button
                key={tab.id}
                className={`tab-card-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="tab-btn-icon">{tab.icon}</div>
                <span className="tab-btn-title">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Showcase Panel */}
          <div className="tab-panel glass-card">
            <h3 className="panel-headline">{currentTabContent.headline}</h3>
            <p className="panel-desc">{currentTabContent.description}</p>

            <div className="panel-points-grid">
              {currentTabContent.points.map((pt, idx) => (
                <div key={idx} className="panel-point">
                  <CheckCircle size={18} className="panel-point-icon" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards Below */}
        <div className="grid-4 why-features-row">
          <div className="glass-card why-card">
            <div className="why-card-icon"><Clock size={24} /></div>
            <h4>Fast Time-to-Market</h4>
            <p>Ship MVPs in weeks, not months, gaining early user traction.</p>
          </div>
          <div className="glass-card why-card">
            <div className="why-card-icon"><Lock size={24} /></div>
            <h4>Enterprise Security</h4>
            <p>End-to-end encryption & compliance-ready codebase.</p>
          </div>
          <div className="glass-card why-card">
            <div className="why-card-icon"><Layers size={24} /></div>
            <h4>Modular Systems</h4>
            <p>Easily expand features as your user base scales.</p>
          </div>
          <div className="glass-card why-card">
            <div className="why-card-icon"><Award size={24} /></div>
            <h4>Guaranteed Quality</h4>
            <p>Rigorous automated testing & performance SLA benchmarks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
