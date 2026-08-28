import React, { useState } from 'react';
import { 
  Receipt, 
  Package, 
  ShoppingBag, 
  Clock, 
  BarChart3, 
  CheckCircle2, 
  Database 
} from 'lucide-react';
import billingImg from '../assets/app.usemedix.online_billing.png';
import inventoryImg from '../assets/app.usemedix.online_inventory.png';
import purchaseImg from '../assets/app.usemedix.online_purchase.png';
import savingsImg from '../assets/app.usemedix.online_savings.png';
import analyticsImg from '../assets/app.usemedix.online_analytics.png';
import './ProductOverview.css';

export const ProductOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'billing' | 'inventory' | 'purchase' | 'expiry' | 'reports'>('billing');

  const tabScreenshots = {
    billing: billingImg,
    inventory: inventoryImg,
    purchase: purchaseImg,
    expiry: savingsImg,
    reports: analyticsImg,
  };

  return (
    <section className="section-padding product-showcase-section" id="solutions">
      <div className="container">
        
        <div className="section-header center">
          <div className="eyebrow-label">POWERFUL PHARMACY MANAGEMENT</div>
          <h2>Everything Your Pharmacy Needs In One Place</h2>
          <p>
            Switch between daily counter modules with keyboard shortcuts or single-click tabs.
          </p>
        </div>

        {/* Traditional Navigation Tab Strip */}
        <div className="erp-tabs-bar">
          <button 
            className={`erp-tab-btn ${activeTab === 'billing' ? 'active' : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            <Receipt size={16} />
            <span>Billing</span>
          </button>
          <button 
            className={`erp-tab-btn ${activeTab === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            <Package size={16} />
            <span>Inventory</span>
          </button>
          <button 
            className={`erp-tab-btn ${activeTab === 'purchase' ? 'active' : ''}`}
            onClick={() => setActiveTab('purchase')}
          >
            <ShoppingBag size={16} />
            <span>Purchase</span>
          </button>
          <button 
            className={`erp-tab-btn ${activeTab === 'expiry' ? 'active' : ''}`}
            onClick={() => setActiveTab('expiry')}
          >
            <Clock size={16} />
            <span>Expiry</span>
          </button>
          <button 
            className={`erp-tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <BarChart3 size={16} />
            <span>Reports</span>
          </button>
        </div>

        {/* Framed Large Real Screenshot Window */}
        <div className="showcase-window medix-card">
          
          <div className="window-header-bar">
            <div className="w-title">
              <Database size={14} />
              <span>Medix ERP — Module: {activeTab.toUpperCase()} CONSOLE</span>
            </div>
            <div className="w-status">
              <CheckCircle2 size={12} /> Live Production Data
            </div>
          </div>

          <div className="showcase-real-img-wrap">
            <img 
              src={tabScreenshots[activeTab]} 
              alt={`Medix Pharmacy ERP ${activeTab} Module Screenshot`}
              className="showcase-screenshot-img"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
