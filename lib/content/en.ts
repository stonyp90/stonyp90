/* ==========================================================================
   English site content (canonical shape).
   Section data is reused from lib/data.ts; UI copy lives under `ui`.
   The French file (fr.ts) mirrors this exact shape.
   ========================================================================== */

import {
  personalInfo,
  socialLinks,
  services,
  experiences,
  certifications,
  education,
  languages,
} from '@/lib/data'

export const en = {
  personalInfo,
  socialLinks,
  services,
  experiences,
  certifications,
  education,
  languages,

  ui: {
    /* Language switch */
    locale: {
      code: 'en',
      label: 'EN',
      otherLabel: 'FR',
      switchTo: 'Voir en français',
      otherPath: '/fr/',
    },

    hero: {
      badge: 'Currently accepting new engagements',
      headlineLead: 'I help engineering leaders',
      headlineAccent: 'ship faster, cut costs, become secure and compliant',
      subtitleLead: 'Builder & Engineering Leader,',
      subtitleStrong: 'results in weeks, not quarters',
      subtitleTail: '. No long-term contracts required.',
      trustPoints: [
        'AI & Cloud Expert',
        'Security and compliance',
        'FinOps',
        'Fortune 500 & Startup Experience',
      ],
      ctaPrimary: 'Book Free Strategy Call',
      ctaLinkedIn: 'LinkedIn',
      ctaResume: 'Resume',
    },

    about: {
      label: 'About',
      facts: ['Proud dad of two', 'Avid snowboarder', 'Tech passionate'],
      tags: ['Quebec, Canada', 'French & English'],
    },

    work: {
      sectionName: 'How I Work',
      headingLead: 'Outcomes by',
      headingAccent: 'short loops',
      lead: 'I ship a small, useful first version, then measure how it gets used in the real world. I listen to the client, cut what misses, and sharpen what lands. Each loop moves the work closer to the outcome you actually need.',
      pull: 'The client writes the roadmap.',
      phases: [
        { tag: '01', title: 'Ship', blurb: 'Put a small, useful first version in real hands fast.' },
        { tag: '02', title: 'Measure', blurb: 'Watch real usage and the numbers that matter.' },
        { tag: '03', title: 'Listen', blurb: 'Sit with the client and learn what actually helps.' },
        { tag: '04', title: 'Iterate', blurb: 'Cut what misses, sharpen what lands, ship again.' },
      ],
      centerEyebrow: 'The target',
      centerLabel: 'Product-market fit',
      loopHint: 'continuous loop',
      interactHint: 'Hover or tap a step',
    },

    services: {
      label: 'Services',
      headingLead: 'Consulting',
      headingAccent: '·',
      headingTail: 'engineering leadership.',
      lead: 'Flexible engagement models with clear outcomes. From 0→1 to enterprise scale. Results in weeks, not quarters.',
      categories: {
        ai: {
          title: 'AI',
          subtitle: 'AI Infrastructure • LLM Security • Agents & Evals',
          description:
            'Take AI from demo to dependable. Infrastructure, security, evals, and agent engineering for teams shipping real AI products.',
        },
        architecture: {
          title: 'Architecture',
          subtitle: 'Modernization • Platform • DevSecOps',
          description:
            'From legacy to modern—build scalable foundations, eliminate tech debt, and accelerate your roadmap.',
        },
        finops: {
          title: 'FinOps',
          subtitle: 'Cloud Cost Intelligence',
          description:
            'Cut cloud spend 30–50% with governance that scales. Typical ROI: 5–10x within 12 months.',
        },
        security: {
          title: 'Security & Compliance',
          subtitle: 'SOC2 • HIPAA • ISO 27001 • AI Security',
          description:
            'Audit-ready in weeks, not months. Enterprise-grade security that satisfies customers and insurers.',
        },
      },
      engagementTitle: 'How we work together',
      engagementBodyLead: 'All engagements include',
      engagementBodyStrong: 'clearly defined scope and deliverables',
      engagementBodyTail:
        '. Flexible pricing models—fixed-price or hourly—to fit your needs. We’ll discuss your specific requirements and provide a tailored proposal.',
      engagementTags: [
        'Scoped for your environment',
        'Clear deliverables',
        'Defined timeline',
        'Measurable outcomes',
      ],
      provenResultsStrong: 'Proven results:',
      provenResultsTail:
        ' FinOps clients typically see 5–10x ROI within 12 months. Compliance fast-tracks save 3–6 months vs DIY approaches.',
      scheduleCta: 'Schedule a consultation',
      scheduleHint: '15 minutes to discuss your challenges and explore how we can help.',
    },

    experience: {
      label: 'Track Record',
      heading: 'Experience',
      lead: 'Proven outcomes across cloud, security, and infrastructure.',
      current: 'Current',
      founder: 'Founder',
      via: 'via',
      keyAchievements: 'Key Achievements',
    },

    certifications: {
      label: 'Credentials',
      headingLead: 'Certifications',
      headingAccent: '·',
      headingTail: 'education.',
      awsTitle: 'AWS Certifications',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
    },

    footer: {
      tagline: 'Builder and engineering leader.',
      blurb: 'I help teams ship faster, cut costs, and become compliant.',
      bookCall: 'Book a call',
      exploreTitle: 'Explore',
      connectTitle: 'Connect',
      quickLinks: [
        { href: '#services', label: 'Services' },
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#certifications', label: 'Certifications' },
      ],
      rights: 'All rights reserved.',
      builtWith: 'Built with Next.js, TypeScript & Tailwind CSS',
    },

    share: {
      title: 'Share this page',
      copyLink: 'Copy link',
      linkCopied: 'Link copied',
      shareOnLinkedIn: 'Share on LinkedIn',
      shareByEmail: 'Share by email',
    },
  },
}

export type SiteContent = typeof en
