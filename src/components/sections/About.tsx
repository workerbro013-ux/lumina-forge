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
          A <span className="gradient-text">TU BCA</span> student turning curiosity into
          interfaces — passionate about Java, frontend craft and building modern, expressive
          web experiences.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 text-muted-foreground md:col-span-5"
        >
          <p>
            I'm Puskar — currently in my 4th semester of BCA at Tribhuvan University. My focus
            sits at the intersection of clean architecture and delightful design.
          </p>
          <p>
            I'm always learning, building and shipping. From small experiments to full apps,
            every project is an opportunity to sharpen craft.
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
