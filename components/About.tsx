'use client'

import { FaChild, FaSnowflake, FaHeart } from 'react-icons/fa'
import { useContent } from '@/components/LocaleProvider'

export default function About() {
  const c = useContent()
  const facts = [
    { icon: FaChild, label: c.ui.about.facts[0] },
    { icon: FaSnowflake, label: c.ui.about.facts[1] },
    { icon: FaHeart, label: c.ui.about.facts[2] },
  ]
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="section-label mb-8"><span className="num">01</span><span className="name">{c.ui.about.label}</span></div>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <h2 className="editorial-h2 text-3xl mb-3">{c.personalInfo.name}</h2>
            <p className="text-sm text-accent-text mb-6">{c.personalInfo.title}</p>
            <p className="editorial-lead">{c.personalInfo.summary}</p>
          </div>
          <div>
            <blockquote className="pull-quote text-xl mb-8">{c.personalInfo.philosophy}</blockquote>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
              {facts.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-sm text-ink-soft"><Icon className="text-accent-text" aria-hidden="true" />{label}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">{c.ui.about.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
