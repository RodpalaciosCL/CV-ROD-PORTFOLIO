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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Selector de categorías responsive */}
        <div className="flex justify-center mb-12 px-4">
          <div className="w-full max-w-2xl bg-ey-medium/30 backdrop-blur-xl rounded-2xl p-2 border border-ey-yellow/20 shadow-2xl">
            <div className="grid grid-cols-3 gap-1 sm:flex sm:space-x-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 text-center ${
                    activeTab === tab.id 
                      ? 'bg-ey-yellow text-ey-dark shadow-lg scale-105' 
                      : 'text-ey-white/70 hover:text-ey-white hover:bg-ey-white/10'
                  }`}
                >
                  {t(tab.labelKey)}
                  {activeTab === tab.id && (
                    <motion.div 
                      className="absolute inset-0 bg-ey-yellow/20 rounded-xl blur-md"
                      layoutId="activeBackground"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
            {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>
    </section>
  );
}

