'use client';

import React from 'react';
import { Search } from 'lucide-react'; // Correct magnifying glass icon

interface Card {
  title: string;
  useCases: string[];
}

const cards: Card[] = [
  { title: 'Novice', useCases: ['Use case 1', 'Use case 2', 'Use case 3'] },
  { title: 'Research', useCases: ['Use case 1', 'Use case 2', 'Use case 3'] },
  { title: 'Professional', useCases: ['Use case 1', 'Use case 2', 'Use case 3'] },
];

const BuiltForEveryone: React.FC = () => {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white mb-4">Built for Everyone</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Whether you need quick answers or in-depth research, Scira adapts to your search needs.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 mb-20 flex-wrap">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#0b0b0b] border border-[#1a1a1a] hover:border-[#333] hover:shadow-[0_0_15px_#333]  rounded-2xl p-10 w-[380px] transition duration-300"
          >
            <div className="flex flex-col items-start">
              {/* Icon */}
              <div className="w-14 h-14 border border-[#333333] rounded-lg flex items-center justify-center mb-6 transition hover:border-orange-400 hover:text-orange-400">
                <Search className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-2xl mb-4 text-left">{card.title}</h3>

              {/* Use cases */}
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-left">
                {card.useCases.map((useCase, i) => (
                  <li key={i}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuiltForEveryone;
