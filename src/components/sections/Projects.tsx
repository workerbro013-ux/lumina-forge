import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { MouseEvent, useRef } from "react";
import { cn } from "@/lib/utils";

type Project = {
  n: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
};

const projects: Project[] = [
  {
    n: "01",
    title: "Ecommerce Website",
    description: "Modern shop with cart, checkout flow and fully responsive product grids.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    n: "02",
    title: "Cara Ecommerce",
    description: "Multi-page commerce experience with elegant product detail flows.",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    n: "03",
    title: "Weather App",
    description: "Live forecasts with glass UI, geolocation and real-time API integration.",
    tech: ["JavaScript", "REST API"],
  },
  {
    n: "04",
    title: "Currency Converter",
    description: "Real-time conversion across 150+ currencies with crisp typography.",
    tech: ["JavaScript", "API"],
  },
  {
    n: "05",
    title: "To-Do App",
    description: "Minimal task manager with persistent local state and smooth motion.",
    tech: ["React"],
  },
  {
    n: "06",
    title: "Mini Games Suite",
    description: "Rock paper scissors and tic-tac-toe with refined micro-interactions.",
    tech: ["JavaScript"],
  },
];

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 200, damping: 22 });
  const ry = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 200, damping: 22 });
  const gx = useTransform(mx, (v) => `${v * 100}%`);
  const gy = useTransform(my, (v) => `${v * 100}%`);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
      className={cn(
        "border-glow group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-7 backdrop-blur-xl",
        "transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_oklch(0.82_0.11_215/0.3)]"
      )}
    >
      {/* Hover spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [gx, gy] as any,
            ([x, y]: any) =>
              `radial-gradient(420px circle at ${x} ${y}, oklch(0.82 0.11 215 / 0.12), transparent 55%)`
          ) as any,
        }}
      />

      <div className="relative flex items-start justify-between">
        <span className="font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
          {p.n} / Project
        </span>
        <div className="flex items-center gap-1.5">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source"
              className="grid h-8 w-8 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-foreground/40 hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={p.href ?? "#"}
            target={p.href ? "_blank" : undefined}
            rel={p.href ? "noopener noreferrer" : undefined}
            aria-label="Open"
            className="grid h-8 w-8 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all group-hover:border-foreground/60 group-hover:text-foreground"
          >
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="relative mt-14 flex flex-1 flex-col">
        <h3 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          {p.title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-background/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom glow line */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-5 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            — Selected Work
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
            Projects engineered with <span className="gradient-text">precision</span>.
          </h2>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          Start a project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.n} p={p} />
        ))}
      </div>
    </section>
  );
}
