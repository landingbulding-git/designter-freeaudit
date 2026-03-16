import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
    <section id="pricing" className="space-y-10 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
        Átadhatjuk a konverzióra kihegyezett landing oldaladat {pricing.timeline}?
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ul className="space-y-4">
          {pricing.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <span className="text-lg font-medium text-slate-200">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-10">
          <div className="text-center">
            <p className="text-5xl font-bold text-slate-100">{pricing.upfront}</p>
            <p className="text-xl text-slate-300 mt-2 font-medium">Induláskor</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-slate-100">{pricing.delivery}</p>
            <p className="text-xl text-slate-300 mt-2 font-medium">Átadáskor</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <a href="#contact" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-orange-500/20">
          Készítsetek nekem profi landing oldalt!
        </a>
      </div>

      <div className="bg-green-100/10 border border-green-500/30 rounded-xl p-6 flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
        <p className="text-slate-200 font-medium leading-relaxed">
          <strong className="text-slate-100">100% garanciát biztosítunk minden munkánkra.</strong> Bár a végső eredményt a terméked, a piaci tényezők és a hirdetéseid is befolyásolják, mindent megteszek a sikeredért és az első 90 napban korlátlan adatalapú módosítást hajtunk végre, hogy elérjük a vágyott eredményt.
        </p>
      </div>
    </section>
  );
}
