import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAudit = () => {
    const isMobile = window.innerWidth < 768;
    const element = document.getElementById(isMobile ? 'audit-form' : 'audit-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative py-24 bg-brand-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* Social Proof Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-300 bg-brand-800 w-fit mx-auto px-4 py-2 rounded-full border border-brand-700 mb-8">
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="font-semibold text-white">5.0 Vásárlói visszajelzés</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Tudd meg 48 órán belül, hogyan szerezz <span className="text-brand-accent">3x több vásárlót</span> anélkül, hogy többet költenél marketingre.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mt-8">
            Hiába küldesz látogatókat az oldaladra drága hirdetésekkel, ha a kattintásokból végül nem lesz üzlet. Adatvezérelt oldalakat készítünk, hogy a hirdetéseid végre ne költséget, hanem profitot termeljenek neked.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToAudit}
              className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Nézd meg, hol veszítesz jelenleg pénzt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;