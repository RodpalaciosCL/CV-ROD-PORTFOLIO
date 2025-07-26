export default function Projects() {
  const projects = [
    {
      company: "Glencore",
      title: "Asset Management System",
      value: "$4M USD",
      team: "15+ professionals",
      result: "40% efficiency",
      description: "Complete digital transformation of asset management processes",
      color: "bg-blue-600"
    },
    {
      company: "CODELCO",
      title: "Contract Renegotiation",
      value: "$50M USD",
      team: "18 months",
      result: "Major reduction",
      description: "Strategic contract optimization delivering significant cost savings",
      color: "bg-red-600"
    },
    {
      company: "PwC",
      title: "Digital Mining Solutions",
      value: "$8M USD",
      team: "25+ specialists",
      result: "Benchmark",
      description: "Technology implementation setting industry standards",
      color: "bg-orange-500"
    },
    {
      company: "Deloitte",
      title: "Energy Transformation",
      value: "$6M USD",
      team: "Strategy & execution",
      result: "35% improvement",
      description: "Digital strategy and execution for operational excellence",
      color: "bg-green-600"
    },
    {
      company: "Accenture",
      title: "Mining Analytics",
      value: "$3M USD",
      team: "Data analytics",
      result: "Real-time insights",
      description: "Advanced analytics platform for real-time decision making",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-ey-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-ey-dark mb-6">
            Major Project Achievements
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Proven track record delivering complex technology solutions for Tier 1 mining companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover scroll-reveal border border-gray-200">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${project.color} rounded-lg mr-4`}></div>
                <h3 className="text-xl font-bold text-ey-dark">{project.company}</h3>
              </div>
              <h4 className="text-lg font-semibold text-ey-dark mb-3">{project.title}</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Value:</span>
                  <span className="font-bold text-ey-yellow">{project.value}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Team:</span>
                  <span className="font-semibold">{project.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Result:</span>
                  <span className="font-semibold text-green-600">{project.result}</span>
                </div>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
          
          {/* Summary Card */}
          <div className="bg-ey-dark rounded-xl p-6 card-hover scroll-reveal flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-ey-yellow mb-2">$71M+</div>
              <div className="text-ey-white text-lg">Total Project Value</div>
              <div className="text-ey-yellow text-sm mt-2">Delivered Successfully</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
