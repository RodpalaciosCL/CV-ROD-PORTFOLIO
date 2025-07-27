import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Target } from "lucide-react";

export default function ActivePipeline() {
  const opportunities = [
    {
      company: "Anglo American",
      project: "Implementación Digital Twin",
      value: "$2.8M",
      probability: 75,
      stage: "Propuesta Final",
      timeline: "Q1 2025",
      color: "from-blue-500 to-blue-700"
    },
    {
      company: "BHP Spence",
      project: "Mantenimiento Predictivo",
      value: "$1.5M",
      probability: 60,
      stage: "Evaluación Técnica",
      timeline: "Q2 2025",
      color: "from-green-500 to-green-700"
    },
    {
      company: "Antofagasta Minerals",
      project: "Plataforma de Analítica",
      value: "$3.2M",
      probability: 80,
      stage: "Negociación Contrato",
      timeline: "Q1 2025",
      color: "from-purple-500 to-purple-700"
    },
    {
      company: "Sierra Gorda",
      project: "Optimización de Procesos",
      value: "$1.8M",
      probability: 65,
      stage: "Fase Piloto",
      timeline: "Q2 2025",
      color: "from-orange-500 to-orange-700"
    },
    {
      company: "Escondida",
      project: "Sistemas de Automatización",
      value: "$2.1M",
      probability: 70,
      stage: "Revisión Propuesta",
      timeline: "Q1 2025",
      color: "from-red-500 to-red-700"
    }
  ];

  const totalValue = 11.4;

  return (
    <section id="pipeline" className="py-32 bg-ey-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-ey-yellow/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-ey-yellow/10 rounded-full blur-2xl"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
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
            Pipeline de Negocios <span className="text-ey-yellow">Activo</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-ey-yellow/80 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            $11.4M en oportunidades inmediatas listas para asociación con EY
          </motion.p>
        </motion.div>
        
        {/* Pipeline Dashboard */}
        <div className="space-y-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 to-ey-yellow/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-ey-white/10 backdrop-blur-xl rounded-2xl p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  {/* Company & Project */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${opportunity.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-ey-white group-hover:text-ey-yellow transition-colors">
                        {opportunity.company}
                      </h3>
                      <p className="text-ey-yellow/80 font-medium">{opportunity.project}</p>
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="w-5 h-5 text-ey-yellow mr-1" />
                      <span className="text-3xl font-black text-ey-yellow">{opportunity.value}</span>
                    </div>
                    <div className="text-ey-white/70 text-sm font-medium">Valor del Proyecto</div>
                  </div>
                  
                  {/* Probability */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-ey-white/80 text-sm font-medium">Probabilidad</span>
                      <span className="text-ey-yellow font-black text-lg">{opportunity.probability}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-ey-yellow to-yellow-400 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${opportunity.probability}%` }}
                        transition={{ duration: 1.5, delay: 0.3 + 0.1 * index }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  
                  {/* Stage & Timeline */}
                  <div className="text-center">
                    <div className="bg-ey-dark/60 rounded-lg p-3 mb-2">
                      <div className="text-ey-white font-semibold text-sm">{opportunity.stage}</div>
                    </div>
                    <div className="flex items-center justify-center text-ey-yellow/80 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {opportunity.timeline}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pipeline Summary */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-ey-medium border border-ey-yellow rounded-lg p-12 text-center">
            <div className="mb-6">
              <DollarSign className="w-16 h-16 text-ey-yellow mx-auto" />
            </div>
            <h3 className="text-3xl font-black text-ey-white mb-6">Pipeline Activo Total</h3>
            <motion.div 
              className="text-7xl md:text-8xl font-black text-ey-yellow mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              viewport={{ once: true }}
            >
              ${totalValue}M
            </motion.div>
            <p className="text-ey-white text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Listo para despliegue inmediato de asociación con EY
            </p>
            
            {/* Floating metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div 
                className="bg-ey-dark/60 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrendingUp className="w-8 h-8 text-ey-yellow mx-auto mb-3" />
                <div className="text-2xl font-black text-ey-yellow mb-2">5</div>
                <div className="text-ey-white/80 font-medium">Oportunidades Activas</div>
              </motion.div>
              
              <motion.div 
                className="bg-ey-dark/60 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="w-8 h-8 text-ey-yellow mx-auto mb-3" />
                <div className="text-2xl font-black text-ey-yellow mb-2">70%</div>
                <div className="text-ey-white/80 font-medium">Probabilidad Promedio</div>
              </motion.div>
              
              <motion.div 
                className="bg-ey-dark/60 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="w-8 h-8 text-ey-yellow mx-auto mb-3" />
                <div className="text-2xl font-black text-ey-yellow mb-2">Q1-Q2</div>
                <div className="text-ey-white/80 font-medium">2025 Timeline</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}