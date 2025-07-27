import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Zap, Target, Trophy, Rocket, Gem } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      company: "Glencore",
      title: "Sistema de Gestión de Activos",
      value: "$4M USD",
      team: "15+ profesionales",
      result: "40% eficiencia",
      description: "Transformación digital completa de procesos de gestión de activos",
      gradient: "from-blue-600 to-blue-800",
      iconComponent: Zap
    },
    {
      company: "CODELCO",
      title: "Renegociación de Contratos",
      value: "$50M USD",
      team: "18 meses",
      result: "Reducción mayor",
      description: "Optimización estratégica de contratos entregando ahorros significativos",
      gradient: "from-red-600 to-red-800",
      iconComponent: Target
    },
    {
      company: "PwC",
      title: "Soluciones Mineras Digitales",
      value: "$8M USD",
      team: "25+ especialistas",
      result: "Benchmark",
      description: "Implementación tecnológica estableciendo estándares industriales",
      gradient: "from-orange-500 to-orange-700",
      iconComponent: Trophy
    },
    {
      company: "Deloitte",
      title: "Transformación Energética",
      value: "$6M USD",
      team: "Estrategia y ejecución",
      result: "35% mejora",
      description: "Estrategia digital y ejecución para excelencia operacional",
      gradient: "from-green-600 to-green-800",
      iconComponent: Rocket
    },
    {
      company: "Accenture",
      title: "Analítica Minera",
      value: "$3M USD",
      team: "Analítica de datos",
      result: "Insights en tiempo real",
      description: "Plataforma de analítica avanzada para toma de decisiones en tiempo real",
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
    <section id="projects" className="py-32 bg-ey-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-ey-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-ey-dark rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Logros de Proyectos <span className="text-ey-yellow">Mayores</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Track record comprobado entregando soluciones tecnológicas complejas para empresas mineras Tier 1
          </motion.p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
              <div className="relative bg-ey-medium border border-ey-light rounded-lg p-8 hover:border-ey-yellow transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-ey-yellow rounded-lg mr-4 flex items-center justify-center shadow-lg">
                    <project.iconComponent className="w-8 h-8 text-ey-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-ey-white">{project.company}</h3>
                    <p className="text-ey-white/70 font-medium">{project.title}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-ey-white/70 font-medium flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Valor:
                    </span>
                    <span className="font-black text-ey-yellow text-lg">{project.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ey-white/70 font-medium flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Equipo:
                    </span>
                    <span className="font-semibold text-ey-white">{project.team}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ey-white/70 font-medium flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Resultado:
                    </span>
                    <span className="font-semibold text-ey-yellow">{project.result}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-ey-light pt-4">
                  <p className="text-ey-white/80 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Summary Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative md:col-span-2 lg:col-span-1"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-ey-dark rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center border border-ey-yellow/30">
              <motion.div 
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💎
              </motion.div>
              <div className="text-5xl font-black text-ey-yellow mb-4">$71M+</div>
              <div className="text-ey-white text-xl font-semibold mb-2">Valor Total de Proyectos</div>
              <div className="text-ey-yellow/80 font-medium">Entregado Exitosamente</div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-ey-yellow rounded-full"
                  animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-ey-yellow rounded-full"
                  animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-1/2 left-4 w-1 h-1 bg-ey-yellow rounded-full"
                  animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}