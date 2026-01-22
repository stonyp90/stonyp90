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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cyber-black transition-opacity duration-300 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyber-blue/20 border-t-cyber-blue rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyber-purple/20 border-t-cyber-purple rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
        </div>
      </div>
    </div>
  )
}
