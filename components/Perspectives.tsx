"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Target, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const perspectives = [
  {
    icon: GraduationCap,
    titre: "MIAGE — L'an prochain",
    description:
      "Intégrer un Master MIAGE (Management Informatique pour les Affaires et la Gestion des Entreprises) pour acquérir les compétences en management de projet, gestion d'équipe et pilotage d'entreprise — indispensables pour faire passer Autosoft à l'échelle.",
  },
  {
    icon: Target,
    titre: "Autosoft — N°1 en France",
    description:
      "Faire d'Autosoft le logiciel de gestion d'auto-école n°1 en France. Le produit est déjà en production avec des clients bêta. L'objectif : conquérir le marché, étoffer l'équipe et dominer un secteur encore peu digitalisé.",
  },
  {
    icon: Briefcase,
    titre: "Gérant & CTO de ma boîte",
    description:
      "Mon ambition est claire : diriger ma propre entreprise tech, gérer des équipes et prendre les décisions stratégiques. Pas juste coder — construire une organisation, recruter les bonnes personnes et piloter la croissance d'un vrai produit SaaS.",
  },
  {
    icon: Sparkles,
    titre: "Vision long terme",
    description:
      "Bâtir Autosoft en scale-up française, avec une équipe solide, un modèle économique éprouvé et une vraie part de marché. Tolarys reste une activité complémentaire, mais Autosoft est la priorité absolue.",
  },
];

export default function Perspectives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="perspectives" className="py-24 px-6 bg-section-alt">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Mes <span className="gradient-text">perspectives</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Mon projet professionnel et mes ambitions pour l&apos;avenir.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {perspectives.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 hover:border-accent/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="rounded-2xl bg-accent/10 p-3 text-accent w-fit group-hover:bg-accent/20 transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.titre}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="glass-card inline-flex items-center gap-3 px-8 py-5">
            <Rocket size={20} className="text-accent" />
            <p className="text-muted text-sm">
              Vous avez un projet ou une opportunité ?{" "}
              <a
                href="mailto:mattias.mathevon@gmail.com"
                className="text-accent font-medium hover:text-accent-dark transition-colors"
              >
                Contactez-moi
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
