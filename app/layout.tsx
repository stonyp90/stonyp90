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
    default: 'Anthony Paquet | Head of Engineering & Cloud Architect',
    template: '%s | Anthony Paquet',
  },
  description: 'Anthony Paquet is a Visionary Engineering Leader and Head of Engineering at CREE8. Specializing in AI-powered transformation, cloud-native architecture (AWS, GCP, Azure), DevSecOps, and FinOps. Expert in building enterprise-grade solutions from 0→1 to scale.',
  keywords: [
    'Anthony Paquet',
    'Head of Engineering',
    'Engineering Leader',
    'Cloud Architect',
    'AWS Solutions Architect',
    'DevSecOps',
    'FinOps',
    'AI Transformation',
    'Cloud Native',
    'CREE8',
    'AI Agent Orchestrator',
    'Software Engineering',
    'Full Stack Developer',
    'Quebec Canada',
    'Tech Leadership',
    'SOC 2',
    'TPN Gold',
    'Clean Architecture',
    'Domain Driven Design',
    'Microservices',
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
    title: 'Anthony Paquet | Head of Engineering & Cloud Architect',
    description: 'Visionary Engineering Leader specializing in AI-powered transformation, cloud-native architecture, DevSecOps, and FinOps. Building enterprise-grade solutions at CREE8.',
    siteName: 'Anthony Paquet - Engineering Portfolio',
    images: [
      {
        url: '/images/anthony-paquet.jpg',
        width: 400,
        height: 400,
        alt: 'Anthony Paquet - Head of Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthony Paquet | Head of Engineering & Cloud Architect',
    description: 'Visionary Engineering Leader specializing in AI-powered transformation and cloud-native architecture',
    images: ['/images/anthony-paquet.jpg'],
    creator: '@anthonypaquet',
  },
  alternates: {
    canonical: 'https://www.anthonypaquet.com',
  },
  category: 'technology',
  classification: 'Portfolio',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anthony Paquet',
  url: 'https://www.anthonypaquet.com',
  image: 'https://www.anthonypaquet.com/images/anthony-paquet.jpg',
  jobTitle: 'Head of Engineering',
  worksFor: {
    '@type': 'Organization',
    name: 'CREE8',
  },
  description: 'Visionary Engineering Leader specializing in AI-powered transformation, cloud-native architecture, and DevSecOps.',
  sameAs: [
    'https://linkedin.com/in/anthony-paquet-94a31085',
    'https://github.com/stonyp90',
  ],
  knowsAbout: [
    'Cloud Architecture',
    'AWS',
    'Google Cloud Platform',
    'Microsoft Azure',
    'DevSecOps',
    'FinOps',
    'AI/ML',
    'Microservices',
    'Clean Architecture',
    'Domain Driven Design',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Cégep Garneau',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Quebec',
    addressCountry: 'Canada',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.anthonypaquet.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
