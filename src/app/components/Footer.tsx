'use client';
import React from 'react';

const FooterLinks = () => {
  return (
    <div className="flex justify-center gap-10 text-gray-400 text-sm">
      {['Home', 'Pro', 'About us', 'Docs'].map((link) => (
        <a key={link} href="#" className="hover:text-white">
          {link}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
