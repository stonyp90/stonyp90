'use client'

import Link from 'next/link'
import { useContent } from '@/components/LocaleProvider'

/** Fixed EN | FR switch, top-right on every section. */
export default function LanguageToggle() {
  const { label, otherLabel, otherPath, switchTo } = useContent().ui.locale

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-0.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-paper)]/90 p-0.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] shadow-[0_10px_30px_-18px_rgba(26,26,26,0.45)] backdrop-blur">
        <span
          aria-current="true"
          className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[var(--color-paper)]"
        >
          {label}
        </span>
        <Link
          href={otherPath}
          aria-label={switchTo}
          className="rounded-full px-2.5 py-1 text-[var(--color-ink-soft)] transition-colors duration-200 hover:text-[var(--color-ink)]"
        >
          {otherLabel}
        </Link>
      </div>
    </div>
  )
}
