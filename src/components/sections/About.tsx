import { motion } from "framer-motion";
import portrait from "@/assets/puskar-portrait.png";

const stats = [
  { k: "4th", v: "BCA Semester" },
  { k: "2+", v: "Years Coding" },
  { k: "10+", v: "Projects Built" },
  { k: "∞", v: "Curiosity" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
      >
        — About
      </motion.p>

      <div className="grid gap-12 md:grid-cols-12 md:items-start">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-4"
        >
          <div className="group relative">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--ring) 55%, transparent), transparent 65%)",
              }}
            />
            {/* Frame */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-secondary/40">
              <motion.img
                src={portrait}
                alt="Puskar Thapa Magar portrait"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-square w-full object-cover"
              />
              {/* Gradient veil */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--background) 75%, transparent))",
                }}
              />
              {/* Grain */}
              <div aria-hidden className="pointer-events-none absolute inset-0 noise opacity-40" />
              {/* Corner label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="font-display text-xs uppercase tracking-[0.35em] text-foreground/80">
                    Puskar
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Kathmandu · Nepal
                  </div>
                </div>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.7)]" />
              </div>
            </div>
            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-foreground/80"
            >
              BCA · 4th Sem
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl font-semibold leading-tight tracking-tight md:col-span-8 md:text-4xl lg:text-5xl"
        >
          A <span className="gradient-text">TU BCA</span> student who turns curiosity into
          working projects. Learning Java, exploring frontend, and building real things —
          not waiting for permission.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 md:col-span-8 md:col-start-5"
        >
          <p className="font-display text-sm uppercase tracking-[0.35em] text-foreground/80">
            Projects &gt; Promises
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            I'm Puskar — 4th semester BCA student at Tribhuvan University. I don't know
            everything, and that's exactly why I build. Every project teaches me something.
            Every mistake makes me sharper. I'm not trying to look like a developer today —
            I'm trying to become one for a lifetime.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            I believe success doesn't come from knowing everything upfront. It comes from
            showing up, staying curious, and putting in the work now so later means
            something. I'm learning quietly, building honestly, and growing every single
            day. Not fast. But steady. And one day, all this learning will turn into
            something meaningful.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/40 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative bg-background p-8 transition-colors hover:bg-secondary/60"
          >
            <div className="font-display text-4xl font-bold gradient-text">{s.k}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
