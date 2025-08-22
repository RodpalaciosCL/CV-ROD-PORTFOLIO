import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle, Timer, Activity, Droplets, TrendingUp, Briefcase, Sparkles, Cpu, Users, Star, Target, Heart, Zap, Rocket, Lightbulb, Clock, AlertTriangle, TrendingDown } from "lucide-react";
import TracksSection from "./TracksSection";
import { useLanguage } from "@/contexts/LanguageContext";

const EfficiencySection = () => {
  const { t } = useLanguage();

  const statements = [
    {
      icon: <Target className="w-10 h-10 text-ey-yellow" />,
      titleKey: "statement.vision.title",
      descriptionKey: "statement.vision.description",
    },
    {
      icon: <Users className="w-10 h-10 text-ey-yellow" />,
      titleKey: "statement.design.title",
      descriptionKey: "statement.design.description",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-ey-yellow" />,
      titleKey: "statement.iteration.title",
      descriptionKey: "statement.iteration.description",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-ey-yellow" />,
      titleKey: "statement.deployment.title",
      descriptionKey: "statement.deployment.description",
    },
  ];

  return (
    <section id="efficiency" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        
        {/* Efficiency Section - Kept as is */}
        <div className="relative">
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-ey-white mb-6 text-center leading-tight">{t('efficiency.main_title')}<br /><span className="text-ey-yellow">{t('efficiency.ey_highlight')}</span></h2>
              <p className="text-xl md:text-2xl text-ey-yellow font-semibold max-w-5xl mx-auto text-center leading-relaxed mb-12">{t('efficiency.main_subtitle')}</p>
              
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


            {/* Simple Statement Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Simple Header */}
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-ey-yellow mb-2">
                    {t('statement.title')}
                  </h2>
                  <p className="text-base md:text-lg text-ey-white/80 max-w-3xl mx-auto">
                    {t('statement.subtitle')}
                  </p>
                </div>
                
                {/* Simple Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {statements.map((statement, index) => (
                    <motion.div
                      key={index}
                      className="group relative bg-ey-dark/30 backdrop-blur-lg rounded-xl p-6 border border-ey-light/10 h-full flex flex-col text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-center mb-4">
                        {statement.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-ey-white mb-2">{t(statement.titleKey)}</h3>
                      <p className="text-sm text-ey-white/70 flex-grow">{t(statement.descriptionKey)}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Personal Statement Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Personal Statement Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { titleKey: 'personal_statement.have.title', descriptionKey: 'personal_statement.have.description', icon: <Users className="w-8 h-8 text-ey-yellow" /> },
                    { titleKey: 'personal_statement.am.title', descriptionKey: 'personal_statement.am.description', icon: <Star className="w-8 h-8 text-ey-yellow" /> },
                    { titleKey: 'personal_statement.want.title', descriptionKey: 'personal_statement.want.description', icon: <Target className="w-8 h-8 text-ey-yellow" /> },
                    { titleKey: 'personal_statement.can.title', descriptionKey: 'personal_statement.can.description', icon: <Zap className="w-8 h-8 text-ey-yellow" /> }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="group relative bg-ey-dark/30 backdrop-blur-lg rounded-xl p-6 border border-ey-light/10 h-full flex flex-col"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 mr-3">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-ey-white">{t(item.titleKey)}</h3>
                      </div>
                      <p className="text-sm text-ey-white/70 flex-grow leading-relaxed">{t(item.descriptionKey)}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Closing Statement */}
                <motion.div 
                  className="text-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-ey-yellow/10 to-orange-500/10 rounded-xl p-6 border border-ey-yellow/20 max-w-4xl mx-auto">
                    <p className="text-lg text-ey-white/90 leading-relaxed font-medium">
                      {t('personal_statement.closing')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Market Reality Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Clock className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-ey-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {t('market_reality.title')}
                  </motion.h2>
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-ey-yellow mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {t('market_reality.subtitle')}
                  </motion.h3>
                </div>

                {/* Accenture Case */}
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-8 border border-red-500/20 max-w-5xl mx-auto">
                    <p className="text-lg md:text-xl text-ey-white/90 leading-relaxed">
                      {t('market_reality.accenture_case')}
                    </p>
                  </div>
                </motion.div>

                {/* Accenture Image */}
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center">
                    <img 
                      src="https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/5063f732-e277-4205-6c2d-546a8880d300/public"
                      alt="Accenture Market Performance"
                      className="rounded-xl shadow-2xl max-w-4xl w-full"
                    />
                  </div>
                </motion.div>

                {/* Then Question */}
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-ey-yellow mb-8">
                    {t('market_reality.then_question')}
                  </h3>
                </motion.div>

                {/* Actions Grid */}
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { text: t('market_reality.actions.title'), icon: <Users className="w-6 h-6 text-ey-yellow" /> },
                      { text: t('market_reality.actions.juniors'), icon: <Sparkles className="w-6 h-6 text-ey-yellow" /> },
                      { text: t('market_reality.actions.approach'), icon: <Target className="w-6 h-6 text-ey-yellow" /> },
                      { text: t('market_reality.actions.speed'), icon: <Zap className="w-6 h-6 text-ey-yellow" /> },
                      { text: t('market_reality.actions.model'), icon: <AlertTriangle className="w-6 h-6 text-ey-yellow" /> }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="group relative bg-ey-dark/30 backdrop-blur-lg rounded-xl p-6 border border-ey-light/10 h-full flex items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 mr-4">
                          {item.icon}
                        </div>
                        <p className="text-sm text-ey-white/80 leading-relaxed">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* But People Objection */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/30 max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-4">
                      <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
                      <h4 className="text-xl font-bold text-red-400">
                        {t('market_reality.but_people')}
                      </h4>
                    </div>
                  </div>
                </motion.div>

                {/* Response */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-ey-yellow/10 to-green-500/10 rounded-xl p-8 border border-ey-yellow/20 max-w-5xl mx-auto">
                    <p className="text-lg md:text-xl text-ey-white/90 leading-relaxed">
                      {t('market_reality.response')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>


        
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
            {[
              {
                step: '1',
                title: t('efficiency.discovery.title'),
                duration: t('efficiency.discovery.duration'),
                description: t('efficiency.discovery.description'),
                icon: <Target className="w-6 h-6 text-white" />
              },
              {
                step: '2',
                title: t('efficiency.mvp.title'),
                duration: t('efficiency.mvp.duration'),
                description: t('efficiency.mvp.description'),
                icon: <Users className="w-6 h-6 text-white" />
              },
              {
                step: '3',
                title: t('efficiency.scale.title'),
                duration: t('efficiency.scale.duration'),
                description: t('efficiency.scale.description'),
                icon: <CheckCircle className="w-6 h-6 text-white" />
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-ey-yellow/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-ey-yellow rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-ey-white mb-3">{step.title}</h4>
                <p className="text-base font-medium text-ey-yellow mb-4">{step.duration}</p>
                <p className="text-base text-ey-white/80 leading-relaxed">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-ey-white/30" />
                  </div>
                )}
              </motion.div>
            ))}
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
};

export default EfficiencySection;
