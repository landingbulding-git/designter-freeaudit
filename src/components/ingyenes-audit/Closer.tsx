import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Lock } from 'lucide-react';

const QUESTIONS = [
  {
    id: 'website',
    type: 'text',
    label: 'Mi az oldalad linkje?',
    sublabel: 'Ha hirdetsz, akkor azt add meg, amit a hirdetéseidnél is megszoktál.'
  },
  {
    id: 'visitors',
    type: 'radio',
    label: 'Hány látogatód van átlagosan egy hónapban?',
    options: [
      { id: 'assmof0ch2sec28ttogabfnr', label: '0 - 1.000', points: 1 },
      { id: 'o3uh1sdfpb8k09ge4sfkq9zx', label: '1.000 - 5.000', points: 4 },
      { id: 'f0ds8d21vt4thjjgc1wwwiqj', label: '5.000 - 20.000', points: 8 },
      { id: 'j2pzkotze87rcyggdkf96xar', label: '20.000+', points: 10 }
    ]
  },
  {
    id: 'customers',
    type: 'radio',
    label: 'Hány vásárlás/lead érkezik havonta az oldalon keresztül?',
    options: [
      { id: 'i7j4qjjj1pce2kew573g0i1t', label: '0 - 10', points: 1 },
      { id: 'g9l88autmpov7gh851x7l4h2', label: '10 - 50', points: 4 },
      { id: 'zms6ln1qwn2ecqczxz7okiq7', label: '50 - 200', points: 7 },
      { id: 'wsgd5xi6frevd9nqbnalg4we', label: '200 - 500', points: 9 },
      { id: 'e5zuhqvjcwktcovm8wmap2fv', label: '500+', points: 10 }
    ]
  },
  {
    id: 'adcost',
    type: 'radio',
    label: 'Mennyit költesz havonta hirdetésre?',
    options: [
      { id: 'bmlc078so958fex7unur1rpz', label: '0 Ft', points: 0 },
      { id: 'sn0jev8qakmh6y6ubceqpx1l', label: '100.000 Ft alatt', points: 2 },
      { id: 'n50xmdtt1bv6q6r2ff67bztk', label: '100.000 - 300.000 Ft', points: 5 },
      { id: 'jmhcnl5oohwppp43lkbg7y4u', label: '300.000 - 1.000.000 Ft', points: 8 },
      { id: 'h8iou3vpm1cvk098i5cpb9n0', label: '1.000.000 - 3.000.000 Ft', points: 10 },
      { id: 'nmbrfo1v3d0icgt3zy3gbt5p', label: '3.000.000 Ft felett', points: 12 }
    ]
  },
  {
    id: 'AOV',
    type: 'radio',
    label: 'Mennyi egy átlagos vásárlás értéke (AOV / LTV)?',
    options: [
      { id: 'n3vt24drwc99u4d52mlqpams', label: '10.000 Ft alatt', points: 2 },
      { id: 'x5wsqgc0pgitpmak8q6tpy34', label: '10.000 - 50.000 Ft', points: 5 },
      { id: 'vh0brm90p8hhxzbojoneftvv', label: '50.000 - 200.000 Ft', points: 8 },
      { id: 'xu4y5iu8w9264tq6p07wj4im', label: '200.000 Ft felett', points: 10 }
    ]
  },
  {
    id: 'fromwhere',
    type: 'radio',
    label: 'Mi a legfőbb forgalmi forrásod?',
    options: [
      { id: 'g7vami2mg3fjptttvgt46o2r', label: 'Meta hirdetések', points: 5 },
      { id: 'mf4mgr6hf42tq9c73lr3v67f', label: 'Google Ads', points: 5 },
      { id: 'tlc0s2pkmmb1wx4ccu0y0nwb', label: 'Influenszerek', points: 4 },
      { id: 'dad500hjo2enyvitf6fwklp0', label: 'Organikus közösségi média', points: 2 },
      { id: 'yghsi7ggk1m4p8ljraq5grjt', label: 'Google keresés (SEO)', points: 2 }
    ]
  },
  {
    id: 'contact',
    type: 'contact',
    label: 'Hova küldhetjük az ingyenes auditot?'
  }
];

const Closer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({
    website: '',
    visitors: '',
    customers: '',
    adcost: '',
    AOV: '',
    fromwhere: '',
    firstname: '',
    email: ''
  });
  const [status, setStatus] = useState('');

  const calculateScore = () => {
    let score = 0;
    QUESTIONS.forEach(q => {
      if (q.type === 'radio' && q.options) {
        const selectedId = formData[q.id];
        const option = q.options.find(o => o.id === selectedId);
        if (option) {
          score += option.points;
        }
      }
    });
    return score;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRadioSelect = (questionId: string, optionId: string) => {
    setFormData({
      ...formData,
      [questionId]: optionId
    });
    
    // Auto-advance on radio select after a short delay
    setTimeout(() => {
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 300);
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isCurrentStepValid = () => {
    const question = QUESTIONS[currentStep];
    if (question.type === 'text') {
      return formData[question.id].trim().length > 0;
    }
    if (question.type === 'radio') {
      return formData[question.id] !== '';
    }
    if (question.type === 'contact') {
      return formData.firstname.trim().length > 0 && formData.email.trim().length > 0 && formData.email.includes('@');
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCurrentStepValid()) return;

    setStatus('Küldés folyamatban...');
    
    const score = calculateScore();
    
    // Prepare a clean payload for Web3Forms
    const payload: Record<string, any> = {
      access_key: 'aa9f8e62-b6f0-43c1-9ece-521ecbd1c23a',
      subject: `Ingyenes Audit Igénylés - ${formData.firstname}`,
      from_name: 'DesignTér Audit',
      keresztnev: formData.firstname,
      email: formData.email,
      weboldal: formData.website,
      osszpontszam: score,
    };

    // Map the question labels to their selected option labels for the email
    QUESTIONS.forEach(q => {
      if (q.type === 'radio' && q.options) {
        const option = q.options.find(o => o.id === formData[q.id]);
        // Use the question label as the key in the email for better readability
        payload[q.label] = option ? option.label : 'Nincs megadva';
      }
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      if (result.success) {
        window.location.href = 'https://landing.designter.hu/ingyenes-audit/thank-you';
      } else {
        setStatus(result.message || 'Hiba történt a küldés során.');
      }
    } catch (error) {
      setStatus('Hiba történt a küldés során.');
    }
  };

  const question = QUESTIONS[currentStep];
  const progress = ((currentStep) / QUESTIONS.length) * 100;

  return (
    <section id="closer-audit-heading" className="py-24 bg-brand-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-2xl w-full mx-auto px-4 relative z-10">
        
        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-brand-900 w-full min-h-[400px] flex flex-col">
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
            <div 
              className="bg-brand-accent h-2 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex-grow flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{question.label}</h2>
            {question.sublabel && <p className="text-gray-500 mb-6 text-sm">{question.sublabel}</p>}
            
            <div className="mt-4">
              {question.type === 'text' && (
                <input 
                  type="text" 
                  name={question.id}
                  placeholder="https://..." 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-lg transition-all bg-gray-50"
                  value={formData[question.id]}
                  onChange={handleInputChange}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && isCurrentStepValid()) {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                />
              )}

              {question.type === 'radio' && question.options && (
                <div className="flex flex-col gap-3">
                  {question.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleRadioSelect(question.id, option.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                        formData[question.id] === option.id 
                          ? 'border-brand-accent bg-brand-accent/5' 
                          : 'border-gray-100 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`text-lg ${formData[question.id] === option.id ? 'font-bold text-brand-accent' : 'font-medium text-gray-700'}`}>
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {question.type === 'contact' && (
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Keresztnév *</label>
                    <input 
                      type="text" 
                      name="firstname"
                      placeholder="Péter" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-lg transition-all bg-gray-50"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">E-mail cím *</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="pelda@ceg.hu" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none text-lg transition-all bg-gray-50"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center justify-between pt-6 border-t border-gray-100">
            {currentStep > 0 ? (
              <button 
                onClick={handleBack}
                type="button"
                className="flex items-center gap-2 text-gray-500 hover:text-brand-900 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Vissza
              </button>
            ) : <div></div>}

            {currentStep < QUESTIONS.length - 1 ? (
              <button 
                onClick={handleNext}
                type="button"
                disabled={!isCurrentStepValid()}
                className="flex items-center gap-2 bg-brand-900 hover:bg-brand-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                Tovább <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                type="button"
                disabled={!isCurrentStepValid() || status !== ''}
                className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover disabled:bg-brand-accent/50 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
              >
                {status ? status : 'Audit Kérése'} <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {currentStep === QUESTIONS.length - 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <Lock className="w-3.5 h-3.5 text-gray-400" />
              <p className="text-xs font-medium text-gray-500 text-center">
                Az audit 100%-ban ingyenes és kötelezettségmentes.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Closer;
