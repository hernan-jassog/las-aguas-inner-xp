import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="images/logo.png" alt="Las Aguas Inner Experience" className="h-10 w-10 mr-3" />
              <h1 className="text-xl font-bold text-warm-brown">Las Aguas Inner Experience</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">Inicio</a>
              <a href="#espacios" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">Espacios</a>
              <a href="#wellness" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">Wellness</a>
              <a href="#testimonios" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">Testimonios</a>
              <a 
                href="https://engine.lobbypms.com/las-aguas-inner-experience" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-gold text-white px-6 py-2 rounded-full hover:bg-brand-gold-dark transition-all duration-200 transform hover:scale-105 inline-block"
              >
                Reservar Ahora
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-warm-brown hover:text-brand-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#inicio" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">Inicio</a>
            <a href="#espacios" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">Espacios</a>
            <a href="#wellness" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">Wellness</a>
            <a href="#testimonios" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">Testimonios</a>
            <a 
              href="https://engine.lobbypms.com/las-aguas-inner-experience" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-2 bg-brand-gold text-white px-6 py-2 rounded-full inline-block text-center"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;