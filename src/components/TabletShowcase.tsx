import React, { useState, useEffect } from 'react';
import billingImg from '../assets/app.usemedix.online_billing.png';
import inventoryImg from '../assets/app.usemedix.online_inventory.png';
import purchaseImg from '../assets/app.usemedix.online_purchase.png';
import analyticsImg from '../assets/app.usemedix.online_analytics.png';
import savingsImg from '../assets/app.usemedix.online_savings.png';
import './TabletShowcase.css';

const carouselSlides = [
  { id: 1, img: billingImg, title: 'GST Counter Billing POS' },
  { id: 2, img: inventoryImg, title: 'Smart Stock & Batch Control' },
  { id: 3, img: purchaseImg, title: 'Distributor Invoice Entry' },
  { id: 4, img: analyticsImg, title: 'Sales & Financial Analytics' },
  { id: 5, img: savingsImg, title: 'Expiry & Return Management' },
];

export const TabletShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding tablet-corporate-section">
      <div className="container">
        
        <div className="tablet-corp-grid">
          
          {/* Left Text */}
          <div className="tablet-corp-text">
            <div className="eyebrow-label">COMPLETE PHARMACY FEATURES</div>
            <h2>All-in-One Pharmacy Management System</h2>
            <p>
              Take full control of your medical store with fast counter billing, automated inventory control, purchase bill entry, and live profit tracking.
            </p>

            <div className="t-grid-features">
              <div className="t-feat">
                <div>
                  <h4>Lightning Fast GST Billing</h4>
                  <p>Scan barcodes, auto-apply discounts, and print thermal bills in seconds.</p>
                </div>
              </div>

              <div className="t-feat">
                <div>
                  <h4>Batch & Expiry Radar</h4>
                  <p>Track medicine rack numbers and get 30/60/90 day expiry return alerts.</p>
                </div>
              </div>

              <div className="t-feat">
                <div>
                  <h4>Automated Purchase Orders</h4>
                  <p>Upload distributor bills, track stock inwards, and manage supplier ledgers.</p>
                </div>
              </div>

              <div className="t-feat">
                <div>
                  <h4>Live Profit Analytics</h4>
                  <p>Monitor daily counter sales, profit margins, and store performance in real time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual: Screenshot Carousel */}
          <div className="tablet-corp-visual">
            <div className="t-framed-box medix-card">
              <div className="t-real-img-wrap">
                <div 
                  className="t-carousel-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {carouselSlides.map((slide) => (
                    <div className="t-slide-item" key={slide.id}>
                      <img 
                        src={slide.img} 
                        alt={slide.title} 
                        className="t-screenshot-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
