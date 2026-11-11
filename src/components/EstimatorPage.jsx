import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';
import CostEstimator from './CostEstimator';
import FAQ from './FAQ';
import './EstimatorPage.css';

export default function EstimatorPage({ onOpenContact }) {
  const navigate = useNavigate();

  const handleSendEstimate = (estimateData) => {
    onOpenContact();
  };

  return (
    <div className="estimator-page-wrapper">
      {/* 1. Hero */}
      <section className="estimator-hero-section">
        <div className="container text-center reveal-on-scroll">
          <div className="badge-pill">
            <Calculator size={14} />
            <span>Interactive Project Calculator</span>
          </div>

          <h1 className="estimator-hero-title">
            Estimate Your Project Scope & Timeline
          </h1>

          <p className="estimator-hero-subtitle">
            Configure your technical requirements, desired features, design fidelity, and deployment timeline to calculate a preliminary budget and sprint schedule.
          </p>

          <div className="estimator-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-blue" />
              <span>Transparent Agile Pricing</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-blue" />
              <span>Zero Hidden Fees</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-blue" />
              <span>Dedicated Senior Engineers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Calculator Component */}
      <CostEstimator onSendEstimateToContact={handleSendEstimate} />

      {/* 3. Pricing FAQ Component */}
      <FAQ />
    </div>
  );
}

