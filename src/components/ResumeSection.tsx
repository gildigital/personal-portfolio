import { Calendar, Cpu, Plane, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

const ResumeItem = ({
  title,
  company,
  period,
  description,
  bullets,
  icon,
  skills,
  delay,
}: ResumeItemProps) => (
  <div className="relative pl-12 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
    {/* Timeline node */}
    <div className="absolute left-0 top-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center ring-4 ring-background">
      <div className="text-background">{icon}</div>
    </div>

    <div className="mb-1 flex items-center gap-3 flex-wrap">
      <h3 className="text-xl font-display font-medium text-foreground">{title}</h3>
      <span className="font-mono text-xs px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent">
        {company}
      </span>
    </div>

    <div className="flex items-center text-xs font-mono text-muted-foreground mb-3">
      <Calendar className="mr-2 h-3.5 w-3.5" />
      <span>{period}</span>
    </div>

    <p className="text-muted-foreground mb-3">{description}</p>

    {bullets.length > 0 && (
      <ul className="space-y-2 mb-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-foreground/90">
            <span className="text-accent mt-1.5 shrink-0">▸</span>
            <span dangerouslySetInnerHTML={{ __html: b }} />
          </li>
        ))}
      </ul>
    )}

    <div className="flex flex-wrap mb-8">
      {skills.map((skill) => (
        <span key={skill} className="tech-badge">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ResumeSection = () => {
  const resumeItems: ResumeItemProps[] = [
    {
      title: "Equipment Engineer",
      company: "Skorpios Technologies",
      period: "May 2025 – Present · Temecula, CA",
      description:
        "Sustaining engineering for front-end semiconductor wafer fabrication of silicon-photonic devices — owning dry etch and high-vacuum toolsets across process troubleshooting, preventive maintenance, and tool-down recovery.",
      bullets: [
        "Root-caused chronic wafer sticking on a <span class='text-foreground'>Lam Rainbow / TCP 9600</span> dry-etch tool to inadequate ESC dechuck behavior; corrected and verified the recipe across affected processes, restoring stable wafer release and lifting usable throughput from ~1 to ~36 wafers/day — a <span class='text-accent'>~36× improvement</span>.",
        "Improved process uniformity through <span class='text-foreground'>RF / bias tuning</span> on TCP 9600 Al etch (BCl₃/Cl₂/N₂) and GaN troubleshooting — evaluating bottom-RF, board calibration, and pressure/temperature/reflected-power stability; one test set cut etch-rate std-dev from ~0.089 to ~0.043.",
        "Drove Pareto-led root cause and corrective action across a dry-etch fleet spanning <span class='text-foreground'>Lam, Applied Materials, TEL, SPTS, and Axcelis</span> — building PM/recovery docs, coordinating vendor field service, sourcing parts, and tightening post-PM startup/qual to reduce repeat down events.",
        "Troubleshot high-vacuum and plasma integrity — turbo-pump performance, base-pressure recovery, helium backside leakage, ESC clamping, and chamber seasoning/fingerprinting — establishing baseline tool behavior so abnormal states surface faster.",
      ],
      icon: <Cpu className="h-3.5 w-3.5" />,
      skills: ["Dry Etch", "High Vacuum", "RF / Match", "ESC / Dechuck", "PM / CAPA", "Tool Qual"],
      delay: 0.1,
    },
    {
      title: "Aircraft Metals Technician",
      company: "U.S. Air Force",
      period: "Feb 2015 – Dec 2018",
      description:
        "Maintained and repaired mission-critical aircraft hardware to exacting tolerances in zero-defect, high-pressure environments — the same precision-maintenance discipline now applied to fab tool reliability.",
      bullets: [
        "Precision machining, inspection, and failure analysis of flight-critical components under strict quality and safety standards.",
        "Operated in tight-turnaround maintenance teams where uptime and repeatability were non-negotiable.",
      ],
      icon: <Plane className="h-3.5 w-3.5" />,
      skills: ["Precision Hardware", "Tolerances", "Failure Analysis", "Maintenance Discipline"],
      delay: 0.25,
    },
    {
      title: "Physics Researcher",
      company: "University of San Diego",
      period: "Jan 2023 – Dec 2024",
      description:
        "Experimental soft-matter research with a first-author publication in Soft Matter — rigorous experimental method and quantitative root-cause analysis, the analytical core of process engineering.",
      bullets: [
        "Built quantitative image-analysis pipelines that cut required experimental data by ~99%.",
        "Translated messy experimental data into defensible, reproducible conclusions.",
      ],
      icon: <FlaskConical className="h-3.5 w-3.5" />,
      skills: ["Experimental Method", "Data Analysis", "Optics", "Python", "Publication"],
      delay: 0.4,
    },
  ];

  return (
    <section id="resume">
      <div className="container max-w-4xl mx-auto">
        <p className="mono-label mb-2">Experience</p>
        <h2 className="section-title">From flightline to fab</h2>

        <div className="relative border-l border-border pl-2 space-y-10 mt-10">
          {resumeItems.map((item, index) => (
            <ResumeItem key={index} {...item} />
          ))}
        </div>

        <div className="mt-10">
          <Button asChild variant="outline">
            <a href="/Gil_Martinez_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
