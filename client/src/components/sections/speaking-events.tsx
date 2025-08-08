import { motion } from "framer-motion";
import { Award, Users, Calendar, MapPin, Mic, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SpeakingEvents() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const events = [
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810173/_CVA4755_Original_qa2wwr.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810158/IMG_1162_ofludo.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810221/IMG_1555_kkzmpi.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563333/IMG_2573_cewyx0.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563330/a61a42b3-9eb2-4e08-afc5-fbbac2239ed4_rwzo9s.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563329/IMG_4685_p4j3sv.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/c8acddc3-a17d-46f5-8fdc-a2904564214c_nujgt8.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/IMG_1700_lxv0om.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/06887361-3b5b-4e12-a9a0-d6b17c4f72a2_ljprgl.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563328/84bf4e38-e947-460d-a30e-22ba336c208e_t2meib.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563329/7357fed7-e020-4627-806a-fbb75bf31a8b_gu8p59.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563330/IMG_4649_sggxae.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563330/IMG_2001_qlbtqx.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563331/16eca60a-fe76-48b3-a74b-8029c2cfc872_ri8vt7.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/401cce6c-8556-468d-b70d-f533a08b9573_iqjify.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/IMG_1366_s3qs9a.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563334/e1ee1518-5172-4c7c-af63-dd68d4361974_ziqlbg.jpg"
    },
    {
      image: "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563331/IMG_3811_uwzew7.png"
    },
  ];

  const newImages = [
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192222/97687553_1364588770397246_1578362694157729792_n_jev48f.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192222/IMG_0069_jvvcoq.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192222/0c08dac3-592e-4138-b852-0d1dfc07d9db_ysqh4t.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810153/c82c4a60-4199-4a61-99c0-bd908f87a420_tchhwy.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563331/16eca60a-fe76-48b3-a74b-8029c2cfc872_ri8vt7.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192512/39cc8b3c-4a2e-4946-8e23-3408f9f708e9_cxlggn.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1754194054/526656827_10163875433374225_7163308756814852465_n_fbpbfc.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1754194054/IMG_2014_vv2xsv.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1754194055/Captura_de_pantalla_2025-08-03_a_la_s_00.06.48_trgpdp.png",
  ];

  const combinedEvents = [
    ...events,
    ...newImages.map(image => ({ image })),
  ];
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') {
        const newIndex = selectedIndex > 0 ? selectedIndex - 1 : combinedEvents.length - 1;
        setSelectedIndex(newIndex);
        setSelectedImage(combinedEvents[newIndex].image);
      } else if (e.key === 'ArrowRight') {
        const newIndex = selectedIndex < combinedEvents.length - 1 ? selectedIndex + 1 : 0;
        setSelectedIndex(newIndex);
        setSelectedImage(combinedEvents[newIndex].image);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedIndex, combinedEvents]);
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = selectedIndex > 0 ? selectedIndex - 1 : combinedEvents.length - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(combinedEvents[newIndex].image);
    } else {
      const newIndex = selectedIndex < combinedEvents.length - 1 ? selectedIndex + 1 : 0;
      setSelectedIndex(newIndex);
      setSelectedImage(combinedEvents[newIndex].image);
    }
  };

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
<span className="whitespace-nowrap">{t('speaking.title')} <span className="text-ey-yellow">{t('speaking.title_highlight')}</span></span>
          </motion.h2>
          <motion.p 
            className="text-xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('speaking.subtitle')}
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
          {combinedEvents.map((event, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => {
                setSelectedImage(event.image);
                setSelectedIndex(index);
              }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                {/* Clean image without any overlay text */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt="Professional event photo" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Hover overlay to indicate clickable */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                      {t('speaking.view_image')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              alt="Professional event photo" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedIndex + 1} / {combinedEvents.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
