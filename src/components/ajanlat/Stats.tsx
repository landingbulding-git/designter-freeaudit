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
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-orange-500">
        A jelenlegi statisztikáid szerint az elmúlt 6 hónapban...
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <p className="text-4xl font-bold text-slate-100">{stats.visitors}</p>
          <p className="font-semibold text-slate-300">Látogatószám</p>
          <p className="text-sm text-slate-400">Jelenlegi forgalom</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-bold text-slate-100">{stats.conversionRate}%</p>
          <p className="font-semibold text-slate-300">Konverzió ráta</p>
          <p className="text-sm text-slate-400">Aktuális vásárlási arány</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-bold text-slate-100">{stats.avgOrderValue} Ft</p>
          <p className="font-semibold text-slate-300">Átlagos kosárérték</p>
          <p className="text-sm text-slate-400">Ennyit ér egy vásárló</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-bold text-slate-100">{stats.adSpend / 1000}K Ft</p>
          <p className="font-semibold text-slate-300">Havi hirdetési költés</p>
          <p className="text-sm text-slate-400">Marketing kiadás</p>
        </div>
      </div>

      <p className="text-slate-400 italic">Ez a kiindulópontunk. Itt látjuk, hol folyik el most a pénz.</p>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-orange-500">
          Eszerint <span className="underline decoration-orange-500">{stats.visitors} látogatóból</span> <span className="underline decoration-orange-500">{stats.lostSales} vásárlás nélkül</span> távozik.
        </h3>
        <p className="text-xl font-medium text-slate-200">
          Mi történne, ha továbbra is ugyanannyit költenél hirdetésre, ugyanannyi látogatód lenne, de <span className="underline decoration-slate-200">növelnénk</span> azok számát, akik <span className="underline decoration-slate-200">vásárolnak</span> is?
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.projections.map((proj, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700/50 space-y-3">
            <p className="text-3xl font-bold text-slate-100">{proj.increase}</p>
            <p className="text-lg font-bold text-orange-400">{proj.extraRevenue}</p>
            <p className="text-sm text-slate-400">Plusz bevétel</p>
            <div className="pt-3 border-t border-slate-700">
              <p className="text-sm text-slate-300">Összesen:</p>
              <p className="font-semibold text-slate-200">{proj.total}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <h2 className="text-5xl md:text-7xl font-black text-orange-500 leading-tight">
          {stats.projections[0].increase}-nál {stats.roi} <br/>megtérülésed van.
        </h2>
        <div className="mt-12">
          <a href="#pricing" className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-orange-500/20">
            Készítsetek nekem profi landing oldalt!
          </a>
        </div>
      </div>
    </section>
  );
}
