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
    <section className="bg-[#1e293b] rounded-[2rem] p-10 md:p-16 shadow-[0_0.5rem_0_0_#ea580c] space-y-16">
      <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#ea580c] leading-tight font-heading">
        A jelenlegi statisztikáid szerint az elmúlt 6 hónapban...
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center space-y-1">
          <p className="text-[2.65em] font-extrabold text-white leading-none font-heading mb-3">{stats.visitors}</p>
          <p className="font-bold text-white text-lg font-heading">Látogatószám</p>
          <p className="text-[#e5dce6] font-medium text-base">Jelenlegi forgalom</p>
        </div>
        <div className="text-center space-y-1">
          <p className="text-[2.65em] font-extrabold text-white leading-none font-heading mb-3">{stats.conversionRate}%</p>
          <p className="font-bold text-white text-lg font-heading">Konverzió ráta</p>
          <p className="text-[#e5dce6] font-medium text-base">Aktuális vásárlási arány</p>
        </div>
        <div className="text-center space-y-1">
          <p className="text-[2.65em] font-extrabold text-white leading-none font-heading mb-3">{stats.avgOrderValue} Ft</p>
          <p className="font-bold text-white text-lg font-heading">Átlagos kosárérték</p>
          <p className="text-[#e5dce6] font-medium text-base">Ennyit ér egy vásárló</p>
        </div>
        <div className="text-center space-y-1">
          <p className="text-[2.65em] font-extrabold text-white leading-none font-heading mb-3">{stats.adSpend / 1000}K Ft</p>
          <p className="font-bold text-white text-lg font-heading">Havi hirdetési költés</p>
          <p className="text-[#e5dce6] font-medium text-base">Marketing kiadás</p>
        </div>
      </div>

      <p className="text-[#e5dce6] font-medium text-base pt-2">Ez a kiindulópontunk. Itt látjuk, hol folyik el most a pénz.</p>

      <div className="space-y-8 pt-4">
        <h3 className="text-3xl md:text-[2rem] font-extrabold text-[#ea580c] leading-[1.3] font-heading">
          Eszerint <u className="underline-offset-4 decoration-[3px] decoration-[#ea580c]">{stats.visitors}</u> látogatóból <u className="underline-offset-4 decoration-[3px] decoration-[#ea580c]">{stats.lostSales}</u> vásárlás nélkül távozik.
        </h3>
        <p className="text-xl md:text-[1.5rem] font-extrabold text-white leading-[1.4] font-heading">
          Mi történne, ha továbbra is ugyanannyit költenél hirdetésre, ugyanannyi látogatód lenne, de <u className="underline-offset-4 decoration-2">növelnénk</u> azok számát, akik <u className="underline-offset-4 decoration-2">vásárolnak</u> is?
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">
        {stats.projections.map((proj, idx) => (
          <div key={idx} className="text-center space-y-1">
            <p className="text-[2.65em] font-extrabold text-white leading-none font-heading mb-3">{proj.increase}</p>
            <p className="text-lg font-bold text-white font-heading">{proj.extraRevenue}</p>
            <p className="text-[#e5dce6] font-medium text-base pb-2">Plusz bevétel</p>
            <p className="text-[#e5dce6] font-medium text-base">Összesen: {proj.total}</p>
          </div>
        ))}
      </div>

      <div className="pt-8 pb-4 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#ea580c] leading-[1.1] font-heading">
          {stats.projections[0].increase}-nál {stats.roi} megtérülésed van.
        </h2>
      </div>

      <div className="text-center pt-4">
        <a href="#pricing" className="inline-block bg-[#ea580c] hover:bg-[#d03e00] text-white font-semibold py-4 px-10 rounded-md transition-colors text-lg">
          Készítsetek nekem profi landing oldalt!
        </a>
      </div>
    </section>
  );
}
