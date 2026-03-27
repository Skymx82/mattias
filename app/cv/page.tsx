"use client";

import { Printer, ArrowLeft, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Actions bar */}
      <div className="no-print mx-auto max-w-4xl px-6 mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Retour au portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
        >
          <Printer size={14} />
          Imprimer / PDF
        </button>
      </div>

      {/* CV Content */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="glass-card p-8 sm:p-12 print:border-none print:shadow-none print:p-0">
          {/* En-tête */}
          <header className="flex flex-col sm:flex-row items-start gap-6 pb-8 border-b border-card-border print:border-gray-300">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">
                Mattias Mathevon
              </h1>
              <p className="mt-1 text-lg text-accent font-medium">
                Développeur Full Stack &middot; Fondateur Autosoft &amp; Tolarys &middot; Étudiant-Entrepreneur SNEE
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-lg">
                Passionné par la création de solutions logicielles qui résolvent de vrais problèmes métier.
                De l&apos;idée au déploiement, je transforme des concepts en produits fonctionnels et évolutifs.
                Je développe Autosoft, un ERP SaaS pour auto-écoles, avec 2 clients bêta en production.
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-accent" />
                <span>mattias.mathevon@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent" />
                <span>06 79 33 68 12</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                <span>Toulouse, France</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-accent" />
                <span>portfolio-mattias.vercel.app</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a href="https://github.com/Skymx82" className="flex items-center gap-1 text-xs hover:text-accent transition-colors">
                  <Github size={12} /> Skymx82
                </a>
                <a href="https://www.linkedin.com/in/mattiasmathevon" className="flex items-center gap-1 text-xs hover:text-accent transition-colors">
                  <Linkedin size={12} /> mattiasmathevon
                </a>
              </div>
            </div>
          </header>

          <div className="grid gap-8 sm:grid-cols-3 mt-8">
            {/* Colonne principale */}
            <div className="sm:col-span-2 space-y-8">
              {/* Expériences */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Expériences professionnelles
                </h2>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">AutoSoft — Fondateur &amp; Dév. Full Stack (SNEE)</h3>
                      <span className="text-xs text-muted font-mono">Janv. - Févr. 2026</span>
                    </div>
                    <p className="text-sm text-muted">Toulouse · Stage SNEE — Université Fédérale Toulouse Midi-Pyrénées</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      <li>&bull; ERP SaaS complet pour auto-écoles : dashboard KPIs temps réel, planning multi-moniteurs, gestion élèves &amp; paiements</li>
                      <li>&bull; Application mobile dédiée aux moniteurs (React Native) + interface web Next.js 16</li>
                      <li>&bull; Intégration API ANTS, Supabase/PostgreSQL avec RLS, conformité RGPD</li>
                      <li>&bull; 2 auto-écoles en bêta test, partenariat Tolarys/Prestadoss</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Tolarys — Fondateur &amp; Dév. Web</h3>
                      <span className="text-xs text-muted font-mono">Mars 2025 - Présent</span>
                    </div>
                    <p className="text-sm text-muted">Toulouse · Agence web &amp; accessibilité numérique</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      <li>&bull; Création de sites e-commerce et applications web sur mesure (Next.js, Supabase)</li>
                      <li>&bull; Audit et mise en conformité RGAA 4.1 / EN 301 549 pour 5 clients</li>
                      <li>&bull; Développement d&apos;apps multitenant et intégration Medusa.js</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Odyssée Sucrée — Stagiaire Dév.</h3>
                      <span className="text-xs text-muted font-mono">Mai - Juin 2025</span>
                    </div>
                    <p className="text-sm text-muted">Toulouse · Application web de gestion interne</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      <li>&bull; Application de gestion de stock et comptabilité (Next.js, Supabase)</li>
                      <li>&bull; Authentification sécurisée, stocks temps réel, tableau de bord KPIs</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Lycée A. Bourdelle — Stagiaire</h3>
                      <span className="text-xs text-muted font-mono">Mai - Juin 2024</span>
                    </div>
                    <p className="text-sm text-muted">Montauban · Administration système Windows Server</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      <li>&bull; Installation et configuration de serveurs Microsoft</li>
                      <li>&bull; Gestion centralisée des utilisateurs et ressources (Active Directory)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Voltier Electronics — Erasmus Espagne</h3>
                      <span className="text-xs text-muted font-mono">Jan - Fév 2024</span>
                    </div>
                    <p className="text-sm text-muted">Saint-Jacques-de-Compostelle, Espagne</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      <li>&bull; Script AutoIt pour automatiser la publication WordPress</li>
                      <li>&bull; Optimisation SQL et développement plugin WordPress</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">3R R&amp;D — Stagiaire</h3>
                      <span className="text-xs text-muted font-mono">Mars - Avril 2023</span>
                    </div>
                    <p className="text-sm text-muted">Montauban · Scripts C# et monitoring</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      <li>&bull; Scripts C# d&apos;automatisation, monitoring DNS avec rapport par mail</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">MAF RODA AGROBOTIC — Stagiaire</h3>
                      <span className="text-xs text-muted font-mono">Nov - Déc 2022</span>
                    </div>
                    <p className="text-sm text-muted">Montauban · Production et configuration systèmes</p>
                    <ul className="mt-2 space-y-1 text-xs text-muted">
                      <li>&bull; Montage PC, baies de brassage, soudure, configuration systèmes embarqués</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Formation */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Formation
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">BTS SIO option SLAM</h3>
                      <span className="text-xs text-muted font-mono">2024 - 2026</span>
                    </div>
                    <p className="text-sm text-muted">Lycée Henri Matisse, Cugnaux</p>
                    <p className="text-xs text-muted mt-1">Solutions Logicielles et Applications Métier · Statut Étudiant-Entrepreneur SNEE</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Bac Pro Systèmes Numériques</h3>
                      <span className="text-xs text-muted font-mono">2021 - 2024</span>
                    </div>
                    <p className="text-sm text-muted">Lycée Antoine Bourdelle, Montauban</p>
                    <p className="text-xs text-muted mt-1">Technologies de l&apos;information et des systèmes communicants</p>
                  </div>
                </div>
              </section>

              {/* Projets */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Projets notables
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm">Autosoft <span className="text-xs font-normal text-muted ml-1">— En production</span></h3>
                    <p className="text-xs text-muted">
                      ERP SaaS pour auto-écoles : dashboard KPIs, planning multi-moniteurs, gestion élèves, app mobile moniteur, intégration ANTS. Next.js 16, Supabase, PostgreSQL, RLS, TypeScript.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Projet C# GSB — Gestion du parc informatique</h3>
                    <p className="text-xs text-muted">
                      Application WinForms de gestion de parc informatique et d&apos;incidents pour la GSB (Galaxy Swiss Bourdin). C#, SQL Server, gestion des rôles visiteurs/techniciens/administrateurs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Application Android GSB — Gestion des RDV</h3>
                    <p className="text-xs text-muted">
                      App Android de gestion des rendez-vous pour visiteurs médicaux GSB. Android Studio (Java), SQLite, API REST, tests JUnit 4. Architecture MVC avec cahier de recette complet.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">GLPI Customized</h3>
                    <p className="text-xs text-muted">
                      Gestion de parc informatique et tickets personnalisé. PHP, MySQL, JavaScript, REST API.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* Colonne latérale */}
            <div className="space-y-8">
              {/* Compétences techniques */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Compétences
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold mb-1.5">Frontend</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"].map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent print:border print:border-gray-300 print:bg-transparent print:text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-1.5">Backend &amp; BDD</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Supabase", "Node.js", "SQL", "PostgreSQL", "PHP", "REST API", "Java"].map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent print:border print:border-gray-300 print:bg-transparent print:text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-1.5">Mobile &amp; autres</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Android Studio", "React Native", "C#", "Git", "Vercel", "AutoIt", "WordPress"].map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent print:border print:border-gray-300 print:bg-transparent print:text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-1.5">IA &amp; outils dev</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Claude AI", "Claude Code", "MCP", "Docker", "Medusa.js"].map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent print:border print:border-gray-300 print:bg-transparent print:text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Perspectives */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Perspectives
                </h2>
                <div className="space-y-2 text-xs text-muted">
                  <div>
                    <p className="font-semibold text-foreground">Master MIAGE</p>
                    <p>Poursuite d&apos;études l&apos;an prochain pour acquérir les compétences en management et pilotage d&apos;entreprise.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mt-2">Autosoft N°1 en France</p>
                    <p>Objectif : devenir le logiciel de gestion d&apos;auto-école leader en France. Gérant &amp; CTO de ma propre entreprise tech.</p>
                  </div>
                </div>
              </section>

              {/* Langues */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Langues
                </h2>
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex justify-between">
                    <span>Français</span>
                    <span className="text-xs">Natif</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Anglais</span>
                    <span className="text-xs">B2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Espagnol</span>
                    <span className="text-xs">Notions (Erasmus)</span>
                  </div>
                </div>
              </section>

              {/* Centres d'intérêt */}
              <section>
                <h2 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Centres d&apos;intérêt
                </h2>
                <div className="space-y-1.5 text-sm text-muted">
                  <p>Basketball (National 3 — JS Cugnaux)</p>
                  <p>Boxe anglaise (Boxing Center)</p>
                  <p>Entrepreneuriat tech</p>
                  <p>Veille IA &amp; open-source</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
