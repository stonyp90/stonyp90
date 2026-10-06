'use client'

import { useSyncExternalStore } from 'react'

const query = '(prefers-reduced-motion: reduce)'
function subscribe(onChange: () => void) {
  const media = window.matchMedia(query)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

/** Stable accessible SSR snapshot, with live system preference updates. */
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => true)
}
