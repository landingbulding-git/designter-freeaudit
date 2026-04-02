import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      title: "Presztízs elemzés",
      paragraph: "Átvilágítjuk klinikája hirdetéseit, weboldalát és közösségi média felületeit, hogy kiszűrjünk minden olyan tényezőt, ami bizalomromboló lehet és rontja az első benyomást.",
      icon: <Award className="w-12 h-12 text-brand-accent" />,
      imageBg: "bg-blue-50"
    },
    {
      title: "Etikai kontroll",
      paragraph: "Összevetjük a klinika teljes kommunikációját a MOK és az ETT Etikai kódexeivel, valamint a hirdetési platformok (Meta, Google) szabályzataival, hogy Ön pontos diagnózis kapjon a praxisát érintő esetleges etikai vagy jogi kockázatokról.",
      icon: <ShieldCheck className="w-12 h-12 text-brand-accent" />,
      imageBg: "bg-brand-900"
    },
    {
      title: "Konverziós hatékonyság-diagnózis",
      paragraph: "Megvizsgáljuk a klinika marketingfolyamatait és weboldalát, hogy megtaláljuk a rejtett akadályokat, amelyek miatt az érdeklődők nagy része foglalás nélkül távozik a weboldaláról.",
      icon: <Zap className="w-12 h-12 text-brand-accent" />,
      imageBg: "bg-gray-100"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight mb-6">
            Így tárja fel a <span className="text-brand-accent">PEK Audit™</span> a klinikája rejtett tartalékait:
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Content Side */}
              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 mb-2">
                  {step.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-900 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                  {step.paragraph}
                </p>
              </div>

              {/* Visual Side (Placeholder for now with elegant background and icon) */}
              <div className="flex-1 w-full max-w-lg">
                <div className={`aspect-[4/3] ${step.imageBg} rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl border border-gray-100 group`}>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                  
                  {/* Large Stylized Icon for Visual Interest */}
                  <div className="relative transform group-hover:scale-110 transition-transform duration-500 ease-out opacity-40">
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-48 h-48 text-brand-accent/40" })}
                  </div>

                  {/* Glassmorphism Badge */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg flex items-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm font-bold text-brand-900 uppercase tracking-wider">Szakmai Protokoll</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;