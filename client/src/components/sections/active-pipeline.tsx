export default function ActivePipeline() {
  const opportunities = [
    {
      company: "Anglo American",
      project: "Digital Twin Implementation",
      value: "$2.8M",
      probability: 75,
      stage: "Final Proposal",
      timeline: "Q1 2025"
    },
    {
      company: "BHP Spence",
      project: "Predictive Maintenance",
      value: "$1.5M",
      probability: 60,
      stage: "Technical Evaluation",
      timeline: "Q2 2025"
    },
    {
      company: "Antofagasta Minerals",
      project: "Data Analytics Platform",
      value: "$3.2M",
      probability: 80,
      stage: "Contract Negotiation",
      timeline: "Q1 2025"
    },
    {
      company: "Sierra Gorda",
      project: "Process Optimization",
      value: "$1.8M",
      probability: 65,
      stage: "Pilot Phase",
      timeline: "Q2 2025"
    },
    {
      company: "Escondida",
      project: "Automation Systems",
      value: "$2.1M",
      probability: 70,
      stage: "Proposal Review",
      timeline: "Q1 2025"
    }
  ];

  return (
    <section id="pipeline" className="py-20 bg-ey-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-ey-white mb-6">
            Active Business Pipeline
          </h2>
          <p className="text-xl text-ey-yellow max-w-3xl mx-auto">
            $11.4M in immediate opportunities ready for EY partnership
          </p>
        </div>
        
        <div className="space-y-6">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-ey-white/10 backdrop-blur-sm rounded-xl p-6 scroll-reveal">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <h3 className="text-xl font-bold text-ey-white">{opportunity.company}</h3>
                  <p className="text-ey-yellow">{opportunity.project}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ey-yellow">{opportunity.value}</div>
                  <div className="text-ey-white text-sm">Project Value</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-ey-white text-sm">Probability</span>
                    <span className="text-ey-yellow font-bold">{opportunity.probability}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-ey-yellow h-2 rounded-full progress-bar" 
                      style={{ width: `${opportunity.probability}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-ey-white font-semibold">{opportunity.stage}</div>
                  <div className="text-ey-yellow text-sm">{opportunity.timeline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pipeline Summary */}
        <div className="mt-12 bg-ey-yellow/20 backdrop-blur-sm rounded-xl p-8 text-center scroll-reveal">
          <h3 className="text-3xl font-bold text-ey-white mb-4">Total Active Pipeline</h3>
          <div className="text-6xl font-bold text-ey-yellow mb-2">$11.4M</div>
          <p className="text-ey-white text-lg">Ready for immediate EY partnership deployment</p>
        </div>
      </div>
    </section>
  );
}
