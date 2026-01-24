'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaRobot, 
  FaBolt, 
  FaChartLine, 
  FaUserCog,
  FaArrowRight,
  FaBalanceScale,
  FaExternalLinkAlt
} from 'react-icons/fa'

const benefits = [
  {
    icon: FaRobot,
    title: 'AI-Powered Assessment',
    description: 'Our 12-step guided process captures your full case details. AI analyzes patterns for instant, accurate assessments.',
    color: 'cyber-purple',
  },
  {
    icon: FaBolt,
    title: 'Zero Bureaucracy',
    description: 'Tell your story once. No repeating yourself, no endless intake calls. Lawyers receive your complete case package upfront.',
    color: 'cyber-green',
  },
  {
    icon: FaChartLine,
    title: 'Faster Time to Value',
    description: 'Get matched with qualified lawyers in minutes, not weeks. Save hours per case with pre-organized documentation.',
    color: 'cyber-blue',
  },
  {
    icon: FaUserCog,
    title: 'Case-Based Experience',
    description: 'Personalized journeys for independent workers. Smart matching connects you with lawyers who specialize in your situation.',
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
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" id="jurisclaim">
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
            <FaBalanceScale className="text-cyber-purple text-sm" />
            <span className="text-cyber-purple text-xs sm:text-sm font-medium">
              Building — AI Legal Marketplace
            </span>
          </div>
          
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <FaBalanceScale className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Juris</span>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Claim</span>
            </h2>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
            I&apos;m building an <span className="text-cyber-green font-semibold">AI-powered legal marketplace</span> that helps 
            independent workers get free case assessments and connect with qualified lawyers—
            <span className="text-cyber-blue font-semibold">eliminating bureaucracy and accelerating justice</span>.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Employment law, consumer rights, personal injury—know your case strength before you spend on consultations.
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
                <span className="text-sm text-gray-400">Live — Try it now</span>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Get Your Free Case Assessment
              </h4>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-lg mx-auto">
                Independent worker facing wrongful dismissal? Consumer rights issue? Complete our 12-step assessment in 10-15 minutes and know where you stand—100% free.
              </p>
              
              <a
                href="https://www.jurisclaim.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyber-purple/20 transition-all"
              >
                <span>Visit JurisClaim</span>
                <FaExternalLinkAlt className="text-sm" />
              </a>
              
              <p className="text-xs text-gray-500 mt-4">
                Bank-level encryption • 100% confidential • Lawyer-designed process
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
