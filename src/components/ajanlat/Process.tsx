import React from 'react';
import { Check } from 'lucide-react';

export default function Process() {
  const steps = [
    { num: "01", title: "Szerződéskötés és előleg", desc: "Az előleg kifizetésével szerződés jön létre közöttünk és el is kezdődik a közös munkánk." },
    { num: "02", title: "Részletes felmérés és onboarding", desc: "24 órán belül kapsz egy személyre szabott kérdőívet és egy rövid videóban megnézheted, hogyan dolgozunk együtt a leghatékonyabban." },
    { num: "03", title: "Design és prototípus", desc: "Nekilátunk a célközönséged felmérésének, a szövegírásnak és a design kialakításának." },
    { num: "04", title: "Fejlesztés és átadás", desc: "Miután egyeztettünk és minden sínen van, lefejlesztem a kész oldalt analitika beépítésével. Ezt követően aktív lesz a saját domaineden és csatolhatod a hirdetéseidhez." },
    { num: "05", title: "Utókövetés és optimalizálás", desc: "A következő 90 napban havonta 1x alaposan átnézzük az analitikai statisztikákat és küldünk egy gyors jelentést neked. Ha bármin tudunk ez alapján javítani, azt automatikusan megtesszük." },
  ];

  return (
    <section className="space-y-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#ef5a28]">
        Hogyan fog kinézni a következő 1 hét?
      </h2>

      <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
        {steps.slice(0, 3).map((step, i) => (
          <div key={i} className="space-y-4">
            <span className="text-slate-300 font-mono text-lg">{step.num}</span>
            <div className="h-0.5 w-full bg-[#ef5a28]"></div>
            <h3 className="text-xl font-bold text-white pt-2">{step.title}</h3>
            <p className="text-slate-300 leading-relaxed font-light text-[15px]">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:w-2/3">
        {steps.slice(3, 5).map((step, i) => (
          <div key={i} className="space-y-4">
            <span className="text-slate-300 font-mono text-lg">{step.num}</span>
            <div className="h-0.5 w-full bg-[#ef5a28]"></div>
            <h3 className="text-xl font-bold text-white pt-2">{step.title}</h3>
            <p className="text-slate-300 leading-relaxed font-light text-[15px]">{step.desc}</p>
          </div>
        ))}
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
          <strong>A konverzió optimalizált oldalak átlagosan 30-35%-al jobban teljesítenek.</strong> Az első lépés mindig a legnehezebb, de a legfontosabb is.
        </p>
      </div>
    </section>
  );
}
