"use client";

import React from "react";
import { Check } from "lucide-react";

interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}

const plans: Plan[] = [
  {
    title: "Starter",
    price: "$0",
    description: "For casual users",
    features: ["20 prompts per day", "Automatic data enrichment", "Up to 3 seats"],
    buttonText: "Get Started",
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
    buttonText: "Get Started",
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-12">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <p className="text-gray-400 text-center mb-10">
        Whether you need quick answers or in-depth research,<br />
        Scira adapts to your search needs.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl flex flex-col overflow-hidden border ${
              plan.title === "Pro"
                ? "border-orange-500 bg-[#0f0f0f]"
                : "border-[#212121] bg-[#111]"
            }`}
          >
            {/* Orange gradient for Pro plan */}
            {plan.title === "Pro" && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/20 pointer-events-none rounded-2xl" />
            )}

            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              <p className="text-4xl font-bold mb-1">{plan.price}</p>
              <p className="text-gray-400 text-xs mb-6">
                per month, billed annually
              </p>
              <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>

              {/* Features List */}
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

              {/* Button */}
              <button
                className="w-full py-3 rounded-full text-sm font-semibold border border-[#333] bg-[#1a1a1a] hover:bg-[#2a2a2a] active:brightness-90 transition-all duration-300"
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PricingPage;
