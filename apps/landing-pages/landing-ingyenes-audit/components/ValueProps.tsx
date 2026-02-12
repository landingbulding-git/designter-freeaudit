import React from 'react';
import { BrainCircuit, Zap, Smartphone } from 'lucide-react';

const ValueProps: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-brand-accent" />,
      title: "Pszichológiai Szövegírás",
      description: "Az üzenetedet a vevőd nyelvére fordítjuk. Nem az számít, mit szeretnél mondani, hanem amit a látogatódnak hallania kell ahhoz, hogy bízzon benned és cselekedjen."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-accent" />,
      title: "Akadálymentesített Felület",
      description: "Eltávolítunk minden felesleges elemet, választási pontot és „zajt”. Ami marad, az egyetlen útvonalra tereli a látogatót: a vásárlásra."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-accent" />,
      title: "Teljesítmény optimalizálás",
      description: "Hiába tökéletes az üzenet, ha az oldal 5 másodperc alatt tölt be. Gondoskodunk róla, hogy egyetlen hirdetési forintod se vesszen kárba lassú betöltés, rossz mobilnézet vagy nehézkes űrlapok miatt."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900">
            Pozicionáld magad a piacod vitathatatlan szakértőjeként egy olyan felülettel, ami azonnali bizalmat épít és vágyat ébreszt a szolgáltatásod iránt.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-orange-50 rounded-xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;