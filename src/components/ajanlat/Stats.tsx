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
    <section className="space-y-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#ef5a28] tracking-wide">
        A jelenlegi statisztikáid szerint az elmúlt 6<br/>hónapban...
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-1">
          <p className="text-4xl md:text-5xl font-bold text-white mb-3">{stats.visitors}</p>
          <p className="font-bold text-white text-lg">Látogatószám</p>
          <p className="text-sm text-slate-400 font-light">Jelenlegi forgalom</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl md:text-5xl font-bold text-white mb-3">{stats.conversionRate}%</p>
          <p className="font-bold text-white text-lg">Konverzió ráta</p>
          <p className="text-sm text-slate-400 font-light">Aktuális vásárlási arány</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl md:text-5xl font-bold text-white mb-3">{stats.avgOrderValue} Ft</p>
          <p className="font-bold text-white text-lg">Átlagos kosárérték</p>
          <p className="text-sm text-slate-400 font-light">Ennyit ér egy vásárló</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl md:text-5xl font-bold text-white mb-3">{stats.adSpend / 1000}K Ft</p>
          <p className="font-bold text-white text-lg">Havi hirdetési költés</p>
          <p className="text-sm text-slate-400 font-light">Marketing kiadás</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm font-light">Ez a kiindulópontunk. Itt látjuk, hol folyik el most a pénz.</p>

      <div className="space-y-6 pt-4">
        <h3 className="text-3xl md:text-4xl font-bold text-[#ef5a28] leading-tight">
          Eszerint <span className="underline decoration-[#ef5a28] underline-offset-4">{stats.visitors} látogatóból</span> <span className="underline decoration-[#ef5a28] underline-offset-4">{stats.lostSales} vásárlás nélkül</span><br/>távozik.
        </h3>
        <p className="text-xl md:text-2xl font-bold text-white leading-snug">
          Mi történne, ha továbbra is ugyanannyit költenél hirdetésre,<br/>
          ugyanannyi látogatód lenne, de <span className="underline decoration-white underline-offset-4">növelnénk</span> azok számát,<br/>
          akik <span className="underline decoration-white underline-offset-4">vásárolnak</span> is?
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">
        {stats.projections.map((proj, idx) => (
          <div key={idx} className="space-y-2">
            <p className="text-4xl font-bold text-white mb-4">{proj.increase}</p>
            <p className="text-lg font-bold text-white">{proj.extraRevenue}</p>
            <p className="text-sm text-slate-400 font-light pb-2">Plusz bevétel</p>
            <p className="text-sm text-slate-400 font-light">Összesen: {proj.total}</p>
          </div>
        ))}
      </div>

      <div className="pt-16 pb-8">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#ef5a28] leading-[1.1] tracking-tight">
          {stats.projections[0].increase}-nál {stats.roi}<br/>megtérülésed<br/>van.
        </h2>
      </div>

      <div className="text-center md:text-left">
        <a href="#pricing" className="inline-block bg-[#ef5a28] hover:bg-[#d94f1f] text-white font-semibold py-4 px-8 rounded-md transition-colors text-lg">
          Készítsetek nekem profi landing oldalt!
        </a>
      </div>
    </section>
  );
}
