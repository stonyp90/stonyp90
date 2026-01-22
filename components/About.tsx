'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaSnowflake,
  FaChild,
  FaHeart
} from 'react-icons/fa'
import Image from 'next/image'
import { personalInfo } from '@/lib/data'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-cyber-blue/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-cyber-purple/5 rounded-full blur-[80px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
        </motion.div>

        {/* Summary Card */}
        <motion.div 
          variants={itemVariants} 
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
          <div className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/5">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-center">
              {/* Photo Area */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-[3px] overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                      <Image
                        src={personalInfo.photo}
                        alt="Anthony Paquet"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Summary Text */}
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {personalInfo.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {personalInfo.summary}
                </p>
                
                {/* Personal Life */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-xs sm:text-sm">
                    <FaChild className="text-cyber-blue text-sm sm:text-base" />
                    <span>Proud dad of two</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-xs sm:text-sm">
                    <FaSnowflake className="text-cyber-purple text-sm sm:text-base" />
                    <span>Avid snowboarder</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-xs sm:text-sm">
                    <FaHeart className="text-cyber-green text-sm sm:text-base" />
                    <span>Tech passionate</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-cyber-blue text-xs sm:text-sm font-medium">
                    Quebec, Canada
                  </span>
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-full text-cyber-green text-xs sm:text-sm font-medium">
                    French & English
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
