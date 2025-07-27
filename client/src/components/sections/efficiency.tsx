import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, DollarSign, Calendar, Users, Shield, Target, Zap, CheckCircle, XCircle } from "lucide-react";

export default function Efficiency() {
  const traditionalMetrics = [
    { label: "Tiempo de Contratación", value: "6-12 meses", icon: Clock, negative: true },
    { label: "Costo de Setup", value: "$2-5M", icon: DollarSign, negative: true },
    { label: "Integración de Equipos", value: "12-18 meses", icon: Users, negative: true },
    { label: "Nivel de Riesgo", value: "Alto", icon: XCircle, negative: true },
    { label: "Acceso a Pipeline", value: "$0", icon: Target, negative: true }
  ];

  const partnershipMetrics = [
    { label: "Tiempo de Inicio", value: "Inmediato", icon: Clock, negative: false },
    { label: "Costo de Setup", value: "$0", icon: DollarSign, negative: false },
    { label: "Integración", value: "2-4 semanas", icon: Users, negative: false },
    { label: "Nivel de Riesgo", value: "Mínimo", icon: Shield, negative: false },
    { label: "Acceso a Pipeline", value: "$11.4M", icon: Target, negative: false }
  ];

  const roiMetrics = [
    { value: "3x", label: "Despliegue Más Rápido", sublabel: "vs contratación tradicional" },
    { value: "60%", label: "Reducción de Costos", sublabel: "vs contrataciones separadas" },
    { value: "Inmediato", label: "Acceso a Pipeline", sublabel: "$11.4M oportunidades" }
  ];

  return (
    <section id="efficiency" className="py-32 bg-ey-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-center text-ey-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Análisis de Eficiencia <span className="text-ey-yellow">Asociación</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed"
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
            <div className="relative bg-ey-medium border border-ey-light rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-ey-white">Enfoque Tradicional</h3>
                <p className="text-ey-white/70 font-medium">Múltiples contrataciones independientes</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {traditionalMetrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="bg-ey-light rounded-lg p-4 border border-red-500/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <metric.icon className="w-5 h-5 text-red-400" />
                        <span className="font-semibold text-ey-white">{metric.label}</span>
                      </div>
                      <span className="text-red-400 font-bold">{metric.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center bg-red-500/20 border border-red-500/30 rounded-lg p-6">
                <div className="text-2xl font-black text-red-400 mb-2">Complejo & Costoso</div>
                <p className="text-ey-white/70 font-medium">Múltiples procesos de contratación</p>
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
            <div className="relative bg-ey-medium border border-ey-yellow rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-ey-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-ey-black" />
                </div>
                <h3 className="text-2xl font-black text-ey-white">Modelo de Asociación</h3>
                <p className="text-ey-white/70 font-medium">Solución estratégica integrada</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {partnershipMetrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="bg-ey-light rounded-lg p-4 border border-ey-yellow/30"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <metric.icon className="w-5 h-5 text-ey-yellow" />
                        <span className="font-semibold text-ey-white">{metric.label}</span>
                      </div>
                      <span className="text-ey-yellow font-bold">{metric.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center bg-ey-yellow/20 border border-ey-yellow/30 rounded-lg p-6">
                <div className="text-2xl font-black text-ey-yellow mb-2">Estratégico & Eficiente</div>
                <p className="text-ey-white/70 font-medium">Valor inmediato con resultados comprobados</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* ROI Analysis */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-ey-medium border border-ey-yellow/30 rounded-lg p-12">
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
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-ey-light border border-ey-yellow/30 rounded-lg p-8">
                      <div className="mb-6">
                        {index === 0 && <Zap className="w-12 h-12 text-ey-yellow mx-auto" />}
                        {index === 1 && <DollarSign className="w-12 h-12 text-ey-yellow mx-auto" />}
                        {index === 2 && <Target className="w-12 h-12 text-ey-yellow mx-auto" />}
                      </div>
                      <motion.div 
                        className="text-4xl font-black text-ey-yellow mb-4"
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
                <div className="inline-block bg-ey-yellow rounded-lg px-8 py-4">
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