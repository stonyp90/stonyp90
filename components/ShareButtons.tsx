'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaEnvelope, FaLink, FaCheck } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { siteUrl, shareText } from '@/lib/data'

const encodedUrl = encodeURIComponent(siteUrl)
const encodedText = encodeURIComponent(shareText)

const shareLinks = [
  {
    label: 'Share on LinkedIn',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    icon: FaLinkedinIn,
  },
  {
    label: 'Share on X',
    href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    icon: FaXTwitter,
  },
  {
    label: 'Share by email',
    href: `mailto:?subject=${encodeURIComponent('Anthony Paquet, AI & Cloud Architect')}&body=${encodeURIComponent(`${shareText} ${siteUrl}`)}`,
    icon: FaEnvelope,
    isMail: true,
  },
]

export default function ShareButtons() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      <span className="text-xs sm:text-sm text-gray-500 font-medium">Share this page</span>
      <div className="flex items-center gap-1.5 sm:gap-2">
        {shareLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.isMail ? undefined : '_blank'}
            rel={link.isMail ? undefined : 'noopener noreferrer'}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-400 hover:text-cyber-blue transition-colors duration-300"
            aria-label={link.label}
            title={link.label}
          >
            <link.icon className="text-lg" />
          </motion.a>
        ))}
        <motion.button
          type="button"
          onClick={handleCopy}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 transition-colors duration-300 ${
            copied ? 'text-cyber-green' : 'text-gray-400 hover:text-cyber-blue'
          }`}
          aria-label={copied ? 'Link copied' : 'Copy link'}
          title={copied ? 'Link copied' : 'Copy link'}
        >
          {copied ? <FaCheck className="text-lg" /> : <FaLink className="text-lg" />}
        </motion.button>
      </div>
    </div>
  )
}
