import React, { useEffect, useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

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

  const reviews = [
    {
      name: "E. Renáta.",
      company: "Terápiás szakember",
      result: "6x CR",
      text: "Nem csak egy gyönyörű weboldalt kaptam, hanem egy rendszert, ami helyettem dolgozik. Az ügyfeleim maguktól foglalnak és fizetnek. Én pedig végre csak a munkámra figyelhetek. Imádom! Köszönöm.",
      source: "Google"
    },
    {
      name: "M. Edit.",
      company: "Kozmetikai szalon tulajdonos",
      result: "Tele naptár",
      text: "Fogalmam sem volt, hogy hogyan működik egy weboldal, de Norbi és Lili úgy vittek végig mindenen, hogy egy percig sem stresszeltem. Tényleg figyeltek rám, és az eredmény is ezt tükrözi.",
      source: "Google"
    },
    {
      name: "Ő. Szilvia",
      company: "Magántanár",
      result: "3,5x CR",
      text: "Egyedi ötlettel jöttem, nem sablonos weboldalt akartam. A folyamat során mindig tudtam, hogy hol tartunk, mit kell tennem és minden részlet a helyére került, pedig egyáltalán nem értek ezekhez a dolgokhoz. Remek élmény volt.",
      source: "Google"
    }
  ];

  // We duplicate the array multiple times to create a seamless loop
  const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-900 text-white overflow-hidden min-h-screen flex items-center">
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); } /* Half height since we use 4 sets (2 sets visible, 2 sets for loop) */
        }
        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
        /* Hide scrollbar for the container */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="flex flex-col space-y-8 items-start text-left w-full pt-8 lg:pt-0">
            
            {/* Social Proof Badge */}
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-300 bg-brand-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-700/50 shadow-sm">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold text-white">5.0 vásárlói visszajelzés</span>
              <span className="text-brand-700">|</span>
              <span className="text-gray-200">500+ profi audit</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              Szia {userName ? `${userName} ` : ''}👋<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Megmutatom, hogy hozz ki többet a weboldaladból gyorsan és egyszerűen.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
              Nem akarok látatlanban "okoskodni" – ahhoz, hogy valóban hasznos észrevételeket küldjek, fel kell tennem pár kérdést. Segítesz?
            </p>

            {/* Founder Badge */}
            <div className="flex items-center gap-3 py-2">
              <img 
                src="https://xa5228yhxohqyplr.public.blob.vercel-storage.com/me-landing-image.webp" 
                alt="Bogdán Norbert" 
                className="w-10 h-10 rounded-full border-2 border-brand-accent object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-none">Bogdán Norbert</span>
                <span className="text-xs text-brand-accent font-medium">CRO Specialista</span>
              </div>
            </div>

            <div className="flex flex-col w-full sm:w-auto space-y-4 mt-2">
              <button 
                onClick={onCtaClick}
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Persze, válaszolok és kérem a tippeket
              </button>
              
              {/* Features list */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-6 text-sm font-medium text-gray-300">
                 <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-green-400" />
                   <span>2 perc az egész</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-green-400" />
                   <span>100% Ingyenes</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-green-400" />
                   <span>Garantált szakmai észrevételek</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Side Validation - Wall of Love */}
          <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 overflow-hidden pointer-events-none hidden lg:block">
            {/* Fade effect top/bottom */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-900 via-brand-900/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent z-10"></div>
            
            <div className="h-full overflow-hidden no-scrollbar opacity-40">
              <div className="flex flex-col gap-6 py-12 animate-scroll-up px-12 max-w-xl ml-auto">
                {infiniteReviews.map((review, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-1 mb-4 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-200 mb-6 text-sm leading-relaxed">"{review.text}"</p>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div>
                        <p className="font-bold text-white text-sm">{review.name}</p>
                        <p className="text-xs text-gray-400">{review.company}</p>
                      </div>
                      <div className="text-right flex flex-col items-end gap-1">
                        <span className="block text-green-400 font-bold text-xs bg-green-400/10 px-2 py-1 rounded">
                          {review.result}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile visible wall of love */}
          <div className="relative h-[300px] w-full mt-12 overflow-hidden lg:hidden">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-brand-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brand-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="h-full overflow-hidden no-scrollbar opacity-30">
              <div className="flex flex-col gap-4 py-4 animate-scroll-up px-4">
                {infiniteReviews.map((review, index) => (
                  <div key={index} className="bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-1 mb-3 text-yellow-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-gray-200 mb-4 text-xs leading-relaxed">"{review.text}"</p>
                    <p className="font-bold text-white text-xs">{review.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;