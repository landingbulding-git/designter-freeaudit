import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">
          Köszönjük a megkeresésed!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Hamarosan felvesszük veled a kapcsolatot a megadott e-mail címen, és küldjük a személyre szabott, ingyenes auditot.
        </p>
        <Link
          to="/"
          className="inline-block bg-brand-accent hover:bg-brand-accentHover text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
