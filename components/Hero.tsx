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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-cyber-blue text-lg md:text-xl font-mono">
            Hi, I&apos;m
          </span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-gray-200"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover px-6 py-3 rounded-lg flex items-center gap-2 text-white font-medium group"
          >
            <FaLinkedin className="text-xl group-hover:text-cyber-blue transition-colors" />
            <span>LinkedIn</span>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover px-6 py-3 rounded-lg flex items-center gap-2 text-white font-medium group"
          >
            <FaGithub className="text-xl group-hover:text-cyber-blue transition-colors" />
            <span>GitHub</span>
          </a>

          <button
            onClick={copyEmail}
            className="glass glass-hover px-6 py-3 rounded-lg flex items-center gap-2 text-white font-medium group cursor-pointer"
          >
            {copied ? (
              <>
                <FaCheck className="text-xl text-cyber-green" />
                <span className="text-cyber-green">Copied!</span>
              </>
            ) : (
              <>
                <FaEnvelope className="text-xl group-hover:text-cyber-blue transition-colors" />
                <span>Copy Email</span>
                <FaCopy className="text-sm opacity-50" />
              </>
            )}
          </button>

          <a
            href="/AnthonyPaquet.pdf"
            download="AnthonyPaquet.pdf"
            className="bg-cyber-blue hover:bg-cyber-blue-dark px-6 py-3 rounded-lg flex items-center gap-2 text-cyber-black font-bold transition-all hover:scale-105 neon-glow"
          >
            <FaFileDownload className="text-xl" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 bg-cyber-blue rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
