import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface PricingProps {
  onCtaClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  const features = [
    "Egyszerre egy aktív kérés",
    "Átlagosan 48 órán belüli módosítás",
    "Akár 3-4 komplett landing oldal havonta",
    "Profi, konverzió-fókuszú szövegírás",
    "Analitikai eszközök telepítése és monitoring",
    "Havi statisztikai riport és fejlesztési javaslat",
    "Ingyenes és korlátlan tárhely",
    "Korlátlan alap grafikai munkák",
    "Szüneteltetés vagy lemondás bármikor"
  ];

  return (
    <section className="py-24 bg-brand-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Egyetlen előfizetés, végtelen lehetőség.
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-accent rounded-3xl opacity-50 blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-1">Havi tagság</h3>
                  <p className="text-gray-400 text-sm">Nincs rejtett költség, nincs hűségidő.</p>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-xs font-semibold tracking-wider uppercase text-brand-accent">
                  Szüneteltetés vagy lemondás bármikor
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent border-t border-dashed border-white/20 mb-8"></div>

              {/* Price */}
              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black text-white">690.000 Ft</span>
                  <span className="text-xl text-gray-400 font-medium">/ hó</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">+ ÁFA</p>
              </div>

              {/* Features Container */}
              <div className="bg-brand-900/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-10 relative overflow-hidden">
                 {/* "INCLUDED" label */}
                 <div className="absolute top-0 left-8 -translate-y-1/2 bg-brand-800 text-[10px] font-bold tracking-widest uppercase text-gray-400 px-3 py-1 rounded border border-white/10 shadow-sm">
                    Tartalmazza
                 </div>

                 <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                        <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* CTA */}
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group/btn"
              >
                <span>Beszéljünk 15 percet</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </button>

              {/* Decorative Element - Bottom Right */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none hidden md:block">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;