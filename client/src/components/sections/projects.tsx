import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Zap, Target, Trophy, Rocket, Gem, Clock, Mountain } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      company: "Goldfields",
      title: "Puesta en Marcha Mina",
      value: "$21M USD",
      team: "650 personas",
      time: "12 meses",
      result: "Re activación mina",
      description: "Desarrollo de sistemas anti congelantes y término de instalación faena completa",
      gradient: "from-amber-600 to-amber-800",
      iconComponent: Mountain
    },
    {
      company: "Glencore",
      title: "Sistema de Gestión de Activos",
      value: "$8M USD",
      team: "9 personas",
      time: "12 meses",
      result: "90% eficiencia",
      description: "Desarrollo plataforma de control de activos por 20 billones de dólares",
      gradient: "from-blue-600 to-blue-800",
      iconComponent: Zap
    },
    {
      company: "CODELCO",
      title: "Mesa de ayuda AI",
      value: "$50M USD",
      team: "15 personas",
      time: "24 meses",
      result: "97% de eficiencia versus 75% actual",
      description: "Re diseño completo de la plataforma de gestión de incidentes",
      gradient: "from-red-600 to-red-800",
      iconComponent: Target
    },
    {
      company: "PwC",
      title: "Centro de Robótica y CoE Minero Avanzado",
      value: "$20M USD",
      team: "25 personas",
      time: "12 meses",
      result: "Nuevo revenue stream, participación de mercado y amplificación de scope en cuentas actuales",
      description: "Centro especializado de robótica y excelencia operacional minera",
      gradient: "from-orange-500 to-orange-700",
      iconComponent: Trophy
    },
    {
      company: "R/GA",
      title: "Landing Chile y primeros deals regionales",
      value: "$25M USD",
      team: "35 personas",
      time: "13 meses",
      result: "Pipeline robusto en Energía, Minería y Autopistas a nivel regional",
      description: "Establecimiento de operaciones regionales y desarrollo de cartera de clientes",
      gradient: "from-green-600 to-green-800",
      iconComponent: Rocket
    },
    {
      company: "Accenture",
      title: "Desarrollo de la práctica y Digitalización Vertical Minería",
      value: "$12M USD",
      team: "23 personas",
      time: "15 meses",
      result: "Incremento en revenue global del negocio de Chile y la región",
      description: "Creación y desarrollo de práctica vertical especializada en minería",
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
    <section id="projects" className="py-16 bg-ey-dark relative overflow-hidden">
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
            Logros de Proyectos <span className="text-ey-yellow">Mayores</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-ey-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Track record comprobado entregando soluciones tecnológicas complejas para empresas mineras Tier&nbsp;1
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
                      Valor:
                    </span>
                    <span className="font-black text-ey-yellow text-base">{project.value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-ey-white/70 font-medium flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      Tiempo:
                    </span>
                    <span className="font-semibold text-ey-white text-sm">{project.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-ey-white/70 font-medium flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      Equipo:
                    </span>
                    <span className="font-semibold text-ey-white text-sm">{project.team}</span>
                  </div>
                  <div className="flex justify-between items-start min-h-[2rem]">
                    <span className="text-sm text-ey-white/70 font-medium flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Resultado:
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
            En negocios en la industria minería, de energía y Oil&Gas, en los últimos 8 años...
          </p>
        </motion.div>
      </div>
    </section>
  );
}