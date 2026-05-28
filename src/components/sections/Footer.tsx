import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Mail, href: "mailto:hello@puskar.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border/40 pt-24">
      {/* Animated glow line at top */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div
          className="absolute inset-y-0 w-1/3 animate-line-sweep"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.82 0.11 215 / 0.8), transparent)",
          }}
        />
      </div>

      {/* Noise + grid */}
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div aria-hidden className="absolute inset-0 -z-10 noise" />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.11 215 / 0.35), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Top: quote + socials */}
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-6 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              — Manifesto
            </p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl"
            >
              Still <span className="italic text-muted-foreground">learning</span>.{" "}
              <br className="hidden md:block" />
              Still <span className="gradient-text">building</span>.
            </motion.p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              “Code is the closest thing we have to magic — every line is a chance to make something
              that didn't exist yesterday.”
            </p>
          </div>

          <div className="md:col-span-5 md:text-right">
            <p className="mb-6 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              — Elsewhere
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative grid h-11 w-11 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:border-foreground/40 hover:text-foreground hover:shadow-[0_0_30px_-8px_oklch(0.82_0.11_215/0.6)]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            Navigate
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-display text-xs uppercase tracking-[0.35em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom meta */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/40 py-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Puskar Thapa Magar</span>
          <span>Crafted in Kathmandu · Built with React & Motion</span>
          <span>v1.0 · 2026</span>
        </div>
      </div>

      {/* Huge watermark */}
      <div aria-hidden className="pointer-events-none relative -mt-10 overflow-hidden">
        <div
          className="select-none whitespace-nowrap text-center font-display font-bold leading-none tracking-tighter text-foreground/[0.04]"
          style={{
            fontSize: "clamp(8rem, 28vw, 22rem)",
            filter: "blur(2px)",
          }}
        >
          PUSKAR
        </div>
      </div>
    </footer>
  );
}
