import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-12 py-3 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
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
    </footer>
  );
};

export default Footer;