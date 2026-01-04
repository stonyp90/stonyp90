'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAward, FaGraduationCap, FaLanguage } from 'react-icons/fa'
import { certifications, education, languages } from '@/lib/data'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={ref} className="py-20" id="certifications">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="section-title gradient-text">
          Certifications & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyber-blue">
                <FaAward className="text-3xl" />
                AWS Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-cyber-dark rounded-lg border border-cyber-blue/30 hover:border-cyber-blue transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl group-hover:scale-110 transition-transform">
                        {cert.icon}
                      </span>
                      <div>
                        <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Languages */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyber-purple">
                <FaGraduationCap className="text-3xl" />
                Education
              </h3>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">{education.degree}</h4>
                <p className="text-cyber-blue font-semibold">{education.institution}</p>
                <p className="text-gray-400">{education.period}</p>
                <p className="text-gray-400">{education.location}</p>
              </div>
            </div>

            {/* Languages */}
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyber-green">
                <FaLanguage className="text-3xl" />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-lg font-medium text-white">{lang.name}</span>
                    <span className="text-cyber-blue font-semibold">{lang.level}</span>
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
