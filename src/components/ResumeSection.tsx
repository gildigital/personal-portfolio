
import { Calendar, Code, Database, FileCode, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

const ResumeItem = ({ title, company, period, description, icon, skills, delay }: ResumeItemProps) => (
  <div 
    className="timeline-item animate-fade-in" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-start md:items-center mb-2 flex-col md:flex-row md:gap-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="badge-accent badge">{company}</span>
    </div>
    
    <div className="flex items-center text-sm text-slate mb-3">
      <Calendar className="mr-2 h-4 w-4" />
      <span>{period}</span>
    </div>
    
    <p className="text-slate-dark mb-4">{description}</p>
    
    <div className="flex flex-wrap gap-2 mb-2">
      {skills.map((skill) => (
        <span key={skill} className="tech-badge">{skill}</span>
      ))}
    </div>
    
    <div className="p-2 bg-secondary inline-flex rounded-full absolute -left-4">
      {icon}
    </div>
  </div>
);

const ResumeSection = () => {
  const resumeItems = [
    {
      title: "Software Engineer",
      company: "LeetPhys",
      period: "2023 - Present",
      description: "Developed full-stack SaaS app with React, Node.js, TypeScript, and PostgreSQL, serving 1000 active users. Increased signups by 400% with Google One-Click Signup.",
      icon: <Code className="h-5 w-5 text-accent" />,
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Google Auth"],
      delay: 0.1
    },
    {
      title: "Software Engineer Intern",
      company: "AWS",
      period: "Summer 2023",
      description: "Built Java applications with DynamoDB, boosting throughput for petabyte-scale systems.",
      icon: <Database className="h-5 w-5 text-accent" />,
      skills: ["Java", "AWS", "DynamoDB", "Cloud Infrastructure"],
      delay: 0.3
    },
    {
      title: "Research Assistant",
      company: "USD",
      period: "2023 - 2024",
      description: "Authored first-author paper in Soft Matter, developing ML tools with PyTorch to reduce data needs by 99%.",
      icon: <PenTool className="h-5 w-5 text-accent" />,
      skills: ["Machine Learning", "PyTorch", "Python", "Data Analysis"],
      delay: 0.5
    },
    {
      title: "Aircraft Metals Technician",
      company: "USAF",
      period: "2018 - 2022",
      description: "Collaborated in high-pressure teams, ensuring mission-critical aircraft safety.",
      icon: <FileCode className="h-5 w-5 text-accent" />,
      skills: ["Team Leadership", "Critical Thinking", "Problem Solving"],
      delay: 0.7
    }
  ];

  return (
    <section id="resume" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="mb-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-2">Career Journey</h3>
              <p className="text-slate-dark">
                My path from the Air Force to software engineering combines technical precision, 
                creative problem-solving, and team collaboration skills developed across diverse environments.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              {resumeItems.slice(0, 2).map((item, index) => (
                <ResumeItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">Skills & Expertise</h3>
                <Button asChild variant="outline" className="hidden md:flex">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
              <p className="text-slate-dark">
                I blend software engineering expertise with a physics background to build elegant,
                efficient solutions to complex technical challenges.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              {resumeItems.slice(2).map((item, index) => (
                <ResumeItem key={index} {...item} />
              ))}
            </div>
            
            <Button asChild className="w-full md:hidden mt-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
