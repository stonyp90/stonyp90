'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaChevronDown } from 'react-icons/fa'
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
    <section ref={ref} className="py-16 sm:py-20" id="experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="section-title gradient-text mb-10 sm:mb-12">
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink" />

          {/* Experience items */}
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-10 sm:pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-4 md:left-8 top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 -translate-x-[5px] sm:-translate-x-[7px] bg-cyber-blue rounded-full border-[3px] sm:border-4 border-cyber-black shadow-lg shadow-cyber-blue/50" />

                {/* Content card */}
                <motion.div
                  className={`glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 cursor-pointer transition-all duration-300 border ${
                    expandedIndex === index ? 'border-cyber-blue/50' : 'border-transparent'
                  } active:scale-[0.99]`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  whileTap={{ scale: 0.995 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                        <FaBriefcase className="text-cyber-blue text-sm sm:text-base flex-shrink-0" />
                        <span className="leading-tight">{exp.position}</span>
                      </h3>
                      <h4 className="text-base sm:text-lg md:text-xl text-cyber-blue font-semibold mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-cyber-purple" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-cyber-green" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="flex-shrink-0 p-1"
                    >
                      <FaChevronDown className="text-cyber-blue text-base sm:text-lg" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{exp.description}</p>

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
                    <div className="pt-3 sm:pt-4 border-t border-white/10">
                      <h5 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-cyber-blue">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm md:text-base">
                            <span className="text-cyber-blue mt-0.5 sm:mt-1 font-bold flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 sm:px-3 sm:py-1 bg-cyber-dark border border-cyber-blue/20 rounded-full text-[10px] sm:text-xs text-cyber-blue hover:border-cyber-blue/40 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
