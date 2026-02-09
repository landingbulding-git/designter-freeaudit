import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Már van egy szép weboldalam, miért kellene más?",
      a: "A \"szép\" nem egyenlő az \"eredményessel\". A design csak a csomagolás, a konverzió a motor. Ha a jelenlegi oldalad nem hoz elég ügyfelet, akkor a szépsége nem termel profitot."
    },
    {
      q: "Bármilyen piaci résben (niche) működik ez?",
      a: "Igen. Ez a módszertan minden területen működik, legyen szó otthoni szolgáltatásokról, fitneszről, egészségügyről, ingatlanról, jogi vagy oktatási területről, coachingról, SaaS-ról, klinikákról vagy bármilyen professzionális szolgáltatásról"
    },
    {
      q: "Bármilyen típusú vállalkozásnál működik (E-kereskedelem, online kurzusok, B2B, SaaS)?",
      a: "Igen. Minden üzleti modellnél alkalmazható, beleértve a webshopokat, digitális termékeket, online kurzusokat, coaching programokat, SaaS-t, valamint a B2B és B2C szektort is."
    },
    {
      q: "Pontosan mit kapok ezzel az audittal?",
      a: "Egy 10-15 perces, privát és személyre szabott videót kapsz, amelyben végigmegyünk a landing oldaladon. Darabjaira szediük az üzeneteidet, a struktúrát, az elrendezést és az ajánlatodat. Megmutatjuk, mi nem működik, és pontosan hogyan javítanánk ki, hogy az oldalad végre eladjon."
    },
    {
      q: "Mennyi idő alatt kapom meg az auditot?",
      a: "A videót a vásárlástól és az adatbekérő űrlap kitöltésétől számított 48 órán belül küldjük el az e-mail címedre."
    },
    {
      q: "Valóban az én oldalamra van szabva az audit?",
      a: "Igen. Minden egyes auditot az alapoktól, kifejezetten a te landing oldaladra rögzítünk. Soha nem használunk sablonokat, és nem osztom meg a videódat nyilvánosan."
    },
    {
      q: "Megírjátok helyettem a szöveget vagy áttervezitek az oldalam?",
      a: "Nem. Ez egy stratégiai elemzés, amit ha értékesnek találsz, örömmel elvégezzük a kivitelezést is."
    },
    {
      q: "Milyen eredményekre számíthatok?",
      a: "Az ügyfeleink átlagosan 64%-os konverziós növekedést tapasztalnak már az auditban javasolt változtatások egy részének bevezetése után. Egyes esetekben akár a háromszorosára is nőtt a leadek vagy az eladások száma."
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