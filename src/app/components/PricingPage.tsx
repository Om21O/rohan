"use client";

import React from "react";
import { Check } from "lucide-react";

interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isCurrent: boolean;
}

const plans: Plan[] = [
  {
    title: "Starter",
    price: "$0",
    description: "For casual users",
    features: ["20 prompts per day", "Automatic data enrichment", "Up to 3 seats"],
    buttonText: "Your current plan",
    isCurrent: true,
  },
  {
    title: "Pro",
    price: "$20",
    description: "For pro users",
    features: [
      "Everything in starter",
      "Unlimited prompts per day",
      "Early access to new features",
      "Priority access during peak hours",
    ],
    buttonText: "Get started",
    isCurrent: false,
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      
      {/* Top section */}
      <div className="flex justify-between items-center p-6">
        <button className="bg-[#171717] border border-[#212121] text-white px-4 py-1.5 rounded-full flex items-center space-x-2 text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="text-orange-500 text-sm bg-black rounded-full px-4 py-2">
            Reward system coming soon...
          </div>
          <button className="flex items-center space-x-2 bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#222] hover:brightness-110">
            <div className="w-4 h-4 rounded-full bg-gradient-to-b from-orange-400 to-orange-200" />
            <span className="text-white text-sm">Javin</span>
          </button>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-gray-400 text-center mb-10">
          Whether you need quick answers or in-depth research,<br />
          Scira adapts to your search needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-md flex flex-col transition-all duration-300 overflow-hidden
                ${plan.title === 'Pro'
                  ? 'border border-[#EA580C] bg-[#0F0F0F]'
                  : 'bg-[#171717] border border-[#212121]'
                }
              `}
            >
              {/* Gradient background for Pro */}
              {plan.title === "Pro" && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] to-[#EA580C] opacity-20 pointer-events-none rounded-2xl" />
              )}

              {/* Main content */}
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                <p className="text-4xl font-bold mb-1">{plan.price}</p>
                <p className="text-gray-400 text-xs mb-6">
                  per month, billed annually
                </p>
                <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

                <ul className="space-y-4 mb-6 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-md bg-[#212121] flex items-center justify-center">
                        <Check className="text-white w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
  disabled={plan.isCurrent}
  className={`w-full py-3 rounded-full text-sm font-semibold border transition-all duration-300 ${
    plan.isCurrent
      ? "border-[#333] text-gray-500 bg-[#111] opacity-50 cursor-not-allowed"
      : "border-[#444] bg-gradient-to-b from-[#1c1c1c] to-[#111] backdrop-blur-md shadow-inner shadow-black/40 hover:from-[#2a2a2a] hover:to-[#1a1a1a] hover:brightness-110 active:scale-95 active:brightness-90"
  }`}
>
  {plan.buttonText}
</button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-10 mb-4 flex justify-center items-center space-x-8 text-gray-500 text-sm">
        <a href="#" className="hover:text-white transition">Home</a>
        <a href="#" className="hover:text-white transition">Pro</a>
        <a href="#" className="hover:text-white transition">About us</a>
        <a href="#" className="hover:text-white transition">Docs</a>
      </footer>

    </div>
  );
};

export default PricingPage;
