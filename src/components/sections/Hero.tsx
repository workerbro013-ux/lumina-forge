import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { Particles } from "@/components/Particles";

const ROLES = ["Java Learner", "Frontend Developer", "Creative Problem Solver", "Future Software Engineer"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  const name = "Puskar Thapa Magar";

  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 noise" />
      <div className="absolute -left-40 top-1/4 -z-10 h-[520px] w-[520px] rounded-full gradient-aurora opacity-30 blur-3xl animate-aurora" />
      <div className="absolute -right-40 bottom-0 -z-10 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.16 200), transparent 60%)" }} />
      <Particles count={36} />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for collaborations · 2026
        </motion.div>

        <h1 className="font-display text-[14vw] font-bold leading-[0.95] tracking-tighter sm:text-[10vw] md:text-[8rem] lg:text-[9.5rem]">
          {name.split(" ").map((word, wi) => (
            <span key={wi} className="mr-[0.18em] inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={"inline-block " + (wi === 1 ? "gradient-text animate-shimmer" : "")}
                style={wi === 1 ? { backgroundImage: "linear-gradient(120deg, oklch(0.85 0.16 200), oklch(0.65 0.27 295), oklch(0.82 0.12 350), oklch(0.85 0.16 200))" } : undefined}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 grid items-end gap-8 md:grid-cols-2"
        >
          <div>
            <p className="text-base text-muted-foreground md:text-lg">
              BCA Student &amp; Aspiring Software Developer crafting modern, performant interfaces
              with motion and meaning.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-foreground/60" />
              <div className="relative h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[i]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="block font-display text-base font-medium tracking-wide"
                  >
                    {ROLES[i]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span className="h-px flex-1 bg-border" />
          Scroll to explore
          <span className="h-px flex-1 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
