'use client'

import Image from 'next/image'
import { useLocale } from '@/components/LocaleProvider'
import { getPersonalProjects, personalProjectCopy } from '@/lib/projects'

export default function PersonalProjects() {
  const locale = useLocale()
  const copy = personalProjectCopy[locale]
  const projects = getPersonalProjects(locale)

  return (
    <section
      id="personal-projects"
      aria-labelledby="personal-projects-heading"
      className="personal-projects"
    >
      <div>
        <div className="projects-heading">
          <div className="section-label mb-8">
            <span className="num">06</span>
            <span className="name">{copy.label}</span>
          </div>
          <h2 id="personal-projects-heading" className="editorial-h2 text-3xl lg:text-4xl mb-4">
            {copy.heading}
          </h2>
          <p className="editorial-lead max-w-2xl">{copy.lead}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card project-card--${project.id}`}
              aria-labelledby={`project-${project.id}-heading`}
            >
              <div className="project-visual" aria-hidden="true">
                <Image
                  src={project.visual.src}
                  alt=""
                  width={project.visual.width}
                  height={project.visual.height}
                  sizes="300px"
                  className="project-logo"
                />
              </div>
              <div className="project-copy">
                <p className="project-category">{project.category}</p>
                <h3 id={`project-${project.id}-heading`} className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.slogan && (
                  <p className="project-slogan">
                    {project.slogan.map((phrase) => <span key={phrase}>{phrase}</span>)}
                  </p>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`${copy.visit} ${project.name}, ${copy.newTab}`}
                >
                  {copy.visit}<span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
