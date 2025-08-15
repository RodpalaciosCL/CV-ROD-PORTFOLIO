import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'es' | 'en') => {
    if ((window as any).trackLanguageChange) {
      (window as any).trackLanguageChange(newLanguage);
    }
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-1 bg-ey-medium/30 rounded-lg p-1 border border-ey-yellow/20">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`relative px-2 py-1 text-xs font-bold rounded transition-all duration-200 ${
          language === 'es'
            ? 'text-ey-dark bg-ey-yellow'
            : 'text-ey-white/70 hover:text-ey-white'
        }`}
      >
        ES
        {language === 'es' && (
          <motion.div
            className="absolute inset-0 bg-ey-yellow/20 rounded blur-sm"
            layoutId="languageIndicator"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>
      <div className="w-px h-4 bg-ey-yellow/30" />
      <button
        onClick={() => handleLanguageChange('en')}
        className={`relative px-2 py-1 text-xs font-bold rounded transition-all duration-200 ${
          language === 'en'
            ? 'text-ey-dark bg-ey-yellow'
            : 'text-ey-white/70 hover:text-ey-white'
        }`}
      >
        EN
        {language === 'en' && (
          <motion.div
            className="absolute inset-0 bg-ey-yellow/20 rounded blur-sm"
            layoutId="languageIndicator"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>
    </div>
  );
}
