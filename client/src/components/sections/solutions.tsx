import { motion } from 'framer-motion';
import { useState } from 'react';
import Operation from './plug-and-play-solutions';
import Security from './security';
import Maintenance from './maintenance';

const tabs = [
  { id: 'operation', label: 'Operación', component: <Operation /> },
  { id: 'security', label: 'Seguridad', component: <Security /> },
  { id: 'maintenance', label: 'Mantenimiento', component: <Maintenance /> },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

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
            Soluciones <span className="text-ey-yellow">Altamente Demandadas por la Industria</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-ey-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            De las cuales tengo en su mayoría la <span className="text-ey-yellow font-semibold">capacidad de vender e implementar en tiempo récord</span>.
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
                  {tab.label}
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

