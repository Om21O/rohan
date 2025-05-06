'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

const SearchBarSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center flex-1 min-h-screen text-white text-center px-4 py-10 overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image/bg.png"
          alt="Background"
          className="w-full h-full object-cover object-top opacity-100"
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center space-y-10">
        
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg">
            <Image
              src="/image/concept 6.png"
              alt="Javin Logo"
              width={40}
              height={40}
              className="rounded"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold">Javin</h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-[680px] p-2 border border-orange-500 rounded-lg bg-[#1a1a1a]">
          <input
            type="text"
            placeholder="Ask me anything about crypto"
            className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 px-2"
          />
          <button className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] shadow-[0_0_6px_rgba(255,255,255,0.2)_inset] flex items-center justify-center">
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Subtext */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          A focused, no-nonsense AI search engine for crypto. <br /> (Can add a more detailed subheading)
        </p>

      </div>

    </section>
  );
};

export default SearchBarSection;
