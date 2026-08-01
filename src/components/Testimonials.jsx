import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-padding bg-white/[0.015]">
      <SectionHeading
        eyebrow="Testimonials"
        title="What people say"
        subtitle="Feedback from mentors, clients, and colleagues I've worked with."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-7"
          >
            <FaQuoteLeft className="text-2xl text-primary/50" />
            <p className="mt-4 text-sm text-muted leading-relaxed italic">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
