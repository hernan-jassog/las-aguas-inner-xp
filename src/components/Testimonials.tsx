import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importar
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  // 2. Usar el hook
  const { t } = useTranslation();

  // 3. Obtener el array de testimonios desde el archivo JSON
  // 'returnObjects: true' es clave para que i18next devuelva el array completo
  const testimonials = t('testimonials.list', { returnObjects: true });

  return (
    <section id="testimonios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* 4. Reemplazar texto estático */}
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        {/* 5. El map ahora usa el array 'testimonials' cargado desde el t() */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-warm-brown">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-brand-purple/20 absolute -top-2 -left-1" />
                <p className="text-gray-700 italic pl-6 leading-relaxed">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;