import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="corporate-cta-banner">
      <div className="container">
        
        <div className="cta-banner-content">
          <div className="cta-text">
            <h2>Ready To Manage Your Pharmacy Better?</h2>
            <p>See how Medix can simplify your daily pharmacy operations.</p>
          </div>

          <button onClick={onOpenDemo} className="btn btn-light btn-lg cta-btn">
            <span>REQUEST A DEMO</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
