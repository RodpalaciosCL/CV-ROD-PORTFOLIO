import { motion } from "framer-motion";
import { Shield, Eye, Zap, Search, MapPin, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Security() {
  const { t } = useLanguage();
  
  const securityTechnologies = [
    {
      titleKey: "security.safeapp.title",
      subtitleKey: "security.safeapp.subtitle",
      icon: <Shield className="w-8 h-8" />,
      media: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/bc12cc11-2c0b-4f02-6ca3-c8ae57ae8600/public",
      bulletKeys: [
        "security.safeapp.bullet1",
        "security.safeapp.bullet2", 
        "security.safeapp.bullet3",
        "security.safeapp.bullet4"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      titleKey: "security.inspection_drones.title",
      subtitleKey: "security.inspection_drones.subtitle",
      icon: <Eye className="w-8 h-8" />,
      media: "https://public.invenor.group/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4",
      bulletKeys: [
        "security.inspection_drones.bullet1",
        "security.inspection_drones.bullet2",
        "security.inspection_drones.bullet3",
        "security.inspection_drones.bullet4"
      ],
      color: "from-orange-500 to-orange-700"
    },
    {
      titleKey: "security.correction_drones.title",
      subtitleKey: "security.correction_drones.subtitle",
      icon: <Zap className="w-8 h-8" />,
      media: "https://public.invenor.group/voliro_homepage_video_hpsjm3.mp4",
      bulletKeys: [
        "security.correction_drones.bullet1",
        "security.correction_drones.bullet2",
        "security.correction_drones.bullet3",
        "security.correction_drones.bullet4"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      titleKey: "security.rescue_tag.title",
      subtitleKey: "security.rescue_tag.subtitle",
      icon: <MapPin className="w-8 h-8" />,
      media: "https://public.invenor.group/Crew_Companion_1.3_ddgusl.mov",
      bulletKeys: [
        "security.rescue_tag.bullet1",
        "security.rescue_tag.bullet2",
        "security.rescue_tag.bullet3",
        "security.rescue_tag.bullet4"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      titleKey: "security.all_access.title",
      subtitleKey: "security.all_access.subtitle",
      icon: <Shield className="w-8 h-8" />,
      media: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/8493c109-20fa-4d0c-02b3-9e24b47ab200/public",
      bulletKeys: [
        "security.all_access.bullet1",
        "security.all_access.bullet2",
        "security.all_access.bullet3",
        "security.all_access.bullet4"
      ],
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div>
        {/* Security Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {securityTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-ey-yellow/10 to-ey-yellow/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              
              <div className="relative bg-ey-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-ey-yellow/20 hover:border-ey-yellow/40 transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center shadow-lg text-white`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-ey-white group-hover:text-ey-yellow transition-colors">
                      {t(tech.titleKey)}
                    </h3>
                    <p className="text-ey-yellow/80 font-medium">{t(tech.subtitleKey)}</p>
                  </div>
                </div>

                {/* Media (Video or Image) */}
                <div className="mb-6 aspect-video rounded-xl overflow-hidden bg-ey-medium border border-ey-yellow/20">
                  {tech.media.includes('.mp4') || tech.media.includes('.mov') ? (
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={tech.media} type="video/mp4" />
                      Your browser does not support the video element.
                    </video>
                  ) : (
                    <img
                      src={tech.media}
                      alt={t(tech.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Bullets */}
                <div className="space-y-3 mt-auto">
                  {tech.bulletKeys.map((bulletKey, bulletIndex) => (
                    <motion.div
                      key={bulletIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * bulletIndex }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-ey-yellow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-ey-white/90 font-medium leading-relaxed">{t(bulletKey)}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom CTA Card*/}
          <motion.div 
            className="relative bg-gradient-to-br from-ey-dark via-ey-medium/30 to-ey-dark rounded-3xl p-8 border-2 border-ey-yellow/40 shadow-2xl flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
             <div className="absolute inset-0 bg-ey-yellow/10 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="text-center relative">
              <Shield className="w-16 h-16 text-ey-yellow mx-auto mb-6" />
              <p className="text-3xl text-ey-yellow font-black mb-2">{t('security.cta.title')}</p>
              <p className="text-lg text-ey-white/80 font-medium">{t('security.cta.subtitle')}</p>
            </div>
          </motion.div>
        </div>
    </div>
  );
}
