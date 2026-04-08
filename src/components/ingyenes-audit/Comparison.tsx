import React from 'react';
import { Users, ShieldAlert, TrendingDown, ShieldCheck, TrendingUp, XCircle, CheckCircle2, UserCheck } from '../InlineIcons';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight leading-tight mb-6">
            A modern páciensszerzés nem a presztízs feladását jelenti, hanem <span className="text-brand-accent">annak megőrzését.</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Left Side: Általános marketing (Negative) */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border-t-4 border-red-500 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Általános marketing</h3>
            </div>

            <div className="space-y-8 flex-grow">
              
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center border border-red-100">
                    <Users className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Páciens elriasztás</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A sablonos, „ügynökségi” stílus idegen a prémium páciensektől, így Ön pont a legfizetőképesebb réteget veszíti el és romlik a szakmai tekintélye is a kollégák szemében.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center border border-red-100">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Fegyelmi veszélyek</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Az átgondolatlan ígéretek könnyen etikai vétséggé válhatnak, ami anyagi és erkölcsi kárt okoz.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center border border-red-100">
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Alacsony megtérülés</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A marketing nem épít rendszert, csak tüzet olt, így a növekedés egyetlen eszköze a hirdetési keret emelése.
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* Right Side: DesignTér PEK Marketing (Positive) */}
          <div className="bg-brand-900 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-brand-900/20 border-t-4 border-brand-accent flex flex-col h-full transform md:-translate-y-4">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-brand-800">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-green-500/20">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">DesignTér PEK Marketing™</h3>
            </div>

            <div className="space-y-8 flex-grow">
              
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center border border-brand-700 shadow-sm">
                    <UserCheck className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Stratégiai bizalomépítés</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Edukációs folyamaton vezetjük át az érdeklődőket, hogy a konzultációra már csak a tájékozott és műtétre kész páciensek érkezzenek.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center border border-brand-700 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Jogi és szakmai biztonság</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Minden üzenetet etikai szűrőn futtatunk át, hogy Önnek ne kelljen tartania a kamarai szankcióktól vagy a nyilvános kritikától.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center border border-brand-700 shadow-sm">
                    <TrendingUp className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Konverziós hatékonyság</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Tudatos rendszereket építünk a jelentkezők megtartására, hogy Önnek ne kelljen többet költenie hirdetésekre a stabil növekedéshez.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;