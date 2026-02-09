import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAudit = () => {
    const element = document.getElementById('audit-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            
            {/* Social Proof Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-600 bg-gray-50 w-fit mx-auto lg:mx-0 px-4 py-2 rounded-full border border-gray-100">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold text-gray-700">5.0 Vásárlói visszajelzés</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-brand-900 leading-tight">
              Weboldalad csak egy digitális névjegykártya, vagy <span className="text-brand-accent">valódi ügyfeleket is szállít?</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
Hiába küldesz látogatókat az oldaladra drága hirdetésekkel, ha a kattintásokból végül nem lesz üzlet. Adatvezérelt oldakat készítünk, hogy a hirdetéseid végre ne költséget, hanem profitot termeljenek neked.            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToAudit}
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                Nézd meg, hol veszítesz jelenleg pénzt
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-medium mt-2">
               <div className="flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1.5 rounded-md border border-green-100">
                   <span className="relative flex h-2.5 w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                   </span>
                   <span className="font-bold">Ingyenes konverziós audit</span>
               </div>
               
               <span className="text-gray-300 text-lg font-light">|</span>
               
               <div className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-md border border-gray-100">
                   <span className="font-bold">Nincs kötelezettség</span>
               </div>
            </div>
          </div>

          {/* Visual Strategy */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
               {/* Concept: Before/After Infographic */}
               <div className="grid grid-cols-2">
                 <div className="p-6 bg-gray-50 border-r border-gray-200">
                    <div className="text-center mb-4">
                      <span className="text-red-600 font-bold uppercase tracking-wider text-sm">Előtte</span>
                      <p className="text-xs text-gray-500 mt-1">Összezavart látogatók</p>
                    </div>
                    <div className="space-y-3 opacity-60 grayscale blur-[1px]">
                       <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                       <div className="h-20 bg-gray-300 rounded w-full"></div>
                       <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <span className="text-2xl font-bold text-gray-400">0.5% CR</span>
                    </div>
                 </div>
                 <div className="p-6 bg-white relative">
                    <div className="absolute inset-0 bg-green-50/30"></div>
                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Utána</span>
                        <p className="text-xs text-gray-500 mt-1">Tiszta értékajánlat</p>
                      </div>
                      <div className="space-y-3">
                         <div className="h-4 bg-brand-900 rounded w-3/4 mx-auto"></div>
                         <div className="h-20 bg-blue-50 border border-blue-100 rounded w-full flex items-center justify-center">
                            <span className="bg-brand-accent text-white px-4 py-1 rounded text-xs font-bold shadow-sm">CTA</span>
                         </div>
                         <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                      </div>
                      <div className="mt-6 flex justify-center">
                          <span className="text-3xl font-bold text-green-600">3.5% CR</span>
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