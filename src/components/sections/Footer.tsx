import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-10 pt-10">
      <div className="border-t border-border/60 pt-10">
        <p className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          “Code is the closest thing we have to <span className="gradient-text">magic</span>.”
        </p>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full gradient-aurora text-[9px] text-background">
              PM
            </span>
            © {new Date().getFullYear()} Puskar Thapa Magar. Crafted with care.
          </div>
          <div className="flex items-center gap-2">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full border border-border/60 transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
