import React from 'react';
import { Check } from 'lucide-react';

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
    <section id="pricing" className="space-y-12 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-[#ef5a28] max-w-3xl leading-tight">
        Átadhatjuk a konverzióra kihegyezett landing oldaladat {pricing.timeline}?
      </h2>

      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-24 items-start">
        <ul className="space-y-4">
          {pricing.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-[#84cc16] rounded-sm flex items-center justify-center shrink-0 mt-1">
                <Check className="w-4 h-4 text-[#1c2431]" strokeWidth={3} />
              </div>
              <span className="text-lg font-bold text-white">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-12 items-center md:items-end md:pr-12 pt-4">
          <div className="text-center md:text-right">
            <p className="text-5xl md:text-6xl font-bold text-white">{pricing.upfront}</p>
            <p className="text-lg text-white mt-3 font-bold">Induláskor</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-5xl md:text-6xl font-bold text-white">{pricing.delivery}</p>
            <p className="text-lg text-white mt-3 font-bold">Átadáskor</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <a href="#contact" className="inline-block bg-[#ef5a28] hover:bg-[#d94f1f] text-white font-semibold py-4 px-8 rounded-md transition-colors text-lg">
          Készítsetek nekem profi landing oldalt!
        </a>
      </div>

      <div className="mt-12 bg-[#c2e5c8] rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-8 h-8 rounded-full border-2 border-[#166534] flex items-center justify-center shrink-0">
          <Check className="w-5 h-5 text-[#166534]" strokeWidth={2} />
        </div>
        <p className="text-[#064e3b] font-medium leading-relaxed text-[15px]">
          <strong>100% garanciát biztosítunk minden munkánkra.</strong> Bár a végső eredményt a terméked, a piaci tényezők és a hirdetéseid is befolyásolják, mindent megteszek a sikeredért és az első 90 napban korlátlan adatalapú módosítást hajtunk végre, hogy elérjük a vágyott eredményt.
        </p>
      </div>
    </section>
  );
}
