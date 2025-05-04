'use client';
import React from 'react';
import { Check } from 'lucide-react'; // assuming you installed it (or I can show without it too)

const plans = [
  {
    title: 'Starter',
    price: '$0',
    description: 'For casual users',
    features: [
      '20 prompts per day',
      'Automatic data enrichment',
      'Up to 3 seats',
    ],
    buttonText: 'Your current plan',
    isCurrent: true,
  },
  {
    title: 'Pro',
    price: '$20',
    description: 'For pro users',
    features: [
      'Everything in starter',
      'Unlimited prompts per day',
      'Early access to new features',
      'Priority access during peak hours',
    ],
    buttonText: 'Get started',
    isCurrent: false,
  },
];

const PricingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
     {/* Top Navigation */}
<div className="flex justify-between items-center p-6">
  {/* Back Button */}
  <button className="bg-gray-900 p-3 rounded-full flex items-center text-gray-400 hover:text-white">
    &larr; Back
  </button>

  {/* Right Section: Reward system + Javin */}
  <div className="flex items-center gap-4">
    <div className="text-orange-500 text-sm bg-black rounded-full px-4 py-2">
      Reward system coming soon...
    </div>

    <button className="flex items-center space-x-2 bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#222] hover:brightness-110 transition">
  <div className="w-4 h-4 rounded-full bg-gradient-to-b from-orange-400 to-orange-200" />
  <span className="text-white text-sm">Javin</span>
</button>
  </div>
</div>

      {/* Pricing Section */}
      <div className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-gray-400 text-center mb-10">
          Whether you need quick answers or in-depth research,
          <br /> Scira adapts to your search needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {plans.map((plan, index) => (
            <div
  key={index}
  className="relative group bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-orange-500 hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:to-black transition-all duration-300 flex flex-col" // <-- ADD flex flex-col
>
  <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
  <p className="text-3xl font-bold">{plan.price}</p>
  <p className="text-gray-400 text-sm mb-6">
    per month, billed annually
  </p>
  <p className="text-gray-400 mb-6">{plan.description}</p>

  <ul className="space-y-4 mb-6 flex-1"> {/* <-- ADD flex-1 to ul */}
    {plan.features.map((feature, idx) => (
      <li key={idx} className="flex items-center space-x-2">
        <Check className="text-white w-5 h-5 bg-gray-800 rounded-full p-1" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>

  {/* Button always at the bottom */}
  <button
    className={`w-full py-3 rounded-full text-white font-semibold ${
      plan.isCurrent
        ? 'bg-gray-800 cursor-not-allowed'
        : 'bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300'
    }`}
  >
    {plan.buttonText}
  </button>
  
</div>



          ))}
          
        </div>
      </div>
      {/* Footer */}
<footer className="bg-black py-6 mt-16">
  <div className="flex justify-center space-x-8 text-gray-500 text-sm">
    <a href="#" className="hover:text-white transition">Home</a>
    <a href="#" className="hover:text-white transition">Pro</a>
    <a href="#" className="hover:text-white transition">About us</a>
    <a href="#" className="hover:text-white transition">Docs</a>
  </div>
</footer>
    </div>
  );
};


export default PricingPage;
