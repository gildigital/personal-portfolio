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

const ResumeItem = ({
  title,
  company,
  period,
  description,
  icon,
  skills,
  delay,
}: ResumeItemProps) => (
  <div
    className="relative pl-12 animate-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    {/* Timeline Dot */}
    <div className="absolute left-0 top-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
      <div className="text-white">{icon}</div>
    </div>

    {/* Content */}
    <div className="mb-2 flex items-center gap-3 flex-wrap">
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      <span
        className="px-3 py-1 text-sm font-medium rounded-md text-white"
        style={{ backgroundColor: "#37c5b3" }}
      >
        {company}
      </span>
    </div>

    <div className="flex items-center text-sm text-slate-500 mb-3">
      <Calendar className="mr-2 h-4 w-4" />
      <span>{period}</span>
    </div>

    <p className="text-slate-700 mb-4">{description}</p>

    <div className="flex flex-wrap gap-2 mb-8">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-sm px-3 py-1 rounded-full font-medium text-slate-800"
          style={{ backgroundColor: "#e2e8f3" }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ResumeSection = () => {
  const resumeItems: ResumeItemProps[] = [
    {
      title: "Software Engineer",
      company: "LeetPhys",
      period: "March 2024 - Present",
      description:
        "Developed full-stack SaaS app with React, Node.js, TypeScript, and PostgreSQL, serving ~1000 active users. Increased signups by 400% with Google One-Click Signup.",
      icon: <Code className="h-4 w-4" />,
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Google Auth"],
      delay: 0.1,
    },
    {
      title: "Research Assistant",
      company: "USD",
      period: "January 2023 - December 2024",
      description:
        "Authored first-author paper in Soft Matter, developing ML tools with PyTorch to reduce data needs by 99%.",
      icon: <PenTool className="h-4 w-4" />,
      skills: ["Machine Learning", "PyTorch", "Python", "Data Analysis"],
      delay: 0.2,
    },
    {
      title: "Software Engineer Intern",
      company: "AWS",
      period: "Summer 2024",
      description:
        "Built Java applications with DynamoDB, boosting throughput for petabyte-scale systems.",
      icon: <Database className="h-4 w-4" />,
      skills: ["Java", "AWS", "DynamoDB", "Cloud Infrastructure"],
      delay: 0.3,
    },
    {
      title: "Aircraft Metals Technician",
      company: "USAF",
      period: "February 2018 - December 2022",
      description:
        "Collaborated in high-pressure teams, ensuring mission-critical aircraft safety.",
      icon: <FileCode className="h-4 w-4" />,
      skills: ["Team Leadership", "Critical Thinking", "Problem Solving"],
      delay: 0.4,
    },
  ];

  return (
    <section id="resume" className="bg-secondary/30 py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3 text-slate-800">Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My path from the Air Force to software engineering blends technical precision, leadership, and a drive to solve complex problems.
          </p>
        </div>

        <div className="relative border-l border-slate-300 pl-8 space-y-12">
          {resumeItems.map((item, index) => (
            <ResumeItem key={index} {...item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline">
            <a
              href="/Gildardo_Martinez_Software_Engineer_FullStack_Node_React_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;