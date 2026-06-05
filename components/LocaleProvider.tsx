'use client'

import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { content, type Locale, type SiteContent } from '@/lib/content'

type LocaleValue = { locale: Locale; c: SiteContent }

const LocaleContext = createContext<LocaleValue>({ locale: 'en', c: content.en })

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  // Keep <html lang> accurate per route (root layout renders lang="en" statically).
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, c: content[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

/** Active locale's full content object. */
export function useContent(): SiteContent {
  return useContext(LocaleContext).c
}

/** Active locale code ('en' | 'fr'). */
export function useLocale(): Locale {
  return useContext(LocaleContext).locale
}
