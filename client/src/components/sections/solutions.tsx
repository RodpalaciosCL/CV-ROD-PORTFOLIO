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
    <section id="solutions" className="py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ey-yellow mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-ey-yellow text-black shadow-lg shadow-ey-yellow/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tabs.find(tab => tab.id === activeTab)?.component}
        </motion.div>
      </div>
    </section>
  );
}

