'use client'

import { motion } from 'framer-motion'
import {
  FaCalendarAlt,
  FaArrowRight,
  FaCheck,
  FaLinkedin,
  FaFileDownload,
} from 'react-icons/fa'
import { useContent } from '@/components/LocaleProvider'

export default function Hero() {
  const c = useContent()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="paper-hero relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-0 sm:pb-0">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <span className="status-live">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-live)]" aria-hidden="true" />
            {c.ui.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="editorial-display !leading-[1.2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-7 text-balance"
        >
          {c.ui.hero.headlineLead}
          <br />
          <span className="underline-accent">{c.ui.hero.headlineAccent}</span>
          <span className="accent-text">.</span>
        </motion.h1>

        {/* Value proposition */}
        <motion.p
          variants={itemVariants}
          className="editorial-lead mx-auto max-w-2xl mb-9 text-base sm:text-lg text-balance"
        >
          {c.ui.hero.subtitleLead}{' '}
          <strong className="text-accent-text">{c.ui.hero.subtitleStrong}</strong>{c.ui.hero.subtitleTail}
        </motion.p>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex flex-wrap justify-center gap-x-7 gap-y-2.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft"
        >
          {c.ui.hero.trustPoints.map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-ink"
            >
              <FaCheck className="text-[0.6rem] text-accent-text shrink-0" aria-hidden="true" />
              {point}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <a
            href={c.personalInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
          >
            <FaCalendarAlt className="text-base" />
            <span>{c.ui.hero.ctaPrimary}</span>
            <FaArrowRight className="text-sm" />
          </a>
          <div className="flex gap-3 sm:gap-4 justify-center">
            <a
              href={c.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex-1 sm:flex-none justify-center"
            >
              <FaLinkedin className="text-base" />
              <span className="hidden xs:inline">{c.ui.hero.ctaLinkedIn}</span>
            </a>
            <a
              href="/AnthonyPaquet.pdf"
              download
              className="btn-ghost flex-1 sm:flex-none justify-center"
            >
              <FaFileDownload className="text-base" />
              <span>{c.ui.hero.ctaResume}</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-14 flex justify-center">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--color-border-strong)] p-1.5"
            aria-hidden="true"
          >
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 7, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1.5 w-1 rounded-full bg-accent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
