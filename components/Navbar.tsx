import React from 'react';
import { MousePointer2 } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-accent p-2 rounded-lg">
            <MousePointer2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-900">DesignTér</span>
        </div>
        <button 
          onClick={onCtaClick}
          className="bg-brand-accent hover:bg-brand-accentHover text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 text-sm md:text-base"
        >
          Ingyenes Audit
        </button>
      </div>
    </nav>
  );
};

export default Navbar;