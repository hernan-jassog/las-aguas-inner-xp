import React from 'react';
// 1. Importar useTranslation y Trans
import { useTranslation, Trans } from 'react-i18next'; 
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  // 2. Usar el hook
  const { t } = useTranslation();

  return (
    <footer className="bg-warm-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            {/* 3. Reemplazar texto (reutilizando del nav) */}
            <h3 className="text-2xl font-bold mb-4">{t('nav.titulo')}</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t('footer.description')}
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
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
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
                <span>
                  {/* 4. Manejar saltos de línea con claves separadas */}
                  {t('footer.contact.addressLine1')}<br />
                  {t('footer.contact.addressLine2')}
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h4>
            <div className="space-y-2">
              {/* 5. Reutilizar traducciones del nav */}
              <a href="#espacios" className="block text-white/80 hover:text-white transition-colors duration-200">
                {t('nav.espacios')}
              </a>
              <a href="#wellness" className="block text-white/80 hover:text-white transition-colors duration-200">
                {t('nav.wellness')}
              </a>
              <a href="#testimonios" className="block text-white/80 hover:text-white transition-colors duration-200">
                {t('nav.testimonios')}
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors duration-200">
                {t('footer.links.tours')}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p className="flex items-center justify-center">
            {/* 6. Usar el componente Trans para el componente <Heart> anidado */}
            <Trans i18nKey="footer.copyright.madeWith">
              Hecho con <Heart className="w-4 h-4 mx-1 text-brand-gold" /> para viajeros conscientes
            </Trans>
          </p>
          <p className="mt-2">{t('footer.copyright.reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;