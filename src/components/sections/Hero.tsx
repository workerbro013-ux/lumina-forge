import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { Particles } from "@/components/Particles";

const ROLES = ["Java Enthusiast", "Frontend Developer", "Creative Problem Solver", "Future Software Engineer"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  const name = "Puskar Thapa Magar";

  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
      {/* Minimal cinematic background — theme aware */}
      {/* Soft vignette using foreground/background tokens */}
      <div aria-hidden className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(900px 600px at 50% 30%, color-mix(in oklab, var(--foreground) 5%, transparent), transparent 70%)",
        }}
      />
      {/* Faint dot field */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--foreground) 18%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Single subtle ambient orb */}
      <div aria-hidden className="absolute left-1/2 top-1/3 -z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--ring) 35%, transparent), transparent 65%)" }} />
      {/* Hairline horizons */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px"
        style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--foreground) 18%, transparent), transparent)" }} />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-32"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }} />
      <div className="absolute inset-0 -z-10 noise" />

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
                style={wi === 1 ? { backgroundImage: "linear-gradient(120deg, oklch(0.98 0.002 240), oklch(0.82 0.11 215), oklch(0.65 0.06 230), oklch(0.98 0.002 240))" } : undefined}
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
              A BCA student who loves software creation and isn't afraid to start from zero.
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
