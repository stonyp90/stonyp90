'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAws, FaCloud, FaCode, FaDatabase, FaReact, FaCog, FaSitemap, FaLightbulb, FaShieldAlt, FaChartBar } from 'react-icons/fa'
import { skills, additionalExpertise } from '@/lib/data'

const iconMap: Record<string, any> = {
  cloud: FaAws,
  languages: FaCode,
  devops: FaCog,
  databases: FaDatabase,
  dataAnalytics: FaChartBar,
  frameworks: FaReact,
  specialties: FaCloud,
  methodologies: FaSitemap,
  devsecops: FaShieldAlt,
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  // First 6 categories in a 3x2 grid
  const topCategories = [
    { key: 'cloud', title: 'Cloud Platforms', data: skills.cloud },
    { key: 'languages', title: 'Languages', data: skills.languages },
    { key: 'devops', title: 'DevOps & Tools', data: skills.devops },
    { key: 'devsecops', title: 'DevSecOps', data: skills.devsecops },
    { key: 'databases', title: 'Databases', data: skills.databases },
    { key: 'dataAnalytics', title: 'Data & Analytics', data: skills.dataAnalytics },
  ]

  // Bottom row - 3 items for perfect balance
  const bottomCategories = [
    { key: 'frameworks', title: 'Frameworks', data: skills.frameworks },
    { key: 'specialties', title: 'Specialties', data: skills.specialties },
    { key: 'methodologies', title: 'Architecture', data: skills.methodologies },
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-cyber-dark/30" id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="section-title gradient-text mb-10 sm:mb-12">
          Tech Stack & Expertise
        </motion.h2>

        {/* Top Skills Grid - 6 items in responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
          {topCategories.map((category) => {
            const Icon = iconMap[category.key]
            return (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-cyber-blue/30 transition-all duration-300 group border border-transparent"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <Icon className="text-xl sm:text-2xl md:text-3xl text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 sm:space-y-4">
                  {category.data.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
                        <span className="text-cyber-blue text-[10px] sm:text-xs md:text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 sm:h-2 bg-cyber-dark/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Skills Grid - 3 items in responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {bottomCategories.map((category) => {
            const Icon = iconMap[category.key]
            return (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-cyber-blue/30 transition-all duration-300 group border border-transparent"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <Icon className="text-xl sm:text-2xl md:text-3xl text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 sm:space-y-4">
                  {category.data.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
                        <span className="text-cyber-blue text-[10px] sm:text-xs md:text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 sm:h-2 bg-cyber-dark/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Expertise - Tag Cloud */}
        <motion.div variants={itemVariants} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
            <FaLightbulb className="text-xl sm:text-2xl md:text-3xl text-cyber-green" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">And Much More...</h3>
          </div>
          <p className="text-gray-400 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Knowledge is the ultimate wealth — the more you share, the more it grows. 
            Here&apos;s a glimpse of additional expertise I bring to every project:
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
            {additionalExpertise.map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                className="px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-cyber-dark border border-cyber-blue/20 rounded-full text-[10px] sm:text-xs md:text-sm text-gray-300 hover:border-cyber-blue/50 hover:text-cyber-blue transition-all duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
