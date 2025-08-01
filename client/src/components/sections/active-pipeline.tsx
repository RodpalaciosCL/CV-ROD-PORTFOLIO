import { motion, useInView } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Target, X, Building2, Zap, Handshake, Truck, BarChart3 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Individual probability bar component
function ProbabilityBar({ probability, index }) {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          console.log(`Starting animation for bar ${index}`);
          setHasAnimated(true);
          
          // Delay each bar's animation
          const delay = index * 400; // 400ms delay between each bar
          
          setTimeout(() => {
            console.log(`Animating bar ${index} to ${probability}%`);
            setWidth(probability);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [probability, index, hasAnimated]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-ey-white/80 text-sm font-medium">Probabilidad</span>
        <span className="text-ey-yellow font-black text-lg">{probability}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden border border-gray-600">
        <div 
          className="h-full rounded-full transition-all ease-out"
          style={{ 
            width: `${width}%`,
            background: 'linear-gradient(to right, #FFC107, #FFD54F)',
            transitionDuration: '1500ms'
          }}
        />
      </div>
    </div>
  );
}

export default function ActivePipeline() {
  const [showCodelcoModal, setShowCodelcoModal] = useState(false);
  
  const opportunities = [
    {
      company: "Anglo American",
      project: "Implementación Robots de Inspección",
      value: "$6.2M",
      probability: 93,
      stage: "Propuesta Final",
      timeline: "Q3 2025",
      color: "from-blue-500 to-blue-700"
    },
    {
      company: "Antofagasta Minerals",
      project: "Digital Twins & AI Warehouse",
      value: "$3.3M",
      probability: 85,
      stage: "Definición Prueba de Concepto",
      timeline: "Q3 2025",
      color: "from-purple-500 to-purple-700"
    },
    {
      company: "Sierra Gorda",
      project: "Optimización de Procesos IoT",
      value: "$1.8M",
      probability: 80,
      stage: "Fase Piloto",
      timeline: "Q3 2025",
      color: "from-orange-500 to-orange-700"
    },
    {
      company: "BHP Spence",
      project: "Warehouse Inteligente",
      value: "$4.3M",
      probability: 95,
      stage: "Aprobación Piloto",
      timeline: "Q3 2025",
      color: "from-green-500 to-green-700"
    },
    {
      company: "Codelco",
      project: "Sistema de Gestión Obsoletos",
      value: "$130M",
      probability: 95,
      stage: "Cerrando acuerdo primera etapa",
      timeline: "Q3 2025",
      color: "from-red-600 to-red-800"
    },
    {
      company: "Minera San Gerónimo",
      project: "Plataforma Centralización Procesos",
      value: "$2M",
      probability: 96,
      stage: "Acordando Alcance final",
      timeline: "Q3 2025",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      company: "Minera Carola-Coemin",
      project: "Gestión Inteligente Bodegas Externas",
      value: "$4M",
      probability: 80,
      stage: "Acordando fecha piloto",
      timeline: "Q3 2025",
      color: "from-teal-500 to-teal-700"
    }
  ];

  const totalValue = 151.6;
  const totalOpportunities = opportunities.length;
  const averageProbability = Math.round(opportunities.reduce((sum, opp) => sum + opp.probability, 0) / opportunities.length);

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
$151.6M en oportunidades mapeadas para asociación con EY
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
              <div 
                className={`relative bg-ey-white/10 backdrop-blur-xl rounded-2xl p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300 ${
                  opportunity.company === 'Codelco' ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (opportunity.company === 'Codelco') {
                    setShowCodelcoModal(true);
                  }
                }}
              >
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
                    <ProbabilityBar probability={opportunity.probability} index={index} />
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
              Para analizar, enlistar y asegurar!
            </p>
            
            {/* Floating metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div 
                className="bg-ey-dark/60 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrendingUp className="w-8 h-8 text-ey-yellow mx-auto mb-3" />
                <div className="text-2xl font-black text-ey-yellow mb-2">{totalOpportunities}</div>
                <div className="text-ey-white/80 font-medium">Oportunidades Activas</div>
              </motion.div>
              
              <motion.div 
                className="bg-ey-dark/60 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="w-8 h-8 text-ey-yellow mx-auto mb-3" />
                <div className="text-2xl font-black text-ey-yellow mb-2">{averageProbability}%</div>
                <div className="text-ey-white/80 font-medium">Probabilidad Promedio</div>
              </motion.div>
              
              <motion.div 
                className="bg-ey-dark/60 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="w-8 h-8 text-ey-yellow mx-auto mb-3" />
                <div className="text-2xl font-black text-ey-yellow mb-2">Q4 2025 - Q1 2026</div>
                <div className="text-ey-white/80 font-medium">Timeline</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Modal de Codelco - Rediseñado */}
      {showCodelcoModal && (
        <motion.div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCodelcoModal(false)}
        >
          <motion.div 
            className="relative max-w-5xl w-full bg-ey-dark border-2 border-ey-yellow rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-ey-yellow to-ey-yellow/80 p-6 relative">
              <button
                onClick={() => setShowCodelcoModal(false)}
                className="absolute top-4 right-4 bg-ey-black/20 hover:bg-ey-black/40 text-ey-black p-2 rounded-full transition-all duration-200 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white">
                    Codelco - Sistema de Gestión Obsoletos
                  </h3>
                  <p className="text-ey-black/80 font-semibold text-lg">Información Detallada del Proyecto</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              {/* Key Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-ey-medium border border-ey-yellow/30 rounded-xl p-6 text-center">
                  <DollarSign className="w-12 h-12 text-ey-yellow mx-auto mb-3" />
                  <div className="text-3xl font-black text-ey-yellow mb-1">$2B</div>
                  <div className="text-ey-white/80 font-medium">Valor Total Obsoletos</div>
                </div>
                
                <div className="bg-ey-medium border border-ey-yellow/30 rounded-xl p-6 text-center">
                  <BarChart3 className="w-12 h-12 text-ey-yellow mx-auto mb-3" />
                  <div className="text-3xl font-black text-ey-yellow mb-1">$60M+</div>
                  <div className="text-ey-white/80 font-medium">Vendido Año Pasado</div>
                </div>
                
                <div className="bg-ey-medium border border-ey-yellow/30 rounded-xl p-6 text-center">
                  <Target className="w-12 h-12 text-ey-yellow mx-auto mb-3" />
                  <div className="text-2xl font-black text-ey-yellow mb-1">Contrato</div>
                  <div className="text-ey-white/80 font-medium">Adjudicado</div>
                </div>
              </div>
              
              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-ey-medium/80 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-ey-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-ey-white mb-2">Expertise en Codelco</h4>
                      <p className="text-ey-white/90 leading-relaxed">
                        Capacidad única de comprender la fibra de una parte clave del negocio de Codelco
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-ey-medium/80 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-ey-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-ey-white mb-2">Operación Inmediata</h4>
                      <p className="text-ey-white/90 leading-relaxed">
                        Capacidad inmediata de operación con infraestructura y procesos ya establecidos
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-ey-medium/80 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-6 h-6 text-ey-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-ey-white mb-2">Alianzas Estratégicas</h4>
                      <p className="text-ey-white/90 leading-relaxed">
                        Asociación con NCA, la casa de subastas más grande de USA
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-ey-medium/80 backdrop-blur-sm rounded-xl p-6 border border-ey-yellow/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-ey-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-ey-white mb-2">Logística Integrada</h4>
                      <p className="text-ey-white/90 leading-relaxed">
                        Despliegue y logística lista con Ferronor para operaciones a gran escala
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-8 text-center">
                <div className="inline-block bg-gradient-to-r from-ey-yellow/20 to-ey-yellow/10 border border-ey-yellow/30 rounded-xl px-8 py-4">
                  <p className="text-ey-white font-bold text-lg">
                    <span className="text-ey-yellow">Ventaja Competitiva:</span> Track record on/off +24 meses haciendo remates
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
