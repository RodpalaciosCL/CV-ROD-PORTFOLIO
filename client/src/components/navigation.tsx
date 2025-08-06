import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always keep navbar visible
      setIsVisible(true);
      
      // Show/hide scroll to top button
      setShowScrollTop(currentScrollY > 400);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
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
                <div className="flex items-center">
                  <img 
                    src="https://res.cloudinary.com/dhobnlg73/image/upload/v1754256023/EY_idKDHDpz8E_0_prmiha.svg" 
                    alt="EY Logo" 
                    className="h-9 w-auto -mt-1"
                  />
                </div>
                <div className="hidden md:flex space-x-8">
                  <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Inicio</a>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Perfil</a>
                  <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Proyectos</a>
                  <a href="#pipeline" onClick={(e) => handleNavClick(e, 'pipeline')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Pipeline</a>
                  <a href="#value" onClick={(e) => handleNavClick(e, 'value')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Valor</a>
                  <a href="#efficiency" onClick={(e) => handleNavClick(e, 'efficiency')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Propuesta</a>
                  <a href="#speaking" onClick={(e) => handleNavClick(e, 'speaking')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Liderazgo</a>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-ey-white hover:text-ey-yellow transition-colors text-base font-medium">Contacto</a>
                </div>
                <motion.div
                  animate={{ 
                    color: ['#000000', '#dc2626', '#000000'] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Button 
                    onClick={() => window.open('https://wa.me/56971415496?text=Hola%20Rodrigo,%20me%20interesa%20conversar%20sobre%20la%20propuesta%20estrat%C3%A9gica%20para%20EY', '_blank')}
                    className="bg-ey-yellow hover:bg-yellow-400 font-bold text-sm px-6 py-2"
                    style={{ color: 'inherit' }}
                  >
                    Contactar
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-ey-yellow text-ey-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
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
