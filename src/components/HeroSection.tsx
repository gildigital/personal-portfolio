
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-background to-secondary/30">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="leading-tight">
            Gildardo Martinez
            <br />
            <span className="text-gradient">Junior Software Engineer</span>
          </h1>
          
          <p className="text-xl text-slate max-w-md">
            Full-Stack Developer | USAF Veteran
          </p>
          
          <p className="text-lg text-slate-dark max-w-md">
            Building scalable apps with React, Node.js, and AWS. From physics research to production code.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
        
        <div className="relative animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-accent/20 rounded-lg transform translate-x-4 translate-y-4"></div>
            <img 
              src="/uploads/55a6d4cf-32ef-4b28-b7b0-d20fdcd7d662.png"
              alt="Gildardo Martinez - Software Engineer"
              className="rounded-lg object-cover w-full h-auto shadow-lg border border-accent/30"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="font-mono text-sm">Available for opportunities</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-12">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <div className="tech-badge">TypeScript</div>
          <div className="tech-badge">React</div>
          <div className="tech-badge">Node.js</div>
          <div className="tech-badge">Java</div>
          <div className="tech-badge">PostgreSQL</div>
          <div className="tech-badge">Python</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
