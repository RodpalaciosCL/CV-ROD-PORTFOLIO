import { motion } from "framer-motion";
import {
  Camera,
  BarChart3,
  Droplets,
  Lightbulb,
  Pickaxe,
  Cog,
  Building2,
  Zap,
  Cpu,
  Settings,
  Users,
  Bot
} from "lucide-react";
import { useLanguage } from '../../contexts/LanguageContext';

export default function Operation() {
  const { t } = useLanguage();
  
  const solutions = [
    {
      icon: Camera,
      name: t('solutions.waihouse.name'),
      tagline: t('solutions.waihouse.tagline'),
      description: t('solutions.waihouse.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/668c1c12e8a58030d5568f21_642d7a5f4d77d19c2f6fa8c2_xzGehktapAgabSW56yhCmigLzY3uCWACMrR6p4lkLfw_owddtl.jpg",
      type: "image"
    },
    {
      icon: BarChart3,
      name: t('solutions.mining360.name'),
      tagline: t('solutions.mining360.tagline'),
      description: t('solutions.mining360.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/Underground_Tracking_pg6jlu.webp",
      type: "image"
    },
    {
      icon: Droplets,
      name: t('solutions.water_control.name'),
      tagline: t('solutions.water_control.tagline'),
      description: t('solutions.water_control.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693432/Captura_de_pantalla_2025-06-23_a_la_s_11.42.11_rw4lpf.png",
      type: "image"
    },
    {
      icon: Lightbulb,
      name: t('solutions.mining_lights.name'),
      tagline: t('solutions.mining_lights.tagline'),
      description: t('solutions.mining_lights.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750694512/Captura_de_pantalla_2025-06-23_a_la_s_12.01.42_dof0qh.png",
      type: "image"
    },
    {
      icon: Pickaxe,
      name: t('solutions.mineral_law.name'),
      tagline: t('solutions.mineral_law.tagline'),
      description: t('solutions.mineral_law.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750690573/ChatGPT_Image_22_jun_2025_15_40_22_lsewla.png",
      type: "image"
    },
    {
      icon: Cog,
      name: t('solutions.rpa_intelligence.name'),
      tagline: t('solutions.rpa_intelligence.tagline'),
      description: t('solutions.rpa_intelligence.description'),
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1750691060/1_gxiukm.mov",
      type: "video"
    },
    {
      icon: Building2,
      name: t('solutions.hotel_commander.name'),
      tagline: t('solutions.hotel_commander.tagline'),
      description: t('solutions.hotel_commander.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620086/reservations_calendar_highquality_mdxwqp.webp",
      type: "image"
    },
    {
      icon: Zap,
      name: t('solutions.neural_operations.name'),
      tagline: t('solutions.neural_operations.tagline'),
      description: t('solutions.neural_operations.description'),
      media: "https://www.youtube.com/embed/BoHxSpEPg4Y?autoplay=1&mute=1&loop=1&playlist=BoHxSpEPg4Y&controls=0&showinfo=0&rel=0&modestbranding=1",
      type: "iframe"
    },
    {
      icon: Cpu,
      name: t('solutions.digital_twins.name'),
      tagline: t('solutions.digital_twins.tagline'),
      description: t('solutions.digital_twins.description'),
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754189788/prevu3d_ezb9kn.mov",
      type: "video"
    },
    {
      icon: Settings,
      name: t('solutions.operational_control.name'),
      tagline: t('solutions.operational_control.tagline'),
      description: t('solutions.operational_control.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1754425940/Captura_de_pantalla_2025-08-05_a_la_s_16.28.43_jfvimn.png",
      type: "image"
    },
    {
      icon: Users,
      name: t('solutions.cio_cfo_service.name'),
      tagline: t('solutions.cio_cfo_service.tagline'),
      description: t('solutions.cio_cfo_service.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1754425961/Captura_de_pantalla_2025-08-05_a_la_s_16.29.07_jxnnu8.png",
      type: "image"
    },
    {
      icon: Bot,
      name: t('solutions.agents.name'),
      tagline: t('solutions.agents.tagline'),
      description: t('solutions.agents.description'),
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1754425987/Captura_de_pantalla_2025-08-05_a_la_s_16.29.14_rhugni.png",
      type: "image"
    }
  ];

  return (
    <div className="w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                className="group relative bg-ey-medium/20 backdrop-blur-sm rounded-xl border border-ey-light/20 hover:border-ey-yellow/30 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Media - Top */}
                <div className="aspect-[4/3] overflow-hidden">
                  {solution.type === "image" ? (
                    <img
                      src={solution.media}
                      alt={solution.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : solution.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    ></iframe>
                  )}
                </div>

                {/* Content - Bottom */}
                <div className="p-4 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-ey-yellow/20 rounded-lg flex items-center justify-center mr-3">
                      <solution.icon className="w-4 h-4 text-ey-yellow" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ey-white group-hover:text-ey-yellow transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-xs text-gray-400">{solution.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-3 line-clamp-2 flex-grow">
                    {solution.description}
                  </p>

                  {/* Ready to deploy badge - Fixed at bottom */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-ey-yellow rounded-full animate-pulse"></div>
                      <span className="text-xs text-ey-yellow font-medium">{t('solutions.ready_to_deploy')}</span>
                    </div>
                    <div className="w-6 h-6 bg-ey-yellow/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-ey-yellow rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
    </div>
  );
}
