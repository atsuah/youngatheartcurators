import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface ProjectsProps {
  uploadedImage: string | null;
  onImageUpload: (file: File) => void;
}

const Projects: React.FC<ProjectsProps> = ({ uploadedImage, onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Use your local image - make sure this path is correct
  const defaultImageUrl = "/images/portfolioimage.jpg";

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />
      
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter mb-2">
          OUR <span className="text-neutral-600">VISION</span>
        </h2>
        <p className="text-neutral-500 text-sm max-w-md">
          A glimpse into the experiences we create
        </p>
      </div>

      {/* SINGLE Image Container - Only ONE image */}
      <div 
        className="group relative w-full max-w-2xl h-96 cursor-pointer"
        onClick={triggerFileInput}
      >
        <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-sm border border-neutral-800">
          <img 
            src={uploadedImage || defaultImageUrl} 
            alt="Immersive experience concept" 
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              console.log('Image failed to load, using fallback');
              e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop';
            }}
          />
          
          {/* Upload overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Upload className="text-white" size={28} />
            </div>
            <span className="text-white text-lg font-medium">
              {uploadedImage ? 'Change Concept Image' : 'Upload Your Vision'}
            </span>
            <span className="text-neutral-400 text-sm">
              Click to visualize your project
            </span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-8 text-center max-w-md">
        <h3 className="font-display text-2xl font-semibold text-white mb-2">
          THE GALACTIC ACCORD
        </h3>
        <p className="text-neutral-500 text-sm mb-4">
          A corporate team-building mission where your team must collaborate to escape a stranded starship. 
          This VR experience transforms communication exercises into an unforgettable interstellar adventure.
        </p>
        <div className="flex justify-center gap-6 text-xs text-neutral-600">
          <span className="font-mono">CORPORATE IMMERSION</span>
          <span className="font-mono">2025</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;