import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import './PricingSection.css';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {

  return (
    <section className="section-padding pricing-table-section" id="pricing">
      <div className="container">

        {/* Section Header */}
        <div className="section-header center">
          <h2>Pricing Details</h2>

        </div>

        {/* 2 Main Packages Grid */}
        <div className="pricing-packages-grid">

          {/* Package 1: Software License */}
          <div className="pkg-card medix-card">
            <div className="pkg-header">
              <h3 className="pkg-title">Prime</h3>
              <p className="pkg-subtitle">Software license </p>
            </div>

            <div className="pkg-price-row">
              <div className="price-old-wrap">
                <span className="price-old mono-text">₹5,999</span>
                <span className="price-save-tag">SAVE ₹1,000</span>
              </div>
              <div className="price-current-group">
                <span className="price-currency">₹</span>
                <span className="price-amount mono-text">4,999</span>
                <span className="price-type">One-Time</span>
              </div>
            </div>
            <span className="gst-note">(GST not applicable • Lifetime ownership)</span>

            <ul className="pkg-feature-list">
              <li>
                <Check size={16} className="pkg-check" />
                <span>Lifetime software ownership</span>
              </li>
              <li>
                <Check size={16} className="pkg-check" />
                <span>Full ERP & GST billing</span>
              </li>
              <li>
                <Check size={16} className="pkg-check" />
                <span>1 Year FREE support</span>
              </li>
              <li className="muted-feature">
                <Check size={16} className="pkg-check muted" />
                <span>Manual medicine data entry</span>
              </li>
            </ul>

            <button onClick={onOpenDemo} className="btn btn-secondary pkg-btn">
              <span>BOOK A DEMO</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Package 2: Complete Store Setup + License (Featured) */}
          <div className="pkg-card medix-card featured">
            <div className="featured-flag">MOST POPULAR & BEST VALUE</div>
            <div className="pkg-header">
              <h3 className="pkg-title">Infinity</h3>
              <p className="pkg-subtitle highlight-subtitle">Software + Stock loading & full setup</p>
            </div>

            <div className="pkg-price-row">
              <div className="price-old-wrap">
                <span className="price-old mono-text">₹9,999</span>
                <span className="price-save-tag badge-large">SAVE ₹2,000</span>
              </div>
              <div className="price-current-group">
                <span className="price-currency">₹</span>
                <span className="price-amount mono-text">7,999</span>
                <span className="price-type">One-Time</span>
              </div>
            </div>
            <span className="gst-note">(GST not applicable • Lifetime ownership)</span>

            <ul className="pkg-feature-list">
              <li>
                <Check size={16} className="pkg-check orange" />
                <span>Lifetime software ownership</span>
              </li>
              <li>
                <Check size={16} className="pkg-check orange" />
                <span>Full initial stock loading</span>
              </li>
              <li>
                <Check size={16} className="pkg-check orange" />
                <span>Full ERP & GST Billing</span>
              </li>
              <li>
                <Check size={16} className="pkg-check orange" />
                <span>Staff training & guidance</span>
              </li>
              <li>
                <Check size={16} className="pkg-check orange" />
                <span>1 Year FREE priority support</span>
              </li>
            </ul>

            <button onClick={onOpenDemo} className="btn btn-orange pkg-btn">
              <span>BOOK A DEMO</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

        {/* Compact Horizontal AMC Offer */}
        <div className="amc-container medix-card">
          <div className="amc-content-wrapper">

            {/* Left Header & 3 Benefits */}
            <div className="amc-info-column">
              <span className="amc-badge">OPTIONAL AFTER YEAR 1</span>
              <h3 className="amc-title">Annual Maintenance & Support</h3>
              <ul className="amc-benefits-row">
                <li>
                  <Check size={15} className="amc-check" />
                  <span>Priority technical support</span>
                </li>
                <li>
                  <Check size={15} className="amc-check" />
                  <span>Software & GST updates</span>
                </li>
                <li>
                  <Check size={15} className="amc-check" />
                  <span>Cloud backup & maintenance</span>
                </li>
              </ul>
            </div>

            {/* Right Price Focal Point */}
            <div className="amc-price-column">
              <div className="amc-price-anchor">
                <span className="amc-old-price mono-text">₹2,499</span>
                <span className="amc-save-badge">SAVE ₹500</span>
              </div>
              <div className="amc-price-main">
                <span className="amc-price mono-text">₹1,999</span>
                <span className="amc-unit">/ year</span>
              </div>
            </div>

          </div>

          {/* Reassurance Line */}
          <div className="amc-reassurance-bar">
            <ShieldCheck size={15} className="amc-shield-icon" />
            <span>No AMC required — your lifetime license continues working.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
