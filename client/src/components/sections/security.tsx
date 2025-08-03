import { motion } from "framer-motion";
import { Shield, Eye, Zap, Search, MapPin, Cpu } from "lucide-react";

export default function Security() {
  const securityTechnologies = [
    {
      title: "Drones de Inspección",
      subtitle: "Reconocimiento y mapeo avanzado en espacios confinados",
      icon: <Eye className="w-8 h-8" />,
      videoSrc: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185606/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4",
      bullets: [
        "Inspección de túneles y espacios de alto riesgo",
        "Mapeo 3D en tiempo real sin exposición humana",
        "Detección temprana de fallas estructurales",
        "Reducción de 90% en tiempo de evaluación"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Drones de Corrección",
      subtitle: "Intervención precisa y mantenimiento remoto",
      icon: <Zap className="w-8 h-8" />,
      videoSrc: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185484/voliro_homepage_video_hpsjm3.mp4",
      bullets: [
        "Capacidad de maniobra omnidireccional",
        "Corrección de fallas en tiempo real",
        "Mantenimiento preventivo automatizado",
        "Operación en condiciones extremas"
      ],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Tags de Rescate",
      subtitle: "Localización y respuesta de emergencia inteligente",
      icon: <MapPin className="w-8 h-8" />,
      videoSrc: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754191470/Crew_Companion_1.3_ddgusl.mov",
      bullets: [
        "Localización en tiempo real del personal",
        "Alertas automáticas en situaciones de riesgo",
        "Comunicación bidireccional de emergencia",
        "Integración con sistemas de evacuación"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      title: "Digital Twins",
      subtitle: "Simulación y predicción de escenarios de seguridad",
      icon: <Cpu className="w-8 h-8" />,
      videoSrc: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754189788/prevu3d_ezb9kn.mov",
      bullets: [
        "Modelos predictivos de riesgo operacional",
        "Simulación de emergencias y evacuaciones",
        "Optimización de protocolos de seguridad",
        "Análisis de patrones de incidentes"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Tecnología de Visión Anticipada",
      subtitle: "Prevención proactiva mediante análisis predictivo",
      icon: <Search className="w-8 h-8" />,
      videoSrc: null, // Placeholder
      bullets: [
        "Análisis de video en tiempo real con IA",
        "Detección de comportamientos anómalos",
        "Predicción de eventos de riesgo",
        "Alertas automáticas preventivas"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Secure Check & Audit Mining",
      subtitle: "Auditoría y verificación integral de seguridad",
      icon: <Shield className="w-8 h-8" />,
      videoSrc: null, // Placeholder
      bullets: [
        "Auditorías de seguridad automatizadas",
        "Verificación de cumplimiento normativo",
        "Evaluación continua de riesgos operacionales",
        "Reportes de seguridad en tiempo real"
      ],
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <section id="security" className="py-32 bg-ey-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"
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
            className="text-5xl md:text-6xl font-black text-ey-yellow mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            SEGURIDAD
          </motion.h2>
          <motion.p 
            className="text-2xl text-ey-white/80 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Un intransable que debe evolucionar de manera constante
          </motion.p>
        </motion.div>

        {/* Security Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {securityTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 to-ey-yellow/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              
              <div className="relative bg-ey-white/10 backdrop-blur-xl rounded-3xl p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center shadow-lg text-white`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-ey-white group-hover:text-ey-yellow transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-ey-yellow/80 font-medium">{tech.subtitle}</p>
                  </div>
                </div>

                {/* Video or Placeholder */}
                <div className="mb-6 aspect-video rounded-xl overflow-hidden bg-ey-medium border border-ey-yellow/20">
                  {tech.videoSrc ? (
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={tech.videoSrc} type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {tech.icon}
                        </div>
                        <p className="text-ey-white/60 font-medium">Video próximamente</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bullets */}
                <div className="space-y-3">
                  {tech.bullets.map((bullet, bulletIndex) => (
                    <motion.div
                      key={bulletIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * bulletIndex }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-ey-yellow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-ey-white/90 font-medium leading-relaxed">{bullet}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-ey-yellow/30 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-ey-dark via-ey-medium to-ey-dark rounded-3xl px-12 py-8 border-2 border-ey-yellow/60 shadow-2xl">
              <div className="flex items-center justify-center space-x-4">
                <Shield className="w-12 h-12 text-ey-yellow" />
                <div className="text-center">
                  <p className="text-3xl text-ey-yellow font-black mb-2">Seguridad Inteligente</p>
                  <p className="text-lg text-ey-white/80 font-medium">El futuro de la prevención minera</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
