import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CompetitiveAdvantages() {
  const { t } = useLanguage();
  
  const advantages = [
    t('competitive.advantage1'),
    t('competitive.advantage2'),
    t('competitive.advantage3'),
    t('competitive.advantage4')
  ];

  return (
    <section id="competitive-advantages" className="py-12 bg-gradient-to-br from-ey-dark via-ey-medium/20 to-black">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-ey-white mb-4">
            {t('competitive.title')} <span className="text-ey-yellow">{t('competitive.title_highlight')}</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            {t('competitive.subtitle')}
          </p>
        </motion.div>
        
        {/* Main Content - Modern Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Photo */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-ey-yellow/30 shadow-xl">
                <img 
                  src="https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/b99e23a8-539a-41f1-e9d7-764237b3db00/public" 
                  alt="Rodrigo en faena minera" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Advantages Grid */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-ey-medium/20 backdrop-blur-sm rounded-xl border border-ey-light/20 hover:border-ey-yellow/30 transition-all duration-300 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-ey-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-ey-yellow" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {advantage}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Result Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-ey-medium/20 backdrop-blur-sm rounded-2xl border border-ey-light/20 p-6">
            <h3 className="text-xl font-bold text-ey-yellow mb-3">{t('competitive.result_title')}</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('competitive.result_part1')} {t('competitive.result_part2')} <span className="text-ey-yellow font-semibold">{t('competitive.result_highlight')}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
