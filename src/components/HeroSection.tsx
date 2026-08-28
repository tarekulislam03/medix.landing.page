import React, { useRef, useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import inshotShowcaseVideo from '../assets/inshot-showcase-compressed.mp4';
import './HeroSection.css';

interface HeroSectionProps { }

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Play video on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Hero video autoplay deferred:', err);
      });
    }
  }, []);

  // Background Particles Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Object - Increased Density
    const particleCount = 85;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2.5 + 1.2,
        alpha: Math.random() * 0.45 + 0.15,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles & connecting lines
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`; // Emerald green ambient particle
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.16 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="section-padding hero-corporate-section">
      {/* Background Particles Canvas */}
      <canvas ref={canvasRef} className="hero-particles-canvas" />

      <div className="container hero-content-container">
        <div className="hero-grid">

          {/* LEFT COLUMN: Enterprise Value Proposition */}
          <div className="hero-text-col">

            <h1 className="hero-main-title">
              India's <span className="hero-highlight-num">#1</span> Pharmacy Management Software
            </h1>

            <p className="hero-description">
              Built for pharmacy owners to make daily shop management effortless. Create lightning-fast GST bills, stop medicine expiry losses, track your stock automatically, and keep your counter running smoothly even without internet.
            </p>

            <div className="hero-btn-group">
              <a href="tel:+918101402916" className="btn-hero-primary">
                <Phone size={18} />
                Discuss on Call
              </a>

              <a href="#features" className="btn-hero-secondary">
                What Medix Solves
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Video Interface Demo */}
          <div className="hero-visual-col">
            <div className="erp-window-frame medix-card">
              {/* Skeleton loader - visible until video is ready */}
              <div className={`hero-video-skeleton ${videoLoaded ? 'hero-video-skeleton--hidden' : ''}`}>
                <div className="hero-video-skeleton__shimmer" />
                <div className="hero-video-skeleton__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls
                className={`erp-screenshot-img ${videoLoaded ? 'erp-screenshot-img--loaded' : 'erp-screenshot-img--loading'}`}
                style={{ borderRadius: 'var(--radius-card)', display: 'block', width: '100%' }}
                onLoadedData={() => setVideoLoaded(true)}
              >
                <source src={inshotShowcaseVideo} type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
