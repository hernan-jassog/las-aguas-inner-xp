import React from 'react';
import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import Accommodations from './components/Accommodations';
import WellnessCommunity from './components/WellnessCommunity';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'gallery'>('home');
  const [galleryData, setGalleryData] = useState<{ title: string; images: string[] }>({
    title: '',
    images: []
  });

  const galleryImages = {
    'estudio-patio-privado': {
      title: 'Estudio Patio Privado',
      images: [
        '/images/estudio-patio-privado/1.webp',
        '/images/estudio-patio-privado/2.webp',
        '/images/estudio-patio-privado/3.webp',
        '/images/estudio-patio-privado/4.webp',
        '/images/estudio-patio-privado/5.webp',
        '/images/estudio-patio-privado/6.webp'
      ]
    },'estudio-doble-deluxe': {
      title: 'Estudio Doble Deluxe',
      images: [
        '/images/estudio-doble-deluxe/1.webp',
        '/images/estudio-doble-deluxe/2.webp',
        '/images/estudio-doble-deluxe/3.webp',
        '/images/estudio-doble-deluxe/4.webp',
        '/images/estudio-doble-deluxe/5.webp',
        '/images/estudio-doble-deluxe/6.webp',
        '/images/estudio-doble-deluxe/7.webp'
      ]
    },
    'estudio-superior': {
      title: 'Estudio Superior',
      images: [
        '/images/estudio-superior/1.webp',
        '/images/estudio-superior/2.webp',
        '/images/estudio-superior/3.webp',
        '/images/estudio-superior/4.webp',
        '/images/estudio-superior/5.webp'
      ]
    },
    'estudio-balcon': {
      title: 'Estudio Balcon',
      images: [
        '/images/estudio-balcon/1.webp',
        '/images/estudio-balcon/2.webp',
        '/images/estudio-balcon/3.webp',
        '/images/estudio-balcon/4.webp',
        '/images/estudio-balcon/5.webp',
        '/images/estudio-balcon/6.webp',
        '/images/estudio-balcon/7.webp'
      ]
    },
    'estudio-estandar': {
      title: 'Estudio Balcon',
      images: [
        '/images/estudio-estandar/1.webp',
        '/images/estudio-estandar/2.webp',
        '/images/estudio-estandar/3.webp',
        '/images/estudio-estandar/4.webp',
        '/images/estudio-estandar/5.webp',
        '/images/estudio-estandar/6.webp',
        '/images/estudio-estandar/7.webp'
      ]
    },
    'estudio-triple-estandar': {
      title: 'Estudio Triple Estándar',
      images: [
        '/images/estudio-triple-estandar/1.webp',
        '/images/estudio-triple-estandar/2.webp',
        '/images/estudio-triple-estandar/3.webp',
        '/images/estudio-triple-estandar/4.webp',
        '/images/estudio-triple-estandar/5.webp',
        '/images/estudio-triple-estandar/6.webp'
      ]
    },
    'estudio-basico': {
      title: 'Estudio Básico',
      images: [
        '/images/estudio-basico/1.webp',
        '/images/estudio-basico/2.webp',
        '/images/estudio-basico/3.webp',
        '/images/estudio-basico/4.webp'
      ]
    },
    'habitacion-compartida-mixta-6-camas': {
      title: 'Habitación Compartida Mixta 6 Camas',
      images: [
        '/images/habitacion-compartida-mixta-6-camas/1.webp',
        '/images/habitacion-compartida-mixta-6-camas/2.webp',
        '/images/habitacion-compartida-mixta-6-camas/3.webp',
        '/images/habitacion-compartida-mixta-6-camas/4.webp',
        '/images/habitacion-compartida-mixta-6-camas/5.webp',
        '/images/habitacion-compartida-mixta-6-camas/6.webp',
        '/images/habitacion-compartida-mixta-6-camas/7.webp'
      ]
    },
    'habitacion-compartida-mixta-4-camas': {
      title: 'Habitaciones Compartida Mixta 4 Camas',
      images: [
        '/images/habitacion-compartida-mixta-4-camas/1.webp',
        '/images/habitacion-compartida-mixta-4-camas/2.webp',
        '/images/habitacion-compartida-mixta-4-camas/3.webp',
        '/images/habitacion-compartida-mixta-4-camas/4.webp'
      ]
    },
    'habitacion-compartida-femenina-4-camas': {
      title: 'Habitación Compartida Femenina 4 Camas',
      images: [
        '/images/habitacion-compartida-femenina-4-camas/1.webp',
        '/images/habitacion-compartida-femenina-4-camas/2.webp',
        '/images/habitacion-compartida-femenina-4-camas/3.webp',
        '/images/habitacion-compartida-femenina-4-camas/4.webp',
        '/images/habitacion-compartida-femenina-4-camas/5.webp',
        '/images/habitacion-compartida-femenina-4-camas/6.webp'
      ]
    }
  };

  // Handle gallery navigation
  React.useEffect(() => {
    const handleNavigation = (event: PopStateEvent) => {
      const path = window.location.pathname;
      if (path.startsWith('/galeria/')) {
        const galleryType = path.replace('/galeria/', '') as keyof typeof galleryImages;
        if (galleryImages[galleryType]) {
          setGalleryData(galleryImages[galleryType]);
          setCurrentView('gallery');
        }
      } else {
        setCurrentView('home');
      }
    };

    // Handle initial load
    handleNavigation({} as PopStateEvent);

    // Listen for navigation changes
    window.addEventListener('popstate', handleNavigation);
    
    // Handle clicks on gallery links
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href^="/galeria/"]') as HTMLAnchorElement;
      if (link) {
        event.preventDefault();
        const galleryType = link.getAttribute('href')?.replace('/galeria/', '') as keyof typeof galleryImages;
        if (galleryImages[galleryType]) {
          setGalleryData(galleryImages[galleryType]);
          setCurrentView('gallery');
          window.history.pushState({}, '', link.getAttribute('href'));
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleBackToHome = () => {
    setCurrentView('home');
    window.history.pushState({}, '', '/');
  };

  if (currentView === 'gallery') {
    return (
      <GalleryPage
        title={galleryData.title}
        images={galleryData.images}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      <HeroSection />
      <Introduction />
      <Accommodations />
      <WellnessCommunity />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;