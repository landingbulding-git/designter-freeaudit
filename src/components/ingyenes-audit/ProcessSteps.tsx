import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      title: "Presztízs elemzés",
      paragraph: "Átvilágítjuk klinikája hirdetéseit, weboldalát és közösségi média felületeit, hogy kiszűrjünk minden olyan tényezőt, ami bizalomromboló lehet és rontja az első benyomást.",
      icon: <Award className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Etikai kontroll",
      paragraph: "Összevetjük a klinika teljes kommunikációját a MOK és az ETT Etikai kódexeivel, valamint a hirdetési platformok (Meta, Google) szabályzataival, hogy Ön pontos diagnózist kapjon a praxisát érintő esetleges etikai vagy jogi kockázatokról.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Konverziós hatékonyság-diagnózis",
      paragraph: "Megvizsgáljuk a klinika marketingfolyamatait és weboldalát, hogy megtaláljuk a rejtett akadályokat, amelyek miatt az érdeklődők nagy része foglalás nélkül távozik a weboldaláról.",
      icon: <Zap className="w-8 h-8 text-brand-accent" />,
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight mb-6">
            Így tárja fel a <span className="text-brand-accent">PEK Audit™</span> a klinikája rejtett tartalékait:
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Flow Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/5 via-brand-accent to-brand-accent/5 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/5 via-brand-accent to-brand-accent/5 md:hidden"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon Container (The "Node" on the line) */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                  <div className="w-16 h-16 bg-white rounded-2xl border-2 border-brand-accent/20 shadow-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                  <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:border-brand-accent/20 transition-colors duration-300 shadow-sm">
                    <h3 className="text-2xl font-bold text-brand-900 mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.paragraph}
                    </p>
                  </div>
                </div>

                {/* Empty Side for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;