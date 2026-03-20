import React, { useState, useEffect } from 'react';
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
    type: 'range',
    label: 'Hány látogatód van átlagosan egy hónapban?',
    options: [
      '500', '1.000', '1.500', '2.000', '2.500', '3.000', '3.500', '4.000', '4.500', '5.000', 
      '5.500', '6.000', '6.500', '7.000', '7.500', '8.000', '8.500', '9.000', '9.500', '10.000',
      '10.500', '11.000', '11.500', '12.000', '12.500', '13.000', '13.500', '14.000', '14.500', '15.000',
      '15.500', '16.000', '16.500', '17.000', '17.500', '18.000', '18.500', '19.000', '19.500', '20.000+'
    ]
  },
  {
    id: 'customers',
    type: 'range',
    label: 'Hány vásárlás/lead érkezik havonta az oldalon keresztül?',
    options: [
      '5', '10', '15', '20', '25', '30', '35', '40', '45', '50',
      '55', '60', '65', '70', '75', '80', '85', '90', '95', '100',
      '105', '110', '115', '120', '125', '130', '135', '140', '145', '150',
      '155', '160', '165', '170', '175', '180', '185', '190', '195', '200+'
    ]
  },
  {
    id: 'adcost',
    type: 'range',
    label: 'Mennyit költesz havonta hirdetésre?',
    options: [
      '0 Ft', '50.000 Ft', '100.000 Ft', '150.000 Ft', '200.000 Ft', '250.000 Ft', '300.000 Ft', '350.000 Ft', '400.000 Ft', '450.000 Ft',
      '500.000 Ft', '550.000 Ft', '600.000 Ft', '650.000 Ft', '700.000 Ft', '750.000 Ft', '800.000 Ft', '850.000 Ft', '900.000 Ft', '950.000 Ft',
      '1.000.000 Ft', '1.050.000 Ft', '1.100.000 Ft', '1.150.000 Ft', '1.200.000 Ft', '1.250.000 Ft', '1.300.000 Ft', '1.350.000 Ft', '1.400.000 Ft', '1.450.000 Ft',
      '1.500.000 Ft', '1.550.000 Ft', '1.600.000 Ft', '1.650.000 Ft', '1.700.000 Ft', '1.750.000 Ft', '1.800.000 Ft', '1.850.000 Ft', '1.900.000 Ft', '2.000.000 Ft+'
    ]
  },
  {
    id: 'AOV',
    type: 'range',
    label: 'Mennyi egy átlagos vásárlás értéke (AOV / LTV)?',
    options: [
      '5.000 Ft', '10.000 Ft', '15.000 Ft', '20.000 Ft', '25.000 Ft', '30.000 Ft', '35.000 Ft', '40.000 Ft', '45.000 Ft', '50.000 Ft',
      '55.000 Ft', '60.000 Ft', '65.000 Ft', '70.000 Ft', '75.000 Ft', '80.000 Ft', '85.000 Ft', '90.000 Ft', '95.000 Ft', '100.000 Ft',
      '105.000 Ft', '110.000 Ft', '115.000 Ft', '120.000 Ft', '125.000 Ft', '130.000 Ft', '135.000 Ft', '140.000 Ft', '145.000 Ft', '150.000 Ft',
      '155.000 Ft', '160.000 Ft', '165.000 Ft', '170.000 Ft', '175.000 Ft', '180.000 Ft', '185.000 Ft', '190.000 Ft', '195.000 Ft', '200.000 Ft+'
    ]
  },
  {
    id: 'fromwhere',
    type: 'radio',
    label: 'Mi a legfőbb forgalmi forrásod?',
    options: [
      'Meta hirdetések',
      'Google Ads',
      'Influenszerek',
      'Organikus közösségi média',
      'Google keresés (SEO)'
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const domain = params.get('domain');

    if (name || domain) {
      setFormData(prev => ({
        ...prev,
        firstname: name ? (name.charAt(0).toUpperCase() + name.slice(1)) : prev.firstname,
        website: domain || prev.website
      }));
    }
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRangeChange = (questionId: string, value: string) => {
    setFormData({
      ...formData,
      [questionId]: value
    });
  };

  const isCurrentStepValid = () => {
    const question = QUESTIONS[currentStep];
    if (question.type === 'text') {
      return formData[question.id].trim().length > 0;
    }
    if (question.type === 'radio' || question.type === 'range') {
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
    
    // Prepare a clean payload for Web3Forms
    const payload: Record<string, any> = {
      access_key: 'aa9f8e62-b6f0-43c1-9ece-521ecbd1c23a',
      subject: `Ingyenes Audit Igénylés - ${formData.firstname}`,
      from_name: 'DesignTér Audit',
      keresztnev: formData.firstname,
      email: formData.email,
      weboldal: formData.website,
    };

    // Map the question labels to their selected values for the email
    QUESTIONS.forEach(q => {
      if (q.type === 'radio' || q.type === 'range') {
        payload[q.label] = formData[q.id] || 'Nincs megadva';
      }
    });

    try {
      // Send to Web3Forms (Primary)
      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      // Send to Lupio Webhook (Secondary)
      await fetch('https://demo.lupio.hu/webhook/7a088940-a253-4229-9dc7-113a721f1630', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const result = await web3Response.json();
      if (result.success) {
        if (typeof window !== 'undefined') {
          window.location.href = 'https://landing.designter.hu/ingyenes-audit/thank-you';
        }
      } else {
        setStatus(result.message || 'Hiba történt a küldés során.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
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

              {question.type === 'range' && (
                <div className="flex flex-col gap-6 pt-4">
                  <div className="relative">
                    <input 
                      type="range"
                      min="0"
                      max={question.options.length - 1}
                      value={question.options.indexOf(formData[question.id]) === -1 ? 0 : question.options.indexOf(formData[question.id])}
                      onChange={(e) => handleRangeChange(question.id, question.options[parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                       <span>{question.options[0]}</span>
                       <span>{question.options[question.options.length - 1]}</span>
                    </div>
                  </div>
                  <div className="text-center bg-gray-50 py-3 rounded-lg border border-gray-100">
                    <span className="text-xl font-bold text-brand-accent">
                      {formData[question.id] || question.options[0]}
                    </span>
                  </div>
                </div>
              )}

              {question.type === 'radio' && question.options && (
                <div className="flex flex-col gap-3">
                  {question.options.map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleRangeChange(question.id, option)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                        formData[question.id] === option 
                          ? 'border-brand-accent bg-brand-accent/5' 
                          : 'border-gray-100 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`text-lg ${formData[question.id] === option ? 'font-bold text-brand-accent' : 'font-medium text-gray-700'}`}>
                        {option}
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
