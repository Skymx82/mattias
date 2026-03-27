"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rss,
  TrendingUp,
  ExternalLink,
  Newspaper,
  Search,
  Bell,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const outils = [
  {
    icon: Search,
    nom: "Google Alerts",
    description: 'Alertes configurées sur "Claude AI", "Anthropic", "LLM" et "IA générative" pour recevoir les actualités directement par mail.',
  },
  {
    icon: Play,
    nom: "YouTube & Podcasts",
    description: "Suivi de chaînes tech (Fireship, Yannic Kilcher) et podcasts spécialisés IA pour les analyses approfondies des nouveaux modèles.",
  },
  {
    icon: Rss,
    nom: "Blog Anthropic",
    description: "Lecture des annonces officielles sur anthropic.com/news : sorties de modèles, recherches et publications scientifiques.",
  },
  {
    icon: Bell,
    nom: "Twitter/X & LinkedIn",
    description: 'Suivi des comptes @AnthropicAI, @sama et de la communauté dev pour capter les réactions en temps réel aux nouvelles versions.',
  },
];

const entrees = [
  {
    date: "Décembre 2024",
    titre: "Découverte de Claude par Anthropic — une IA qui change la façon de coder",
    resume:
      "En décembre 2024, dans le cadre de mon BTS SIO et du développement d'Autosoft, je découvre Claude, le modèle de langage développé par Anthropic. Contrairement à ChatGPT que j'utilisais déjà, Claude se distingue par sa capacité à raisonner sur de longs contextes de code et à maintenir une cohérence sur des échanges complexes. Je commence à l'utiliser pour générer des composants Next.js, déboguer des requêtes Supabase et rédiger de la documentation technique.",
    source: "anthropic.com",
    lien: "https://www.anthropic.com/claude",
    tags: ["Claude", "Anthropic", "LLM", "Développement"],
  },
  {
    date: "Février 2025",
    titre: "Claude 3.5 Sonnet — un bond en avant pour les développeurs",
    resume:
      "Anthropic publie Claude 3.5 Sonnet, qui établit de nouveaux records sur les benchmarks de codage (SWE-bench). Je teste ses capacités sur Autosoft : il est capable de comprendre l'intégralité de mon architecture Supabase + Next.js et de proposer des migrations SQL cohérentes. La fonctionnalité 'computer use' (contrôle de l'ordinateur) est annoncée en preview — un signal fort que les modèles LLM vont dépasser le simple chatbot pour devenir de véritables agents autonomes.",
    source: "anthropic.com/news",
    lien: "https://www.anthropic.com/news/claude-3-5-sonnet",
    tags: ["Claude 3.5", "Sonnet", "Codage", "Agents IA"],
  },
  {
    date: "Avril 2025",
    titre: "L'émergence des agents IA — quand Claude agit, pas seulement répond",
    resume:
      "En 2025, Anthropic pousse le concept d'agent IA avec le Model Context Protocol (MCP) et Claude Code, un outil qui laisse Claude opérer directement dans un terminal, lire des fichiers, exécuter du code et faire des commits Git. Je l'intègre dans mon workflow de développement d'Autosoft : gain de temps estimé à 40% sur les tâches répétitives. Cette évolution pose la question du rôle du développeur : on passe de 'coder' à 'orchestrer' des agents qui codent.",
    source: "anthropic.com/news",
    lien: "https://www.anthropic.com/news/claude-code",
    tags: ["Claude Code", "MCP", "Agents autonomes", "DevOps"],
  },
  {
    date: "Juin 2025",
    titre: "Claude 3.7 et la course aux LLMs — quel impact sur le marché du travail IT ?",
    resume:
      "La sortie de Claude 3.7 relance le débat sur l'impact de l'IA sur les métiers du développement. Pour le BTS SIO et les formations IT, la question se pose : faut-il apprendre à coder ou apprendre à diriger des IA ? Mon analyse : les deux. L'IA ne remplace pas le développeur qui comprend l'architecture, les besoins métier et la qualité — elle remplace les tâches mécaniques. Pour Autosoft, cette évolution est une opportunité : je peux itérer bien plus vite sur le produit sans recruter.",
    source: "Le Monde Informatique",
    lien: "https://www.lemondeinformatique.fr",
    tags: ["Claude 3.7", "Marché du travail", "Formation IT", "Futur du dev"],
  },
  {
    date: "Septembre 2025",
    titre: "Anthropic valorisée à 61 milliards $ — l'IA responsable comme argument commercial",
    resume:
      "Anthropic lève 4 milliards supplémentaires auprès d'Amazon et atteint une valorisation de 61 milliards de dollars. Ce qui distingue Anthropic de ses concurrents : le positionnement sur la sécurité de l'IA (AI Safety) et la 'Constitutional AI'. Dans un secteur où GPT-4 domine la perception publique, Claude se taille une part de marché significative chez les développeurs professionnels grâce à ses performances sur les tâches complexes. Je suis ce dossier de près car Autosoft intègre Claude API pour des fonctionnalités d'assistance intelligente.",
    source: "TechCrunch",
    lien: "https://techcrunch.com",
    tags: ["Anthropic", "Financement", "AI Safety", "Marché IA"],
  },
  {
    date: "Janvier 2026",
    titre: "Bilan de ma veille — Claude comme outil de productivité quotidien",
    resume:
      "Après plus d'un an de veille sur Claude et l'écosystème Anthropic, mon constat est clair : l'IA générative n'est plus un gadget, c'est une infrastructure. J'utilise Claude Code quotidiennement pour développer Autosoft — rédaction de composants, génération de types TypeScript depuis le schéma Supabase, rédaction de tests. La vitesse de développement a été multipliée par 2 à 3. La vraie compétence à acquérir n'est plus seulement 'comment coder' mais 'comment formuler précisément un problème à une IA pour obtenir le meilleur résultat'.",
    source: "Retour d'expérience personnel",
    lien: "#",
    tags: ["Bilan", "Productivité", "Claude Code", "Autosoft"],
  },
];

export default function Veille() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="veille" className="py-24 px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Veille <span className="gradient-text">technologique</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl text-lg">
            Sujet : <span className="text-foreground font-medium">Claude AI par Anthropic</span> — depuis décembre 2024.
          </p>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            En tant qu'étudiant-entrepreneur développant Autosoft, j'ai choisi de suivre l'évolution
            des grands modèles de langage et plus particulièrement Claude, que j'utilise au quotidien
            dans mon workflow de développement.
          </p>
        </motion.div>

        {/* Outils de veille */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <TrendingUp size={18} className="text-accent" />
            Mes sources de veille
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outils.map((outil, i) => (
              <motion.div
                key={i}
                className="glass-card p-5 hover:border-accent/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <div className="rounded-xl bg-accent/10 p-2.5 text-accent w-fit group-hover:bg-accent/20 transition-colors">
                  <outil.icon size={20} />
                </div>
                <h4 className="mt-3 font-medium text-sm">{outil.nom}</h4>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  {outil.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline de veille */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-8 flex items-center gap-2">
            <Newspaper size={18} className="text-accent" />
            Entrées de veille — Décembre 2024 → Janvier 2026
          </h3>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-card-border hidden sm:block" />

            <div className="space-y-4">
              {entrees.map((entree, i) => (
                <motion.div
                  key={i}
                  className="relative sm:pl-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                >
                  {/* Dot timeline */}
                  <div className="hidden sm:block absolute left-[10px] top-5 h-3 w-3 rounded-full border-2 border-accent bg-background" />

                  <div className="glass-card overflow-hidden hover:border-accent/30 transition-all duration-300">
                    {/* Header cliquable */}
                    <button
                      className="w-full text-left p-5 flex items-start justify-between gap-4"
                      onClick={() => setExpanded(expanded === i ? null : i)}
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-accent">{entree.date}</span>
                          <span className="text-xs text-muted">{entree.source}</span>
                        </div>
                        <h4 className="font-semibold text-sm sm:text-base leading-snug">
                          {entree.titre}
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {entree.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 text-muted mt-1">
                        {expanded === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {/* Contenu expandable */}
                    {expanded === i && (
                      <div className="px-5 pb-5 border-t border-card-border pt-4">
                        <p className="text-sm text-muted leading-relaxed">
                          {entree.resume}
                        </p>
                        {entree.lien !== "#" && (
                          <a
                            href={entree.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-dark transition-colors"
                          >
                            <ExternalLink size={13} />
                            Consulter la source
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
