import { motion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  Shield,
  Camera,
  BarChart3,
  Monitor,
  Droplets,
  Lightbulb,
  Zap,
  Cog,
  Activity,
  Pickaxe,
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function PlugAndPlaySolutions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const solutions = [
    {
      icon: Building2,
      name: "HotelCommander",
      tagline: "Gestión hotelera integral de campamentos mineros",
      description: "Check-in digital, control de contratistas y dashboards de ocupación en tiempo real",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620086/reservations_calendar_highquality_mdxwqp.webp",
      type: "image"
    },
    {
      icon: Shield,
      name: "SafeApp",
      tagline: "Plataforma digital de seguridad minera",
      description: "Checklist digital, registro de incidentes y control automático de EPP",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/banner-blog-10-1024x576_g3buzv.jpg",
      type: "image"
    },
    {
      icon: Camera,
      name: "WAIhouse",
      tagline: "Automatización de bodegas con IA",
      description: "Inventarios automáticos por visión computacional e integración ERP",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/668c1c12e8a58030d5568f21_642d7a5f4d77d19c2f6fa8c2_xzGehktapAgabSW56yhCmigLzY3uCWACMrR6p4lkLfw_owddtl.jpg",
      type: "image"
    },
    {
      icon: BarChart3,
      name: "Mining360",
      tagline: "Dashboard centralizado de KPIs mineros",
      description: "Control en tiempo real de procesos operativos e insights basados en Big Data",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/Underground_Tracking_pg6jlu.webp",
      type: "image"
    },
    {
      icon: Droplets,
      name: "Control Hídrico de Faena",
      tagline: "Sistema Inteligente para control de flujo y consumo",
      description: "Monitoreo y gestión automatizada del recurso hídrico con optimización predictiva",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693432/Captura_de_pantalla_2025-06-23_a_la_s_11.42.11_rw4lpf.png",
      type: "image"
    },
    {
      icon: Lightbulb,
      name: "Mining Lights",
      tagline: "Sistema inteligente de control eficiente energético",
      description: "Sistema automatizado de gestión lumínica con mantenimiento predictivo y eficiencia energética",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750694512/Captura_de_pantalla_2025-06-23_a_la_s_12.01.42_dof0qh.png",
      type: "image"
    },
    {
      icon: Droplets,
      name: "Secure & Secure",
      tagline: "Acceso seguro",
      description: "Control visitas e internos. Prevención acoso",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693911/Captura_de_pantalla_2025-06-23_a_la_s_11.51.34_c8xmcy.png",
      type: "image"
    },
    {
      icon: Shield,
      name: "Accesspress",
      tagline: "Control inteligente de acceso seguro",
      description: "Sistema integral de control de accesos y gestión de personal con identificación biométrica",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750694512/Captura_de_pantalla_2025-06-23_a_la_s_12.01.42_dof0qh.png",
      type: "image"
    },
    {
      icon: Pickaxe,
      name: "Ley del Mineral IA",
      tagline: "Identificación inteligente en tiempo real",
      description: "IA para detectar ley mineral, optimizar palas de extracción y maximizar valor por tonelada",
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750690573/ChatGPT_Image_22_jun_2025_15_40_22_lsewla.png",
      type: "image"
    },
    {
      icon: Activity,
      name: "Predictive Maintenance",
      tagline: "Monitoreo vibraciones y desgaste predictivo",
      description: "Alertas preventivas para molinos SAG, correas y equipos críticos usando sensores IoT + IA",
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1750691069/3_msvtot.mov",
      type: "video"
    },
    {
      icon: Cog,
      name: "RPA Intelligence",
      tagline: "Automatización predictiva de procesos",
      description: "Workflows automáticos que predicen fallas y ejecutan acciones preventivas sin intervención humana",
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1750691060/1_gxiukm.mov",
      type: "video"
    },
    {
      icon: Zap,
      name: "Neural Operations",
      tagline: "Centro de comando inteligente unificado",
      description: "Operación remota centralizada con IA para eficiencia energética y control predictivo total",
      media: "https://www.youtube.com/embed/BoHxSpEPg4Y?autoplay=1&mute=1&loop=1&playlist=BoHxSpEPg4Y&controls=0&showinfo=0&rel=0&modestbranding=1",
      type: "iframe"
    }
  ];

  return (
    <section
      id="plug-and-play-solutions"
      className="py-16 bg-[var(--dark-bg)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[var(--accent-orange)] font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Soluciones Plug & Play
          </motion.h2>
          <motion.p
            className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Portfolio de Productos & Servicio de demanda crítica
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-gray-700 rounded-full h-6 flex items-center px-4">
                        <span className="text-gray-400 text-xs font-mono">
                          {solution.name.toLowerCase().replace(/\s+/g, '')}.airontech.com
                        </span>
                      </div>
                    </div>

                    <div
                      className="bg-white rounded-lg aspect-video relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => {
                        if (solution.type === "image" || solution.type === "video") {
                          setSelectedImage(solution.media);
                        }
                      }}
                    >
                      {solution.type === "image" ? (
                        <img
                          src={solution.media}
                          alt={solution.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : solution.type === "video" ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={solution.media} type="video/mp4" />
                        </video>
                      ) : (
                        <iframe
                          src={solution.media}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-montserrat">
                    {solution.name}
                  </h3>
                  <p className="text-[var(--accent-orange)] font-medium mb-3 text-base">
                    {solution.tagline}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4 max-w-sm mx-auto text-sm">
                    {solution.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-ey-yellow/20 to-ey-yellow/10 border border-ey-yellow/30 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-2 h-2 bg-ey-yellow rounded-full animate-pulse"></div>
                    <span className="text-ey-yellow font-bold text-sm">Ready to Deploy</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
            >
              <X size={20} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Vista detallada"
                className="w-full h-full object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
