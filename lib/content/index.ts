/* Locale content registry + types. */

import { en } from './en'
import { fr } from './fr'
import type { SiteContent } from './en'

export const content = { en, fr } as const
export type Locale = keyof typeof content
export const locales: Locale[] = ['en', 'fr']
export type { SiteContent }
