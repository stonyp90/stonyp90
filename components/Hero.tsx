'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaCheck, FaCopy } from 'react-icons/fa'
import { personalInfo, socialLinks } from '@/lib/data'

export default function Hero() {
  const [copied, setCopied] = useState(false)

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
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 sm:mb-8 text-gray-200 leading-tight"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons - Mobile optimized */}
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

          {/* Download Resume - Primary CTA */}
          <a
            href="/AnthonyPaquet.pdf"
            download="AnthonyPaquet.pdf"
            className="bg-gradient-to-r from-cyber-blue to-cyber-blue-dark hover:from-cyber-blue hover:to-cyber-blue px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl flex items-center gap-2 text-cyber-black font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-glow hover:shadow-glow-lg text-sm sm:text-base"
          >
            <FaFileDownload className="text-lg sm:text-xl" />
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}
