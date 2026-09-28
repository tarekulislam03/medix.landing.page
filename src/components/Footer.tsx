import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="corporate-footer">
      <div className="container">

        <div className="footer-columns-grid">

          {/* Col 1: MEDIX Brand Info */}
          <div className="f-col">
            <div className="f-brand">
              <img src="/web-logo.png" alt="Medix Pharmacy Software" className="f-logo-img" />
            </div>
            <p className="f-about-text">
              Pharmacy Management &amp; ERP Software for Indian medical stores and retail chemists.
            </p>
            <div className="f-contact-info">
              <span>Call: +91 81014 02916</span>
              <span>Email: support@medixerp.com</span>
            </div>
          </div>

          {/* Col 2: PRODUCT */}
          <div className="f-col">
            <h4 className="f-col-title">PRODUCT</h4>
            <ul className="f-links-list">
              <li><a href="#features">Billing</a></li>
              <li><a href="#modules">Inventory</a></li>
              <li><a href="#modules">Purchasing</a></li>
              <li><a href="#modules">Expiry Management</a></li>
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
              <li><a href="#specifications">Technical Specs</a></li>
              <li><a href="#faq">Privacy Policy</a></li>
              <li><a href="#faq">Terms of Service</a></li>
              <li><a href="#faq">GST Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-copyright-bar">
          <p>© 2026 Medix. All rights reserved. | UDYAM Registered</p>
          <div className="f-policy-links">
            <a href="#">Privacy Policy</a>
            <span className="f-policy-sep">|</span>
            <a href="#">Terms</a>
            <span className="f-policy-sep">|</span>
            <a href="#faq">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
