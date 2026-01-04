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
  FaLock,
  FaUsers,
  FaChartLine,
  FaAward,
  FaSnowflake,
  FaChild,
  FaHeart,
  FaGlobe,
  FaClock
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
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
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
        </motion.div>

        {/* Summary Card with Visual Enhancement */}
        <motion.div 
          variants={itemVariants} 
          className="relative mb-10 sm:mb-14 lg:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
          <div className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 border border-white/5">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-center">
              {/* Photo Area */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-[3px] overflow-hidden">
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
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-blue/20"
                    style={{ padding: '-4px' }}
                  />
                </div>
              </div>
              
              {/* Summary Text */}
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
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
                    🇨🇦 Quebec, Canada
                  </span>
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-full text-cyber-green text-xs sm:text-sm font-medium">
                    🇫🇷 French
                  </span>
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-cyber-purple text-xs sm:text-sm font-medium">
                    🇬🇧 English
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-14 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center group cursor-default border border-transparent hover:border-cyber-blue/30 transition-all duration-300"
            >
              <stat.icon className={`text-xl sm:text-2xl md:text-3xl text-${stat.color} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div 
          variants={itemVariants} 
          className="mb-10 sm:mb-14 lg:mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-cyber-blue/5 rounded-2xl sm:rounded-3xl" />
          <div className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 overflow-hidden">
            <FaQuoteLeft className="text-4xl sm:text-6xl md:text-7xl text-cyber-blue/10 absolute top-3 sm:top-4 left-3 sm:left-4" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 italic leading-relaxed mb-3 sm:mb-4">
                &ldquo;{personalInfo.philosophy}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-12 h-0.5 bg-cyber-blue/50" />
                <span className="text-cyber-blue font-semibold text-sm sm:text-base">Anthony Paquet</span>
                <div className="w-8 sm:w-12 h-0.5 bg-cyber-blue/50" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-2.5 sm:p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg sm:rounded-xl">
              <FaRocket className="text-lg sm:text-xl md:text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Featured Project
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">What I&apos;m building</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5 rounded-2xl sm:rounded-3xl" />
            <div className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/5 hover:border-cyber-blue/20 transition-all duration-500">
              {/* Project Header */}
              <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                      {urslyProject.name}
                    </h4>
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-cyber-green/15 border border-cyber-green/30 rounded-full text-cyber-green text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-cyber-blue font-medium">
                    {urslyProject.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={urslyProject.agentGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-cyber-blue to-cyber-blue-dark text-cyber-black font-bold rounded-lg sm:rounded-xl transition-all shadow-lg shadow-cyber-blue/20 text-sm sm:text-base"
                  >
                    <FaGithub className="text-lg sm:text-xl" />
                    <span>Open Source</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={urslyProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3 glass border border-cyber-purple/50 text-cyber-purple font-bold rounded-lg sm:rounded-xl transition-all hover:bg-cyber-purple/10 text-sm sm:text-base"
                  >
                    <FaGlobe className="text-lg sm:text-xl" />
                    <span>ursly.io</span>
                  </motion.a>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                {urslyProject.description}
              </p>

              {/* Private Note Banner */}
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-cyber-green/10 to-transparent border-l-4 border-cyber-green rounded-r-lg sm:rounded-r-xl mb-6 sm:mb-8">
                <FaLock className="text-base sm:text-lg md:text-xl text-cyber-green flex-shrink-0 mt-0.5 sm:mt-0" />
                <div className="text-xs sm:text-sm md:text-base">
                  <span className="text-cyber-green font-semibold">Private: </span>
                  <span className="text-gray-300">{urslyProject.privateNote}</span>
                </div>
              </div>

              {/* Tech Stack & Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <FaBrain className="text-lg sm:text-xl md:text-2xl text-cyber-purple" />
                    <h5 className="text-base sm:text-lg md:text-xl font-bold text-white">Tech Stack</h5>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {urslyProject.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.03 }}
                        className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-cyber-dark border border-cyber-blue/20 rounded-lg sm:rounded-xl text-xs sm:text-sm text-cyber-blue font-medium hover:border-cyber-blue/50 hover:bg-cyber-blue/5 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <FaCloud className="text-lg sm:text-xl md:text-2xl text-cyber-green" />
                    <h5 className="text-base sm:text-lg md:text-xl font-bold text-white">Key Features</h5>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {urslyProject.highlights.map((highlight, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -15 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.08 }}
                        className="flex items-start gap-2 sm:gap-3 text-gray-300 group text-xs sm:text-sm md:text-base"
                      >
                        <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                        <span className="group-hover:text-white transition-colors duration-300">{highlight}</span>
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
