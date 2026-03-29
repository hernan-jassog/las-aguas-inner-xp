import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xaqlqnko");

  useEffect(() => {
    // 1. Revisamos si ya lo cerró hoy
    const closedDate = localStorage.getItem('lasAguas_newsletter_closed');
    const today = new Date().toDateString();

    // 2. Si no lo ha cerrado hoy, disparamos el temporizador de 3 segundos
    if (closedDate !== today) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Función para cerrar el modal y guardar la fecha de hoy
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('lasAguas_newsletter_closed', new Date().toDateString());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Botón de Cerrar (X) */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Estado de Éxito */}
        {state.succeeded ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Bienvenido a la tribu!</h3>
            <p className="text-gray-600 mb-6">Pronto recibirás nuestras novedades y buena vibra.</p>
            <button 
              onClick={handleClose}
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          /* Formulario */
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900">Inner Community 🌿</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Únete a Las Aguas y sé el primero en enterarte de nuestros retiros, eventos y promociones.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="sr-only">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="telefono" className="sr-only">Teléfono (Opcional)</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Teléfono / WhatsApp (Opcional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70"
              >
                {state.submitting ? 'Enviando...' : 'Quiero unirme'}
              </button>
            </form>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              Prometemos no enviarte spam. Cero malas vibras.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;