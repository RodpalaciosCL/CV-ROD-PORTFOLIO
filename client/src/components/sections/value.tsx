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
    <section id="value" className="py-32 bg-ey-dark relative overflow-hidden">
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
            className="text-3xl md:text-6xl font-black text-ey-white mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Propuesta de Valor <span className="text-ey-yellow">Única</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed"
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
              <div className="relative bg-ey-medium rounded-lg p-8 text-center border border-ey-light hover:border-ey-yellow transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 bg-ey-yellow rounded-lg flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <prop.icon className="w-10 h-10 text-ey-black" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-black text-ey-white mb-4">
                  {prop.title}
                </h3>
                
                {/* Value */}
                <motion.div 
                  className="text-4xl font-black text-ey-yellow mb-4 flex items-center justify-center min-h-[3rem]"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {prop.value}
                </motion.div>
                
                {/* Description */}
                <p className="text-ey-white/80 leading-relaxed">{prop.description}</p>
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
          {/* Epic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 via-ey-yellow/10 to-transparent rounded-3xl blur-3xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-ey-yellow/5 via-transparent to-ey-yellow/5 rounded-3xl blur-2xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-ey-dark via-ey-medium/30 to-ey-dark rounded-3xl p-16 border-2 border-ey-yellow/40 shadow-2xl backdrop-blur-sm overflow-hidden">
            
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-ey-yellow to-transparent rounded-full"></div>
                <div className="mx-8">
                  <h3 className="text-5xl font-black text-ey-yellow">Ventajas Competitivas</h3>
                </div>
                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-ey-yellow to-transparent rounded-full"></div>
              </div>
              <p className="text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed">
                Capacidad de desarrollar y escalar negocios y relacionamiento activo
              </p>
            </motion.div>
            
            {/* Main Content - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Photo */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/30 to-ey-yellow/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative">
                  <motion.div 
                    className="relative overflow-hidden rounded-3xl border-4 border-ey-yellow/50 shadow-2xl"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src="https://res.cloudinary.com/dhobnlg73/image/upload/v1753742038/IMG_0183_iddtfw.jpg" 
                      alt="Rodrigo en faena minera" 
                      className="w-full h-96 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right Column - Advantages */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {advantages.map((advantage, index) => (
                  <motion.div 
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-ey-white/5 backdrop-blur-sm rounded-2xl p-6 border border-ey-yellow/20 group-hover:border-ey-yellow/50 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-ey-yellow to-yellow-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
                        >
                          <Check className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-ey-white font-bold text-lg leading-relaxed group-hover:text-ey-yellow transition-colors">
                            {advantage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Enhanced Bottom CTA */}
            <motion.div 
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/30 via-ey-yellow/50 to-ey-yellow/30 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-ey-dark via-ey-medium to-ey-dark rounded-3xl px-12 py-8 border-2 border-ey-yellow/60 shadow-2xl">
                  <div className="text-center">
                    <p className="text-3xl text-ey-yellow font-black mb-2">Resultado</p>
                    <p className="text-lg text-ey-white font-semibold leading-relaxed max-w-4xl mx-auto">
                      Partner estratégico integral, con acceso inmediato al mercado LATAM y Global, 
                      <br />
                      y con una mirada disruptiva y atingente de cómo la industria está moviéndose 
                      <br />
                      <span className="text-ey-yellow font-black">y el rol clave que las big consulting firms deben jugar</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}