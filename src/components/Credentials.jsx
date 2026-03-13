import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Credentials() {
  const { education, skills } = siteContent

  return (
    <section className="credentials" id="credentials">
      <SectionHeader title="Credentials" intro="Education and tools that support performance-focused marketing delivery." />
      <div className="credentials-grid">
        <div className="credentials-panel">
          <p className="credentials-label">Education</p>
          <h3>{education.title}</h3>
          <ul>
            {education.items.map((item) => (
              <li key={item.degree}>
                <span className="degree">{item.degree}</span>
                <span className="school">{item.school}</span>
                <span className="year">{item.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="credentials-panel">
          <p className="credentials-label">Toolkit</p>
          <h3>{skills.title}</h3>
          <div className="tag-row">
            {skills.items.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
