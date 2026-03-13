import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function About() {
  const { about } = siteContent

  return (
    <section className="about" id="about">
      <SectionHeader title={about.title} />
      <div className="about-grid">
        <div className="about-summary-panel">
          {about.summary.map((paragraph) => (
            <p className="about-summary" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="about-notes">
          <p className="about-notes-label">Practical Experience</p>
          <div className="about-note-groups">
            {about.notes.map((group) => (
              <div className="about-note-group" key={group.title}>
                <p className="about-note-title">{group.title}</p>
                <ul className="about-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
