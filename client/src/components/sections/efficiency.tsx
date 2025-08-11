import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle, Timer, Activity, Droplets, TrendingUp, Briefcase, Sparkles, Cpu, Users, Star, Target, Heart, Zap, Rocket } from "lucide-react";
import TracksSection from "./TracksSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Efficiency() {
  const { t } = useLanguage();
  
  // Client logos para prueba social
  const clients = [
    { name: "Anglo American", logo: "/logos/anglo.svg" },
    { name: "Antofagasta Minerals", logo: "/logos/antofagasta.svg" },
    { name: "Codelco", logo: "/logos/codelco.svg" },
    { name: "BHP", logo: "/logos/bhp.svg" },
    { name: "Teck", logo: "/logos/teck.svg" },
    { name: "Otros", logo: "/logos/otros.svg" }
  ];
  
  
  // Datos para "Cómo trabajamos" (3 pasos)
  const howWeWork = [
    {
      step: "1",
      title: t('efficiency.discovery.title'),
      duration: t('efficiency.discovery.duration'),
      description: t('efficiency.discovery.description')
    },
    {
      step: "2",
      title: t('efficiency.mvp.title'),
      duration: t('efficiency.mvp.duration'),
      description: t('efficiency.mvp.description')
    },
    {
      step: "3",
      title: t('efficiency.scale.title'),
      duration: t('efficiency.scale.duration'),
      description: t('efficiency.scale.description')
    }
  ];
  
  // Risk & Governance items
  const riskGovernance = [
    {
      icon: Shield,
      title: t('efficiency.security_data.title'),
      description: t('efficiency.security_data.description')
    },
    {
      icon: CheckCircle,
      title: t('efficiency.guaranteed_delivery.title'),
      description: t('efficiency.guaranteed_delivery.description')
    },
    {
      icon: Users,
      title: t('efficiency.continuity.title'),
      description: t('efficiency.continuity.description')
    }
  ];

  return (
    <section id="efficiency" className="py-16 md:py-24 bg-ey-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Section - Premium Executive Design */}
        <motion.div 
          className="relative mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-ey-yellow rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            
            {/* ¿Por Qué Quiero Ser Parte de EY? */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-ey-white mb-6">{t('efficiency.main_title')} <span className="text-ey-yellow">{t('efficiency.ey_highlight')}</span>?</h2>
              <p className="text-lg md:text-xl text-ey-white/80 mb-12">{t('efficiency.main_subtitle')}</p>
              
            </motion.div>

            {/* Value Proposition Cards */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-ey-medium/30 to-ey-dark/60 backdrop-blur-lg rounded-2xl p-8 border border-ey-yellow/20 text-center group hover:border-ey-yellow/40 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ey-yellow mb-4">{t('efficiency.motivations.respect.title')}</h3>
                <p className="text-sm md:text-base text-ey-white/80 leading-relaxed">{t('efficiency.motivations.respect.description')}</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-ey-yellow/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-ey-yellow/40 text-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-ey-yellow to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-ey-yellow mb-4">{t('efficiency.motivations.moment.title')}</h3>
                  <p className="text-base md:text-lg text-ey-white font-semibold leading-relaxed">
                    {t('efficiency.motivations.moment.description')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-ey-medium/30 to-ey-dark/60 backdrop-blur-lg rounded-2xl p-8 border border-ey-yellow/20 text-center group hover:border-ey-yellow/40 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-ey-yellow mb-4">{t('efficiency.motivations.challenge.title')}</h3>
                <p className="text-sm md:text-base text-ey-white/80 leading-relaxed">{t('efficiency.motivations.challenge.description')}</p>
              </motion.div>
            </motion.div>

            {/* Un Momento Único */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
            <div className="bg-gradient-to-r from-ey-yellow/10 to-orange-500/10 rounded-xl p-8 border border-ey-yellow/20 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-ey-white mb-6">{t('efficiency.unique_moment.title')} <span className="text-ey-yellow">{t('efficiency.unique_moment.title_highlight')}</span></h2>
                <div className="w-16 h-px bg-ey-yellow/30 mx-auto mb-6"></div>
                <p className="text-lg md:text-xl text-ey-white/80 leading-relaxed">
                  {t('efficiency.unique_moment.description')}
                </p>
              </div>
            </motion.div>


            {/* Statement Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-ey-yellow text-center mb-12">{t('efficiency.statement.title')}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                    <h3 className="text-xl font-bold text-ey-yellow mb-4">{t('efficiency.statement.tengo.title')}</h3>
                    <p className="text-ey-white/80 leading-relaxed">
                      {t('efficiency.statement.tengo.content')}
                    </p>
                  </div>
                  
                  <div className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                    <h3 className="text-xl font-bold text-ey-yellow mb-4">{t('efficiency.statement.soy.title')}</h3>
                    <p className="text-ey-white/80 leading-relaxed">
                      {t('efficiency.statement.soy.content')}
                    </p>
                  </div>
                  
                  <div className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                    <h3 className="text-xl font-bold text-ey-yellow mb-4">{t('efficiency.statement.quiero.title')}</h3>
                    <p className="text-ey-white/80 leading-relaxed">
                      {t('efficiency.statement.quiero.content')}
                    </p>
                  </div>
                  
                  <div className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                    <h3 className="text-xl font-bold text-ey-yellow mb-4">{t('efficiency.statement.puedo.title')}</h3>
                    <p className="text-ey-white/80 leading-relaxed">
                      {t('efficiency.statement.puedo.content')}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="bg-gradient-to-r from-ey-yellow/10 to-orange-500/10 rounded-xl p-6 border border-ey-yellow/20 max-w-4xl mx-auto">
                    <p className="text-ey-white/80 leading-relaxed text-lg md:text-xl">
                      {t('efficiency.track1_closing')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        
        {/* 4. Mi aporte (4 Tracks) - TracksSection Premium */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <TracksSection compact={true} />
        </motion.div>
        
        {/* 3. Cómo trabajamos (3 pasos) */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ey-white mb-6">{t('efficiency.how_we_work')}</h3>
            <p className="text-lg md:text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed">{t('efficiency.proven_process')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeWork.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-ey-yellow/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-ey-yellow rounded-full flex items-center justify-center text-white font-bold text-base">
                  {step.step}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-ey-white mb-3">{step.title}</h4>
                <p className="text-base font-medium text-ey-yellow mb-4">{step.duration}</p>
                <p className="text-base text-ey-white/80 leading-relaxed">{step.description}</p>
                {index < howWeWork.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-ey-white/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 4. Risk & Governance (mini-strip) */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-10 border border-ey-yellow/20">
            <h3 className="text-xl md:text-2xl font-bold text-ey-white mb-8 text-center">{t('efficiency.risk_governance')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {riskGovernance.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-ey-yellow/20 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-ey-yellow" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-ey-white mb-2">{item.title}</h4>
                    <p className="text-sm md:text-base text-ey-white/80 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* 5. Cierre de sección */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-ey-yellow/10 to-orange-500/10 rounded-xl p-10 border border-ey-yellow/20">
            <p className="text-lg md:text-xl font-medium text-ey-white leading-relaxed text-center">
              {t('efficiency.final_statement')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
