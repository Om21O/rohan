'use client';

import React from 'react';
import Image from 'next/image';

// Define a type for the chain items
interface Chain {
  logo: string;
  alt: string;
}

const chains: Chain[] = [
  { logo: '/image/zeta.png', alt: 'ZetaChain Logo' },
  { logo: '/image/flow.png', alt: 'Flow Logo' },
  { logo: '/image/Clip path group.png', alt: 'Vana Logo' },
  { logo: '/image/Vector.png', alt: 'Aptos Logo' },
  { logo: '/image/monad.png', alt: 'Monad Logo' },
];

const IntegratedChains: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-32 space-y-8 px-8">
      
      {/* Heading */}
      <h2 className="text-white text-2xl font-bold text-center">
        Integrated with 5+ chains
      </h2>

      {/* Chains */}
      <div className="flex flex-wrap gap-20 justify-center h-[75px]">
        {chains.map((chain, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6 py-4 rounded-xl min-w-[140px] min-h-[60px]"
          >
            <Image
              src={chain.logo}
              alt={chain.alt}
              width={116}
              height={32}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default IntegratedChains;
