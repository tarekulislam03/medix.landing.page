import React from 'react';
import './FeaturesGrid.css';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export const FeaturesGrid: React.FC = () => {
  const whyFeatures: FeatureItem[] = [
    {
      id: "billing",
      title: "Billing Delays & Calculation Errors",
      description: "Scan barcodes & bill ready! You just have to scan the barcodes and it will generate bill with proper mrp & discount calculations. Get printed reciept as well. All under 15 seconds!"
    },
    {
      id: "expiry",
      title: "Expiry Losses & Purchase Decisions",
      description: "Get notification of near expiry products. Software will force you sell old stocks first to save losses. Save atleast 500/- each month. AI based suggestion for purchase decisions."
    },
    {
      id: "ai-stock",
      title: "Manual Stock Loading Headaches",
      description: "Just click a image of purchase bill and upload in software. AI analyze the bill and will automatically update stock with ~90% accuracy. It saves the headache of daily manual stock loading."
    }
  ];

  return (
    <section className="section-padding why-medix-section" id="features">
      <div className="container">

        {/* Left-Aligned Section Header */}
        <div className="section-header">
          <h2>What Problem Medix Solves?</h2>
        </div>

        {/* 3-Column Grid */}
        <div className="why-grid">
          {whyFeatures.map((item) => (
            <div className="why-card medix-card" key={item.id}>
              <h3 className="why-item-title">{item.title}</h3>
              <p className="why-item-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
