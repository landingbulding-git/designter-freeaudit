import React from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle } from 'lucide-react';

const ProblemAgitation: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight mb-4">
            A prémium páciensszerzés <span className="text-brand-accent">vakfoltja</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-brand-accent/30 to-gray-200 -z-0 -translate-y-12"></div>

          {/* Problem */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative z-10 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <AlertTriangle className="w-7 h-7 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-4">A Probléma</h3>
            <p className="text-gray-600 leading-relaxed">
              Nehéz egyensúlyt találni a modern páciensszerzés és az orvosi hivatás méltósága között.
            </p>
          </div>

          {/* Agitate */}
          <div className="bg-brand-900 rounded-3xl p-8 shadow-2xl shadow-brand-900/20 border border-brand-800 relative z-10 transform md:-translate-y-4 transition-transform hover:-translate-y-5 duration-300">
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 shadow-sm">
              <ShieldAlert className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">A Feszültség</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Az általános marketingügynökségek módszerei gyakran elriasztják a fizetőképes, prémium pácienskört és komoly etikai kockázatot is rejtenek. Egy rosszul megfogalmazott ígéret vagy egy „akciós” hangvételű marketing bármikor etikai eljárást vonhat maga után a Kamaránál, miközben pont a legértékesebb pácienseit veszíti el: azokat, akik bizalmat és profizmust keresnek, nem kupont.
            </p>
          </div>

          {/* Solve */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-brand-accent/20 relative z-10 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 border border-green-100 shadow-sm">
              <CheckCircle className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-4">A Megoldás</h3>
            <p className="text-gray-600 leading-relaxed">
              A <strong className="font-semibold text-brand-900">PEK Audit™</strong> során egy speciális orvosetikai és presztízs-szűrőn futtatjuk át a teljes online jelenlétét. Megmutatjuk, hogyan lehet konverziót növelni anélkül, hogy engednie kellene a szakmai tekintélyéből.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;