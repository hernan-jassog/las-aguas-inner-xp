import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; 

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* 1. SOLUCIÓN DE ANCHO: 
         Cambié 'max-w-7xl' por 'w-full max-w-[1920px]' para que ocupe más pantalla.
         Aumenté el padding horizontal 'lg:px-12' para que respire en pantallas grandes.
      */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20"> {/* Aumenté un poco la altura a h-20 para elegancia */}
          
          {/* LOGO */}
          <div className="flex items-center flex-shrink-0"> {/* flex-shrink-0 evita que el logo se aplaste */}
            <img src="images/logo.png" alt="Las Aguas Inner Experience" className="h-10 w-10 mr-3" />
            {/* Si el título es muy largo, en móbile puedes reducirlo o esconderlo */}
            <h1 className="text-xl font-bold text-warm-brown whitespace-nowrap">{t('nav.titulo')}</h1>
          </div>
          
          {/* 2. SOLUCIÓN DE BREAKPOINT (MENU DESKTOP):
             Cambié 'hidden md:block' por 'hidden xl:block'.
             Esto significa que en Laptops normales (menores a 1280px) se verá el menú de hamburguesa
             para evitar que los textos largos en español se monten unos sobre otros.
          */}
          <div className="hidden xl:block">
            {/* 3. SOLUCIÓN DE ESPACIADO:
               Reduje 'space-x-8' (32px) a 'space-x-6' (24px) para ganar espacio.
               Añadí 'text-sm' para que la fuente sea un poco más compacta y elegante.
            */}
            <div className="ml-4 flex items-center space-x-5 text-sm font-medium">
              <a href="#inicio" className="text-warm-brown hover:text-brand-gold transition-colors duration-200 whitespace-nowrap">{t('nav.inicio')}</a>
              <a href="#areassociales" className="text-warm-brown hover:text-brand-gold transition-colors duration-200 whitespace-nowrap">{t('nav.areassociales')}</a>
              <a href="#espacios" className="text-warm-brown hover:text-brand-gold transition-colors duration-200 whitespace-nowrap">{t('nav.espacios')}</a>
              <a href="#wellness" className="text-warm-brown hover:text-brand-gold transition-colors duration-200 whitespace-nowrap">{t('nav.wellness')}</a>
              <a href="#testimonios" className="text-warm-brown hover:text-brand-gold transition-colors duration-200 whitespace-nowrap">{t('nav.testimonios')}</a>
              
              <a 
                href="https://engine.lobbypms.com/las-aguas-inner-experience" 
                target="_blank" 
                rel="noopener noreferrer"
                // Reduje un poco el padding del botón 'px-6' a 'px-5'
                className="bg-brand-gold text-white px-5 py-2 rounded-full hover:bg-brand-gold-dark transition-all duration-200 transform hover:scale-105 inline-block whitespace-nowrap shadow-md"
              >
                {t('nav.reservar_ahora')}
              </a>
              
              <div className="pl-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          
          {/* 4. SOLUCIÓN DE BREAKPOINT (MENU MOVIL):
             Cambié 'md:hidden' por 'xl:hidden' para que coincida con el cambio de arriba.
          */}
          <div className="xl:hidden flex items-center gap-4">
             {/* Opcional: Mostrar el language switcher en mobile header también si quieres */}
             {/* <div className="sm:block hidden"><LanguageSwitcher /></div> */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-warm-brown hover:text-brand-gold p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* MENU MOVIL DESPLEGABLE */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t h-screen overflow-y-auto pb-20"> {/* h-screen asegura que cubra todo en movil */}
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
            <a onClick={() => setIsMenuOpen(false)} href="#inicio" className="block px-3 py-2 text-lg text-warm-brown hover:text-brand-gold font-medium">{t('nav.inicio')}</a>
            <a onClick={() => setIsMenuOpen(false)} href="#areassociales" className="block px-3 py-2 text-lg text-warm-brown hover:text-brand-gold font-medium">{t('nav.areassociales')}</a>
            <a onClick={() => setIsMenuOpen(false)} href="#espacios" className="block px-3 py-2 text-lg text-warm-brown hover:text-brand-gold font-medium">{t('nav.espacios')}</a>
            <a onClick={() => setIsMenuOpen(false)} href="#wellness" className="block px-3 py-2 text-lg text-warm-brown hover:text-brand-gold font-medium">{t('nav.wellness')}</a>
            <a onClick={() => setIsMenuOpen(false)} href="#testimonios" className="block px-3 py-2 text-lg text-warm-brown hover:text-brand-gold font-medium">{t('nav.testimonios')}</a>
            
            <div className="py-4">
              <LanguageSwitcher />
            </div>

            <a 
              href="https://engine.lobbypms.com/las-aguas-inner-experience" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 bg-brand-gold text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-brand-gold-dark transition-colors"
            >
              {t('nav.reservar_ahora')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;