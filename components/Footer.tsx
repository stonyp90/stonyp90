'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { personalInfo, socialLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative bg-cyber-dark/50 border-t border-white/5 py-10 sm:py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyber-blue/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold gradient-text mb-3 sm:mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {personalInfo.title} passionate about AI-powered transformation and
              building scalable cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-cyber-blue mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#skills', label: 'Skills' },
                { href: '#certifications', label: 'Certifications' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm sm:text-base inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Consulting Brands */}
            <h4 className="text-sm font-semibold text-gray-500 mt-5 mb-2">Consulting Brands</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.scaleforged.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-400 transition-colors duration-300 text-xs inline-block"
                >
                  ScaleForged – Cloud Architecture
                </a>
              </li>
              <li>
                <a
                  href="https://www.disasterproof.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-xs inline-block"
                >
                  DisasterProof – Disaster Recovery
                </a>
              </li>
              <li>
                <a
                  href="https://www.controlcraft.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-teal-400 transition-colors duration-300 text-xs inline-block"
                >
                  ControlCraft – Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-cyber-blue mb-3 sm:mb-4">Connect</h3>
            <div className="flex gap-3 justify-center sm:justify-start mb-4">
              {[
                { href: socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
                { href: socialLinks.github, icon: FaGithub, label: 'GitHub' },
                { href: socialLinks.email, icon: FaEnvelope, label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 sm:w-11 sm:h-11 glass rounded-lg sm:rounded-xl flex items-center justify-center hover:border-cyber-blue/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg sm:text-xl text-cyber-blue" />
                </motion.a>
              ))}
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">{personalInfo.email}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            Built with <FaHeart className="text-cyber-pink text-xs sm:text-sm" /> using Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-1.5 sm:mt-2">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
