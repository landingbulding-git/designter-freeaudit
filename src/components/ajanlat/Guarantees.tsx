import React from 'react';

export default function Guarantees() {
  return (
    <section className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ef5a28]">
          Mit tudunk garantálni számodra?
        </h2>
        <p className="text-xl font-bold text-[#ef5a28]">Teljeskörű kivitelezést...</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {[
          {
            num: "1",
            title: "Célközönség elemzést, hogy pontosan tudjuk, kikhez szólunk",
            desc: "A tőled kapott és a publikus kutatások adataiból felállítjuk az ideális célközönségedet, megkeressük a fájdalompontjukat / motivációjukat és kifejezetten nekik címezzük az üzenetünket."
          },
          {
            num: "2",
            title: "Adat és pszichológia alapú copywriting, hogy tényleg megszólítsuk őket",
            desc: "Elemezzük az eddigi adataidat (vagy releváns publikus adatokat) és kiderítjük, milyen stílusban, milyen nyelvezettel, milyen érzelmi alapra helyezve kommunikáljunk."
          },
          {
            num: "3",
            title: "Magas konverziójú design, hog ne csak szép legyen",
            desc: '"Szép" weboldal ≠ Eredményes weboldal. Bizonyítottan működő struktúrát és keretrendszereket használunk, hogy reszponzív, sebességoptimalizált, konverzióképes landing felület hozzunk létre.'
          },
          {
            num: "4",
            title: "Technikai finomhangolás és analitika",
            desc: "Egyedi kódolású landing oldalaink extrém gyorsak, minden mutatójuk 90-95% feletti. Emellett részletes analitikai eszközöket építünk be, így tudjuk elemezni a látogatók reakcióit. Erről 90 napig havonta 1x jelentést küldünk és automatikusan elvégezzük az optimalizálásokat."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#242e3e] rounded-lg p-8 pt-10 relative">
            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ef5a28] rounded-t-lg"></div>
            {/* Number Circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#ef5a28] rounded-full flex items-center justify-center font-bold text-white text-sm ring-4 ring-[#242e3e]">
              {item.num}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 leading-snug">{item.title}</h3>
            <p className="text-slate-300 leading-relaxed font-light text-[15px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
