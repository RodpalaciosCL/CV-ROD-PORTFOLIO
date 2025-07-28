import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Award, User } from "lucide-react";

export default function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (count1 < 71) setCount1(count1 + 1);
    }, 50);
    const timer2 = setTimeout(() => {
      if (count2 < 20) setCount2(count2 + 1);
    }, 100);
    const timer3 = setTimeout(() => {
      if (count3 < 11.4) setCount3(count3 + 0.1);
    }, 80);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [count1, count2, count3]);

  return (
    <section id="hero" className="min-h-screen bg-ey-dark pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Professional Badge */}
            <motion.div 
              className="inline-block mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-ey-medium border border-ey-light rounded-lg px-6 py-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-ey-yellow" />
                  <span className="text-ey-yellow font-bold">Ingeniero Industrial</span>
                  <span className="text-ey-white/80">Especialista en Transformación Digital</span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-ey-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Liderazgo Tecnológico
              <br />
              <span className="text-ey-yellow">Estratégico</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl text-ey-white/80 mb-12 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ingeniero Industrial con 20+ años liderando transformación digital en sectores mineros y energéticos. 
              Track record comprobado con firmas Big 4 y empresas mineras Tier 1 en Latinoamérica.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button className="bg-ey-yellow text-ey-black px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300">
                <span className="flex items-center">
                  Ver Pipeline de $11.4M
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Button>
              
              <Button variant="outline" className="border-ey-yellow text-ey-yellow px-8 py-6 text-lg font-semibold rounded-lg hover:bg-ey-medium transition-all duration-300">
                <span className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Descargar Propuesta
                </span>
              </Button>
            </motion.div>

            {/* Metrics Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center p-4 bg-ey-medium border border-ey-light rounded-lg">
                <motion.div 
                  className="text-3xl font-black text-ey-yellow mb-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
                >
                  ${count1}M+
                </motion.div>
                <div className="text-ey-white text-sm font-medium">Proyectos Entregados</div>
              </div>
              
              <div className="text-center p-4 bg-ey-medium border border-ey-light rounded-lg">
                <motion.div 
                  className="text-3xl font-black text-ey-yellow mb-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 1.4 }}
                >
                  {count2}+
                </motion.div>
                <div className="text-ey-white text-sm font-medium">Años Experiencia</div>
              </div>
              
              <div className="text-center p-4 bg-ey-medium border border-ey-light rounded-lg">
                <motion.div 
                  className="text-3xl font-black text-ey-yellow mb-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 1.6 }}
                >
                  ${count3.toFixed(1)}M
                </motion.div>
                <div className="text-ey-white text-sm font-medium">Pipeline Activo</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Professional portrait placeholder */}
              <div className="relative bg-ey-medium border border-ey-light rounded-lg p-8">
                <div className="aspect-square bg-ey-light rounded-lg overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/IMG_4613_gashr6.jpg" 
                    alt="Rodrigo Palacios - Mining Technology Expert Presentation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Professional credentials */}
                <div className="mt-6 space-y-3">
                  <div className="bg-ey-yellow text-ey-black px-4 py-2 rounded text-center font-bold text-sm">
                    Mining Technology Expert
                  </div>
                  
                  <div className="bg-ey-light text-ey-white px-4 py-2 rounded text-center font-semibold text-sm border border-ey-yellow/30">
                    Big 4 Consulting Background
                  </div>
                </div>
              </div>
              
              {/* Simple accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-ey-yellow rounded border-4 border-ey-dark"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ey-yellow rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}