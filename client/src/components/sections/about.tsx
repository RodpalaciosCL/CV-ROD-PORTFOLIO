import { Lightbulb, Settings, Zap, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { 
      icon: Lightbulb, 
      title: "Relacionamiento", 
      description: "Amplia red de contactos en la Industria Minera, donde he dedicado tiempo a estar con quienes toman decisiones y en donde estas ocurren.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Settings, 
      title: "Entendimiento", 
      description: "Estos últimos años me he dedicado profundamente a estar en faena, comprender los reales problemas y vivir los dolores con los equipos que ejecutan, adentrándome como nunca en el real día a día de la operación minera compleja.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Zap, 
      title: "Crecimiento", 
      description: "La capacidad de tomar la oportunidad o transformar el problema y entregar TANGIBILIDAD, para generar la necesidade en el cliente desde el minuto cero.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const timeline = [
    { 
      company: "AIrontech", 
      period: "2023-Presente", 
      role: "Managing Director & AI Leader",
      description: "A cargo del PNL, los negocios estratégicos, el relacionamiento con clientes y la práctica de AI y Visión Computacional Minera"
    },
    { 
      company: "Kyndryl", 
      period: "2020-2022", 
      role: "Partner - Líder de Consultoría",
      description: "Líder de la práctica de Consultoría y de la vertical de Minería, para clientes como Codelco, Glencore, Capstone, entre otros."
    },
    { 
      company: "PwC", 
      period: "2019-2020", 
      role: "Senior Director",
      description: "Líder de la vertical de Minería y Ciberseguridad, donde también estuve a cargo del CoE Minero y el Robotics Center"
    },
    { 
      company: "Deloitte", 
      period: "2018-2019", 
      role: "Senior Manager",
      description: "Lideré la Digital Transformation Immersion, Cross Industrias, y también fui Líder de la práctica de Digital en Deloitte, siendo parte del comité global de transformación de la firma."
    },
    { 
      company: "R/GA", 
      period: "2018", 
      role: "Country Manager",
      description: "Lideré el desembarco de la firma más creativa del mundo, en donde tuve que hacer desde la inscripción, hasta la configuración completa del equipo y sus primeros deals locales y regionales."
    },
    { 
      company: "Accenture", 
      period: "2016-2017", 
      role: "Technology Manager & Accenture Digital Leader",
      description: "Lideré el desembarco de Accenture Digital en Chile, trayendo los primeros negocios y siendo artífice de dos grandes contratos para la firma en ese entonces."
    },
    { 
      company: "Múltiples Compañías", 
      period: "2006-2016", 
      role: "Emprendedor & Líder Ejecutivo",
      description: "Creé empresas de nicho, las cuales vendí a grandes grupos, y también lideré empresas de industrias clave, donde gané premios y reconocimientos por haber aumentado el revenue de manera única, entre otras cosas."
    }
  ];

  return (
    <section id="about" className="py-32 bg-ey-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                  className="w-full h-[550px] object-cover rounded-3xl"
                />
                <div className="absolute bottom-6 left-6 bg-ey-dark/90 backdrop-blur-md rounded-xl p-4 border border-ey-yellow/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-ey-yellow rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-ey-white font-bold">Ingeniero Industrial</div>
                      <div className="text-ey-white/80">Especialista en Transformación Digital</div>
                    </div>
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
                      className="py-4 border-b border-ey-yellow/20 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-ey-yellow rounded-full mt-1"></div>
                          <div>
                            <div className="text-ey-white font-bold text-lg">{item.company}</div>
                            <div className="text-ey-white/70 font-medium">{item.role}</div>
                          </div>
                        </div>
                        <div className="text-ey-yellow font-semibold text-sm">{item.period}</div>
                      </div>
                      {item.description && (
                        <div className="ml-7 text-ey-white/80 text-sm leading-relaxed">
                          {item.description}
                        </div>
                      )}
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