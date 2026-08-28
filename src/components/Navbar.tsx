import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header-master-wrapper">

      {/* TOP INFORMATION BAR (30px height) */}
      <div className="top-info-bar">
        <div className="container top-info-container">
          <div className="top-info-left">
            <span>Pharmacy Management Software</span>
          </div>
          <div className="top-info-right">
            <a href="#faq" className="top-info-link">Support</a>
            <span className="top-sep">|</span>
            <a href="#faq" className="top-info-link">Contact</a>
            <span className="top-sep">|</span>
            <a href="tel:+918101402916" className="top-phone">
              +91 81014 02916
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION (72px height) */}
      <div className="main-header">
        <div className="container header-container">

          {/* Left: Medix Logo */}
          <Link to="/" className="navbar-brand">
            <img src="/web-logo.png" alt="Medix Logo" className="brand-logo-img" />
          </Link>

          {/* Navigation Links: Home, Features, Solutions, Pricing, About, Contact */}
          <nav className="navbar-nav">
            {isHome ? (
              <>
                <a href="#" className="nav-link active">Home</a>
                <a href="#features" className="nav-link">Features</a>
                <a href="#solutions" className="nav-link">Solutions</a>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#faq" className="nav-link">Contact</a>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/#features" className="nav-link">Features</Link>
                <Link to="/#pricing" className="nav-link">Pricing</Link>
              </>
            )}
            <Link to="/dealers" className={`nav-link${location.pathname === '/dealers' ? ' active' : ''}`}>Dealers</Link>
          </nav>

          {/* Right Action Button: Rectangular 4px border radius dark green button */}
          <div className="navbar-actions">
            <button
              onClick={onOpenDemo}
              className="btn-corporate-demo"
            >
              Book a Demo
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {isHome ? (
            <>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </>
          ) : (
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          )}
          <Link to="/dealers" onClick={() => setMobileMenuOpen(false)}>Dealers</Link>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
            className="btn-corporate-demo mobile-demo-btn"
          >
            Book a Demo
          </button>
        </div>
      )}

    </header>
  );
};
