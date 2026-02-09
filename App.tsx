import React from 'react';
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

const App: React.FC = () => {
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
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </div>
  );
};

export default App;