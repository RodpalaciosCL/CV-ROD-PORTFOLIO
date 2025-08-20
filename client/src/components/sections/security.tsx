import { motion } from "framer-motion";
import { Shield, Eye, Zap, Search, MapPin, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Security() {
  const { t } = useLanguage();
  
  const securityTechnologies = [
    {
      title: "SafeApp",
      subtitle: "Plataforma digital de seguridad minera",
      icon: <Shield className="w-8 h-8" />,
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/banner-blog-10-1024x576_g3buzv.jpg",
      bullets: [
        "Checklist digital", 
        "Registro de incidentes", 
        "Control automático de EPP",
        "Dashboards de seguridad en tiempo real"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Drones de Inspección",
      subtitle: "Reconocimiento y mapeo avanzado en espacios confinados",
      icon: <Eye className="w-8 h-8" />,
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185606/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4",
      bullets: [
        "Inspección de túneles y espacios de alto riesgo",
        "Mapeo 3D en tiempo real sin exposición humana",
        "Detección temprana de fallas estructurales",
        "Reducción de 90% en tiempo de evaluación"
      ],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Drones de Corrección",
      subtitle: "Intervención precisa y mantenimiento remoto",
      icon: <Zap className="w-8 h-8" />,
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185484/voliro_homepage_video_hpsjm3.mp4",
      bullets: [
        "Capacidad de maniobra omnidireccional",
        "Corrección de fallas en tiempo real",
        "Mantenimiento preventivo automatizado",
        "Operación en condiciones extremas"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      title: "RescueAI-Tag",
      subtitle: "Localización y respuesta de emergencia inteligente",
      icon: <MapPin className="w-8 h-8" />,
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754191470/Crew_Companion_1.3_ddgusl.mov",
      bullets: [
        "Localización en tiempo real del personal",
        "Alertas automáticas en situaciones de riesgo",
        "Comunicación bidireccional de emergencia",
        "Integración con sistemas de evacuación"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "All Access",
      subtitle: "Control inteligente de acceso seguro",
      icon: <Shield className="w-8 h-8" />,
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693911/Captura_de_pantalla_2025-06-23_a_la_s_11.51.34_c8xmcy.png",
      bullets: [
        "Control de visitas e internos",
        "Prevención de acoso", 
        "Acceso biométrico",
        "Monitoreo en tiempo real"
      ],
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div className="w-full">

        {/* Security Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {securityTechnologies.map((tech, index) => (
                          <motion.div
                key={index}
                className="group relative bg-ey-medium/20 backdrop-blur-sm rounded-xl border border-ey-light/20 hover:border-ey-yellow/30 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Media - Top */}
                <div className="aspect-[4/3] overflow-hidden">
                  {tech.media.includes('.mp4') || tech.media.includes('.mov') ? (
                    <video 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={tech.media} type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  ) : (
                    <img
                      src={tech.media}
                      alt={tech.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Content - Bottom */}
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mr-3`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ey-white group-hover:text-ey-yellow transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-xs text-gray-400">{tech.subtitle}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-2 mb-3">
                    {tech.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-ey-yellow rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-gray-300 leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  {/* Ready to deploy badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-ey-yellow rounded-full animate-pulse"></div>
                      <span className="text-xs text-ey-yellow font-medium">Ready to Deploy</span>
                    </div>
                    <div className="w-6 h-6 bg-ey-yellow/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-ey-yellow rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}

          {/* Bottom CTA Card*/}
          <motion.div 
            className="relative bg-gradient-to-br from-ey-dark via-ey-medium/30 to-ey-dark rounded-3xl p-8 border-2 border-ey-yellow/40 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
             <div className="absolute inset-0 bg-ey-yellow/10 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg text-white">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ey-white">{t('security.ot.title')}</h3>
                  <p className="text-ey-yellow/80 font-medium">{t('security.ot.subtitle')}</p>
                </div>
              </div>

              {/* Image */}
              <div className="mb-4 aspect-[3/2] rounded-lg overflow-hidden bg-ey-medium border border-ey-yellow/20">
                <img
                  src="https://metalbit.io/_next/static/media/signalshield_prototype_screenshot.7422500f.png"
                  alt="SignalShield Prototype - Seguridad OT"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bullets */}
              <div className="space-y-3">
                {[
                  t('security.ot.bullet1'),
                  t('security.ot.bullet2'), 
                  t('security.ot.bullet3'),
                  t('security.ot.bullet4')
                ].map((bullet, bulletIndex) => (
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
        </div>
    </div>
  );
}
