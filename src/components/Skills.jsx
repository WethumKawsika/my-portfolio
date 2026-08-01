import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

function SkillBar({ skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="glass-card p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon className="text-xl text-secondary" />
          <span className="text-sm font-semibold text-white">{skill.name}</span>
        </div>
        <span className="text-xs font-medium text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative section-padding bg-white/[0.015]">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        subtitle="A categorized overview of the languages, frameworks, and platforms I use to ship reliable software."
      />

      <div className="mx-auto max-w-6xl">
        {/* Category tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "glass text-muted hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {current.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
