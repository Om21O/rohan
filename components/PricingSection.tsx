'use client';
import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$0',
      description: 'For casual users',
      features: ['20 prompts per day', 'Automatic data enrichment', 'Up to 3 seats'],
    },
    {
      title: 'Pro',
      price: '$20',
      description: 'For pro users',
      features: ['Everything in starter', 'Unlimited prompts per day', 'Early access to new features', 'Priority access during peak hours'],
    },
  ];

  return (
    <section className="bg-black py-20 text-center">
      <div className="mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you need quick answers or in-depth research, Scira adapts to your search needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 px-4">
        {plans.map((plan, idx) => (
          <div key={idx} className="relative group w-full max-w-sm rounded-2xl overflow-hidden bg-[#111827] border border-[#1f2937] p-8 transition-all duration-500 hover:border-orange-400 hover:shadow-[0_0_10px_2px_rgba(255,165,0,0.4)]">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-sm text-gray-400 mb-6">per month, billed annually</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8 text-white">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center">
                      <span className="w-5 h-5 mr-2 text-blue-400">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-3 bg-[#1f2937] text-white font-semibold rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500">
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
