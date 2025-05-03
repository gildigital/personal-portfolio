
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, Play, Globe } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  videoUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  delay: number;
}

const Project = ({ title, description, image, tech, videoUrl, githubUrl, liveDemoUrl, delay }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden card-hover animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Play className="h-16 w-16 text-white" />
        </div>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6 bg-card">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span key={item} className="tech-badge">{item}</span>
          ))}
        </div>

        <div className="flex space-x-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="sm" className="flex items-center">
                <Play className="h-4 w-4 mr-2" />
                View Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{title} Demo</DialogTitle>
                <DialogDescription>
                  A demonstration of key features and functionality (working on demos, please enjoy this song)
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video w-full">
                <iframe
                  src={videoUrl}
                  title={`${title} demo video`}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>

          {/* -- LIVE DEMO vs. VIEW CODE -- */}
          {liveDemoUrl ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex items-center"
            >
              <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          ) : (
            githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex items-center"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "LeetPhys",
      description: "A full-stack SaaS app with React, Node.js, and Stripe. Features real-time analytics and 400% signup growth via Google One-Click Signup.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe", "Google Auth"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      // githubUrl: "https://github.com/gildigital/leetphys",
      liveDemoUrl: "https://leetphys.com",
      delay: 0.2
    },
    {
      title: "Full-Stack Job Application System",
      description: "An automation platform (educational use only) with React, Node.js, and AI Vision. Scrapes jobs, matches resumes, and auto-applies using Playwright.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      tech: ["React", "Node.js", "Playwright", "AI Vision", "MongoDB"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com/gildigital/AIJobApply",
      delay: 0.4
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="group">
            <a href="https://github.com/gildigital" target="_blank" rel="noopener noreferrer">
              View More Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
