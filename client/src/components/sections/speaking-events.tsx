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
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/e8e9e65c-659a-4841-c606-736402f6a600/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/e5ad2ff8-e3af-487b-dcfc-6fa6a9689d00/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/25f1f307-7eed-481b-6970-4a0cd5f24e00/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/c672167c-b65b-46af-57a8-d4569ec77200/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/ab30abf4-8fae-45c9-c21e-488d1b542c00/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/61f831a0-9d66-495a-ac89-d0fbf468f900/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/00e140fc-8ae8-438d-6fc8-450228caf700/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/fdc402c8-56ee-4969-fc2a-49dd14f40500/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/539da491-1836-4f6e-4a82-7ed114fc3e00/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/b23e9b2c-5ea8-4847-7f1d-8301e4c08800/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/280d30cb-4f3a-4c5c-e073-9b9a18e01500/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/08fdbdc1-fc4a-4458-96f3-c700e5acb300/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/06c125f7-9ae6-456f-fb78-4bb5ae7a5100/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/d58fd43e-a259-4b03-70ec-165973df6300/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/789484cb-51de-4389-ea76-01ec89d67f00/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/4451e068-d8a4-44fc-fd1e-265d57a62900/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/3bc811b0-4210-430e-62be-234439922900/public"
    },
    {
      image: "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/44258baa-8675-4fb8-465d-d7f948e4b900/public"
    },
  ];

  const newImages = [
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/7bc7878f-1560-49f9-eb2d-daf298c4c200/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/ab5adceb-ba3e-4bbc-801d-4b5254735c00/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/ce9eda3d-355e-422b-58b1-060c60585a00/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/3987d2a7-179b-46ed-7666-39f094c53200/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/d58fd43e-a259-4b03-70ec-165973df6300/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/940c499d-33b9-45ca-5f6e-01b818f1fd00/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/3b99424f-df08-447c-119b-8296faf6cb00/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/2535d8ba-1c34-4b7b-38ba-d250622a9d00/public",
    "https://imagedelivery.net/ggT8OoJUg8TvMm3OHVNsdQ/68001664-6a9e-4018-46d7-97cda13fdc00/public",
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
            {t('speaking.title')} <span className="text-ey-yellow">{t('speaking.title_highlight')}</span>
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
