import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anthony Paquet | Engineering Leader & Founding Engineer',
  description: 'Visionary Engineering Leader specializing in AI-powered transformation, cloud-native architecture, and DevSecOps. Founding Engineer at CREE8, building enterprise-grade solutions.',
  keywords: ['Engineering Leader', 'Cloud Architecture', 'AI Transformation', 'DevSecOps', 'FinOps', 'AWS', 'Founding Engineer', 'CREE8'],
  authors: [{ name: 'Anthony Paquet' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anthonypaquet.com',
    title: 'Anthony Paquet | Engineering Leader',
    description: 'Visionary Engineering Leader specializing in AI-powered transformation and cloud-native architecture',
    siteName: 'Anthony Paquet Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthony Paquet | Engineering Leader',
    description: 'Visionary Engineering Leader specializing in AI-powered transformation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
