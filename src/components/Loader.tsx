import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="absolute inset-0 noise opacity-60" />
          <div className="relative flex flex-col items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-display text-base font-medium tracking-[0.2em] text-foreground md:text-lg"
            >
              PUSKAR
            </motion.h1>

            <div className="flex w-[240px] flex-col gap-3">
              <div className="relative h-px w-full overflow-hidden bg-foreground/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-foreground"
                  style={{ width: `${pct}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="flex items-center justify-between font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                <span>Loading</span>
                <span>{pct.toString().padStart(3, "0")}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
