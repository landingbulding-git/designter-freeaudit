import React from 'react';

export default function Process({ slug }: { slug?: string }) {
  const steps = [
    { num: "01", title: "Szerződéskötés és előleg", desc: "Az előleg kifizetésével szerződés jön létre közöttünk és el is kezdődik a közös munkánk." },
    { num: "02", title: "Részletes felmérés és onboarding", desc: "24 órán belül kapsz egy személyre szabott kérdőívet és egy rövid videóban megnézheted, hogyan dolgozunk együtt a leghatékonyabban." },
    { num: "03", title: "Design és prototípus", desc: "Nekilátunk a célközönséged felmérésének, a szövegírásnak és a design kialakításának." },
    { num: "04", title: "Fejlesztés és átadás", desc: "Miután egyeztettünk és minden sínen van, lefejlesztem a kész oldalt analitika beépítésével. Ezt követően aktív lesz a saját domaineden és csatolhatod a hirdetéseidhez." },
    { num: "05", title: "Utókövetés és optimalizálás", desc: "A következő 90 napban havonta 1x alaposan átnézzük az analitikai statisztikákat és küldünk egy gyors jelentést neked. Ha bármin tudunk ez alapján javítani, azt automatikusan megtesszük." },
  ];

  return (
    <section className="bg-[#1e293b] rounded-[2rem] shadow-[0_0.5rem_0_0_#ea580c] p-8 md:p-16 space-y-16 text-center md:text-left">
      <h2 className="text-3xl md:text-[2.85rem] font-extrabold text-[#ea580c] font-heading">
        Hogyan fog kinézni a következő 1 hét?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        {steps.slice(0, 3).map((step, i) => (
          <div key={i} className="space-y-3">
            <span className="text-white font-light text-xl font-heading">{step.num}</span>
            <div className="h-[2px] w-full bg-[#ea580c]"></div>
            <h3 className="text-xl font-extrabold text-white pt-1 font-heading">{step.title}</h3>
            <p className="text-[#e5dce6] leading-[1.6] font-medium text-[17px]">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:w-2/3 mx-auto md:mx-0">
        {steps.slice(3, 5).map((step, i) => (
          <div key={i} className="space-y-3">
            <span className="text-white font-light text-xl font-heading">{step.num}</span>
            <div className="h-[2px] w-full bg-[#ea580c]"></div>
            <h3 className="text-xl font-extrabold text-white pt-1 font-heading">{step.title}</h3>
            <p className="text-[#e5dce6] leading-[1.6] font-medium text-[17px]">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <a href={`/contract/${slug}`} className="inline-block w-full md:w-auto bg-[#ea580c] hover:bg-[#d03e00] !text-white font-semibold py-4 px-10 rounded-md transition-colors text-xl">
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
          A konverzió optimalizált oldalak átlagosan 30-35%-al jobban teljesítenek. Az első lépés mindig a legnehezebb, de a legfontosabb is.
        </p>
      </div>
    </section>
  );
}
