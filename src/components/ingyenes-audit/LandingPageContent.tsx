import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Comparison from './Comparison';
import Footer from './Footer';

const LandingPageContent: React.FC = () => {
  const scrollToCloserAudit = () => {
    // If you need it to scroll somewhere later, we can adjust this. 
    // Right now it just triggers from the Hero, but the form is embedded in the Hero anyway.
    console.log("CTA Clicked");
  };

  return (
    <div className="font-sans text-brand-900 bg-white">
      <Navbar onCtaClick={scrollToCloserAudit} />
      <main>
        <Hero onCtaClick={scrollToCloserAudit} />
        <Comparison />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageContent;