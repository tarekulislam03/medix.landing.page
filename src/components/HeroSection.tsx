import React, { useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import inshotShowcaseVideo from '../assets/inshot-showcase-compressed.mp4';
import './HeroSection.css';

interface HeroSectionProps {
  onTabChange?: (tabId: string, hash: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onTabChange }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Hero video autoplay deferred:', err);
      });
    }
  }, []);

  const handleFeatureClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onTabChange && window.matchMedia('(min-width: 1024px)').matches) {
      e.preventDefault();
      onTabChange('features', '#features');
    }
  };

  return (
    <section className="section-padding hero-corporate-section" id="home">
      <div className="container hero-content-container">
        <div className="hero-grid">

          {/* LEFT COLUMN: Hero text aligned to top */}
          <div className="hero-text-col">
            <h1 className="hero-main-title">
              India's #1 Pharmacy Management Software
            </h1>

            <p className="hero-description">
              Built for pharmacy owners to make daily shop management effortless. Create lightning-fast GST bills, stop medicine expiry losses, track your stock automatically, and keep your counter running smoothly even without internet.
            </p>

            <div className="hero-btn-group">
              <a href="tel:+918101402916" className="btn btn-primary btn-lg">
                <Phone size={14} />
                Discuss on Call
              </a>

              <a href="#features" className="btn btn-secondary btn-lg" onClick={handleFeatureClick}>
                What Medix Solves
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Video Demo */}
          <div className="hero-visual-col">
            <div className="hero-video-box medix-card">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="hero-video-element"
              >
                <source src={inshotShowcaseVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
