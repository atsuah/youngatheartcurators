import React, { useState } from 'react';
import { X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      setActiveOverlay(null);
    } else {
      setActiveOverlay(section);
    }
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  // Function to handle image upload
  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-white overflow-x-hidden relative selection:bg-white selection:text-black font-sans flex flex-col">
      
      <Header activeSection={activeOverlay || 'home'} onNavigate={handleNavigate} />
      
      {/* Main Content Area - grows to fill space */}
      <div className="flex-grow relative">
        <main className={`relative transition-all duration-700 ${activeOverlay ? 'scale-95 opacity-50 blur-[2px]' : 'scale-100 opacity-100'}`}>
          <Hero />
        </main>
      </div>

      {/* Footer - Always at bottom */}
      <div className="relative z-20 border-t border-neutral-800">
        <Footer />
      </div>

      {/* Overlay System */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
          activeOverlay ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible delay-200'
        }`}
      >
        {/* Backdrop - Click to close */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={closeOverlay}
        />

        {/* Modal Content */}
        <div 
          className={`relative w-[90vw] md:w-[85vw] lg:w-[75vw] h-[85vh] md:h-[80vh] bg-neutral-950/90 border border-white/10 shadow-2xl rounded-sm overflow-hidden transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            activeOverlay ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button 
            onClick={closeOverlay}
            className="absolute top-6 right-6 z-50 p-2 text-neutral-500 hover:text-white transition-colors bg-black/20 rounded-full backdrop-blur-md"
          >
            <X size={24} />
          </button>

          {/* Content Area */}
          <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
            {activeOverlay === 'about' && <About />}
            {activeOverlay === 'projects' && (
              <Projects 
                uploadedImage={uploadedImage} 
                onImageUpload={handleImageUpload} 
              />
            )}
            {activeOverlay === 'contact' && <Contact />}
          </div>
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

export default App;