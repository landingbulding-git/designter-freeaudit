import React from 'react';
import { Smile, Calendar } from 'lucide-react';

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
    <section className="py-24 bg-[#0B0F19] overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
          Egyetlen előfizetés, végtelen lehetőség.
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Main Card */}
          <div className="relative group rounded-[3rem] p-[1px] bg-gradient-to-b from-gray-800 to-gray-900 shadow-[0_0_80px_-20px_rgba(255,100,0,0.3)]">
             
            {/* Orange Glow Effect behind the card */}
            <div className="absolute -inset-1 bg-brand-accent/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

            <div className="relative bg-[#131722] rounded-[3rem] p-8 md:p-12 h-full overflow-hidden">
              
              {/* Background gradient overlay for depth */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

              {/* Header Section */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">Havi tagság</h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">DESIGNTÉR KLUB</p>
                </div>
                
                {/* Pause/Cancel Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:bg-white/10 transition-colors cursor-default">
                  Szüneteltetés bármikor
                </div>
              </div>

              {/* Dashed Divider */}
              <div className="relative z-10 w-full h-px border-t border-dashed border-gray-700 mb-10"></div>

              {/* Price Section */}
              <div className="relative z-10 mb-12">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl md:text-7xl font-medium text-white tracking-tighter">690.000</span>
                  <span className="text-2xl text-white font-medium">Ft</span>
                  <span className="text-xl text-gray-500 ml-2">/ hó</span>
                </div>
                <p className="text-sm text-gray-500 mt-2 font-medium">+ ÁFA</p>
              </div>

              {/* Features Box */}
              <div className="relative z-10 bg-[#1A1E29] rounded-2xl p-8 mb-12 border border-white/5 shadow-inner">
                 
                 {/* "INCLUDED" Tab */}
                 <div className="absolute -top-3 left-8 bg-[#2A2E39] text-[10px] font-bold tracking-widest uppercase text-gray-400 px-3 py-1 rounded shadow-sm border border-white/5">
                    Tartalmazza
                 </div>

                 <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 pt-2">
                    {features.map((feature, index) => (
                      <div key={index} className="text-gray-300 text-sm md:text-[15px] leading-relaxed font-light">
                        {feature}
                      </div>
                    ))}
                 </div>
              </div>

              {/* Bottom Section: Button & Decoration */}
              <div className="relative z-10 flex items-center justify-between mt-8">
                
                {/* CTA Button */}
                <button 
                  onClick={onCtaClick}
                  className="group relative flex items-center bg-[#FF5500] hover:bg-[#FF6611] text-white rounded-xl pl-2 pr-8 py-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 active:scale-[0.98]"
                >
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-bold tracking-wide">Beszéljünk</span>
                </button>

                {/* Decorative Smiley Sphere */}
                <div className="hidden md:flex absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-white/10 to-white/0 rounded-full blur-sm border border-white/5 items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[#FF5500] opacity-20 rounded-full blur-2xl"></div>
                    <div className="relative transform -rotate-12 translate-x-[-20px] translate-y-[-20px]">
                        <Smile className="w-32 h-32 text-[#FF5500] opacity-80 drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]" strokeWidth={1.5} />
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;