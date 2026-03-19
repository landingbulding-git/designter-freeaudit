import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Closer from './Closer';
import Footer from './Footer';

const LandingPageContent: React.FC = () => {
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
        <Testimonials />
        <Closer />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageContent;
