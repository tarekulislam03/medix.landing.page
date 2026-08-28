import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ChevronDown,
  Check,
  TrendingUp,
  Users,
  HandCoins,
  Megaphone,
  ShieldCheck,
  Headphones,
  BookOpen,
  Palette,
  ArrowRight,
  Handshake,
  Trophy,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import './DealersPage.css';

/* FAQ data for distribution partners */
const dealerFaqs = [
  {
    q: 'Is there any registration fee or minimum commitment?',
    a: 'No. There is zero joining cost and no minimum sales target. You register your company, get approved, and begin earning from the very first sale.',
  },
  {
    q: 'Does our team need technical expertise to sell Medix?',
    a: 'Not at all. Medix handles all product demos, installation, onboarding, and after-sales technical support. Your sales team simply needs to introduce the product to pharmacy owners — we close and service the deal.',
  },
  {
    q: 'How and when are commissions disbursed?',
    a: 'Commissions are settled within 7 working days of customer payment via bank transfer (NEFT/RTGS/UPI) to your company account. A detailed payout statement is shared with every cycle.',
  },
  {
    q: 'Are territories exclusive?',
    a: 'We do not enforce strict territorial exclusivity. However, a lead-locking mechanism ensures that the first distributor to register a pharmacy lead gets full credit for that conversion.',
  },

  {
    q: 'What sales and marketing support does Medix provide?',
    a: 'Every distribution partner receives co-branded marketing collateral, product demo videos, WhatsApp creatives, and access to a dedicated channel manager for joint sales calls when needed.',
  },
];

export const DealersPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="medix-app">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      <main>
        {/* ───── Hero Banner ───── */}
        <section className="dealers-hero">
          <div className="container">
            <div className="dealers-hero-content">
              <span className="eyebrow-label">DISTRIBUTION PARTNER PROGRAM</span>
              <h1 className="dealers-hero-title">
                Add Pharmacy Software to Your <span>Distribution Portfolio</span>
              </h1>
              <p className="dealers-hero-desc">
                Partner with Medix to offer India's leading pharmacy management software alongside your existing product line. High-margin, zero-inventory addition to your distribution business.
              </p>
              <div className="dealers-hero-actions">
                <a href="tel:+918101402916" className="btn-hero-primary">
                  <Phone size={18} />
                  Discuss Partnership
                </a>
                <a href="#how-it-works" className="btn-hero-outline">
                  See How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Stats Strip ───── */}
        <section className="dealers-stats-strip">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">30<span>%</span></div>
                <div className="stat-label">Partner Commission</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">₹0</div>
                <div className="stat-label">Onboarding Cost</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">7<span> Days</span></div>
                <div className="stat-label">Payout Cycle</div>
              </div>
              <div className="stat-item">
                <div className="stat-number mono-text">∞</div>
                <div className="stat-label">No Territory Restriction</div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Why Partner With Medix ───── */}
        <section className="dealers-why">
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow-label">WHY DISTRIBUTE MEDIX</span>
              <h2>Built for Distribution Companies Like Yours</h2>
              <p>A zero-inventory, high-margin software product that complements your existing pharma distribution business.</p>
            </div>

            <div className="dealers-why-grid">
              <div className="why-card">
                <div className="why-card-icon">
                  <HandCoins size={22} />
                </div>
                <h3>High-Margin Revenue Stream</h3>
                <p>Earn up to 30% on every license and setup package. Unlike physical goods, software carries zero logistics cost and near-100% margins for your company.</p>
              </div>

              <div className="why-card">
                <div className="why-card-icon">
                  <Users size={22} />
                </div>
                <h3>Zero Inventory, Zero Risk</h3>
                <p>No stock to purchase, warehouse, or maintain. No MOQ. Your company invests nothing upfront — just leverage your existing pharmacy retailer network.</p>
              </div>

              <div className="why-card">
                <div className="why-card-icon">
                  <Megaphone size={22} />
                </div>
                <h3>Co-Branded Marketing</h3>
                <p>Receive ready-to-deploy brochures, WhatsApp creatives, demo videos, and co-branded collateral your field team can use immediately.</p>
              </div>

              <div className="why-card">
                <div className="why-card-icon">
                  <ShieldCheck size={22} />
                </div>
                <h3>Proven Product, Easy Conversions</h3>
                <p>Medix is already trusted by pharmacy retailers. Affordable one-time pricing and a live demo make it an easy addition to any sales conversation.</p>
              </div>

              <div className="why-card">
                <div className="why-card-icon">
                  <Headphones size={22} />
                </div>
                <h3>Dedicated Channel Manager</h3>
                <p>Your company gets a dedicated Medix channel manager for joint calls, escalation support, and coordinated go-to-market strategy in your region.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Commission Structure ───── */}
        <section className="dealers-commission" id="commission">
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow-label">COMMISSION STRUCTURE</span>
              <h2>Transparent Partner Economics</h2>
              <p>Simple, upfront commission on every sale your team closes. Settled fast, every cycle.</p>
            </div>

            <div className="commission-layout">
              {/* Left: explanation */}
              <div className="commission-explanation">
                <h3>How Partner Earnings Work</h3>
                <p>
                  Your company earns a flat percentage on every Medix license and setup package sold through your distribution network. 
                  There's no cap on volume — the more pharmacies your team connects, the more your company earns.
                </p>

                <ul className="commission-highlights">
                  <li>
                    <Check size={16} className="hl-check" />
                    <span>Commission settled within 7 working days</span>
                  </li>
                  <li>
                    <Check size={16} className="hl-check" />
                    <span>Payout via NEFT / RTGS to company account</span>
                  </li>
                  <li>
                    <Check size={16} className="hl-check" />
                    <span>Partner dashboard to track leads, conversions & payouts</span>
                  </li>
                  <li>
                    <Check size={16} className="hl-check" />
                    <span>No cap on monthly volume or earnings</span>
                  </li>
                </ul>
              </div>

              {/* Right: tiers table */}
              <div className="commission-tiers-card">
                <div className="tiers-header">Commission Breakdown per Sale</div>

                <div className="tier-row">
                  <div className="tier-name">
                    Prime License
                    <span className="tier-label">Software only (₹4,999)</span>
                  </div>
                  <div className="tier-commission">30%</div>
                  <div className="tier-earnings">≈ ₹1,500 / sale</div>
                </div>

                <div className="tier-row featured-tier">
                  <div className="tier-name">
                    Infinity Package
                    <span className="tier-label">Software + Full Setup (₹7,999)</span>
                  </div>
                  <div className="tier-commission">30%</div>
                  <div className="tier-earnings">≈ ₹2,400 / sale</div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* ───── How to Onboard ───── */}
        <section className="dealers-onboard" id="how-it-works">
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow-label">PARTNER ONBOARDING</span>
              <h2>Go Live in 4 Simple Steps</h2>
              <p>Minimal paperwork. Your company can start distributing within days.</p>
            </div>

            <div className="onboard-steps">
              <div className="onboard-step">
                <div className="step-number">1</div>
                <h3>Register Your Company</h3>
                <p>Share your company details and distribution profile. Our team verifies and approves within 24–48 hours.</p>
              </div>

              <div className="onboard-step">
                <div className="step-number">2</div>
                <h3>Receive Partner Kit</h3>
                <p>Get your unique partner ID, co-branded marketing collateral, product demo access, and field team training materials.</p>
              </div>

              <div className="onboard-step">
                <div className="step-number">3</div>
                <h3>Pitch to Your Network</h3>
                <p>Your field reps introduce Medix to pharmacy retailers in your existing network. Medix handles demo, setup, and support.</p>
              </div>

              <div className="onboard-step">
                <div className="step-number">4</div>
                <h3>Earn & Scale</h3>
                <p>Receive commission payouts every cycle. Track performance on the partner dashboard and scale at your pace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Support & Resources ───── */}
        <section className="dealers-support">
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow-label">PARTNER RESOURCES</span>
              <h2>Everything Your Team Needs to Sell</h2>
            </div>

            <div className="support-grid">
              <div className="support-card">
                <div className="support-card-icon">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4>Field Team Training</h4>
                  <p>Short video walkthroughs and product explainers your sales reps can learn in under 30 minutes.</p>
                </div>
              </div>

              <div className="support-card">
                <div className="support-card-icon">
                  <Palette size={20} />
                </div>
                <div>
                  <h4>Co-Branded Collateral</h4>
                  <p>Ready-to-share WhatsApp creatives, PDF brochures, and product one-pagers in Hindi &amp; English.</p>
                </div>
              </div>

              <div className="support-card">
                <div className="support-card-icon">
                  <Handshake size={20} />
                </div>
                <div>
                  <h4>Joint Sales Calls</h4>
                  <p>Need help closing a large account? Our sales team can join the call or visit alongside your field rep.</p>
                </div>
              </div>

              <div className="support-card">
                <div className="support-card-icon">
                  <Headphones size={20} />
                </div>
                <div>
                  <h4>Dedicated Channel Manager</h4>
                  <p>A single point of contact at Medix for your company — handling escalations, strategy, and day-to-day coordination.</p>
                </div>
              </div>

              <div className="support-card">
                <div className="support-card-icon">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4>Volume Incentives</h4>
                  <p>Quarterly performance bonuses and tiered incentive programs for high-performing distribution partners.</p>
                </div>
              </div>

              <div className="support-card">
                <div className="support-card-icon">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4>Partner Dashboard</h4>
                  <p>Real-time visibility into leads, conversions, pending payouts, and team performance from one dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Partner FAQ ───── */}
        <section className="dealers-faq">
          <div className="container">
            <div className="section-header center">
              <span className="eyebrow-label">FREQUENTLY ASKED</span>
              <h2>Partner Program FAQ</h2>
            </div>

            <div className="faq-list">
              {dealerFaqs.map((faq, i) => (
                <div className="faq-item" key={i}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${openFaq === i ? 'open' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Bottom CTA ───── */}
        <section className="dealers-cta">
          <div className="container">
            <div className="dealers-cta-content">
              <h2>Add Medix to Your Product Line</h2>
              <p>
                Zero investment. High margins. Partner with the pharmacy software pharmacies actually use.
              </p>
              <div className="cta-btn-group">
                <a href="tel:+918101402916" className="btn-cta-primary">
                  <Phone size={18} />
                  Discuss Partnership
                </a>
                <Link to="/" className="btn-cta-secondary">
                  <ArrowRight size={16} />
                  View Medix Product
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};
