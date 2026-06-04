'use client'

import { useEffect, useState } from 'react'

export default function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Start fade out immediately, then remove from DOM
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 50)

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 400) // Match transition duration

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cream transition-opacity duration-300 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
