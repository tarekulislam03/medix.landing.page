import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { TabletShowcase } from './components/TabletShowcase';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="medix-app">
      {/* Sticky Compact Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesGrid />
        <DifferentiatorSection />
        <TabletShowcase />
        <PricingSection onOpenDemo={handleOpenDemo} />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Demo Request Modal Dialog */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}

export default App;
