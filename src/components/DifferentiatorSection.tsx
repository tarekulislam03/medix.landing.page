import React from 'react';
import './DifferentiatorSection.css';

export const DifferentiatorSection: React.FC = () => {
  return (
    <section className="stats-band-section">
      <div className="container">
        
        <div className="stats-grid">
          
          <div className="stat-item">
            <div className="stat-num mono-text">10,000+</div>
            <div className="stat-label">Inventory Records Analyzed</div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-num mono-text">90.2%</div>
            <div className="stat-label">Invoice Digitization Accuracy</div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-num mono-text">Offline</div>
            <div className="stat-label">Ready Architecture</div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-num mono-text">24/7</div>
            <div className="stat-label">Data Visibility</div>
          </div>

        </div>

      </div>
    </section>
  );
};
