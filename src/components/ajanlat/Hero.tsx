import React from 'react';

export default function Hero({ clientName, companyName }: { clientName: string, companyName: string }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 leading-tight">
          Hogyan hozzunk ki maximumot a hirdetési keretedből?
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Személyre szabott CRO ajánlat {clientName} ({companyName}) részére.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* Abstract graphic replacing the yellow figure + lightbulb */}
        <div className="relative w-64 h-64">
           <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
           <svg className="w-full h-full text-yellow-500 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
             <path d="M9 18h6" />
             <path d="M10 22h4" />
             <path d="M12 2v1" />
             <path d="M12 7v1" />
             <path d="M4.22 4.22l.71.71" />
             <path d="M7.76 7.76l.71.71" />
             <path d="M2.5 12h1.5" />
             <path d="M6 12h1.5" />
             <path d="M19.78 4.22l-.71.71" />
             <path d="M16.24 7.76l-.71.71" />
             <path d="M21.5 12h-1.5" />
             <path d="M18 12h-1.5" />
             <path d="M12 11c-1.66 0-3 1.34-3 3 0 1.3.84 2.4 2 2.82V18h2v-1.18c1.16-.42 2-1.52 2-2.82 0-1.66-1.34-3-3-3z" />
           </svg>
        </div>
      </div>
    </section>
  );
}
