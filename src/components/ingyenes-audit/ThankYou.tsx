import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100dvh] bg-brand-900 text-center px-4 py-12 overflow-hidden">
      {/* Decorative background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        {/* Alarm Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center border-2 border-brand-accent/30 animate-pulse">
            <AlertTriangle className="w-10 h-10 text-brand-accent" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-16 max-w-2xl leading-tight">
          Az Ön audit kérelme még nincs megerősítve.
        </h1>

        {/* Content Box with Founder Image */}
        <div className="relative mt-12 w-full max-w-2xl">
          {/* Founder Image - Half inside, half outside */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-24 rounded-full border-4 border-brand-900 overflow-hidden shadow-xl bg-gray-200">
              <img
                src="https://xa5228yhxohqyplr.public.blob.vercel-storage.com/me-landing-image.webp"
                alt="B. Norbi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* The Box */}
          <div className="bg-brand-800/40 backdrop-blur-md p-8 md:p-12 pt-16 rounded-3xl border border-white/10 shadow-2xl relative z-10">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              A kérése megérkezett, azonban ahogy egy remek orvos, úgy én is adatokra alapozom a diagnózisomat. Kérem, válaszoljon a videóban feltett kérdésekre, hogy jóváhagyhassuk a jelentkezését és megkezdhessük a mélyelemzést.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
