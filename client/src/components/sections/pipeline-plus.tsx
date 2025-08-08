import { motion } from "framer-motion";
import { Zap, Building, Wifi, Eye, TrendingUp, Users, Calendar, DollarSign, Award, Briefcase, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from '../../contexts/LanguageContext';

export default function PipelinePlus() {
  const { t } = useLanguage();
  
  const projects = [
    { 
      icon: Building, 
      name: t('pipeline_plus.data_centers.name'), 
      desc: t('pipeline_plus.data_centers.desc'),
      color: "text-blue-400"
    },
    { 
      icon: Zap, 
      name: t('pipeline_plus.batteries.name'), 
      desc: t('pipeline_plus.batteries.desc'),
      color: "text-green-400"
    },
    { 
      icon: Wifi, 
      name: t('pipeline_plus.dark_fiber.name'), 
      desc: t('pipeline_plus.dark_fiber.desc'),
      color: "text-purple-400"
    },
    { 
      icon: Eye, 
      name: t('pipeline_plus.ai_infractions.name'), 
      desc: t('pipeline_plus.ai_infractions.desc'),
      color: "text-orange-400"
    },
  ];

  const partners = [
    { name: "ENGIE", role: t('pipeline_plus.partners.engie_role'), icon: Zap },
    { name: "FERRONOR", role: t('pipeline_plus.partners.ferronor_role'), icon: TrendingUp },
    { name: t('pipeline_plus.partners.tier1_name'), role: t('pipeline_plus.partners.tier1_role'), icon: Building },
    { name: "AMUNOCHI", role: t('pipeline_plus.partners.amunochi_role'), icon: Users },
    { name: t('pipeline_plus.partners.tech_name'), role: t('pipeline_plus.partners.tech_role'), icon: Wifi },
    { name: t('pipeline_plus.partners.gov_name'), role: t('pipeline_plus.partners.gov_role'), icon: Award },
  ];

  const pipelineStatus = [
    { name: t('pipeline_plus.status.smart_crossings.name'), status: t('pipeline_plus.status.smart_crossings.status'), icon: TrendingUp, progress: "50%" },
    { name: t('pipeline_plus.status.dark_fiber.name'), status: t('pipeline_plus.status.dark_fiber.status'), icon: Wifi, progress: "75%" },
    { name: t('pipeline_plus.status.iot_pipeline.name'), status: t('pipeline_plus.status.iot_pipeline.status'), icon: Building, progress: "25%" },
    { name: t('pipeline_plus.status.ai_infractions.name'), status: t('pipeline_plus.status.ai_infractions.status'), icon: Eye, progress: "90%" },
  ];

  return (
    <section id="pipeline-plus" className="py-12 bg-ey-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">{t('pipeline_plus.title')}</h2>
          <p className="text-lg md:text-xl text-ey-white/80 max-w-3xl mx-auto">
            {t('pipeline_plus.subtitle_part1')} <span className="text-ey-yellow font-bold">{t('pipeline_plus.subtitle_highlight')}</span>{t('pipeline_plus.subtitle_part2')}
          </p>
        </motion.div>

        {/* Main Container */}
        <motion.div 
          className="bg-gradient-to-br from-ey-medium/20 to-ey-dark/30 backdrop-blur-lg rounded-2xl p-3 md:p-4 border-2 border-ey-yellow/30 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">

            {/* --- COLUMNA IZQUIERDA (2/5) --- */}
            <div className="lg:col-span-2">
              
              {/* Diseño Principal - Ferronor */}
              <div className="bg-gradient-to-br from-ey-dark/40 to-ey-dark/20 p-4 rounded-xl border-2 border-ey-yellow/40 shadow-xl h-full flex flex-col">
                
                {/* Header Principal */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-ey-yellow rounded-full"></div>
                    <h3 className="text-lg font-black text-ey-yellow">FERRONOR</h3>
                  </div>
                  <p className="text-xs text-ey-white/70">{t('pipeline_plus.ferronor.description')}</p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center bg-ey-dark/60 p-2 rounded-lg border border-ey-yellow/20">
                    <p className="text-xl font-black text-white">1.300</p>
                    <p className="text-[10px] text-ey-white/70 uppercase">{t('pipeline_plus.stats.km_route')}</p>
                  </div>
                  <div className="text-center bg-ey-dark/60 p-2 rounded-lg border border-ey-yellow/20">
                    <p className="text-xl font-black text-white">400</p>
                    <p className="text-[10px] text-ey-white/70 uppercase">{t('pipeline_plus.stats.stations')}</p>
                  </div>
                  <div className="text-center bg-ey-dark/60 p-2 rounded-lg border border-ey-yellow/20">
                    <p className="text-xl font-black text-white">600+</p>
                    <p className="text-[10px] text-ey-white/70 uppercase">{t('pipeline_plus.stats.crossings')}</p>
                  </div>
                </div>
                
                {/* Proyectos */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-blue-400 mb-2">{t('pipeline_plus.key_projects')}</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {projects.map((p, index) => (
                      <div key={p.name} className="bg-ey-dark/60 p-2 rounded-lg border border-blue-400/20 flex items-center space-x-1">
                        <p.icon className={`w-3 h-3 ${p.color} flex-shrink-0`} />
                        <p className="font-semibold text-[10px] text-white">{p.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Impacto Bottom */}
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-3 rounded-lg border border-green-400/30">
                    <h4 className="text-sm font-bold text-green-400 mb-2 text-center">{t('pipeline_plus.impact.title')}</h4>
                    <div className="flex justify-between text-center">
                      <div>
                        <p className="text-lg font-black text-green-400">+$1B</p>
                        <p className="text-[9px] text-ey-white/70">{t('pipeline_plus.impact.year10')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-black text-blue-400">6M</p>
                        <p className="text-[9px] text-ey-white/70">{t('pipeline_plus.impact.revenue')}</p>
                      </div>
                      <div>
                        <p className="text-lg font-black text-purple-400">4</p>
                        <p className="text-[9px] text-ey-white/70">{t('pipeline_plus.impact.projects')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>

            {/* --- COLUMNA DERECHA (3/5) --- */}
            <div className="lg:col-span-3 flex flex-col space-y-3">

              {/* Pipeline Ejecutivo */}
              <div className="bg-ey-dark/40 p-4 rounded-xl border border-ey-light/20">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-ey-yellow rounded-full"></div>
                  <h3 className="text-lg font-bold text-ey-yellow">{t('pipeline_plus.executive_pipeline')}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pipelineStatus.map((item, index) => (
                    <div key={item.name} className="bg-ey-dark/60 p-3 rounded-lg border border-ey-light/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <item.icon className="w-4 h-4 text-ey-yellow" />
                        <p className="text-sm font-bold text-white">{item.name}</p>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-ey-white/70">{t('pipeline_plus.progress')}</span>
                        <span className="text-xs font-bold text-ey-yellow bg-ey-yellow/20 px-2 py-1 rounded-full">{item.status}</span>
                      </div>
                      <div className="h-2 bg-ey-dark/70 rounded-full"> 
                        <motion.div 
                          className="h-2 bg-gradient-to-r from-ey-yellow to-yellow-400 rounded-full" 
                          initial={{ width: 0 }} 
                          whileInView={{ width: item.progress }} 
                          transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }} 
                          viewport={{ once: true }} 
                        /> 
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consorcio Estratégico */}
              <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-4 rounded-xl border border-purple-400/30">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <h3 className="text-lg font-bold text-purple-400">{t('pipeline_plus.strategic_consortium')}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {partners.map((partner, index) => (
                    <div key={partner.name} className="bg-ey-dark/60 p-3 rounded-lg border border-purple-400/20 text-center hover:bg-ey-dark/80 transition-all duration-300">
                      <partner.icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                      <p className="font-bold text-xs text-white mb-1">{partner.name}</p>
                      <p className="text-[10px] text-ey-white/60">{partner.role}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
