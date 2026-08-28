import React from 'react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Setup",
      description: "Configure your pharmacy, counters, racks, and import master inventory databases in minutes."
    },
    {
      num: "02",
      title: "Operate",
      description: "Bill customers, record distributor invoices, scan barcodes, and track batch stock seamlessly."
    },
    {
      num: "03",
      title: "Analyze",
      description: "Understand sales trends, monitor profit margins, and optimize purchase orders."
    }
  ];

  return (
    <section className="section-padding how-it-works-section" id="how-it-works">
      <div className="container">

        <div className="section-header center">

          <h2>Up And Running In 3 Simple Steps</h2>
          <p>
            Designed for immediate counter adoption without complex IT setup.
          </p>
        </div>

        <div className="traditional-steps-grid">
          {steps.map((step, idx) => (
            <div className="traditional-step-box" key={idx}>
              <div className="step-badge-circle mono-text">{step.num}</div>
              <h3 className="step-box-title">{step.title}</h3>
              <p className="step-box-desc">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
