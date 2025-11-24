import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isColorRevealed, setIsColorRevealed] = useState(false);

  const handleReveal = () => {
    setIsColorRevealed(true);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-4 md:px-12">
      
      <div 
        className="w-full max-w-6xl h-[60vh] md:h-[70vh] relative overflow-hidden bg-black rounded-sm group mx-auto cursor-pointer md:cursor-auto"
        onClick={handleReveal}
      >
        
        <img 
          src="/images/portfolioimage.jpg"
          alt="Immersive Experience" 
          className={`w-full h-full object-cover transition-all duration-1000 ease-out opacity-90 ${
            isColorRevealed 
              ? 'filter grayscale-0 scale-105 opacity-100' 
              : 'filter grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100'
          }`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-6 left-0 md:bottom-12 md:left-0 z-10 pl-4 md:pl-8">
          <h1 className={`font-display text-2xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 transition-all duration-1000 ease-out ${
            isColorRevealed 
              ? 'text-white' 
              : 'text-neutral-500 group-hover:text-white'
          }`}>
            REIGNITING <br />
            WONDER.
          </h1>
        </div>

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10">
           <div className="flex flex-col items-end text-right text-[10px] md:text-xs font-mono text-neutral-400">
              <span>EST. 2025</span>
              <span className="hidden md:block">VR / AR / MR / IRL</span>
              <span className="hidden md:block">SCROLL TO EXPLORE</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;