import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-start md:items-center justify-start md:justify-center relative overflow-auto py-20 md:py-0 px-6 md:px-8">
      <div className="max-w-4xl mx-auto w-full mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          
          <div className="w-full md:w-1/3 shrink-0">
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-3 mb-6 text-neutral-400">
              <span className="w-8 h-[1px] bg-neutral-600"></span>
              WHO WE ARE
            </h2>
            
            <div className="mb-6">
              <img 
                src="/images/logo.png"
                alt="Young At Heart Curators Logo"
                className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg"
              />
            </div>
            
            <div className="text-xs font-mono text-neutral-600 space-y-2">
                <p>EST. 2025</p>
                <p>VR / AR / MR / IRL</p>
                <p>BASED IN STOCKHOLM</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 pb-8 md:pb-0">
            <p className="text-xl md:text-3xl lg:text-4xl font-light leading-tight text-neutral-200 mb-8">
              We curate experiences that reignite wonder and forge deeper connections. 
              <span className="text-neutral-600"> Where technology meets imagination, and play becomes progress.</span>
            </p>
            
            <div className="text-neutral-400 font-sans text-base leading-relaxed space-y-6">
              <p>
                Our philosophy is simple: the most powerful moments happen when we approach the world with curiosity. 
                We blend technology with timeless storytelling to create experiences that feel both magical and meaningful.
              </p>
              <p>
                Whether it's helping teams collaborate through virtual adventures, bringing art to life through digital immersion, or highlighting culture through curated events with an augmented twist,
                we believe in the transformative power of play at any age.
              </p>
              <p>
                We partner with visionary cultural institutions and forward-thinking corporations to create bespoke 
                experiences in VR, AR, and hybrid physical-digital environments.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                  {['VR/AR/MR Development', 'Experience Design', 'Creative Strategy'].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-500">
                          {tag}
                      </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;