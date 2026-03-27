// =============================================================================
//  PROJETS — fichier de configuration
// =============================================================================
//
//  AJOUTER UNE IMAGE :
//    1. Dépose ton image dans :  public/projets/[slug]/images/mon-image.png
//    2. Ajoute dans le tableau images[] de ton projet :
//       { src: "/projets/autosoft/images/mon-image.png", alt: "Description" }
//
//  AJOUTER UN FICHIER (PDF, doc...) :
//    1. Dépose ton fichier dans :  public/projets/[slug]/files/mon-fichier.pdf
//    2. Ajoute dans le tableau files[] de ton projet :
//       { name: "Mon fichier", description: "...", type: "pdf", url: "/projets/autosoft/files/mon-fichier.pdf", size: "1.2 MB" }
//
//  TYPES DE FICHIERS disponibles : "pdf" | "doc" | "image" | "link" | "zip"
//  STATUTS disponibles : "production" | "en-cours" | "terminé" | "prototype"
//
// =============================================================================

export type ProjectFile = {
  name: string;
  description: string;
  type: "pdf" | "doc" | "image" | "link" | "zip";
  url: string;
  size?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  objectives: string[];
  features: string[];
  techs: string[];
  competences: number[];
  status: "production" | "en-cours" | "terminé" | "prototype";
  periode: string;
  client?: string;
  files: ProjectFile[];
  images: ProjectImage[];
  github?: string;
  demo?: string;
  icon: string;
};

export const competencesBTS = [
  "Gérer le patrimoine informatique",
  "Répondre aux incidents et aux demandes d'assistance et d'évolution",
  "Développer la présence en ligne de l'organisation",
  "Travailler en mode projet",
  "Mettre à disposition des utilisateurs un service informatique",
  "Organiser son développement professionnel",
];

export const projects: Project[] = [
  // -------------------------------------------------------------------------
  {
    slug: "autosoft",
    title: "Autosoft",
    tagline: "ERP complet pour auto-écoles",
    description:
      "Autosoft est un ERP SaaS complet pour auto-écoles, développé de zéro en Next.js et Supabase. Dashboard temps réel, gestion des élèves, planning multi-moniteurs, comptabilité, paiements Stripe et application mobile dédiée aux moniteurs — une architecture multitenant scalable en production.",
    context:
      "Face au manque de solutions modernes et abordables pour les auto-écoles, j'ai conçu Autosoft en réponse à un besoin réel du marché. Les gérants passaient des heures à gérer manuellement plannings, dossiers élèves et paiements. Autosoft centralise tout en une interface intuitive, avec une app mobile pour les moniteurs. Le projet est né dans le cadre du statut étudiant-entrepreneur SNEE avec l'Université Fédérale Toulouse Midi-Pyrénées.",
    objectives: [
      "Centraliser la gestion complète d'une auto-école (élèves, moniteurs, véhicules, comptabilité)",
      "Fournir un dashboard avec KPIs en temps réel (CA, élèves actifs, leçons, examens)",
      "Automatiser le planning multi-moniteurs avec vue jour/semaine/mois",
      "Proposer une app mobile pour les moniteurs (planning, progression élève, évaluation)",
      "Intégrer un système de paiement Stripe et suivi comptable",
      "Architecture multitenant pour gérer plusieurs auto-écoles indépendantes",
    ],
    features: [
      "Dashboard : CA (613€+), élèves actifs, examens prévus, leçons/semaine",
      "Répartition élèves : Actif, Complet, En attente, Incomplet, Archivé",
      "Gestion élèves : tableau filtrable (nom, âge, email, tél, catégorie A/B/C1E)",
      "Planning semaine multi-moniteurs avec créneaux colorés par moniteur",
      "App mobile moniteur : leçon en cours, progression (ex: 4h/20h), éval, observation, examen blanc",
      "Modules : Comptabilité, Véhicules, Paiements, Mon auto-école",
      "Architecture multitenant (Supabase RLS) — plusieurs auto-écoles isolées",
      "Intégration API ANTS pour les démarches liées au permis de conduire",
    ],
    techs: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Stripe", "REST API"],
    competences: [2, 3, 4, 5],
    status: "en-cours",
    periode: "Janv. - Févr. 2026 (SNEE)",

    // ---- IMAGES -----------------------------------------------------------
    images: [
      { src: "/projets/autosoft/images/dashboard.png", alt: "Dashboard principal Autosoft", caption: "KPIs temps réel : élèves actifs, chiffre d'affaires, examens, leçons. Graphique CA et répartition des élèves." },
      { src: "/projets/autosoft/images/eleves.png",    alt: "Gestion des élèves", caption: "Liste filtrée des élèves : nom, âge, email, téléphone, catégorie permis, date d'inscription." },
      { src: "/projets/autosoft/images/planning.png",  alt: "Planning des leçons", caption: "Vue semaine multi-moniteurs avec créneaux colorés et filtres par moniteur." },
      { src: "/projets/autosoft/images/mobile.png",    alt: "Application mobile moniteur", caption: "App mobile : planning en cours, progression élève (4h/20h), évaluation, observation, examen blanc." },
    ],

    // ---- FICHIERS ---------------------------------------------------------
    files: [
      {
        name: "Présentation Autosoft",
        description: "Présentation complète du projet : fonctionnalités, architecture technique, modèle économique et roadmap",
        type: "pdf",
        url: "/projets/autosoft/files/Autosoft.pdf",
        size: "",
      },
      {
        name: "Stratégie d'adoption",
        description: "Document stratégique : plan de déploiement, acquisition clients et stratégie de croissance",
        type: "pdf",
        url: "/projets/autosoft/files/STRATEGIE_ADOPTION_AUTOSOFT.pdf",
        size: "",
      },
    ],

    github: undefined,
    demo: undefined,
    icon: "Car",
  },

  // -------------------------------------------------------------------------
  {
    slug: "c-sharp",
    title: "Projet C# — GSB",
    tagline: "Gestion du parc informatique et des incidents (Galaxy Swiss Bourdin)",
    description:
      "Application de gestion du parc informatique et des incidents développée en C# pour le laboratoire fictif Galaxy Swiss Bourdin (GSB). Le système permet de gérer l'inventaire du matériel, de centraliser les incidents (tickets) et de fournir des statistiques aux responsables.",
    context:
      "Le laboratoire Galaxy Swiss Bourdin (GSB), né de la fusion entre le géant américain Galaxy et le conglomérat européen Swiss Bourdin, possède plus de 350 équipements terminaux et un nombre croissant de serveurs. Pour assurer une gestion efficace de ce parc, le laboratoire a souhaité une application permettant de gérer le matériel et d'assurer l'assistance en cas de panne.",
    objectives: [
      "Gérer l'inventaire du matériel (achat, location, garantie)",
      "Centraliser la gestion des incidents sous forme de tickets",
      "Optimiser le suivi des interventions par les techniciens",
      "Fournir des statistiques et tableaux de bord aux responsables",
    ],
    features: [
      "Gestion du matériel : processeur, mémoire, données contractuelles",
      "Système de tickets d'incidents (objet, urgence, état)",
      "Suivi des interventions techniciens (heures, travail réalisé)",
      "Gestion des profils : Techniciens, Visiteurs, Responsables",
      "Modèle Conceptuel de Données (MCD) complet",
      "Base de données relationnelle avec entités liées",
    ],
    techs: ["C#", ".NET", "SQL Server", "WinForms", "MCD/MLD"],
    competences: [0, 1, 3, 4],
    status: "terminé",
    periode: "2024 - 2025",
    client: "GSB (projet BTS SIO)",

    // ---- IMAGES -----------------------------------------------------------
    images: [
      { src: "/projets/c-sharp/images/1.png", alt: "Modèle Conceptuel de Données", caption: "MCD — Structure de la base de données" },
      { src: "/projets/c-sharp/images/2.png", alt: "Page de connexion", caption: "Authentification par matricule" },
      { src: "/projets/c-sharp/images/3.png", alt: "Interface visiteur", caption: "Déclarer un incident, consulter le matériel et suivre l'avancement" },
      { src: "/projets/c-sharp/images/4.png", alt: "Gestion du personnel", caption: "Ajouter, modifier et supprimer des techniciens / visiteurs" },
      { src: "/projets/c-sharp/images/5.png", alt: "Gestion du matériel", caption: "Inventaire complet du matériel (processeur, mémoire, garantie...)" },
      { src: "/projets/c-sharp/images/6.png", alt: "Gestion des incidents", caption: "Consulter, prendre en charge et modifier l'état des incidents" },
    ],

    // ---- FICHIERS ---------------------------------------------------------
    files: [
      {
        name: "Rapport de projet — GSB",
        description: "Rapport complet : présentation GSB, MCD, conception et réalisation de l'application C#",
        type: "pdf",
        url: "/projets/c-sharp/files/rapport-de-projet.pdf",
        size: "",
      },
    ],

    github: undefined,
    demo: undefined,
    icon: "Terminal",
  },

  // -------------------------------------------------------------------------
  {
    slug: "glpi-customized",
    title: "GLPI Customized",
    tagline: "Gestion de parc informatique sur mesure",
    description:
      "Personnalisation complète de GLPI pour une grande entreprise : interface adaptée, modules métier spécifiques, API REST pour intégration avec les outils existants.",
    context:
      "Une entreprise avait besoin d'un système de gestion de parc informatique et de tickets adapté à ses processus internes. La solution GLPI open-source a été choisie comme base, puis entièrement personnalisée pour répondre aux besoins spécifiques.",
    objectives: [
      "Adapter GLPI aux processus métier de l'entreprise",
      "Développer des modules sur mesure (suivi, reporting)",
      "Intégrer une API REST pour la communication avec d'autres outils",
      "Former les utilisateurs à la nouvelle interface",
    ],
    features: [
      "Interface personnalisée selon la charte graphique",
      "Modules de gestion d'inventaire sur mesure",
      "Système de tickets avec workflows personnalisés",
      "API REST pour intégrations tierces",
      "Tableaux de bord et rapports automatisés",
      "Import/export de données",
    ],
    techs: ["PHP", "MySQL", "JavaScript", "REST API", "GLPI"],
    competences: [0, 1, 3, 4],
    status: "terminé",
    periode: "2024",
    images: [
      // { src: "/projets/glpi-customized/images/interface.png", alt: "Interface GLPI personnalisée" },
    ],
    files: [
      // { name: "Rapport de projet", description: "Documentation technique", type: "pdf", url: "/projets/glpi-customized/files/rapport.pdf", size: "2.0 MB" },
    ],
    github: undefined,
    demo: undefined,
    icon: "Monitor",
  },

  // -------------------------------------------------------------------------
  {
    slug: "android-studio",
    title: "Application Android GSB",
    tagline: "Gestion des rendez-vous pour visiteurs médicaux (Galaxy Swiss Bourdin)",
    description:
      "Application mobile Android développée en Java pour les visiteurs médicaux du laboratoire Galaxy Swiss Bourdin (GSB). Elle permet de gérer les professionnels de santé, planifier des rendez-vous et consulter le planning journalier — avec base SQLite embarquée, architecture MVC et tests JUnit 4.",
    context:
      "Le laboratoire Galaxy Swiss Bourdin, issu de la fusion entre Galaxy et Swiss Bourdin, souhaitait moderniser les outils de ses visiteurs médicaux. Après la gestion du parc informatique (projet C# GSB), le laboratoire s'est concentré sur l'activité terrain. L'objectif : une app mobile autonome, sans serveur, pour organiser efficacement les tournées.",
    objectives: [
      "Gérer le fichier des professionnels de santé (pharmaciens, généralistes, dentistes...)",
      "Planifier et enregistrer des rendez-vous via un calendrier natif Android",
      "Consulter le planning journalier avec jointure SQL (nom + heure)",
      "Rechercher des professionnels par ville ou code postal",
      "Garantir la fiabilité du code via des tests instrumentés JUnit 4",
      "Documenter l'ensemble du code via Javadoc pour faciliter la maintenabilité",
    ],
    features: [
      "4 écrans : Professionnel, Prise de RDV, Planning, Recherche médecins",
      "Base de données SQLite embarquée via SQLiteOpenHelper (sans serveur)",
      "Couche DAO dédiée — DataConnect.java centralise toutes les requêtes SQL",
      "Navigation commune entre tous les écrans (barre de 4 boutons)",
      "Recherche de médecins filtrée dynamiquement par ville et/ou code postal",
      "Tests instrumentés JUnit 4 : contexte, insertion médecin (+1), insertion RDV",
      "Architecture MVC : séparation IHM (XML + Activities) et accès données (DAO)",
      "Documentation Javadoc complète sur toutes les classes et méthodes clés",
      "Tutoriel de déploiement APK inclus (activation sources inconnues, transfert, install)",
    ],
    techs: ["Android Studio", "Java", "SQLite", "JUnit 4", "Javadoc", "XML", "Gradle"],
    competences: [2, 3, 4, 5],
    status: "terminé",
    periode: "2024 - 2025",
    client: "GSB (projet BTS SIO)",

    // ---- IMAGES -----------------------------------------------------------
    images: [
      { src: "/projets/android-studio/images/1.png",  alt: "MCD — Modèle Conceptuel de Données", caption: "Entités Professionnel & RendezVous avec relation Avoir (0,1 — 0,n)" },
      { src: "/projets/android-studio/images/2.png",  alt: "Tests unitaires JUnit 4 — 3 passed", caption: "3 tests instrumentés réussis sur émulateur Android (API 36)" },
      { src: "/projets/android-studio/images/3.png",  alt: "Maquette — Enregistrement d'un professionnel", caption: "Maquette Balsamiq : formulaire nom, prénom, type, adresse, mail, tél" },
      { src: "/projets/android-studio/images/4.png",  alt: "Maquette — Prise de rendez-vous", caption: "Maquette Balsamiq : sélection du médecin et du calendrier" },
      { src: "/projets/android-studio/images/5.png",  alt: "Maquette — Affichage du planning", caption: "Maquette Balsamiq : calendrier + affichage des RDV du jour" },
      { src: "/projets/android-studio/images/6.png",  alt: "Maquette — Recherche de médecins", caption: "Maquette Balsamiq : recherche par ville et/ou code postal" },
      { src: "/projets/android-studio/images/7.png",  alt: "Cahier de recette — Tests 1 à 3", caption: "Validation : enregistrement professionnel, prise de RDV, navigation" },
      { src: "/projets/android-studio/images/8.png",  alt: "Cahier de recette — Tests 4 à 6", caption: "Validation : planning du 20/12, recherche Paris 75000, navigation accueil" },
      { src: "/projets/android-studio/images/9.png",  alt: "App réelle — Écran enregistrement professionnel", caption: "Formulaire de saisie avec navigation Accueil / RDV / Planning / Médecins" },
      { src: "/projets/android-studio/images/10.png", alt: "App réelle — Prise de rendez-vous", caption: "Sélection du médecin via spinner et de la date via CalendarView" },
      { src: "/projets/android-studio/images/11.png", alt: "App réelle — Planning journalier", caption: "Sélection de la date et affichage des RDV avec bouton Afficher les RDV" },
      { src: "/projets/android-studio/images/12.png", alt: "App réelle — Recherche de médecins", caption: "Filtrage des professionnels par ville et/ou code postal" },
      { src: "/projets/android-studio/images/13.png", alt: "Barre de navigation commune", caption: "Navigation persistante : Accueil, RDV, Planning, Médecins" },
    ],

    // ---- FICHIERS ---------------------------------------------------------
    files: [
      {
        name: "Rapport de projet — GSB Android",
        description: "Rapport complet : contexte GSB, MCD/MLD, architecture MVC, tests JUnit 4, Javadoc et tutoriel APK",
        type: "pdf",
        url: "/projets/android-studio/files/rapport-android.pdf",
        size: "",
      },
    ],

    github: undefined,
    demo: undefined,
    icon: "Smartphone",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
