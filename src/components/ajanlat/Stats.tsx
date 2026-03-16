import React from 'react';

interface StatsProps {
  stats: {
    visitors: number;
    conversionRate: number;
    avgOrderValue: number;
    adSpend: number;
    lostSales: number;
    projections: { increase: string; extraRevenue: string; total: string }[];
    roi: string;
  };
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-[#1e293b] rounded-[2rem] p-8 md:p-16 shadow-[0_0.5rem_0_0_#ea580c] space-y-16 text-center md:text-left">
      <h2 className="text-3xl md:text-[2.85rem] font-extrabold text-[#ea580c] leading-tight font-heading">
        A jelenlegi statisztikáid szerint az elmúlt 6 hónapban...
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="space-y-1">
          <p className="text-[3.5em] md:text-[3em] font-extrabold text-white leading-none font-heading mb-3">{stats.visitors}</p>
          <p className="font-bold text-white text-xl font-heading">Látogatószám</p>
          <p className="text-[#e5dce6] font-medium text-lg">Jelenlegi forgalom</p>
        </div>
        <div className="space-y-1">
          <p className="text-[3.5em] md:text-[3em] font-extrabold text-white leading-none font-heading mb-3">{stats.conversionRate}%</p>
          <p className="font-bold text-white text-xl font-heading">Konverzió ráta</p>
          <p className="text-[#e5dce6] font-medium text-lg">Aktuális vásárlási arány</p>
        </div>
        <div className="space-y-1">
          <p className="text-[3.5em] md:text-[3em] font-extrabold text-white leading-none font-heading mb-3">{stats.avgOrderValue} Ft</p>
          <p className="font-bold text-white text-xl font-heading">Átlagos kosárérték</p>
          <p className="text-[#e5dce6] font-medium text-lg">Ennyit ér egy vásárló</p>
        </div>
        <div className="space-y-1">
          <p className="text-[3.5em] md:text-[3em] font-extrabold text-white leading-none font-heading mb-3">{stats.adSpend / 1000}K Ft</p>
          <p className="font-bold text-white text-xl font-heading">Havi hirdetési költés</p>
          <p className="text-[#e5dce6] font-medium text-lg">Marketing kiadás</p>
        </div>
      </div>

      <p className="text-[#e5dce6] font-medium text-lg pt-2">Ez a kiindulópontunk. Itt látjuk, hol folyik el most a pénz.</p>

      <div className="space-y-8 pt-4">
        <h3 className="text-3xl md:text-[2.3rem] font-extrabold text-[#ea580c] leading-[1.3] font-heading">
          Eszerint <u className="underline-offset-4 decoration-[3px] decoration-[#ea580c]">{stats.visitors}</u> látogatóból <u className="underline-offset-4 decoration-[3px] decoration-[#ea580c]">{stats.lostSales}</u> vásárlás nélkül távozik.
        </h3>
        <p className="text-xl md:text-[1.75rem] font-extrabold text-white leading-[1.4] font-heading">
          Mi történne, ha továbbra is ugyanannyit költenél hirdetésre, ugyanannyi látogatód lenne, de <u className="underline-offset-4 decoration-2">növelnénk</u> azok számát, akik <u className="underline-offset-4 decoration-2">vásárolnak</u> is?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-6">
        {stats.projections.map((proj, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-[3.5em] md:text-[3em] font-extrabold text-white leading-none font-heading mb-3">{proj.increase}</p>
            <p className="text-xl font-bold text-white font-heading">{proj.extraRevenue}</p>
            <p className="text-[#e5dce6] font-medium text-lg pb-2">Plusz bevétel</p>
            <p className="text-[#e5dce6] font-medium text-lg">Összesen: {proj.total}</p>
          </div>
        ))}
      </div>

      <div className="pt-8 pb-4">
        <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-[6.3rem] font-extrabold text-[#ea580c] leading-[1.1] font-heading break-words">
          {stats.projections[0].increase}-nál {stats.roi} megtérülésed van.
        </h2>
      </div>

      <div className="text-center md:text-left pt-4">
        <a href="#pricing" className="inline-block w-full md:w-auto bg-[#ea580c] hover:bg-[#d03e00] text-white font-semibold py-4 px-10 rounded-md transition-colors text-xl">
          Készítsetek nekem profi landing oldalt!
        </a>
      </div>
    </section>
  );
}
