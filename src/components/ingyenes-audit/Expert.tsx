import React from 'react';
import { ArrowRight } from '../InlineIcons';

interface ExpertProps {
  onCtaClick: () => void;
}

const Expert: React.FC<ExpertProps> = ({ onCtaClick }) => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          
          <div className="w-full md:w-1/3 flex-shrink-0">
             <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-200 relative">
               <img 
                 src="https://xa5228yhxohqyplr.public.blob.vercel-storage.com/me-landing-image.webp" 
                 alt="B. Norbi, a DesignTér tulajdonosa" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-900 mb-6">Tudom, hogy az orvosi marketingben a bizalom a legértékesebb valuta.</h2>
            <div className="relative mb-8">
              <span className="text-6xl text-brand-accent/20 font-serif absolute -top-8 -left-4">"</span>
              <p className="text-lg text-gray-700 leading-relaxed italic relative z-10">
                Azért hoztam létre a PEK Auditot™, mert látom, hogyan rontják el az általános marketingügynökségek a kiváló klinikák megítélését. Sokan ígérnek pácienseket, de kevesen értik az orvosetikai határokat és a presztízsalapú kommunikációt. Mi felelősséget vállalunk azért, hogy klinikája ne csak konvertáljon, de közben megőrizze szakmai méltóságát is.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-200 pt-6">
              <div className="text-center sm:text-left">
                <p className="font-bold text-brand-900 text-lg">B. Norbi | DesignTér</p>
                <p className="text-sm text-gray-500">Alapító & Stratégiai vezető</p>
              </div>
              
              <button 
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200 whitespace-nowrap"
              >
                Kérem az ingyenes auditot
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expert;