import { Check, X, Clock, DollarSign, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function OptimalSolution() {
  const traditionalRoles = [
    { title: "Experto en Industria Minera", cost: "$180K+", risk: "Alto" },
    { title: "Líder de Transformación Digital", cost: "$160K+", risk: "Alto" },
    { title: "Gerente de Desarrollo de Negocios", cost: "$140K+", risk: "Alto" },
    { title: "Especialista en Latinoamérica", cost: "$120K+", risk: "Alto" }
  ];

  const solutionBenefits = [
    { icon: TrendingUp, title: "20+ Años Experiencia Minera", verified: true },
    { icon: Users, title: "Liderazgo Digital Comprobado", verified: true },
    { icon: DollarSign, title: "Pipeline Activo $11.4M+", verified: true },
    { icon: Clock, title: "Acceso Inmediato LATAM", verified: true }
  ];

  const comparisonMetrics = [
    { metric: "Tiempo de Despliegue", traditional: "8-12 meses", solution: "Inmediato", iconComponent: Clock },
    { metric: "Nivel de Riesgo", traditional: "Alto", solution: "Comprobado", iconComponent: Check },
    { metric: "Pipeline Activo", traditional: "$0", solution: "$11.4M", iconComponent: DollarSign }
  ];

  return (
    <section id="optimal" className="py-32 relative overflow-hidden bg-ey-dark">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20"></div>
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-ey-yellow/5 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 bg-ey-yellow/10 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
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
            La Solución <span className="text-ey-yellow">Óptima</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-ey-yellow/80 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ¿Por qué contratar 4 perfiles separados cuando puedes tener un socio estratégico 4-en-1 comprobado?
          </motion.p>
        </motion.div>
        
        {/* Main comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Traditional Approach */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-red-950/80 backdrop-blur-xl rounded-3xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                  <X className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-red-300">Desafío de EY</h3>
                  <p className="text-red-200/80">Búsqueda de 4 perfiles separados</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {traditionalRoles.map((role, index) => (
                  <motion.div 
                    key={index}
                    className="bg-red-900/40 border border-red-500/40 rounded-xl p-4 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-red-100 font-semibold">{role.title}</span>
                      <div className="text-right">
                        <div className="text-red-400 font-bold">{role.cost}</div>
                        <div className="text-red-300 text-sm">{role.risk}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="border-t border-red-500/30 pt-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-red-100 font-bold">Costo Anual Total:</span>
                  <span className="text-red-400 font-black text-3xl">$600K+</span>
                </div>
                <div className="text-red-300 text-sm mt-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  + 8-12 meses tiempo de contratación
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Solution */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-ey-dark/90 backdrop-blur-xl rounded-3xl p-8 border border-ey-yellow/40 hover:border-ey-yellow/60 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-ey-yellow rounded-2xl flex items-center justify-center mr-4">
                  <Check className="w-8 h-8 text-ey-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ey-yellow">La Solución</h3>
                  <p className="text-ey-white/80">Socio Estratégico 4-en-1</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {solutionBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="bg-emerald-900/40 border border-emerald-500/40 rounded-xl p-4 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-emerald-100 font-semibold flex-1">{benefit.title}</span>
                      <Check className="w-6 h-6 text-emerald-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="border-t border-ey-yellow/30 pt-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-ey-white font-bold">Modelo de Sociedad:</span>
                  <span className="text-ey-yellow font-black text-3xl">Flexible</span>
                </div>
                <div className="text-ey-yellow text-sm mt-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Acceso inmediato + resultados comprobados
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Comparison Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {comparisonMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative bg-ey-medium backdrop-blur-xl rounded-lg p-8 border border-ey-light hover:border-ey-yellow transition-all duration-300 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-ey-yellow rounded-full mb-4 mx-auto">
                  <metric.iconComponent className="w-6 h-6 text-ey-black" />
                </div>
                <h4 className="text-ey-white font-bold text-lg mb-4">{metric.metric}</h4>
                <div className="space-y-3">
                  <div className="text-red-400 font-semibold">{metric.traditional}</div>
                  <div className="text-ey-white/60 text-sm">vs</div>
                  <div className="text-ey-yellow font-bold text-xl">{metric.solution}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}