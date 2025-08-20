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
    <section id="solutions" className="py-12 bg-gradient-to-br from-ey-dark via-ey-medium/20 to-black">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Compact and Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-ey-white mb-3">
            {t('solutions.highly_demanded_title')}
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* Modern Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-ey-medium/30 backdrop-blur-sm rounded-2xl p-1 border border-ey-light/20">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-ey-yellow text-ey-dark shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-ey-light/10'
                }`}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
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

