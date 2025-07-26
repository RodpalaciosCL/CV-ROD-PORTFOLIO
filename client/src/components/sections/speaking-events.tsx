export default function SpeakingEvents() {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Mining Technology Summit",
      description: "Keynote: \"Digital Transformation in Mining Operations\"",
      location: "Santiago, Chile 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Energy Transformation Panel",
      description: "Panel Expert: \"Sustainable Mining Technologies\"",
      location: "Lima, Peru 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Technical Workshop",
      description: "Training: \"Advanced Analytics for Mining\"",
      location: "Antofagasta, Chile 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Industry Recognition",
      description: "Award: \"Digital Innovation in Mining\"",
      location: "Santiago, Chile 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Executive Networking",
      description: "Event: \"Mining Leaders Summit\"",
      location: "São Paulo, Brazil 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Media Interview",
      description: "Feature: \"Future of Mining Technology\"",
      location: "Mining Weekly 2024"
    }
  ];

  return (
    <section id="speaking" className="py-20 bg-ey-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-ey-dark mb-6">
            Industry Leadership & Recognition
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Thought leadership and professional presence in mining & technology sectors
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
          {events.map((event, index) => (
            <div key={index} className="relative group card-hover">
              <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
              <div className="absolute inset-0 bg-ey-dark/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <div className="text-center text-ey-white p-4">
                  <h3 className="text-lg font-bold text-ey-yellow mb-2">{event.title}</h3>
                  <p>{event.description}</p>
                  <p className="text-sm text-ey-yellow mt-2">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Recognition Summary */}
        <div className="mt-16 bg-ey-dark rounded-xl p-8 text-center scroll-reveal">
          <h3 className="text-2xl font-bold text-ey-yellow mb-6">Industry Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-ey-yellow mb-2">15+</div>
              <div className="text-ey-white">Speaking Engagements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ey-yellow mb-2">5</div>
              <div className="text-ey-white">Industry Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ey-yellow mb-2">500+</div>
              <div className="text-ey-white">Professional Connections</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
