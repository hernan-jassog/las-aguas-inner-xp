import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Camera, Compass, Clock } from 'lucide-react'; // Agregamos Compass y Clock

const Accommodations = () => {
  const { t } = useTranslation();

  // Cargar los arrays de datos
  const accommodations = t('accommodations.list', { returnObjects: true });
  const surroundings = t('surroundings.list', { returnObjects: true });
  // Nueva lista de experiencias
  const experiences = t('experiences.list', { returnObjects: true });

  // Helper para validar arrays
  const safeLoop = (arr) => Array.isArray(arr) ? arr : [];

  return (
    <section id="espacios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==========================================
            SECCIÓN 1: ESPACIOS / HABITACIONES 
           ========================================== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
              {t('accommodations.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('accommodations.subtitle')}
            </p>
          </div>
        
          <div className="grid md:grid-cols-3 gap-8">
            {safeLoop(accommodations).map((accommodation, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-brown mb-3">{accommodation.title}</h3>
                  <p className="text-gray-600 mb-4">{accommodation.description}</p>
                
                  <ul className="space-y-2 mb-6">
                    {accommodation.features && accommodation.features.map((featureKey, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></div>
                        {t(`features.${featureKey}`)}
                      </li>
                    ))}
                  </ul>
                
                  <a 
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

        {/* ==========================================
            SECCIÓN 2: EXPERIENCIAS (NUEVA)
           ========================================== */}
        <div className="mb-20 border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
             <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm flex justify-center items-center gap-2 mb-2">
                <Compass className="w-4 h-4" />
                {t('experiences.tagline')}
             </span>
            <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
              {t('experiences.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('experiences.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safeLoop(experiences).map((exp, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badge de Duración */}
                  <div className="absolute top-3 right-3 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {exp.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg text-warm-brown mb-2 group-hover:text-brand-gold transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            SECCIÓN 3: ALREDEDORES (ORIGINAL)
           ========================================== */}
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
            {safeLoop(surroundings).map((place, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={place.image} 
                    alt={place.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-gray-900/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
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