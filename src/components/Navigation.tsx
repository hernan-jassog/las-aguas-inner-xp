import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
// --- 1. IMPORTA TU NUEVO COMPONENTE ---
// (Ajusta la ruta si está en otra carpeta, ej: "../components/LanguageSwitcher")
import LanguageSwitcher from './LanguageSwitcher'; 

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="images/logo.png" alt="Las Aguas Inner Experience" className="h-10 w-10 mr-3" />
              <h1 className="text-xl font-bold text-warm-brown">{t('nav.titulo')}</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
             {/* --- 2. MODIFICACIÓN: Cambié 'items-baseline' por 'items-center' para alinear el switcher --- */}
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">{t('nav.inicio')}</a>
              <a href="#areassociales" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">{t('nav.areassociales')}</a>
              <a href="#espacios" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">{t('nav.espacios')}</a>
              <a href="#wellness" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">{t('nav.wellness')}</a>
              <a href="#testimonios" className="text-warm-brown hover:text-brand-gold transition-colors duration-200">{t('nav.testimonios')}</a>
              <a 
                href="https://engine.lobbypms.com/las-aguas-inner-experience" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-gold text-white px-6 py-2 rounded-full hover:bg-brand-gold-dark transition-all duration-200 transform hover:scale-105 inline-block"
              >
                {t('nav.reservar_ahora')}
              </a>
              {/* --- 3. AQUÍ SE AÑADE EL COMPONENTE --- */}
              <LanguageSwitcher />
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
           {/* --- 4. MODIFICACIÓN: Aumenté el 'space-y' para mejor espaciado --- */}
          <div className="px-2 pt-2 pb-3 space-y-3">
            {/* --- 5. MODIFICACIÓN: Añadí 't()' a los links móviles para que se traduzcan --- */}
            <a href="#inicio" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">{t('nav.inicio')}</a>
            <a href="#espacios" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">{t('nav.espacios')}</a>
            <a href="#wellness" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">{t('nav.wellness')}</a>
            <a href="#testimonios" className="block px-3 py-2 text-warm-brown hover:text-brand-gold">{t('nav.testimonios')}</a>
            
            {/* --- 6. AQUÍ SE AÑADE EL COMPONENTE (centrado) --- */}
            <div className="flex justify-center pt-2">
              <LanguageSwitcher />
            </div>

            <a 
              href="https://engine.lobbypms.com/las-aguas-inner-experience" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-2 bg-brand-gold text-white px-6 py-2 rounded-full inline-block text-center"
            >
              {t('nav.reservar_ahora')} {/* --- 7. MODIFICACIÓN: Añadí 't()' aquí --- */}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;