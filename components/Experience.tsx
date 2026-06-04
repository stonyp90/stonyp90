'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBriefcase, FaMapMarkerAlt, FaChevronDown, FaTrophy } from 'react-icons/fa'
import { experiences } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(experiences.length - 1)

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section ref={ref} className="py-20 lg:py-28" id="experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-6 lg:px-12"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="section-label mb-8">
            <span className="num">04</span>
            <span className="name">Track Record</span>
          </div>
          <h2 className="editorial-h2 text-3xl lg:text-4xl mb-4">
            Experience
          </h2>
          <p className="editorial-lead max-w-xl">
            Proven outcomes across cloud, security, and infrastructure.
          </p>
        </motion.div>

        {/* Timeline - centered with max width for readability */}
        <div className="relative max-w-4xl">
          {/* Vertical line — single thin accent rule */}
          <div className="absolute left-[7px] sm:left-4 md:left-8 top-0 bottom-0 w-px bg-[var(--color-border-strong)]" />

          {/* Experience items */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {experiences.map((exp, index) => {
              const isCurrent = exp.period === 'Current'
              const isFounded = exp.period === 'Founded'
              const isExpanded = expandedIndex === index

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-6 sm:pl-12 md:pl-20"
                >
                  {/* Timeline dot — filled accent for current, ink outline otherwise */}
                  <div
                    className={`absolute left-[7px] sm:left-4 md:left-8 top-4 sm:top-5 md:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 -translate-x-[5px] sm:-translate-x-[6px] md:-translate-x-[7px] rounded-full border-2 border-cream ${
                      isCurrent ? 'bg-accent' : 'bg-paper ring-1 ring-[var(--color-border-strong)]'
                    }`}
                  />

                  {/* Content card — bordered paper */}
                  <motion.div
                    className={`group rounded-sm p-4 sm:p-5 md:p-6 cursor-pointer bg-paper border transition-[border-color,transform,box-shadow] duration-300 ease-smooth shadow-[0_16px_36px_-28px_rgba(26,26,26,0.16)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-28px_rgba(26,26,26,0.22)] ${
                      isExpanded
                        ? 'border-accent'
                        : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                    } active:scale-[0.99]`}
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    whileTap={{ scale: 0.995 }}
                  >
                    {/* Header - stacked on mobile */}
                    <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                      <div className="flex-1 min-w-0">
                        {/* Position with badge */}
                        <div className="flex items-start sm:items-center gap-1.5 sm:gap-2.5 flex-wrap mb-1.5">
                          <h3 className="font-display font-bold text-ink text-lg sm:text-xl md:text-2xl flex items-center gap-2 leading-snug">
                            <FaBriefcase className="text-ink-soft text-sm sm:text-base flex-shrink-0" />
                            <span>{exp.position}</span>
                          </h3>
                          {isCurrent && <span className="status-live">Current</span>}
                          {isFounded && <span className="status-beta">Founder</span>}
                        </div>
                        {/* Company name */}
                        <h4 className="font-display text-base sm:text-lg md:text-xl text-accent-text font-bold mb-1">
                          {exp.company}
                        </h4>
                        {(exp as { via?: string }).via && (
                          <p className="font-mono text-[10px] sm:text-xs text-gray-warm mb-1 sm:mb-1.5">
                            via {(exp as { via?: string }).via}
                          </p>
                        )}
                        {/* Location */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-3 font-mono text-[10px] sm:text-xs text-ink-soft">
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-ink-soft text-[10px] sm:text-xs" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      {/* Expand icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="flex-shrink-0 p-0.5 sm:p-1 text-ink-soft group-hover:text-accent-text transition-colors"
                        aria-hidden="true"
                      >
                        <FaChevronDown className="text-sm sm:text-base md:text-lg" />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-ink-soft mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Outcomes — editorial stat blocks */}
                    {exp.outcomes && exp.outcomes.length > 0 && (
                      <div className="grid grid-cols-1 xs:flex xs:flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                        {exp.outcomes.slice(0, 3).map((outcome, idx) => (
                          <div key={idx} className="stat-block rounded-sm flex-1 xs:flex-initial min-w-[8rem]">
                            <div className="v text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                              {outcome.metric}
                            </div>
                            <div className="l">{outcome.description}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 sm:pt-4 mt-1 border-t border-[var(--color-border)]">
                        <h5 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.08em] font-semibold mb-2 sm:mb-3 text-ink-soft flex items-center gap-2">
                          <FaTrophy className="text-accent text-xs sm:text-sm" />
                          Key Achievements
                        </h5>
                        <ul className="clean-list mb-3 sm:mb-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm sm:text-base">
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.tags.map((tag, idx) => (
                            <span key={idx} className="tech-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
