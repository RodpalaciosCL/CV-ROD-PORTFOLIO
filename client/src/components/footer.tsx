import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ey-dark py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-ey-white/60 text-sm">
          © 2025 | Rodrigo Palacios Strategic Partnership | Propuesta confidencial para EY.
        </div>
      </div>
    </footer>
  );
}