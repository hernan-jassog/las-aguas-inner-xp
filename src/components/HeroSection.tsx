import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importar

const HeroSection = () => {
  // 2. Usar el hook
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/spaces/22.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {/* 3. Reemplazar texto estático */}
          {t('hero.titleLine1')}
          <br />
          <span className="text-brand-purple-light">{t('hero.titleLine2')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <a 
          href="https://engine.lobbypms.com/las-aguas-inner-experience" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-gold-dark transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
        >
          {/* 4. Reutilizar la traducción del nav */}
          {t('nav.reservar_ahora')}
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;