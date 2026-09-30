import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const HOME_TABS = [
  { id: 'home',      label: 'Home',     hash: '#'              },
  { id: 'features',  label: 'Features', hash: '#features'      },
  { id: 'modules',   label: 'Modules',  hash: '#modules'       },
  { id: 'pricing',   label: 'Pricing',  hash: '#pricing'       },
  { id: 'specs',     label: 'Specs',    hash: '#specifications' },
  { id: 'about',     label: 'About',    hash: '#about'         },
  { id: 'contact',   label: 'Contact',  hash: '#faq'           },
];

interface NavbarProps {
  onOpenDemo: () => void;
  activeTab?: string;
  onTabChange?: (tabId: string, hash: string) => void;
  breadcrumb?: string;
  isDesktop?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  activeTab = 'home',
  onTabChange,
  breadcrumb = 'Pharmacy Management Software',
  isDesktop = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: string, hash: string) => {
    if (isDesktop && isHome && onTabChange) {
      e.preventDefault();
      onTabChange(tabId, hash);
    }
  };

  return (
    <header className="header-master-wrapper">

      {/* TOP INFORMATION BAR (24px height) */}
      <div className="top-info-bar">
        <div className="container top-info-container">
          <div className="top-info-left">
            <span>Pharmacy Management Software System</span>
          </div>
          <div className="top-info-right">
            <a
              href="#faq"
              className="top-info-link"
              onClick={e => isDesktop && isHome && onTabChange ? (e.preventDefault(), onTabChange('contact', '#faq')) : undefined}
            >Support</a>
            <span className="top-sep">|</span>
            <a
              href="#faq"
              className="top-info-link"
              onClick={e => isDesktop && isHome && onTabChange ? (e.preventDefault(), onTabChange('contact', '#faq')) : undefined}
            >Contact</a>
            <span className="top-sep">|</span>
            <a href="tel:+918101402916" className="top-phone">
              +91 81014 02916
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="main-header">
        <div className="container header-container">

          {/* Left: Medix Logo */}
          <Link to="/" className="navbar-brand">
            <img src="/web-logo.png" alt="Medix Logo" className="brand-logo-img" />
          </Link>

          {/* Navigation Links */}
          <nav className="navbar-nav">
            {isHome ? (
              <>
                {HOME_TABS.map(tab => (
                  <a
                    key={tab.id}
                    href={tab.hash}
                    className={`nav-link${isDesktop && activeTab === tab.id ? ' active' : ''}`}
                    onClick={e => handleTabClick(e, tab.id, tab.hash)}
                  >
                    {tab.label}
                  </a>
                ))}
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/#features" className="nav-link">Features</Link>
                <Link to="/#pricing" className="nav-link">Pricing</Link>
              </>
            )}
            <Link to="/dealers" className={`nav-link${location.pathname === '/dealers' ? ' active' : ''}`}>Careers</Link>
          </nav>

          {/* Right Action Button */}
          <div className="navbar-actions">
            <button
              onClick={() => isDesktop && isHome && onTabChange ? onTabChange('contact', '#faq') : onOpenDemo()}
              className="btn-corporate-demo"
            >
              Book a Demo
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Breadcrumb line under nav */}
      <div className="breadcrumb-bar">
        <div className="container">
          {isHome ? (
            <>
              <a href="#" onClick={e => isDesktop && onTabChange ? (e.preventDefault(), onTabChange('home', '#')) : undefined}>Home</a>
              {isDesktop && activeTab !== 'home' && (
                <>
                  <span className="breadcrumb-sep">&gt;</span>
                  <span>{breadcrumb}</span>
                </>
              )}
            </>
          ) : (
<<<<<<< HEAD
            <>
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">&gt;</span>
              <Link to="/dealers">Dealers &amp; Partners</Link>
            </>
=======
            <Link to="/internnships">Careers &amp; Internships</Link>
>>>>>>> 5252c64
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {isHome ? (
            <>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#modules" onClick={() => setMobileMenuOpen(false)}>Modules</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#specifications" onClick={() => setMobileMenuOpen(false)}>Specs</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </>
          ) : (
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          )}
          <Link to="/internships" onClick={() => setMobileMenuOpen(false)}>Careers &amp; Internships</Link>
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
