import { contactLinks } from "@/lib/content";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Andrew Xiong
        </p>
        <nav className="flex items-center gap-6" aria-label="Contact links">
          {contactLinks.map((link) => {
            const Icon = link.icon ? iconMap[link.icon] : null;
            return (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel={
                  link.platform !== "email"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={link.ariaLabel}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 text-sm"
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}

