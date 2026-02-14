import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} DesignTér. Minden jog fenntartva.</p>
        <div className="flex gap-6">
          <Link to="/adatkezeles" className="hover:text-white transition-colors">Adatkezelés</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;