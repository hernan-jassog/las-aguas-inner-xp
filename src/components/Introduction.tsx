import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importar
import { Heart, Users, MapPin } from 'lucide-react';

const Introduction = () => {
  // 2. Usar el hook
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* 3. Reemplazar texto estático */}
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
            {t('introduction.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('introduction.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors duration-300">
              <Heart className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">
              {t('introduction.cards.self.title')}
            </h3>
            <p className="text-gray-600">
              {t('introduction.cards.self.description')}
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-purple/20 transition-colors duration-300">
              <Users className="w-8 h-8 text-brand-purple" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">
              {t('introduction.cards.others.title')}
            </h3>
            <p className="text-gray-600">
              {t('introduction.cards.others.description')}
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-purple-light/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-purple-light/20 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-brand-purple-light" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">
              {t('introduction.cards.city.title')}
            </h3>
            <p className="text-gray-600">
              {t('introduction.cards.city.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;