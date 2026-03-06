import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function About() {
  const { about } = siteContent

  return (
    <section className="about" id="about">
      <SectionHeader title={about.title} />
      <div className="about-grid">
        <p className="about-summary">{about.summary}</p>
        <ul className="about-list">
          {about.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
