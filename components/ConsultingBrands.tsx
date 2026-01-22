'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaRocket, FaShieldAlt, FaCheckCircle, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

const consultingBrands = [
  {
    name: 'ScaleForged',
    tagline: 'From Startup to Enterprise. Engineered.',
    description: 'Enterprise cloud architecture for ambitious startups. We architect and scale infrastructure to enterprise-grade with a FinOps mindset across AWS, GCP, and Azure.',
    services: [
      'Cloud Architecture Design',
      'FinOps & Cost Optimization',
      'Migration & Modernization',
      'Platform Engineering',
    ],
    industries: 'SaaS, FinTech, HealthTech, E-commerce',
    url: 'https://www.scaleforged.io',
    color: 'from-indigo-500 to-cyan-500',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
    icon: FaRocket,
  },
  {
    name: 'DisasterProof',
    tagline: 'Multi-cloud, multi-region. Always on.',
    description: 'Enterprise disaster recovery for financial services. Achieve 99.99% uptime with end-to-end DR planning, implementation, and 24/7 monitoring.',
    services: [
      'DR Strategy & Planning',
      'Multi-Cloud Architecture',
      'Multi-Region Failover',
      '24/7 Monitoring & Response',
    ],
    industries: 'Banking, FinTech, Insurance, Healthcare',
    url: 'https://www.disasterproof.io',
    color: 'from-blue-500 to-amber-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    icon: FaShieldAlt,
  },
  {
    name: 'ControlCraft',
    tagline: 'SOC 2 in 8 weeks. 100% pass rate.',
    description: 'Expert compliance implementation for teams using Vanta, Drata, and Scrut. Get SOC 2, ISO 27001, and HIPAA certified in 6-8 weeks instead of 6-12 months.',
    services: [
      'SOC 2 Type I & II',
      'ISO 27001 Certification',
      'HIPAA Compliance',
      'GDPR Compliance',
    ],
    industries: 'Startups, Enterprise SaaS, HealthTech',
    url: 'https://www.controlcraft.io',
    color: 'from-teal-500 to-emerald-500',
    bgColor: 'bg-teal-500/10',
    textColor: 'text-teal-400',
    icon: FaCheckCircle,
  },
]

export default function ConsultingBrands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

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
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" id="consulting-brands">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <span className="text-cyber-green text-sm font-mono tracking-wider mb-3 block">
            SPECIALIZED CONSULTING PRACTICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Cloud Consulting </span>
            <span className="gradient-text">Brands</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
            Focused expertise through specialized practices. Each brand delivers deep domain knowledge 
            with proven methodologies and measurable outcomes.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Brand Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {consultingBrands.map((brand, index) => {
            const IconComponent = brand.icon
            return (
              <motion.article
                key={brand.name}
                variants={itemVariants}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all group"
                itemScope
                itemType="https://schema.org/Organization"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${brand.color} bg-opacity-10`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${brand.bgColor}`}>
                      <IconComponent className={`text-xl ${brand.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white" itemProp="name">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-gray-400" itemProp="slogan">
                        {brand.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-5 leading-relaxed" itemProp="description">
                    {brand.description}
                  </p>

                  {/* Services */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Services
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {brand.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-400">
                          <span className={brand.textColor}>•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industries */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Industries
                    </h4>
                    <p className="text-xs text-gray-400">{brand.industries}</p>
                  </div>

                  {/* CTA - SEO optimized dofollow link */}
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener"
                    title={`${brand.name} - ${brand.tagline}`}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${brand.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all text-sm`}
                    itemProp="url"
                  >
                    <span>Visit {brand.name}</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-12 sm:mt-16">
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-white/5">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
              Not Sure Which Service You Need?
            </h4>
            <p className="text-gray-400 text-sm mb-5">
              Schedule a free 15-minute consultation to discuss your specific challenges. 
              We&apos;ll help identify the right approach for your organization.
            </p>
            <a
              href="https://calendly.com/anthonypaquet1508/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-cyber-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyber-green/20 transition-all"
            >
              <span>Schedule Free Consultation</span>
              <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
