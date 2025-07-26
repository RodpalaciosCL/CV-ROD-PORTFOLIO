export default function Efficiency() {
  return (
    <section id="efficiency" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-ey-dark mb-6">
            Partnership Efficiency Analysis
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Clear ROI comparison: Partnership vs. Traditional Hiring
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Traditional Approach */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 scroll-reveal">
            <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Traditional Approach</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">4 Separate Hires</span>
                  <span className="text-red-600 font-bold">$600K+/year</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Hiring Timeline</span>
                  <span className="text-red-600 font-bold">8-12 months</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Risk Level</span>
                  <span className="text-red-600 font-bold">High</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Pipeline Access</span>
                  <span className="text-red-600 font-bold">$0</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">Complex & Costly</div>
              <p className="text-red-700">Multiple hiring processes, integration challenges</p>
            </div>
          </div>
          
          {/* Partnership Model */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 scroll-reveal">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Partnership Model</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">4-in-1 Solution</span>
                  <span className="text-green-600 font-bold">Flexible</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Deployment</span>
                  <span className="text-green-600 font-bold">Immediate</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Risk Level</span>
                  <span className="text-green-600 font-bold">Minimal</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Pipeline Access</span>
                  <span className="text-green-600 font-bold">$11.4M</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Strategic & Efficient</div>
              <p className="text-green-700">Immediate value with proven results</p>
            </div>
          </div>
        </div>
        
        {/* ROI Analysis */}
        <div className="mt-16 bg-ey-dark rounded-xl p-8 scroll-reveal">
          <h3 className="text-2xl font-bold text-ey-yellow mb-8 text-center">ROI Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ey-yellow mb-2">3x</div>
              <div className="text-ey-white font-semibold">Faster Deployment</div>
              <div className="text-ey-white/80 text-sm mt-2">vs traditional hiring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ey-yellow mb-2">60%</div>
              <div className="text-ey-white font-semibold">Cost Reduction</div>
              <div className="text-ey-white/80 text-sm mt-2">vs separate hires</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ey-yellow mb-2">Immediate</div>
              <div className="text-ey-white font-semibold">Pipeline Access</div>
              <div className="text-ey-white/80 text-sm mt-2">$11.4M opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
