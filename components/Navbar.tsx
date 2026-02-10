import React from 'react';
import { MousePointer2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToAudit = () => {
    const isMobile = window.innerWidth < 768;
    const element = document.getElementById(isMobile ? 'audit-form' : 'audit-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://xa5228yhxohqyplr.public.blob.vercel-storage.com/header%20text%2Bicon.webp" alt="DesignTér Logo" className="h-8 w-auto" />
        </div>
        <button 
          onClick={scrollToAudit}
          className="bg-brand-accent hover:bg-brand-accentHover text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 text-sm md:text-base"
        >
          Ingyenes Audit
        </button>
      </div>
    </nav>
  );
};

export default Navbar;