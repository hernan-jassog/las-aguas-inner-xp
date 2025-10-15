import React from 'react';
import { Dumbbell, Zap, Coffee, Users } from 'lucide-react';

const WellnessCommunity = () => {
  const amenities = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Gimnasio Equipado",
      description: "Mantén tu rutina de ejercicio con equipos modernos y espacios amplios."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sauna Relajante",
      description: "Desconecta y renueva tu energía en nuestro espacio de relajación."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Cultura del Tinto",
      description: "Nuestro acogedor café con los mejores granos colombianos y ambiente local."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Espacios Comunes",
      description: "Áreas diseñadas para conectar, trabajar y compartir con otros viajeros."
    }
  ];

  return (
    <section id="wellness" className="py-16 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
            Conecta Contigo y con Otros
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Amenidades únicas que nutren tu bienestar físico, mental y social durante tu estadía.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Sala de meditación"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-warm-brown mb-4">Sala de Meditación</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Un espacio sagrado para la reflexión interior, equipado con elementos naturales 
              y una vista inspiradora de Monserrate. Aquí puedes reconectar contigo mismo 
              y encontrar la paz que buscas en tu viaje.
            </p>
            <div className="flex items-center text-terracotta">
            <div className="flex items-center text-brand-gold">
              <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
              <span className="font-medium">Sesiones de meditación grupal Lunes, Miércoles y Viernes</span>
              <span className="font-medium">8:00 am, Edificio Las Aguas Inner Experience</span>
            </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-purple/20 transition-colors duration-300">
                <div className="text-brand-purple group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-warm-brown mb-2">{amenity.title}</h4>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessCommunity;