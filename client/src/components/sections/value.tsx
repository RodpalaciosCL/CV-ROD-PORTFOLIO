import { Zap, Users, Award, Globe } from "lucide-react";
import { Check } from "lucide-react";

export default function Value() {
  return (
    <section id="value" className="py-20 bg-ey-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-ey-dark mb-6">
            Unique Value Proposition
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Competitive advantages that make this partnership strategically valuable for EY
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Immediate Pipeline Access */}
          <div className="text-center scroll-reveal">
            <div className="w-16 h-16 bg-ey-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-ey-black" />
            </div>
            <h3 className="text-xl font-bold text-ey-dark mb-3">Immediate Pipeline</h3>
            <div className="text-3xl font-bold text-ey-yellow mb-2">$11.4M+</div>
            <p className="text-gray-700">Active opportunities ready for deployment</p>
          </div>
          
          {/* Established Network */}
          <div className="text-center scroll-reveal">
            <div className="w-16 h-16 bg-ey-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-ey-black" />
            </div>
            <h3 className="text-xl font-bold text-ey-dark mb-3">Established Network</h3>
            <div className="text-3xl font-bold text-ey-yellow mb-2">Tier 1</div>
            <p className="text-gray-700">Direct relationships with major mining companies</p>
          </div>
          
          {/* Proven Expertise */}
          <div className="text-center scroll-reveal">
            <div className="w-16 h-16 bg-ey-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-ey-black" />
            </div>
            <h3 className="text-xl font-bold text-ey-dark mb-3">Proven Expertise</h3>
            <div className="text-3xl font-bold text-ey-yellow mb-2">20+</div>
            <p className="text-gray-700">Years with demonstrable results</p>
          </div>
          
          {/* LATAM Expansion */}
          <div className="text-center scroll-reveal">
            <div className="w-16 h-16 bg-ey-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-ey-black" />
            </div>
            <h3 className="text-xl font-bold text-ey-dark mb-3">LATAM Gateway</h3>
            <div className="text-3xl font-bold text-ey-yellow mb-2">4</div>
            <p className="text-gray-700">Countries with mining market access</p>
          </div>
        </div>
        
        {/* Competitive Advantages */}
        <div className="mt-16 bg-ey-dark rounded-xl p-8 scroll-reveal">
          <h3 className="text-2xl font-bold text-ey-yellow mb-8 text-center">Competitive Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-ey-yellow" />
                <span className="text-ey-white font-semibold">Bilingual Capability (English/Spanish)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-ey-yellow" />
                <span className="text-ey-white font-semibold">On-ground Mining Experience</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-ey-yellow" />
                <span className="text-ey-white font-semibold">C-level Industry Relationships</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-ey-yellow" />
                <span className="text-ey-white font-semibold">Big 4 Consulting Track Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
