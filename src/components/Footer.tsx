import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="corporate-footer">
      <div className="container">
        
        <div className="footer-columns-grid">
          
          {/* Col 1: MEDIX */}
          <div className="f-col">
            <div className="f-brand">
              <img src="/web-logo.png" alt="Medix Pharmacy Software" className="f-logo-img" />
            </div>
            <p className="f-about-text">
              Pharmacy Management & ERP Software for Indian medical stores and retail chemists.
            </p>
            <div className="f-contact-info">
              <span>Call: +91 98765 43210</span>
              <span>Email: support@medixerp.com</span>
            </div>
          </div>

          {/* Col 2: PRODUCT */}
          <div className="f-col">
            <h4 className="f-col-title">PRODUCT</h4>
            <ul className="f-links-list">
              <li><a href="#solutions">Billing</a></li>
              <li><a href="#solutions">Inventory</a></li>
              <li><a href="#solutions">Purchasing</a></li>
              <li><a href="#solutions">Expiry Management</a></li>
            </ul>
          </div>

          {/* Col 3: COMPANY */}
          <div className="f-col">
            <h4 className="f-col-title">COMPANY</h4>
            <ul className="f-links-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: SUPPORT */}
          <div className="f-col">
            <h4 className="f-col-title">SUPPORT</h4>
            <ul className="f-links-list">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">GST Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-copyright-bar">
          <p>© 2026 Medix. All rights reserved.</p>
          <p className="f-disclaimer">UDYAM Registered</p>
        </div>

      </div>
    </footer>
  );
};
