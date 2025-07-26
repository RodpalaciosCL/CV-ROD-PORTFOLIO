import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [counters, setCounters] = useState({ projects: 0, value: 0, countries: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 50, value: 500, countries: 4 };
      const increments = { projects: 50/50, value: 500/50, countries: 4/50 };
      let current = { projects: 0, value: 0, countries: 0 };

      const timer = setInterval(() => {
        current.projects += increments.projects;
        current.value += increments.value;
        current.countries += increments.countries;

        if (current.projects >= targets.projects) {
          setCounters(targets);
          clearInterval(timer);
        } else {
          setCounters({
            projects: Math.floor(current.projects),
            value: Math.floor(current.value),
            countries: Math.floor(current.countries)
          });
        }
      }, 40);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional headshot placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gray-300 border-4 border-ey-yellow"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-ey-white mb-4">
            Rodrigo Palacios
          </h1>
          <p className="text-2xl md:text-3xl text-ey-yellow mb-6 font-semibold">
            Strategic Technology Partner
          </p>
          <p className="text-xl text-ey-white mb-8 max-w-4xl mx-auto">
            20+ years transforming mining & energy through technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-ey-dark/50 backdrop-blur-sm rounded-lg p-6 border border-ey-yellow/20">
              <div className="text-3xl font-bold text-ey-yellow mb-2">{counters.projects}+</div>
              <div className="text-ey-white">Projects Delivered</div>
            </div>
            <div className="bg-ey-dark/50 backdrop-blur-sm rounded-lg p-6 border border-ey-yellow/20">
              <div className="text-3xl font-bold text-ey-yellow mb-2">${counters.value}M+</div>
              <div className="text-ey-white">in Value Created</div>
            </div>
            <div className="bg-ey-dark/50 backdrop-blur-sm rounded-lg p-6 border border-ey-yellow/20">
              <div className="text-3xl font-bold text-ey-yellow mb-2">{counters.countries}</div>
              <div className="text-ey-white">Countries</div>
            </div>
          </div>
          
          <Button className="bg-ey-yellow text-ey-black px-8 py-4 text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 shadow-lg">
            Schedule Strategic Meeting
          </Button>
        </div>
      </div>
    </section>
  );
}
