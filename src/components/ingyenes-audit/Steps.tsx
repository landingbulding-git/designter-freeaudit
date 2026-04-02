import React from 'react';
import { ClipboardCheck, Video, MailOpen } from 'lucide-react';

const Steps: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Igényelje az Auditot",
      description: "Adja meg klinikája adatait a fenti űrlapon (kb. 60 másodperc).",
      icon: <ClipboardCheck className="w-8 h-8 text-brand-accent" />
    },
    {
      number: "2",
      title: "Elkészítjük az elemzést:",
      description: "Személyesen készítem el a 15-20 perces videós diagnózist a 9 kritikus pont feltárásával.",
      icon: <Video className="w-8 h-8 text-brand-accent" />
    },
    {
      number: "3",
      title: "E-mailben értesítjük:",
      description: "72 órán belül megkapja a privát linket a konkrét szakmai javaslatokkal.",
      icon: <MailOpen className="w-8 h-8 text-brand-accent" />
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              {/* Icon & Number Circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center border border-brand-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-900 text-white text-sm font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-brand-900 mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Steps;