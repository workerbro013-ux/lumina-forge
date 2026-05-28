import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch / coarse pointers
    if (typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }
    setVisible(true);

    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
    };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t?.closest("a, button, [role='button'], input, textarea, [data-cursor='hover']")) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 rounded-full bg-foreground mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[89] rounded-full transition-[width,height,border-color,background,backdrop-filter] duration-300 ease-out"
        style={{
          width: hover ? 64 : 40,
          height: hover ? 64 : 40,
          marginLeft: hover ? -12 : 0,
          marginTop: hover ? -12 : 0,
          border: "1px solid color-mix(in oklab, var(--cyan) 55%, transparent)",
          background: hover
            ? "radial-gradient(closest-side, oklch(0.82 0.11 215 / 0.18), transparent 70%)"
            : "transparent",
          backdropFilter: hover ? "blur(4px)" : "none",
          boxShadow: "0 0 30px -8px oklch(0.82 0.11 215 / 0.5)",
          willChange: "transform",
        }}
      />
    </>
  );
}
