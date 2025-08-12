import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Award, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Deploy timestamp: 2025-07-29T02:52:44Z - CORRECTED HERO TEXT

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen bg-ey-dark pt-20 md:pt-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-7xl font-black text-ey-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.title')} 
              <br />
              <span className="text-ey-yellow">{t('hero.subtitle')}</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl text-ey-white/80 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={() => {
                  const element = document.getElementById('pipeline');
                  if (element) {
                    element.scrollIntoView({ behavior: 'auto', block: 'start' });
                  }
                }}
                className="bg-ey-yellow text-ey-black px-12 py-6 text-lg font-bold rounded-lg shadow-lg hover:bg-orange-400 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Button>
            </motion.div>

            {/* Metrics Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center p-3 sm:p-4 bg-ey-medium border border-ey-light rounded-lg">
                <div className="text-2xl sm:text-3xl font-black text-ey-yellow mb-1 sm:mb-2">
                  $120M+
                </div>
                <div className="text-ey-white text-xs sm:text-sm font-medium leading-tight">{t('hero.metric1')}</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-ey-medium border border-ey-light rounded-lg">
                <div className="text-2xl sm:text-3xl font-black text-ey-yellow mb-1 sm:mb-2">
                  12+
                </div>
                <div className="text-ey-white text-xs sm:text-sm font-medium">{t('hero.metric2')}</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-ey-medium border border-ey-light rounded-lg">
                <div className="text-2xl sm:text-3xl font-black text-ey-yellow mb-1 sm:mb-2">
                  $150M+
                </div>
                <div className="text-ey-white text-xs sm:text-sm font-medium">{t('hero.metric3')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Professional portrait placeholder */}
              <div className="relative bg-ey-medium border border-ey-light rounded-lg p-8">
                <div className="aspect-square bg-ey-light rounded-lg overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dhobnlg73/image/upload/v1753808500/IMG_5278_zkcpuy.jpg" 
                    alt="Rodrigo Palacios - Mining Technology Expert Presentation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Professional credentials */}
                <div className="mt-6 space-y-3">
                  <div className="bg-ey-yellow text-ey-black px-4 py-2 rounded text-center font-bold text-sm">
                    {t('hero.expert_badge')}
                  </div>
                  
                  <div className="bg-ey-light text-ey-white px-4 py-2 rounded text-center font-semibold text-sm border border-ey-yellow/30">
                    {t('hero.consulting_badge')}
                  </div>
                </div>
              </div>
              
              {/* Static accent elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-ey-yellow rounded border-4 border-ey-dark"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}