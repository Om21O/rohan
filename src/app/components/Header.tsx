'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

const HeaderSection: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-transparent">
      
      {/* Left Side */}
      <button className="flex items-center text-white space-x-2 rounded-full bg-[#1c1c1c] px-4 py-2 hover:bg-orange-600 transition">
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        
        {/* Reward Button */}
        <button className="rounded-full border border-[#333] px-4 py-2 text-sm text-orange-500 hover:bg-orange-600 hover:text-white transition">
          Reward system coming soon...
        </button>

        {/* Javin Button */}
        <button className="flex items-center space-x-2 rounded-full bg-[#1c1c1c] px-4 py-2 hover:bg-orange-600 transition">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
          <span className="text-sm font-medium text-white">Javin</span>
        </button>
        
      </div>

    </header>
  );
};

export default HeaderSection;
