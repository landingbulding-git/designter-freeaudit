import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Steps from './Steps';
import ProcessSteps from './ProcessSteps';
import Comparison from './Comparison';
import Expert from './Expert';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPageContent: React.FC = () => {
  const scrollToCloserAudit = () => {
    // Scroll to the Hero form if needed, or other sections
    const element = document.getElementById('hero-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="font-sans text-brand-900 bg-white">
      <Navbar onCtaClick={scrollToCloserAudit} />
      <main>
        <Hero onCtaClick={scrollToCloserAudit} />
        <Steps />
        <ProcessSteps />
        <Comparison />
        <Expert onCtaClick={scrollToCloserAudit} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageContent;