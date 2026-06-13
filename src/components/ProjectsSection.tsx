import { Zap, Gauge, Wrench, Layers } from "lucide-react";

interface WorkProps {
  index: string;
  title: string;
  tool: string;
  problem: string;
  action: string;
  result: string;
  tags: string[];
  icon: React.ReactNode;
  delay: number;
}

const WorkCard = ({
  index,
  title,
  tool,
  problem,
  action,
  result,
  tags,
  icon,
  delay,
}: WorkProps) => (
  <div
    className="panel panel-hover p-6 flex flex-col animate-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="mono-label-muted">{index}</span>
      <span className="text-accent">{icon}</span>
    </div>

    <h3 className="text-lg font-display font-medium mb-1">{title}</h3>
    <p className="font-mono text-xs text-accent mb-4">{tool}</p>

    <dl className="space-y-3 text-sm flex-grow">
      <div>
        <dt className="mono-label-muted mb-0.5">Problem</dt>
        <dd className="text-muted-foreground leading-relaxed">{problem}</dd>
      </div>
      <div>
        <dt className="mono-label-muted mb-0.5">Action</dt>
        <dd className="text-muted-foreground leading-relaxed">{action}</dd>
      </div>
      <div>
        <dt className="mono-label-muted mb-0.5">Result</dt>
        <dd className="text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: result }} />
      </div>
    </dl>

    <div className="flex flex-wrap mt-4 pt-4 border-t border-border">
      {tags.map((t) => (
        <span key={t} className="tech-badge">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => {
  const work: WorkProps[] = [
    {
      index: "01",
      title: "Chronic wafer-sticking recovery",
      tool: "Lam Rainbow / TCP 9600 — ESC / dechuck",
      problem:
        "Wafers chronically stuck after etch, gating the process to roughly one usable wafer per day.",
      action:
        "Traced it to wafer charge retention from a missing/inadequate dechuck step; identified the fix, then developed and verified the correction across affected processes.",
      result:
        "Restored stable wafer release and raised usable throughput from ~1 to ~36 wafers/day — a <span class='text-accent'>~36× improvement</span>.",
      tags: ["Dry Etch", "ESC", "Dechuck", "Recipe"],
      icon: <Zap className="h-5 w-5" />,
      delay: 0.05,
    },
    {
      index: "02",
      title: "Al / GaN etch tuning & RF stability",
      tool: "Lam TCP 9600 — BCl₃ / Cl₂ / N₂",
      problem:
        "Etch rate, uniformity, and chamber/process stability needed tightening on Al and GaN etch.",
      action:
        "Evaluated bottom-RF changes, RF-board calibration, and pressure / chamber-temperature / reflected-power stability, and how power partitioning drove etch performance.",
      result:
        "Demonstrated lower bottom-RF could improve uniformity — one test set cut std-dev from ~0.089 to ~0.043 — informing the rate/uniformity trade-off.",
      tags: ["RF / Bias", "Uniformity", "GaN", "Aluminum"],
      icon: <Gauge className="h-5 w-5" />,
      delay: 0.1,
    },
    {
      index: "03",
      title: "Dry-etch fleet sustaining",
      tool: "Lam · AMAT · TEL · SPTS · Axcelis",
      problem:
        "Recurring tool-down events across a multi-OEM dry-etch fleet were costing availability.",
      action:
        "Ran Pareto-led root cause and corrective action, built PM/recovery documentation, supported scheduled and unscheduled PMs, coordinated vendor field service, sourced parts, and tightened post-PM startup and qualification.",
      result:
        "Reduced repeat failures, made recovery more consistent, and shortened troubleshooting cycles across the fleet.",
      tags: ["Root Cause", "PM / CAPA", "Uptime", "Multi-OEM"],
      icon: <Wrench className="h-5 w-5" />,
      delay: 0.15,
    },
    {
      index: "04",
      title: "Chamber baseline & vacuum recovery",
      tool: "High-vacuum plasma tools — turbo / RF / ESC",
      problem:
        "Abnormal vacuum, plasma, and clamping behavior were hard to spot without a known-good baseline.",
      action:
        "Troubleshot vacuum integrity, pump-down and turbo performance, base-pressure recovery, plasma instability, helium leakage, ESC clamping, and chamber seasoning/fingerprinting.",
      result:
        "Established baseline tool behavior so deviations surface faster — a core part of keeping high-vacuum tools in spec.",
      tags: ["High Vacuum", "Turbo", "He Cooling", "Seasoning"],
      icon: <Layers className="h-5 w-5" />,
      delay: 0.2,
    },
  ];

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container">
        <p className="mono-label mb-2">Selected Work</p>
        <h2 className="section-title">Tools fixed, yield protected</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {work.map((w) => (
            <WorkCard key={w.index} {...w} />
          ))}
        </div>

        <p className="mt-6 text-xs font-mono text-muted-foreground">
          Figures reflect specific tools/processes; details discussed in interview.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
