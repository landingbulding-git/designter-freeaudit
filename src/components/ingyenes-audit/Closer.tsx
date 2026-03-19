import React, { useState } from 'react';
import { Star, Check, Lock } from 'lucide-react';

const Closer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    website: '',
    visitors: '',
    conversions: '',
    ad_spend: '',
    aov: '',
    traffic_source: '',
    access_key: 'aa9f8e62-b6f0-43c1-9ece-521ecbd1c23a'
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        window.location.href = 'https://www.designter.hu/thank-you';
      } else {
        setStatus(result.message || 'An error occurred.');
      }
    } catch (error) {
      setStatus('An error occurred while submitting the form.');
    }
  };
  
  const benefits = [
    "Megkapod videós elemzésben a 3 legkritikusabb hibát az oldaladon",
    "Konkrét, azonnal alkalmazható javaslatokat kapsz a javításra",
    "Megtudod, mennyi bevételt hagysz az asztalon a jelenlegi konverziós rátával"
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Text Content */}
          <div className="text-left sticky top-12">
            {/* Social Proof Badge */}
            <div className="inline-flex flex-wrap items-center gap-3 text-sm font-medium text-gray-300 bg-brand-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-700/50 shadow-sm mb-8">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold text-white">5.0 Vásárlói visszajelzés</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              A weboldalad csendben szabotálja az eladásaidat. 48 órán belül megmutatjuk hol, és hogyan javítsd.
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 border border-green-500/20">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-6 md:p-10 w-full shadow-2xl text-brand-900 relative">
            <h3 id="closer-audit-heading" className="text-2xl md:text-3xl font-bold text-brand-900 mb-3">Kérem az Ingyenes Auditot</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Válaszold meg az alábbi pár kérdést, hogy pontos képet kapjunk a jelenlegi helyzetedről és 48 órán belül küldjük az elemzést!</p>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Keresztnév *
                  </label>
                  <input 
                    type="text" 
                    id="firstname"
                    name="firstname"
                    placeholder="Péter" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                    E-mail cím *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="pelda@ceg.hu" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Mi az oldalad linkje? * <span className="text-xs font-normal text-gray-500 block">Ha hirdetsz, akkor azt add meg, amit a hirdetéseidnél is megszoktál.</span>
                </label>
                <input 
                  type="text" 
                  id="website" 
                  name="website"
                  placeholder="https://..." 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50"
                  required
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="visitors" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Hány látogatód van havonta? *
                  </label>
                  <select 
                    id="visitors" 
                    name="visitors"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50 appearance-none cursor-pointer"
                    required
                    value={formData.visitors}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Válassz...</option>
                    <option value="0 - 1.000 (1 pont)">0 - 1.000</option>
                    <option value="1.000 - 5.000 (4 pont)">1.000 - 5.000</option>
                    <option value="5.000 - 20.000 (8 pont)">5.000 - 20.000</option>
                    <option value="20.000+ (10 pont)">20.000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="conversions" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Vásárlás/lead havonta? *
                  </label>
                  <select 
                    id="conversions" 
                    name="conversions"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50 appearance-none cursor-pointer"
                    required
                    value={formData.conversions}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Válassz...</option>
                    <option value="0 - 10 (1 pont)">0 - 10</option>
                    <option value="10 - 50 (4 pont)">10 - 50</option>
                    <option value="50 - 200 (7 pont)">50 - 200</option>
                    <option value="200 - 500 (9 pont)">200 - 500</option>
                    <option value="500+ (10 pont)">500+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ad_spend" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Havi hirdetési költés? *
                  </label>
                  <select 
                    id="ad_spend" 
                    name="ad_spend"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50 appearance-none cursor-pointer"
                    required
                    value={formData.ad_spend}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Válassz...</option>
                    <option value="0 Ft (0 pont)">0 Ft</option>
                    <option value="100.000 Ft alatt (2 pont)">100.000 Ft alatt</option>
                    <option value="100.000 - 300.000 Ft (5 pont)">100.000 - 300.000 Ft</option>
                    <option value="300.000 - 1.000.000 Ft (8 pont)">300.000 - 1.000.000 Ft</option>
                    <option value="1.000.000 - 3.000.000 Ft (10 pont)">1.000.000 - 3.000.000 Ft</option>
                    <option value="3.000.000 Ft felett (12 pont)">3.000.000 Ft felett</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="aov" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Átlagos vásárlás értéke (AOV)? *
                  </label>
                  <select 
                    id="aov" 
                    name="aov"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50 appearance-none cursor-pointer"
                    required
                    value={formData.aov}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Válassz...</option>
                    <option value="10.000 Ft alatt (2 pont)">10.000 Ft alatt</option>
                    <option value="10.000 - 50.000 Ft (5 pont)">10.000 - 50.000 Ft</option>
                    <option value="50.000 - 200.000 Ft (8 pont)">50.000 - 200.000 Ft</option>
                    <option value="200.000 Ft felett (10 pont)">200.000 Ft felett</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="traffic_source" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Mi a legfőbb forgalmi forrásod? *
                </label>
                <select 
                  id="traffic_source" 
                  name="traffic_source"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50 appearance-none cursor-pointer"
                  required
                  value={formData.traffic_source}
                  onChange={handleChange}
                >
                  <option value="" disabled>Válassz egyet...</option>
                  <option value="Meta hirdetések (5 pont)">Meta hirdetések</option>
                  <option value="Google Ads (5 pont)">Google Ads</option>
                  <option value="Influenszerek (4 pont)">Influenszerek</option>
                  <option value="Organikus közösségi média (2 pont)">Organikus közösségi média</option>
                  <option value="Google keresés (SEO) (2 pont)">Google keresés (SEO)</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 transform hover:-translate-y-1 mt-4"
              >
                Kérem az auditot
              </button>

              {status && (
                <p className="text-center mt-2 font-medium text-brand-accent">
                  {status}
                </p>
              )}

              <div className="flex items-center justify-center gap-2 mt-4 p-4 bg-green-50 rounded-xl border border-green-100">
                <Lock className="w-4 h-4 text-green-600" />
                <p className="text-sm font-bold text-green-800 text-center">
                  Az audit 100%-ban ingyenes és kötelezettségmentes.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Closer;