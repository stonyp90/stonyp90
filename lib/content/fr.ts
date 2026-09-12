/* ==========================================================================
   French site content — full parity with en.ts.

   Data (services / experiences) is built by spreading the English entries and
   overriding the RENDERED, human-facing fields with French. Non-rendered or
   logic fields are kept from English on purpose:
     - experience `period` ('Current' | 'Founded' | 'Previous') drives badge
       logic, so it stays in English.
     - tags, company names, icons, colors, badge images, hrefs stay as-is.
   ========================================================================== */

import { en } from './en'
import type { SiteContent } from './en'

/* ---- Services: French name + outcome by id (other fields fall back to en) -- */
const serviceFr: Record<string, { name: string; outcome: string }> = {
  'finops-program': {
    name: 'Mise en place d’un programme FinOps',
    outcome:
      'Un cadre complet de gouvernance des coûts avec des contrôles automatisés, qui livre généralement de 30 à 60 % d’économies et une réduction marquée des dépenses annuelles.',
  },
  'compute-cost-engineering': {
    name: 'Optimisation des coûts de calcul',
    outcome:
      'Réduisez de 35 à 55 % le coût des charges GPU, HPC et de calcul intensif, sans sacrifier la performance ni la vélocité des équipes.',
  },
  'compliance-acceleration': {
    name: 'Accélération de la conformité',
    outcome:
      'Prêt pour l’audit en semaines, pas en mois. Contrôles techniques en place pour SOC 2, ISO 27001, HIPAA ou PCI-DSS, avec surveillance continue.',
  },
  'data-security-governance': {
    name: 'Sécurité et gouvernance des données',
    outcome:
      'Protection des données de calibre entreprise avec contrôles automatisés : pistes d’audit, gouvernance des accès et conformité intégrées dès le départ.',
  },
  'cloud-infrastructure-security': {
    name: 'Sécurité de l’infrastructure cloud',
    outcome:
      'Renforcez votre infrastructure cloud avec une architecture Zero Trust, un accès réseau sécurisé et une défense en profondeur qui protège vos actifs des menaces actuelles.',
  },
  'ai-infrastructure': {
    name: 'Infrastructure IA et plateformes d’évaluation',
    outcome:
      'Une infrastructure prête pour la production destinée aux agents IA et à l’évaluation de modèles. Bacs à sable isolés, contrôle des coûts GPU et l’ingénierie de plateforme derrière des produits d’IA fiables.',
  },
  'ai-llm-security': {
    name: 'Sécurité et gouvernance IA / LLM',
    outcome:
      'Livrez l’IA en production en toute sécurité avec des passerelles LLM, la protection des renseignements personnels, des contrôles d’injection de requêtes et les pistes d’audit qui passent SOC 2.',
  },
  'ai-adoption': {
    name: 'Adoption de l’IA et ingénierie d’agents',
    outcome:
      'Transformez l’IA d’une démo en un système fiable grâce à la conception d’agents, aux évaluations et à l’outillage qui font bouger de vrais résultats d’affaires.',
  },
  'platform-foundation': {
    name: 'Fondation de plateforme cloud',
    outcome:
      'Une fondation prête pour la production, bâtie pour l’échelle, la sécurité et l’excellence opérationnelle dès le premier jour, avec FinOps et conformité intégrés.',
  },
  'legacy-modernization': {
    name: 'Modernisation et dette technique',
    outcome:
      'Transformez les systèmes legacy en architectures modernes et maintenables : réduisez la dette technique, améliorez la vélocité et libérez l’innovation.',
  },
  'devsecops-transformation': {
    name: 'Transformation DevSecOps',
    outcome:
      'Livrez plus vite et plus sûrement : la sécurité intégrée à chaque déploiement, sans ralentir vos équipes, grâce à des contrôles automatisés.',
  },
}

const services = Object.fromEntries(
  Object.entries(en.services).map(([key, arr]) => [
    key,
    arr.map((s) => ({ ...s, ...(serviceFr[s.id] ?? {}) })),
  ]),
) as typeof en.services

/* ---- Experiences: French rendered fields by index (period/tags kept) ------- */
type ExpFr = {
  position: string
  location: string
  description: string
  outcomes: { metric: string; description: string }[]
  achievements: string[]
}

const expFr: ExpFr[] = [
  {
    position: 'Architecte principal cloud et sécurité',
    location: 'Mountain View, Californie',
    description: 'Labo d’apprentissage par renforcement financé en série A qui propulse les meilleurs modèles.',
    outcomes: [
      { metric: 'Horizon', description: 'Tâches RL, grilles et évaluations' },
      { metric: 'Bac à sable d’éval', description: 'Plateforme microVM Firecracker' },
      { metric: '30 %', description: 'Réduction des dépenses cloud' },
    ],
    achievements: [
      'Conçu une plateforme de bac à sable d’évaluation qui exécute des charges d’agents IA dans des microVM Firecracker isolées, avec snapshot et restauration qui survivent à la préemption Spot.',
      'Rédigé des tâches RL, des grilles de notation et des évaluations sur Horizon, la plateforme centrale, en modélisant les environnements d’outils et la logique de récompense selon lesquels les agents sont notés.',
      'Apporté des contributions clés à Horizon, la plateforme RL centrale, pour les grilles, les tâches et les évaluations.',
      'Réduit les dépenses cloud de 30 % et dirigé la conformité SOC 2 et la sécurité de la plateforme.',
    ],
  },
  {
    position: 'Chef de l’ingénierie et ingénieur fondateur',
    location: 'West Hollywood, Californie',
    description:
      'CREE8 simplifie l’adoption du cloud et fluidifie les flux de travail des créateurs par la centralisation, l’efficacité et l’automatisation. La plateforme permet aux équipes créatives de tirer pleinement parti du cloud en simplifiant des processus complexes.',
    outcomes: [
      { metric: '60 %', description: 'Réduction des coûts multicloud' },
      { metric: '6 mois', description: 'SOC 2 Type II et TPN Gold' },
      { metric: '40 %', description: 'Itération plus rapide grâce au DevSecOps' },
    ],
    achievements: [
      'Bâti et dirigé une équipe de 10 ingénieurs SRE, DevOps et Full-Stack séniors pour déployer des solutions cloud de calibre entreprise.',
      'Obtenu les certifications SOC 2 Type II et TPN Gold en 6 mois en mettant en place des flux d’automatisation de la conformité assistés par l’IA.',
      'Optimisé les opérations multicloud, réduisant les coûts de 60 % sur AWS, GCP et Azure grâce aux pratiques FinOps et à des améliorations d’architecture.',
      'Mis en place des flux camera-to-cloud, améliorant l’ingestion de contenu et la collaboration de plus de 50 équipes créatives réparties.',
      'Accéléré la vitesse d’itération de 40 %, renforcé la sécurité des systèmes et accru la résilience en adoptant l’IA et les pratiques DevSecOps.',
    ],
  },
  {
    position: 'Ingénieur cloud DevOps sénior',
    location: 'Québec, Canada',
    description:
      'Dirigé le DevOps pour les sites web et la diffusion en continu. Déployé des outils, analysé des métriques, mis en place une infrastructure évolutive et renforcé la sécurité, assurant résilience et fiabilité.',
    outcomes: [
      { metric: 'Streaming', description: 'Diffusion web et en continu' },
      { metric: 'Sécurité', description: 'Infrastructure renforcée et résiliente' },
    ],
    achievements: [
      'Dirigé le DevOps des sites web et des plateformes de diffusion de Vidéotron.',
      'Déployé des outils et analysé des métriques pour améliorer la livraison et la fiabilité.',
      'Mis en place une infrastructure évolutive et renforcé la sécurité pour la résilience.',
    ],
  },
  {
    position: 'Ingénieur cloud sénior | Contractuel',
    location: 'Montréal, Canada',
    description:
      'Dirigé la reprise après sinistre multirégion et multicompte sur AWS et intégré des outils de surveillance pour la résilience.',
    outcomes: [
      { metric: 'Multirégion', description: 'Reprise après sinistre sur AWS' },
      { metric: 'Résilience', description: 'Surveillance intégrée' },
    ],
    achievements: [
      'Dirigé la reprise après sinistre multirégion et multicompte sur AWS.',
      'Intégré des outils de surveillance pour renforcer la résilience et la fiabilité.',
    ],
  },
  {
    position: 'Ingénieur cloud sénior | Contractuel',
    location: 'Montréal, Canada',
    description:
      'Mis en place un système de fidélité via l’intégration Talon One, synchronisant les données historiques et en temps réel pour un échange fiable et efficace avec les systèmes internes.',
    outcomes: [
      { metric: 'Temps réel', description: 'Synchro des données historiques et en direct' },
      { metric: 'Fidélité', description: 'Intégration Talon One' },
    ],
    achievements: [
      'Mis en place un système de fidélité par l’intégration de Talon One.',
      'Synchronisé les données historiques et en temps réel pour un échange fiable avec les systèmes internes.',
    ],
  },
  {
    position: 'Ingénieur cloud sénior',
    location: 'Montréal, Canada',
    description:
      'Dirigé la conception d’une API publique permettant l’intégration tierce avec Dormakaba. Bâti une couche d’abstraction simplifiant la configuration des serrures, améliorant l’expérience client et développeur pour le déploiement d’accès intelligents.',
    outcomes: [
      { metric: 'API publique', description: 'Plateforme d’intégration tierce' },
      { metric: 'Accès intelligent', description: 'Configuration de serrures simplifiée' },
    ],
    achievements: [
      'Dirigé la conception d’une API publique permettant l’intégration tierce avec Dormakaba.',
      'Bâti une couche d’abstraction qui a simplifié la configuration des serrures et amélioré l’expérience client.',
      'Amélioré l’expérience développeur pour le déploiement d’accès intelligents.',
    ],
  },
  {
    position: 'Développeur logiciel cloud',
    location: 'Québec, Canada',
    description:
      'Développé le PAX Divesting Assistant, une application libre-service qui améliore l’efficacité aux points de contrôle d’aéroport en laissant les passagers gérer eux-mêmes le dévestiaire. Cela réduit la dépendance aux agents et augmente l’automatisation, améliorant la sécurité et les opérations.',
    outcomes: [
      { metric: 'Libre-service', description: 'PAX Divesting Assistant' },
      { metric: 'Aéroports', description: 'Efficacité aux points de contrôle' },
    ],
    achievements: [
      'Développé le PAX Divesting Assistant, une application libre-service qui laisse les passagers gérer eux-mêmes le dévestiaire.',
      'Réduit la dépendance aux agents et accru l’automatisation, améliorant la sécurité et les opérations aux points de contrôle.',
    ],
  },
  {
    position: 'Développeur logiciel',
    location: 'Québec, Canada',
    description:
      'Développé un logiciel décentralisé optimisant le débit des bagages aux points de contrôle d’aéroport. Déployé mondialement, il améliore l’efficacité du traitement des bagages, l’expérience des passagers et la performance opérationnelle.',
    outcomes: [
      { metric: 'Mondial', description: 'Déployé dans de grands aéroports' },
      { metric: 'Débit', description: 'Traitement des bagages optimisé' },
    ],
    achievements: [
      'Développé un logiciel décentralisé optimisant le débit des bagages aux points de contrôle d’aéroport.',
      'Déployé mondialement, améliorant l’efficacité du traitement des bagages et l’expérience des passagers.',
    ],
  },
  {
    position: 'Développeur logiciel',
    location: 'Québec, Canada',
    description:
      'Développé une plateforme cloud sécurisée permettant au milieu de la santé d’orchestrer les soins aux patients en temps réel, augmentant l’efficacité, simplifiant les processus et améliorant les résultats.',
    outcomes: [
      { metric: 'Santé', description: 'Plateforme cloud sécurisée' },
      { metric: 'Temps réel', description: 'Orchestration des soins' },
    ],
    achievements: [
      'Développé une plateforme cloud sécurisée pour orchestrer les soins aux patients en temps réel.',
      'Amélioré l’efficacité et simplifié les processus cliniques.',
    ],
  },
  {
    position: 'Développeur logiciel et DevOps',
    location: 'Québec, Canada',
    description: 'Travaillé sur une suite de services qui aident l’armée à planifier et à prendre des décisions.',
    outcomes: [
      { metric: 'Défense', description: 'Services d’aide à la décision militaire' },
      { metric: 'DevOps', description: 'Livraison sécurisée' },
    ],
    achievements: [
      'Travaillé sur une suite de services aidant l’armée à planifier et à prendre des décisions.',
      'Contribué au développement et au DevOps pour une livraison sécurisée.',
    ],
  },
  {
    position: 'Cofondateur et directeur technique',
    location: 'Québec, Canada',
    description: 'Entreprise de logiciels concevant et développant des applications web sur mesure.',
    outcomes: [{ metric: 'Cofondateur', description: 'Applications web sur mesure' }],
    achievements: [
      'Cofondé une entreprise de logiciels bâtissant des applications web sur mesure.',
      'Dirigé l’orientation technique et la livraison des projets clients.',
    ],
  },
]

const experiences = en.experiences.map((e, i) => ({ ...e, ...expFr[i] }))

/* ---- Personal info, education, languages ---------------------------------- */
const personalInfo = {
  ...en.personalInfo,
  title: 'Architecte IA et Cloud | Leader en ingénierie',
  subtitle: 'FinOps • Sécurité et conformité • De 0→1 à l’échelle',
  tagline:
    'J’aide les CTO et les leaders techniques à réduire leurs coûts cloud de 30 à 60 %, à réussir les audits SOC 2 et HIPAA en quelques semaines, et à bâtir une infrastructure qui évolue sans ralentir leur feuille de route.',
  summary:
    'Je conçois et fais évoluer des systèmes infonuagiques sécurisés et économiques, et je mène les produits de 0→1 jusqu’à l’échelle entreprise. Un travail FinOps approfondi réduit les coûts cloud, et une approche DevSecOps aide les équipes à livrer plus vite sans sacrifier la sécurité. Résultat, une infrastructure résiliente qui tient sous une charge réelle et garde les coûts bas.',
  philosophy:
    'Le savoir est la richesse ultime. Plus on le partage, plus il grandit. Je crois en l’apprentissage continu et au fait d’outiller les autres par l’expertise.',
  location: 'Québec, Canada',
}

const education = { ...en.education, degree: 'Informatique' }

const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Courant' },
]

/* ========================================================================== */
export const fr: SiteContent = {
  ...en,
  personalInfo,
  services,
  experiences,
  education,
  languages,

  ui: {
    ...en.ui,
    locale: {
      code: 'fr',
      label: 'FR',
      otherLabel: 'EN',
      switchTo: 'View in English',
      otherPath: '/',
    },

    hero: {
      badge: 'Disponible pour de nouveaux mandats',
      headlineLead: 'J’aide les leaders techniques à',
      headlineAccent: 'livrer plus vite, réduire les coûts, devenir sécurisés et conformes',
      subtitleLead: 'Bâtisseur et leader en ingénierie,',
      subtitleStrong: 'des résultats en semaines, pas en trimestres',
      subtitleTail: '. Aucun contrat à long terme requis.',
      trustPoints: [
        'Expert IA et Cloud',
        'Sécurité et conformité',
        'FinOps',
        'Créateur d’Eusli.io',
        'Expérience Fortune 500 et startups',
      ],
      ctaPrimary: 'Réserver un appel stratégique gratuit',
      ctaLinkedIn: 'LinkedIn',
      ctaResume: 'CV',
    },

    about: {
      label: 'À propos',
      facts: ['Fier papa de deux garçons', 'Planchiste passionné', 'Passionné de techno'],
      tags: ['Québec, Canada', 'Français et anglais'],
      building: {
        pin: 'Aussi en construction',
        body:
          'Je suis le créateur d’Eusli.io. Je pense que la prochaine version du web, le web 3.0, reste à bâtir, et j’ai l’intention de la bâtir. Une version livrée à la fois, comme je travaille avec mes clients.',
        linkLabel: 'Visiter',
      },
    },

    work: {
      sectionName: 'Ma façon de travailler',
      headingLead: 'Des résultats par',
      headingAccent: 'courtes boucles',
      lead: 'Je livre d’abord une première version simple et utile, puis je mesure comment elle est utilisée dans la vraie vie. J’écoute le client, je retire ce qui rate et j’affine ce qui fonctionne. Chaque boucle rapproche le travail du résultat dont vous avez réellement besoin.',
      pull: 'Le client écrit la feuille de route.',
      phases: [
        { tag: '01', title: 'Livrer', blurb: 'Mettre vite une première version simple et utile entre de vraies mains.' },
        { tag: '02', title: 'Mesurer', blurb: 'Observer l’usage réel et les chiffres qui comptent.' },
        { tag: '03', title: 'Écouter', blurb: 'S’asseoir avec le client et comprendre ce qui aide vraiment.' },
        { tag: '04', title: 'Itérer', blurb: 'Retirer ce qui rate, affiner ce qui fonctionne, livrer de nouveau.' },
      ],
      centerEyebrow: 'La cible',
      centerLabel: 'Adéquation produit-marché',
      loopHint: 'boucle continue',
      interactHint: 'Survolez ou touchez une étape',
    },

    services: {
      label: 'Services',
      headingLead: 'Conseil',
      headingAccent: '·',
      headingTail: 'leadership en ingénierie.',
      lead: 'Des modèles d’engagement flexibles avec des résultats clairs. De 0→1 jusqu’à l’échelle entreprise. Des résultats en semaines, pas en trimestres.',
      categories: {
        ai: {
          title: 'IA',
          subtitle: 'Infrastructure IA • Sécurité LLM • Agents et évaluations',
          description:
            'Faites passer l’IA du prototype au fiable. Infrastructure, sécurité, évaluations et ingénierie d’agents pour les équipes qui livrent de vrais produits d’IA.',
        },
        architecture: {
          title: 'Architecture',
          subtitle: 'Modernisation • Plateforme • DevSecOps',
          description:
            'Du legacy au moderne. Bâtir des fondations évolutives, éliminer la dette technique et accélérer votre feuille de route.',
        },
        finops: {
          title: 'FinOps',
          subtitle: 'Intelligence des coûts cloud',
          description:
            'Réduisez vos dépenses cloud de 30 à 50 % grâce à une gouvernance qui évolue. ROI typique de 5 à 10 fois en 12 mois.',
        },
        security: {
          title: 'Sécurité et conformité',
          subtitle: 'SOC 2 • HIPAA • ISO 27001 • Sécurité de l’IA',
          description:
            'Prêt pour l’audit en semaines, pas en mois. Une sécurité de calibre entreprise qui rassure clients et assureurs.',
        },
      },
      engagementTitle: 'Comment nous travaillons ensemble',
      engagementBodyLead: 'Chaque mandat comprend',
      engagementBodyStrong: 'une portée et des livrables clairement définis',
      engagementBodyTail:
        '. Des modèles de tarification flexibles, au forfait ou à l’heure, selon vos besoins. Nous discuterons de vos exigences précises et vous proposerons une offre sur mesure.',
      engagementTags: [
        'Adapté à votre environnement',
        'Livrables clairs',
        'Échéancier défini',
        'Résultats mesurables',
      ],
      provenResultsStrong: 'Résultats prouvés :',
      provenResultsTail:
        ' Les clients FinOps obtiennent généralement un ROI de 5 à 10 fois en 12 mois. Les parcours de conformité accélérés font gagner de 3 à 6 mois par rapport à une approche maison.',
      scheduleCta: 'Planifier une consultation',
      scheduleHint: '15 minutes pour discuter de vos défis et voir comment nous pouvons aider.',
    },

    experience: {
      label: 'Parcours',
      heading: 'Expérience',
      lead: 'Des résultats concrets en cloud, sécurité et infrastructure.',
      current: 'Actuel',
      founder: 'Fondateur',
      via: 'via',
      keyAchievements: 'Réalisations clés',
    },

    certifications: {
      label: 'Accréditations',
      headingLead: 'Certifications',
      headingAccent: '·',
      headingTail: 'formation.',
      awsTitle: 'Certifications AWS',
      educationTitle: 'Formation',
      languagesTitle: 'Langues',
    },

    footer: {
      tagline: 'Bâtisseur et leader en ingénierie.',
      blurb: 'J’aide les équipes à livrer plus vite, réduire les coûts et devenir conformes.',
      bookCall: 'Réserver un appel',
      exploreTitle: 'Explorer',
      connectTitle: 'Contact',
      quickLinks: [
        { href: '#services', label: 'Services' },
        { href: '#about', label: 'À propos' },
        { href: '#experience', label: 'Expérience' },
        { href: '#certifications', label: 'Certifications' },
      ],
      rights: 'Tous droits réservés.',
      builtWith: 'Conçu avec Next.js, TypeScript et Tailwind CSS',
    },

    share: {
      title: 'Partager cette page',
      copyLink: 'Copier le lien',
      linkCopied: 'Lien copié',
      shareOnLinkedIn: 'Partager sur LinkedIn',
      shareByEmail: 'Partager par courriel',
    },
  },
}
