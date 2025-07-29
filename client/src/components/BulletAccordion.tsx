import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Bullet {
  heading: string;
  detail: string;
}

interface BulletAccordionProps {
  title: string;
  subtitle: string;
  bullets: Bullet[];
}

export default function BulletAccordion({ title, subtitle, bullets }: BulletAccordionProps) {
  return (
    <div className="bg-ey-medium rounded-2xl p-8 shadow-lg border border-ey-light">
      {title && <h3 className="text-2xl font-bold text-ey-white mb-2">{title}</h3>}
      {subtitle && <p className="text-lg text-ey-white/70 mb-8">{subtitle}</p>}
      <div className="space-y-3">
        {bullets.map((bullet, index) => (
          <AccordionItem key={index} bullet={bullet} index={index} />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ bullet, index }: { bullet: Bullet; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border border-ey-light/30 rounded-xl overflow-hidden bg-ey-dark hover:bg-ey-light/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ey-yellow text-sm font-bold text-ey-black flex-shrink-0">
            {index + 1}
          </span>
          <h4 className="text-ey-white font-semibold text-base">{bullet.heading}</h4>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-ey-yellow" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pl-[60px]">
              <div className="border-l-2 border-ey-yellow pl-4">
                <p className="text-ey-white/80 leading-relaxed">{bullet.detail}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

