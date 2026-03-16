import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    { num: "01", title: "Szerződéskötés és előleg", desc: "Az előleg kifizetésével szerződés jön létre közöttünk és el is kezdődik a közös munkánk." },
    { num: "02", title: "Részletes felmérés és onboarding", desc: "24 órán belül kapsz egy személyre szabott kérdőívet és egy rövid videóban megnézheted, hogyan dolgozunk együtt a leghatékonyabban." },
    { num: "03", title: "Design és prototípus", desc: "Nekilátunk a célközönséged felmérésének, a szövegírásnak és a design kialakításának." },
    { num: "04", title: "Fejlesztés és átadás", desc: "Miután egyeztettünk és minden sínen van, lefejlesztem a kész oldalt analitika beépítésével. Ezt követően aktív lesz a saját domaineden és csatolhatod a hirdetéseidhez." },
    { num: "05", title: "Utókövetés és optimalizálás", desc: "A következő 90 napban havonta 1x alaposan átnézzük az analitikai statisztikákat és küldünk egy gyors jelentést neked. Ha bármin tudunk ez alapján javítani, azt automatikusan megtesszük." },
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
        Hogyan fog kinézni a következő 1 hét?
      </h2>

      <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
        {steps.slice(0, 3).map((step, i) => (
          <div key={i} className="space-y-4">
            <div className="border-b border-orange-500 pb-2">
              <span className="text-slate-400 font-mono text-lg">{step.num}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-100">{step.title}</h3>
            <p className="text-slate-300 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 pt-4">
        {steps.slice(3, 5).map((step, i) => (
          <div key={i} className="space-y-4">
            <div className="border-b border-orange-500 pb-2">
              <span className="text-slate-400 font-mono text-lg">{step.num}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-100">{step.title}</h3>
            <p className="text-slate-300 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <a href="#contact" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-orange-500/20">
          Készítsetek nekem profi landing oldalt!
        </a>
      </div>

      <div className="bg-green-100/10 border border-green-500/30 rounded-xl p-6 flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
        <p className="text-slate-200 font-medium leading-relaxed">
          <strong className="text-slate-100">A konverzió optimalizált oldalak átlagosan 30-35%-al jobban teljesítenek.</strong> Az első lépés mindig a legnehezebb, de a legfontosabb is.
        </p>
      </div>
    </section>
  );
}
