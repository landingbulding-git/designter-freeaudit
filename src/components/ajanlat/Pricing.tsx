import React from 'react';

interface PricingProps {
  pricing: {
    upfront: string;
    delivery: string;
    timeline: string;
    features: string[];
  };
}

export default function Pricing({ pricing }: PricingProps) {
  return (
    <section id="pricing" className="bg-[#1e293b] rounded-[2rem] shadow-[0_0.5rem_0_0_#ea580c] p-8 md:p-16 space-y-16 scroll-mt-24 text-center md:text-left">
      <h2 className="text-3xl md:text-[2.85rem] font-extrabold text-[#ea580c] leading-tight font-heading">
        Átadhatjuk a konverzióra kihegyezett landing oldaladat {pricing.timeline}?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-24 items-start">
        <ul className="space-y-6 text-left inline-block mx-auto md:mx-0">
          {pricing.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[1.25rem] leading-none shrink-0 mt-0.5">✅</span>
              <span className="text-xl font-bold text-white">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-12 md:gap-16 items-center md:items-center pt-8 md:pt-4">
          <div className="text-center">
            <p className="text-5xl md:text-[4.5em] font-extrabold text-white leading-none font-heading">{pricing.upfront}</p>
            <p className="text-xl text-white mt-4 font-bold font-heading">Induláskor</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-[4.5em] font-extrabold text-white leading-none font-heading">{pricing.delivery}</p>
            <p className="text-xl text-white mt-4 font-bold font-heading">Átadáskor</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <a href="#contact" className="inline-block w-full md:w-auto bg-[#ea580c] hover:bg-[#d03e00] text-white font-semibold py-4 px-10 rounded-md transition-colors text-xl">
          Készítsetek nekem profi landing oldalt!
        </a>
      </div>

      <div className="mt-8 bg-[#AEE4BD] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-4 shadow-sm w-full">
        <div className="text-[#26733b] shrink-0 mt-0.5">
          <svg className="w-[1.5em] h-[1.5em]" fill="currentColor" viewBox="0 0 512 512">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
          </svg>
        </div>
        <p className="text-black font-bold leading-relaxed text-[17px] text-center md:text-left">
          100% garanciát biztosítunk minden munkánkra. Bár a végső eredményt a terméked, a piaci tényezők és a hirdetéseid is befolyásolják, mindent megteszek a sikeredért és az első 90 napban korlátlan adatalapú módosítást hajtunk végre, hogy elérjük a vágyott eredményt.
        </p>
      </div>
    </section>
  );
}
