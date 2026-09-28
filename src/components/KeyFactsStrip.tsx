import React from 'react';
import './KeyFactsStrip.css';

export const KeyFactsStrip: React.FC = () => {
  const facts = [
    { label: 'Billing', value: 'GST-Ready' },
    { label: 'Works', value: 'Offline' },
    { label: 'License', value: 'One-Time' },
    { label: 'AMC', value: '₹1,999/year' },
    { label: 'Support', value: '1 Year Free' },
  ];

  return (
    <div className="key-facts-bar">
      <div className="container">
        <table className="key-facts-table">
          <tbody>
            <tr>
              {facts.map((f, i) => (
                <td key={i} className="key-fact-cell">
                  <span className="kf-label">{f.label}:</span>
                  <span className="kf-value">{f.value}</span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
