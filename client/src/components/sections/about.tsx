import { Lightbulb, Settings, Zap, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { 
      icon: Lightbulb, 
      title: "Estrategia Digital", 
      description: "Roadmaps tecnológicos integrales para operaciones mineras",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Settings, 
      title: "Implementación Tecnológica", 
      description: "Despliegues de sistemas a gran escala y optimización",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Zap, 
      title: "Desarrollo de Negocios", 
      description: "Alianzas estratégicas y generación de ingresos",
      color: "from-orange-500 to-red-500"
    }
  ];

  const timeline = [
    { company: "Kyndryl", period: "2022-Presente", role: "Strategic Partner" },
    { company: "PwC", period: "2019-2022", role: "Senior Director" },
    { company: "Deloitte", period: "2016-2019", role: "Principal" },
    { company: "Accenture", period: "2012-2016", role: "Manager" }
  ];

  return (
    <section id="about" className="py-32 bg-ey-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo section */}
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
              <div className="relative w-full h-[600px] rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/IMG_4613_gashr6.jpg" 
                  alt="Rodrigo Palacios - Mining Technology Expert" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ey-dark/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-ey-medium/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-ey-white font-bold text-lg">Ingeniero Industrial</div>
                    <div className="text-ey-white/80">Especialista en Transformación Digital</div>
                  </div>
                </div>
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
              <div className="text-sm font-semibold">Años Exp.</div>
            </motion.div>
          </motion.div>
          
          {/* Content section */}
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
              <h2 className="text-5xl font-black text-ey-white mb-8">
                Liderazgo Tecnológico 
                <span className="block text-ey-yellow">Estratégico</span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-xl text-ey-white/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ingeniero Industrial con 20+ años liderando transformación digital en sectores mineros y energéticos. 
              Track record comprobado con firmas Big 4 y empresas mineras Tier 1 en Latinoamérica.
            </motion.p>
            
            {/* Skills cards */}
            <div className="space-y-6 mb-12">
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
                  <div className="flex items-start space-x-6 bg-ey-medium rounded-lg p-6 border border-ey-light hover:border-ey-yellow transition-all duration-300">
                    <div className="w-16 h-16 bg-ey-yellow rounded-lg flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-ey-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ey-white mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-ey-white/80 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Career timeline */}
            <motion.div 
              className="bg-ey-dark rounded-3xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/10 to-transparent"></div>
              <div className="relative">
                <h3 className="text-2xl font-black text-ey-yellow mb-8 flex items-center">
                  <Award className="w-6 h-6 mr-3" />
                  Trayectoria Profesional
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-ey-yellow/20 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-ey-yellow rounded-full"></div>
                        <div>
                          <div className="text-ey-white font-bold text-lg">{item.company}</div>
                          <div className="text-ey-white/70">{item.role}</div>
                        </div>
                      </div>
                      <div className="text-ey-yellow font-semibold">{item.period}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}