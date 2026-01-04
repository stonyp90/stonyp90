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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // First 6 categories in a 3x2 grid
  const topCategories = [
    { key: 'cloud', title: 'Cloud Platforms', data: skills.cloud },
    { key: 'languages', title: 'Languages', data: skills.languages },
    { key: 'devops', title: 'DevOps & Tools', data: skills.devops },
    { key: 'devsecops', title: 'DevSecOps & Security', data: skills.devsecops },
    { key: 'databases', title: 'Databases', data: skills.databases },
    { key: 'dataAnalytics', title: 'Data & Analytics', data: skills.dataAnalytics },
  ]

  // Bottom row - 3 items for perfect balance
  const bottomCategories = [
    { key: 'frameworks', title: 'Frameworks', data: skills.frameworks },
    { key: 'specialties', title: 'Specialties', data: skills.specialties },
    { key: 'methodologies', title: 'Architecture & Methodologies', data: skills.methodologies },
  ]

  return (
    <section ref={ref} className="py-20 bg-cyber-dark/30" id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="section-title gradient-text">
          Tech Stack & Expertise
        </motion.h2>

        {/* Top Skills Grid - 6 items in 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topCategories.map((category) => {
            const Icon = iconMap[category.key]
            return (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="glass rounded-xl p-6 hover:border-cyber-blue transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="text-3xl text-cyber-blue group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.data.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyber-blue text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
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

        {/* Bottom Skills Grid - 3 items in 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bottomCategories.map((category) => {
            const Icon = iconMap[category.key]
            return (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="glass rounded-xl p-6 hover:border-cyber-blue transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="text-3xl text-cyber-blue group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.data.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyber-blue text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
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
        <motion.div variants={itemVariants} className="glass rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <FaLightbulb className="text-3xl text-cyber-green" />
            <h3 className="text-2xl font-bold text-white">And Much More...</h3>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            Knowledge is the ultimate wealth — the more you share, the more it grows. 
            Here&apos;s a glimpse of additional expertise I bring to every project:
          </p>
          <div className="flex flex-wrap gap-3">
            {additionalExpertise.map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 bg-cyber-dark border border-cyber-blue/30 rounded-full text-sm text-gray-300 hover:border-cyber-blue hover:text-cyber-blue transition-all cursor-default"
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
