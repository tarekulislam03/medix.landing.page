import React from 'react';
import './PricingSection.css';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="section-padding pricing-table-section" id="pricing">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2>Software Pricing &amp; Plan Comparison</h2>
          <p>Pay once. Optional AMC of ₹1,999/year from Year 2.</p>
        </div>

        {/* Included in both plans summary bar */}
        <div className="medix-card" style={{ marginBottom: '8px', padding: '6px 10px', backgroundColor: 'var(--bg-surface-alt)' }}>
          <strong>Included in both plans:</strong> Lifetime license ownership, full ERP &amp; GST billing features.
        </div>

        {/* Plan Table with differences only */}
        <div className="erp-table-wrap medix-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '8px' }}>
          <table className="erp-table">
            <thead>
              <tr>
                <th style={{ width: '34%' }}>Feature Differences</th>
                <th style={{ width: '33%', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>Prime</div>
                  <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--bg-dark-green)', marginTop: '2px' }}>₹6,999</div>
                </th>
                <th style={{ width: '33%', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>Infinity</div>
                  <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--color-orange-primary)', marginTop: '2px' }}>₹9,999</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Initial stock data entry</strong></td>
                <td style={{ textAlign: 'center' }}>Manual Entry</td>
                <td style={{ textAlign: 'center' }}>Full Stock Loaded by Medix</td>
              </tr>
              <tr>
                <td><strong>First-year support</strong></td>
                <td style={{ textAlign: 'center' }}>1 Year Free Support</td>
                <td style={{ textAlign: 'center' }}>1 Year Free Priority Support</td>
              </tr>
              <tr>
                <td><strong>Staff onboarding &amp; training</strong></td>
                <td style={{ textAlign: 'center' }}>User Manual Guide</td>
                <td style={{ textAlign: 'center' }}>Included (Dedicated Support)</td>
              </tr>
              <tr>
                <td><strong>Action</strong></td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={onOpenDemo} className="btn btn-secondary btn-sm" style={{ width: '110px' }}>
                    Select Prime
                  </button>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={onOpenDemo} className="btn btn-orange btn-sm" style={{ width: '110px' }}>
                    Recommended
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AMC Footnote */}
        <p className="amc-footnote" style={{ marginTop: '6px', fontSize: '11px', color: 'var(--color-gray-text)', fontStyle: 'italic' }}>
          * Optional AMC of ₹1,999/year from Year 2 includes technical support, GST updates, and cloud backup. Your lifetime software license continues working even without AMC renewal.
        </p>

      </div>
    </section>
  );
};
