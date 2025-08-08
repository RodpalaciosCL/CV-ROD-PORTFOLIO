import { motion } from "framer-motion";
import { AlertTriangle, Zap, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Strategic() {
  const { t } = useLanguage();
  
  const insights = [
    {
      category: t('strategic.insights_old.ai_reality.category'),
      impact: t('strategic.insights_old.ai_reality.impact'),
      description: t('strategic.insights_old.ai_reality.description'),
      findings: [
        t('strategic.insights_old.ai_reality.findings.0'),
        t('strategic.insights_old.ai_reality.findings.1'),
        t('strategic.insights_old.ai_reality.findings.2'),
        t('strategic.insights_old.ai_reality.findings.3')
      ],
      icon: AlertTriangle,
      gradient: "from-red-600 via-red-500 to-orange-400",
      shadowColor: "shadow-red-500/25"
    },
    {
      category: t('strategic.insights_old.velocity_imperative.category'),
      impact: t('strategic.insights_old.velocity_imperative.impact'),
      description: t('strategic.insights_old.velocity_imperative.description'),
      findings: [
        t('strategic.insights_old.velocity_imperative.findings.0'),
        t('strategic.insights_old.velocity_imperative.findings.1'),
        t('strategic.insights_old.velocity_imperative.findings.2'),
        t('strategic.insights_old.velocity_imperative.findings.3')
      ],
      icon: Zap,
      gradient: "from-orange-500 via-yellow-500 to-amber-400",
      shadowColor: "shadow-orange-500/25"
    },
    {
      category: t('strategic.insights_old.strategic_opportunity.category'),
      impact: t('strategic.insights_old.strategic_opportunity.impact'),
      description: t('strategic.insights_old.strategic_opportunity.description'),
      findings: [
        t('strategic.insights_old.strategic_opportunity.findings.0'),
        t('strategic.insights_old.strategic_opportunity.findings.1'),
        t('strategic.insights_old.strategic_opportunity.findings.2'),
        t('strategic.insights_old.strategic_opportunity.findings.3')
      ],
      icon: Target,
      gradient: "from-emerald-600 via-green-500 to-teal-400",
      shadowColor: "shadow-green-500/25"
    }
  ];

  return (
    <section id="strategic" className="py-32 bg-gradient-to-br from-ey-dark via-ey-medium to-ey-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-ey-yellow/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-ey-white mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('strategic.old_title')} <span className="text-ey-yellow">{t('strategic.old_title_highlight')}</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('strategic.old_subtitle')}
          </motion.p>
        </motion.div>

        {/* Strategic Insights */}
        <div className="space-y-12">
          {insights.map((insight, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-ey-medium via-ey-medium/90 to-ey-dark rounded-3xl p-10 border border-ey-light/30 hover:border-ey-yellow/50 transition-all duration-500 overflow-hidden">
                {/* Background Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-5 rounded-3xl`}></div>
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${insight.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column - Category & Impact */}
                  <div className="lg:col-span-4">
                    <motion.div 
                      className="flex items-center space-x-4 mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${insight.gradient} rounded-2xl flex items-center justify-center ${insight.shadowColor} shadow-2xl`}>
                        <insight.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-ey-white mb-1">
                          {insight.category}
                        </h3>
                        <span className={`text-sm font-bold bg-gradient-to-r ${insight.gradient} bg-clip-text text-transparent`}>
                          {insight.impact}
                        </span>
                      </div>
                    </motion.div>
                    
                    <p className="text-ey-white/80 font-medium leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                  
                  {/* Right Column - Findings */}
                  <div className="lg:col-span-8">
                    <div className="space-y-4">
                      {insight.findings.map((finding, findingIndex) => (
                        <motion.div 
                          key={findingIndex}
                          className="group/finding relative"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * findingIndex }}
                          viewport={{ once: true }}
                          whileHover={{ x: 8 }}
                        >
                          <div className="relative bg-gradient-to-r from-ey-dark/80 via-ey-medium/40 to-ey-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-ey-light/30 group-hover/finding:border-ey-yellow/60 transition-all duration-300 overflow-hidden">
                            {/* Background gradient effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} opacity-0 group-hover/finding:opacity-15 transition-opacity duration-300`}></div>
                            
                            {/* Left accent bar */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${insight.gradient} opacity-60 group-hover/finding:opacity-100 transition-opacity`}></div>
                            
                            <div className="relative flex items-center space-x-4">
                              {/* Number indicator */}
                              <div className={`w-8 h-8 bg-gradient-to-br ${insight.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                <span className="text-white font-black text-sm">{findingIndex + 1}</span>
                              </div>
                              
                              {/* Finding text */}
                              <p className="text-ey-white/85 font-medium leading-relaxed text-base group-hover/finding:text-ey-white transition-colors flex-1">
                                {finding}
                              </p>
                              
                              {/* Right arrow indicator */}
                              <motion.div 
                                className="opacity-0 group-hover/finding:opacity-100 transition-opacity"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <TrendingUp className="w-5 h-5 text-ey-yellow" />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/30 via-ey-yellow/50 to-ey-yellow/30 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-ey-dark via-ey-medium to-ey-dark rounded-3xl px-12 py-8 border-2 border-ey-yellow/60 shadow-2xl">
              <div className="text-center">
                <p className="text-3xl text-ey-yellow font-black mb-2">{t('strategic.old_cta.title')}</p>
                <p className="text-xl text-ey-white font-semibold">
                  {t('strategic.old_cta.line1')}
                  <br />
                  <span className="text-ey-yellow font-black">{t('strategic.old_cta.line2')}</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
