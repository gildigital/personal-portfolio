import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Targets the radar "acquires". The animation delay is derived from each
// target's clockwise angle (from 12 o'clock) so a blip flares exactly as the
// sweep arm passes over it. `r` is the radius as a % of the scope.
const RADAR_DURATION = 4.5; // seconds — must match --radar-duration in index.css
const RADAR_TARGETS = [
  { a: 38, r: 30 },
  { a: 92, r: 19 },
  { a: 137, r: 37 },
  { a: 198, r: 26 },
  { a: 256, r: 35 },
  { a: 312, r: 16 },
];

const WaferGraphic = () => (
  <div className="relative mx-auto aspect-square w-[78%] max-w-sm">
    <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
    <svg
      viewBox="0 0 200 200"
      className="relative"
      style={{ filter: "drop-shadow(0 0 24px hsl(170 74% 55% / 0.25))" }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wafer" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#6E8BFF" stopOpacity="0.20" />
          <stop offset="55%" stopColor="#38E1C6" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#0A0E14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="92" fill="url(#wafer)" />
      {[88, 74, 60, 46, 32, 18].map((r) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="#38E1C6"
          strokeOpacity={0.18 + (90 - r) / 600}
          strokeWidth="0.6"
        />
      ))}
      {/* primary flat (wafer notch) */}
      <line x1="100" y1="192" x2="100" y2="178" stroke="#38E1C6" strokeOpacity="0.5" strokeWidth="1.2" />
      {/* die grid hint */}
      <g stroke="#6E8BFF" strokeOpacity="0.14" strokeWidth="0.5">
        {[-60, -40, -20, 0, 20, 40, 60].map((d) => (
          <line key={`v${d}`} x1={100 + d} y1="22" x2={100 + d} y2="178" />
        ))}
        {[-60, -40, -20, 0, 20, 40, 60].map((d) => (
          <line key={`h${d}`} x1="22" y1={100 + d} x2="178" y2={100 + d} />
        ))}
      </g>
    </svg>

    {/* Radar scope overlay: range rings, crosshair, sweep arm, target blips */}
    <div className="radar" aria-hidden="true">
      <div className="radar-rings" />
      <div className="radar-cross" />
      <div className="radar-sweep" />
      {RADAR_TARGETS.map(({ a, r }) => {
        const rad = (a * Math.PI) / 180;
        return (
          <span
            key={a}
            className="radar-blip"
            style={{
              left: `${50 + r * Math.sin(rad)}%`,
              top: `${50 - r * Math.cos(rad)}%`,
              animationDelay: `${(a / 360) * RADAR_DURATION}s`,
            }}
          />
        );
      })}
      <div className="radar-hub" />
    </div>
  </div>
);

const HeroSection = () => {
  const chips = ["Dry Etch", "Plasma", "High Vacuum", "RF / Bias", "ESC / Dechuck", "Chamber Recovery"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden wafer-bg"
    >
      <div className="absolute inset-0 grid-lines opacity-[0.35] pointer-events-none" />

      <div className="container relative grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <p className="mono-label">01 / Equipment Engineer</p>

          <h1 className="leading-[1.05]">
            Plasma. Vacuum. Yield.
            <br />
            <span className="text-gradient">Engineered for uptime.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            Semiconductor equipment engineer for <span className="text-foreground">dry etch</span> and{" "}
            <span className="text-foreground">high-vacuum</span> toolsets — keeping front-end fab tools at
            production, backed by a physicist&apos;s grasp of the process underneath.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {chips.map((c) => (
              <span key={c} className="tech-badge-accent">
                {c}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-3">
            <Button asChild size="lg" className="group">
              <a href="#resume">
                View Experience{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/Gil_Martinez_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
          <WaferGraphic />
          <div className="mt-6 panel px-5 py-3 inline-flex items-center gap-3 mx-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <p className="font-mono text-sm text-muted-foreground">
              Equipment Engineer @ <span className="text-foreground">Skorpios Technologies</span>
            </p>
          </div>
        </div>
      </div>

      {/* Headline metrics strip */}
      <div className="container relative mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {[
            { n: "36×", l: "throughput recovered on a stuck-wafer process" },
            { n: "5+", l: "OEM etch platforms sustained (Lam, AMAT, TEL, SPTS, Axcelis)" },
            { n: "300mm", l: "front-end wafer fab experience" },
            { n: "1st", l: "author, peer-reviewed Soft Matter publication" },
          ].map((s) => (
            <div key={s.n} className="bg-card p-5">
              <div className="stat-num text-2xl md:text-3xl">{s.n}</div>
              <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
