import { motion } from "framer-motion";
import BulletAccordion from "@/components/BulletAccordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Strategic() {
  const { t } = useLanguage();
  
  const insights = [
    {
      title: t('strategic.insights.ai_reality.title'),
      subtitle: "",
      bullets: [
        { heading: t('strategic.insights.ai_reality.bullets.0.heading'),
          detail: t('strategic.insights.ai_reality.bullets.0.detail') },
        { heading: t('strategic.insights.ai_reality.bullets.1.heading'),
          detail: t('strategic.insights.ai_reality.bullets.1.detail') },
        { heading: t('strategic.insights.ai_reality.bullets.2.heading'),
          detail: t('strategic.insights.ai_reality.bullets.2.detail') },
        { heading: t('strategic.insights.ai_reality.bullets.3.heading'),
          detail: t('strategic.insights.ai_reality.bullets.3.detail') }
      ]
    },
    {
      title: t('strategic.insights.velocity_imperative.title'),
      subtitle: "",
      bullets: [
        { heading: t('strategic.insights.velocity_imperative.bullets.0.heading'),
          detail: t('strategic.insights.velocity_imperative.bullets.0.detail') },
        { heading: t('strategic.insights.velocity_imperative.bullets.1.heading'),
          detail: t('strategic.insights.velocity_imperative.bullets.1.detail') },
        { heading: t('strategic.insights.velocity_imperative.bullets.2.heading'),
          detail: t('strategic.insights.velocity_imperative.bullets.2.detail') },
        { heading: t('strategic.insights.velocity_imperative.bullets.3.heading'),
          detail: t('strategic.insights.velocity_imperative.bullets.3.detail') }
      ]
    },
    {
      title: t('strategic.insights.strategic_opportunity.title'),
      subtitle: "",
      bullets: [
        { heading: t('strategic.insights.strategic_opportunity.bullets.0.heading'),
          detail: t('strategic.insights.strategic_opportunity.bullets.0.detail') },
        { heading: t('strategic.insights.strategic_opportunity.bullets.1.heading'),
          detail: t('strategic.insights.strategic_opportunity.bullets.1.detail') },
        { heading: t('strategic.insights.strategic_opportunity.bullets.2.heading'),
          detail: t('strategic.insights.strategic_opportunity.bullets.2.detail') },
        { heading: t('strategic.insights.strategic_opportunity.bullets.3.heading'),
          detail: t('strategic.insights.strategic_opportunity.bullets.3.detail') }
      ]
    }
  ];

  return (
    <section id="strategic" className="py-16 bg-ey-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-ey-yellow/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-ey-dark/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-6xl font-black text-ey-white mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('strategic.title')} <span className="text-ey-yellow">{t('strategic.title_highlight')}</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('strategic.subtitle')}
          </motion.p>
        </motion.div>

        {/* Strategic Insights */}
        <div className="space-y-16 mt-32">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ey-yellow/50 to-transparent"></div>
                  <div className="mx-6 px-6 py-2 bg-ey-yellow/10 rounded-full border border-ey-yellow/30">
                    <span className="text-sm font-bold text-ey-yellow uppercase tracking-wider">
                      {index === 0 ? t('strategic.categories.reality') : index === 1 ? t('strategic.categories.velocity') : t('strategic.categories.opportunity')}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ey-yellow/50 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-black text-ey-white leading-tight">
                  {insight.title}
                </h3>
              </motion.div>
              
              <BulletAccordion
                title={""}
                subtitle={insight.subtitle}
                bullets={insight.bullets}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-ey-yellow/30 rounded-3xl blur-2xl animate-pulse"></div>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://307db0fe02dea6e144176d9a7150c4a9.r2.cloudflarestorage.com/rodcv/KSO_2024_V1_rcymfs.xlsx.undefined';
                link.download = 'KSO_2024_V1.xlsx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative bg-gradient-to-r from-ey-dark via-ey-medium to-ey-dark rounded-3xl px-12 py-8 border-2 border-ey-yellow/60 shadow-2xl hover:border-ey-yellow/80 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-center">
                <p className="text-4xl text-ey-yellow font-black mb-2">{t('strategic.cta.title')}</p>
                <p className="text-lg text-ey-white/80 font-medium">{t('strategic.cta.subtitle')}</p>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
