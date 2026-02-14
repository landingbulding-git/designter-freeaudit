import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Adatkezeles: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
            <Link to="/" className="inline-flex items-center text-brand-700 hover:text-brand-900 font-medium transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Vissza a főoldalra
            </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col items-center p-4 md:p-8">
             <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Adatkezelési Tájékoztató</h1>
             <div className="w-full flex justify-center">
                <embed 
                    src="/ingyenes-audit/Adatkezelesi-tajekoztato.pdf" 
                    type="application/pdf"
                    width="100%" 
                    height="1000px" 
                />
             </div>
             <p className="text-sm text-gray-500 mt-4 text-center">
                Ha a dokumentum nem jelenik meg, <a href="/ingyenes-audit/Adatkezelesi-tajekoztato.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline">kattints ide a letöltéshez</a>.
             </p>
        </div>
      </div>
    </div>
  );
};

export default Adatkezeles;
