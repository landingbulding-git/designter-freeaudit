import React from 'react';

export default function Hero({ clientName, companyName }: { clientName: string, companyName: string }) {
  return (
    <section className="bg-[#1e293b] rounded-[2rem] overflow-hidden flex flex-col md:flex-row min-h-[60vh] md:min-h-[40rem] shadow-[0_0.5rem_0_0_#ea580c]">
      <div className="flex-[1.2] p-8 md:p-16 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold text-[#ea580c] leading-[1.15] mb-8 font-heading">
          Hogyan hozzunk ki maximumot a hirdetési keretedből?
        </h1>
        <p className="text-xl md:text-2xl text-[#e5dce6] font-medium">
          Személyre szabott CRO ajánlat {clientName} ({companyName}) részére.
        </p>
      </div>
      <div 
        className="flex-1 min-h-[25rem] md:min-h-full bg-cover bg-center border-t-2 md:border-t-0 md:border-l-2 border-[#1e293b]" 
        style={{ backgroundImage: 'url("https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/f7qbj53x16le5jb/354e7c28c416479d9046c894a738492c/original/Screenshot-2026-03-16-at-18.38.38.png")' }}
      >
      </div>
    </section>
  );
}
