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
    <section id="competitive-advantages" className="min-h-screen py-8 bg-ey-dark relative overflow-visible">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-ey-yellow/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ey-dark/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 0.8, 1.3], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative py-8">
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Epic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 via-ey-yellow/10 to-transparent rounded-3xl blur-3xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-ey-yellow/5 via-transparent to-ey-yellow/5 rounded-3xl blur-2xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-ey-dark via-ey-medium/30 to-ey-dark rounded-3xl p-8 border-2 border-ey-yellow/40 shadow-2xl backdrop-blur-sm overflow-visible">
            
            {/* Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-ey-yellow to-transparent rounded-full"></div>
                <div className="mx-6">
                  <h2 className="text-3xl md:text-4xl font-black text-ey-yellow">{t('competitive.title')}</h2>
                </div>
                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-ey-yellow to-transparent rounded-full"></div>
              </div>
              <p className="text-base text-ey-white/80 max-w-3xl mx-auto">
                {t('competitive.subtitle')}
              </p>
            </motion.div>
            
            {/* Main Content - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Column - Photo */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/30 to-ey-yellow/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative">
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl border-3 border-ey-yellow/50 shadow-2xl"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src="https://res.cloudinary.com/dhobnlg73/image/upload/v1753742038/IMG_0183_iddtfw.jpg" 
                      alt="Rodrigo en faena minera" 
                      className="w-full h-[280px] object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right Column - Advantages */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {advantages.map((advantage, index) => (
                  <motion.div 
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-ey-white/5 backdrop-blur-sm rounded-xl p-4 border border-ey-yellow/20 group-hover:border-ey-yellow/50 transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <motion.div 
                          className="w-10 h-10 bg-gradient-to-br from-ey-yellow to-yellow-400 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
                        >
                          <Check className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-ey-white font-bold text-base leading-snug group-hover:text-ey-yellow transition-colors">
                            {advantage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Enhanced Bottom CTA */}
            <motion.div 
              className="text-center mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/30 via-ey-yellow/50 to-ey-yellow/30 rounded-2xl blur-xl animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-ey-dark via-ey-medium to-ey-dark rounded-2xl px-8 py-4 border-2 border-ey-yellow/60 shadow-2xl">
                  <div className="text-center">
                    <p className="text-2xl text-ey-yellow font-black mb-2">{t('competitive.result_title')}</p>
                    <p className="text-base text-ey-white font-semibold leading-relaxed max-w-3xl mx-auto">
                      {t('competitive.result_part1')}
                      <br />
                      {t('competitive.result_part2')}
                      <br />
                      <span className="text-ey-yellow font-black">{t('competitive.result_highlight')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
