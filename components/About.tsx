'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaRocket, FaBrain, FaCloud, FaQuoteLeft, FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { personalInfo, urslyProject } from '@/lib/data'

export default function About() {
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
    <section ref={ref} className="py-20" id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="section-title gradient-text">
          About Me
        </motion.h2>

        {/* Summary */}
        <motion.div variants={itemVariants} className="glass rounded-2xl p-8 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            {personalInfo.summary}
          </p>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div 
          variants={itemVariants} 
          className="mb-12 relative"
        >
          <div className="glass rounded-2xl p-8 border-l-4 border-cyber-blue">
            <FaQuoteLeft className="text-4xl text-cyber-blue/30 absolute top-6 left-6" />
            <p className="text-xl text-gray-200 italic pl-8 leading-relaxed">
              {personalInfo.philosophy}
            </p>
          </div>
        </motion.div>

        {/* Ursly Project Showcase */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FaRocket className="text-cyber-blue" />
            Featured Project: {urslyProject.name}
          </h3>

          <div className="glass rounded-2xl p-8 hover:border-cyber-blue transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Info */}
              <div>
                <h4 className="text-2xl font-semibold mb-2 text-cyber-blue">
                  {urslyProject.tagline}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {urslyProject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href={urslyProject.agentGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-blue hover:bg-cyber-blue-dark text-cyber-black font-bold rounded-lg transition-all hover:scale-105"
                  >
                    <FaGithub className="text-lg" />
                    Ursly Agent (Open Source)
                  </a>
                  
                  <a
                    href={urslyProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-cyber-purple hover:border-cyber-purple text-cyber-purple font-bold rounded-lg transition-all hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    ursly.io
                  </a>
                </div>

                {/* Private VFS Note */}
                <div className="flex items-start gap-2 text-sm text-gray-400 bg-cyber-dark/50 px-4 py-3 rounded-lg">
                  <FaLock className="text-cyber-green mt-0.5" />
                  <span>{urslyProject.privateNote}</span>
                </div>
              </div>

              {/* Tech Stack & Highlights */}
              <div>
                <h5 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaBrain className="text-cyber-purple" />
                  Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {urslyProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-dark border border-cyber-blue/30 rounded-full text-sm text-cyber-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h5 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaCloud className="text-cyber-green" />
                  Key Features
                </h5>
                <ul className="space-y-2">
                  {urslyProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyber-blue mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
