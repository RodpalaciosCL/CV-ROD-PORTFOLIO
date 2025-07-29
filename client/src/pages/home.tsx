import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import OptimalSolution from "@/components/sections/optimal-solution";
import Projects from "@/components/sections/projects";
import ActivePipeline from "@/components/sections/active-pipeline";
import WhatIveBeenDoing from "@/components/sections/what-ive-been-doing";
import PlugAndPlaySolutions from "@/components/sections/plug-and-play-solutions";
import PipelinePlus from "@/components/sections/pipeline-plus";
import Strategic from "@/components/sections/strategic";
import Value from "@/components/sections/value";
import Efficiency from "@/components/sections/efficiency";
import SpeakingEvents from "@/components/sections/speaking-events";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (e.target as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-ey-dark">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ActivePipeline />
      <WhatIveBeenDoing />
      <PlugAndPlaySolutions />
      <PipelinePlus />
      <Strategic />
      <Value />
      <Efficiency />
      <OptimalSolution />
      <SpeakingEvents />
      <Contact />
      <Footer />
    </div>
  );
}
