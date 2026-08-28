import React, { useState } from 'react';
import { Video } from 'lucide-react';
import './FeaturesGrid.css';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  videoUrl?: string; // Add your video path/URL here later (e.g. "/assets/billing-demo.mp4")
}

export const FeaturesGrid: React.FC = () => {
  const [activeVideoFeature, setActiveVideoFeature] = useState<FeatureItem | null>(null);

  const whyFeatures: FeatureItem[] = [
    {
      id: "billing",
      title: "Billing Delays & Calculation Errors",
      description: "Scan barcodes & bill ready! You just have to scan the barcodes and it will generate bill with proper mrp & discount calculations. Get printed reciept as well. All under 15 seconds!",
      videoUrl: "" // Add your video path here later
    },
    {
      id: "expiry",
      title: "Expiry Losses & Purchase Decisions",
      description: "Get notification of near expiry products. Software will force you sell old stocks first to save losses. Save atleast 500/- each month. AI based suggestion for purchase decisions.",
      videoUrl: "" // Add your video path here later
    },
    {
      id: "ai-stock",
      title: "Manual Stock Loading Headaches",
      description: "Just click a image of purchase bill and upload in software. AI analyze the bill and will automatically update stock with ~90% accuracy. It saves the headache of daily manual stock loading.",
      videoUrl: "" // Add your video path here later
    }
  ];

  const handleOpenVideo = (feature: FeatureItem) => {
    setActiveVideoFeature(feature);
  };

  const handleCloseVideo = () => {
    setActiveVideoFeature(null);
  };

  return (
    <section className="section-padding why-medix-section" id="features">
      <div className="container">

        {/* Clean Standard Section Header */}
        <div className="section-header center">
          <h2>What Problem Medix Solves?</h2>

        </div>

        {/* 3-Column Grid */}
        <div className="why-grid">
          {whyFeatures.map((item) => (
            <div className="why-card medix-card" key={item.id}>

              {/* Title & Description */}
              <h3 className="why-item-title">{item.title}</h3>
              <p className="why-item-desc">{item.description}</p>

              {/* Demo Video Trigger Button */}
              <div className="why-card-action">
                <button
                  className="btn-demo-video"
                  onClick={() => handleOpenVideo(item)}
                  title={`Watch demo for ${item.title}`}
                >
                  <Video size={16} className="btn-video-icon" />
                  <span className="btn-demo-text">Watch Feature Demo</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>



      {/* Feature Demo Video Modal */}
      {activeVideoFeature && (
        <div className="feature-video-modal-backdrop" onClick={handleCloseVideo}>
          <div className="feature-video-modal-content" onClick={(e) => e.stopPropagation()}>

            <div className="feature-video-modal-header">
              <div className="modal-title-wrap">
                <h3>{activeVideoFeature.title} — Feature Demo</h3>
              </div>
              <button className="feature-video-close-btn" onClick={handleCloseVideo} aria-label="Close modal">
                &times;
              </button>
            </div>

            <div className="feature-video-player-container">
              {activeVideoFeature.videoUrl ? (
                <video controls autoPlay className="feature-demo-video">
                  <source src={activeVideoFeature.videoUrl} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <div className="video-placeholder-box">
                  <h4>Demo Video Coming Soon</h4>
                  <p>
                    Add your video file path in the <code>videoUrl</code> property inside <code>FeaturesGrid.tsx</code>.
                  </p>
                </div>
              )}
            </div>

            <div className="feature-video-modal-footer">
              <p className="modal-feature-desc">{activeVideoFeature.description}</p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};




