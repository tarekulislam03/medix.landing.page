import React from 'react';
import './SpecificationsTable.css';

export const SpecificationsTable: React.FC = () => {
  const specs = [
    { category: 'Platform & OS Compatibility', detail: 'Windows Desktop, Android Tablets, Apple iPad, Touch POS Terminals' },
    { category: 'Offline Resilience Engine', detail: 'Local SQLite database for 100% uninterrupted billing during power/internet outage with automatic background cloud sync' },
    { category: 'Printer & Barcode Hardware', detail: 'Thermal billing printers (2 inch / 3 inch), Laser A4/A5 printers, 1D UPC/EAN & 2D DataMatrix barcode scanners' },
    { category: 'Data Security & Backup', detail: 'Automated encrypted local database backups plus secure cloud vault snapshot sync' },
    { category: 'Support & Onboarding Channels', detail: 'Phone (+91 81014 02916), WhatsApp support, remote desktop assistance, and guided store onboarding' }
  ];

  return (
    <section className="section-padding specs-section" id="specifications">
      <div className="container">
        <div className="section-header">
          <h2>Technical Specifications & System Details</h2>
          <p>Hardware compatibility, database architecture, backup systems, and support access channels.</p>
        </div>

        <div className="erp-table-wrap medix-card">
          <table className="erp-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Specification Category</th>
                <th>System Details</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((item, idx) => (
                <tr key={idx}>
                  <td><strong>{item.category}</strong></td>
                  <td>{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
