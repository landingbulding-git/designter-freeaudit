import React, { useEffect } from 'react';
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
import Footer from './Footer';
import { getCalApi } from "@calcom/embed-react";

const HomePageContent: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15perc"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const scrollToCloserAudit = () => {
    const element = document.getElementById('closer-audit-heading');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="font-sans text-brand-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemAgitation />
        <Testimonials />
        <Process />
        <ValueProps />
        <Expert />
        <Pricing onCtaClick={scrollToCloserAudit} />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </div>
  );
};

export default HomePageContent;
