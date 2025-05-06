'use client';
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import IntegratedChains from './IntegratedChains';
import UseCaseGallery from './UseCaseGallery';
import PricingSection from './PricingSection';
import BuiltForEveryone from './BuiltForEveryone';
import FooterLinks from './Footer';

const AboutUs = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col min-h-scree ">
      <Header />
      <SearchBar />
      <IntegratedChains />
      <UseCaseGallery />
      <PricingSection />
      <BuiltForEveryone />
      <FooterLinks />
    </div>
  );
};

export default AboutUs;
