import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Medix?",
      answer: "Medix is a complete pharmacy management software and ERP system designed for retail chemists, medical stores, and hospital dispensaries. It unifies GST counter billing, batch stock inventory, purchase orders, expiry return tracking, and GST reporting into one simple platform."
    },
    {
      question: "Can Medix work offline?",
      answer: "Yes. Medix features an offline-first local database resilience engine. Counter billing, barcode scanning, and stock search run without interruption during internet outages or power cuts. All local data automatically syncs with the cloud when connection is restored."
    },
    {
      question: "Does Medix support barcode billing?",
      answer: "Yes. Medix supports standard 1D manufacturer UPC/EAN barcodes as well as 2D DataMatrix barcodes. You can scan barcodes directly at the billing counter to auto-select formulation batch numbers and populate prices."
    },
    {
      question: "Can I track medicine expiry?",
      answer: "Yes. Medix provides automated 30, 60, and 90-day expiry radar notifications, prioritizes older batches at checkout (FIFO method), and automatically generates debit note return claims for pharma distributors."
    },
    {
      question: "Can I manage purchases?",
      answer: "Yes. Medix tracks distributor inward bills, analyzes 30-day sales velocity to suggest accurate purchase reorders, and digitizes incoming paper invoices via intelligent OCR."
    },
    {
      question: "Can Medix run on a tablet?",
      answer: "Yes. Medix is touch-optimized and responsive, running smoothly on iPads, Android tablets, touch POS counters, and desktop computers."
    },
    {
      question: "How do I get started?",
      answer: "Getting started takes under 15 minutes. Click 'Book a Demo' to request setup assistance. Our onboarding team will help migrate your master inventory and configure your billing printers."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-padding faq-section" id="faq">
      <div className="container container-narrow">
        
        <div className="section-header center">
          <div className="eyebrow-label">FREQUENTLY ASKED QUESTIONS</div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Common questions about Medix pharmacy ERP software deployment and features.
          </p>
        </div>

        <div className="traditional-faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                className={`faq-row medix-card ${isOpen ? 'open' : ''}`} 
                key={idx}
              >
                <button 
                  className="faq-q-btn"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <ChevronDown size={16} className={`faq-arr ${isOpen ? 'up' : ''}`} />
                </button>

                {isOpen && (
                  <div className="faq-a-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
