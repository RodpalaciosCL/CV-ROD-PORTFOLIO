import { Lightbulb, Settings, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-ey-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            {/* Professional photo placeholder */}
            <div className="w-full h-96 bg-gray-300 rounded-xl shadow-2xl"></div>
          </div>
          
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold text-ey-dark mb-6">
              Strategic Technology Leadership
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Industrial Engineer with 20+ years driving digital transformation in mining & energy sectors. 
              Proven track record with Big 4 consulting firms and Tier 1 mining companies across Latin America.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-ey-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ey-dark">Digital Strategy</h3>
                  <p className="text-gray-600">Comprehensive technology roadmaps for mining operations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-ey-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ey-dark">Technology Implementation</h3>
                  <p className="text-gray-600">Large-scale system deployments and optimization</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ey-yellow rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-ey-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ey-dark">Business Development</h3>
                  <p className="text-gray-600">Strategic partnerships and revenue generation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-ey-dark rounded-xl p-6">
              <h3 className="text-xl font-semibold text-ey-yellow mb-4">Career Timeline</h3>
              <div className="space-y-3 text-ey-white">
                <div className="flex justify-between">
                  <span className="font-semibold">Kyndryl</span>
                  <span className="text-ey-yellow">2022-Present</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">PwC</span>
                  <span className="text-ey-yellow">2019-2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Deloitte</span>
                  <span className="text-ey-yellow">2016-2019</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Accenture</span>
                  <span className="text-ey-yellow">2012-2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
