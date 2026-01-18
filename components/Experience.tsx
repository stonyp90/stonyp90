'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBriefcase, FaMapMarkerAlt, FaChevronDown, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa'
import { experiences } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

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
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20" id="experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-cyber-blue text-xs sm:text-sm font-mono tracking-wider mb-2 sm:mb-3 block">
            TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4">
            Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base px-4">
            Proven outcomes across cloud, security, and infrastructure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - tighter on mobile */}
          <div className="absolute left-[7px] sm:left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink" />

          {/* Experience items */}
          <div className="space-y-3 sm:space-y-5 md:space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-6 sm:pl-12 md:pl-20"
              >
                {/* Timeline dot - smaller on mobile */}
                <div className={`absolute left-[7px] sm:left-4 md:left-8 top-4 sm:top-5 md:top-6 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 -translate-x-[4px] sm:-translate-x-[6px] md:-translate-x-[7px] rounded-full border-2 sm:border-[3px] md:border-4 border-cyber-black shadow-lg ${
                  exp.period === 'Current' 
                    ? 'bg-cyber-green shadow-cyber-green/50' 
                    : 'bg-cyber-blue shadow-cyber-blue/50'
                }`} />

                {/* Content card - optimized padding */}
                <motion.div
                  className={`glass rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 cursor-pointer transition-all duration-300 border ${
                    expandedIndex === index ? 'border-cyber-blue/50' : 'border-transparent'
                  } active:scale-[0.99]`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  whileTap={{ scale: 0.995 }}
                >
                  {/* Header - stacked on mobile */}
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <div className="flex-1 min-w-0">
                      {/* Position with badge */}
                      <div className="flex items-start sm:items-center gap-1.5 sm:gap-2 flex-wrap mb-1">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white flex items-center gap-1.5 sm:gap-2">
                          <FaBriefcase className="text-cyber-blue text-xs sm:text-sm md:text-base flex-shrink-0" />
                          <span className="leading-snug">{exp.position}</span>
                        </h3>
                        {exp.period === 'Current' && (
                          <span className="px-1.5 py-0.5 sm:px-2 bg-cyber-green/15 border border-cyber-green/30 rounded-full text-cyber-green text-[9px] sm:text-[10px] md:text-xs font-medium whitespace-nowrap">
                            Current
                          </span>
                        )}
                        {exp.period === 'Founded' && (
                          <span className="px-1.5 py-0.5 sm:px-2 bg-cyber-purple/15 border border-cyber-purple/30 rounded-full text-cyber-purple text-[9px] sm:text-[10px] md:text-xs font-medium whitespace-nowrap">
                            Founder
                          </span>
                        )}
                      </div>
                      {/* Company name */}
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-cyber-blue font-semibold mb-1 sm:mb-2">
                        {exp.company}
                      </h4>
                      {/* Location */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-cyber-green text-[10px] sm:text-xs" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    {/* Expand icon */}
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0 p-0.5 sm:p-1"
                    >
                      <FaChevronDown className="text-cyber-blue text-sm sm:text-base md:text-lg" />
                    </motion.div>
                  </div>

                  {/* Description - smaller on mobile */}
                  <p className="text-gray-300 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">{exp.description}</p>

                  {/* Key Outcomes - grid on very small screens */}
                  {exp.outcomes && exp.outcomes.length > 0 && (
                    <div className="grid grid-cols-1 xs:flex xs:flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3">
                      {exp.outcomes.slice(0, 3).map((outcome, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-cyber-dark border border-cyber-blue/20 rounded-md sm:rounded-lg"
                        >
                          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-cyber-blue whitespace-nowrap">
                            {outcome.metric}
                          </span>
                          <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 leading-tight line-clamp-2">
                            {outcome.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 sm:pt-3 md:pt-4 border-t border-white/10">
                      <h5 className="text-xs sm:text-sm md:text-base font-semibold mb-1.5 sm:mb-2 md:mb-3 text-cyber-blue flex items-center gap-1.5 sm:gap-2">
                        <FaTrophy className="text-cyber-green text-xs sm:text-sm" />
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-2 sm:mb-3 md:mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-gray-300 text-[11px] sm:text-xs md:text-sm lg:text-base">
                            <span className="text-cyber-blue mt-0.5 font-bold flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags - smaller on mobile */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 bg-cyber-dark border border-cyber-blue/20 rounded-full text-[9px] sm:text-[10px] md:text-xs text-cyber-blue hover:border-cyber-blue/40 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project URL */}
                      {exp.projectUrl && (
                        <a
                          href={exp.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-cyber-blue/10 border border-cyber-blue/30 rounded-md sm:rounded-lg text-cyber-blue text-[10px] sm:text-xs md:text-sm hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all"
                        >
                          <FaExternalLinkAlt className="text-[9px] sm:text-[10px] md:text-xs" />
                          View Project
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
