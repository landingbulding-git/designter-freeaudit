import React, { useEffect } from 'react';
import { Star, Check, Lock } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

const Closer: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15perc"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"week_view"});
    })();
  }, []);
  
  const benefits = [
    "Ne hagyd, hogy a látogatóid vásárlás nélkül távozzanak.",
    "Ne költs többé olyan forgalomra, ami nem hoz neked profitot.",
    "Építs egy rendszert, ami akkor is dolgozik, amikor te nem."
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            {/* Social Proof Badge */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300 bg-brand-800 w-fit px-4 py-2 rounded-full border border-brand-700 mb-8">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold text-white">5.0 Vásárlói visszajelzés</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Szerezz akár 3x több érdeklődőt és bevételt anélkül, hogy még több pénzt égetnél el marketingre
            </h2>
            
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cal.com Embed */}
          <div className="w-full text-brand-900 min-h-[600px] flex flex-col">
            <h3 id="closer-audit-heading" className="text-2xl font-bold text-white mb-2 px-2">Beszéljünk 15 percet</h3>
            <p className="text-gray-300 mb-6 px-2">Válassz egy neked megfelelő időpontot a lenti naptárból.</p>

            <div className="flex-grow overflow-hidden rounded-xl border border-gray-700 bg-white">
              <Cal 
                namespace="15perc"
                calLink="designter/15perc"
                style={{width:"100%", height:"100%", minHeight: "500px", overflow:"scroll"}}
                config={{"layout":"week_view","useSlotsViewOnSmallScreen":"true","theme":"light"}}
              />
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20 mx-2">
              <Lock className="w-4 h-4 text-green-400" />
              <p className="text-sm font-bold text-green-300 text-center">
                A konzultáció 100%-ban ingyenes és kötelezettségmentes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Closer;