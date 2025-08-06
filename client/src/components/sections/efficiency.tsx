import { motion } from "framer-motion";
import { Star, Rocket, Target, Users, Heart, Zap, TrendingUp, Globe, Shield, X, DollarSign, TrendingDown, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Efficiency() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const motivations = [
    {
      icon: Heart,
      title: "Respeto por EY",
      description: "Track récord, perfiles, relacionamiento y presencia",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Momento Espectacular",
      description: "Desafiar la industria en uno de los momentos más transformadores de la historia",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Hora de desafiar",
      description: "Traer revenues no explorados sin descuidar el as-is que ha llevado a EY al éxito",
      gradient: "from-ey-yellow to-orange-500"
    }
  ];
  
  const valueProps = [
    {
      icon: Users,
      title: "Optimización de Búsquedas",
      description: "Acelerar y optimizar los procesos actuales de reclutamiento especializado",
      benefit: "Eficiencia Inmediata"
    },
    {
      icon: Globe,
      title: "Acceso LATAM Comprobado",
      description: "Pipeline activo de $150M+ y relaciones tier-1 establecidas",
      benefit: "Revenue Inmediato"
    },
    {
      icon: Zap,
      title: "Capacidades Complementarias",
      description: "20+ años en minería con liderazgo transformacional comprobado",
      benefit: "Sinergia Estratégica"
    }
  ];

  return (
    <section id="efficiency" className="py-32 bg-ey-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
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
            ¿Por Qué Quiero Ser Parte de <span className="text-ey-yellow">EY</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-white/80 max-w-5xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Firma líder, Equipo de Liderazgo Excepcional, y el momento perfecto para desafiar la industria
          </motion.p>
          <motion.div
            className="inline-block bg-gradient-to-r from-ey-yellow/20 to-ey-yellow/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-ey-yellow/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-ey-yellow font-bold text-lg">
              ¿Yo?
            </p>
          </motion.div>
          <motion.div
            className="inline-block bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-red-500/30 mt-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-red-400 font-bold text-lg">
              Un Agente de cambio con hambre de comerse la industria, de verdad.
            </p>
          </motion.div>
        </motion.div>

        {/* Motivations Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {motivations.map((motivation, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative bg-gradient-to-br from-ey-dark via-ey-medium/30 to-ey-dark rounded-2xl p-8 border-2 border-ey-yellow/30 shadow-xl backdrop-blur-sm overflow-hidden group-hover:border-ey-yellow/60 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/5 via-ey-yellow/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${motivation.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <motivation.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-black text-ey-white mb-4 group-hover:text-ey-yellow transition-colors duration-300">
                    {motivation.title}
                  </h3>
                  
                  <p className="text-ey-white/80 leading-relaxed">
                    {motivation.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Final CTA */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-ey-dark via-ey-medium/40 to-ey-dark rounded-3xl p-16 border-2 border-ey-yellow/50 shadow-2xl backdrop-blur-sm overflow-hidden">
            {/* Epic Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/15 via-ey-yellow/5 to-transparent rounded-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-ey-yellow/10 via-transparent to-ey-yellow/10 rounded-3xl blur-2xl animate-pulse"></div>
            
            <div className="relative text-center">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h3 className="text-4xl md:text-5xl font-black text-ey-white text-center">
                    Un Momento Único en la 
                    <span className="text-ey-yellow block mt-2">Historia de la Minería</span>
                  </h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="max-w-6xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl text-ey-white leading-relaxed">
                  Estamos en un punto de inflexión donde la tecnología, sostenibilidad y <br />
                  eficiencia operacional convergen para redefinir completamente la industria.
                </p>
                
                {/* Cool Formula Section */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-ey-yellow/10 via-ey-yellow/20 to-ey-yellow/10 rounded-3xl p-8 border-2 border-ey-yellow/30 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
                      {/* Component 1 */}
                      <motion.div 
                        className="bg-ey-medium/50 rounded-2xl p-4 border border-ey-yellow/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Users className="w-8 h-8 text-ey-yellow mx-auto mb-2" />
                        <p className="text-ey-white font-bold text-sm leading-tight">
                          Relacionamiento
                        </p>
                      </motion.div>
                      
                      {/* Plus */}
                      <div className="text-ey-yellow text-3xl font-black">+</div>
                      
                      {/* Component 2 */}
                      <motion.div 
                        className="bg-ey-medium/50 rounded-2xl p-4 border border-ey-yellow/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Target className="w-8 h-8 text-ey-yellow mx-auto mb-2" />
                        <p className="text-ey-white font-bold text-sm leading-tight">
                          Entendimiento
                        </p>
                      </motion.div>
                      
                      {/* Plus */}
                      <div className="text-ey-yellow text-3xl font-black">+</div>
                      
                      {/* Component 3 */}
                      <motion.div 
                        className="bg-ey-medium/50 rounded-2xl p-4 border border-ey-yellow/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Zap className="w-8 h-8 text-ey-yellow mx-auto mb-2" />
                        <p className="text-ey-white font-bold text-sm leading-tight">
                          Capacidad de entrega y visualización temprana
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Equals */}
                    <div className="text-center my-6">
                      <div className="text-ey-yellow text-4xl font-black">=</div>
                    </div>
                    
                    {/* Result */}
                    <motion.div 
                      className="bg-gradient-to-r from-ey-yellow/20 to-orange-500/20 rounded-2xl p-6 border-2 border-ey-yellow/50 text-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <TrendingUp className="w-6 h-6 text-ey-yellow mr-2" />
                        <p className="text-ey-yellow font-black text-xl">
                          Crecimiento sostenido de la práctica
                        </p>
                        <TrendingUp className="w-6 h-6 text-ey-yellow ml-2" />
                      </div>
                      <p className="text-ey-white font-semibold text-lg">
                        y amplificación de la cuota de consulting para la compañía
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Statement Section */}
              <motion.div 
                className="mt-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-ey-medium/60 via-ey-dark/80 to-ey-medium/60 rounded-3xl p-8 border-2 border-ey-yellow/40 backdrop-blur-sm">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-black text-ey-yellow mb-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Statement
                  </motion.h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Tengo */}
                    <motion.div 
                      className="bg-ey-white/5 rounded-2xl p-6 border border-ey-yellow/20"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-black text-ey-yellow mb-3 flex items-center">
                        <Users className="w-6 h-6 mr-2" />
                        Tengo
                      </h4>
                      <p className="text-ey-white/90 text-base leading-relaxed">
                        La capacidad de liderar equipos, visualizar talentos de manera temprana y potenciar el sentido de pertenencia y propósito, junto con hacer del trabajo un lugar cálido, desafiante y sumamente interesante, donde el ánimo por darlo sea una constante, y los beneficios por hacerlo sean el premio de esta colaboración en conjunto.
                      </p>
                    </motion.div>
                    
                    {/* Soy */}
                    <motion.div 
                      className="bg-ey-white/5 rounded-2xl p-6 border border-ey-yellow/20"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-black text-ey-yellow mb-3 flex items-center">
                        <Star className="w-6 h-6 mr-2" />
                        Soy
                      </h4>
                      <p className="text-ey-white/90 text-base leading-relaxed">
                        Un fiel embajador de los beneficios y oportunidades de trabajar en una big four, y una compañía como EY, que muchas veces quienes lo viven "desde siempre" no le toman el valor, pero la red, la documentación y cantidad de assets que se tiene al alcance y el nivel de aprendizaje y estímulos que se vienen a diario, son sólo comparables con estar cursando en MBA constante, y de la más alta calidad de contenido.
                      </p>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Quiero */}
                    <motion.div 
                      className="bg-ey-white/5 rounded-2xl p-6 border border-ey-yellow/20"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-black text-ey-yellow mb-3 flex items-center">
                        <Target className="w-6 h-6 mr-2" />
                        Quiero
                      </h4>
                      <p className="text-ey-white/90 text-base leading-relaxed">
                        Conectarme con un equipo con hambre y ganas de ser líderes, y a su vez referentes, pero de esos que hablan sobre sus logros, aportes y calidad de entregables. Quiero ser "Pioneer y no "Follower", y que la industria nos valide por nuestros actos, y no los compromisos o promesas sin cumplir, y por último, quiero aportar a que la firma sea el referente cuando alguien piense en buscar, llamar o seleccionar un partner para acompañarlos en momentos complejos, decisivos, trascendentales y decidores.
                      </p>
                    </motion.div>
                    
                    {/* Puedo */}
                    <motion.div 
                      className="bg-ey-white/5 rounded-2xl p-6 border border-ey-yellow/20"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-black text-ey-yellow mb-3 flex items-center">
                        <Zap className="w-6 h-6 mr-2" />
                        Puedo
                      </h4>
                      <p className="text-ey-white/90 text-base leading-relaxed">
                        Aportar valor, frescura, una mirada altamente enfocada en el "negocio inteligente", como también una capacidad de articulación, seguimiento y cierre única, la cual debiese marcar un precedente en mediano plazo, junto con la forma en cómo abordar oportunidades, transformar problemáticas e identificar posibilidades no sólo para la práctica, sino también para el resto de la compañía, junto con ser un agente de cambio y evangelizador nato del trabajo en equipo, la colaboración como mantra y el respeto hacia lo que hacemos y el cómo lo ofrecemos.
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Espero - Full width at bottom */}
                  <motion.div 
                    className="bg-gradient-to-r from-ey-yellow/10 via-ey-yellow/20 to-ey-yellow/10 rounded-2xl p-6 border-2 border-ey-yellow/30 mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-black text-ey-yellow mb-3 flex items-center justify-center">
                      <Heart className="w-6 h-6 mr-2" />
                      Espero
                    </h4>
                    <p className="text-ey-white/90 text-base leading-relaxed text-center">
                      Poder demostrarles mi gran capacidad de gestión, relacionamiento, visualización y aseguramiento, para lograr la escalabilidad de una práctica sostenible en el tiempo y altamente rentable como negocio.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-ey-yellow to-orange-500 rounded-2xl px-12 py-6 shadow-2xl">
                  <Rocket className="w-10 h-10 text-white" />
                  <div className="text-center">
                    <p className="text-white font-black text-2xl mb-1">
                      Ready to disrupt together?
                    </p>
                    <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                  </div>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Modal for full image view */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="relative max-w-full max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Perfiles profesionales que EY busca integrar" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
