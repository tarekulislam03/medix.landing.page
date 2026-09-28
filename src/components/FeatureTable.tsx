import React from 'react';
import './FeatureTable.css';

export const FeatureTable: React.FC = () => {
  const modules = [
    {
      module: 'GST Counter Billing',
      details: 'Scan barcodes & generate GST-compliant retail/wholesale bills under 15 seconds. Automatic MRP & discount calculations with printed receipt.',
      included: 'Included (All Plans)'
    },
    {
      module: 'Inventory & Batch Control',
      details: 'Automated batch tracking, rack location mapping, stock level monitoring, and FIFO (first-expiry-first-out) enforcement at checkout.',
      included: 'Included (All Plans)'
    },
    {
      module: 'Expiry Tracking & Returns',
      details: '30/60/90-day near-expiry radar alerts and automatic debit note claim generation for pharma distributors to eliminate expiry losses.',
      included: 'Included (All Plans)'
    },
    {
      module: 'Purchase Bill Inwards',
      details: 'Upload/digitize distributor purchase bills automatically to update stock. AI-assisted suggestion for reorder decisions based on 30-day sales velocity.',
      included: 'Included (Infinity Plan)'
    },
    {
      module: 'Sales & Financial Reports',
      details: 'Real-time daily counter sales reports, profit margin tracking, distributor ledger balances, and GST filing summary reports.',
      included: 'Included (All Plans)'
    },
    {
      module: 'Distributor Returns Claims',
      details: 'Track supplier return status, damaged/expired stock claims, and ledger adjustments.',
      included: 'Included (All Plans)'
    },
    {
      module: 'Barcode & Thermal Printer Support',
      details: 'Supports 1D UPC/EAN and 2D DataMatrix barcodes, thermal receipt printers, laser bill printers, and cash drawers.',
      included: 'Included (All Plans)'
    }
  ];

  return (
    <section className="section-padding feature-table-section" id="modules">
      <div className="container">
        <div className="section-header">
          <h2>Module & Feature Matrix</h2>
          <p>Detailed breakdown of core ERP modules and system capabilities included with Medix Pharmacy Software.</p>
        </div>

        <div className="erp-table-wrap medix-card">
          <table className="erp-table">
            <thead>
              <tr>
                <th style={{ width: '22%' }}>Module</th>
                <th>What It Does</th>
                <th style={{ width: '20%' }}>Included Status</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.module}</strong></td>
                  <td>{item.details}</td>
                  <td>{item.included}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
