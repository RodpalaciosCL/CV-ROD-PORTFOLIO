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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch justify-items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                className="group relative h-full w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 to-ey-yellow/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                
                <div className="relative bg-ey-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg text-white">
                      <solution.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-ey-white group-hover:text-ey-yellow transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-ey-yellow/80 font-medium">{solution.tagline}</p>
                    </div>
                  </div>

                  {/* Media (Video or Image) */}
                  <div className="mb-4 aspect-[3/2] rounded-lg overflow-hidden bg-ey-medium border border-ey-yellow/20">
                      {solution.type === "image" ? (
                        <img
                          src={solution.media}
                          alt={solution.name}
                          className="w-full h-full object-cover"
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
                        ></iframe>
                      )}
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-ey-white/80 leading-relaxed text-sm">
                      {solution.description}
                    </p>
                  </div>

                  {/* Ready to deploy badge */}
                  <div className="mt-auto pt-4">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-ey-yellow/20 to-ey-yellow/10 border border-ey-yellow/30 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-2 h-2 bg-ey-yellow rounded-full animate-pulse"></div>
                      <span className="text-ey-yellow font-bold text-sm">{t('solutions.ready_to_deploy')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
    </div>
  );
}
