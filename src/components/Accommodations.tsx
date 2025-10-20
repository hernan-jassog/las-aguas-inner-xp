import React from 'react';
import { ArrowRight, MapPin, Coffee, Camera } from 'lucide-react';

const Accommodations = () => {
  const accommodations = [
    {
      title: "Estudio Patio Privado",
      description: "Un refugio de elegancia y serenidad en el corazón de La Candelaria. Este estudio, ubicado en el primer piso, ofrece baño privado y cocina equipada con nevera, microondas y cafetera. Su hermoso patio interior, de uso exclusivo para los huéspedes del estudio, brinda un espacio ideal para relajarse y disfrutar del aire libre en total privacidad. Perfecto para quienes buscan calma, confort y conexión en un ambiente íntimo con Wi-Fi de alta velocidad.",
      image: '/images/estudio-patio-privado/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Doble Deluxe",
      description: "Descubre el equilibrio perfecto entre elegancia y bienestar en nuestro Estudio Doble Deluxe. Este espacio ha sido diseñado para ofrecer una experiencia única de descanso y armonía. Cuenta con baño privado y cocina totalmente equipada con nevera, microondas, cafetera y todo lo necesario para tu comodidad. Su balcón con vista a la montaña te invita a respirar tranquilidad y conectar con la energía de La Candelaria. Además, dispone de Wi-Fi de alta velocidad para mantenerte siempre conectado en un entorno de serenidad y confort.",
      image: '/images/estudio-doble-deluxe/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Superior",
      description: "Sumérgete en una experiencia de descanso y bienestar en nuestro Estudio Superior, un espacio donde la elegancia se combina con la tranquilidad. Su imponente ventanal, que abarca toda la pared posterior, llena el ambiente de luz natural y crea una atmósfera cálida y relajante. Cuenta con baño privado y cocina totalmente equipada con nevera, microondas y cafetera, ideal para estancias largas o escapadas de confort. Además, dispone de Wi-Fi de alta velocidad para mantenerte conectado mientras disfrutas de un entorno de serenidad y estilo.",
      image: '/images/estudio-superior/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Balcon",
      description: "Disfruta de un refugio de calma y bienestar en nuestro Estudio Interior con Balcón. Este elegante espacio cuenta con baño privado y cocina equipada con nevera, microondas y cafetera, pensada para tu total comodidad. Su balcón, orientado hacia el interior del edificio, brinda un ambiente íntimo y silencioso, ideal para relajarte, disfrutar de una lectura o simplemente respirar tranquilidad. Además, el Wi-Fi de alta velocidad complementa una experiencia donde la serenidad, el confort y la elegancia se encuentran en perfecta armonía.",
      image: '/images/estudio-balcon/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Estandar",
      description: "Relájate en un ambiente de elegancia y serenidad en nuestro Estudio Estándar. Este espacio cuenta con baño privado y cocina completamente equipada con nevera, microondas y cafetera, ideal para disfrutar de una estancia cómoda y revitalizante. Su amplio ventanal hacia el interior del edificio permite que la luz natural inunde el ambiente, creando una sensación de paz y armonía. Además, dispone de Wi-Fi de alta velocidad para que te mantengas siempre conectado mientras disfrutas del bienestar y la calma de La Candelaria.",
      image: '/images/estudio-estandar/1.jpg',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Triple Estandar",
      description: "Comodidad, elegancia y amplitud se unen en nuestro Estudio Triple Estándar, ideal para compartir momentos de descanso y bienestar. Cuenta con dos camas, baño privado y cocina totalmente equipada con nevera, microondas y cafetera. Su amplio ventanal hacia el interior del edificio llena el espacio de luz natural, creando un ambiente cálido y tranquilo. Perfecto para tres personas que buscan confort, conexión y serenidad, con Wi-Fi de alta velocidad incluido.",
      image: '/images/estudio-triple-estandar/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Estudio Basico",
      description: "Sencillez, confort y bienestar se unen en nuestro Estudio Básico, ubicado en el primer piso del edificio. Este espacio cuenta con baño privado y cocina totalmente equipada con nevera, microondas y cafetera, ideal para quienes buscan una estadía práctica sin perder la esencia del descanso. Su ventana al frente del edificio permite disfrutar de la luz natural y del ambiente vibrante de La Candelaria. Además, dispone de Wi-Fi de alta velocidad, creando un equilibrio perfecto entre comodidad, elegancia y serenidad.",
      image: '/images/estudio-basico/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Habitacion Compartida Mixta 6 Camas",
      description: "Una opción cómoda y funcional para viajeros que buscan bienestar y conexión. Esta habitación compartida cuenta con seis camas y un balcón al frente del edificio, donde podrás disfrutar de la vista y del ambiente auténtico de La Candelaria. Cada cama se renta de forma individual e incluye acceso a baño y cocina compartida completamente equipada, además de Wi-Fi de alta velocidad. Un espacio ideal para descansar, socializar y vivir una experiencia tranquila en el centro histórico de Bogotá.",
      image: '/images/habitacion-compartida-mixta-6-camas/1.webp',
      features: ["Cocineta equipada", "Baño privado", "Área de trabajo", "Wi-Fi de alta velocidad"]
    },
    {
      title: "Habitacion Compartida Mixta 4 Camas",
      description: "Un espacio acogedor y elegante pensado para viajeros que valoran la tranquilidad y el bienestar. Esta habitación compartida cuenta con cuatro camas y se renta de forma individual. Dispone de baño y cocina compartidos completamente equipados, además de Wi-Fi de alta velocidad. Su ventana hacia la parte posterior del edificio ofrece una hermosa vista a la ciudad, creando un ambiente sereno y luminoso ideal para descansar, conectar y disfrutar de la experiencia en La Candelaria.",
      image: "/images/habitacion-compartida-mixta-4-camas/1.webp",
      features: ["Cama queen", "Baño privado", "Escritorio", "Acceso completo"]
    },
    {
      title: "Habitacion Compartida Femenina 4 Camas",
      description: "Un espacio diseñado especialmente para mujeres que buscan confort, seguridad y tranquilidad durante su estadía. Esta habitación cuenta con un ambiente acogedor y elegante, con balcón hacia la parte interior del edificio y acceso directo a la terraza, ideal para disfrutar de la vista y del aire fresco. Cada cama se renta de forma individual e incluye acceso a baño y cocina compartidos completamente equipados, además de Wi-Fi de alta velocidad. Un lugar perfecto para descansar, sentirse segura y vivir la experiencia de La Candelaria con estilo.",
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