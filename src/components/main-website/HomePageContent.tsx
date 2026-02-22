import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProblemAgitation from './ProblemAgitation';
import ValueProps from './ValueProps';
import Process from './Process';
import Expert from './Expert';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Closer from './Closer';

const HomePageContent: React.FC = () => {
  const scrollToCloserAudit = () => {
    const element = document.getElementById('closer-audit-heading');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="font-sans text-brand-900 bg-white">
      <Navbar onCtaClick={scrollToCloserAudit} />
      <main>
        <Hero onCtaClick={scrollToCloserAudit} />
        <ProblemAgitation onCtaClick={scrollToCloserAudit} />
        <Testimonials />
        <Process />
        <ValueProps />
        <Expert onCtaClick={scrollToCloserAudit} />
        <Pricing onCtaClick={scrollToCloserAudit} />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </div>
  );
};

export default HomePageContent;
