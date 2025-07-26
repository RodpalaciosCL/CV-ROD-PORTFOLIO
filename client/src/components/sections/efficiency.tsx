import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Zap, Shield, Target } from "lucide-react";

export default function Efficiency() {
  const traditionalMetrics = [
    { label: "4 Contrataciones Separadas", value: "$600K+/año", icon: DollarSign, negative: true },
    { label: "Cronología de Contratación", value: "8-12 meses", icon: Clock, negative: true },
    { label: "Nivel de Riesgo", value: "Alto", icon: Shield, negative: true },
    { label: "Acceso a Pipeline", value: "$0", icon: Target, negative: true }
  ];

  const partnershipMetrics = [
    { label: "Solución 4-en-1", value: "Flexible", icon: DollarSign, negative: false },
    { label: "Despliegue", value: "Inmediato", icon: Clock, negative: false },
    { label: "Nivel de Riesgo", value: "Mínimo", icon: Shield, negative: false },
    { label: "Acceso a Pipeline", value: "$11.4M", icon: Target, negative: false }
  ];

  const roiMetrics = [
    { value: "3x", label: "Despliegue Más Rápido", sublabel: "vs contratación tradicional", icon: "⚡" },
    { value: "60%", label: "Reducción de Costos", sublabel: "vs contrataciones separadas", icon: "💰" },
    { value: "Inmediato", label: "Acceso a Pipeline", sublabel: "$11.4M oportunidades", icon: "🎯" }
  ];

  return (
    <section id="efficiency" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-40 left-10 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
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
            className="text-5xl md:text-6xl font-black text-ey-dark mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Análisis de Eficiencia <span className="text-ey-yellow">Asociación</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comparación clara de ROI: Asociación vs. Contratación Tradicional
          </motion.p>
        </motion.div>
        
        {/* Main Comparison */}
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
            <div className="relative bg-red-50 border-2 border-red-200 rounded-3xl p-8 hover:border-red-300 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white transform rotate-180" />
                </div>
                <h3 className="text-2xl font-black text-red-800">Enfoque Tradicional</h3>
                <p className="text-red-600 font-medium">Múltiples contrataciones independientes</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {traditionalMetrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-red-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <metric.icon className="w-5 h-5 text-red-500" />
                        <span className="font-semibold text-gray-800">{metric.label}</span>
                      </div>
                      <span className="text-red-600 font-bold">{metric.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center bg-red-100 rounded-2xl p-6">
                <div className="text-3xl font-black text-red-600 mb-2">Complejo & Costoso</div>
                <p className="text-red-700 font-medium">Múltiples procesos de contratación, desafíos de integración</p>
              </div>
            </div>
          </motion.div>
          
          {/* Partnership Model */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-green-50 border-2 border-green-200 rounded-3xl p-8 hover:border-green-300 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-green-800">Modelo de Asociación</h3>
                <p className="text-green-600 font-medium">Solución estratégica integrada</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {partnershipMetrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-green-100"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <metric.icon className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-800">{metric.label}</span>
                      </div>
                      <span className="text-green-600 font-bold">{metric.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center bg-green-100 rounded-2xl p-6">
                <div className="text-3xl font-black text-green-600 mb-2">Estratégico & Eficiente</div>
                <p className="text-green-700 font-medium">Valor inmediato con resultados comprobados</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* ROI Analysis */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-ey-dark rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/10 to-transparent"></div>
            <div className="relative">
              {/* Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-black text-ey-yellow mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 mr-3" />
                  Análisis de ROI
                  <TrendingUp className="w-8 h-8 ml-3" />
                </h3>
                <p className="text-ey-white/80 text-lg">Beneficios cuantificables de la asociación estratégica</p>
              </motion.div>
              
              {/* ROI Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {roiMetrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="group text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-ey-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-ey-white/10 transition-all duration-300 border border-ey-yellow/20 hover:border-ey-yellow/40">
                      <motion.div 
                        className="text-6xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {metric.icon}
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
                      <div className="text-ey-white font-semibold text-lg mb-2">{metric.label}</div>
                      <div className="text-ey-white/70 text-sm">{metric.sublabel}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Summary */}
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-ey-yellow rounded-2xl px-8 py-4">
                  <p className="text-ey-black font-black text-xl">
                    Resultado: Asociación estratégica con ROI inmediato y riesgo mínimo
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}