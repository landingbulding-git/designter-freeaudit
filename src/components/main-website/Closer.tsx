import React from 'react';
import { Star, Check, Lock } from 'lucide-react';

const Closer: React.FC = () => {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
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

        <h2 id="closer-audit-heading" className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Szerezz akár 3x több érdeklődőt és bevételt anélkül, hogy még több pénzt égetnél el marketingre
        </h2>
        
        <div className="flex flex-col items-center gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 text-left max-w-lg">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-lg text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://cal.com/designter/15perc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white font-bold text-lg py-4 px-12 rounded-lg shadow-lg transition-all duration-200 inline-block text-center"
          >
            Beszéljünk 15 percet
          </a>
          
          <div className="flex items-center justify-center gap-2 mt-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <Lock className="w-4 h-4 text-green-400" />
            <p className="text-sm font-bold text-green-300 text-center">
              A konzultáció 100%-ban ingyenes és kötelezettségmentes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Closer;