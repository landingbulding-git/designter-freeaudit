import React, { useState } from 'react';
import { Star, Check, Lock } from 'lucide-react';

const Closer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    website: '',
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        window.location.href = '/thank-you';
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
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            {/* Social Proof Badge */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300 bg-brand-800 w-fit px-4 py-2 rounded-full border border-brand-700 mb-8">
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
            
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 w-full shadow-2xl text-brand-900">
            <h3 id="closer-audit-heading" className="text-2xl font-bold text-brand-900 mb-2">Ingyenes Audit</h3>
            <p className="text-gray-600 mb-6">Töltsd ki az űrlapot és 48 órán belül küldjük a videós elemzést.</p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                  Keresztnév
                </label>
                <input 
                  type="text" 
                  id="firstname"
                  name="firstname"
                  placeholder="Keresztnév" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail cím
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="pelda@ceg.hu" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Weboldal URL
                </label>
                <input 
                  type="text" 
                  id="website" 
                  name="website"
                  placeholder="pl. weboldalad.hu vagy www.weboldalad.hu" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-brand-900 transition-all bg-gray-50"
                  required
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-accent hover:bg-brand-accentHover text-white font-bold text-lg py-4 rounded-lg shadow-lg transition-all duration-200 mt-2"
              >
                Kérem az auditot
              </button>
              {status && <p className="text-center mt-2">{status}</p>}
              <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                <Lock className="w-4 h-4 text-brand-900" />
                <p className="text-sm font-bold text-brand-900 text-center">
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