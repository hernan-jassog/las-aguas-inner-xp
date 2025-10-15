import React from 'react';
import { Heart, Users, MapPin } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="py-16 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
            Más que un lugar para quedarse
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Somos un hub para viajeros conscientes. Nuestra marca está construida sobre proporcionar una 
            "Experiencia Interior" que conecta a los huéspedes consigo mismos, con otros, y con el alma de Bogotá.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors duration-300">
              <Heart className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">Contigo Mismo</h3>
            <p className="text-gray-600">Espacios de meditación, bienestar y reflexión personal para tu crecimiento interior.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-purple/20 transition-colors duration-300">
              <Users className="w-8 h-8 text-brand-purple" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">Con Otros</h3>
            <p className="text-gray-600">Comunidad vibrante de viajeros conscientes que comparten experiencias auténticas.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-purple-light/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-purple-light/20 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-brand-purple-light" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">Con Bogotá</h3>
            <p className="text-gray-600">Inmersión cultural auténtica en el corazón de la capital colombiana.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;