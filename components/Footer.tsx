import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
      <div className="text-neutral-600 text-xs font-mono text-center md:text-left">
        &copy; 2025 YOUNG AT HEART CURATORS. ALL RIGHTS RESERVED.
      </div>
      
      <div className="flex gap-4 md:gap-6">
        <a 
          href="https://www.linkedin.com/company/y-a-h-curators" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-600 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://instagram.com/youngatheartcurators" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-600 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;