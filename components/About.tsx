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

        <div className="max-w-3xl">
          {/* Profile header — portrait beside name + title, one left-aligned unit */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 sm:gap-7 mb-8 sm:mb-10"
          >
            <div className="group shrink-0 w-28 sm:w-32 md:w-36">
              <div className="overflow-hidden rounded-sm border border-[var(--color-border)] bg-paper shadow-[0_16px_36px_-28px_rgba(26,26,26,0.18)] transition-[border-color,box-shadow,transform] duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:border-border-strong group-hover:shadow-[0_24px_48px_-28px_rgba(26,26,26,0.24)]">
                <Image
                  src={personalInfo.photo}
                  alt="Anthony Paquet"
                  width={256}
                  height={288}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="editorial-h3 text-2xl sm:text-3xl">Anthony Paquet</h3>
              <p className="font-mono text-[0.7rem] sm:text-xs uppercase tracking-[0.12em] text-accent-text mt-2">
                {personalInfo.title}
              </p>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.p variants={itemVariants} className="editorial-lead mb-8">
            {personalInfo.summary}
          </motion.p>

          {/* Philosophy as a pull quote */}
          <motion.blockquote
            variants={itemVariants}
            className="pull-quote text-lg lg:text-xl mb-8"
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
                className="group flex items-center gap-2 text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                <Icon className="text-accent-text text-base transition-transform duration-200 ease-smooth group-hover:-translate-y-0.5" aria-hidden="true" />
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
      </motion.div>
    </section>
  )
}
