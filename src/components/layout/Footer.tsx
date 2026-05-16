import Link from "next/link";
import { siteConfig } from "@/lib/constants";

const footerLinks = {
  main: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "GitHub", href: siteConfig.author.github },
    { name: "LinkedIn", href: siteConfig.author.linkedin },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">{siteConfig.author.name}</h3>
            <p className="text-sm text-foreground/60 max-w-xs">
              Full-Stack Software Engineer specializing in Enterprise SaaS, Cross-Platform Mobile
              Apps, and IoT Integration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                {siteConfig.author.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <p className="text-sm text-foreground/60 text-center">
            © {currentYear} {siteConfig.author.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
