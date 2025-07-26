import { Check } from "lucide-react";

export default function OptimalSolution() {
  return (
    <section id="optimal" className="py-20 mining-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-ey-white mb-6">
            The Optimal Solution
          </h2>
          <p className="text-xl text-ey-yellow max-w-3xl mx-auto">
            Why hire 4 separate profiles when you can get a proven 4-in-1 strategic partner?
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* EY's Challenge */}
          <div className="bg-ey-dark/80 backdrop-blur-sm rounded-xl p-8 scroll-reveal">
            <h3 className="text-2xl font-bold text-ey-yellow mb-6 text-center">EY's Challenge</h3>
            <p className="text-ey-white text-center mb-8">Searching for 4 separate profiles</p>
            
            <div className="space-y-4">
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-ey-white font-semibold">Mining Industry Expert</span>
                  <span className="text-red-400 font-bold">$180K+</span>
                </div>
              </div>
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-ey-white font-semibold">Digital Transformation Lead</span>
                  <span className="text-red-400 font-bold">$160K+</span>
                </div>
              </div>
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-ey-white font-semibold">Business Development Manager</span>
                  <span className="text-red-400 font-bold">$140K+</span>
                </div>
              </div>
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-ey-white font-semibold">Latin America Specialist</span>
                  <span className="text-red-400 font-bold">$120K+</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-red-500/50">
              <div className="flex justify-between items-center text-lg">
                <span className="text-ey-white font-bold">Total Annual Cost:</span>
                <span className="text-red-400 font-bold text-2xl">$600K+</span>
              </div>
              <div className="text-red-400 text-sm mt-2">+ 8-12 months hiring time</div>
            </div>
          </div>
          
          {/* The Solution */}
          <div className="bg-ey-yellow/10 backdrop-blur-sm border border-ey-yellow/30 rounded-xl p-8 scroll-reveal">
            <h3 className="text-2xl font-bold text-ey-yellow mb-6 text-center">The Solution</h3>
            <p className="text-ey-white text-center mb-8">4-in-1 Strategic Partner</p>
            
            <div className="space-y-4">
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-ey-white font-semibold">20+ Years Mining Experience</span>
                </div>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-ey-white font-semibold">Proven Digital Leadership</span>
                </div>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-ey-white font-semibold">$10M+ Active Pipeline</span>
                </div>
              </div>
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-ey-white font-semibold">LATAM Market Access</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-ey-yellow/30">
              <div className="flex justify-between items-center text-lg">
                <span className="text-ey-white font-bold">Partnership Model:</span>
                <span className="text-ey-yellow font-bold text-2xl">Flexible</span>
              </div>
              <div className="text-ey-yellow text-sm mt-2">Immediate access + proven results</div>
            </div>
          </div>
        </div>
        
        {/* Comparison Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
          <div className="bg-ey-dark/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">8-12 months</div>
            <div className="text-ey-white mb-2">vs</div>
            <div className="text-3xl font-bold text-ey-yellow mb-4">Immediate</div>
            <div className="text-ey-white">Time to Deploy</div>
          </div>
          
          <div className="bg-ey-dark/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">High Risk</div>
            <div className="text-ey-white mb-2">vs</div>
            <div className="text-3xl font-bold text-ey-yellow mb-4">Proven</div>
            <div className="text-ey-white">Track Record</div>
          </div>
          
          <div className="bg-ey-dark/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">$0</div>
            <div className="text-ey-white mb-2">vs</div>
            <div className="text-3xl font-bold text-ey-yellow mb-4">$11.4M</div>
            <div className="text-ey-white">Active Pipeline</div>
          </div>
        </div>
      </div>
    </section>
  );
}
