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
    <section className="relative pt-12 pb-8 lg:pt-32 lg:pb-24 bg-brand-900 text-white overflow-hidden min-h-[100dvh] lg:min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col space-y-4 lg:space-y-5 items-center text-center w-full pt-4 lg:pt-0">
          
          <div className="flex flex-wrap items-center justify-center gap-4">
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

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              {userName ? `${userName}, ` : ''}PEK Audit™: 9 hiba a klinikája online jelenlétben, ami elriasztja a prémium pácienseket.
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto pb-4">
            15 perces egyedi videós diagnózis a klinikájáról. Presztízs, Etika és Konverzió mentén vizsgáljuk meg klinikája online jelenlétét. Pontos javaslatokat kap a szakmai nívó és az eredmények összehangolásához.
          </p>

          <div className="flex flex-col w-full space-y-5 lg:space-y-6 items-center">
            
            {/* Lead Capture Form */}
            <form 
              className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                onCtaClick();
              }}
            >
              <input 
                type="text" 
                placeholder="Teljes név" 
                required
                className="w-full px-4 py-3 bg-brand-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all backdrop-blur-sm"
              />
              <input 
                type="text" 
                placeholder="Klinika neve" 
                required
                className="w-full px-4 py-3 bg-brand-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all backdrop-blur-sm"
              />
              <input 
                type="url" 
                placeholder="Weboldal címe" 
                required
                className="w-full px-4 py-3 bg-brand-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all backdrop-blur-sm"
              />
              
              {/* Button moved inside the form to handle submission naturally */}
              <div className="md:col-span-3 flex justify-center mt-2">
                <button 
                  type="submit"
                  className="w-full sm:w-fit mx-auto bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Kérem a 15 perces videós auditot
                </button>
              </div>
            </form>
            
            {/* Features list - Highlighted */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold">
               <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg border border-green-500/20">
                 <CheckCircle2 className="w-4 h-4" />
                 <span>Az audit bizalmas, csak Ön kapja meg.</span>
               </div>
               <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg border border-green-500/20">
                 <CheckCircle2 className="w-4 h-4" />
                 <span>100% ingyenes.</span>
               </div>
               <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg border border-green-500/20">
                 <CheckCircle2 className="w-4 h-4" />
                 <span>Nincs kötelezettség.</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;