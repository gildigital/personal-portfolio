import { Zap, Gauge, Activity, Wrench } from "lucide-react";

interface CapProps {
  index: string;
  title: string;
  body: string;
  tags: string[];
  icon: React.ReactNode;
  delay: number;
}

const CapCard = ({ index, title, body, tags, icon, delay }: CapProps) => (
  <div
    className="panel panel-hover p-6 animate-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-center justify-between mb-4">
      <span className="mono-label-muted">{index}</span>
      <span className="text-accent">{icon}</span>
    </div>
    <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{body}</p>
    <div className="flex flex-wrap">
      {tags.map((t) => (
        <span key={t} className="tech-badge">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const CapabilitiesSection = () => {
  const caps: CapProps[] = [
    {
      index: "02 / Etch",
      title: "Plasma & Dry Etch",
      body: "Hands-on plasma etch process and chamber hardware on RIE/ICP/TCP-class tools — recipe behavior, endpoint, chamber conditioning, and seasoning. Focused on etch rate, uniformity, selectivity, and profile control.",
      tags: ["RIE / ICP / TCP", "Al / GaN etch", "BCl₃ / Cl₂ / N₂", "Endpoint", "Uniformity"],
      icon: <Zap className="h-5 w-5" />,
      delay: 0.05,
    },
    {
      index: "03 / Vacuum",
      title: "High-Vacuum Systems",
      body: "Vacuum integrity from pump-down to base pressure — turbo pumps, chamber pressure control, helium backside cooling, and leak isolation. Restoring tools to baseline and catching abnormal states early.",
      tags: ["Turbo pumps", "Base-pressure recovery", "He backside cooling", "Leak isolation"],
      icon: <Gauge className="h-5 w-5" />,
      delay: 0.1,
    },
    {
      index: "04 / RF & Process",
      title: "RF / Bias & Process Stability",
      body: "RF delivery, matching networks, and bias tuning for stable plasma. Diagnosing reflected power, board calibration, pressure and temperature drift, and how power partitioning drives etch performance.",
      tags: ["RF / match", "Bias tuning", "Reflected power", "SPC", "Tool qualification"],
      icon: <Activity className="h-5 w-5" />,
      delay: 0.15,
    },
    {
      index: "05 / Reliability",
      title: "Tool Reliability & Uptime",
      body: "Pareto-led root cause and corrective action across an etch fleet. PM/recovery documentation, scheduled and unscheduled PMs, vendor field-service coordination, and disciplined post-maintenance startup and qual.",
      tags: ["Root cause / CAPA", "PM development", "ESC / dechuck", "Down-event reduction"],
      icon: <Wrench className="h-5 w-5" />,
      delay: 0.2,
    },
  ];

  const platforms = [
    "Lam Rainbow / TCP 9600",
    "AMAT Centura — DPS II Metal Gate",
    "AMAT 5200 DPS / Super-E",
    "AMAT eMax 300mm",
    "TEL Unity / Telius",
    "SPTS Omega FXP / Synapse / Rapier DSIE",
    "Axcelis Fusion ES asher",
  ];

  return (
    <section id="capabilities" className="bg-secondary/30">
      <div className="container">
        <p className="mono-label mb-2">Capabilities</p>
        <h2 className="section-title">What I keep running</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {caps.map((c) => (
            <CapCard key={c.index} {...c} />
          ))}
        </div>

        <div className="mt-12 panel p-6">
          <p className="mono-label-muted mb-4">Tool platforms — hands-on &amp; sustaining</p>
          <div className="flex flex-wrap">
            {platforms.map((p) => (
              <span key={p} className="tech-badge-accent">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
