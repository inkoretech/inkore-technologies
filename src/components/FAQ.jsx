import React, { useState } from 'react';
import { Sparkles, ChevronDown, Search, HelpCircle } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = [
    {
      question: "What core tech stack does Inkore Technologies use?",
      answer: "We specialize in modern enterprise tech stacks: React, Next.js 14, Node.js, Python, TypeScript, Flutter, Swift, React Native, AWS, GCP, and Docker/Kubernetes. We pick the optimal architecture tailored specifically for your scale, performance, and security needs."
    },
    {
      question: "Who owns the source code and IP rights upon project completion?",
      answer: "You own 100% of all intellectual property, source code, design assets, and credentials upon delivery. We sign binding NDAs before discovery and formally transfer full legal copyright to your organization."
    },
    {
      question: "How long does it take to develop a custom web or mobile MVP?",
      answer: "A typical streamlined MVP takes between 4 to 8 weeks depending on scope complexity. Full enterprise systems take 10 to 16 weeks. Because we operate in 2-week agile sprints, you see functioning software builds every fortnight."
    },
    {
      question: "What pricing models does Inkore offer?",
      answer: "We offer two flexible models: (1) Fixed-Price Milestone Contracts for clearly scoped projects with defined deliverables, and (2) Dedicated Engineering Pods (Time & Materials) where full-time senior engineers join your team on a monthly retainer basis."
    },
    {
      question: "Do you provide post-launch maintenance and DevOps support?",
      answer: "Yes! Every project includes a complimentary 60-day warranty period covering bug fixes and performance tuning. Beyond that, we offer 24/7 Managed Cloud & App SLA Support packages to keep your platform updated, secure, and monitored."
    },
    {
      question: "Can Inkore integrate AI capabilities into our existing software?",
      answer: "Absolutely. We specialize in embedding custom LLMs, OpenAI GPT-4, vector databases (Pinecone), automated document processing, and predictive analytics into existing web, mobile, and enterprise platforms."
    }
  ];

  const filteredFaqs = faqItems.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-padding faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2>
            Got Questions? <span className="gradient-text">We Have Answers</span>
          </h2>
          <p>
            Everything you need to know about partnering with Inkore Technologies for your web, mobile, and software development needs.
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="faq-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search questions (e.g., IP ownership, tech stack, timeline)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`glass-card faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question-btn" onClick={() => setOpenIndex(isOpen ? -1 : idx)}>
                    <span className="faq-question-text">{faq.question}</span>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="no-faq-results">
              <p>No questions matched your search query. Contact our team directly!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
