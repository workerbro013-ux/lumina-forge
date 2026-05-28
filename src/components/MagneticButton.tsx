import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export function MagneticButton({ children, href, onClick, variant = "primary", className }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15 });
  const y = useSpring(my, { stiffness: 200, damping: 15 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors";
  const variants = {
    primary:
      "text-primary-foreground bg-foreground hover:bg-foreground/90 shadow-[0_10px_40px_-10px_oklch(0.65_0.27_295/0.6)]",
    ghost: "text-foreground border border-border/60 hover:border-foreground/40 glass",
  } as const;

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, oklch(0.85 0.16 200 / 0.35), transparent 60%)",
        }}
      />
    </>
  );

  const props = {
    ref: ref as any,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { x, y } as any,
    className: cn(base, variants[variant], className),
  };

  if (href) {
    return (
      <motion.a href={href} {...props}>
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button onClick={onClick} {...props}>
      {inner}
    </motion.button>
  );
}
