import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; // Este es nuevo, instálalo

// ¡Importante! Necesitas i18next-http-backend para cargar los JSON desde la carpeta /public
// Ejecuta: npm install i18next-http-backend

i18n
  // Carga las traducciones desde /public/locales
  .use(Backend)
  // Detecta el idioma del usuario
  .use(LanguageDetector)
  // Pasa la instancia de i18n a react-i18next
  .use(initReactI18next)
  .init({
    // Idioma por defecto si el navegador no detecta nada
    fallbackLng: 'es',
    debug: true, // Ponlo en 'false' para producción

    supportedLngs: ['es', 'en', 'pt', 'fr'],
    
    interpolation: {
      escapeValue: false, // React ya se encarga de la protección XSS
    },

    // Dónde encontrar los archivos JSON
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;