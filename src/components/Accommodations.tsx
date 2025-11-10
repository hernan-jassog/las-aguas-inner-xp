import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importar
import { ArrowRight, MapPin, Coffee, Camera } from 'lucide-react';

const Accommodations = () => {
  // 2. Usar el hook
  const { t } = useTranslation();

  // 3. Cargar los arrays de datos desde i18next
  const accommodations = t('accommodations.list', { returnObjects: true });
  const surroundings = t('surroundings.list', { returnObjects: true });

  return (
    <section id="espacios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Espacios Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            {/* 4. Reemplazar texto estático */}
            <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
              {t('accommodations.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('accommodations.subtitle')}
            </p>
          </div>
        
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.title} // El título ya está traducido
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-brown mb-3">{accommodation.title}</h3>
                  <p className="text-gray-600 mb-4">{accommodation.description}</p>
                
                  <ul className="space-y-2 mb-6">
                    {/* 5. Mapear las claves de features y traducirlas */}
                    {accommodation.features.map((featureKey, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></div>
                        {t(`features.${featureKey}`)}
                      </li>
                    ))}
                  </ul>
                
                  <a 
                    // 6. Usar el 'slug' para un enlace robusto
                    href={`/galeria/${accommodation.slug}`}
                    className="flex items-center text-brand-gold font-semibold hover:text-brand-gold-dark transition-colors duration-200 group"
                  >
                    <Camera className="mr-2 w-4 h-4" />
                    {t('accommodations.seeMore')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alrededores Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
              {t('surroundings.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('surroundings.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {surroundings.map((place, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={place.image} 
                    alt={place.title} // Título ya traducido
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-brand-gold text-white px-2 py-1 rounded-full text-xs font-medium">
                    {place.distance}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-warm-brown mb-2">{place.title}</h4>
                  <p className="text-gray-600 text-sm">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;