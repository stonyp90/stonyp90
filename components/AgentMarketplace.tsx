'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import {
  FaCheckDouble,
  FaMapMarkerAlt,
  FaFileExcel,
  FaLayerGroup,
  FaHandshake,
  FaExternalLinkAlt
} from 'react-icons/fa'

const benefits = [
  {
    icon: FaCheckDouble,
    title: 'Every Nature de Droit, All 112',
    description: 'Tablix parses the full RDPRM register in seconds. No missed categories, no manual transcription, no edge case left behind.',
    color: 'cyber-purple',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Built for Quebec Practice',
    description: 'Tuned for the documents Quebec firms handle every day. RDPRM, REQ, hypothèques, contracts. Generic OCR misses the structure these files actually have.',
    color: 'cyber-green',
  },
  {
    icon: FaFileExcel,
    title: 'Client-Ready Output',
    description: 'Pick the format your matter calls for. Apply your firm\'s letterhead to PDF exports and send them straight to your client with no reformatting.',
    color: 'cyber-blue',
  },
  {
    icon: FaLayerGroup,
    title: 'Hypothèque Deduplication',
    description: 'Match hypothèque entries across every spelling and variation of an entity name. Hours of cross-checking, in a single pass.',
    color: 'cyber-pink',
  },
]

export default function AgentMarketplace() {
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
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" id="tablix">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyber-purple/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyber-green/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 backdrop-blur-sm mb-6">
            <FaHandshake className="text-cyber-purple text-sm" />
            <span className="text-cyber-purple text-xs sm:text-sm font-medium">
              In Partnership with Stein Monast
            </span>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <a
              href="https://tablix.ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tablix — Quebec legal-document extraction SaaS"
              title="Tablix — RDPRM, REQ, hypothèque PDF extraction"
              className="block w-14 h-14 sm:w-16 sm:h-16 shadow-lg shadow-black/40 hover:scale-105 transition-transform"
            >
              <Image
                src="/images/logos/tablix-icon.svg"
                alt="Tablix logo — Quebec legal-document extraction SaaS"
                width={64}
                height={64}
                className="w-full h-full"
                priority={false}
              />
            </a>
            <a
              href="https://tablix.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Tab</span>
                <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">lix</span>
              </h2>
            </a>
          </div>

          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
            <span className="text-cyber-green font-semibold">An afternoon of paralegal work, done in seconds.</span> Drop an RDPRM, REQ, or hypothèque PDF, and Tablix returns the cross-references as <span className="text-cyber-blue font-semibold">clean Excel, Word, or branded-PDF tables</span>, presented the way Quebec firms deliver them to clients.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Made for Quebec avocats, notaires, and assistantes juridiques. Every RDPRM nature de droit covered. Hypothèque entries deduplicated across entity names.
          </p>
          
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-${benefit.color}/10 border border-${benefit.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`text-xl text-${benefit.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative glass rounded-2xl p-6 sm:p-8 border border-white/5">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse" />
                <span className="text-sm text-gray-400">Live · Try it now</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Try Tablix Free
              </h4>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-lg mx-auto">
                Drop your first RDPRM, REQ, or hypothèque PDF and watch it convert in seconds. No credit card required.
              </p>

              <a
                href="https://tablix.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyber-purple/20 transition-all"
              >
                <span>Visit Tablix</span>
                <FaExternalLinkAlt className="text-sm" />
              </a>

              <p className="text-xs text-gray-500 mt-4">
                Built in Quebec • All 112 RDPRM natures de droit • Excel & Word export
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
