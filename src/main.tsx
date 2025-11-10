import { StrictMode } from 'react';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Importa la configuración de i18n
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* React.Suspense es necesario por si las traducciones cargan de forma asíncrona */}
    <Suspense fallback="Cargando...">
      <App />
    </Suspense>
  </StrictMode>
);
