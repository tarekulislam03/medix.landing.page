import React, { useState } from 'react';
import './WhatsAppWidget.css';

// Editable links & contact details
const PHONE_NUMBER = '+918101402916';
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/CY7B1oY6YQGAxyF0ya7uiJ';
const LINKEDIN_URL = 'https://www.linkedin.com/company/medix-erp/';

export const WhatsAppWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="social-floating-stack">
      {/* Call Button Above LinkedIn */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="social-float-btn call-btn"
        title="Discuss on Call (+91 81014 02916)"
        aria-label="Discuss on Call"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* LinkedIn Button Above WhatsApp */}
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="social-float-btn linkedin-btn"
        title="Follow Medix on LinkedIn"
        aria-label="Follow Medix on LinkedIn"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      </a>

      {/* WhatsApp Row (Job Notice Popup on Left + WhatsApp Button) */}
      <div className="wa-row-container">
        {isVisible && (
          <div className="wa-mini-popup">
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-popup-link"
            >
              Join WhatsApp group for job opportunities!
            </a>
            <button
              className="wa-mini-close"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsVisible(false);
              }}
              title="Dismiss notification"
            >
              ✕
            </button>
          </div>
        )}

        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="social-float-btn whatsapp-btn"
          title="Join WhatsApp Group for Job Opportunities"
          aria-label="Join WhatsApp Group for Job Opportunities"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.237a9.96 9.96 0 0 0 4.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985A9.985 9.985 0 0 0 12.012 2zm.003 16.516h-.003a8.3 8.3 0 0 1-4.23-1.162l-.303-.18-3.143.743.755-3.056-.197-.314a8.293 8.293 0 0 1-1.27-4.364c.001-4.577 3.728-8.303 8.304-8.303 2.217 0 4.301.864 5.869 2.433 1.567 1.568 2.43 3.652 2.43 5.871 0 4.577-3.727 8.304-8.303 8.304zm4.555-6.222c-.25-.125-1.477-.728-1.706-.811-.229-.083-.396-.125-.562.125-.166.25-.646.811-.792.978-.146.166-.292.187-.542.062a6.85 6.85 0 0 1-2.013-1.242 7.556 7.556 0 0 1-1.393-1.737c-.146-.25-.016-.385.109-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.416.083-.166.042-.312-.021-.438-.063-.125-.562-1.354-.771-1.854-.204-.488-.411-.422-.562-.43-.146-.008-.312-.01-.479-.01-.166 0-.437.062-.666.312-.229.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.166 1.764 2.695 4.275 3.777.597.257 1.064.411 1.428.526.6.191 1.146.164 1.577.1.48-.071 1.477-.604 1.685-1.187.208-.583.208-1.083.146-1.187-.062-.104-.229-.167-.479-.292z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
