'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaChevronDown } from 'react-icons/fa'
import { experiences } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section ref={ref} className="py-20" id="experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="section-title gradient-text">
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-6 w-4 h-4 -translate-x-[7px] bg-cyber-blue rounded-full border-4 border-cyber-black shadow-lg shadow-cyber-blue/50" />

                {/* Content card */}
                <div
                  className={`glass rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    expandedIndex === index ? 'border-cyber-blue' : ''
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <FaBriefcase className="text-cyber-blue" />
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-cyber-blue font-semibold mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-cyber-blue text-xl" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-700">
                      <h5 className="text-lg font-semibold mb-3 text-cyber-blue">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <span className="text-cyber-blue mt-1 font-bold">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-cyber-dark border border-cyber-blue/30 rounded-full text-xs text-cyber-blue"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
