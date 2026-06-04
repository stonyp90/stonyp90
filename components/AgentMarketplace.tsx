'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const features = [
  'Every RDPRM right category',
  'Built for Quebec practice',
  'Client-ready Excel, Word & PDF',
  'Hypothec deduplication',
]

export default function AgentMarketplace() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 bg-paper-soft border-y border-[var(--color-border)]"
      id="tablix"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto px-6 lg:px-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <div className="section-label mb-8">
            <span className="num">03</span>
            <span className="name">Product · Quebec legal</span>
          </div>

          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-5xl mb-6">
            An afternoon of paralegal work <span className="accent-text">·</span> done in seconds.
          </h2>

          <p className="editorial-lead mb-4">
            Drop an RDPRM, REQ, or hypothec PDF into <strong>Tablix</strong> and get back clean
            cross-reference tables as Excel, Word, or branded PDF, formatted the way Quebec firms
            deliver them to clients.
          </p>
          <p className="editorial-lead">
            Built for Quebec lawyers, notaries, and legal assistants. Every RDPRM right category is
            covered. Hypothec entries are deduplicated across entity names.
          </p>
        </motion.div>

        {/* Product Card */}
        <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
          <div className="bg-paper border border-[var(--color-border)] hover:border-accent transition-colors duration-300 overflow-hidden">
            <div className="h-1 w-full bg-accent" aria-hidden="true" />
            <div className="p-6 sm:p-10">
              {/* Top row: brand lockup + status */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <a
                  href="https://tablix.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Tablix, Quebec legal-document extraction SaaS"
                  title="Tablix for RDPRM, REQ, and hypothec PDF extraction"
                  className="inline-flex items-center gap-3 sm:gap-4 hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/images/logos/tablix-mark.svg"
                    alt="Tablix logo, Quebec legal-document extraction SaaS"
                    width={56}
                    height={56}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    priority={false}
                  />
                  <span className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-ink">
                    Tablix<span className="text-tablix-green">.</span>
                  </span>
                </a>

                <span className="status-live self-start">● Live · Quebec</span>
              </div>

              <p className="editorial-eyebrow mb-3">RDPRM · REQ · Hypothecs</p>

              <p className="text-ink-soft leading-relaxed text-sm sm:text-base mb-6 max-w-2xl">
                Drop your first RDPRM, REQ, or hypothec PDF and watch it convert in seconds. No
                credit card required.
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {features.map((feature) => (
                  <span key={feature} className="tech-tag">
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <a
                  href="https://tablix.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group/cta self-start"
                >
                  <span>Try Tablix free</span>
                  <FaArrowRight className="text-sm transition-transform group-hover/cta:translate-x-1" />
                </a>

                <p className="font-mono text-xs text-ink-soft">
                  Built in Quebec · All 112 RDPRM right categories · Excel &amp; Word export
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
