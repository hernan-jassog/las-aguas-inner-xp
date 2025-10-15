import React from 'react';
import { ArrowRight, MapPin, Coffee, Camera } from 'lucide-react';

const Accommodations = () => {
  const accommodations = [
    {
      title: "Estudio Terraza",
      description: "Guests will have a special experience as the studio features a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the well-fitted kitchen. The studio also offers a barbecue. The studio provides a washing machine, a coffee machine, a terrace with city views as well as a private bathroom featuring a shower. The unit offers 1 bed.",
      image: '/images/estudio-terraza/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Doble Deluxe",
      description: "Guests will have a special experience as the studio features a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the kitchen. The studio also offers a barbecue. The studio provides a washing machine, a coffee machine, a terrace with garden views as well as a private bathroom featuring a shower. The unit offers 1 bed.",
      image: '/images/estudio-doble-deluxe/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Superior",
      description: "Guests will have a special experience as this studio features a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the fully equipped kitchen. The studio also has a barbecue. The studio offers a washing machine, a coffee machine, a terrace with mountain views as well as a private bathroom featuring a shower. The unit offers 1 bed.",
      image: '/images/estudio-superior/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Balcon",
      description: "This studio features a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the kitchen. The studio also provides guests with a barbecue. The studio provides a washing machine, a coffee machine, a terrace with city views as well as a private bathroom featuring a shower. The unit offers 1 bed.",
      image: '/images/estudio-balcon/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Triple Estandar",
      description: "This studio's standout feature is the sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the well-equipped kitchen. The studio also features a barbecue. The studio offers a washing machine, a coffee machine, a terrace with city views as well as a private bathroom boasting a shower. The unit has 2 beds.",
      image: '/images/estudio-triple-estandar/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Basico",
      description: "Guests will have a special experience as this studio features a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the fully equipped kitchen. The studio also has a barbecue. The studio offers a washing machine, a coffee machine, a terrace with city views as well as a private bathroom featuring a shower. The unit offers 1 bed.",
      image: '/images/estudio-basico/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Habitacion Compartida Mixta 6 Camas",
      description: "Guests will have a special experience as this dormitory room provides a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the well-equipped kitchen. The dormitory room also has a barbecue. The dormitory room offers a washing machine, a coffee machine, a terrace with garden views as well as a private bathroom featuring a shower. The unit offers 6 beds.",
      image: '/images/habitacion-compartida-mixta-6-camas/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Habitacion Compartida Mixta 4 Camas",
      description: "Guests will have a special experience as the dormitory room features a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the fully equipped kitchen. The dormitory room also offers a barbecue. The dormitory room provides a washing machine, a coffee machine, a terrace with garden views as well as a private bathroom featuring a shower. The unit offers 4 beds.",
      image: "/images/habitacion-compartida-mixta-4-camas/1.webp",
      features: ["Cama queen", "Baño privado", "Escritorio", "Acceso completo"]
    },
    {
      title: "Habitacion Compartida Femenina 4 Camas",
      description: "This dormitory room features a sauna. Guests will find a stovetop, a refrigerator, kitchenware and an oven in the fully equipped kitchen. The dormitory room also provides guests with a barbecue. The dormitory room provides a washing machine, a coffee machine, a terrace with city views as well as a private bathroom featuring a shower. The unit offers 4 beds.",
      image: "/images/habitacion-compartida-femenina-4-camas/1.webp",
      features: ["Literas cómodas", "Lockers seguros", "Baños compartidos", "Comunidad vibrante"]
    }
  ];

  const surroundings = [
    {
      title: "Centro Histórico",
      description: "A solo pasos de los principales sitios históricos de Bogotá.",
      image: "/images/alrededores/centro-bogota.png",
      distance: "2 min caminando"
    },
    {
      title: "Monserrate",
      description: "Vista privilegiada del cerro más emblemático de la ciudad.",
      image: "/images/alrededores/monserrate-bogota.jpg",
      distance: "15 min en teleférico"
    },
    {
      title: "Mercado de Pulgas",
      description: "Encuentra tesoros únicos en el mercado de antigüedades más famoso.",
      image: "/images/alrededores/mercado-bogota.jpg",
      distance: "5 min caminando"
    },
    {
      title: "Cafés Locales",
      description: "Descubre la cultura cafetera en los mejores cafés del barrio.",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      distance: "1-3 min caminando"
    }
  ];

  return (
    <section id="espacios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Espacios Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
              Nuestros Espacios
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Diseñados para diferentes necesidades y presupuestos, todos con el mismo compromiso de calidad y experiencia.
            </p>
          </div>
        
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
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
                    {accommodation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                
                  <a 
                    href={`/galeria/${accommodation.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center text-brand-gold font-semibold hover:text-brand-gold-dark transition-colors duration-200 group"
                  >
                    <Camera className="mr-2 w-4 h-4" />
                    Ver más
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
              Alrededores
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ubicados en el corazón del barrio Las Aguas, tendrás acceso inmediato a lo mejor de Bogotá.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {surroundings.map((place, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={place.image} 
                    alt={place.title}
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