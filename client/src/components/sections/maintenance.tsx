import { motion } from "framer-motion";
import { Activity, Car, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Maintenance() {
  const { t } = useLanguage();
  
  const maintenanceTechnologies = [
    {
      title: t('maintenance.predictive.title'),
      subtitle: t('maintenance.predictive.subtitle'),
      icon: <Activity className="w-8 h-8" />,
      media: "https://res.cloudinary.com/dhobnlg73/video/upload/v1750691069/3_msvtot.mov",
      bullets: [
        t('maintenance.predictive.bullet1'),
        t('maintenance.predictive.bullet2'),
        t('maintenance.predictive.bullet3'),
        t('maintenance.predictive.bullet4')
      ],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: t('maintenance.vehicle.title'),
      subtitle: t('maintenance.vehicle.subtitle'),
      icon: <Car className="w-8 h-8" />,
      media: "https://www.slideteam.net/media/catalog/product/cache/1280x720/i/o/iot_predictive_maintenance_dashboard_for_mining_vehicle_slide01.jpg",
      bullets: [
        t('maintenance.vehicle.bullet1'),
        t('maintenance.vehicle.bullet2'),
        t('maintenance.vehicle.bullet3'),
        t('maintenance.vehicle.bullet4')
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: t('maintenance.iot.title'),
      subtitle: t('maintenance.iot.subtitle'),
      icon: <Workflow className="w-8 h-8" />,
      media: "https://image.chitra.live/api/v1/wps/791f42f/bb478e74-0911-4497-aba7-e090c8d478ea/2/IoT-Technology-for-the-Mining-Industry-1074x654.jpg",
      bullets: [
        t('maintenance.iot.bullet1'),
        t('maintenance.iot.bullet2'),
        t('maintenance.iot.bullet3'),
        t('maintenance.iot.bullet4')
      ],
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div>
      {/* Maintenance Technologies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {maintenanceTechnologies.map((tech, index) => (
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
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : (
                  <img
                    src={tech.media}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
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
              <Activity className="w-12 h-12 text-ey-yellow" />
              <div className="text-center">
                <p className="text-3xl text-ey-yellow font-black mb-2">{t('maintenance.cta.title')}</p>
                <p className="text-lg text-ey-white/80 font-medium">{t('maintenance.cta.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
