import React from 'react';
import { Check, Calendar, X } from 'lucide-react';

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

  const comparisonFeatures = [
    "Több százezer Ft egyetlen landing oldal elkészítéséért",
    "Hetekig vagy akár hónapokig tartó átfutási idő",
    "Havi 1 oldal is csak hosszas egyeztetések után készül el",
    "Hiányzó szakmai szövegírás vagy plusz költség érte",
    "Analitika és mérések nélküli, \"vak\" átadás",
    "Nincs utókövetés vagy adatvezérelt javítási javaslat",
    "Külön fizetendő tárhely és technikai menedzselés",
    "Minden apró grafikai módosítás extra költség és idő",
    "Kiszámíthatatlan végösszeg és nehézkes lemondás"
  ];

  return (
    <section className="py-24 bg-[#0B0F19] overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
          Egyetlen előfizetés, végtelen lehetőség.
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Main Card */}
          <div className="relative group rounded-[3rem] p-[1px] bg-gradient-to-b from-gray-800 to-gray-900 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)] order-1 lg:order-2">
             
            {/* Soft White Glow Effect behind the card */}
            <div className="absolute -inset-1 bg-white/5 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

            <div className="relative bg-[#131722] rounded-[3rem] p-8 md:p-12 h-full overflow-hidden">
              
              {/* Background gradient overlay for depth */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

              {/* Header Section */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight leading-tight">
                    DESIGNTÉR KLUB HAVI TAGSÁG
                  </h3>
                </div>
                
                {/* Pause/Cancel Badge */}
                <div className="flex items-center gap-2 bg-green-500/10 text-green-300 px-3 py-1.5 rounded-md border border-green-500/20 text-xs font-bold whitespace-nowrap self-start md:self-auto">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                   </span>
                   <span>Szüneteltetés bármikor</span>
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
              </div>

              {/* Features Box */}
              <div className="relative z-10 bg-[#1A1E29]/80 rounded-2xl p-8 mb-12 border border-white/5 shadow-inner">
                 {/* Soft White Inner Glow for Features */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[80px] pointer-events-none"></div>
                 
                 {/* "INCLUDED" Tab */}
                 <div className="absolute -top-3 left-8 bg-[#2A2E39] text-[10px] font-bold tracking-widest uppercase text-gray-400 px-3 py-1 rounded shadow-sm border border-white/5 z-20">
                    Tartalmazza
                 </div>

                 <div className="relative z-10 grid gap-y-5 pt-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 text-gray-200 text-base leading-relaxed font-medium">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" strokeWidth={3} />
                        <span>{feature}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Bottom Section: Centered Button */}
              <div className="relative z-10 flex flex-col items-center mt-8">
                
                {/* CTA Button */}
                <button 
                  onClick={onCtaClick}
                  className="group relative flex items-center justify-center bg-[#FF5500] hover:bg-[#FF6611] text-white rounded-xl pl-2 pr-8 py-4 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] w-full"
                >
                  <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold tracking-wide">Csatlakozom a DesignTér Klubhoz</span>
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Card */}
          <div className="order-2 lg:order-1 flex flex-col justify-center h-full py-8 lg:py-12 px-6">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-wide">
              A piacon elérhető szabadúszók és ügynökségek
            </h3>
            
            <div className="space-y-6">
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-4 text-gray-400 group">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <X className="w-3.5 h-3.5 text-red-400" strokeWidth={3} />
                  </div>
                  <span className="text-lg font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
               <p className="text-gray-500 text-sm leading-relaxed">
                 * A hagyományos ügynökségi modellek gyakran rejtett költségekkel és lassú folyamatokkal járnak. A DesignTér Klub átlátható, gyors és kiszámítható alternatívát kínál.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;