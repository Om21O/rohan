'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Define the type for use case items
interface UseCase {
  title: string;
  description: string;
}

// Define the type for the whole use case data
type UseCaseData = {
  [key: string]: UseCase[];
};

// Tabs
const tabs = ['Featured', 'General', 'Research', 'Transaction', 'Chains'];

// Data
const useCaseData: UseCaseData = {
  Featured: [
    { title: "What is Blockchain?", description: "Learn how blockchain technology works and why it's important for the future of decentralized finance and beyond. This technology is disrupting industries." },
    { title: "Getting Started with Crypto", description: "Understand how to start trading and using cryptocurrencies safely in today's rapidly evolving market." },
    { title: "Decentralized Finance (DeFi)", description: "Explore the growing world of DeFi and how it’s transforming traditional financial systems with trustless solutions and high-yield opportunities." },
    { title: "NFT Revolution", description: "Why non-fungible tokens (NFTs) are reshaping ownership and creativity in the digital economy." },
    { title: "Web3: The Next Internet", description: "Discover how Web3 is building a decentralized and user-owned version of the internet." },
    { title: "The Metaverse and Blockchain", description: "Understand how blockchain is enabling secure ownership of assets inside virtual worlds." },
    { title: "Tokenomics Basics", description: "Learn how tokens are designed, distributed, and used in blockchain ecosystems." },
  ],
  General: [
    { title: "Understanding Smart Contracts", description: "Explore how smart contracts automate blockchain transactions and remove intermediaries." },
    { title: "Benefits of Decentralization", description: "Why decentralized systems are more transparent, secure, and censorship-resistant compared to traditional models." },
    { title: "Crypto Wallet Basics", description: "A guide to the types of crypto wallets and how to securely manage your digital assets." },
    { title: "Risks in Crypto Investments", description: "Understand the key risks involved in investing in cryptocurrencies and how to mitigate them." },
  ],
  Research: [
    { title: "Zero-Knowledge Proofs Explained", description: "A beginner’s guide to understanding zero-knowledge proofs and how they enhance privacy and scalability in blockchain systems with advanced cryptographic techniques." },
    { title: "Consensus Mechanisms", description: "Proof of Work vs Proof of Stake: Which one is more efficient and sustainable in the future of blockchain networks?" },
    { title: "Blockchain Interoperability", description: "How different blockchains can communicate, transfer assets, and interact seamlessly without centralized exchanges." },
    { title: "Layer 2 Scaling Solutions", description: "Explore technologies like rollups and sidechains that aim to scale Ethereum and other blockchain networks." },
    { title: "The Future of Cryptography in Blockchain", description: "New cryptographic primitives like homomorphic encryption and multi-party computation (MPC) are poised to redefine privacy and security standards." },
  ],
  Transaction: [
    { title: "Sending Bitcoin Safely", description: "Learn best practices for securely sending Bitcoin transactions without exposing yourself to common scams." },
    { title: "Gas Fees on Ethereum", description: "Understand why gas fees fluctuate and strategies to minimize transaction costs when using Ethereum and other EVM-compatible chains." },
    { title: "How to Speed Up Stuck Transactions", description: "Learn techniques like Replace-by-Fee (RBF) and transaction acceleration to unstick pending crypto transactions." },
    { title: "Stablecoins and Transfers", description: "Why stablecoins like USDC and USDT are important for transferring value without volatility." },
    { title: "Cross-Chain Transfers", description: "The challenges and solutions to moving assets securely across multiple blockchain ecosystems without risks." },
    { title: "Security Tips for Crypto Transactions", description: "Protect yourself by double-checking addresses, using hardware wallets, and securing your seed phrases before confirming any crypto transfer." },
  ],
  Chains: [
    { title: "Ethereum: The Smart Contract Pioneer", description: "Learn how Ethereum brought programmable money to life and fostered a global decentralized application ecosystem." },
    { title: "Solana's High-Speed Transactions", description: "Discover why Solana is praised for its blazing-fast transactions and low fees, making it ideal for high-frequency decentralized applications." },
    { title: "Aptos: The New Kid on the Block", description: "Understand why Aptos is gaining traction with its Move programming language and parallel transaction execution for high scalability." },
  ],
};

// Component
const UseCaseGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Featured');

  return (
    <section className="w-full flex flex-col items-center justify-center mt-32 space-y-8 px-[180px]">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-white text-4xl font-bold">Use Case Gallery</h2>
        <p className="text-gray-400 text-center text-sm max-w-md">
          A focused, no-nonsense AI search engine for crypto enthusiasts.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
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

      {/* Cards */}
<div className="flex flex-wrap justify-center gap-6 mt-8">
  {useCaseData[activeTab]?.map((useCase, index) => (
    <div
      key={index}
      className="relative flex flex-col bg-[#121212] rounded-2xl p-6 space-y-4 text-white w-[250px] h-[320px] border border-transparent hover:border-[#333] hover:shadow-[0_0_15px_#333] transition-all duration-300 overflow-hidden"
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center bg-[#1c1c1c] rounded-lg z-10">
        <Search size={20} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold z-10">{useCase.title}</h3>

      {/* Description with fade */}
      <div className="relative z-10 h-[120px] overflow-hidden">
        <p className="text-gray-400 text-sm">
          {useCase.description}
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default UseCaseGallery;
