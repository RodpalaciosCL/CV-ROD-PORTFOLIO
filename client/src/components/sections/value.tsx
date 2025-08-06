import { motion } from "framer-motion";
import { Zap, Users, Award, Globe, Check, Star } from "lucide-react";

export default function Value() {
  const valueProps = [
    { 
      icon: Zap, 
      title: "Pipeline Pre Commit",
      value: "$150M+", 
      description: "Oportunidades activas con alto grado de cierre",
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
      title: "Ecosystem As a Service", 
      value: "1000+", 
      description: "Partners con capacidades específicas",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: Globe, 
      title: "Gateway LATAM", 
      value: "4+", 
      description: "Para expansión regional",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const advantages = [
    "Capacidad de desarrollar y escalar negocios y relacionamiento activo",
    "Experiencia minera en terreno y para assets críticos de la operación",
    "Alta capacidad de gestionar equipos ágiles, sostenibles y equitativos",
    "Track record con Big 4 consulting y grandes empresas de tecnología mundiales"
  ];

  return (
    <section id="value" className="py-16 bg-ey-dark relative overflow-hidden">
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
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-black text-ey-white mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Propuesta de Valor <span className="text-ey-yellow">Única</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-ey-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ventajas competitivas que hacen esta asociación estratégicamente valiosa para EY
          </motion.p>
        </motion.div>
        
        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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
              <div className="relative bg-ey-medium rounded-lg p-6 text-center border border-ey-light hover:border-ey-yellow transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-ey-yellow rounded-lg flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <prop.icon className="w-8 h-8 text-ey-black" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-lg font-black text-ey-white mb-3">
                  {prop.title}
                </h3>
                
                {/* Value */}
                <motion.div 
                  className="text-3xl font-black text-ey-yellow mb-3 flex items-center justify-center min-h-[2.5rem]"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {prop.value}
                </motion.div>
                
                {/* Description */}
                <p className="text-sm text-ey-white/80 leading-relaxed">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}