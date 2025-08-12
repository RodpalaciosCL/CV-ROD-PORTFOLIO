import { Lightbulb, Settings, Zap, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  const skills = [
    { 
      icon: Lightbulb, 
      titleKey: "about.relationship.title", 
      descriptionKey: "about.relationship.description",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Settings, 
      titleKey: "about.understanding.title", 
      descriptionKey: "about.understanding.description",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Zap, 
      titleKey: "about.growth.title", 
      descriptionKey: "about.growth.description",
      color: "from-orange-500 to-red-500"
    }
  ];

  const timeline = [
    { 
      companyKey: "projects.airontech.title", 
      period: "2023-Present", 
      roleKey: "projects.airontech.role",
      descriptionKey: "projects.airontech.description"
    },
    { 
      companyKey: "projects.kyndryl.title", 
      period: "2020-2022", 
      roleKey: "projects.kyndryl.role",
      descriptionKey: "projects.kyndryl.description"
    },
    { 
      companyKey: "projects.pwc.title", 
      period: "2019-2020", 
      roleKey: "projects.pwc.role",
      descriptionKey: "projects.pwc.description"
    },
    { 
      companyKey: "projects.deloitte.title", 
      period: "2018-2019", 
      roleKey: "projects.deloitte.role",
      descriptionKey: "projects.deloitte.description"
    },
    { 
      companyKey: "projects.rga.title", 
      period: "2018", 
      roleKey: "projects.rga.role",
      descriptionKey: "projects.rga.description"
    },
    { 
      companyKey: "projects.accenture.title", 
      period: "2016-2017", 
      roleKey: "projects.accenture.role",
      descriptionKey: "projects.accenture.description"
    },
    { 
      companyKey: "projects.multiple.title", 
      period: "2006-2016", 
      roleKey: "projects.multiple.role",
      descriptionKey: "projects.multiple.description"
    }
  ];

  return (
    <section id="about" className="pt-32 pb-16 bg-ey-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo section - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-ey-medium rounded-3xl p-1 border border-ey-light">
                <img 
                  src="https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/_CVA4769_Original_y7efhh.jpg" 
                  alt="Rodrigo Palacios - Professional Profile" 
                  className="w-full h-[400px] object-cover rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Floating stats */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-ey-yellow text-ey-black rounded-2xl p-4 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-black">20+</div>
              <div className="text-sm font-semibold">Years Exp.</div>
            </motion.div>
          </motion.div>
          
          {/* Content section - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-black text-ey-white mb-6">
                <span className="text-ey-yellow">{t('about.title')} <span className="text-ey-white">{t('about.subtitle')}</span></span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-ey-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('about.description')}
            </motion.p>
            
            {/* Skills cards */}
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4 bg-ey-medium rounded-lg p-4 border border-ey-light hover:border-ey-yellow transition-all duration-300">
                    <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <skill.icon className="w-6 h-6 text-ey-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-ey-white mb-1">
                        {t(skill.titleKey)}
                      </h3>
                      <p className="text-sm text-ey-white/80 leading-relaxed">{t(skill.descriptionKey)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Career timeline - Full width section */}
        <motion.div 
          className="mt-12 bg-ey-dark rounded-3xl p-4 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/10 to-transparent"></div>
          <div className="relative">
            <div className="text-center mb-6">
              <h3 className="text-3xl md:text-4xl font-black text-ey-yellow mb-2 flex items-center justify-center">
                <Award className="w-5 h-5 mr-2" />
                {t('projects.title')}
              </h3>
              <p className="text-lg text-ey-white/80 max-w-4xl mx-auto leading-relaxed">
                {t('projects.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-ey-medium rounded-xl p-4 border border-ey-light hover:border-ey-yellow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-3 h-3 bg-ey-yellow rounded-full"></div>
                    <div className="text-ey-yellow font-bold text-xs bg-ey-yellow/10 px-2 py-1 rounded-full">
                      {item.period}
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-ey-white font-bold text-lg mb-1">{t(item.companyKey)}</div>
                    <div className="text-ey-yellow font-medium text-sm">{t(item.roleKey)}</div>
                  </div>
                  <div className="text-ey-white/80 text-xs leading-relaxed">
                    {t(item.descriptionKey)}
                  </div>
                </motion.div>
              ))}
              
              {/* Professional Summary - Two additional cards */}
              <motion.div 
                className="bg-ey-yellow/10 rounded-xl p-4 border-l-4 border-ey-yellow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * timeline.length }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-3 h-3 bg-ey-yellow rounded-full"></div>
                  <div className="text-ey-yellow font-bold text-xs bg-ey-yellow/10 px-2 py-1 rounded-full">
                    Summary
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-ey-white font-bold text-lg mb-1">{t('value.executive.title')}</div>
                  <div className="text-ey-yellow font-medium text-sm">{t('value.executive.subtitle')}</div>
                </div>
                <div className="text-ey-white/80 text-xs leading-relaxed">
                  {t('value.executive.description')}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-ey-medium rounded-xl p-4 border-r-4 border-ey-yellow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (timeline.length + 1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-3 h-3 bg-ey-yellow rounded-full"></div>
                  <div className="text-ey-yellow font-bold text-xs bg-ey-yellow/10 px-2 py-1 rounded-full">
                    {t('value.differential.title')}
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-ey-white font-bold text-lg mb-1">{t('value.differential.subtitle')}</div>
                  <div className="text-ey-yellow font-medium text-sm">{t('value.transformation.title')}</div>
                </div>
                <div className="text-ey-white/80 text-xs leading-relaxed">
                  {t('value.differential.description')}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
