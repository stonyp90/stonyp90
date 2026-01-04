'use client'

import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { personalInfo, socialLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-cyber-dark/50 border-t border-cyber-blue/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {personalInfo.title} passionate about AI-powered transformation and
              building scalable cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:border-cyber-blue transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-cyber-blue" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:border-cyber-blue transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-cyber-blue" />
              </a>
              <a
                href={socialLinks.email}
                className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:border-cyber-blue transition-all hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl text-cyber-blue" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">{personalInfo.email}</p>
              <p className="text-gray-400 text-sm">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Built with <FaHeart className="text-cyber-pink" /> using Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
