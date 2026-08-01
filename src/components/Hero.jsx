import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowDown } from "react-icons/fa";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import AnimatedBackground from "./AnimatedBackground";

const socials = [
  { icon: FaGithub, href: import.meta.env.VITE_GITHUB_URL || "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaFacebook, href: import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/", label: "Facebook" },
  { icon: FaInstagram, href: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/", label: "Instagram" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:px-24 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="eyebrow">Software Engineer · AI &amp; Cloud Developer</span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I'm <span className="gradient-text">Wethum Kawsika</span>
          </h1>

          <div className="mt-3 h-10 font-heading text-xl sm:text-2xl font-semibold text-muted">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "AI & ML Engineer",
                2000,
                "Cloud Solutions Architect",
                2000,
                "Mobile App Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            I design and build reliable, scalable software — from AI-powered
            products to cloud-native platforms — with a focus on clean
            architecture and genuinely useful user experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="/cv.png" download className="btn-primary">
              <HiOutlineDownload className="text-lg" />
              Download CV
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              <HiOutlineMail className="text-lg" />
              Hire Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-lg text-muted transition-all duration-300 hover:text-white hover:border-primary/50 hover:shadow-glow"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl animate-float-slow" />
          <div className="relative gradient-border animate-float">
            <div className="overflow-hidden rounded-[2rem] glass p-2">
              <img
                src="/wethum.png"
                alt="Portrait of Wethum Kawsika"
                className="aspect-square w-full rounded-[1.5rem] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <FaArrowDown className="text-xl" />
      </motion.button>
    </section>
  );
}
