"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Code2,
  Database,
  Globe,
  Palette,
  GitBranch,
  Zap,
  Users,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  BookOpen,
} from "lucide-react";

const skills = [
  { icon: Code2, label: "Frontend", techs: "Next.js, React, TypeScript, Tailwind CSS" },
  { icon: Database, label: "Backend & BDD", techs: "Supabase, Node.js, SQL, PHP" },
  { icon: Palette, label: "UI/UX & Animation", techs: "Framer Motion, UI/UX Design" },
  { icon: GitBranch, label: "Outils", techs: "Git, Vercel, Docker, REST API" },
];

const softSkills = [
  { icon: Lightbulb, label: "Créativité" },
  { icon: Zap, label: "Résolution de problèmes" },
  { icon: Users, label: "Travail d'équipe" },
  { icon: MessageSquare, label: "Communication" },
  { icon: RefreshCw, label: "Adaptabilité" },
  { icon: BookOpen, label: "Apprentissage rapide" },
];

const parcours = [
  {
    periode: "2024 - 2026",
    diplome: "BTS SIO option SLAM",
    etablissement: "Lycée Henri Matisse, Cugnaux",
    description:
      "Services Informatiques aux Organisations - Solutions Logicielles et Applications Métier",
  },
  {
    periode: "2021 - 2024",
    diplome: "Bac Pro Systèmes Numériques",
    etablissement: "Lycée Antoine Bourdelle, Montauban",
    description: "Spécialité Technologies de l'information",
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Découvrez mon parcours, mes compétences et ce qui me motive au quotidien.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Info personnelle */}
          <AnimatedSection>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Qui suis-je ?</h3>
              <div className="space-y-4 text-muted">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-accent shrink-0" />
                  <span>Etudiant-Entrepreneur (Statut SNEE)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-accent shrink-0" />
                  <span>Toulouse, Occitanie, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={18} className="text-accent shrink-0" />
                  <span>BTS SIO SLAM - En cours (2024-2026)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-accent shrink-0" />
                  <span>Fondateur de Tolarys &amp; Créateur d&apos;Autosoft</span>
                </div>
              </div>
              <p className="mt-6 text-muted leading-relaxed">
                Passionné par la création de solutions logicielles qui résolvent de vrais
                problèmes métier. Actuellement fondateur d&apos;Autosoft, un ERP complet pour
                auto-écoles développé de zéro : gestion des élèves, planning intelligent,
                intégration ANTS, système de paiement — une architecture scalable pensée
                pour la production.
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                De l&apos;idée au déploiement, j&apos;aime transformer un concept en produit
                fonctionnel et évolutif. Statut étudiant-entrepreneur SNEE — je concilie
                développement produit et formation en management de projets IT.
              </p>
            </div>
          </AnimatedSection>

          {/* Compétences techniques */}
          <AnimatedSection>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Compétences techniques</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="group flex items-start gap-3 rounded-xl border border-card-border p-4 hover:border-accent/30 transition-colors"
                  >
                    <div className="rounded-lg bg-accent/10 p-2 text-accent group-hover:bg-accent/20 transition-colors">
                      <skill.icon size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{skill.label}</p>
                      <p className="text-xs text-muted mt-0.5">{skill.techs}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-semibold mt-6 mb-3 text-muted">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-card-border text-muted hover:border-accent/30 transition-colors"
                  >
                    <s.icon size={12} className="text-accent" />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Parcours scolaire */}
        <AnimatedSection className="mt-16">
          <h3 className="text-xl font-semibold mb-8">Parcours scolaire</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-card-border" />

            <div className="space-y-8">
              {parcours.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[10px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />

                  <div className="glass-card p-6">
                    <span className="inline-block text-xs font-mono text-accent mb-2">
                      {item.periode}
                    </span>
                    <h4 className="font-semibold">{item.diplome}</h4>
                    <p className="text-sm text-muted mt-1">{item.etablissement}</p>
                    <p className="text-sm text-muted mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
