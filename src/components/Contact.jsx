import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Contact() {
  const { contact } = siteContent

  return (
    <section className="contact" id="contact">
      <SectionHeader title={contact.title} intro={contact.intro} />
      <div className="contact-card">
        {contact.items.map((item) => (
          <div className="contact-row" key={item.label}>
            <span className="contact-label">{item.label}</span>
            {item.href ? (
              <a className={`contact-value ${item.isPlaceholder ? 'placeholder' : ''}`} href={item.href}>
                {item.value}
              </a>
            ) : (
              <span className="contact-value">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
