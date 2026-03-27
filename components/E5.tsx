"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, BookOpen, Target, Wrench } from "lucide-react";

const situations = [
  {
    numero: "01",
    titre: "Situation professionnelle 1",
    contexte:
      "Décrivez le contexte de l'organisation et la problématique rencontrée. Présentez l'environnement technique et les contraintes du projet.",
    besoin:
      "Expliquez le besoin identifié et les objectifs à atteindre pour répondre à la demande.",
    environnement: "Technologies, outils et méthodologies utilisés pour cette situation.",
    realisation:
      "Détaillez les étapes de réalisation : analyse, conception, développement, tests, mise en production. Mentionnez les compétences mobilisées.",
    competences: ["C1", "C2", "C4"],
    document: "#",
  },
  {
    numero: "02",
    titre: "Situation professionnelle 2",
    contexte:
      "Décrivez le contexte de cette deuxième situation professionnelle. L'entreprise, le service, le projet dans lequel elle s'inscrit.",
    besoin:
      "Le besoin exprimé par le commanditaire et les résultats attendus.",
    environnement: "Stack technique, outils de gestion de projet, environnement de travail.",
    realisation:
      "Les actions menées, les choix techniques effectués, les résultats obtenus et les enseignements tirés.",
    competences: ["C3", "C5", "C6"],
    document: "#",
  },
];

export default function E5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="e5" className="py-24 px-6 bg-section-alt">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Epreuve <span className="gradient-text">E5</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Mes deux situations professionnelles envisagées pour l&apos;épreuve E5
            du BTS SIO.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {situations.map((sit, i) => (
            <motion.div
              key={i}
              className="gradient-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
            >
              <div className="glass-card p-8">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent font-mono text-2xl font-bold">
                    {sit.numero}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{sit.titre}</h3>

                    <div className="mt-6 space-y-5">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium mb-2">
                          <BookOpen size={15} className="text-accent" />
                          Contexte
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {sit.contexte}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Target size={15} className="text-accent" />
                          Besoin
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {sit.besoin}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Wrench size={15} className="text-accent" />
                          Environnement technique
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {sit.environnement}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium mb-2">
                          <FileText size={15} className="text-accent" />
                          Réalisations
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {sit.realisation}
                        </p>
                      </div>
                    </div>

                    {/* Compétences */}
                    <div className="mt-6 flex items-center gap-3 flex-wrap">
                      <span className="text-xs text-muted">Compétences :</span>
                      {sit.competences.map((c) => (
                        <span
                          key={c}
                          className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    {/* Document */}
                    {sit.document && (
                      <a
                        href={sit.document}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
                      >
                        <Download size={14} />
                        Télécharger le document
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
