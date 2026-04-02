import React, { useEffect, useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name) {
      // Capitalize first letter
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, []);

  return (
    <section className="relative pt-8 pb-8 lg:pt-24 lg:pb-24 bg-brand-900 text-white overflow-hidden min-h-[100dvh] lg:min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col space-y-5 lg:space-y-6 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-2">
              {/* Social Proof Badge */}
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-gray-300 bg-brand-800/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-2xl sm:rounded-full border border-brand-700/50 shadow-sm">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                </div>
                <span className="font-semibold text-white whitespace-nowrap">Etikai Kódex alapján validálva.</span>
                <span className="text-brand-700 hidden sm:inline">|</span>
                <span className="text-gray-200 whitespace-nowrap">100% diszkrét, szakmabeli elemzés.</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {userName ? `${userName}, ` : ''}PEK Audit™: 9 hiba a klinikája online jelenlétben, ami elriasztja a prémium pácienseket.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              15 perces egyedi videós diagnózis a klinikájáról. Presztízs, Etika és Konverzió mentén vizsgáljuk meg klinikája online jelenlétét. Pontos javaslatokat kap a szakmai nívó és az eredmények összehangolásához.
            </p>
          </div>

          {/* Right Side: Form, Button, Labels */}
          <div className="flex flex-col space-y-6 items-center lg:items-end w-full">
            <div className="w-full max-w-xl bg-brand-800/30 backdrop-blur-md p-6 lg:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <form 
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  onCtaClick();
                }}
              >
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Teljes név" 
                    required
                    className="w-full px-5 py-4 bg-brand-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Klinika neve" 
                    required
                    className="w-full px-5 py-4 bg-brand-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  />
                  <input 
                    type="url" 
                    placeholder="Weboldal címe" 
                    required
                    className="w-full px-5 py-4 bg-brand-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-5 sm:py-6 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 mt-2"
                >
                  Kérem a 15 perces videós auditot
                </button>
              </form>

              {/* Features list - Reordered and Mobile Optimized */}
              <div className="mt-8 flex flex-col gap-3 text-sm font-bold">
                 <div className="flex items-center gap-3 bg-green-500/10 text-green-400 px-4 py-2.5 rounded-xl border border-green-500/20">
                   <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                   <span>100% ingyenes.</span>
                 </div>
                 <div className="flex items-center gap-3 bg-green-500/10 text-green-400 px-4 py-2.5 rounded-xl border border-green-500/20">
                   <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                   <span>Az audit bizalmas, csak Ön kapja meg.</span>
                 </div>
                 <div className="flex items-center gap-3 bg-green-500/10 text-green-400 px-4 py-2.5 rounded-xl border border-green-500/20">
                   <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                   <span>Nincs kötelezettség.</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;