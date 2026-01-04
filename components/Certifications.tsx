'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaAward, FaGraduationCap, FaLanguage, FaExternalLinkAlt } from 'react-icons/fa'
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
                  <a
                    key={index}
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-cyber-dark rounded-lg border border-cyber-blue/30 hover:border-cyber-blue hover:bg-cyber-blue/5 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={cert.badgeImage}
                          alt={cert.name}
                          width={64}
                          height={64}
                          className="rounded-lg"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors text-sm md:text-base">
                            {cert.name}
                          </h4>
                          <FaExternalLinkAlt className="text-cyber-blue/50 group-hover:text-cyber-blue transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                        <p className="text-xs text-cyber-blue/70 mt-2 flex items-center gap-1">
                          <span>Verify on Credly</span>
                        </p>
                      </div>
                    </div>
                  </a>
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
