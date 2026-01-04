'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaGithub, 
  FaRocket, 
  FaBrain, 
  FaCloud, 
  FaQuoteLeft, 
  FaExternalLinkAlt, 
  FaLock,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaGlobe,
  FaAward,
  FaSnowflake,
  FaChild,
  FaHeart
} from 'react-icons/fa'
import Image from 'next/image'
import { personalInfo, urslyProject } from '@/lib/data'

const stats = [
  { icon: FaUsers, value: '10+', label: 'Engineers Led', color: 'cyber-blue' },
  { icon: FaChartLine, value: '60%', label: 'Cost Reduction', color: 'cyber-green' },
  { icon: FaClock, value: '40%', label: 'Faster Delivery', color: 'cyber-purple' },
  { icon: FaAward, value: '6mo', label: 'SOC 2 + TPN Gold', color: 'cyber-blue' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
        </motion.div>

        {/* Summary Card with Visual Enhancement */}
        <motion.div 
          variants={itemVariants} 
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-3xl blur-xl" />
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Photo Area */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-1 overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden">
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
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-blue/30"
                  />
                </div>
              </div>
              
              {/* Summary Text */}
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {personalInfo.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {personalInfo.summary}
                </p>
                
                {/* Personal Life */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <FaChild className="text-cyber-blue" />
                    <span>Proud dad of two boys</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FaSnowflake className="text-cyber-purple" />
                    <span>Avid snowboarder</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <FaHeart className="text-cyber-green" />
                    <span>Technology passionate</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyber-blue/20 border border-cyber-blue/40 rounded-full text-cyber-blue text-sm font-medium">
                    🇨🇦 Quebec, Canada
                  </span>
                  <span className="px-4 py-2 bg-cyber-green/20 border border-cyber-green/40 rounded-full text-cyber-green text-sm font-medium">
                    🇫🇷 French (Native)
                  </span>
                  <span className="px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/40 rounded-full text-cyber-purple text-sm font-medium">
                    🇬🇧 English (Fluent)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center group cursor-default border border-transparent hover:border-cyber-blue/50 transition-all duration-300"
            >
              <stat.icon className={`text-3xl md:text-4xl text-${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div 
          variants={itemVariants} 
          className="mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 rounded-3xl" />
          <div className="relative glass rounded-3xl p-8 md:p-10 overflow-hidden">
            <FaQuoteLeft className="text-6xl md:text-8xl text-cyber-blue/10 absolute top-4 left-4" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-4">
                &ldquo;{personalInfo.philosophy}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-cyber-blue" />
                <span className="text-cyber-blue font-semibold">Anthony Paquet</span>
                <div className="w-12 h-0.5 bg-cyber-blue" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-xl">
              <FaRocket className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Featured Project
              </h3>
              <p className="text-gray-400">What I&apos;m building</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-transparent to-cyber-purple/10 rounded-3xl" />
            <div className="relative glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-cyber-blue/30 transition-all duration-500">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-3xl md:text-4xl font-bold gradient-text">
                      {urslyProject.name}
                    </h4>
                    <span className="px-3 py-1 bg-cyber-green/20 border border-cyber-green/40 rounded-full text-cyber-green text-xs font-medium uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                  <p className="text-xl text-cyber-blue font-medium">
                    {urslyProject.tagline}
                  </p>
                </div>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={urslyProject.agentGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-blue-dark text-cyber-black font-bold rounded-xl transition-all shadow-lg shadow-cyber-blue/25"
                  >
                    <FaGithub className="text-xl" />
                    <span>Open Source Agent</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={urslyProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 glass border border-cyber-purple text-cyber-purple font-bold rounded-xl transition-all hover:bg-cyber-purple/10"
                  >
                    <FaGlobe className="text-xl" />
                    <span>ursly.io</span>
                  </motion.a>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {urslyProject.description}
              </p>

              {/* Private Note Banner */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyber-green/10 to-transparent border-l-4 border-cyber-green rounded-r-xl mb-8">
                <FaLock className="text-xl text-cyber-green" />
                <div>
                  <span className="text-cyber-green font-semibold">Private Repository: </span>
                  <span className="text-gray-300">{urslyProject.privateNote}</span>
                </div>
              </div>

              {/* Tech Stack & Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaBrain className="text-2xl text-cyber-purple" />
                    <h5 className="text-xl font-bold text-white">Tech Stack</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {urslyProject.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-cyber-dark border border-cyber-blue/30 rounded-xl text-sm text-cyber-blue font-medium hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaCloud className="text-2xl text-cyber-green" />
                    <h5 className="text-xl font-bold text-white">Key Features</h5>
                  </div>
                  <ul className="space-y-3">
                    {urslyProject.highlights.map((highlight, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300 group"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-white transition-colors">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
