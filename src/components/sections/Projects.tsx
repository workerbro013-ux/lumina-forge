import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { MouseEvent, useRef } from "react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  github?: string;
  span?: string;
  accent: string;
  preview: string; // small visual id
};

const featured: Project[] = [
  {
    title: "Ecommerce Website",
    description: "Modern shop with cart, checkout flow and responsive product grids.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "linear-gradient(135deg, oklch(0.72 0.22 250), oklch(0.65 0.27 295))",
    span: "md:col-span-7 md:row-span-2",
    preview: "shop",
  },
  {
    title: "Cara Ecommerce",
    description: "Fully responsive multi-page commerce experience.",
    tech: ["HTML", "CSS", "JS"],
    accent: "linear-gradient(135deg, oklch(0.82 0.12 350), oklch(0.65 0.27 295))",
    span: "md:col-span-5",
    preview: "cara",
  },
  {
    title: "Weather App",
    description: "Live forecasts with elegant glass cards and API integration.",
    tech: ["JS", "API"],
    accent: "linear-gradient(135deg, oklch(0.85 0.16 200), oklch(0.72 0.22 250))",
    span: "md:col-span-5",
    preview: "weather",
  },
  {
    title: "Currency Converter",
    description: "Real-time conversion across 150+ currencies.",
    tech: ["JS", "API"],
    accent: "linear-gradient(135deg, oklch(0.7 0.18 160), oklch(0.85 0.16 200))",
    span: "md:col-span-4",
    preview: "currency",
  },
  {
    title: "To-Do App",
    description: "Minimal task manager with persistent local state.",
    tech: ["React"],
    accent: "linear-gradient(135deg, oklch(0.82 0.12 350), oklch(0.72 0.22 250))",
    span: "md:col-span-3",
    preview: "todo",
  },
];

const small = [
  { title: "Rock Paper Scissors", tech: ["JS"] },
  { title: "Tic Tac Toe", tech: ["JS"] },
];

function TiltCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const gx = useTransform(mx, (v) => `${v * 100}%`);
  const gy = useTransform(my, (v) => `${v * 100}%`);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 glass p-6 transition-shadow hover:shadow-[0_30px_80px_-30px_oklch(0.65_0.27_295/0.5)]",
        p.span
      )}
    >
      {/* Glow follower */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${gx.get()} ${gy.get()}, oklch(0.85 0.16 200 / 0.18), transparent 50%)`,
        }}
      />

      {/* Preview visual */}
      <div
        className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-border/60"
        style={{ background: p.accent }}
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 noise" />
        <div className="absolute left-4 top-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        </div>
        <div className="absolute inset-x-6 bottom-6 rounded-xl bg-black/30 p-3 backdrop-blur-md">
          <div className="h-1.5 w-2/3 rounded-full bg-white/70" />
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            <div className="h-6 rounded bg-white/30" />
            <div className="h-6 rounded bg-white/20" />
            <div className="h-6 rounded bg-white/30" />
          </div>
        </div>
        <motion.div
          aria-hidden
          className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <a
            href={p.href ?? "#"}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live
          </a>
          <a
            href={p.github ?? "#"}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-6 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            — Selected Work
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Projects that push <span className="gradient-text">craft</span> forward
          </h2>
        </div>
        <a href="#contact" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          Start a project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Bento grid */}
      <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-12">
        {featured.map((p) => (
          <TiltCard key={p.title} p={p} />
        ))}
      </div>

      {/* Smaller projects */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {small.map((s) => (
          <motion.a
            key={s.title}
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between rounded-2xl border border-border/60 glass p-5 transition-colors hover:border-foreground/30"
          >
            <div>
              <div className="font-display text-base font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.tech.join(" · ")}</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
