import React from 'react';
import { Calendar, MapPin, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tu viaje de transformación te espera
        </h2>
        <p className="text-xl mb-8 text-white/90 leading-relaxed">
          Únete a nuestra comunidad de viajeros conscientes y descubre todo lo que Bogotá y tu interior tienen para ofrecerte.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://engine.lobbypms.com/las-aguas-inner-experience" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-brand-purple px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 inline-block text-center"
          >
            <Calendar className="inline-block w-5 h-5 mr-2" />
            Ver Disponibilidad
          </a>
          <a 
            href="https://wa.me/573112161923" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-purple transition-all duration-300 inline-block text-center"
          >
            <Phone className="inline-block w-5 h-5 mr-2" />
            Contactar Ahora
          </a>
        </div>
        
        <div className="flex items-center justify-center text-white/80">
          <MapPin className="w-5 h-5 mr-2" />
          <span>Ubicados en el corazón del barrio Las Aguas, Bogotá</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;