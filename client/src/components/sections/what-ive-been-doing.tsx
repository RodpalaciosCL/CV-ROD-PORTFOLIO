import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatIveBeenDoing() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-ey-medium via-ey-dark to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-ey-yellow/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-ey-yellow/10 rounded-full blur-2xl"
          animate={{ scale: [1.1, 0.9, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-black text-ey-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('doing.title')} <span className="text-ey-yellow">{t('doing.title_highlight')}</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-ey-yellow/80 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('doing.subtitle')}
          </motion.p>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          className="relative group max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Epic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 via-ey-yellow/10 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-ey-yellow/10 via-transparent to-ey-yellow/10 rounded-3xl blur-xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-ey-dark via-ey-medium/50 to-ey-dark rounded-3xl p-6 border-2 border-ey-yellow/40 shadow-2xl backdrop-blur-sm">
            {/* Video Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo="
              >
                <source 
                  src="https://res.cloudinary.com/dhobnlg73/video/upload/v1753753423/warehouse_sgukjf_lfssd2.mp4" 
                  type="video/mp4" 
                />
                Tu navegador no soporta la reproducción de videos.
              </video>
              
              {/* YouTube-style Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-ey-yellow rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-ey-black" />
                    ) : (
                      <Play className="w-5 h-5 text-ey-black ml-0.5" />
                    )}
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleMute}
                    className="w-8 h-8 bg-ey-white/20 rounded flex items-center justify-center backdrop-blur-sm hover:bg-ey-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-ey-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-ey-white" />
                    )}
                  </motion.button>
                  
                  <div className="text-ey-white text-sm font-medium">
                    {t('doing.video_title')}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-black text-ey-white mb-2">
                {t('doing.projects_title_part1')} <span className="text-ey-yellow">{t('doing.projects_title_part2')}</span>
              </h3>
              <p className="text-base text-ey-white/80 leading-relaxed max-w-3xl mx-auto">
                {t('doing.projects_description')}
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
