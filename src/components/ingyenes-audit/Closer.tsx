import React from 'react';
import { Video, ShieldAlert, CheckCircle, Lock } from 'lucide-react';

interface CloserProps {
  onCtaClick?: () => void;
}

const Closer: React.FC<CloserProps> = ({ onCtaClick }) => {
  return (
    <section id="closer-audit-heading" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent opacity-10 blur-[120px] rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 opacity-10 blur-[120px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Szüntesse meg a láthatatlan páciensvesztést és védje meg orvosi hírnevét a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-500">PEK Audit™</span> segítségével.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Features */}
          <div className="space-y-8">
            
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center border border-brand-700 shadow-sm">
                  <Video className="w-6 h-6 text-brand-accent" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Személyre szabott diagnózis</h4>
                <p className="text-gray-300 leading-relaxed">
                  15-20 perces, egyedi videóelemzés az Ön konkrét felületeiről.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center border border-brand-700 shadow-sm">
                  <ShieldAlert className="w-6 h-6 text-brand-accent" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Hibafeltárás</h4>
                <p className="text-gray-300 leading-relaxed">
                  A 9 leggyakoribb presztízs- és konverzióromboló hiba ellenőrzése.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center border border-brand-700 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-brand-accent" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Szakmai tippek</h4>
                <p className="text-gray-300 leading-relaxed">
                  Precíz, lépésről lépésre követhető szakmai javítási javaslatok.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center border border-brand-700 shadow-sm">
                  <Lock className="w-6 h-6 text-brand-accent" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Biztonság</h4>
                <p className="text-gray-300 leading-relaxed">
                  Ingyenes és 100%-ban diszkrét elemzés (heti 3 szabad hely).
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="w-full bg-brand-800/40 backdrop-blur-md p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="mb-8 text-center">
               <h3 className="text-2xl font-bold text-white mb-2">Kérje a PEK Auditot™ most</h3>
               <p className="text-brand-300 text-sm">Csak 60 másodperc. Nincs kötelezettség.</p>
            </div>
            
            <form 
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (onCtaClick) onCtaClick();
              }}
            >
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Teljes név" 
                  required
                  className="w-full px-5 py-4 bg-brand-900/60 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Klinika neve" 
                  required
                  className="w-full px-5 py-4 bg-brand-900/60 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                />
                <input 
                  type="url" 
                  placeholder="Weboldal címe" 
                  required
                  className="w-full px-5 py-4 bg-brand-900/60 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white text-lg font-bold py-5 sm:py-6 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 mt-4"
              >
                Kérem a 15 perces videós auditot
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Closer;