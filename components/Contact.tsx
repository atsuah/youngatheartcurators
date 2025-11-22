import React, { useState } from 'react';
import { Copy, Check, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "hello@youngatheartcurators.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">
      
      <div className="max-w-4xl w-full text-center z-10">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.95]">
          LET'S CREATE <br />
          THE <span className="text-neutral-700">EXTRAORDINARY.</span>
        </h2>

        <div className="flex justify-center h-24 mt-4">
          {!isRevealed ? (
            <button 
              onClick={() => setIsRevealed(true)}
              className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest overflow-hidden rounded-sm transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                START YOUR JOURNEY <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-neutral-300 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
          ) : (
            <div className="animate-fade-in flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 p-1.5 pr-4 rounded-full">
                 <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white">
                   <Mail size={18} />
                 </div>
                 <span className="text-neutral-200 font-mono text-sm md:text-base">{email}</span>
                 <button 
                  onClick={handleCopy}
                  className="text-neutral-500 hover:text-white transition-colors ml-1 p-1.5"
                  title="Copy Email"
                 >
                   {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                 </button>
              </div>
             
            </div>
          )}
        </div>
      </div>

       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]"></div>
       </div>
    </div>
  );
};

export default Contact;