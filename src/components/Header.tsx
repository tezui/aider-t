import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Project Generator
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              <Home className="w-5 h-5" />
            </Link>
            <Link to="/settings" className="text-gray-600 hover:text-gray-800">
              <Settings className="w-5 h-5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;