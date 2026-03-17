import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "WordPress / Shopify / Wix oldalam van. Ti is ott készítitek el a landinget?",
      a: "Nem, és pont ez az egyik előnyünk. Ezeknek a megoldásoknak sok előnyük van, de gyakran lassúak és korlátozottak. Mi egyedi kódolású, extrém gyors landing oldalakat építünk neked, amik aldomainen (pl. landing.domained.hu) csatlakoznak a meglévő rendszeredhez. Így megtarthatod a megszokott platformodat, miközben a hirdetéseid egy profi, eredményközpontú felületre irányítanak."
    },
    {
      q: "Mi történik a közös munka első 90 napjában?",
      a: "Adatvezérelt tökéletesítés. Az átadás után nem engedjük el a kezed: elemezzük a látogatóid viselkedését, és az adatok alapján finomhangoljuk az oldaladat a maximális konverzió érdekében. Ebben az időszakban bármennyi, bármilyen módosítást kérsz, mi elvégezzük."
    },
    {
      q: "Mi lesz a 90 nap lejárta után?",
      a: "Mire ide elérünk a landing oldalad már tökéletesítve lesz. A technikai felügyeletet (hibajavítás, működési garancia) továbbra is mi látjuk el, extra díjak nélkül. Ha a későbbiekben újabb kampányokat indítanál vagy folyamatos optimalizálást szeretnél, bármikor válthatsz a havi csomagunkra."
    },
    {
      q: "Tényleg az enyém marad az oldal?",
      a: "100%-ban. Az első 12 hónapban ajándék profi tárhelyet és hostingot kapsz tőlünk, hogy ne kelljen technikai részletekkel bajlódnod. Ezután dönthetsz: maradsz nálunk kényelemben, vagy elviszed a forráskódot a saját környezetedbe - minden esetben segítünk neked."
    },
    {
      q: "Mikor kell fizetnem a második részletet?",
      a: "Csak ha már élesítésre kész a rendszer. A második részlet az átadáskor (7 munkanapon belül) esedékes, amikor a landing oldalad már teljesen készen áll arra, hogy pénzt keressen neked."
    },
    {
      q: "Van valamilyen garanciátok az eredményre?",
      a: (
        <>
          <p className="mb-4">
            A munkánk minőségére és a folyamatra 100% garanciát vállalunk, de egy kontrollálhatatlan számra nem tehetjük meg ugyanezt. A konverziónak két elengedhetetlen összetevője van: a <strong>Forgalom (látogatók)</strong> és az <strong>Oldal hatékonysága</strong>. Mi az oldaladat a létező legmagasabb szakmai szinten optimalizáljuk, de a forgalmat te hozod.
          </p>
          <p className="mb-4">
            Ha leállítod a hirdetéseidet vagy nem terelsz látogatókat az oldalra, akkor konverzió sem lesz – ezért lenne felelőtlenség részünkről erre garanciát nyújtani.
          </p>
          <p className="mb-4">
            A jó hír azonban, hogy csak olyan projektet vállalunk el, amiben mi is látjuk a biztos sikert. Ha nem hinnénk benne, nem dolgoznánk veled.
          </p>
          <p>
            <strong>Pénzvisszafizetési garancia:</strong> Az első héten átadjuk a kész oldalt. Ha ekkor úgy érzed, hogy nem látod benne a potenciált, szó nélkül visszaadjuk az előleget.
          </p>
        </>
      )
    }
  ];

  return (
    <section className="bg-[#1e293b] rounded-[2rem] shadow-[0_0.5rem_0_0_#ea580c] p-8 md:p-16 space-y-12 text-center md:text-left">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-[2.85rem] font-extrabold text-[#ea580c] font-heading">
          Gyakori kérdések
        </h2>
        <p className="text-xl md:text-2xl font-bold text-[#e5dce6] font-heading">
          Minden, amit tudnod kell
        </p>
      </div>
      
      <div className="space-y-4 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-[#ea580c]/30 rounded-xl overflow-hidden bg-[#000002]/30 text-left">
            <button
              className="w-full flex justify-between items-center p-6 text-left hover:bg-[#ea580c]/10 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-[#e5dce6] text-lg md:text-xl pr-4 font-heading">{faq.q}</span>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-[#ea580c] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#ea580c] flex-shrink-0" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="p-6 pt-0 text-[#e5dce6]/90 leading-relaxed text-base md:text-lg">
                <div className="mt-4">{faq.a}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
