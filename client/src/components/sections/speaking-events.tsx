import { motion } from "framer-motion";
import { Award, Users, Calendar, MapPin, Mic, Star } from "lucide-react";

export default function SpeakingEvents() {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Cumbre Tecnología Minera",
      description: "Keynote: \"Transformación Digital en Operaciones Mineras\"",
      location: "Santiago, Chile 2024",
      category: "Keynote",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Panel Transformación Energética",
      description: "Experto en Panel: \"Tecnologías Mineras Sostenibles\"",
      location: "Lima, Perú 2024",
      category: "Panel",
      gradient: "from-green-500 to-green-700"
    },
    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Workshop Técnico",
      description: "Capacitación: \"Analítica Avanzada para Minería\"",
      location: "Antofagasta, Chile 2023",
      category: "Workshop",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Reconocimiento Industrial",
      description: "Premio: \"Innovación Digital en Minería\"",
      location: "Santiago, Chile 2023",
      category: "Award",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Networking Ejecutivo",
      description: "Evento: \"Cumbre Líderes Mineros\"",
      location: "São Paulo, Brasil 2024",
      category: "Networking",
      gradient: "from-indigo-500 to-indigo-700"
    },
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Entrevista en Medios",
      description: "Feature: \"Futuro de la Tecnología Minera\"",
      location: "Mining Weekly 2024",
      category: "Media",
      gradient: "from-red-500 to-red-700"
    }
  ];

  const recognitionStats = [
    { value: "15+", label: "Presentaciones", icon: Mic },
    { value: "5", label: "Premios Industriales", icon: Award },
    { value: "500+", label: "Conexiones Profesionales", icon: Users }
  ];

  return (
    <section id="speaking" className="py-32 bg-ey-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-ey-yellow/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-ey-dark/5 rounded-full blur-2xl"
          animate={{ scale: [1.3, 0.7, 1.3], opacity: [0.2, 0.5, 0.2] }}
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
            Liderazgo Industrial & <span className="text-ey-yellow">Reconocimiento</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Liderazgo de pensamiento y presencia profesional en sectores mineros y tecnológicos
          </motion.p>
        </motion.div>
        
        {/* Events Gallery */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${event.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {event.category}
                    </div>
                  </div>
                </div>

                {/* Content overlay */}
                <motion.div 
                  className="absolute inset-0 bg-ey-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center text-ey-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-xl font-black text-ey-yellow mb-3">{event.title}</h3>
                      <p className="mb-4 leading-relaxed">{event.description}</p>
                      <div className="flex items-center justify-center text-ey-yellow/80 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <h3 className="text-ey-white font-bold text-lg mb-1">{event.title}</h3>
                  <div className="flex items-center text-ey-yellow/80 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Recognition Summary */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-ey-dark rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/5 to-transparent"></div>
            <div className="relative">
              {/* Header */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-ey-yellow mr-3" />
                  <h3 className="text-3xl font-black text-ey-yellow">Reconocimiento Industrial</h3>
                  <Star className="w-8 h-8 text-ey-yellow ml-3" />
                </div>
                <p className="text-ey-white/80 text-lg max-w-2xl mx-auto">
                  Presencia establecida como líder de pensamiento en la industria minera y tecnológica
                </p>
              </motion.div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recognitionStats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-ey-white/5 backdrop-blur-sm rounded-2xl p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300">
                      <motion.div 
                        className="w-16 h-16 bg-ey-yellow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <stat.icon className="w-8 h-8 text-ey-black" />
                      </motion.div>
                      <motion.div 
                        className="text-4xl font-black text-ey-yellow mb-3"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 + 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-ey-white font-semibold">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom highlight */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-ey-yellow/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-ey-yellow/30">
                  <p className="text-ey-white font-medium text-lg">
                    <span className="text-ey-yellow font-black">Resultado:</span> Reputación establecida como líder de pensamiento en tecnología minera LATAM
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