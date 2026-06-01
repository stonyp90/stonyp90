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
  FaArrowRight
} from 'react-icons/fa'

const benefits = [
  {
    icon: FaCheckDouble,
    title: 'Every RDPRM Right Category',
    description: 'Tablix parses the full RDPRM register in seconds. All 112 categories covered, no manual transcription, no edge cases left behind.',
    color: 'cyber-purple',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Built for Quebec Practice',
    description: 'Tuned for the documents Quebec firms handle every day. RDPRM, REQ, hypothecs, contracts. Generic OCR misses the structure these files actually have.',
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
    title: 'Hypothec Deduplication',
    description: 'Match hypothec entries across every spelling and variation of an entity name. Hours of cross-checking in a single pass.',
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
          {/* Logo lockup — real Tablix mark + wordmark */}
          <a
            href="https://tablix.ca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Tablix, Quebec legal-document extraction SaaS"
            title="Tablix for RDPRM, REQ, and hypothec PDF extraction"
            className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-6 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/logos/tablix-mark.svg"
              alt="Tablix logo, Quebec legal-document extraction SaaS"
              width={56}
              height={56}
              className="w-11 h-11 sm:w-14 sm:h-14"
              priority={false}
            />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Tablix<span className="text-tablix-green">.</span>
            </span>
          </a>

          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
            <span className="text-cyber-green font-semibold">An afternoon of paralegal work, done in seconds.</span> Drop an RDPRM, REQ, or hypothec PDF into Tablix and get back <span className="text-cyber-blue font-semibold">clean cross-reference tables as Excel, Word, or branded PDF</span>, formatted the way Quebec firms deliver them to clients.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Built for Quebec lawyers, notaries, and legal assistants. Every RDPRM right category is covered. Hypothec entries are deduplicated across entity names.
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
              className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <benefit.icon className={`tech-icon text-[1.75rem] mb-5 text-${benefit.color}`} />
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/10 to-cyber-pink/10 rounded-2xl blur-2xl opacity-60" />
            <div className="relative glass rounded-2xl p-6 sm:p-8 border border-white/5">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-cyber-green/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green" />
                </span>
                <span className="text-xs font-medium text-cyber-green tracking-wide">Live · Try it now</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Try Tablix Free
              </h4>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-lg mx-auto">
                Drop your first RDPRM, REQ, or hypothec PDF and watch it convert in seconds. No credit card required.
              </p>

              <a
                href="https://tablix.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline accent-purple group/cta"
              >
                <span>Visit Tablix</span>
                <FaArrowRight className="text-sm transition-transform group-hover/cta:translate-x-1" />
              </a>

              <p className="text-xs text-gray-500 mt-4">
                Built in Quebec • All 112 RDPRM right categories • Excel & Word export
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
