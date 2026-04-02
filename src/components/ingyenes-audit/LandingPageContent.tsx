import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Steps from './Steps';
import ProcessSteps from './ProcessSteps';
import Comparison from './Comparison';
import Expert from './Expert';
import FAQ from './FAQ';
import Closer from './Closer';
import Footer from './Footer';

const LandingPageContent: React.FC = () => {
  const scrollToHeroForm = () => {
    const element = document.getElementById('hero-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="font-sans text-brand-900 bg-white">
      <Navbar onCtaClick={scrollToHeroForm} />
      <main>
        <Hero />
        <Steps />
        <ProcessSteps />
        <Comparison />
        <Expert onCtaClick={scrollToHeroForm} />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageContent;