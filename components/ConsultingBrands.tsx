'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGlobe, FaChartLine, FaShieldAlt, FaCloud, FaServer, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

const expertiseAreas = [
  {
    title: 'Cloud Cost Optimization',
    subtitle: 'FinOps & Cost Engineering',
    description: 'Delivered significant savings across 20+ enterprise clients. Specialized in AWS, Azure, and GCP cost optimization with typical 30-50% reduction.',
    metrics: [
      { value: 'Millions', label: 'Client Savings' },
      { value: '30-50%', label: 'Cost Reduction' },
      { value: '20+', label: 'Enterprises' },
    ],
    capabilities: ['FinOps Implementation', 'Reserved Instance Optimization', 'Kubernetes Cost Management', 'Multi-cloud Consolidation'],
    regions: 'North America, Europe, APAC',
    color: 'from-emerald-500 to-green-400',
    iconColor: 'text-emerald-400',
    bgGlow: 'bg-emerald-500/20',
    icon: FaChartLine,
  },
  {
    title: 'Security & Compliance',
    subtitle: 'SOC 2, ISO 27001, HIPAA',
    description: 'Led 20+ successful compliance certifications with 95%+ audit pass rate. Expert implementation using Vanta, Drata, and Scrut platforms.',
    metrics: [
      { value: '20+', label: 'Certifications' },
      { value: '95%+', label: 'Pass Rate' },
      { value: '6-8wks', label: 'Avg Timeline' },
    ],
    capabilities: ['SOC 2 Type I & II', 'ISO 27001 Certification', 'HIPAA Compliance', 'GDPR Implementation'],
    regions: 'USA, Canada, UK, EU',
    color: 'from-teal-500 to-cyan-400',
    iconColor: 'text-teal-400',
    bgGlow: 'bg-teal-500/20',
    icon: FaShieldAlt,
  },
  {
    title: 'Disaster Recovery',
    subtitle: 'Multi-Cloud Resilience',
    description: 'Architected enterprise DR solutions for financial services achieving 99.9%+ uptime. Multi-cloud, multi-region failover expertise.',
    metrics: [
      { value: '99.9%+', label: 'Uptime SLA' },
      { value: '<15min', label: 'RTO Achieved' },
      { value: 'Billions', label: 'Assets Protected' },
    ],
    capabilities: ['DR Strategy & Planning', 'Multi-Region Architecture', 'Automated Failover', '24/7 Monitoring'],
    regions: 'Global Financial Hubs',
    color: 'from-blue-500 to-indigo-400',
    iconColor: 'text-blue-400',
    bgGlow: 'bg-blue-500/20',
    icon: FaServer,
  },
  {
    title: 'Cloud Architecture',
    subtitle: 'Scale & Modernization',
    description: 'Scaled startups from MVP to millions of users. Enterprise-grade infrastructure with built-in FinOps from day one.',
    metrics: [
      { value: '1M+', label: 'Users Scaled' },
      { value: '50+', label: 'Architectures' },
      { value: '2-3x', label: 'Avg Performance' },
    ],
    capabilities: ['Cloud-Native Architecture', 'Kubernetes & Containers', 'Migration & Modernization', 'Platform Engineering'],
    regions: 'Worldwide',
    color: 'from-violet-500 to-purple-400',
    iconColor: 'text-violet-400',
    bgGlow: 'bg-violet-500/20',
    icon: FaCloud,
  },
]

const globalStats = [
  { value: '10+', label: 'Countries Served' },
  { value: '50+', label: 'Successful Projects' },
  { value: 'Significant', label: 'Business Impact' },
  { value: '95%+', label: 'Client Satisfaction' },
]

export default function ConsultingBrands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 relative overflow-hidden" id="expertise">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyber-green/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-green/10 border border-cyber-green/20 mb-6">
            <FaGlobe className="text-cyber-green text-sm" />
            <span className="text-cyber-green text-sm font-medium">Delivering Results Worldwide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Proven Expertise.</span>
            <br />
            <span className="gradient-text">Global Impact.</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            From Fortune 500 enterprises to high-growth startups, I&apos;ve delivered transformative 
            cloud solutions across 10+ countries. Here&apos;s what I specialize in.
          </p>
        </motion.div>

        {/* Global Stats Bar */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {globalStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={area.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute top-0 right-0 w-64 h-64 ${area.bgGlow} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${area.color} bg-opacity-20`}>
                          <IconComponent className={`text-2xl ${area.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {area.title}
                          </h3>
                          <p className="text-sm text-gray-500">{area.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <FaGlobe className="text-[10px]" />
                        {area.regions}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-white/[0.02]">
                      {area.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-lg sm:text-xl font-bold ${area.iconColor}`}>
                            {metric.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Capabilities */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {area.capabilities.map((cap, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-400"
                        >
                          <FaCheckCircle className={`text-[10px] ${area.iconColor}`} />
                          {cap}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="https://calendly.com/anthonypaquet1508/15min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium ${area.iconColor} hover:underline underline-offset-4 transition-all`}
                    >
                      <span>Get in touch</span>
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16 sm:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-gray-400">
              Ready to discuss your project?
            </p>
            <a
              href="https://calendly.com/anthonypaquet1508/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-cyber-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyber-green/20 transition-all"
            >
              <span>Book a Free Call</span>
              <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
