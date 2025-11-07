
import React from 'react';
import { LogoIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <LogoIcon className="w-8 h-8 text-yellow-500" />
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            LunchEasy <span className="text-yellow-500">AI</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
