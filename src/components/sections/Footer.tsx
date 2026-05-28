import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
  { Icon: Github, href: "https://github.com/puskar29", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/puskar-thapa-magar-0a5b09365/", label: "LinkedIn" },
  { Icon: FaWhatsapp, href: "https://wa.me/9779766479723", label: "WhatsApp" },
  { Icon: Facebook, href: "https://www.facebook.com/puskar.magar.453520/", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/puskar_magar02/", label: "Instagram" },
  { Icon: Mail, href: "mailto:puskarmagar0215@gmail.com", label: "Email" },
  { Icon: Phone, href: "tel:+9779766479723", label: "Phone" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden">
      {/* Background watermark with subtle parallax breathing */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="select-none font-display font-bold leading-none tracking-tighter text-foreground/[0.05]"
          style={{ fontSize: "clamp(8rem, 26vw, 22rem)" }}
        >
          PUSKAR
        </motion.span>
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 noise" />

      {/* Soft cyan glow */}
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/2 -z-10 h-[320px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.11 215 / 0.5), transparent 65%)" }}
      />

      {/* Top hairline sweep */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <span className="absolute inset-y-0 w-1/3 animate-line-sweep"
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.11 215 / 0.7), transparent)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-24">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
          {/* Left: quote */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-foreground/40" />
              <span className="font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
                Puskar Thapa Magar
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl"
            >
              Still learning.
              <br />
              <span className="italic font-normal text-muted-foreground/80">
                Still building.
              </span>
            </motion.h2>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Start a conversation
              <span className="grid h-7 w-7 place-items-center rounded-full border border-border/60 transition-all duration-300 group-hover:border-foreground/60 group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          </div>

          {/* Right: elsewhere */}
          <div className="md:col-span-5 md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 md:justify-end"
            >
              <span className="font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
                Elsewhere
              </span>
              <span className="h-px w-8 bg-foreground/40" />
            </motion.div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="group relative grid h-11 w-11 place-items-center rounded-full border border-border/60 text-muted-foreground transition-colors duration-300 hover:border-foreground/40 hover:text-foreground"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(closest-side, oklch(0.82 0.11 215 / 0.25), transparent 70%)",
                      boxShadow: "0 0 30px -6px oklch(0.82 0.11 215 / 0.5)",
                    }}
                  />
                  <Icon className="relative h-3.5 w-3.5" />
                </motion.a>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-[11px] text-muted-foreground"
            >
              puskarmagar0215@gmail.com · Kathmandu, Nepal
            </motion.p>
          </div>
        </div>

        {/* Animated divider */}
        <div className="relative mt-16 h-px w-full overflow-hidden bg-border/60">
          <motion.span
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.82 0.11 215 / 0.8), transparent)",
            }}
          />
        </div>

        {/* Bottom meta */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Puskar Thapa Magar</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            v1.0 · 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
