import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, Calendar, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "rodrigo.palacios@strategic.com",
      description: "Respuesta en 24 horas",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+56 9 1234 5678",
      description: "Disponible horario comercial",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: User,
      title: "LinkedIn",
      value: "linkedin.com/in/rodrigopalacios",
      description: "Conexión profesional",
      gradient: "from-purple-500 to-purple-700"
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
    <section id="contact" className="py-32 bg-gradient-to-br from-ey-dark via-gray-900 to-black relative overflow-hidden">
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
            ¿Listo para Acelerar la <span className="text-ey-yellow">Práctica Minera de EY?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-yellow/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Conversemos sobre cómo esta asociación estratégica puede desbloquear $11.4M en oportunidades inmediatas 
            y establecer a EY como el consultor tecnológico minero líder en Latinoamérica.
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
              <Button className="relative bg-ey-yellow text-ey-black px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:shadow-ey-yellow/25 transition-all duration-300 group">
                <span className="relative z-10 flex items-center">
                  Agendar Reunión de Asociación Estratégica
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
              Disponible para discusión inmediata
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
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
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
                <p className="text-ey-yellow font-semibold mb-2">{method.value}</p>
                <p className="text-ey-white/70 text-sm">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Next Steps */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-ey-yellow/10 backdrop-blur-xl rounded-3xl p-12 border border-ey-yellow/30">
            {/* Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black text-ey-white mb-4">Próximos Pasos</h3>
              <p className="text-ey-white/80 text-lg">Proceso simplificado para iniciar la asociación estratégica</p>
            </motion.div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nextSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-ey-dark/60 backdrop-blur-sm rounded-2xl p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300">
                    {/* Step number */}
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="w-12 h-12 bg-ey-yellow rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <span className="text-ey-black font-black text-lg">{step.step}</span>
                      </motion.div>
                      <step.icon className="w-8 h-8 text-ey-yellow" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-bold text-ey-white mb-3 group-hover:text-ey-yellow transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-ey-white/80 mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-ey-yellow font-semibold text-sm">{step.timeline}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom emphasis */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-ey-dark rounded-2xl px-8 py-4 border border-ey-yellow/30">
                <p className="text-ey-white font-medium text-lg">
                  <span className="text-ey-yellow font-black">Objetivo:</span> Establecer asociación estratégica que genere valor inmediato para ambas organizaciones
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}