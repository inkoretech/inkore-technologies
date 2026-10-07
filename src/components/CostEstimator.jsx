import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  DollarSign,
  Smartphone,
  Globe,
  Database,
  Cpu,
  RefreshCw
} from 'lucide-react';
import './CostEstimator.css';

export default function CostEstimator({ onSendEstimateToContact }) {
  const [projectType, setProjectType] = useState('web');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'payments']);
  const [designLevel, setDesignLevel] = useState('custom');
  const [urgency, setUrgency] = useState('standard');

  const projectTypes = [
    { id: 'web', name: 'Web Application', icon: <Globe size={22} />, basePrice: 4500, baseWeeks: 5 },
    { id: 'mobile', name: 'Mobile App (iOS/Android)', icon: <Smartphone size={22} />, basePrice: 6000, baseWeeks: 6 },
    { id: 'saas', name: 'Enterprise SaaS Suite', icon: <Database size={22} />, basePrice: 9500, baseWeeks: 8 },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Cpu size={22} />, basePrice: 5500, baseWeeks: 5 },
  ];

  const featuresList = [
    { id: 'auth', name: 'User Authentication & Roles', price: 800, weeks: 0.5 },
    { id: 'payments', name: 'Payment Gateway & Billing', price: 1200, weeks: 1 },
    { id: 'analytics', name: 'Admin Analytics Dashboard', price: 1500, weeks: 1 },
    { id: 'ai-bot', name: 'Custom AI Chatbot Integration', price: 2200, weeks: 1.5 },
    { id: 'realtime', name: 'Real-Time Chat & Push Alerts', price: 1400, weeks: 1 },
    { id: 'i18n', name: 'Multi-Language Localization', price: 900, weeks: 0.5 }
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const currentType = projectTypes.find(t => t.id === projectType);
  let totalPrice = currentType.basePrice;
  let totalWeeks = currentType.baseWeeks;

  selectedFeatures.forEach(featId => {
    const f = featuresList.find(item => item.id === featId);
    if (f) {
      totalPrice += f.price;
      totalWeeks += f.weeks;
    }
  });

  if (designLevel === 'custom') {
    totalPrice += 1800;
    totalWeeks += 1;
  }

  if (urgency === 'fast') {
    totalPrice += 1500;
    totalWeeks = Math.max(3, Math.round(totalWeeks * 0.65));
  }

  const handleApplyToForm = () => {
    const featureNames = selectedFeatures.map(fid => featuresList.find(f => f.id === fid)?.name).filter(Boolean).join(', ');
    const estimateSummary = `[Project Cost Estimate]
Type: ${currentType.name}
Features: ${featureNames || 'Core Only'}
Design: ${designLevel === 'custom' ? 'Custom Bespoke UX' : 'Standard UX'}
Speed: ${urgency === 'fast' ? 'Fast-Track Accelerated' : 'Standard Timeline'}
Estimated Budget: \$${totalPrice.toLocaleString()} - \$${(totalPrice + 1500).toLocaleString()}
Estimated Delivery: ~${totalWeeks} Weeks`;

    onSendEstimateToContact(estimateSummary, currentType.name);
  };

  return (
    <section className="section-padding estimator-section" id="estimator">
      <div className="container">
        <div className="section-header">
          <div className="pill-badge">
            <Calculator size={14} />
            <span>Interactive Estimator</span>
          </div>
          <h2>
            Instant Project Cost & <span className="gradient-text">Timeline Calculator</span>
          </h2>
          <p>
            Configure your project parameters below to get an instant transparent price range and delivery estimate.
          </p>
        </div>

        <div className="estimator-card glass-card">
          <div className="estimator-grid">
            {/* Configuration Controls */}
            <div className="estimator-inputs">
              
              {/* Step 1: Project Type */}
              <div className="input-group">
                <label className="input-label">1. Select Primary Project Type</label>
                <div className="type-options-grid">
                  {projectTypes.map(t => (
                    <button
                      key={t.id}
                      className={`type-option-btn ${projectType === t.id ? 'active' : ''}`}
                      onClick={() => setProjectType(t.id)}
                    >
                      <div className="type-btn-icon">{t.icon}</div>
                      <span className="type-btn-name">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Features */}
              <div className="input-group">
                <label className="input-label">2. Select Key Modules & Features</label>
                <div className="features-options-grid">
                  {featuresList.map(f => {
                    const isChecked = selectedFeatures.includes(f.id);
                    return (
                      <button
                        key={f.id}
                        className={`feature-chip-btn ${isChecked ? 'active' : ''}`}
                        onClick={() => toggleFeature(f.id)}
                      >
                        <div className={`checkbox-box ${isChecked ? 'checked' : ''}`}>
                          {isChecked && <Check size={12} />}
                        </div>
                        <span className="feature-name">{f.name}</span>
                        <span className="feature-price">+${f.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Design & Speed */}
              <div className="input-group-row">
                <div className="input-group flex-1">
                  <label className="input-label">3. Design Experience</label>
                  <div className="radio-toggle-group">
                    <button
                      className={`toggle-btn ${designLevel === 'standard' ? 'active' : ''}`}
                      onClick={() => setDesignLevel('standard')}
                    >
                      Standard UX
                    </button>
                    <button
                      className={`toggle-btn ${designLevel === 'custom' ? 'active' : ''}`}
                      onClick={() => setDesignLevel('custom')}
                    >
                      Custom Bespoke (+$1.8k)
                    </button>
                  </div>
                </div>

                <div className="input-group flex-1">
                  <label className="input-label">4. Delivery Speed</label>
                  <div className="radio-toggle-group">
                    <button
                      className={`toggle-btn ${urgency === 'standard' ? 'active' : ''}`}
                      onClick={() => setUrgency('standard')}
                    >
                      Standard (6-8 wks)
                    </button>
                    <button
                      className={`toggle-btn ${urgency === 'fast' ? 'active' : ''}`}
                      onClick={() => setUrgency('fast')}
                    >
                      Fast-Track (+$1.5k)
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Calculation Output Summary Panel */}
            <div className="estimator-summary-panel">
              <div className="summary-badge">
                <Sparkles size={14} />
                <span>Estimated Quotation</span>
              </div>

              <div className="summary-price-box">
                <span className="price-label">Estimated Investment Range</span>
                <div className="price-value">
                  ${totalPrice.toLocaleString()} - ${(totalPrice + 1500).toLocaleString()}
                </div>
                <span className="price-note">*Final proposal tailored after discovery call</span>
              </div>

              <div className="summary-time-box">
                <Clock size={20} className="time-icon" />
                <div className="time-info">
                  <span className="time-val">~{totalWeeks} Weeks</span>
                  <span className="time-lbl">Estimated Sprint Delivery</span>
                </div>
              </div>

              <div className="summary-breakdown">
                <span className="breakdown-title">Included in Estimate:</span>
                <ul>
                  <li><Check size={14} /> 100% Full Source Code & IP Ownership</li>
                  <li><Check size={14} /> Dedicated Project Manager & Daily Updates</li>
                  <li><Check size={14} /> Automated Testing & Security Audit</li>
                  <li><Check size={14} /> 60-Day Post-Launch Maintenance Included</li>
                </ul>
              </div>

              <button className="btn-primary width-100 summary-cta" onClick={handleApplyToForm}>
                <span>Book Call with This Estimate</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
