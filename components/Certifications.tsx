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
    <section ref={ref} className="py-16 sm:py-20 lg:py-24" id="certifications">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="section-title gradient-text mb-10 sm:mb-12">
          Certifications & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-cyber-blue">
                <FaAward className="text-xl sm:text-2xl md:text-3xl" />
                AWS Certifications
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="block p-3 sm:p-4 bg-cyber-dark/50 rounded-lg sm:rounded-xl border border-white/5"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
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
                        <h4 className="font-bold text-white mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Languages */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            {/* Education */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 flex items-center gap-2 sm:gap-3 text-cyber-purple">
                <FaGraduationCap className="text-xl sm:text-2xl md:text-3xl" />
                Education
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">{education.degree}</h4>
                <p className="text-cyber-blue font-semibold text-sm sm:text-base">{education.institution}</p>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">{education.period}</p>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">{education.location}</p>
              </div>
            </div>

            {/* Languages */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-5 flex items-center gap-2 sm:gap-3 text-cyber-green">
                <FaLanguage className="text-xl sm:text-2xl md:text-3xl" />
                Languages
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="text-sm sm:text-base md:text-lg font-medium text-white">{lang.name}</span>
                    <span className="text-cyber-blue font-semibold text-xs sm:text-sm md:text-base">{lang.level}</span>
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
