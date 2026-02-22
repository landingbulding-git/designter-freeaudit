import React from 'react';
import { Stethoscope, PenTool, Layout } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      title: "Feliratkozás",
      desc: "Iratkozz fel a csomagunkra, és 5 perc alatt mondd el, mit szeretnél hirdetni."
    },
    {
      icon: <PenTool className="w-8 h-8 text-white" />,
      title: "Kérés",
      desc: "Kérj annyi landing oldalt és módosítást, amennyit csak akarsz, egyetlen gombnyomással."
    },
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "Átvétel",
      desc: "Kapd kézhez a konverzióra kihegyezett oldaladat átlagosan 7 napon belül."
    }
  ];

  return (
    <section className="py-24 bg-brand-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 max-w-4xl mx-auto leading-tight">
          3 lépés választ el attól, hogy a hirdetéseid eredményesebbek legyenek, mint eddig valaha.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 pt-16 flex flex-col items-center text-center transition-all duration-300 group
                ${index === 1 
                  ? 'bg-white/5 border border-brand-accent/50 shadow-[0_0_50px_-12px_rgba(255,100,0,0.3)]' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
                }
              `}
            >
              {/* Icon Container */}
              <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center border-8 border-brand-900 transition-transform duration-300 group-hover:scale-110
                ${index === 1 ? 'bg-brand-accent shadow-[0_0_20px_rgba(255,100,0,0.4)]' : 'bg-brand-accent'}
              `}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;