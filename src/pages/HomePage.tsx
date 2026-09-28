import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { PricingSection } from '../components/PricingSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { FeatureTable } from '../components/FeatureTable';
import { TabletShowcase } from '../components/TabletShowcase';
import { SpecificationsTable } from '../components/SpecificationsTable';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { WhatsAppWidget } from '../components/WhatsAppWidget';

// Tab definitions: id, label, hash anchors that belong to this tab, breadcrumb label, title
const TABS = [
  { id: 'home',         label: 'Home',     hashes: ['', '#', '#home'],                  crumb: 'Pharmacy Management Software', title: 'Home - Medix' },
  { id: 'features',    label: 'Features',  hashes: ['#features'],                       crumb: 'Features',   title: 'Features - Medix' },
  { id: 'modules',     label: 'Modules',   hashes: ['#modules'],                        crumb: 'Modules',    title: 'Modules - Medix' },
  { id: 'pricing',     label: 'Pricing',   hashes: ['#pricing'],                        crumb: 'Pricing',    title: 'Pricing - Medix' },
  { id: 'specs',       label: 'Specs',     hashes: ['#specifications'],                 crumb: 'Specifications', title: 'Specs - Medix' },
  { id: 'about',       label: 'About',     hashes: ['#about'],                          crumb: 'About',      title: 'About - Medix' },
  { id: 'contact',     label: 'Contact',   hashes: ['#faq', '#contact'],                crumb: 'Contact',    title: 'Contact - Medix' },
];

function hashToTab(hash: string): string {
  const h = hash.toLowerCase();
  for (const tab of TABS) {
    if (tab.hashes.includes(h)) return tab.id;
  }
  return 'home';
}

const DESKTOP_MQ = '(min-width: 1024px)';

function isDesktop(): boolean {
  return window.matchMedia(DESKTOP_MQ).matches;
}

export function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(() => hashToTab(window.location.hash));
  const [desktop, setDesktop] = useState(() => isDesktop());

  const handleOpenDemo = useCallback(() => setIsDemoModalOpen(true), []);
  const handleCloseDemo = useCallback(() => setIsDemoModalOpen(false), []);

  // Resolve tab from hash and update document title
  const applyHash = useCallback((hash: string) => {
    const tab = hashToTab(hash);
    setActiveTab(tab);
    const found = TABS.find(t => t.id === tab);
    if (found) document.title = found.title;
  }, []);

  // Navigate to a tab (desktop) or just follow the link (mobile)
  const goTab = useCallback((tabId: string, hash: string) => {
    if (!isDesktop()) return;
    const found = TABS.find(t => t.id === tabId);
    if (!found) return;
    const anchor = found.hashes.find(h => h.startsWith('#')) || found.hashes[0];
    window.history.pushState(null, '', anchor || '/');
    setActiveTab(tabId);
    document.title = found.title;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    // suppress default anchor scroll
    hash; // referenced to avoid lint
  }, []);

  // Listen to browser back/forward
  useEffect(() => {
    const onPop = () => applyHash(window.location.hash);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [applyHash]);

  // Respond to hash changes (mobile smooth scroll links should still work)
  useEffect(() => {
    const onHash = () => {
      if (isDesktop()) {
        applyHash(window.location.hash);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [applyHash]);

  // Respond to viewport resize across the breakpoint
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const onChange = (e: MediaQueryListEvent) => {
      setDesktop(e.matches);
      if (e.matches) {
        // switching to desktop: resolve tab from current hash
        applyHash(window.location.hash);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [applyHash]);

  const activeTabData = TABS.find(t => t.id === activeTab) || TABS[0];

  // Section visibility helper — on mobile all are visible; on desktop only active tab's sections show
  const tabVis = desktop ? activeTab : 'all';

  return (
    <div className="medix-app" data-tab={tabVis}>
      <Navbar
        onOpenDemo={handleOpenDemo}
        activeTab={activeTab}
        onTabChange={goTab}
        breadcrumb={activeTabData.crumb}
        isDesktop={desktop}
      />

      <main className="desktop-tab-content">
        {/* HOME tab */}
        <div className="tab-section" data-tabs="home">
          <HeroSection onTabChange={goTab} />
          <FeaturesGrid />
        </div>

        {/* FEATURES tab */}
        <div className="tab-section" data-tabs="features">
          <TabletShowcase />
        </div>

        {/* MODULES tab */}
        <div className="tab-section" data-tabs="modules">
          <FeatureTable />
        </div>

        {/* PRICING tab */}
        <div className="tab-section" data-tabs="pricing">
          <PricingSection onOpenDemo={handleOpenDemo} />
        </div>

        {/* SPECS tab */}
        <div className="tab-section" data-tabs="specs">
          <SpecificationsTable />
        </div>

        {/* ABOUT tab */}
        <div className="tab-section" data-tabs="about">
          <AboutSection />
        </div>

        {/* CONTACT tab */}
        <div className="tab-section" data-tabs="contact">
          <FAQSection />
        </div>
      </main>

      <Footer onTabChange={goTab} isDesktop={desktop} />

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
      <WhatsAppWidget />
    </div>
  );
}

export default HomePage;
