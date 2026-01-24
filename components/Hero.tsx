'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { 
  FaCalendarAlt, 
  FaArrowRight, 
  FaCheckCircle, 
  FaLinkedin,
  FaFileDownload
} from 'react-icons/fa'
import { personalInfo, socialLinks } from '@/lib/data'

interface Particle {
  left: number
  top: number
  duration: number
  delay: number
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  const particles = useMemo<Particle[]>(() => {
    if (!isMounted) return []
    return Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 3,
    }))
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-4 pb-8 sm:pt-0 sm:pb-0">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 212, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 212, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyber-green/8 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyber-blue/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-green/10 border border-cyber-green/30 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green"></span>
            </span>
            <span className="text-cyber-green text-xs sm:text-sm font-medium">
              Currently accepting new engagements
            </span>
          </div>
        </motion.div>

        {/* Main Headline - Outcome Focused */}
        <motion.h1
          variants={itemVariants}
          className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 leading-[1.15] tracking-tight"
        >
          <span className="text-white">I Help Engineering Leaders</span>
          <br />
          <span className="gradient-text">Ship Faster, Cut Costs & Stay Compliant</span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed"
        >
          Senior Cloud Architect & Engineering Leader. I embed with your team to 
          <span className="text-cyber-green font-semibold"> cut cloud spend 30-60%</span>, 
          <span className="text-cyber-blue font-semibold"> pass SOC2/HIPAA audits in weeks</span>, and 
          <span className="text-cyber-purple font-semibold"> build infrastructure that scales</span>.
          <br className="hidden sm:block" />
          <span className="text-gray-400">Results in weeks, not quarters. No long-term contracts required.</span>
        </motion.p>

        {/* Trust Indicators - Quick Hits */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <FaCheckCircle className="text-cyber-green text-xs" />
            <span>AWS Certified Architect</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCheckCircle className="text-cyber-green text-xs" />
            <span>AI & Cloud Architecture</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCheckCircle className="text-cyber-green text-xs" />
            <span>Fortune 500 & Startup Experience</span>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href={personalInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyber-green to-cyber-blue hover:from-cyber-green hover:to-cyber-green px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-cyber-black font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-glow hover:shadow-glow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <FaCalendarAlt className="text-lg" />
            <span>Book Free Strategy Call</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl flex items-center gap-2 text-white font-medium text-sm sm:text-base"
            >
              <FaLinkedin className="text-lg text-[#0A66C2]" />
              <span className="hidden xs:inline">LinkedIn</span>
            </a>
            <a
              href="/AnthonyPaquet.pdf"
              download
              className="glass glass-hover px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl flex items-center gap-2 text-white font-medium text-sm sm:text-base"
            >
              <FaFileDownload className="text-lg text-cyber-blue" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-9 border-2 border-cyber-blue/40 rounded-full flex items-start justify-center p-1.5 sm:p-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyber-blue rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
          {particles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyber-blue/50 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
