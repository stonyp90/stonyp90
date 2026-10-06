'use client'

import { createContext, useContext, type ReactNode } from 'react'
import type { Locale, SiteContent } from '@/lib/content'

type LocaleValue = { locale: Locale; c: SiteContent }

const LocaleContext = createContext<LocaleValue | null>(null)

export function LocaleProvider({
  locale,
  c,
  children,
}: {
  locale: Locale
  c: SiteContent
  children: ReactNode
}) {
  return (
    <LocaleContext.Provider value={{ locale, c }}>
      {children}
    </LocaleContext.Provider>
  )
}

/** Active locale's full content object. */
export function useContent(): SiteContent {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('Site content requires LocaleProvider')
  return value.c
}

/** Active locale code ('en' | 'fr'). */
export function useLocale(): Locale {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('Site locale requires LocaleProvider')
  return value.locale
}
