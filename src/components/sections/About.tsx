import { motion } from "framer-motion";

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

      <div className="grid gap-12 md:grid-cols-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl font-semibold leading-tight tracking-tight md:col-span-7 md:text-5xl"
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
          className="space-y-4 md:col-span-5"
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
