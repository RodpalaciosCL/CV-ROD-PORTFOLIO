import { motion } from 'framer-motion';
import { useState } from 'react';
import Operation from './plug-and-play-solutions';
import Security from './security';
import Maintenance from './maintenance';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Solutions() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('operation');
  
  const tabs = [
    { id: 'operation', labelKey: 'solutions.tab_operation', component: <Operation /> },
    { id: 'security', labelKey: 'solutions.tab_security', component: <Security /> },
    { id: 'maintenance', labelKey: 'solutions.tab_maintenance', component: <Maintenance /> },
  ];

  return (
    <section id="solutions" className="py-24 bg-ey-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-black text-ey-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('solutions.title')} <span className="text-ey-yellow">{t('solutions.title_highlight')}</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-ey-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('solutions.description')} <span className="text-ey-yellow font-semibold">{t('solutions.description_highlight')}</span>.
          </motion.p>
        </div>

        {/* Selector de categorías - Diseño horizontal mejorado */}
        <div className="flex justify-center mb-16">
          <motion.div 
            className="bg-gradient-to-r from-ey-medium/40 via-ey-medium/30 to-ey-medium/40 backdrop-blur-2xl rounded-full p-1.5 border border-ey-yellow/30 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-1">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-500 whitespace-nowrap min-w-[120px] md:min-w-[140px] ${
                    activeTab === tab.id 
                      ? 'bg-ey-yellow text-ey-dark shadow-lg transform scale-105' 
                      : 'text-ey-white/80 hover:text-ey-white hover:bg-ey-white/10 hover:scale-102'
                  }`}
                  whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: index * 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    opacity: { duration: 0.4, delay: 0.6 + index * 0.1 },
                    x: { duration: 0.4, delay: 0.6 + index * 0.1 },
                    scale: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <span className="relative z-10">{t(tab.labelKey)}</span>
                  {activeTab === tab.id && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-ey-yellow/20 via-ey-yellow/10 to-ey-yellow/20 rounded-full blur-lg"
                      layoutId="tabHighlight"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8">
            {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>
    </section>
  );
}

