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
  FaArrowRight,
  FaCalendarAlt,
} from 'react-icons/fa'
import { services, personalInfo } from '@/lib/data'

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
  ai: {
    title: 'AI',
    subtitle: 'AI Infrastructure • LLM Security • Agents & Evals',
    description: 'Take AI from demo to dependable. Infrastructure, security, evals, and agent engineering for teams shipping real AI products.',
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
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('ai')

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

  const categories: CategoryKey[] = ['ai', 'architecture', 'finops', 'security']

  return (
    <section ref={ref} className="py-20 lg:py-28" id="services">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-6 lg:px-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants}>
          <div className="section-label mb-8">
            <span className="num">02</span>
            <span className="name">Services</span>
          </div>
          <h2 className="editorial-h2 text-3xl lg:text-4xl mb-4">
            Consulting <span className="accent-text">·</span> engineering leadership.
          </h2>
          <p className="editorial-lead max-w-2xl mb-12">
            Flexible engagement models with clear outcomes. From 0→1 to enterprise scale.
            Results in weeks, not quarters.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((category) => {
            const active = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm font-mono text-xs sm:text-sm tracking-wide uppercase border transition-colors duration-200 ${
                  active
                    ? 'border-accent text-accent-text bg-accent-bg'
                    : 'border-border-warm text-ink-soft hover:text-ink hover:border-border-strong'
                }`}
              >
                {categoryInfo[category].title}
              </button>
            )
          })}
        </motion.div>

        {/* Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10 max-w-2xl"
        >
          <h3 className="editorial-h3 text-xl lg:text-2xl mb-2">
            {categoryInfo[activeCategory].subtitle}
          </h3>
          <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
            {categoryInfo[activeCategory].description}
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          key={`services-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16"
        >
          {services[activeCategory].map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaCloud

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col overflow-hidden rounded-sm bg-paper border border-border-warm hover:border-border-strong transition-colors duration-200 shadow-[0_16px_36px_-28px_rgba(26,26,26,0.16)]"
              >
                {/* Accent top rule */}
                <div className="h-[2px] w-full bg-accent" aria-hidden="true" />

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <IconComponent className="tech-icon text-2xl sm:text-3xl mb-5 text-accent-text" />

                  <h4 className="font-display font-bold text-lg sm:text-xl text-ink mb-3 leading-snug">
                    {service.name}
                  </h4>

                  <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                    {service.outcome}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Engagement Approach */}
        <motion.div variants={itemVariants}>
          <div className="rounded-sm bg-paper border border-border-warm p-6 sm:p-8 max-w-3xl shadow-[0_16px_36px_-28px_rgba(26,26,26,0.16)]">
            <h3 className="editorial-h3 text-xl lg:text-2xl mb-3">
              How we work together
            </h3>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-5">
              All engagements include{' '}
              <strong className="text-ink font-semibold">clearly defined scope and deliverables</strong>.
              Flexible pricing models—fixed-price or hourly—to fit your needs. We&apos;ll discuss your
              specific requirements and provide a tailored proposal.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tech-tag">Scoped for your environment</span>
              <span className="tech-tag">Clear deliverables</span>
              <span className="tech-tag">Defined timeline</span>
              <span className="tech-tag">Measurable outcomes</span>
            </div>

            <div className="stat-block mb-6">
              <p className="text-sm text-ink-soft leading-relaxed">
                <strong className="text-ink font-semibold">Proven results:</strong> FinOps clients
                typically see 5–10x ROI within 12 months. Compliance fast-tracks save 3–6 months vs
                DIY approaches.
              </p>
            </div>

            <div className="pt-5 border-t border-border-warm">
              <a
                href={personalInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaCalendarAlt aria-hidden="true" />
                <span>Schedule a consultation</span>
                <FaArrowRight aria-hidden="true" />
              </a>
              <p className="text-xs text-gray-warm mt-3">
                15 minutes to discuss your challenges and explore how we can help.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
