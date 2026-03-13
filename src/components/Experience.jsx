import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Experience() {
  const { experience } = siteContent

  return (
    <section className="experience" id="experience">
      <SectionHeader title={experience.title} intro={experience.intro} />
      <div className="experience-overview">
        <div className="experience-summary">
          <p>{experience.summary}</p>
        </div>
        <div className="experience-sectors">
          <p className="experience-label">Campaign Areas</p>
          <div className="tag-row">
            {experience.sectors.map((sector) => (
              <span className="tag" key={sector}>
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="experience-categories">
        {experience.categories.map((item, index) => (
          <article className="experience-category" key={item.title}>
            <p className="experience-index">{`0${index + 1}`}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="experience-background">
        <p className="experience-label">Background</p>
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
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}
