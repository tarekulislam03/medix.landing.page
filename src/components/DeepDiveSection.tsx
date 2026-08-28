import React from 'react';
import { 
  Package, 
  Clock, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import inventoryImg from '../assets/app.usemedix.online_inventory.png';
import savingsImg from '../assets/app.usemedix.online_savings.png';
import purchaseImg from '../assets/app.usemedix.online_purchase.png';
import './DeepDiveSection.css';

export const DeepDiveSection: React.FC = () => {
  return (
    <section className="section-padding feature-alternating-section">
      <div className="container">
        
        {/* SECTION 2: Text Left, Image Right — COMPLETE INVENTORY CONTROL */}
        <div className="feature-row reverse">
          
          <div className="feature-text-col">
            <div className="eyebrow-label">STOCKROOM VISIBILITY</div>
            <h2 className="feature-headline">COMPLETE INVENTORY CONTROL</h2>
            <p className="feature-desc">
              Know what is available, what is running low and what needs attention down to batch numbers and rack locations.
            </p>
            <ul className="feature-check-list">
              <li><CheckCircle2 size={16} className="chk" /> Rack-wise location mapping for fast stock lookup</li>
              <li><CheckCircle2 size={16} className="chk" /> Minimum reorder level threshold alerts</li>
              <li><CheckCircle2 size={16} className="chk" /> Unified stock audit history across counters</li>
            </ul>
          </div>

          <div className="feature-visual-col">
            <div className="feature-frame medix-card">
              <div className="frame-head">
                <span><Package size={14} /> Batch Stock Control</span>
                <span className="mono-text">Store 01</span>
              </div>
              <div className="frame-img-wrap">
                <img 
                  src={inventoryImg} 
                  alt="Complete Pharmacy Inventory Control Software" 
                  className="frame-screenshot-img"
                />
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 3: Image Left, Text Right — EXPIRY MANAGEMENT */}
        <div className="feature-row">
          
          <div className="feature-visual-col">
            <div className="feature-frame medix-card">
              <div className="frame-head">
                <span><Clock size={14} /> Expiry Return & Savings Radar</span>
                <span className="mono-text">Distributor Claim</span>
              </div>
              <div className="frame-img-wrap">
                <img 
                  src={savingsImg} 
                  alt="Pharmacy Expiry Management and Savings Software" 
                  className="frame-screenshot-img"
                />
              </div>
            </div>
          </div>

          <div className="feature-text-col">
            <div className="eyebrow-label">PROFIT RESILIENCE</div>
            <h2 className="feature-headline">EXPIRY MANAGEMENT</h2>
            <p className="feature-desc">
              Identify near-expiry medicines before they become unnecessary losses and return stock within distributor timelines.
            </p>
            <ul className="feature-check-list">
              <li><CheckCircle2 size={16} className="chk" /> Automatic 30, 60, 90-day expiry radar warnings</li>
              <li><CheckCircle2 size={16} className="chk" /> First-In-First-Out (FIFO) counter billing priority</li>
              <li><CheckCircle2 size={16} className="chk" /> Single-click debit note creation for suppliers</li>
            </ul>
          </div>

        </div>

        {/* SECTION 4: Text Left, Image Right — SMARTER PURCHASE DECISIONS */}
        <div className="feature-row reverse">
          
          <div className="feature-text-col">
            <div className="eyebrow-label">SUPPLIER OPTIMIZATION</div>
            <h2 className="feature-headline">SMARTER PURCHASE DECISIONS</h2>
            <p className="feature-desc">
              Use sales and inventory information to understand what your pharmacy actually needs without overstocking slow movers.
            </p>
            <ul className="feature-check-list">
              <li><CheckCircle2 size={16} className="chk" /> Auto-calculate purchase orders based on 30-day sales velocity</li>
              <li><CheckCircle2 size={16} className="chk" /> Direct PO export to distributor email or WhatsApp</li>
              <li><CheckCircle2 size={16} className="chk" /> Prevent unnecessary capital lockup in slow SKUs</li>
            </ul>
          </div>

          <div className="feature-visual-col">
            <div className="feature-frame medix-card">
              <div className="frame-head">
                <span><TrendingUp size={14} /> Distributor Inward Purchase Engine</span>
                <span className="mono-text">Auto PO</span>
              </div>
              <div className="frame-img-wrap">
                <img 
                  src={purchaseImg} 
                  alt="Pharma Distributor Purchase Management Software" 
                  className="frame-screenshot-img"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
