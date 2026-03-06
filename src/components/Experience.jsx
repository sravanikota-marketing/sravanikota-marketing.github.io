import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Experience() {
  const { experience } = siteContent

  return (
    <section className="experience" id="experience">
      <SectionHeader title={experience.title} intro="Agency and brand-side experience grounded in measurable delivery." />
      <div className="timeline">
        {experience.items.map((role) => (
          <article className="timeline-card" key={`${role.company}-${role.role}`}>
            <div className="timeline-header">
              <div>
                <h3>{role.role}</h3>
                <p className="company">{role.company}</p>
              </div>
              <div className="timeline-meta">
                <span>{role.location}</span>
                <span>{role.dates}</span>
              </div>
            </div>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
