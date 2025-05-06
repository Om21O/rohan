'use client';
import React from 'react';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

const SearchBarSection = () => {
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
        
        {/* Logo and title */}
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


        {/* Search bar */}
        <div className="flex items-center w-full max-w-md p-2 border border-orange-500 rounded-lg bg-[#1a1a1a]">
  <input
    type="text"
    placeholder="Ask me anything about crypto"
    className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 px-2"
  />
  <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border border-gray-700 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),inset_-4px_-4px_8px_rgba(0,0,0,0.5),0_4px_8px_rgba(0,0,0,0.5)] flex items-center justify-center ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</div>

        {/* Subtext */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          A focused, no-nonsense AI search engine for crypto. <br /> (Can add a more detailed subheading)
        </p>

      </div> {/* <<<<< this div closes the center content correctly */}

    </section>
  );
};

export default SearchBarSection;
