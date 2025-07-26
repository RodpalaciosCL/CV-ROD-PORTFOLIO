import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-ey-dark/95 backdrop-blur-sm z-50 border-b border-ey-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-ey-yellow text-xl font-bold">RP</div>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">Inicio</a>
            <a href="#about" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">Perfil</a>
            <a href="#projects" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">Proyectos</a>
            <a href="#pipeline" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">Pipeline</a>
            <a href="#value" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">Valor</a>
            <a href="#efficiency" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">ROI</a>
            <a href="#speaking" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">Liderazgo</a>
            <a href="#contact" className="text-ey-white hover:text-ey-yellow transition-colors text-sm font-medium">Contacto</a>
          </div>
          <Button className="bg-ey-yellow text-ey-black hover:bg-yellow-400 font-bold text-sm px-6 py-2">
            Agendar Reunión
          </Button>
        </div>
      </div>
    </nav>
  );
}
