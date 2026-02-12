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
        Te is naponta veszítesz vevőket és nem is tudsz róla.
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
          <p>
          Képzeld el: valaki rákattint a hirdetésedre. Érdeklődik, kíváncsi, majdnem vásárol… aztán bezárja az oldalt. Nem azért, mert rossz az ajánlatod. Hanem mert az oldalad nem győzte meg <span className="text-brand-accent font-bold">5 másodperc</span> alatt.
          </p>
          <p><strong className="font-bold">Ezt látjuk újra és újra 500+ landing oldal elemzése után:</strong></p>

          <ul className="list-none space-y-2 text-left mx-auto max-w-md">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">❌</span> <strong className="font-bold">Az üzenet nem elég világos – a látogató nem érti, miért pont te vagy a legjobb választás</strong>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">❌</span> <strong className="font-bold">Túl sok döntési pont – a figyelme szétszóródik, mielőtt eljutna a vásárlásig</strong>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">❌</span> <strong className="font-bold">Nincs meggyőző struktúra – az oldal „szép", de nem vezeti végig a látogatót a döntésig</strong>
            </li>
          </ul>
          <p className="mt-6">
          <strong className="font-bold">A jó hír</strong>: ezek nem véletlenszerű problémák, hanem visszatérő mintázatok. Ha kijavítod őket, a konverziód a piac 90%-a fölé emelkedhet.
          </p>
          <p className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm font-medium">
            Mi pontosan ezt csináljuk. Látogatói pszichológiát és konverziós adatokat kombinálunk, hogy az oldalad ne csak szép legyen – hanem meggyőző és profitábilis is.
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