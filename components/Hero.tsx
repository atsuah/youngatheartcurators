import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isColorRevealed, setIsColorRevealed] = useState(false);

  const handleReveal = () => {
    setIsColorRevealed(true);
  };

  return (
    <div className="w-full flex items-center justify-center relative py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full">

        <div 
          className="w-full h-auto relative overflow-hidden bg-black rounded-sm group mx-auto cursor-pointer md:cursor-auto"
          onClick={handleReveal}
        >

          <img 
            src="/images/portfolioimage.jpg"
            alt="Immersive Experience" 
            className={`w-full h-full object-contain transition-all duration-1000 ease-out opacity-90 ${
              isColorRevealed 
                ? 'filter grayscale-0 scale-105 opacity-100' 
                : 'filter grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          <div className="absolute bottom-8 left-0 md:bottom-16 md:left-0 z-10 pl-6 md:pl-12">
            <h1 className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 transition-all duration-1000 ease-out ${
              isColorRevealed 
                ? 'text-white' 
                : 'text-neutral-500 group-hover:text-white'
            }`}>
              REIGNITING <br />
              WONDER.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
