import { motion } from "framer-motion";
import { Github, Mail, Send, Linkedin, Instagram, Facebook, Phone, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { MagneticButton } from "@/components/MagneticButton";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbnoegk";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (res.ok) {
        toast.success("Message sent. I'll get back to you soon.");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        toast.error(data?.errors?.[0]?.message ?? "Failed to send. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="border-glow relative overflow-hidden rounded-[2rem] border border-border/60 glass p-8 md:p-16">
        <div
          aria-hidden
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.82 0.11 215), transparent 60%)" }}
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
              className="font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl"
            >
              Let's build something <span className="gradient-text">unforgettable</span>.
            </motion.h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Have a project, idea or opportunity? Drop a message — I usually respond within 24 hours.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:puskarmagar0215@gmail.com"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-border/60 transition-colors group-hover:bg-secondary">
                  <Mail className="h-4 w-4" />
                </span>
                puskarmagar0215@gmail.com
              </a>
              <a
                href="tel:+9779766479723"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-border/60 transition-colors group-hover:bg-secondary">
                  <Phone className="h-4 w-4" />
                </span>
                +977 9766479723
              </a>
              <p className="text-xs text-muted-foreground">Kathmandu, Nepal</p>
              <div className="flex items-center gap-2 pt-4">
                {[
                  { Icon: Github, href: "https://github.com/puskar29" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/puskar-thapa-magar-0a5b09365/" },
                  { Icon: FaWhatsapp, href: "https://wa.me/9779766479723" },
                  { Icon: Facebook, href: "https://www.facebook.com/puskar.magar.453520/" },
                  { Icon: Instagram, href: "https://www.instagram.com/puskar_magar02/" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all hover:scale-110 hover:border-foreground/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.id} className="group relative">
                <input
                  required
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  placeholder=" "
                  maxLength={f.id === "email" ? 255 : 100}
                  className="peer h-14 w-full rounded-2xl border border-border/60 bg-background/40 px-4 pt-5 text-sm text-foreground outline-none transition-all focus:border-foreground/40 focus:bg-background/70 focus:shadow-[0_0_0_4px_oklch(0.82_0.11_215/0.12)]"
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
                id="message"
                name="message"
                rows={5}
                maxLength={2000}
                placeholder=" "
                className="peer w-full rounded-2xl border border-border/60 bg-background/40 px-4 pb-3 pt-6 text-sm text-foreground outline-none transition-all focus:border-foreground/40 focus:bg-background/70 focus:shadow-[0_0_0_4px_oklch(0.82_0.11_215/0.12)]"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest"
              >
                Message
              </label>
            </div>

            <MagneticButton variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  Sending <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
}
