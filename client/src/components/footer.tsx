import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-ey-dark py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-ey-white/60 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
