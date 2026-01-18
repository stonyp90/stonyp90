'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaCheck, FaCopy, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { personalInfo, socialLinks } from '@/lib/data'

interface Particle {
  left: number
  top: number
  duration: number
  delay: number
}

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Generate particles only on client side to avoid hydration errors
  const particles = useMemo<Particle[]>(() => {
    if (!isMounted) return []
    return Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 3,
    }))
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-8 pb-16 sm:pt-0 sm:pb-0">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 212, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 212, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyber-blue/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyber-purple/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span className="text-cyber-blue text-sm sm:text-base md:text-lg font-mono tracking-wider">
            Hi, I&apos;m
          </span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 gradient-text leading-[1.1] tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-gray-200 leading-tight"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Subtitle/Specialties */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-5 sm:mb-6"
        >
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-cyber-green text-xs sm:text-sm font-medium border border-cyber-green/20">
            FinOps
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-cyber-blue text-xs sm:text-sm font-medium border border-cyber-blue/20">
            Security & Compliance
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-cyber-purple text-xs sm:text-sm font-medium border border-cyber-purple/20">
            Disaster Recovery
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full text-cyber-pink text-xs sm:text-sm font-medium border border-cyber-pink/20">
            Infrastructure
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Primary CTA - Book a Call */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <a
            href={personalInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyber-green to-cyber-blue hover:from-cyber-green hover:to-cyber-green px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-cyber-black font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-glow hover:shadow-glow-lg text-sm sm:text-base group"
          >
            <FaCalendarAlt className="text-lg sm:text-xl" />
            <span>Book a Free 15-min Scoping Call</span>
            <FaArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2.5 sm:gap-3 justify-center items-center px-2"
        >
          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 text-white font-medium group text-sm sm:text-base"
          >
            <FaLinkedin className="text-lg sm:text-xl group-hover:text-cyber-blue transition-colors duration-300" />
            <span className="hidden xs:inline">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 text-white font-medium group text-sm sm:text-base"
          >
            <FaGithub className="text-lg sm:text-xl group-hover:text-cyber-blue transition-colors duration-300" />
            <span className="hidden xs:inline">GitHub</span>
          </a>

          {/* Copy Email */}
          <button
            onClick={copyEmail}
            className="glass glass-hover px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 text-white font-medium group cursor-pointer text-sm sm:text-base"
          >
            {copied ? (
              <>
                <FaCheck className="text-lg sm:text-xl text-cyber-green" />
                <span className="text-cyber-green">Copied!</span>
              </>
            ) : (
              <>
                <FaEnvelope className="text-lg sm:text-xl group-hover:text-cyber-blue transition-colors duration-300" />
                <span className="hidden xs:inline">Email</span>
                <FaCopy className="text-xs opacity-50 hidden sm:inline" />
              </>
            )}
          </button>

          {/* Download Resume */}
          <a
            href="/AnthonyPaquet.pdf"
            download="AnthonyPaquet.pdf"
            className="glass glass-hover px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 text-white font-medium group text-sm sm:text-base border border-cyber-blue/20"
          >
            <FaFileDownload className="text-lg sm:text-xl group-hover:text-cyber-blue transition-colors duration-300" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyber-blue/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyber-blue rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles effect - reduced on mobile for performance */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
          {particles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyber-blue/60 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.8, 0],
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
