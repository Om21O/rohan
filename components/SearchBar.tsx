'use client';
import React from 'react';
import { ArrowUp } from 'lucide-react';

const SearchBarSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center flex-1 min-h-[80vh] text-white text-center px-4 py-10">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <img src="/background-dots.png" alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center space-y-10">
        
        {/* Logo and title */}
        <div className="flex items-center space-x-3">
          <div className="bg-orange-600 p-2 rounded-lg">
            {/* This small logo box */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.56 3.35 1.5 4.65L12 22l5.5-8.35C18.44 12.35 19 10.74 19 9c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Javin</h1>
        </div>

        {/* Search bar */}
        <div className="relative w-full max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Ask me anything about crypto"
            className="w-full rounded-2xl bg-[#1c1c1c] border border-orange-500 py-5 px-6 text-lg focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#2a2a2a] hover:bg-orange-600 p-3 rounded-full transition">
            <ArrowUp size={20} color="white" />
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
