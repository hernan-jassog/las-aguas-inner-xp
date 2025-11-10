import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher flex space-x-3">
      <button 
        onClick={() => changeLanguage('es')}
        className={`text-2xl transform transition-transform hover:scale-110 ${i18n.language === 'es' ? '' : 'opacity-50 grayscale'}`}
        title="Español"
      >
        🇨🇴
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`text-2xl transform transition-transform hover:scale-110 ${i18n.language === 'en' ? '' : 'opacity-50 grayscale'}`}
        title="English"
      >
        🇬🇧
      </button>
      <button 
        onClick={() => changeLanguage('pt')}
        className={`text-2xl transform transition-transform hover:scale-110 ${i18n.language === 'pt' ? '' : 'opacity-50 grayscale'}`}
        title="Português"
      >
        🇧🇷
      </button>
    </div>
  );
}

export default LanguageSwitcher;