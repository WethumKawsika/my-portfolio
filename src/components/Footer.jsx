import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowUp } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: import.meta.env.VITE_GITHUB_URL || "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaFacebook, href: import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/", label: "Facebook" },
  { icon: FaInstagram, href: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/", label: "Instagram" },
];

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 px-6 py-14 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-heading text-xl font-bold gradient-text">Portfolio.</p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Building thoughtful software at the intersection of AI, cloud, and
            great user experience.
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-semibold text-white">Quick Links</p>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-semibold text-white">Connect</p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted transition-all hover:text-white hover:border-primary/50"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-4 border-t border-white/5 pt-8 text-center sm:flex-row sm:justify-between">
        <p className="text-xs text-muted">
          &copy; {year} Alex Perera. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted transition-all hover:text-white hover:-translate-y-1"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
