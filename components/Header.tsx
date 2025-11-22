import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] py-8 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        
        <button onClick={() => handleNavClick('about')} className="flex items-center gap-3 group outline-none">
          <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm">
            <img 
              src="/images/logo.png"
              alt="Young At Heart Curators Logo"
              className="w-10 h-10 object-cover rounded-lg transition-transform duration-500 group-hover:rotate-180"
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-white mix-blend-difference">Y.A.H CURATORS</span>
        </button>

        <nav className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md p-1.5 rounded-full border border-white/5">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.id)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 tracking-widest uppercase ${
                activeSection === item.id 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          className="md:hidden text-white p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 h-screen w-screen bg-neutral-950/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-[70] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
        }`}>
           <button 
              className="absolute top-8 right-6 text-white/50 hover:text-white"
              onClick={closeMobileMenu}
           >
              <X size={32} />
           </button>
           
           {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => handleNavClick(item.id)}
              className={`font-display text-5xl font-bold transition-all duration-300 ${
                activeSection === item.id ? 'text-white scale-110' : 'text-neutral-600 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;