import React from 'react';
import { Receipt, Package, Clock, BarChart3 } from 'lucide-react';
import './MetricsStrip.css';

export const MetricsStrip: React.FC = () => {
  return (
    <section className="trust-bar-section">
      <div className="container">
        
        <div className="trust-bar-title">
          <span>Everything you need to manage a modern pharmacy</span>
        </div>

        <div className="trust-blocks-grid">
          
          <div className="trust-block">
            <div className="trust-icon"><Receipt size={18} /></div>
            <div className="trust-text">
              <span className="block-tag">BILLING</span>
              <span className="block-desc">Fast medicine billing</span>
            </div>
          </div>

          <div className="trust-block">
            <div className="trust-icon"><Package size={18} /></div>
            <div className="trust-text">
              <span className="block-tag">INVENTORY</span>
              <span className="block-desc">Complete stock control</span>
            </div>
          </div>

          <div className="trust-block">
            <div className="trust-icon"><Clock size={18} /></div>
            <div className="trust-text">
              <span className="block-tag">EXPIRY</span>
              <span className="block-desc">Expiry monitoring</span>
            </div>
          </div>

          <div className="trust-block">
            <div className="trust-icon"><BarChart3 size={18} /></div>
            <div className="trust-text">
              <span className="block-tag">REPORTS</span>
              <span className="block-desc">Business insights</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
