import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Zap, Target, Trophy, Rocket, Gem, Clock, Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      company: t('major_projects.goldfields.title'),
      title: t('major_projects.goldfields.subtitle'),
      value: "$21M USD",
      team: `650 ${t('projects.units.people')}`,
      time: `12 ${t('projects.units.months')}`,
      result: t('major_projects.goldfields.result'),
      description: t('major_projects.goldfields.description'),
      gradient: "from-amber-600 to-amber-800",
      iconComponent: Mountain
    },
    {
      company: t('major_projects.glencore.title'),
      title: t('major_projects.glencore.subtitle'),
      value: "$8M USD",
      team: `9 ${t('projects.units.people')}`,
      time: `12 ${t('projects.units.months')}`,
      result: t('major_projects.glencore.result'),
      description: t('major_projects.glencore.description'),
      gradient: "from-blue-600 to-blue-800",
      iconComponent: Zap
    },
    {
      company: t('major_projects.codelco.title'),
      title: t('major_projects.codelco.subtitle'),
      value: "$50M USD",
      team: `15 ${t('projects.units.people')}`,
      time: `24 ${t('projects.units.months')}`,
      result: t('major_projects.codelco.result'),
      description: t('major_projects.codelco.description'),
      gradient: "from-red-600 to-red-800",
      iconComponent: Target
    },
    {
      company: t('major_projects.pwc_center.title'),
      title: t('major_projects.pwc_center.subtitle'),
      value: "$20M USD",
      team: `25 ${t('projects.units.people')}`,
      time: `12 ${t('projects.units.months')}`,
      result: t('major_projects.pwc_center.result'),
      description: t('major_projects.pwc_center.description'),
      gradient: "from-orange-500 to-orange-700",
      iconComponent: Trophy
    },
    {
      company: t('major_projects.rga_landing.title'),
      title: t('major_projects.rga_landing.subtitle'),
      value: "$25M USD",
      team: `35 ${t('projects.units.people')}`,
      time: `13 ${t('projects.units.months')}`,
      result: t('major_projects.rga_landing.result'),
      description: t('major_projects.rga_landing.description'),
      gradient: "from-green-600 to-green-800",
      iconComponent: Rocket
    },
    {
      company: t('major_projects.accenture_practice.title'),
      title: t('major_projects.accenture_practice.subtitle'),
      value: "$12M USD",
      team: `23 ${t('projects.units.people')}`,
      time: `15 ${t('projects.units.months')}`,
      result: t('major_projects.accenture_practice.result'),
      description: t('major_projects.accenture_practice.description'),
      gradient: "from-purple-600 to-purple-800",
      iconComponent: Gem
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="pt-24 pb-16 bg-ey-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-ey-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-ey-dark rounded-full blur-2xl"></div>
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
            className="text-3xl md:text-4xl font-black text-ey-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('major_projects.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-ey-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('major_projects.subtitle')}
          </motion.p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-ey-medium border border-ey-light rounded-lg p-4 hover:border-ey-yellow transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ey-yellow rounded-lg mr-3 flex items-center justify-center shadow-lg">
                    <project.iconComponent className="w-6 h-6 text-ey-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-ey-white">{project.company}</h3>
                    <p className="text-sm text-ey-white/70 font-medium">{project.title}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-ey-white/70 font-medium flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {t('projects.value')}:
                    </span>
                    <span className="font-black text-ey-yellow text-base">{project.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-ey-white/70 font-medium flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {t('projects.time')}:
                    </span>
                    <span className="font-semibold text-ey-white text-sm">{project.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-ey-white/70 font-medium flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {t('projects.team')}:
                    </span>
                    <span className="font-semibold text-ey-white text-sm">{project.team}</span>
                  </div>
                  <div className="flex justify-between items-start min-h-[2rem]">
                    <span className="text-sm text-ey-white/70 font-medium flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {t('projects.result')}:
                    </span>
                    <span className="font-semibold text-ey-yellow text-right flex-1 ml-2 text-sm">{project.result}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-ey-light pt-3 mt-auto">
                  <p className="text-sm text-ey-white/80 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Separate Total Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl font-black text-ey-yellow mb-4">$141M+</div>
          <p className="text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed">
            {t('projects.total_description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}