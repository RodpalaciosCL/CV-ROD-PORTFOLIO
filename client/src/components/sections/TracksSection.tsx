import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Briefcase,
  Sparkles,
  Users,
  Timer,
  TrendingUp,
  DollarSign,
  BadgeCheck,
  Star,
  Zap,
  Target,
} from "lucide-react";
import tracksContent from "@/content/tracksContent.json";
import { useLanguage } from "@/contexts/LanguageContext";

const iconLib: Record<string, React.ElementType> = {
  Cpu,
  Briefcase,
  Sparkles,
  Users,
  Timer,
  TrendingUp,
  DollarSign,
  BadgeCheck,
  Star,
  Zap,
  Target,
};

export type TracksSectionProps = {
  id?: string;
  className?: string;
  compact?: boolean;
  onCta?: (action: string) => void;
  variantClient?: string;
};

export default function TracksSection({ id, className = "", compact }: TracksSectionProps) {
  const { t } = useLanguage();
  const data = tracksContent;
  
  const KPI_ICONS = Object.fromEntries(
    data.kpis.map((k: any) => [k.label, iconLib[k.icon] || BadgeCheck])
  );
  
  // KPI translations mapping
  const getKpiTranslation = (label: string, type: 'label' | 'value') => {
    const kpiMap: Record<string, string> = {
      'Revenue Stream': 'revenue_stream',
      'Tiempo Respuesta': 'response_time', 
      'Expansión Mercado': 'market_expansion',
      'Enfoque Proactivo': 'proactive_focus'
    };
    const key = kpiMap[label];
    return key ? t(`tracks.kpi.${key}.${type}`) : (type === 'label' ? label : data.kpis.find(k => k.label === label)?.value || '');
  };

  return (
    <div id={id} className={`w-full ${compact ? "py-12" : "py-20"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Title Section - Premium */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-ey-white mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('tracks.title')} <span className="text-ey-yellow">
              {t('tracks.title_highlight').split(': ')[0]}: <span className="animate-color-pulse">{t('tracks.title_highlight').split(': ')[1]}</span>
            </span>
          </motion.h2>
          
        </motion.div>

        {/* KPIs Premium Strip */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.kpis.map((stat: any, index: number) => {
              const Icon = KPI_ICONS[stat.label] || BadgeCheck;
              return (
                <motion.div 
                  key={stat.label}
                  className="bg-ey-medium/20 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20 text-center group hover:border-ey-yellow/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-ey-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-ey-yellow/30 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-ey-yellow" />
                  </div>
                  <h4 className="text-sm font-bold text-ey-yellow mb-3 uppercase tracking-wider">{getKpiTranslation(stat.label, 'label')}</h4>
                  <p className="text-base md:text-lg font-semibold text-ey-white leading-relaxed">{getKpiTranslation(stat.label, 'value')}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Client Strip */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {data.clients.map((client, index) => (
              <motion.div 
                key={client.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-ey-medium/30 to-ey-dark/40 backdrop-blur-md rounded-xl px-6 py-4 border border-ey-yellow/20 group-hover:border-ey-yellow/40 transition-all duration-300 shadow-lg">
                  <span className="text-base md:text-lg font-bold text-ey-white/80 group-hover:text-ey-white transition-colors duration-300 whitespace-nowrap">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Tracks - Lista Premium Optimizada */}
        <div className="space-y-8">
          {data.tracks.map((track: any, index) => {
            const Icon = iconLib[track.icon] || BadgeCheck;
            const trackNumber = `track${index + 1}`;
            
            // Map bullet indices to translation keys
            const bulletKeys = [
              index === 0 ? ['framework', 'expansion', 'pricing', 'gotomarket', 'governance', 'practice_expansion', 'account_immersion', 'early_vision', 'optimization'] :
              index === 1 ? ['envisioning', 'benchmark', 'sprints', 'discovery', 'narrative'] :
              index === 2 ? ['platform', 'tower', 'ai_loop', 'runbooks', 'mlops'] :
              index === 3 ? ['esg', 'academy', 'stakeholder', 'governance', 'culture'] : []
            ][0];
            
            return (
              <motion.div
                key={track.key}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-ey-medium/20 via-ey-dark/40 to-ey-medium/20 backdrop-blur-lg rounded-2xl border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-500 overflow-hidden group">
                  {/* Header Track */}
                  <div className="flex items-center p-8 border-b border-ey-yellow/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-ey-yellow to-orange-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-ey-white mb-3 group-hover:text-ey-yellow transition-colors duration-300 leading-tight">
                        {t(`tracks.${trackNumber}.title`)}
                      </h3>
                      <p className="text-base md:text-lg text-ey-white/70 font-medium leading-relaxed">
                        {t(`tracks.${trackNumber}.subtitle`)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content Track */}
                  <div className="p-8">
                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {track.bullets.map((bullet: any, bIndex: number) => (
                        <motion.div 
                          key={bIndex}
                          className="flex items-start space-x-3 p-4 bg-ey-medium/10 rounded-lg border border-ey-yellow/10 hover:border-ey-yellow/30 transition-all duration-300 group/bullet"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: bIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-ey-yellow rounded-full mt-2 shrink-0 group-hover/bullet:scale-150 transition-transform duration-300"></div>
                          <div className="flex-1">
                            <h4 className="text-sm md:text-base font-bold text-ey-yellow mb-2 group-hover/bullet:text-orange-400 transition-colors duration-300">
                              {bulletKeys && bulletKeys[bIndex] ? t(`tracks.${trackNumber}.${bulletKeys[bIndex]}.title`) : bullet.title}
                            </h4>
                            <p className="text-sm md:text-base text-ey-white/80 leading-relaxed">
                              {bulletKeys && bulletKeys[bIndex] ? t(`tracks.${trackNumber}.${bulletKeys[bIndex]}.text`) : bullet.text}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Data Hooks */}
                    {track.dataHooks && track.dataHooks.length > 0 && (
                      <div>
                        <div className="flex items-center mb-4">
                          <h4 className="text-sm font-bold text-ey-yellow/80 uppercase tracking-wider mr-3">
                            {t('tracks.kpi_metrics')}
                          </h4>
                          <div className="flex-1 h-px bg-gradient-to-r from-ey-yellow/30 to-transparent"></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {track.dataHooks.map((hook: string, hIndex: number) => (
                            <motion.span 
                              key={hIndex}
                              className="px-3 py-1 bg-ey-yellow/10 text-ey-yellow font-medium text-xs rounded-full border border-ey-yellow/20 hover:bg-ey-yellow/20 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: hIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              {hook}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-ey-yellow/30 to-transparent group-hover:via-ey-yellow/60 transition-all duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom Call to Action - Premium */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-ey-yellow/10 via-orange-500/10 to-ey-yellow/10 backdrop-blur-xl rounded-3xl p-10 border border-ey-yellow/30 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-4 left-8 w-2 h-2 bg-ey-yellow rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-12 w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-ey-yellow rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-bold text-ey-white leading-relaxed mb-4">
                  {t('tracks.closing.title')} <span className="text-ey-yellow">{t('tracks.closing.highlight')}</span>
                </p>
                <p className="text-lg text-ey-white/80">
                  {t('tracks.closing.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
