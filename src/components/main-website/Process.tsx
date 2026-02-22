import React from 'react';
import { Stethoscope, PenTool, Layout, LineChart } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Stethoscope className="w-6 h-6 text-white" />,
      title: "Feliratkozás",
      desc: "Iratkozz fel a csomagunkra, és 5 perc alatt mondd el, mit szeretnél hirdetni."
    },
    {
      number: "02",
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Kérés",
      desc: "Kérj annyi landing oldalt és módosítást, amennyit csak akarsz, egyetlen gombnyomással."
    },
    {
      number: "03",
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "Átvétel",
      desc: "Kapd kézhez a konverzióra kihegyezett oldaladat átlagosan 7 napon belül."
    }
  ];

  return (
    <section className="py-20 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          3 lépés választ el attól, hogy a hirdetéseid eredményesebbek legyenek, mint eddig valaha.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-800 -z-0 transform translate-y-4"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center mb-6 shadow-lg border-4 border-brand-900">
                {step.icon}
              </div>
              <span className="text-brand-800 font-black text-6xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 -z-10 opacity-20 select-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;