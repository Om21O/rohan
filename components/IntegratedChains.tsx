'use client';
import React from 'react';
import Image from 'next/image';

const chains = [
  {
    name: 'ZetaChain',
    logo: '/logos/zetachain.png',
    alt: 'ZetaChain Logo',
  },
  {
    name: 'Flow',
    logo: '/logos/flow.png',
    alt: 'Flow Logo',
  },
  {
    name: 'Vana',
    logo: '/logos/vana.png',
    alt: 'Vana Logo',
  },
  {
    name: 'Aptos',
    logo: '/logos/aptos.png',
    alt: 'Aptos Logo',
  },
  {
    name: 'Monad',
    logo: '/logos/monad.png',
    alt: 'Monad Logo',
  },
];

const IntegratedChains = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-32 space-y-8">
      {/* Heading */}
      <h2 className="text-white text-2xl font-bold">Integrated with 5+ chains</h2>

      {/* Chains */}
      <div className="flex flex-wrap gap-6 justify-center">
        {chains.map((chain, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-[#1c1c1c] text-white text-sm font-medium min-w-[160px]"
          >
            <Image
              src={chain.logo}
              alt={chain.alt}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{chain.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegratedChains;
