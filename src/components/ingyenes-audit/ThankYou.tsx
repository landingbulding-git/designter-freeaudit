import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const ThankYou: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setName(params.get('name') || '');
      setEmail(params.get('email') || '');
      setLink(params.get('link') || '');
    }
  }, []);

  // Construct iframe URL based on user instructions
  // Using standard query string formatting, assuming 'analyzer' is the video ID
  const iframeUrl = `https://videoform.vercel.app/v/analyzer?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&link=${encodeURIComponent(link)}`;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100dvh] bg-brand-900 text-center px-4 py-12 overflow-hidden">
      {/* Decorative background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[100px] rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl">
        {/* Content Box with Alarm Icon integrated to save space */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-brand-800/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center border border-brand-accent/30 animate-pulse">
                <AlertTriangle className="w-6 h-6 text-brand-accent" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center md:text-left">
              Ahogy egy remek orvos, úgy én is adatokra alapozom a diagnózisomat. Kérem, válaszoljon a videós kérdésekre a megerősítéshez.
            </p>
          </div>
        </div>
        
        {/* Embedded Iframe - Placed below the box and made much wider and taller */}
        <div className="w-full max-w-6xl mt-8 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-brand-900/50 aspect-[9/16] md:aspect-video relative z-10">
          <iframe
            src={iframeUrl}
            className="absolute top-0 left-0 w-full h-full"
            allow="camera; microphone; fullscreen"
            title="Videoform Analyzer"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default ThankYou;
