import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

// 1. Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// 2. Estilos de Swiper obligatorios
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SocialAreas = () => {
  const { t } = useTranslation();

  // Cargar el array de datos para el carrusel desde el JSON de traducción
  const carouselItems = t('socialAreas.carousel', { returnObjects: true });
  
  // Validación simple para asegurar que es un array
  const items = Array.isArray(carouselItems) ? carouselItems : [];

  return (
    // Estilos personalizados para que Swiper use tus colores de marca
    // Puedes mover esto a tu CSS global si prefieres
    <>
      <style jsx="true">{`
        .social-areas-swiper .swiper-button-next,
        .social-areas-swiper .swiper-button-prev {
          color: var(--brand-gold, #D4AF37); /* Reemplaza con tu código hex exacto de brand-gold */
          background-color: rgba(255, 255, 255, 0.8);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .social-areas-swiper .swiper-button-next:hover,
        .social-areas-swiper .swiper-button-prev:hover {
             background-color: white;
             transform: scale(1.1);
        }
        .social-areas-swiper .swiper-button-next::after,
        .social-areas-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        .social-areas-swiper .swiper-pagination-bullet-active {
          background-color: var(--brand-gold, #D4AF37) !important;
        }
      `}</style>

      <section id="areassociales" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section (Manteniendo el estilo de tu ejemplo anterior) */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-6">
              {t('socialAreas.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('socialAreas.subtitle')}
            </p>
          </div>

          {/* Carrusel Section */}
          {/* Altura fija de 600px en desktop, ajustable según diseño */}
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Swiper
              // Módulos activos
              modules={[Navigation, Pagination, Autoplay, A11y]}
              spaceBetween={0}
              slidesPerView={1} // Muestra 1 imagen grande a la vez
              navigation={true} // Flechas
              pagination={{ clickable: true, dynamicBullets: true }} // Puntos inferiores
              loop={true} // Carrusel infinito
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="social-areas-swiper h-full w-full"
            >
              {items.map((item: any, index: number) => (
                <SwiperSlide key={index} className="relative group h-full">
                  {/* Imagen de fondo */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradiente oscuro para mejorar lectura del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
                  
                  {/* Contenido sobre la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white max-w-4xl">
                     {/* Ubicación opcional */}
                    {item.location && (
                      <div className="inline-flex items-center bg-brand-gold/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    )}
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                        {item.title}
                    </h3>
                    
                    <p className="text-gray-200 text-lg md:text-xl line-clamp-3 md:line-clamp-none max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>
    </>
  );
};

export default SocialAreas;