import { motion } from "framer-motion";
import BulletAccordion from "@/components/BulletAccordion";

export default function Strategic() {
  const insights = [
    {
      title: "La Realidad del AI · Disrupción total",
      subtitle: "",
      bullets: [
        { heading: "Gen AI desmonta el modelo tradicional de horas facturables",
          detail: "Los LLM analizan el 100 % de las transacciones en minutos y generan reportes sin muestreo. Esto elimina tareas junior y comprime auditorías de 6 semanas a 6 horas." },
        { heading: "PwC invirtió US$ 1 B para automatizar auditoría y consultoría",
          detail: "Prevén que 30 % del compliance estará 100 % automatizado antes de 2027. Si EY no actúa ahora, llegará segundo." },
        { heading: "Clientes construyen copilotos internos que entregan en horas",
          detail: "Coca-Cola ya dispone de un bot financiero con GPT-4 que produce dashboards de riesgo en tiempo real a coste marginal." },
        { heading: "Start-ups como Harvey AI reemplazan servicios Big Four completos",
          detail: "Harvey atiende a >40 firmas legales del Top 100; EY Legal pierde terreno en contratos estándar y due-diligence." }
      ]
    },
    {
      title: "Imperativo de Velocidad · Adaptación inmediata",
      subtitle: "",
      bullets: [
        { heading: "Clientes pagan por impacto en 48 h, no en 6 meses",
          detail: "CFOs exigen ROI este mismo trimestre; un prototipo que no se usa en 2 días se cancela." },
        { heading: "War-rooms con Gen AI generan MVPs funcionales en la primera sesión",
          detail: "Prompt-engineer + datos → backend, UI y pruebas unitarias en vivo." },
        { heading: "Co-creación en vivo reemplaza ciclos de evaluación clásicos",
          detail: "Cada commit está ligado a decisiones de negocio, no a entregables de PowerPoint." },
        { heading: "La verdadera competencia: analistas internos con GPT-4 + no-code",
          detail: "Con Retool & Zapier, un analista arma bots en un fin de semana con su tarjeta corporativa." }
      ]
    },
    {
      title: "Oportunidad Estratégica · Liderazgo en innovación",
      subtitle: "",
      bullets: [
        { heading: "Práctica de prototipado ultrarrápido con equipos híbridos",
          detail: "Quads de 4 personas: Consultor + full-stack + ML-engineer + prompt-engineer; ciclos de 72 h 'descubrimiento-diseño-demo'." },
        { heading: "Demos funcionales en 72 h con pricing por adopción",
          detail: "Fee base bajo + success fee ligado a usuarios activos / ahorro generado." },
        { heading: "Potencial de US$ 50 M en revenue incremental en 12 meses",
          detail: "10 proyectos '72 h' por trimestre × ticket medio US$ 1.25 M + success fee." },
        { heading: "Posicionamiento como líder en consultoría AI-native",
          detail: "Primer portafolio 'built-with-GenAI' certificado, 18 meses antes que la competencia." }
      ]
    }
  ];

  return (
    <section id="strategic" className="py-32 bg-ey-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-ey-yellow/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-ey-dark/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
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
            Propuesta <span className="text-ey-yellow">Estratégica</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-ey-white/80 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Cambiando el rumbo de los próximos 10 años
          </motion.p>
        </motion.div>

        {/* Strategic Insights */}
        <div className="space-y-16 mt-32">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ey-yellow/50 to-transparent"></div>
                  <div className="mx-6 px-6 py-2 bg-ey-yellow/10 rounded-full border border-ey-yellow/30">
                    <span className="text-sm font-bold text-ey-yellow uppercase tracking-wider">
                      {index === 0 ? 'REALIDAD' : index === 1 ? 'VELOCIDAD' : 'OPORTUNIDAD'}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ey-yellow/50 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-black text-ey-white leading-tight">
                  {insight.title}
                </h3>
              </motion.div>
              
              <BulletAccordion
                title={""}
                subtitle={insight.subtitle}
                bullets={insight.bullets}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-ey-yellow/30 rounded-3xl blur-2xl animate-pulse"></div>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://res.cloudinary.com/dhobnlg73/raw/upload/v1753809938/KSO_2024_V1_rcymfs.xlsx';
                link.download = 'KSO_2024_V1.xlsx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="relative bg-gradient-to-r from-ey-dark via-ey-medium to-ey-dark rounded-3xl px-12 py-8 border-2 border-ey-yellow/60 shadow-2xl hover:border-ey-yellow/80 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-center">
                <p className="text-4xl text-ey-yellow font-black mb-2">¿Qué esperamos?</p>
                <p className="text-lg text-ey-white/80 font-medium">Framework de ataque</p>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
