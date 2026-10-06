'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import { useMotionPreference } from './useMotionPreference'

/** Progressive enhancement: exported HTML remains readable before hydration. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  const reduce = useMotionPreference()
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        target.classList.remove('reveal-pending')
        observer.unobserve(target)
      })
    }, { threshold: 0.04 })

    const reset = () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-pending'))
      if (preference.matches) return
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) return
        element.classList.add('reveal-pending')
        observer.observe(element)
      })
    }
    reset()
    preference.addEventListener('change', reset)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', reset)
      elements.forEach((element) => element.classList.remove('reveal-pending'))
    }
  }, [])

  return (
    <MotionConfig reducedMotion={reduce ? 'always' : 'never'}>
      <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
    </MotionConfig>
  )
}
