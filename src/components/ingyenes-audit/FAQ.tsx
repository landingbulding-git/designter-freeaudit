import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Ez tényleg ingyenes és személyreszabott?",
      a: "Az audit 100%-ban díjmentes és kötelezettségmentes. Ez egy szakmai diagnózis: a videóban az Ön konkrét felületeit elemezzük és konkrét hibákat tárunk fel."
    },
    {
      q: "Mennyire veszi figyelembe az elemzés az etikai kódexet?",
      a: "Ez az audit egyik alappillére. Nem általános marketinges szemmel nézzük az oldalát, hanem az aktuális orvosetikai kódexek (MOK, ETT) és a releváns platformok (Meta, Google) szabályzata tükrében."
    },
    {
      q: "Van már marketingesem/ügynökségem. Így is érdemes kérnem az auditot?",
      a: "Igen, kifejezetten javasoljuk. Tekintsen erre úgy, mint egy szakmai másodvéleményre."
    },
    {
      q: "Miért csak heti 3 audit érhető el?",
      a: "Mivel minden elemzést manuálisan, szakértői szemmel végzünk el, a minőség megőrzése érdekében limitálnunk kell a heti keretet. Egy-egy diagnózis elkészítése komoly szakmai felkészülést igényel, így csak ennyi fér bele a naptárunkba a meglévő partnereink kiszolgálása mellett."
    },
    {
      q: "Mennyi időt kell nekem erre szánnom?",
      a: "Az Ön részéről mindössze néhány percet igényel az űrlap kitöltése. Az elemzést mi végezzük el, Önnek csak a kész, 15 perces videót kell megnéznie a saját tempójában, amikor a naptára engedi."
    },
    {
      q: "Nem fogják nyilvánosan kritizálni a weboldalam?",
      a: "Semmiképpen. Az audit teljesen diszkrét, egy privát linket küldünk, amit csak Ön (vagy akivel megosztja) láthat. Számunkra az orvosi titoktartáshoz hasonló diszkréció alapvető szakmai minimum."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-brand-900 mb-10">
          Gyakori kérdések
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-brand-900 pr-4">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                  <div className="mt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;