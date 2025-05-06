'use client';

import React from 'react';

const FooterLinks: React.FC = () => {
  const links: string[] = ['Home', 'Pro', 'About us', 'Docs'];

  return (
    <div className="flex justify-center gap-10 text-gray-400 text-sm">
      {links.map((link) => (
        <a key={link} href="#" className="hover:text-white">
          {link}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
