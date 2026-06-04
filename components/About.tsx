'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaSnowflake,
  FaChild,
  FaHeart
} from 'react-icons/fa'
import Image from 'next/image'
import { personalInfo } from '@/lib/data'

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

  const facts = [
    { icon: FaChild, label: 'Proud dad of two' },
    { icon: FaSnowflake, label: 'Avid snowboarder' },
    { icon: FaHeart, label: 'Tech passionate' },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28" id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-6 lg:px-12"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="section-label mb-8">
          <span className="num">01</span>
          <span className="name">About</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="editorial-h2 text-3xl lg:text-4xl mb-6 max-w-3xl"
        >
          Fortune 500 rigor <span className="accent-text">·</span> startup speed.
        </motion.h2>

        <div className="grid lg:grid-cols-[14rem_1fr] gap-10 lg:gap-14 items-start">
          {/* Portrait — clean framed image */}
          <motion.div variants={itemVariants} className="mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-sm border border-[var(--color-border)] bg-paper shadow-[0_16px_36px_-28px_rgba(26,26,26,0.18)]">
              <Image
                src={personalInfo.photo}
                alt="Anthony Paquet"
                width={256}
                height={288}
                className="w-44 h-auto lg:w-56 object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="editorial-h3 text-xl lg:text-2xl mb-4"
            >
              {personalInfo.title}
            </motion.h3>

            <motion.p variants={itemVariants} className="editorial-lead max-w-3xl mb-8">
              {personalInfo.summary}
            </motion.p>

            {/* Philosophy as a pull quote */}
            <motion.blockquote
              variants={itemVariants}
              className="pull-quote text-lg lg:text-xl max-w-2xl mb-8"
            >
              {personalInfo.philosophy}
            </motion.blockquote>

            {/* Personal-life facts — bare brass icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-7"
            >
              {facts.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-ink-soft"
                >
                  <Icon className="text-accent-text text-base" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Location + languages as editorial tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              <span className="tech-tag">Quebec, Canada</span>
              <span className="tech-tag">French &amp; English</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
