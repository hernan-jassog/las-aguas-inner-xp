import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Correcaminos",
      country: "España",
      text: "Las aguas fue nuestra primera parada en un viaje por Colombia, y no hubiera podido existir mejor opción. Veníamos con la idea de descansar un par de días después del viaje y acabamos encontrando amigos con los que compartimos muy buen momentos, los trabajadores del hostal. El tour de Jeicob por los barrios populares fue la mejor experiencia y la recomiendo muchísimo. Además de él, tanto Sergio cómo los demás trabajadores y huéspedes nos dieron una estancia preciosa que nunca olvidaremos.",
      rating: 5,
      image: "images/testimonials/1.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Juliana",
      country: "Colombia",
      text: "El hostal es un buen lugar para alojarse, está muy bien ubicado en la Candelaria con facil acceso para llegar caminando a varios sitios turísticos del centro de la ciudad. Lo que más nos gustó fue la amabilidad de las personas del hostal, siempre atentos a nuestras necesidades.",
      rating: 5,
      image: "images/testimonials/2.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Hernán",
      country: "México",
      text: "Como nómada digital, encontré el equilibrio perfecto entre productividad y bienestar. El WiFi es excelente, el gimnasio impecable, y la comunidad inspiradora.",
      rating: 5,
      image: "images/testimonials/3.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
            Experiencias que Transforman
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre por qué viajeros de todo el mundo eligen Las Aguas para su experiencia interior.
          </p>
        </div>
        
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