import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding bg-white/[0.015]">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous learning"
        subtitle="Professional certifications from AWS, Google, Cisco, Microsoft, and beyond."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            className="glass-card flex items-start gap-4 p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass text-xl text-secondary">
              <FaCertificate />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted">{cert.logo}</p>
              <h3 className="mt-1 font-heading text-base font-bold text-white leading-snug">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer} &middot; {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
