import React from 'react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-padding about-section" id="about">
      <div className="container">

        <div className="section-header">
          <h2>About Medix</h2>
        </div>

        <div className="about-text-container">
          <p className="about-text-p">
            The idea came to me in December 2025. A close friend of mine was working at a pharmacy store, and one day he reached out knowing I was a software developer. The store was struggling — managing stock levels and tracking medicine expiry dates had become a serious challenge.
          </p>

          <p className="about-text-p">
            Everything was recorded on paper, and keeping up with it all had turned into a nightmare. That's when it clicked for me. I decided to build something that could genuinely help them run their store more efficiently and effectively. That's how MediX was born.
          </p>

          <p className="about-text-p">
            "My vision is to create a solution that not only simplifies pharmacy management but empowers store owners to focus on what they do best."
          </p>

          <p className="about-text-p">
            The goal at first was to just make an app for the store, but later it grew in my mind to start it as a startup. I'm the lead developer and founder, with two more members in sales and onboarding, and we are deeply committed to making MediX the best it can be. I believe that with the right tools, even small pharmacies can thrive in today's competitive landscape.
          </p>
        </div>

      </div>
    </section>
  );
};
