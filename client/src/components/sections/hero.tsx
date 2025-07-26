import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [counters, setCounters] = useState({ projects: 0, value: 0, countries: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 50, value: 500, countries: 4 };
      const increments = { projects: 50/50, value: 500/50, countries: 4/50 };
      let current = { projects: 0, value: 0, countries: 0 };

      const timer = setInterval(() => {
        current.projects += increments.projects;
        current.value += increments.value;
        current.countries += increments.countries;

        if (current.projects >= targets.projects) {
          setCounters(targets);
          clearInterval(timer);
        } else {
          setCounters({
            projects: Math.floor(current.projects),
            value: Math.floor(current.value),
            countries: Math.floor(current.countries)
          });
        }
      }, 40);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ey-dark via-gray-900 to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-ey-yellow rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-ey-yellow rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-ey-yellow rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-ey-yellow rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional headshot with modern border */}
          <motion.div 
            className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 p-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-full h-full rounded-full bg-gray-300 border-4 border-ey-yellow shadow-2xl"></div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ey-white to-ey-yellow mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Rodrigo Palacios
          </motion.h1>
          
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="absolute inset-0 bg-ey-yellow/20 blur-xl rounded-full"></div>
            <p className="relative text-3xl md:text-4xl text-ey-yellow font-bold tracking-wide">
              Strategic Technology Partner
            </p>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-ey-white/90 mb-12 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            20+ años transformando minería y energía a través de tecnología
          </motion.p>
          
          {/* Modern stats cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { value: `${counters.projects}+`, label: "Proyectos Entregados", icon: "🎯" },
              { value: `$${counters.value}M+`, label: "en Valor Creado", icon: "💎" },
              { value: `${counters.countries}`, label: "Países", icon: "🌎" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ey-yellow/20 to-ey-yellow/40 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-ey-dark/80 backdrop-blur-xl rounded-2xl p-8 border border-ey-yellow/30 hover:border-ey-yellow/60 transition-all duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-black text-ey-yellow mb-3">{stat.value}</div>
                  <div className="text-ey-white/80 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA with modern styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="relative bg-ey-yellow text-ey-black px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:shadow-ey-yellow/25 transition-all duration-300 group">
                <span className="relative z-10">Agendar Reunión Estratégica</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-ey-yellow rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-ey-yellow/60 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-3 bg-ey-yellow rounded-full mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}