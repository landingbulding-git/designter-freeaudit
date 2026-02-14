import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-28 bg-brand-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            
            {/* Social Proof Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-300 bg-brand-800 w-fit mx-auto lg:mx-0 px-4 py-2 rounded-full border border-brand-700">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold text-white">5.0 Vásárlói visszajelzés</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Tudd meg 48 órán belül, hogyan szerezz <span className="text-brand-accent">3x több vásárlót</span> anélkül, hogy többet költenél marketingre.</h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 min-h-[6rem]">
Hiába küldesz látogatókat az oldaladra drága hirdetésekkel, ha a kattintásokból végül nem lesz üzlet. Adatvezérelt oldakat készítünk, hogy a hirdetéseid végre ne költséget, hanem profitot termeljenek neked.            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Nézd meg, hol veszítesz jelenleg pénzt
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-medium mt-2">
               <div className="flex items-center gap-2 bg-green-500/10 text-green-300 px-3 py-1.5 rounded-md border border-green-500/20">
                   <span className="relative flex h-2.5 w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                   </span>
                   <span className="font-bold">Ingyenes konverziós audit</span>
               </div>
               
               <span className="text-brand-700 text-lg font-light">|</span>
               
               <div className="bg-brand-800 text-gray-300 px-3 py-1.5 rounded-md border border-brand-700">
                   <span className="font-bold">Nincs kötelezettség</span>
               </div>
            </div>
          </div>

          {/* Visual Strategy */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-accent/20 border border-brand-700 bg-brand-800/50 backdrop-blur-sm">
               {/* Concept: Before/After Infographic */}
               <div className="grid grid-cols-2">
                 <div className="p-6 bg-brand-900/50 border-r border-brand-700">
                    <div className="text-center mb-4">
                      <span className="text-red-400 font-bold uppercase tracking-wider text-sm">Előtte</span>
                      <p className="text-xs text-gray-400 mt-1">Összezavart látogatók</p>
                    </div>
                    <div className="space-y-3 opacity-60 grayscale blur-[1px]">
                       <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
                       <div className="h-20 bg-gray-600 rounded w-full"></div>
                       <div className="h-4 bg-gray-600 rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <span className="text-2xl font-bold text-gray-500">0.5% CR</span>
                    </div>
                 </div>
                 <div className="p-6 bg-transparent relative">
                    <div className="absolute inset-0 bg-green-500/10"></div>
                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <span className="text-green-400 font-bold uppercase tracking-wider text-sm">Utána</span>
                        <p className="text-xs text-gray-400 mt-1">Tiszta értékajánlat</p>
                      </div>
                      <div className="space-y-3">
                         <div className="h-4 bg-brand-700 rounded w-3/4 mx-auto"></div>
                         <div className="h-20 bg-brand-800 border border-brand-700 rounded w-full flex items-center justify-center">
                            <span className="bg-brand-accent text-white px-4 py-1 rounded text-xs font-bold shadow-sm">CTA</span>
                         </div>
                         <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
                      </div>
                      <div className="mt-6 flex justify-center">
                          <span className="text-2xl md:text-3xl font-bold text-green-400 whitespace-nowrap">3.5% CR</span>
                      </div>
                    </div>
                 </div>
               </div>
               
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100">
                  <TrendingUp className="w-6 h-6 text-brand-accent" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;