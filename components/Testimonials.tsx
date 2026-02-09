import React from 'react';
import { Star } from 'lucide-react';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "E. Renáta.",
      company: "Terápiás szakember",
      result: "6x CR",
      text: "Nem csak egy gyönyörű weboldalt kaptam, hanem egy rendszert, ami helyettem dolgozik. Az ügyfeleim maguktól foglalnak és fizetnek. Én pedig végre csak a munkámra figyelhetek. Imádom! Köszönöm.",
      source: "Google"
    },
    {
      name: "M. Edit.",
      company: "Kozmetikai szalon tulajdonos",
      result: "Tele naptár",
      text: "Fogalmam sem volt, hogy hogyan működik egy weboldal, de Norbi és Lili úgy vittek végig mindenen, hogy egy percig sem stresszeltem. Tényleg figyeltek rám, és az eredmény is ezt tükrözi.",
      source: "Google"
    },
    {
      name: "Ő. Szilvia",
      company: "Magántanár",
      result: "3,5x CR",
      text: "Egyedi ötlettel jöttem, nem sablonos weboldalt akartam. A folyamat során mindig tudtam, hogy hol tartunk, mit kell tennem és minden részlet a helyére került, pedig egyáltalán nem értek ezekhez a dolgokhoz. Remek élmény volt.",
      source: "Google"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-900 mb-12">
          Vállalkozók, aki már nem aggódnak a következő ügyfél miatt.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-3 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-gray-700 mb-6 font-medium">"{review.text}"</p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="font-bold text-brand-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.company}</p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="block text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded mb-2">
                    {review.result}
                  </span>
                  <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 py-0.5 shadow-sm">
                     <GoogleLogo />
                     <span className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide">Ellenőrzött</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;