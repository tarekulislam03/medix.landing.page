import React from 'react';
import './PricingSection.css';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

const PRIME_PRICE = 6999;
const INFINITY_PRICE = 9999;
const AMC_PRICE = 1999;
const SUBSCRIPTION_PRICE_PER_YEAR = 12000;

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const primeTotal3Year = PRIME_PRICE + AMC_PRICE + AMC_PRICE;
  const infinityTotal3Year = INFINITY_PRICE + AMC_PRICE + AMC_PRICE;
  const subscriptionTotal3Year = SUBSCRIPTION_PRICE_PER_YEAR * 3;

  return (
    <section className="section-padding pricing-table-section" id="pricing">
      <div className="container">

        {/* 1. Section title strip (the only dark green strip in this section) */}
        <div className="section-header">
          <h2>Pricing</h2>
        </div>

        {/* 2. Headline line & Sub line */}
        <div className="pricing-headline-block">
          <h3 className="pricing-headline">Pay once. Use it for life.</h3>
          <p className="pricing-subline">One-time lifetime license. No monthly fees.</p>
        </div>

        {/* 3. One-sentence difference line in a light tinted box (#E4EAE6) */}
        <div className="pricing-diff-banner">
          Both plans give you the full software. Infinity also includes setup: we load your stock and train your staff.
        </div>

        {/* 4. Two plan boxes side by side on desktop, stacked on mobile */}
        <div className="pricing-grid">
          
          {/* Prime Plan Box */}
          <div className="plan-card">
            <div className="plan-card-header">
              <h4 className="plan-title">Prime</h4>
            </div>
            <div className="plan-card-body">
              <div className="plan-price-wrap">
                <div className="plan-price">₹{PRIME_PRICE.toLocaleString('en-IN')}</div>
                <div className="plan-price-sub">One-time | Lifetime license</div>
              </div>
              <div className="plan-setup-line">You set it up yourself.</div>
              <ul className="plan-features-list">
                <li className="plan-feature-item">
                  <span className="check-icon">✓</span>
                  <span>Full ERP &amp; GST billing</span>
                </li>
                <li className="plan-feature-item">
                  <span className="check-icon">✓</span>
                  <span>1 year free support</span>
                </li>
                <li className="plan-feature-item">
                  <span className="cross-icon">✕</span>
                  <span>Stock entered by you, with user manual guide</span>
                </li>
              </ul>
              <div className="plan-card-footer">
                <button onClick={onOpenDemo} className="btn btn-secondary plan-btn-full btn-lg">
                  Select Prime
                </button>
              </div>
            </div>
          </div>

          {/* Infinity Plan Box */}
          <div className="plan-card">
            <div className="plan-card-header">
              <h4 className="plan-title">Infinity</h4>
              <span className="plan-recommended-badge">Recommended</span>
            </div>
            <div className="plan-card-body">
              <div className="plan-price-wrap">
                <div className="plan-price">₹{INFINITY_PRICE.toLocaleString('en-IN')}</div>
                <div className="plan-price-sub">One-time | Lifetime license</div>
              </div>
              <div className="plan-setup-line">We set it up for you.</div>
              <ul className="plan-features-list">
                <li className="plan-feature-item">
                  <span className="check-icon">✓</span>
                  <span>Full ERP &amp; GST billing</span>
                </li>
                <li className="plan-feature-item">
                  <span className="check-icon">✓</span>
                  <span>Full initial stock loaded by Medix</span>
                </li>
                <li className="plan-feature-item">
                  <span className="check-icon">✓</span>
                  <span>Dedicated staff onboarding</span>
                </li>
                <li className="plan-feature-item">
                  <span className="check-icon">✓</span>
                  <span>1 year free priority support</span>
                </li>
              </ul>
              <div className="plan-card-footer">
                <button onClick={onOpenDemo} className="btn btn-orange plan-btn-full btn-lg">
                  Select Infinity
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 5. One small line below */}
        <p className="amc-line">
          After Year 1, support renewal (AMC) is optional at ₹{AMC_PRICE.toLocaleString('en-IN')}/year. Your license keeps working without it.
        </p>

        {/* 6. Collapsed <details> element */}
        <details className="pricing-details">
          <summary className="pricing-summary">Compare 3-year cost with subscription software</summary>
          <div className="pricing-details-content">
            <div className="erp-table-wrap">
              <table className="erp-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th style={{ textAlign: 'center' }}>Prime</th>
                    <th style={{ textAlign: 'center' }}>Infinity</th>
                    <th style={{ textAlign: 'center' }}>Typical subscription software (illustrative)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Year 1</strong></td>
                    <td style={{ textAlign: 'center' }}>₹{PRIME_PRICE.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center' }}>₹{INFINITY_PRICE.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center' }}>₹{SUBSCRIPTION_PRICE_PER_YEAR.toLocaleString('en-IN')}</td>
                  </tr>
                  <tr>
                    <td><strong>Year 2</strong></td>
                    <td style={{ textAlign: 'center' }}>₹{AMC_PRICE.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center' }}>₹{AMC_PRICE.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center' }}>₹{SUBSCRIPTION_PRICE_PER_YEAR.toLocaleString('en-IN')}</td>
                  </tr>
                  <tr>
                    <td><strong>Year 3</strong></td>
                    <td style={{ textAlign: 'center' }}>₹{AMC_PRICE.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center' }}>₹{AMC_PRICE.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center' }}>₹{SUBSCRIPTION_PRICE_PER_YEAR.toLocaleString('en-IN')}</td>
                  </tr>
                  <tr>
                    <td><strong>3-Year Total</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>₹{primeTotal3Year.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>₹{infinityTotal3Year.toLocaleString('en-IN')}</td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>₹{subscriptionTotal3Year.toLocaleString('en-IN')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>

      </div>
    </section>
  );
};
