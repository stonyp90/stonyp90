'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaAward, FaGraduationCap, FaLanguage } from 'react-icons/fa'
import { certifications, education, languages } from '@/lib/data'

export default function Certifications() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-20 lg:py-28" id="certifications">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-6 lg:px-12"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="section-label mb-8">
          <span className="num">05</span>
          <span className="name">Credentials</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 variants={itemVariants} className="editorial-h2 text-3xl lg:text-4xl mb-12">
          Certifications <span className="accent-text">·</span> education.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="h-full bg-paper border border-[var(--color-border)] rounded-sm p-6 sm:p-8 shadow-[0_16px_36px_-28px_rgba(26,26,26,0.16)]">
              <h3 className="editorial-h3 text-xl lg:text-2xl mb-6 flex items-center gap-3">
                <FaAward className="text-accent-text text-xl" aria-hidden="true" />
                AWS Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-sm border border-[var(--color-border)] bg-paper-soft p-3 sm:p-4 transition-[border-color,transform] duration-200 ease-smooth hover:border-accent hover:-translate-y-0.5"
                  >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                      <Image
                        src={cert.badgeImage}
                        alt={cert.name}
                        width={64}
                        height={64}
                        className="rounded-sm"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-ink text-sm sm:text-base leading-tight mb-0.5">
                        {cert.name}
                      </h4>
                      <p className="font-mono text-[11px] sm:text-xs text-ink-soft">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Languages */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Education */}
            <div className="bg-paper border border-[var(--color-border)] rounded-sm p-6 sm:p-8 shadow-[0_16px_36px_-28px_rgba(26,26,26,0.16)] transition-[border-color,box-shadow] duration-200 ease-smooth hover:border-border-strong hover:shadow-[0_22px_44px_-28px_rgba(26,26,26,0.22)]">
              <h3 className="editorial-h3 text-xl lg:text-2xl mb-4 flex items-center gap-3">
                <FaGraduationCap className="text-accent-text text-xl" aria-hidden="true" />
                Education
              </h3>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-ink text-lg sm:text-xl">{education.degree}</h4>
                <p className="text-accent-text font-medium text-sm sm:text-base">{education.institution}</p>
                <p className="font-mono text-xs text-ink-soft">{education.period}</p>
                <p className="font-mono text-xs text-ink-soft">{education.location}</p>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-paper border border-[var(--color-border)] rounded-sm p-6 sm:p-8 shadow-[0_16px_36px_-28px_rgba(26,26,26,0.16)] transition-[border-color,box-shadow] duration-200 ease-smooth hover:border-border-strong hover:shadow-[0_22px_44px_-28px_rgba(26,26,26,0.22)]">
              <h3 className="editorial-h3 text-xl lg:text-2xl mb-4 flex items-center gap-3">
                <FaLanguage className="text-accent-text text-xl" aria-hidden="true" />
                Languages
              </h3>
              <div className="divide-y divide-[var(--color-border)]">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between gap-3 py-2.5">
                    <span className="font-display font-bold text-ink text-base sm:text-lg">{lang.name}</span>
                    <span className="font-mono text-xs sm:text-sm uppercase tracking-wide text-accent-text">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
