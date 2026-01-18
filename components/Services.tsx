'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  FaChartLine, 
  FaBrain, 
  FaShieldAlt, 
  FaLock, 
  FaRobot, 
  FaServer,
  FaCloud,
  FaLayerGroup,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaFilm,
  FaUniversity,
  FaHeartbeat,
  FaShoppingCart,
  FaRocket,
  FaBroadcastTower,
  FaMicrochip
} from 'react-icons/fa'
import { services, retainers, personalInfo, industries } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  chart: FaChartLine,
  brain: FaBrain,
  shield: FaShieldAlt,
  lock: FaLock,
  robot: FaRobot,
  recovery: FaServer,
  cloud: FaCloud,
  architecture: FaLayerGroup,
  governance: FaChartLine,
}

const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  film: FaFilm,
  bank: FaUniversity,
  health: FaHeartbeat,
  cart: FaShoppingCart,
  rocket: FaRocket,
  signal: FaBroadcastTower,
  chip: FaMicrochip,
  shield: FaShieldAlt,
}

const categoryInfo = {
  finops: {
    title: 'FinOps',
    subtitle: 'Cloud Cost Intelligence',
    description: 'Cut cloud spend 30–50% with governance that scales. Typical ROI: 5–10x within 12 months.',
  },
  security: {
    title: 'Security & Compliance',
    subtitle: 'SOC2 • HIPAA • ISO 27001 • AI Security',
    description: 'Audit-ready in weeks, not months. Enterprise-grade security that satisfies customers and insurers.',
  },
  dr: {
    title: 'Disaster Recovery',
    subtitle: 'Business Continuity & Resilience',
    description: 'Proven recovery that meets regulatory requirements and board expectations.',
  },
  architecture: {
    title: 'Architecture',
    subtitle: 'Modernization • Platform • DevSecOps',
    description: 'From legacy to modern—build scalable foundations, eliminate tech debt, and accelerate your roadmap.',
  },
}

type CategoryKey = keyof typeof services

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('architecture')
  const [expandedService, setExpandedService] = useState<string | null>(null)

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

  const categories: CategoryKey[] = ['architecture', 'finops', 'security', 'dr']

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyber-green/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <span className="text-cyber-green text-sm font-mono tracking-wider mb-3 block">
            ENGINEERING LEADERSHIP & EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Consulting </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Flexible engagement models with clear outcomes. From 0→1 to enterprise scale. Results in weeks, not quarters.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setExpandedService(null)
              }}
              className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-lg shadow-cyber-blue/20'
                  : 'glass text-gray-300 hover:text-white hover:border-cyber-blue/30'
              }`}
            >
              {categoryInfo[category].title}
            </button>
          ))}
        </motion.div>

        {/* Category Description */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {categoryInfo[activeCategory].subtitle}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            {categoryInfo[activeCategory].description}
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          key={`services-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {services[activeCategory].map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaCloud
            const isExpanded = expandedService === service.id
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  isExpanded 
                    ? 'border-cyber-blue/50 shadow-lg shadow-cyber-blue/10' 
                    : 'border-transparent hover:border-white/10'
                }`}
                onClick={() => setExpandedService(isExpanded ? null : service.id)}
              >
                {/* Card Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${service.color}/10 border border-${service.color}/20`}>
                      <IconComponent className={`text-xl sm:text-2xl text-${service.color}`} />
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {service.name}
                  </h4>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {service.outcome}
                  </p>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-white/10 pt-4">
                    {/* Deliverables */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-cyber-green mb-3 flex items-center gap-2">
                        <FaCheckCircle />
                        You receive:
                      </h5>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-cyber-green mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                        <FaTimesCircle />
                        Not included:
                      </h5>
                      <ul className="space-y-1">
                        {service.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                            <span>–</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <a
                      href={personalInfo.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyber-blue to-cyber-blue-dark text-cyber-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyber-blue/20 transition-all"
                    >
                      <span>Book a 15-min Scope Call</span>
                      <FaArrowRight />
                    </a>
                  </div>
                </motion.div>

                {/* Expand indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="w-6 h-1 rounded-full bg-white/20"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Industries Section */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Industries Served
            </h3>
            <p className="text-gray-400 text-sm">
              Proven experience across regulated and high-growth sectors
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((industry, index) => {
              const IconComponent = industryIconMap[industry.icon] || FaCloud
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`glass rounded-xl p-4 sm:p-5 border border-white/5 hover:border-${industry.color}/30 transition-all group`}
                >
                  <IconComponent className={`text-xl sm:text-2xl text-${industry.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="text-sm sm:text-base font-semibold text-white mb-1">
                    {industry.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    {industry.description}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Retainers Section */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-cyber-purple text-sm font-mono tracking-wider mb-2 block">
              ONGOING PARTNERSHIPS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Monthly Retainer Programs
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Continuous access to senior expertise. Lock in availability and build lasting strategic partnerships with flexible engagement models.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {retainers.map((retainer, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-cyber-purple/30 transition-all group"
              >
                <div className="text-lg sm:text-xl font-bold text-white mb-3">{retainer.name}</div>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{retainer.description}</p>
                <ul className="space-y-2">
                  {retainer.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <span className="text-cyber-purple mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engagement Approach */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto border border-white/5">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
              How We Work Together
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              All engagements include <span className="text-cyber-green font-semibold">clearly defined scope and deliverables</span>. 
              Flexible pricing models—fixed-price or hourly—to fit your needs. We&apos;ll discuss your specific requirements and provide a tailored proposal.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mb-6">
              <span className="px-3 py-1.5 bg-cyber-dark rounded-full border border-white/10">
                Scoped for your environment
              </span>
              <span className="px-3 py-1.5 bg-cyber-dark rounded-full border border-white/10">
                Clear deliverables
              </span>
              <span className="px-3 py-1.5 bg-cyber-dark rounded-full border border-white/10">
                Defined timeline
              </span>
              <span className="px-3 py-1.5 bg-cyber-dark rounded-full border border-white/10">
                Measurable outcomes
              </span>
            </div>

            <div className="bg-cyber-dark/50 rounded-xl p-4 mb-6 border border-white/5">
              <p className="text-sm text-gray-400">
                <span className="text-white font-medium">Proven Results:</span> FinOps clients typically see 5–10x ROI within 12 months. 
                Compliance fast-tracks save 3–6 months vs DIY approaches.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={personalInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-cyber-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyber-green/20 transition-all"
              >
                <FaCalendarAlt />
                <span>Schedule a Consultation</span>
                <FaArrowRight />
              </a>
              <p className="text-xs text-gray-500 mt-3">
                15 minutes to discuss your challenges and explore how we can help.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
