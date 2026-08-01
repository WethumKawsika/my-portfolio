import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/content";

function StatCard({ value, label, suffix = "+" }) {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref} className="glass-card p-6 text-center">
      <p className="font-heading text-3xl md:text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <SectionHeading
        eyebrow="About Me"
        title="The person behind the code"
        subtitle="A quick introduction to my background, focus areas, and what drives the way I build software."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="gradient-border">
            <div className="glass overflow-hidden rounded-2xl p-2">
              <img
                src="/about.jpg"
                alt="Alex working at a desk with two monitors"
                className="aspect-[4/5] w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 glass-card px-5 py-4">
            <FaMapMarkerAlt className="text-secondary" />
            <span className="text-sm font-medium">Based in Colombo, Sri Lanka</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-heading text-2xl font-bold text-white">
            Software Engineer specializing in AI-powered, cloud-native products
          </h3>
          <p className="mt-4 text-muted leading-relaxed">
            I'm a final-year HICT, GWUIM undergraduate student who builds
            full-stack applications, mobile apps, and machine-learning
            systems that solve real problems for real people. My work spans
            assistive technology, e-commerce platforms, and cloud
            infrastructure — always with a focus on shipping something that
            actually works in production, not just in a demo.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            When I'm not coding, I'm usually exploring new AI research,
            contributing to open-source tooling, or mentoring junior
            developers in my university's tech community.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card flex items-start gap-4 p-5">
              <FaGraduationCap className="mt-1 text-2xl text-primary shrink-0" />
              <div>
                <p className="font-semibold text-white">Education</p>
                <p className="text-sm text-muted">BSc (Hons) HICT, GWUIM</p>
              </div>
            </div>
            <div className="glass-card flex items-start gap-4 p-5">
              <FaBriefcase className="mt-1 text-2xl text-secondary shrink-0" />
              <div>
                <p className="font-semibold text-white">Experience</p>
                <p className="text-sm text-muted">3+ years across internships &amp; freelance work</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-white">Core Skills</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Python", "AWS", "TensorFlow", "Flutter", "Docker"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full glass px-4 py-1.5 text-xs font-medium text-muted"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
