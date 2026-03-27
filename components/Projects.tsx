"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  Car,
  Monitor,
  ArrowRight,
  FileText,
  Terminal,
  Smartphone,
} from "lucide-react";
import { projects, competencesBTS } from "@/lib/projects";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Monitor,
  Terminal,
  Smartphone,
  Layers,
};

const statusLabel: Record<string, { label: string; color: string }> = {
  production: { label: "En production", color: "text-emerald-400 bg-emerald-400/10" },
  "en-cours": { label: "En cours", color: "text-accent bg-accent/10" },
  terminé: { label: "Terminé", color: "text-zinc-400 bg-zinc-400/10" },
  prototype: { label: "Prototype", color: "text-orange-400 bg-orange-400/10" },
};

const agencyProjects = [
  "Tolarys Auto", "Prestigear", "Porsche", "Afro Burger",
  "Odyssée Sucrée", "RL Auto", "Auto-école", "Portfolio Louis",
  "Gym Club", "Sport Club", "JS Barber", "Eldon Camp",
  "BDB Buy", "AppForge",
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-section-alt">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Mes <span className="gradient-text">projets</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Cliquez sur un projet pour voir les détails, documents et compétences mobilisées.
          </p>
        </motion.div>

        {/* Tableau des compétences BTS */}
        <motion.div
          className="mt-12 glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers size={16} />
            Compétences du référentiel BTS SIO
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {competencesBTS.map((comp, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted p-2 rounded-lg">
                <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                <span>
                  <span className="font-mono text-accent text-xs mr-1">C{i + 1}</span>
                  {comp}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grille de projets */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const IconComponent = iconMap[project.icon] || Layers;
            const status = statusLabel[project.status];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <Link href={`/projets/${project.slug}`} className="block group">
                  <article className="glass-card overflow-hidden h-full hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5">
                    {/* Header */}
                    <div className="relative h-36 bg-gradient-to-br from-accent/10 to-accent-light/10 flex items-center justify-center overflow-hidden">
                      <IconComponent
                        size={52}
                        className="text-accent/25 group-hover:text-accent/45 group-hover:scale-110 transition-all duration-500"
                      />
                      <span className={`absolute top-3 right-3 text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${status.color}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {status.label}
                      </span>
                      {project.files.length > 0 && (
                        <span className="absolute bottom-3 right-3 text-[10px] text-muted flex items-center gap-1">
                          <FileText size={10} />
                          {project.files.length} doc{project.files.length > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-accent/70 font-medium mt-0.5">{project.tagline}</p>
                      <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techs.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                            {tech}
                          </span>
                        ))}
                        {project.techs.length > 4 && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-card-border text-muted">
                            +{project.techs.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 pt-4 border-t border-card-border flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          {project.competences.map((c) => (
                            <span key={c} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-card-border text-muted">
                              C{c + 1}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-accent flex items-center gap-1 font-medium group-hover:gap-2 transition-all">
                          Voir détails
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Projets agence Tolarys */}
        <motion.div
          className="mt-10 glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
            Autres réalisations via Tolarys
          </h3>
          <div className="flex flex-wrap gap-2">
            {agencyProjects.map((name) => (
              <span key={name} className="text-xs px-3 py-1.5 rounded-full border border-card-border text-muted hover:border-accent/30 hover:text-accent transition-colors">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
