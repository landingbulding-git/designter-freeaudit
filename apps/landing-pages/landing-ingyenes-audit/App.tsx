import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import ValueProps from './components/ValueProps';
import Process from './components/Process';
import Expert from './components/Expert';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Closer from './components/Closer';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

const MainLayout: React.FC = () => {
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
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;