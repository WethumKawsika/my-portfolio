import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative section-padding">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        subtitle="My formal education, diplomas, and the institutions that shaped my technical foundation."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-7"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-xl text-white shadow-glow">
              <FaGraduationCap />
            </div>
            <p className="text-xs font-medium text-secondary">{item.period}</p>
            <h3 className="mt-2 font-heading text-lg font-bold text-white leading-snug">
              {item.degree}
            </h3>
            <p className="mt-2 text-sm font-medium text-muted">{item.institution}</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
