import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Resume() {
  const { resume } = siteContent

  return (
    <section className="resume" id="resume">
      <SectionHeader title={resume.title} intro={resume.description} />
      <div className="resume-actions">
        {resume.files.map((file) => (
          <a className="btn secondary" key={file.label} href={file.href}>
            {file.label}
          </a>
        ))}
      </div>
    </section>
  )
}
