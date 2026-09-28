import React from 'react';
import './Footer.css';

interface FooterProps {
  onTabChange?: (tabId: string, hash: string) => void;
  isDesktop?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange, isDesktop = false }) => {

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, tabId: string, hash: string) => {
    if (isDesktop && onTabChange) {
      e.preventDefault();
      onTabChange(tabId, hash);
    }
  };

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
              <li><a href="#features" onClick={e => handleLink(e, 'features', '#features')}>Billing</a></li>
              <li><a href="#modules" onClick={e => handleLink(e, 'modules', '#modules')}>Inventory</a></li>
              <li><a href="#modules" onClick={e => handleLink(e, 'modules', '#modules')}>Purchasing</a></li>
              <li><a href="#modules" onClick={e => handleLink(e, 'modules', '#modules')}>Expiry Management</a></li>
            </ul>
          </div>

          {/* Col 3: COMPANY */}
          <div className="f-col">
            <h4 className="f-col-title">COMPANY</h4>
            <ul className="f-links-list">
              <li><a href="#about" onClick={e => handleLink(e, 'about', '#about')}>About Us</a></li>
              <li><a href="#pricing" onClick={e => handleLink(e, 'pricing', '#pricing')}>Pricing</a></li>
              <li><a href="#faq" onClick={e => handleLink(e, 'contact', '#faq')}>Contact</a></li>
              <li><a href="#faq" onClick={e => handleLink(e, 'contact', '#faq')}>FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: SUPPORT */}
          <div className="f-col">
            <h4 className="f-col-title">SUPPORT</h4>
            <ul className="f-links-list">
              <li><a href="#specifications" onClick={e => handleLink(e, 'specs', '#specifications')}>Technical Specs</a></li>
              <li><a href="#faq" onClick={e => handleLink(e, 'contact', '#faq')}>Privacy Policy</a></li>
              <li><a href="#faq" onClick={e => handleLink(e, 'contact', '#faq')}>Terms of Service</a></li>
              <li><a href="#faq" onClick={e => handleLink(e, 'contact', '#faq')}>GST Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Plain Text Desktop Actions Bar */}
        <div className="footer-desktop-actions">
          <a href="tel:+918101402916">Call (+91 81014 02916)</a>
          <span className="f-policy-sep">|</span>
          <a href="https://www.linkedin.com/company/medix-erp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="f-policy-sep">|</span>
          <a href="https://chat.whatsapp.com/CY7B1oY6YQGAxyF0ya7uiJ" target="_blank" rel="noopener noreferrer">Join our WhatsApp group for job opportunities</a>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-copyright-bar">
          <p>© 2026 Medix. All rights reserved. | UDYAM Registered</p>
          <div className="f-policy-links">
            <a href="#">Privacy Policy</a>
            <span className="f-policy-sep">|</span>
            <a href="#">Terms</a>
            <span className="f-policy-sep">|</span>
            <a href="#faq" onClick={e => handleLink(e, 'contact', '#faq')}>Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
