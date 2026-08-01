import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative section-padding">
      <SectionHeading
        eyebrow="Services"
        title="How I can help"
        subtitle="From idea to deployment — the core services I offer clients and collaborators."
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group glass-card p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-2xl text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon />
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
