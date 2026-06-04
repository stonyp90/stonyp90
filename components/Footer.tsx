'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { personalInfo, socialLinks } from '@/lib/data'
import ShareButtons from './ShareButtons'

const quickLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
]

const socials = [
  { href: socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  { href: socialLinks.github, icon: FaGithub, label: 'GitHub' },
  { href: socialLinks.email, icon: FaEnvelope, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-paper border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
          {/* Brand + positioning */}
          <div className="md:col-span-5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-4">
              <span className="brand-mark" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="brand-name text-lg sm:text-xl">{personalInfo.name}</span>
            </div>
            <p className="font-display text-ink text-lg sm:text-xl leading-snug max-w-sm mx-auto sm:mx-0">
              Builder and engineering leader.
            </p>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mt-2 max-w-sm mx-auto sm:mx-0">
              I help teams ship faster, cut costs, and become compliant.
            </p>
            <a
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex"
            >
              Book a call
            </a>
          </div>

          {/* Quick Links */}
          <nav className="md:col-span-3 text-center sm:text-left" aria-label="Footer">
            <h3 className="font-mono text-gray-warm text-xs uppercase tracking-[0.18em] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink-soft hover:text-accent-text transition-[color,transform] duration-200 ease-smooth text-sm sm:text-base inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="md:col-span-4 text-center sm:text-left">
            <h3 className="font-mono text-gray-warm text-xs uppercase tracking-[0.18em] mb-4">
              Connect
            </h3>
            <div className="flex gap-5 justify-center sm:justify-start mb-5">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-1.5 text-ink-soft hover:text-accent-text transition-colors duration-200 ease-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl sm:text-[1.6rem]" />
                </motion.a>
              ))}
            </div>
            <a
              href={socialLinks.email}
              className="text-ink-soft hover:text-accent-text transition-colors duration-200 ease-smooth text-sm sm:text-base inline-block"
            >
              {personalInfo.email}
            </a>
            <p className="text-gray-warm text-sm sm:text-base mt-1">{personalInfo.location}</p>
          </div>
        </div>

        {/* Share */}
        <div className="border-t border-[var(--color-border)] pt-8 mt-12 sm:mt-14">
          <ShareButtons />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-gray-warm text-[10px] sm:text-xs tracking-wide">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-ink-soft text-[10px] sm:text-xs tracking-wide">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
