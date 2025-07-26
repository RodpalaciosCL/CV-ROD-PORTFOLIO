import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ey-dark py-12 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-ey-yellow/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-16 h-16 bg-ey-yellow/3 rounded-full blur-xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* EY Brand Mark */}
          <motion.div 
            className="inline-block mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-ey-yellow text-ey-black px-8 py-4 rounded-2xl font-black text-2xl tracking-wider shadow-lg">
              EY + RODRIGO PALACIOS
            </div>
          </motion.div>

          {/* Partnership Statement */}
          <motion.p 
            className="text-ey-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Propuesta estratégica para acelerar la práctica de tecnología minera en Latinoamérica
          </motion.p>

          {/* Key Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-black text-ey-yellow mb-2">$71M+</div>
              <div className="text-ey-white/70 font-medium">Proyectos Entregados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-ey-yellow mb-2">$11.4M</div>
              <div className="text-ey-white/70 font-medium">Pipeline Activo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-ey-yellow mb-2">20+</div>
              <div className="text-ey-white/70 font-medium">Años de Experiencia</div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="w-24 h-1 bg-ey-yellow mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Copyright and Made with */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-ey-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 md:mb-0">
              © 2025 Rodrigo Palacios Strategic Partnership. Propuesta confidencial para EY.
            </div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Desarrollado con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 text-ey-yellow fill-current" />
              </motion.div>
              <span>para el éxito mutuo</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}