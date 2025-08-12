import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { getClientConfig } from "@/config/clients";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const clientConfig = getClientConfig();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always keep navbar visible
      setIsVisible(true);
      
      // Show/hide scroll to top button
      setShowScrollTop(currentScrollY > 400);
      
      setLastScrollY(currentScrollY);
    };

    // Cerrar menú móvil al hacer scroll
    const handleScrollAndCloseMenu = () => {
      handleScroll();
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScrollAndCloseMenu, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollAndCloseMenu);
  }, [lastScrollY, mobileMenuOpen]);

  // Cerrar menú móvil al redimensionar ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
      setMobileMenuOpen(false); // Cerrar menú móvil al navegar
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav 
            className="fixed top-0 w-full bg-ey-dark backdrop-blur-md z-50 border-b border-ey-yellow/20 shadow-lg"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Client Logo */}
                <div className="flex items-center">
                  <img 
                    src={clientConfig.logo} 
                    alt={`${clientConfig.name} Logo`} 
                    className={`h-5 w-auto -mt-1 ${clientConfig.logoFilters || ''}`}
                  />
                </div>
                
                {/* Desktop Menu - Centrado */}
                <div className="hidden md:flex items-center justify-center flex-1">
                  <div className="flex items-center space-x-8">
                    <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.home')}</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.profile')}</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.projects')}</a>
                    <a href="#pipeline" onClick={(e) => handleNavClick(e, 'pipeline')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.pipeline')}</a>
                    <a href="#value" onClick={(e) => handleNavClick(e, 'value')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.value')}</a>
                    <a href="#efficiency" onClick={(e) => handleNavClick(e, 'efficiency')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.proposal')}</a>
                    <a href="#speaking" onClick={(e) => handleNavClick(e, 'speaking')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.leadership')}</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium">{t('nav.contact')}</a>
                  </div>
                </div>
                
                {/* Desktop Right Side - Language + Contact */}
                <div className="hidden md:flex items-center space-x-3">
                  {/* Language Selector */}
                  <LanguageSelector />
                  
                  {/* Desktop Contact Button */}
                  <motion.div
                    animate={{ 
                      color: ['#ffffff', '#ffffff', '#ffffff'] 
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Button 
                      onClick={() => window.open(`https://wa.me/56971415496?text=${encodeURIComponent(clientConfig.whatsappMessage)}`, '_blank')}
                      className="bg-ey-yellow hover:bg-orange-400 font-bold text-xs rounded-lg border border-ey-yellow/20 px-2 py-1"
                      style={{ color: 'inherit', height: '32px', minWidth: '70px' }}
                    >
                      {t('nav.contactButton')}
                    </Button>
                  </motion.div>
                </div>

                {/* Mobile Right Side - Language + Menu */}
                <div className="md:hidden flex items-center space-x-3">
                  {/* Mobile Language Selector - ARMÓNICO */}
                  <div className="flex items-center bg-ey-yellow/10 rounded-lg p-1 border border-ey-yellow/30">
                    <button
                      onClick={() => setLanguage('es')}
                      className={`px-2 py-1 text-xs font-semibold rounded transition-all duration-200 ${
                        language === 'es'
                          ? 'text-ey-dark bg-ey-yellow'
                          : 'text-ey-white/70 hover:text-ey-white'
                      }`}
                    >
                      ES
                    </button>
                    <div className="w-px h-3 bg-ey-yellow/30" />
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-2 py-1 text-xs font-semibold rounded transition-all duration-200 ${
                        language === 'en'
                          ? 'text-ey-dark bg-ey-yellow'
                          : 'text-ey-white/70 hover:text-ey-white'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                  
                  {/* Mobile Menu Button */}
                  <button
                    onClick={toggleMobileMenu}
                    className="text-ey-white hover:text-ey-yellow transition-colors p-2"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden border-t border-ey-yellow/20"
                  >
                    <div className="py-4 space-y-4">
                      <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.home')}</a>
                      <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.profile')}</a>
                      <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.projects')}</a>
                      <a href="#pipeline" onClick={(e) => handleNavClick(e, 'pipeline')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.pipeline')}</a>
                      <a href="#value" onClick={(e) => handleNavClick(e, 'value')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.value')}</a>
                      <a href="#efficiency" onClick={(e) => handleNavClick(e, 'efficiency')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.proposal')}</a>
                      <a href="#speaking" onClick={(e) => handleNavClick(e, 'speaking')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.leadership')}</a>
                      <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-ey-white hover:text-ey-yellow transition-colors text-lg font-medium py-2">{t('nav.contact')}</a>
                      
                      {/* Mobile Language Selector */}
                      <div className="pt-2 border-t border-ey-yellow/20">
                        <LanguageSelector />
                      </div>
                      
                      {/* Mobile Contact Button */}
                      <div className="pt-4 border-t border-ey-yellow/20">
                        <Button 
                          onClick={() => {
                            window.open(`https://wa.me/56971415496?text=${encodeURIComponent(clientConfig.whatsappMessage)}`, '_blank');
                            setMobileMenuOpen(false);
                          }}
                          className="w-full bg-ey-yellow hover:bg-orange-400 text-black font-bold py-3"
                        >
                          📱 {t('nav.whatsappButton')}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-ey-yellow text-ey-black p-3 rounded-full shadow-lg hover:bg-orange-400 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
