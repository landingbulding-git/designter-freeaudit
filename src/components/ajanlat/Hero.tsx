import React from 'react';

export default function Hero({ clientName, companyName }: { clientName: string, companyName: string }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[70vh]">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ef5a28] leading-tight">
          Hogyan hozzunk ki<br /> maximumot a hirdetési<br /> keretedből?
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-light mt-8">
          Személyre szabott CRO ajánlat {clientName} ({companyName}) részére.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* Placeholder for the book cover / abstract graphic */}
        <div className="relative w-80 h-[28rem] bg-black rounded-lg shadow-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center p-8">
            <div className="text-center space-y-2 mb-12 z-10">
                <h2 className="text-[#cba358] text-3xl font-serif italic">Az első szokás</h2>
                <p className="text-slate-400 text-sm">Nem motiváció. Rendszer.</p>
            </div>
            <div className="relative w-full h-full flex items-end justify-start pb-8">
                <svg className="w-32 h-48 text-[#d4ad4b]" viewBox="0 0 100 200" fill="currentColor">
                    <path d="M40 160 L30 190 L45 195 L50 170 L55 170 L65 190 L80 185 L70 150 L65 120 L75 105 L65 80 L55 85 L50 60 L60 50 L55 35 Q50 25 40 30 Q30 35 35 45 L35 55 L30 80 L20 100 L20 125 L30 120 L35 150 Z" />
                </svg>
                
                <div className="absolute right-8 top-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/20 blur-xl absolute inset-0 m-auto animate-pulse"></div>
                    <svg className="w-12 h-12 text-[#fde047] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

                {/* Dashed line connecting them */}
                <svg className="absolute left-[70px] top-[140px] w-48 h-32 text-[#d4ad4b] opacity-50" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
                    <path d="M0 40 Q 50 100 100 50 T 200 20" />
                </svg>
                <div className="absolute left-[65px] top-[175px] w-3 h-3 bg-[#d4ad4b] rounded-full"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
