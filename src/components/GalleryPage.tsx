import React from 'react';
import { ArrowLeft, X } from 'lucide-react';

interface GalleryPageProps {
  title: string;
  images: string[];
  onBack: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ title, images, onBack }) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="flex items-center text-warm-brown hover:text-brand-gold transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver
            </button>
            <h1 className="text-2xl font-bold text-warm-brown">{title}</h1>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;