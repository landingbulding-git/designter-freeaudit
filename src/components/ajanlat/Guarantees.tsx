import React from 'react';

export default function Guarantees() {
  return (
    <section className="bg-[#1e293b] rounded-[2rem] shadow-[0_0.5rem_0_0_#ea580c] p-10 md:p-16 space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-[2.85rem] font-extrabold text-[#ea580c] font-heading">
          Mit tudunk garantálni számodra?
        </h2>
        <p className="text-2xl font-bold text-[#e5dce6] font-heading">Teljeskörű kivitelezést…</p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 pt-12">
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
          <div key={idx} className="relative bg-transparent border-t-2 border-[#ea580c] pt-12">
            {/* Number Circle */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#1e293b] rounded-full flex items-center justify-center font-bold text-white text-[1.4em] shadow-[0_0_0_8px_#1e293b] border-2 border-[#ea580c] font-heading">
              {item.num}
            </div>
            
            <h3 className="text-2xl font-extrabold text-white mb-4 leading-[1.4] font-heading">{item.title}</h3>
            <p className="text-[#e5dce6] leading-[1.6] font-medium text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
