import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Typewriter effect component
function TypewriterText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // Speed of typing
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, isVisible]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "rodrigo@airontechs.com",
      description: "",
      gradient: "from-blue-500 to-blue-700",
      action: () => {
        if ((window as any).trackContactClick) {
          (window as any).trackContactClick('email');
        }
        window.location.href = 'mailto:rodrigo@airontechs.com';
      }
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: "+56971415496",
      description: "",
      gradient: "from-green-500 to-green-700",
      action: () => {
        if ((window as any).trackContactClick) {
          (window as any).trackContactClick('whatsapp');
        }
        window.open('https://wa.me/56971415496', '_blank');
      }
    },
    {
      icon: User,
      title: "LinkedIn",
      value: "linkedin.com/in/rodpalacios",
      description: "",
      gradient: "from-purple-500 to-purple-700",
      action: () => {
        if ((window as any).trackContactClick) {
          (window as any).trackContactClick('linkedin');
        }
        window.open('https://linkedin.com/in/rodpalacios', '_blank');
      }
    }
  ];

  const nextSteps = [
    {
      step: "1",
      title: "Reunión Inicial",
      description: "Discusión estratégica de 30 minutos",
      timeline: "Inmediato",
      icon: MessageSquare
    },
    {
      step: "2", 
      title: "Revisión de Pipeline",
      description: "Análisis detallado de oportunidades",
      timeline: "Semana 1",
      icon: Calendar
    },
    {
      step: "3",
      title: "Acuerdo de Asociación",
      description: "Formalizar alianza estratégica",
      timeline: "Semana 2",
      icon: ArrowRight
    }
  ];

  return (
    <section id="contact" className="py-32 pb-48 bg-gradient-to-br from-ey-dark via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-ey-yellow/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-ey-yellow/5 rounded-full blur-2xl"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-ey-yellow/3 rounded-full blur-xl"
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <div>
              <TypewriterText 
                text={t('contact.title_part1')} 
                delay={800}
              />
            </div>
            <div className="text-ey-yellow">
              <TypewriterText 
                text={t('contact.title_part2')}
                delay={2400}
              />
            </div>
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-yellow/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => window.open('https://wa.me/56971415496?text=Hola%20Rodrigo,%20me%20interesa%20conversar%20sobre%20la%20propuesta%20estratégica%20para%20EY', '_blank')}
                className="relative bg-ey-yellow text-ey-black px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:shadow-ey-yellow/25 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center">
                  {t('contact.cta_button')}
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-ey-yellow rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
            <motion.p 
              className="text-ey-white/60 text-sm mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Contact Methods */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={method.action}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/10 to-ey-yellow/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-ey-white/5 backdrop-blur-xl rounded-2xl p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300 text-center">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-ey-white mb-3 group-hover:text-ey-yellow transition-colors">
                  {method.title}
                </h3>
                <p className="text-ey-yellow font-semibold mb-2 group-hover:underline">{method.value}</p>
                <p className="text-ey-white/70 text-sm group-hover:text-ey-white/90 transition-colors">{t('contact.click_to_contact')}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}