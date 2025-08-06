import { motion } from "framer-motion";
import { Zap, Building, Wifi, Eye, TrendingUp, Users, Calendar, DollarSign, Award, Briefcase, CheckCircle, Clock } from "lucide-react";

const projects = [
  { 
    icon: Building, 
    name: "Data Centers", 
    desc: "Infraestructura crítica para la transformación digital.",
    color: "text-blue-400"
  },
  { 
    icon: Zap, 
    name: "Baterías y Cargadores", 
    desc: "Soluciones energéticas para operaciones 24/7.",
    color: "text-green-400"
  },
  { 
    icon: Wifi, 
    name: "Fibra Oscura", 
    desc: "Conectividad de alta velocidad para el corredor minero.",
    color: "text-purple-400"
  },
  { 
    icon: Eye, 
    name: "Infracciones IA", 
    desc: "Sistemas inteligentes de control y monitoreo.",
    color: "text-orange-400"
  },
];

const partners = [
  { name: "ENGIE", role: "Energía & Infraestructura", icon: Zap },
  { name: "FERRONOR", role: "Logística Ferroviaria", icon: TrendingUp },
  { name: "Mineras Tier 1", role: "Operaciones Mineras", icon: Building },
  { name: "AMUNOCHI", role: "Municipalidades Norte", icon: Users },
  { name: "Partners Tech", role: "Soluciones Digitales", icon: Wifi },
  { name: "Entidades Gov", role: "Apoyo Institucional", icon: Award },
];

const pipelineStatus = [
    { name: "Cruces Inteligentes", status: "En desarrollo", icon: TrendingUp, progress: "50%" },
    { name: "Fibra Oscura", status: "Implementación", icon: Wifi, progress: "75%" },
    { name: "Pipeline IoT 1.300km", status: "Planificación", icon: Building, progress: "25%" },
    { name: "Infracciones IA", status: "Beta Testing", icon: Eye, progress: "90%" },
];

export default function PipelinePlus() {
  return (
    <section id="pipeline-plus" className="py-12 bg-ey-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Proyectos Trascendentales</h2>
          <p className="text-lg md:text-xl text-ey-white/80 max-w-3xl mx-auto">
            Negocios que <span className="text-ey-yellow font-bold">cambian el rumbo del negocio</span>, para siempre.
          </p>
        </motion.div>

        {/* Main Container */}
        <motion.div 
          className="bg-gradient-to-br from-ey-medium/20 to-ey-dark/30 backdrop-blur-lg rounded-2xl p-3 md:p-4 border-2 border-ey-yellow/30 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">

            {/* --- COLUMNA IZQUIERDA (2/5) --- */}
            <div className="lg:col-span-2">
              
              {/* Diseño Principal - Ferronor */}
              <div className="bg-gradient-to-br from-ey-dark/40 to-ey-dark/20 p-4 rounded-xl border-2 border-ey-yellow/40 shadow-xl h-full flex flex-col">
                
                {/* Header Principal */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-ey-yellow rounded-full"></div>
                    <h3 className="text-lg font-black text-ey-yellow">FERRONOR</h3>
                  </div>
                  <p className="text-xs text-ey-white/70">Infraestructura estratégica del norte de Chile</p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center bg-ey-dark/60 p-2 rounded-lg border border-ey-yellow/20">
                    <p className="text-xl font-black text-white">1.300</p>
                    <p className="text-[10px] text-ey-white/70 uppercase">km vía</p>
                  </div>
                  <div className="text-center bg-ey-dark/60 p-2 rounded-lg border border-ey-yellow/20">
                    <p className="text-xl font-black text-white">400</p>
                    <p className="text-[10px] text-ey-white/70 uppercase">estaciones</p>
                  </div>
                  <div className="text-center bg-ey-dark/60 p-2 rounded-lg border border-ey-yellow/20">
                    <p className="text-xl font-black text-white">600+</p>
                    <p className="text-[10px] text-ey-white/70 uppercase">cruces</p>
                  </div>
                </div>
                
                {/* Proyectos */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-blue-400 mb-2">Proyectos Clave</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {projects.map((p, index) => (
                      <div key={p.name} className="bg-ey-dark/60 p-2 rounded-lg border border-blue-400/20 flex items-center space-x-1">
                        <p.icon className={`w-3 h-3 ${p.color} flex-shrink-0`} />
                        <p className="font-semibold text-[10px] text-white">{p.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Impacto Bottom */}
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-3 rounded-lg border border-green-400/30">
                    <h4 className="text-sm font-bold text-green-400 mb-2 text-center">Impacto</h4>
                    <div className="flex justify-between text-center">
                      <div>
                        <p className="text-lg font-black text-green-400">+$1B</p>
                        <p className="text-[9px] text-ey-white/70">Año 10</p>
                      </div>
                      <div>
                        <p className="text-lg font-black text-blue-400">6M</p>
                        <p className="text-[9px] text-ey-white/70">Revenue</p>
                      </div>
                      <div>
                        <p className="text-lg font-black text-purple-400">4</p>
                        <p className="text-[9px] text-ey-white/70">Proyectos</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>

            {/* --- COLUMNA DERECHA (3/5) --- */}
            <div className="lg:col-span-3 flex flex-col space-y-3">

              {/* Pipeline Ejecutivo */}
              <div className="bg-ey-dark/40 p-4 rounded-xl border border-ey-light/20">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-ey-yellow rounded-full"></div>
                  <h3 className="text-lg font-bold text-ey-yellow">Pipeline Ejecutivo</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pipelineStatus.map((item, index) => (
                    <div key={item.name} className="bg-ey-dark/60 p-3 rounded-lg border border-ey-light/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <item.icon className="w-4 h-4 text-ey-yellow" />
                        <p className="text-sm font-bold text-white">{item.name}</p>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-ey-white/70">Progreso</span>
                        <span className="text-xs font-bold text-ey-yellow bg-ey-yellow/20 px-2 py-1 rounded-full">{item.status}</span>
                      </div>
                      <div className="h-2 bg-ey-dark/70 rounded-full"> 
                        <motion.div 
                          className="h-2 bg-gradient-to-r from-ey-yellow to-yellow-400 rounded-full" 
                          initial={{ width: 0 }} 
                          whileInView={{ width: item.progress }} 
                          transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }} 
                          viewport={{ once: true }} 
                        /> 
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consorcio Estratégico */}
              <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-4 rounded-xl border border-purple-400/30">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <h3 className="text-lg font-bold text-purple-400">Consorcio Estratégico</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {partners.map((partner, index) => (
                    <div key={partner.name} className="bg-ey-dark/60 p-3 rounded-lg border border-purple-400/20 text-center hover:bg-ey-dark/80 transition-all duration-300">
                      <partner.icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                      <p className="font-bold text-xs text-white mb-1">{partner.name}</p>
                      <p className="text-[10px] text-ey-white/60">{partner.role}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
