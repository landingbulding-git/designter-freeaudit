import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} DesignTér. Minden jog fenntartva.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Adatkezelés</a>
          <a href="#" className="hover:text-white transition-colors">ÁSZF</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;