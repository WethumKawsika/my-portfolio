import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

const typeColors = {
  Internship: "bg-primary",
  Freelance: "bg-secondary",
  "University Project": "bg-accent",
  Achievement: "bg-gradient-primary",
};

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-white/[0.015]">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've spent my time"
        subtitle="Internships, freelance work, university projects, and achievements that shaped how I build."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />

        <div className="flex flex-col gap-10">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row md:items-center gap-6 pl-12 md:pl-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <span
                className={`absolute left-4 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full ${typeColors[item.type] || "bg-primary"} ring-4 ring-bg md:left-1/2`}
              />

              <div className="md:w-1/2 md:px-8">
                <div className={`glass-card p-6 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <span className="eyebrow !mb-2">{item.type}</span>
                  <h3 className="font-heading text-lg font-bold text-white">{item.role}</h3>
                  <p className="text-sm font-medium text-secondary">{item.org}</p>
                  <p className="mt-1 text-xs text-muted">{item.period}</p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
