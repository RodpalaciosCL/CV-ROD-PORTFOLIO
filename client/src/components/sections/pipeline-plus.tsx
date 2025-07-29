import { motion } from "framer-motion";
import { Zap, Building, Wifi, Eye, TrendingUp, Users, Calendar, DollarSign, Award } from "lucide-react";

export default function PipelinePlus() {
  const currentProjects = [
    {
      icon: Building,
      title: "Data Centers -\nNorte de Chile",
      description: "Infraestructura crítica para la transformación digital minera",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Baterías y Cargadores Industriales",
      description: "Soluciones energéticas para operaciones 24/7",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Wifi,
      title: "Primera Fibra Oscura del Norte-Centro\nde Chile",
      description: "Conectividad de alta velocidad para el corredor minero",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "Infracciones Computarizadas",
      description: "Sistemas inteligentes de control y monitoreo",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const consortiumProjects = [
    {
      title: "Proyecto Cruces Inteligentes",
      icon: TrendingUp,
      status: "En desarrollo"
    },
    {
      title: "Proyecto Fibra Oscura",
      icon: Wifi,
      status: "Implementación"
    },
    {
      title: "Proyecto Pipeline 1.300kms para IoT",
      icon: Building,
      status: "Planificación"
    },
    {
      title: "Proyecto Infracciones",
      icon: Eye,
      status: "Beta testing"
    }
  ];

  return (
    <section id="pipeline-plus" className="py-32 bg-gradient-to-br from-ey-dark to-ey-medium relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-96 h-96 bg-ey-yellow/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-64 h-64 bg-ey-yellow/10 rounded-full blur-2xl"
          animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-black text-ey-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pipeline<span className="text-ey-yellow">+</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-ey-white/90 font-semibold max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Un antes y un después en la práctica
          </motion.p>
        </motion.div>

        {/* Key Message */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/20 to-ey-yellow/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-ey-dark/80 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-ey-yellow/30">
            <div className="text-center">
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-ey-yellow rounded-2xl mb-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Zap className="w-10 h-10 text-ey-black" />
              </motion.div>
              <p className="text-xl text-ey-white leading-relaxed max-w-5xl mx-auto">
                Hoy soy una <span className="text-ey-yellow font-black">pieza clave</span> en negociaciones que cambiarán radicalmente<br/>
                los ingresos de quienes sean parte de este consorcio transformacional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Current Projects Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-ey-white text-center mb-12">Proyectos Transformacionales Actuales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative bg-ey-medium rounded-2xl p-8 text-center border border-ey-light hover:border-ey-yellow transition-all duration-300 h-full">
                  <motion.div 
                    className="w-16 h-16 bg-ey-yellow rounded-xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <project.icon className="w-8 h-8 text-ey-black" />
                  </motion.div>
                  <h4 className="text-lg font-black text-ey-white mb-4 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-ey-white/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consortium Details */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          {/* Epic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 via-ey-yellow/10 to-transparent rounded-3xl blur-3xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-ey-yellow/5 via-transparent to-ey-yellow/5 rounded-3xl blur-2xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-ey-dark via-ey-medium/30 to-ey-dark rounded-3xl p-8 md:p-16 border-2 border-ey-yellow/40 shadow-2xl backdrop-blur-sm">
            
            {/* Consortium Header with Epic Visual */}
            <div className="text-center mb-20">
              <motion.div 
                className="relative inline-flex items-center justify-center mb-12"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-ey-yellow/30 rounded-full blur-2xl scale-150 animate-pulse"></div>
                <motion.div 
                  className="relative w-32 h-32 bg-gradient-to-br from-ey-yellow to-yellow-400 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Users className="w-16 h-16 text-ey-yellow" />
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ey-white via-ey-yellow to-ey-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Consorcio Estratégico
              </motion.h3>
              
              {/* Enhanced Partners Section */}
              <motion.div 
                className="relative max-w-6xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 via-ey-yellow/20 to-ey-yellow/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-ey-dark/90 backdrop-blur-lg rounded-3xl p-6 md:p-12 border border-ey-yellow/50">
                  <div className="flex items-center justify-center mb-8">
                    <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-ey-yellow to-transparent rounded-full"></div>
                    <span className="mx-6 text-ey-yellow font-black text-lg">ALIANZA TRANSFORMACIONAL</span>
                    <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-ey-yellow to-transparent rounded-full"></div>
                  </div>
                  
                  <p className="text-2xl text-ey-white leading-relaxed text-center">
                    Acuerdo clave con los <span className="text-ey-yellow font-black text-3xl">players</span> más importantes del ecosistema minero:
                  </p>
                  
                  {/* Partners Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {[
                      { name: "ENGIE", type: "Energía & Infraestructura", icon: Zap },
                      { name: "FERRONOR", type: "Logística Ferroviaria", icon: TrendingUp },
                      { name: "Mineras Tier 1", type: "Operaciones Mineras", icon: Building },
                      { name: "AMUNOCHI", type: "Municipalidades Norte", icon: Users },
                      { name: "Partners Tech", type: "Soluciones Digitales", icon: Wifi },
                      { name: "Entidades Gov", type: "Apoyo Institucional", icon: Award }
                    ].map((partner, index) => (
                      <motion.div
                        key={index}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                        <div className="relative bg-ey-medium/80 backdrop-blur-sm rounded-2xl p-6 border border-ey-yellow/30 group-hover:border-ey-yellow/60 transition-all duration-300 text-center">
                          <div className="flex justify-center mb-3">
                            <partner.icon className="w-8 h-8 text-ey-yellow" />
                          </div>
                          <h4 className="text-lg font-black text-ey-white mb-2">{partner.name}</h4>
                          <p className="text-sm text-ey-white/70">{partner.type}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Epic Metrics Section */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h4 className="text-4xl font-black text-ey-white mb-4">Impacto Proyectado</h4>
                <div className="h-1 w-32 bg-gradient-to-r from-ey-yellow to-yellow-400 rounded-full mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: DollarSign, value: "+$1B", label: "Facturación anual desde año 10", color: "from-green-400 to-emerald-500" },
                  { icon: Calendar, value: "Mes 6", label: "Inicio de revenue", color: "from-blue-400 to-cyan-500" },
                  { icon: TrendingUp, value: "4", label: "Proyectos ejecutivos", color: "from-purple-400 to-pink-500" }
                ].map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="group relative"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-ey-dark via-ey-medium/50 to-ey-dark rounded-3xl p-10 text-center border-2 border-ey-yellow/40 group-hover:border-ey-yellow/70 transition-all duration-300 shadow-2xl">
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-br from-ey-yellow to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <metric.icon className="w-10 h-10 text-ey-yellow" />
                      </motion.div>
                      <motion.div 
                        className="text-5xl font-black text-ey-yellow mb-4"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 + 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        {metric.value}
                      </motion.div>
                      <p className="text-ey-white/90 font-semibold leading-relaxed">{metric.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Projects Section */}
            <div>
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-4xl font-black text-ey-white mb-4">Pipeline Ejecutivo</h4>
                <div className="h-1 w-48 bg-gradient-to-r from-ey-yellow to-yellow-400 rounded-full mx-auto mb-8"></div>
                <p className="text-xl text-ey-white/80 max-w-3xl mx-auto">Proyectos en diferentes fases de implementación con impacto transformacional</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {consortiumProjects.map((project, index) => (
                  <motion.div 
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-ey-medium/80 via-ey-dark/50 to-ey-medium/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 border-2 border-ey-yellow/30 group-hover:border-ey-yellow/60 transition-all duration-300 shadow-xl">
                      <div className="flex items-start space-x-6">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-ey-yellow to-yellow-400 rounded-xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <project.icon className="w-8 h-8 text-ey-yellow" />
                        </motion.div>
                        <div className="flex-1">
                          <h5 className="text-xl font-black text-ey-white mb-3 leading-tight">{project.title}</h5>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-ey-yellow rounded-full animate-pulse"></div>
                            <span className="text-ey-yellow font-bold text-lg">{project.status}</span>
                          </div>
                          <div className="mt-4 w-full bg-ey-dark/50 rounded-full h-2">
                            <div className={`h-2 bg-gradient-to-r from-ey-yellow to-yellow-400 rounded-full transition-all duration-1000 ${
                              project.status === 'Implementación' ? 'w-3/4' :
                              project.status === 'En desarrollo' ? 'w-1/2' :
                              project.status === 'Beta testing' ? 'w-5/6' : 'w-1/4'
                            }`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Epic CTA */}
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/30 via-ey-yellow/50 to-ey-yellow/30 rounded-3xl blur-2xl animate-pulse"></div>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1753815264/PROYECTO_CRUCES_AI_V6_ikxvmu.xlsx';
                      link.download = 'PROYECTO_CRUCES_AI_V6.xlsx';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="relative bg-gradient-to-r from-ey-dark via-ey-medium to-ey-dark rounded-3xl px-6 md:px-12 py-6 md:py-8 border-2 border-ey-yellow/60 shadow-2xl hover:border-ey-yellow/80 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-8 h-8 text-ey-yellow" />
                      </motion.div>
                      <p className="text-lg md:text-2xl text-ey-white font-bold text-center">
                        <span className="text-ey-yellow font-black text-3xl">Próximo Nivel:</span>{' '}
                        <br className="md:hidden" />
                        <span className="text-ey-white/90">Revisión Business Case y estado contractual proyectos.</span>
                      </p>
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <TrendingUp className="w-8 h-8 text-ey-yellow" />
                      </motion.div>
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
