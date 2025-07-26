import { motion } from "framer-motion";
import { Zap, Users, Award, Globe, Check, Star } from "lucide-react";

export default function Value() {
  const valueProps = [
    { 
      icon: Zap, 
      title: "Pipeline Inmediato", 
      value: "$11.4M+", 
      description: "Oportunidades activas listas para despliegue",
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      icon: Users, 
      title: "Red Establecida", 
      value: "Tier 1", 
      description: "Relaciones directas con empresas mineras principales",
      gradient: "from-blue-500 to-purple-500"
    },
    { 
      icon: Award, 
      title: "Expertise Comprobado", 
      value: "20+", 
      description: "Años con resultados demostrables",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: Globe, 
      title: "Gateway LATAM", 
      value: "4", 
      description: "Países con acceso al mercado minero",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const advantages = [
    "Capacidad bilingüe (Inglés/Español)",
    "Experiencia minera en terreno",
    "Relaciones C-level en la industria",
    "Track record con Big 4 consulting"
  ];

  return (
    <section id="value" className="py-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-ey-yellow/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-ey-dark/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.4, 0.2] }}
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
            Propuesta de Valor <span className="text-ey-yellow">Única</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ventajas competitivas que hacen esta asociación estratégicamente valiosa para EY
          </motion.p>
        </motion.div>
        
        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 hover:border-ey-yellow/30 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${prop.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <prop.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-black text-ey-dark mb-4 group-hover:text-ey-yellow transition-colors">
                  {prop.title}
                </h3>
                
                {/* Value */}
                <motion.div 
                  className="text-4xl font-black text-ey-yellow mb-4"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {prop.value}
                </motion.div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Competitive Advantages */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/10 to-ey-yellow/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-ey-dark rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/5 to-transparent"></div>
            <div className="relative">
              {/* Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-ey-yellow mr-3" />
                  <h3 className="text-3xl font-black text-ey-yellow">Ventajas Competitivas</h3>
                  <Star className="w-8 h-8 text-ey-yellow ml-3" />
                </div>
              </motion.div>
              
              {/* Advantages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <motion.div 
                    key={index}
                    className="group flex items-center space-x-4 bg-ey-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-ey-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-ey-yellow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Check className="w-6 h-6 text-ey-black" />
                    </motion.div>
                    <span className="text-ey-white font-semibold text-lg group-hover:text-ey-yellow transition-colors">
                      {advantage}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-ey-yellow/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-ey-yellow/30">
                  <p className="text-ey-white font-medium text-lg">
                    <span className="text-ey-yellow font-black">Resultado:</span> Socio estratégico integral con acceso inmediato al mercado LATAM
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