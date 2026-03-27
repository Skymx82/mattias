"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Calendar,
  FileDown,
  Briefcase,
  ChevronRight,
  MapPin,
  Plane,
} from "lucide-react";

const stages = [
  {
    entreprise: "AutoSoft",
    poste: "Fondateur & Développeur Full Stack — Stage SNEE",
    periode: "Janv. - Févr. 2026",
    duree: "2 mois",
    lieu: "Toulouse, France · À distance",
    description:
      "Dans le cadre du Statut National d'Étudiant-Entrepreneur (SNEE) avec l'Université Fédérale Toulouse Midi-Pyrénées, conception et développement d'AutoSoft : une solution SaaS complète de gestion d'auto-école, de A à Z.",
    missions: [
      "Conception et développement full stack d'un ERP SaaS métier (Next.js, Supabase, PostgreSQL)",
      "Sécurisation des accès via politiques RLS et gestion des rôles utilisateurs",
      "Intégration de l'API ANTS pour la gestion des démarches liées au permis de conduire",
      "Mise en conformité RGPD dans la collecte et le traitement des données personnelles",
      "Mise en production avec versioning Git et développement itératif avec retours terrain",
      "Négociation d'un contrat de partenariat avec un éditeur logiciel (Tolarys/Prestadoss)",
      "Intégration de deux auto-écoles partenaires en bêta test",
    ],
    rapport: "#",
    icon: Building2,
    badge: "SNEE",
  },
  {
    entreprise: "Tolarys",
    poste: "Fondateur - Développeur Web",
    periode: "Mars 2025 - Présent",
    duree: "En cours",
    lieu: "Toulouse, France",
    description:
      "Entreprise de développement web spécialisée dans la création de sites e-commerce et d'applications web sur mesure. Accompagnement de 5 clients en conformité RGAA 4.1 et EN 301 549.",
    missions: [
      "Développement d'applications web avec Next.js et Supabase",
      "Audit et mise en conformité accessibilité (RGAA 4.1, EN 301 549)",
      "Développement d'apps multitenant avec données séparées par client",
      "Intégration Medusa.js pour des boutiques e-commerce custom",
      "Hébergement et déploiement sur Vercel",
    ],
    rapport: null,
    icon: Building2,
  },
  {
    entreprise: "Odyssée Sucrée",
    poste: "Stagiaire en informatique",
    periode: "Mai - Juin 2025",
    duree: "6 semaines",
    lieu: "Toulouse, France",
    description:
      "Création from scratch d'une application web de gestion de stock et de comptabilité pour des événements tels que les marchés gourmands.",
    missions: [
      "Mise en place d'un système d'authentification sécurisé avec Supabase Auth",
      "Développement de fonctionnalités de gestion des stocks en temps réel",
      "Intégration d'un module de suivi comptable (recettes/dépenses par événement)",
      "Création d'un tableau de bord statistique : meilleurs vendeurs, KPIs",
    ],
    rapport: "#",
    icon: Building2,
  },
  {
    entreprise: "Lycée Antoine Bourdelle",
    poste: "Stagiaire en informatique",
    periode: "Mai - Juin 2024",
    duree: "6 semaines",
    lieu: "Montauban, France",
    description:
      "Installation et configuration de serveurs Microsoft pour assurer la gestion centralisée des utilisateurs et des ressources.",
    missions: [
      "Installation et configuration de serveurs Microsoft",
      "Gestion centralisée des utilisateurs et des ressources",
    ],
    rapport: "#",
    icon: Building2,
  },
  {
    entreprise: "Voltier Electronics",
    poste: "Stage Erasmus en informatique",
    periode: "Janvier - Février 2024",
    duree: "6 semaines",
    lieu: "Saint-Jacques-de-Compostelle, Espagne",
    description:
      "Stage Erasmus dans une entreprise d'électronique en Espagne. Automatisation, développement WordPress et optimisation SQL.",
    missions: [
      "Création d'un script AutoIt pour automatiser la mise en ligne d'articles WordPress",
      "Correction et optimisation de requêtes SQL",
      "Participation au développement d'un plugin WordPress",
    ],
    rapport: "#",
    icon: Plane,
  },
  {
    entreprise: "3R - Recherches et Réalisations Remy",
    poste: "Stagiaire en informatique",
    periode: "Mars - Avril 2023",
    duree: "8 semaines",
    lieu: "Montauban, France",
    description:
      "Développement de scripts d'automatisation et d'outils de monitoring serveur dans une entreprise de R&D.",
    missions: [
      "Développement de scripts en C# pour automatiser des tâches internes",
      "Création d'un script serveur pour vérifier l'état du DNS avec rapport d'audit par mail",
      "Câblage de sondes pour des essais sur béton",
    ],
    rapport: "#",
    icon: Building2,
  },
  {
    entreprise: "MAF RODA AGROBOTIC",
    poste: "Stagiaire en informatique",
    periode: "Novembre - Décembre 2022",
    duree: "8 semaines",
    lieu: "Montauban, France",
    description:
      "Stage technique dans une entreprise de calibreuses de fruits. Production, montage et configuration d'équipements.",
    missions: [
      "Montage et configuration de PC, boot à partir d'images système",
      "Réalisation de baies de brassage et installation d'outils de production",
      "Soudure de composants traversants et tests d'équipements électroniques",
      "Configuration de scripts internes liés aux systèmes MAF",
    ],
    rapport: "#",
    icon: Building2,
  },
];

export default function Stages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stages" className="py-24 px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Stages & <span className="gradient-text">expériences</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Mes expériences professionnelles en entreprise, de l&apos;Espagne à Toulouse.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="shrink-0 rounded-2xl bg-accent/10 p-4 text-accent">
                  <stage.icon size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold">
                      {stage.entreprise}
                    </h3>
                    {"badge" in stage && stage.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/20 tracking-wide">
                        {stage.badge}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      <Calendar size={12} />
                      {stage.periode}
                    </span>
                  </div>

                  <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                    <Briefcase size={14} />
                    {stage.poste} - {stage.duree}
                  </p>
                  <p className="mt-0.5 flex items-center gap-2 text-xs text-muted">
                    <MapPin size={12} />
                    {stage.lieu}
                  </p>

                  <p className="mt-4 text-muted leading-relaxed text-sm">
                    {stage.description}
                  </p>

                  {/* Missions */}
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">
                      Missions principales :
                    </p>
                    <ul className="space-y-1.5">
                      {stage.missions.map((mission, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <ChevronRight
                            size={14}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rapport */}
                  {stage.rapport && (
                    <a
                      href={stage.rapport}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                    >
                      <FileDown size={16} />
                      Télécharger le rapport de stage
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
