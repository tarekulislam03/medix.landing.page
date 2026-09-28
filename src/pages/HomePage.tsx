import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { PricingSection } from '../components/PricingSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { FeatureTable } from '../components/FeatureTable';
import { DifferentiatorSection } from '../components/DifferentiatorSection';
import { TabletShowcase } from '../components/TabletShowcase';
import { SpecificationsTable } from '../components/SpecificationsTable';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { WhatsAppWidget } from '../components/WhatsAppWidget';

export function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="medix-app">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection onOpenDemo={handleOpenDemo} />
        <FeaturesGrid />
        <FeatureTable />
        <DifferentiatorSection />
        <TabletShowcase />
        <SpecificationsTable />
        <FAQSection />
      </main>

      <Footer />

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
      <WhatsAppWidget />
    </div>
  );
}

export default HomePage;
