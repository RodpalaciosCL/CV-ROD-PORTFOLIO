import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, Target, Shield, ArrowRight, CheckCircle, Star, Rocket, 
  Eye, Heart, Brain, Globe, Clock, BarChart3, ChevronRight, 
  Play, Pause, ArrowUpRight, Minus, Zap, TrendingUp, Lightbulb, 
  Briefcase, Award, MapPin, Calendar, Building2, Cpu, Database,
  Network, Lock, Settings, Wrench, Code, Terminal
} from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  const experienceData = [
    { number: t('about.stats.technology'), label: t('about.stats.expertise'), color: "text-ey-yellow" },
    { number: t('about.stats.strategy'), label: t('about.stats.leadership'), color: "text-ey-white" },
    { number: t('about.stats.business'), label: t('about.stats.results'), color: "text-ey-yellow" }
  ];

    const coreValues = [
    {
      title: t('about.relationship.title'),
      description: t('about.relationship.description'),
      icon: Users,
      delay: 0.1
    },
    {
      title: t('about.understanding.title'),
      description: t('about.understanding.description'),
      icon: Brain,
      delay: 0.2
    },
    {
      title: t('about.growth.title'),
      description: t('about.growth.description'),
      icon: TrendingUp,
      delay: 0.3
    },
    {
      title: t('about.sustainability.title'),
      description: t('about.sustainability.description'),
      icon: Globe,
      delay: 0.4
    }
  ];

  const approachSections = [
    {
      id: 0,
      title: t('about.tabs.focus.title'),
      content: t('about.tabs.focus.content'),
      icon: Target
    },
    {
      id: 1,
      title: t('about.tabs.approach.title'),
      content: t('about.tabs.approach.content'),
      icon: Rocket
    },
    {
      id: 2,
      title: t('about.tabs.results.title'),
      content: t('about.tabs.results.content'),
      icon: Star
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
    <section ref={containerRef} id="about" className="pt-32 pb-16 bg-ey-dark relative overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ey-yellow/3 via-transparent to-ey-yellow/3"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ey-yellow/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ey-yellow/2 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-2 h-2 bg-ey-yellow rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-1 h-1 bg-ey-yellow rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-ey-yellow rounded-full"
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section with Photo - Inspired by Spektral Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Photo Section - Frame Design */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Outer Frame */}
              <div className="absolute -inset-6 bg-gradient-to-r from-ey-yellow via-transparent to-ey-yellow rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              
              {/* Inner Frame */}
              <div className="relative bg-ey-dark rounded-3xl p-3 border border-ey-yellow/40">
                <div className="relative bg-ey-dark rounded-2xl p-2 border border-ey-yellow/20">
                  <img 
                    src="https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/_CVA4769_Original_y7efhh.jpg" 
                    alt="Rodrigo Palacios - Professional Profile" 
                    className="w-full h-[500px] object-cover rounded-xl"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ey-dark/90 via-transparent to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* Floating Stats Badge - Inspired by WA Solutions */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-ey-yellow text-ey-black px-6 py-4 rounded-2xl shadow-2xl border-2 border-ey-dark"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-2xl font-black">20+</div>
                <div className="text-xs font-bold">Years Exp.</div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-ey-yellow border-2 border-ey-dark rounded-full"></div>
              </motion.div>

              {/* Corner Accent */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-ey-yellow rounded-tl-xl"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-ey-yellow rounded-br-xl"></div>
            </div>
          </motion.div>

          {/* Content Section - Inspired by Virya Energy */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Title with Typography */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="inline-flex items-center bg-ey-yellow/10 text-ey-yellow px-3 py-1 rounded-full border border-ey-yellow/20 text-xs font-bold">
                  <Minus className="w-3 h-3 mr-1" />
                  Professional Profile
                </div>
              </motion.div>

              <motion.h1 
                className="text-lg sm:text-xl lg:text-2xl font-black text-ey-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <div className="whitespace-nowrap">
                    <span className="text-ey-yellow">{t('about.title')}</span>
                  </div>
                  <div className="whitespace-nowrap">
                    <span className="text-ey-white">{t('about.subtitle')}</span>
                  </div>
                </div>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg text-ey-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t('about.description')}
              </motion.p>
            </div>

            {/* Stats Row - Inspired by Maruko Labs */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {experienceData.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`text-2xl font-black ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-ey-white/60 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values - Redesigned with WOW Factor */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/5 via-transparent to-ey-yellow/5 rounded-3xl blur-3xl"></div>
            
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: value.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  {/* Card Container */}
                  <div className="relative bg-gradient-to-br from-ey-medium/30 to-ey-dark/50 rounded-2xl p-8 border border-ey-light/20 backdrop-blur-sm overflow-hidden">
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/20 via-transparent to-ey-yellow/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Icon Section */}
                    <div className="flex items-start space-x-6 mb-6">
                      {/* Icon Container with Glow */}
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-ey-yellow to-ey-yellow/80 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-ey-yellow/25 transition-all duration-500 group-hover:scale-110">
                          <div className="absolute inset-0 bg-ey-yellow rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                          <value.icon className="w-8 h-8 text-ey-white relative z-10" />
                        </div>
                        {/* Floating Accent */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-ey-yellow rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-ey-white mb-2 group-hover:text-ey-yellow transition-colors duration-500">
                          {value.title}
                        </h3>
                        {/* Underline Effect */}
                        <div className="w-0 h-1 bg-ey-yellow rounded-full group-hover:w-full transition-all duration-700 ease-out"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <p className="text-ey-white/90 leading-relaxed text-base group-hover:text-ey-white transition-colors duration-500">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-ey-yellow/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ey-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ey-yellow/30 to-transparent hidden lg:block"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-ey-yellow/30 to-transparent hidden lg:block"></div>
          </div>
        </motion.div>

        {/* Strategic Approach - Interactive Tabs with Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl lg:text-4xl font-black text-ey-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-ey-yellow">{t('about.strategic_approach.title')}</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-ey-white/80 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('about.strategic_approach.description')}
            </motion.p>
          </div>

          {/* Interactive Tabs - Clean Design */}
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {approachSections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-bold transition-all duration-500 border-2 ${
                    activeSection === section.id
                      ? 'bg-ey-yellow text-ey-black border-ey-yellow shadow-xl scale-105'
                      : 'bg-transparent text-ey-white/80 border-ey-light/20 hover:border-ey-yellow/50 hover:text-ey-white hover:bg-ey-yellow/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="text-base">{section.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-ey-medium/20 rounded-2xl p-12 border border-ey-light/10 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-ey-yellow rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    {(() => {
                      const IconComponent = approachSections[activeSection].icon;
                      return <IconComponent className="w-8 h-8 text-ey-black" />;
                    })()}
                  </div>
                  <p className="text-lg text-ey-white/90 leading-relaxed max-w-4xl mx-auto">
                    {approachSections[activeSection].content}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Challenges Section - Split Layout with Frames */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenge */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-ey-medium/20 rounded-2xl p-8 border border-ey-light/10 backdrop-blur-sm h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ey-yellow to-transparent rounded-t-2xl"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-ey-yellow rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <BarChart3 className="w-6 h-6 text-ey-black" />
                  </div>
                  <h3 className="text-2xl font-black text-ey-white">{t('about.challenge.title')}</h3>
                </div>
                <p className="text-lg text-ey-white/90 leading-relaxed">
                  {t('about.challenge.content')}
                </p>
              </div>
            </motion.div>

            {/* Path */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-ey-medium/20 rounded-2xl p-8 border border-ey-light/10 backdrop-blur-sm h-full">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-ey-yellow to-transparent rounded-t-2xl"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-ey-yellow rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <ArrowRight className="w-6 h-6 text-ey-black" />
                  </div>
                  <h3 className="text-2xl font-black text-ey-white">{t('about.path.title')}</h3>
                </div>
                <p className="text-lg text-ey-white/90 leading-relaxed">
                  {t('about.path.content')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Career Timeline - Full width section */}
        <motion.div 
          className="mb-24 bg-ey-dark rounded-3xl p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/10 to-transparent"></div>
          <div className="relative">
            <div className="text-center mb-8">
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

        {/* Final Impact Statement - Hero Style with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Background elements with parallax */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 via-transparent to-ey-yellow/10 rounded-3xl"
            style={{ scale }}
          />
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-ey-yellow/20 rounded-full blur-3xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-24 h-24 bg-ey-yellow/20 rounded-full blur-2xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-20 h-20 bg-ey-yellow/20 rounded-full blur-2xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          />
          
          <div className="relative p-16">
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-ey-yellow rounded-2xl flex items-center justify-center mr-6 shadow-xl">
                <Rocket className="w-8 h-8 text-ey-black" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-ey-white">{t('about.impact.title')}</h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-ey-white/90 leading-relaxed max-w-6xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('about.impact.content')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center text-ey-yellow font-bold text-lg">
                <CheckCircle className="w-6 h-6 mr-3" />
                <span>Resultados Medibles</span>
              </div>
              <div className="flex items-center text-ey-yellow font-bold text-lg">
                <Eye className="w-6 h-6 mr-3" />
                <span>Visión Estratégica</span>
              </div>
              <div className="flex items-center text-ey-yellow font-bold text-lg">
                <Heart className="w-6 h-6 mr-3" />
                <span>Compromiso Total</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
