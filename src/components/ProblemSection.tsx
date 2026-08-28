import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import inventoryImg from '../assets/app.usemedix.online_inventory.png';
import './ProblemSection.css';

export const ProblemSection: React.FC = () => {
  return (
    <section className="section-padding about-medix-section" id="about">
      <div className="container">
        
        <div className="section-header center">
          <div className="eyebrow-label">ABOUT MEDIX</div>
          <h2>Simple Software For Everyday Pharmacy Operations</h2>
          <p>
            Designed specifically for independent medical stores, retail chemists, and hospital pharmacies.
          </p>
        </div>

        <div className="about-two-col">
          
          {/* Left: Text explaining Medix */}
          <div className="about-text-box">
            <h3 className="about-subtitle">Engineered for Indian Pharmacy Counter Realities</h3>
            
            <p className="about-paragraph">
              Medix is an established pharmacy management ERP built to streamline daily billing counter queues, eliminate manual inventory tracking, and digitize distributor purchase invoices.
            </p>

            <p className="about-paragraph">
              Unlike generic accounting tools, Medix handles drug formulations, batch numbers, MRP rates, manufacturer barcodes, and expiry return debit notes right out of the box.
            </p>

            <div className="about-feature-list">
              <div className="about-f-item">
                <CheckCircle2 size={18} className="f-icon" />
                <span>GST Billing with GSTR-1 & GSTR-3B tax export</span>
              </div>
              <div className="about-f-item">
                <CheckCircle2 size={18} className="f-icon" />
                <span>30, 60, 90-day expiry radar notifications</span>
              </div>
              <div className="about-f-item">
                <CheckCircle2 size={18} className="f-icon" />
                <span>Offline-first counter operation resilience</span>
              </div>
              <div className="about-f-item">
                <CheckCircle2 size={18} className="f-icon" />
                <span>Automated purchase order generation</span>
              </div>
            </div>
          </div>

          {/* Right: Framed Real Product Screenshot */}
          <div className="about-visual-box">
            <div className="framed-screenshot medix-card">
              <div className="framed-header">
                <span className="framed-title">Master Inventory & Stock Control</span>
                <span className="framed-badge"><ShieldCheck size={12} /> Verified Stock Audit</span>
              </div>
              
              <div className="framed-real-img-wrap">
                <img 
                  src={inventoryImg} 
                  alt="Medix Pharmacy Inventory Management Screenshot" 
                  className="framed-screenshot-img"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
