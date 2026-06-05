import type { Metadata } from 'next'
import Sections from '@/components/Sections'
import { LocaleProvider } from '@/components/LocaleProvider'

export const metadata: Metadata = {
  title: 'Architecte IA et Cloud, Leader en ingénierie',
  description:
    'Architecte IA et Cloud. Réduisez vos coûts cloud de 30 à 60 %, obtenez SOC 2 / HIPAA en quelques semaines, et passez de 0 à 1 jusqu’à l’échelle entreprise.',
  alternates: {
    canonical: 'https://www.anthonypaquet.com/fr',
    languages: {
      'en-CA': 'https://www.anthonypaquet.com',
      'fr-CA': 'https://www.anthonypaquet.com/fr',
      'x-default': 'https://www.anthonypaquet.com',
    },
  },
}

export default function HomeFr() {
  return (
    <LocaleProvider locale="fr">
      <Sections />
    </LocaleProvider>
  )
}
