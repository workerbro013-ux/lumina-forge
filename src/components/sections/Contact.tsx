import { motion } from "framer-motion";
import { Github, Mail, Send, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/60 glass p-8 md:p-16">
        <div
          aria-hidden
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full gradient-aurora opacity-30 blur-3xl animate-aurora"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 right-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.85 0.16 200), transparent 60%)" }}
        />

        <div className="relative grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 font-display text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              — Contact
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            >
              Let's build something <span className="gradient-text">unforgettable</span>.
            </motion.h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Have a project, idea or opportunity? Drop a message — I usually respond within 24 hours.
            </p>

            <div className="mt-10 space-y-3">
              <a href="mailto:hello@puskar.dev" className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-border/60 transition-colors group-hover:bg-secondary">
                  <Mail className="h-4 w-4" />
                </span>
                hello@puskar.dev
              </a>
              <div className="flex items-center gap-2 pt-4">
                {[
                  { Icon: Github, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Twitter, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all hover:scale-110 hover:border-foreground/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-5"
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.id} className="group relative">
                <input
                  required
                  id={f.id}
                  type={f.type}
                  placeholder=" "
                  className="peer h-14 w-full rounded-2xl border border-border/60 bg-background/40 px-4 pt-5 text-sm text-foreground outline-none transition-all focus:border-foreground/40 focus:bg-background/70 focus:shadow-[0_0_0_4px_oklch(0.65_0.27_295/0.15)]"
                />
                <label
                  htmlFor={f.id}
                  className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest"
                >
                  {f.label}
                </label>
              </div>
            ))}
            <div className="group relative">
              <textarea
                required
                id="msg"
                rows={5}
                placeholder=" "
                className="peer w-full rounded-2xl border border-border/60 bg-background/40 px-4 pb-3 pt-6 text-sm text-foreground outline-none transition-all focus:border-foreground/40 focus:bg-background/70 focus:shadow-[0_0_0_4px_oklch(0.65_0.27_295/0.15)]"
              />
              <label
                htmlFor="msg"
                className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest"
              >
                Message
              </label>
            </div>

            <MagneticButton variant="primary">
              {sent ? "Sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
}
