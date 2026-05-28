import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
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
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative grid h-16 w-16 place-items-center rounded-full gradient-aurora"
            >
              <span className="absolute inset-0 animate-ping rounded-full gradient-aurora opacity-40" />
              <span className="relative font-display text-sm font-bold text-background">PM</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-[2px] gradient-aurora"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-display text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Initializing
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
