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
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/668c1c12e8a58030d5568f21_642d7a5f4d77d19c2f6fa8c2_xzGehktapAgabSW56yhCmigLzY3uCWACMrR6p4lkLfw_owddtl.jpg",
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
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185606/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4",
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
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185484/voliro_homepage_video_hpsjm3.mp4",
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
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1754191470/Crew_Companion_1.3_ddgusl.mov",
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
      media: "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693911/Captura_de_pantalla_2025-06-23_a_la_s_11.51.34_c8xmcy.png",
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
                      alt={t(tech.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Content - Bottom */}
                <div className="p-4 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mr-3`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ey-white group-hover:text-ey-yellow transition-colors">
                        {t(tech.titleKey)}
                      </h3>
                      <p className="text-xs text-gray-400">{t(tech.subtitleKey)}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-2 mb-3 flex-grow">
                    {tech.bulletKeys.slice(0, 2).map((bulletKey, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-ey-yellow rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-gray-300 leading-relaxed">{t(bulletKey)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Ready to deploy badge - Fixed at bottom */}
                  <div className="flex items-center justify-between mt-auto">
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
            className="group relative bg-ey-medium/20 backdrop-blur-sm rounded-xl border border-ey-light/20 hover:border-ey-yellow/30 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            {/* Media - Top */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://metalbit.io/_next/static/media/signalshield_prototype_screenshot.7422500f.png"
                alt="SignalShield Prototype - Seguridad OT"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content - Bottom */}
            <div className="p-4 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ey-white group-hover:text-ey-yellow transition-colors">
                    {t('security.ot.title')}
                  </h3>
                  <p className="text-xs text-gray-400">{t('security.ot.subtitle')}</p>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-2 mb-3 flex-grow">
                {[
                  t('security.ot.bullet1'),
                  t('security.ot.bullet2'), 
                  t('security.ot.bullet3'),
                  t('security.ot.bullet4')
                ].slice(0, 2).map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-ey-yellow rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-xs text-gray-300 leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Ready to deploy badge - Fixed at bottom */}
              <div className="flex items-center justify-between mt-auto">
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
        </div>
    </div>
  );
}
