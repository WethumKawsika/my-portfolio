import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects, projectFilters } from "../data/projects";

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="group glass-card overflow-hidden cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />
        <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-medium text-white">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-white group-hover:gradient-text transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto glass-card p-0"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full glass text-white"
            aria-label="Close project details"
          >
            <FaTimes />
          </button>
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover"
          />
          <div className="p-8">
            <span className="eyebrow">{project.category}</span>
            <h3 className="font-heading text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-4 text-muted leading-relaxed">{project.longDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FaGithub /> View Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative section-padding">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've built"
        subtitle="A selection of projects spanning AI, mobile, full-stack web, and cloud infrastructure."
      />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "glass text-muted hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
