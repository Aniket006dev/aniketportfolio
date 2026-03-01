import { Github, Linkedin, Code, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Aniket006dev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aniket-mishra-8390a4253/", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Aniket_dev/", label: "Code" },
];

const footerLinks = [
  // { href: "#summary", label: "Summary" },
  // { href: "#projects", label: "Projects" },
  // { href: "#experience", label: "Experience" },
  // { href: "#contact", label: "Contact" },
  { href: "#", label: "Back to top" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              AM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Aniket Mishra. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex justify-center gap-1.5"
              >
                {link.label}
                <ArrowUp className="w-5 h-5"></ArrowUp>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};