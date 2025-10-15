import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Las Aguas Inner Experience</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Más que un lugar para quedarse, somos una experiencia que conecta viajeros 
              conscientes con el corazón de Bogotá y su propia transformación interior.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lasaguasinnerexperience/" className="text-white/60 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:lasaguasstudios@gmail.com" className="text-white/60 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>+57 311 216 19 23</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>lasaguasstudios@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>Edificio las Aguas, Calle 12f #0-19<br />Barrio La Candelaria - Centro Histórico</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#espacios" className="block text-white/80 hover:text-white transition-colors duration-200">Nuestros Espacios</a>
              <a href="#wellness" className="block text-white/80 hover:text-white transition-colors duration-200">Wellness</a>
              <a href="#testimonios" className="block text-white/80 hover:text-white transition-colors duration-200">Testimonios</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-200">Tours Locales</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p className="flex items-center justify-center">
            Hecho con <Heart className="w-4 h-4 mx-1 text-brand-gold" /> para viajeros conscientes
          </p>
          <p className="mt-2">© 2025 Las Aguas Inner Experience. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;