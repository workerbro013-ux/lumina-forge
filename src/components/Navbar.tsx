import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 200);
    setScrolled(latest > 30);
  });

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border/40 px-5 py-3 transition-all",
          scrolled ? "glass" : "bg-transparent"
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.2em]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-border/60 text-[10px]">
            P
          </span>
          <span className="hidden sm:inline">PUSKAR</span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-foreground transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full border border-border/60 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-secondary md:inline-block"
          >
            Let's talk
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl glass p-4 md:hidden"
        >
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.25em] text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
