import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiOpenjdk, SiC, SiCanva,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, level: 70, tag: "Intermediate", color: "#E34F26" },
  { name: "CSS", icon: SiCss, level: 70, tag: "Intermediate", color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, level: 55, tag: "More than beginner", color: "#F7DF1E" },
  { name: "React.js", icon: SiReact, level: 35, tag: "Beginner", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 60, tag: "Learning", color: "#38BDF8" },
  { name: "Java", icon: SiOpenjdk, level: 20, tag: "Just started", color: "#ED8B00" },
  { name: "C Programming", icon: SiC, level: 40, tag: "More than beginner", color: "#A8B9CC" },
  { name: "Canva", icon: SiCanva, level: 65, tag: "Graphic design", color: "#00C4CC" },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-14 flex items-end justify-between gap-6">
        <div>
          <p className="mb-6 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            — Toolkit
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Tools I build with
          </h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 glass p-6 transition-all hover:border-foreground/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: s.color }}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl border border-border/60 bg-background/60 transition-colors"
                  style={{ color: s.color }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full gradient-aurora"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
