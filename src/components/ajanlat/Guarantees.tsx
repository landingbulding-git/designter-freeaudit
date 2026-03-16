import React from 'react';

export default function Guarantees() {
  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-orange-500">
          Mit tudunk garantálni számodra?
        </h2>
        <p className="text-xl font-medium text-orange-600">Teljeskörű kivitelezést...</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-xl p-8 border-t-4 border-orange-500 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl">1</div>
          <h3 className="text-xl font-bold text-slate-100 mt-2 mb-4">Célközönség elemzést, hogy pontosan tudjuk, kikhez szólunk</h3>
          <p className="text-slate-300 leading-relaxed">
            A tőled kapott és a publikus kutatások adataiból felállítjuk az ideális célközönségedet, megkeressük a fájdalompontjukat / motivációjukat és kifejezetten nekik címezzük az üzenetünket.
          </p>
        </div>
        
        <div className="bg-slate-800 rounded-xl p-8 border-t-4 border-orange-500 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl">2</div>
          <h3 className="text-xl font-bold text-slate-100 mt-2 mb-4">Adat és pszichológia alapú copywriting, hogy tényleg megszólítsuk őket</h3>
          <p className="text-slate-300 leading-relaxed">
            Elemezzük az eddigi adataidat (vagy releváns publikus adatokat) és kiderítjük, milyen stílusban, milyen nyelvezettel, milyen érzelmi alapra helyezve kommunikáljunk.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-8 border-t-4 border-orange-500 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl">3</div>
          <h3 className="text-xl font-bold text-slate-100 mt-2 mb-4">Magas konverziójú design, hog ne csak szép legyen</h3>
          <p className="text-slate-300 leading-relaxed">
            "Szép" weboldal ≠ Eredményes weboldal. Bizonyítottan működő struktúrát és keretrendszereket használunk, hogy reszponzív, sebességoptimalizált, konverzióképes landing felület hozzunk létre.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-8 border-t-4 border-orange-500 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl">4</div>
          <h3 className="text-xl font-bold text-slate-100 mt-2 mb-4">Technikai finomhangolás és analitika</h3>
          <p className="text-slate-300 leading-relaxed">
            Egyedi kódolású landing oldalaink extrém gyorsak, minden mutatójuk 90-95% feletti. Emellett részletes analitikai eszközöket építünk be, így tudjuk elemezni a látogatók reakcióit. Erről 90 napig havonta 1x jelentést küldünk és automatikusan elvégezzük az optimalizálásokat.
          </p>
        </div>
      </div>
    </section>
  );
}
