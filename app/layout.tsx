import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0f',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anthonypaquet.com'),
  title: {
    default: 'Anthony Paquet | AI & Cloud Security Architect | FinOps, SOC2, Disaster Recovery',
    template: '%s | Anthony Paquet',
  },
  description: 'Engineering Leader & Cloud Architect helping growth-stage companies cut cloud costs 30-60%, achieve SOC2/HIPAA/PCI compliance, and build from 0→1 to scale. AWS, Azure, GCP expertise across Financial Services, Healthcare, Media & Entertainment, and high-growth startups.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  keywords: [
    // Primary services
    'Cloud Security Consultant',
    'FinOps Consultant',
    'SOC2 Implementation',
    'HIPAA Compliance Consultant',
    'AI Security Consultant',
    'Disaster Recovery Architect',
    'Cloud Cost Optimization',
    // Platforms
    'AWS Security Architect',
    'Azure Security Consultant',
    'GCP FinOps Expert',
    'Multi-cloud Architect',
    // Industries
    'FinTech Cloud Security',
    'Healthcare Cloud Compliance',
    'AI Startup SOC2',
    'SaaS Security Consultant',
    // Compliance frameworks
    'SOC 2 Type II',
    'ISO 27001 Implementation',
    'PCI-DSS Compliance',
    'HIPAA Technical Controls',
    // Technical
    'DevSecOps Consultant',
    'Cloud Architecture Review',
    'GPU Cost Optimization',
    'LLM Security',
    // Location
    'Cloud Consultant Canada',
    'Remote Cloud Architect',
    // Name
    'Anthony Paquet',
  ],
  authors: [{ name: 'Anthony Paquet', url: 'https://www.anthonypaquet.com' }],
  creator: 'Anthony Paquet',
  publisher: 'Anthony Paquet',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_CA',
    url: 'https://www.anthonypaquet.com',
    title: 'Anthony Paquet | AI & Cloud Security Architect',
    description: 'Engineering Leader helping companies cut cloud costs 30-60%, achieve compliance (SOC2, HIPAA, PCI), and build from 0→1 to scale. Results in weeks.',
    siteName: 'Anthony Paquet - Cloud Security & FinOps Consulting',
    images: [
      {
        url: '/images/anthony-paquet.jpg',
        width: 400,
        height: 400,
        alt: 'Anthony Paquet - AI & Cloud Security Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthony Paquet | AI & Cloud Security Architect',
    description: 'Cut cloud costs 30-60%, achieve SOC2/HIPAA compliance, build and scale cloud systems. Expert consulting.',
    images: ['/images/anthony-paquet.jpg'],
    creator: '@anthonypaquet',
  },
  alternates: {
    canonical: 'https://www.anthonypaquet.com',
  },
  category: 'technology',
  classification: 'Professional Services',
}

// Person Schema - for knowledge graph
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.anthonypaquet.com/#person',
  name: 'Anthony Paquet',
  url: 'https://www.anthonypaquet.com',
  image: 'https://www.anthonypaquet.com/images/anthony-paquet.jpg',
  jobTitle: 'AI & Cloud Security Architect',
  description: 'Independent cloud consultant specializing in FinOps (30-60% cost reduction), compliance (SOC2, HIPAA, PCI-DSS), AI/LLM security, and disaster recovery. Serving Financial Services, Healthcare, AI startups, and Defense industries.',
  sameAs: [
    'https://linkedin.com/in/anthony-paquet-94a31085',
    'https://github.com/stonyp90',
  ],
  knowsAbout: [
    'Cloud Cost Optimization',
    'FinOps',
    'SOC2 Compliance',
    'HIPAA Compliance',
    'PCI-DSS',
    'ISO 27001',
    'AWS Security',
    'Azure Security',
    'Google Cloud Platform',
    'AI/LLM Security',
    'Disaster Recovery',
    'DevSecOps',
    'GPU Cost Optimization',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'AWS Certified Solutions Architect - Associate',
      credentialCategory: 'certification',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'AWS Certified Developer - Associate',
      credentialCategory: 'certification',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Quebec',
    addressCountry: 'Canada',
  },
}

// Professional Service Schema - for service discovery
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.anthonypaquet.com/#service',
  name: 'Anthony Paquet Cloud Consulting',
  description: 'Cloud security, FinOps, and compliance consulting for growth-stage companies. From 0→1 to enterprise scale.',
  url: 'https://www.anthonypaquet.com',
  image: 'https://www.anthonypaquet.com/images/anthony-paquet.jpg',
  priceRange: '$8,500 - $24,500',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide (Remote)',
  },
  serviceType: [
    'Cloud Cost Optimization',
    'FinOps Consulting',
    'SOC2 Implementation',
    'HIPAA Compliance',
    'AI Security Consulting',
    'Disaster Recovery Architecture',
    'DevSecOps Transformation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cloud Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise FinOps Program',
          description: 'Full cost governance framework with executive visibility. Typically saves 6 figures annually.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '18500',
          priceCurrency: 'USD',
          minPrice: '18500',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Security Transformation',
          description: 'Enterprise-grade security posture for compliance with SOC2, HIPAA, PCI-DSS, ISO 27001.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '18500',
          priceCurrency: 'USD',
          minPrice: '18500',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise DR Architecture',
          description: 'Multi-region disaster recovery meeting insurance and board requirements.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '24500',
          priceCurrency: 'USD',
          minPrice: '24500',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI/LLM Security & Governance',
          description: 'Production-safe AI with compliance controls, PII protection, and audit trails.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '16500',
          priceCurrency: 'USD',
          minPrice: '16500',
        },
      },
    ],
  },
  provider: {
    '@id': 'https://www.anthonypaquet.com/#person',
  },
}

// FAQ Schema - optimized for LLM citation
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Anthony Paquet offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anthony Paquet offers cloud consulting including: FinOps/Cloud Cost Optimization (30-60% savings), Security & Compliance (SOC2, HIPAA, PCI-DSS, ISO 27001), Data Security & Governance, Disaster Recovery Architecture, and DevSecOps Transformation. Flexible engagement models to fit your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does Anthony Paquet serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anthony Paquet serves Financial Services & FinTech, Healthcare & HealthTech, AI & SaaS startups (Series A-C), Defense & Government, Media & Entertainment, E-commerce, Telecommunications, and IoT companies. He has delivered SOC2 and TPN/MPAA certifications, HIPAA compliance, and multi-region disaster recovery for regulated industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does cloud consulting cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anthony Paquet offers flexible engagement models for: Cloud Cost Optimization, Security & Compliance, Data Security & Governance, Disaster Recovery Architecture, and DevSecOps Transformation. Clear deliverables, typically 2-8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cloud platforms does Anthony Paquet work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anthony Paquet is expert in AWS, Azure, and Google Cloud Platform (GCP), including multi-cloud environments. He holds AWS Solutions Architect and Developer certifications and has delivered cost optimization and security projects across all three major cloud providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Anthony Paquet help with SOC2 compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Anthony Paquet has achieved SOC2 Type II certification for clients in 6 months. His Compliance Acceleration service ($14,500+) includes gap analysis, control mapping, IAM implementation, secrets management, logging & evidence automation, and auditor-ready documentation for SOC2, ISO 27001, HIPAA, and PCI-DSS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Anthony Paquet help with AI and LLM security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The AI/LLM Security & Governance service ($16,500+) includes LLM gateway with policy enforcement, PII/PHI detection and redaction, prompt injection controls, usage metering and cost limits, and compliance audit logging. Designed for production AI systems requiring SOC2 compliance.',
      },
    },
  ],
}

// Combined schema array
const jsonLd = [personSchema, serviceSchema, faqSchema]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.anthonypaquet.com" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
