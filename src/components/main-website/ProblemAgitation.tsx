import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

interface ProblemAgitationProps {
  onCtaClick: () => void;
}

const ProblemAgitation: React.FC<ProblemAgitationProps> = ({ onCtaClick }) => {

  return (
    <section className="py-20 bg-slate-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-6">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
          A hirdetéseid hozzák a kattintásokat, de az oldalad elüldözi a vevőket?
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
          <p>
            A látogatóid <span className="font-bold text-brand-accent">5 másodperc alatt döntenek</span>. Ha nem értik azonnal a lényeget, akkor a konkurenciához mennek.
          </p>
          <p>
            Több mint <span className="font-bold text-brand-accent">500 landing oldal</span> elemzése után tisztán látjuk a mintát: a <span className="font-semibold text-brand-900">profitábilis oldal nem a véletlen múlik</span>. Amíg a vállalkozások 90%-a olyan felületekre irányítják a látogatóikat, amelyek apró, de végzetes hibákkal gyilkolják a konverziót, addig te egy <span className="font-bold text-brand-accent">értékesítésre optimalizált felülettel</span> érvényesülhetsz.
          </p>
          <p className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm font-medium">
            Nem csak a hibákra mutatunk rá: egy olyan rendszert építünk neked, amely a <span className="text-brand-accent font-bold">látogatói pszichológiát</span> használja a meggyőzésre. Megszüntetjük a találgatást, és <span className="font-bold text-brand-900">tűpontos adatokkal</span> tesszük egyértelművé, miért éppen nálad kell elkölteniük a pénzüket.
          </p>
        </div>

        <button 
          onClick={onCtaClick}
          className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
        >
          Kérem az ingyenes auditot
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ProblemAgitation;