'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const tabs = ['Featured', 'General', 'Research', 'Transaction', 'Chains'];

const useCases = [
  {
    title: "Whats blockchain and how it work",
    description:
      "Here we will write a detailed prompt which user can just click on and it will run in the chats.",
  },
  {
    title: "Whats blockchain and how it work",
    description:
      "Here we will write a detailed prompt which user can just click on and it will run in the chats.",
  },
  {
    title: "Whats blockchain and how it work",
    description:
      "Here we will write a detailed prompt which user can just click on and it will run in the chats.",
  },
  {
    title: "Whats blockchain and how it work",
    description:
      "Here we will write a detailed prompt which user can just click on and it will run in the chats.",
  },
  {
    title: "Whats blockchain and how it work",
    description:
      "Here we will write a detailed prompt which user can just click on and it will run in the chats.",
  },
  {
    title: "Whats blockchain and how it work",
    description:
      "Here we will write a detailed prompt which user can just click on and it will run in the chats.",
  },
  {
    title: "Whats blockchain and how it work",
    description:
      "Here we will write a detailed prompt which user can just click on and it will run in the chats.",
  },
];

const UseCaseGallery = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  return (
    <section className="w-full flex flex-col items-center justify-center mt-32 space-y-8">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-white text-4xl font-bold">Use case gallery</h2>
        <p className="text-gray-400 text-center text-sm max-w-md">
          A focused, no-nonsense AI search engine for crypto. {`(Can add a more detailed subheading)`}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              activeTab === tab
                ? 'bg-orange-600 text-white'
                : 'bg-[#121212] text-white border border-[#242424]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Top 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {useCases.slice(0, 4).map((useCase, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-[#121212] rounded-2xl p-6 space-y-4 text-white group overflow-hidden"
          >
            {/* Glowing gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl pointer-events-none" />

            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-[#1c1c1c] rounded-lg z-10">
              <Search size={20} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold z-10">{useCase.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm z-10">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom 3 cards centered */}
      <div className="flex justify-center flex-wrap gap-6 mt-8">
        {useCases.slice(4).map((useCase, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-[#121212] rounded-2xl p-6 space-y-4 text-white group overflow-hidden w-full md:w-[300px]"
          >
            {/* Glowing gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl pointer-events-none" />

            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-[#1c1c1c] rounded-lg z-10">
              <Search size={20} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold z-10">{useCase.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm z-10">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseGallery;
