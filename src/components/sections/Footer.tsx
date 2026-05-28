import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Facebook, Instagram, Mail } from "lucide-react";

const socials = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: MessageCircle, href: "#", label: "Chat" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Mail, href: "mailto:hello@puskar.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden">
      {/* Background watermark */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <span
          className="select-none font-display font-bold leading-none tracking-tighter text-foreground/[0.05]"
          style={{ fontSize: "clamp(8rem, 26vw, 22rem)" }}
        >
          PUSKAR
        </span>
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 noise" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          {/* Left: quote */}
          <div className="md:col-span-7">
            <p className="mb-5 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Puskar Thapa Magar
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              Still learning.
              <br />
              <span className="italic font-normal text-muted-foreground/80">Still building.</span>
            </motion.h2>
          </div>

          {/* Right: elsewhere */}
          <div className="md:col-span-5 md:text-right">
            <p className="mb-5 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Elsewhere
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-border/70" />

        {/* Bottom meta */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Puskar Thapa Magar</span>
          <span className="text-center">Crafted in Kathmandu · Built with React &amp; Motion</span>
          <span>v1.0 · 2026</span>
        </div>
      </div>
    </footer>
  );
}
