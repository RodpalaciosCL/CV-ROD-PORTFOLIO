import { Button } from "@/components/ui/button";
import { Mail, Phone, User } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-ey-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-reveal">
          <h2 className="text-4xl font-bold text-ey-white mb-6">
            Ready to Accelerate EY's Mining Practice?
          </h2>
          <p className="text-xl text-ey-yellow mb-12 max-w-2xl mx-auto">
            Let's discuss how this strategic partnership can unlock $11.4M in immediate opportunities 
            and establish EY as the leading mining technology consultant in Latin America.
          </p>
          
          <div className="space-y-8">
            {/* Primary CTA */}
            <div>
              <Button className="bg-ey-yellow text-ey-black px-12 py-4 text-xl font-bold hover:bg-yellow-400 transform hover:scale-105 shadow-lg">
                Schedule Strategic Partnership Meeting
              </Button>
              <p className="text-ey-white/80 text-sm mt-2">Available for immediate discussion</p>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-ey-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-ey-black" />
                </div>
                <h3 className="text-lg font-semibold text-ey-white mb-2">Email</h3>
                <p className="text-ey-yellow">rodrigo.palacios@strategic.com</p>
              </div>
              
              <div className="bg-ey-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-ey-black" />
                </div>
                <h3 className="text-lg font-semibold text-ey-white mb-2">Phone</h3>
                <p className="text-ey-yellow">+56 9 1234 5678</p>
              </div>
              
              <div className="bg-ey-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-ey-black" />
                </div>
                <h3 className="text-lg font-semibold text-ey-white mb-2">LinkedIn</h3>
                <p className="text-ey-yellow">linkedin.com/in/rodrigopalacios</p>
              </div>
            </div>
            
            {/* Next Steps */}
            <div className="bg-ey-yellow/20 backdrop-blur-sm rounded-xl p-8 mt-12">
              <h3 className="text-xl font-bold text-ey-white mb-4">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-ey-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ey-black font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ey-white">Initial Meeting</h4>
                    <p className="text-ey-white/80 text-sm">30-minute strategic discussion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-ey-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ey-black font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ey-white">Pipeline Review</h4>
                    <p className="text-ey-white/80 text-sm">Detailed opportunity analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-ey-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ey-black font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ey-white">Partnership Agreement</h4>
                    <p className="text-ey-white/80 text-sm">Formalize strategic alliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
