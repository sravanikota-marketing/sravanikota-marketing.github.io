import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 8 8 5 8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.75 8.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.5 10h2.5v8.5H5.5zM10.25 10h2.4v1.2h.03c.33-.63 1.14-1.45 2.67-1.45 2.85 0 3.38 1.87 3.38 4.3v4.45h-2.5v-3.95c0-.95-.02-2.18-1.33-2.18-1.34 0-1.54 1.04-1.54 2.1v4.03h-2.5z"
        fill="currentColor"
      />
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function Contact() {
  const { contact } = siteContent
  const primaryLinks = contact.items.filter((item) => item.label === 'Email' || item.label === 'LinkedIn')
  const locationItem = contact.items.find((item) => item.label === 'Location')

  return (
    <section className="contact" id="contact">
      <SectionHeader title={contact.title} intro={contact.intro} />
      <div className="contact-card">
        <div className="contact-icons">
          {primaryLinks.map((item) => (
            <a
              key={item.label}
              className={`contact-icon-link ${item.isPlaceholder ? 'placeholder' : ''}`}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              target={item.label === 'LinkedIn' ? '_blank' : undefined}
              rel={item.label === 'LinkedIn' ? 'noreferrer' : undefined}
            >
              {item.label === 'Email' ? <MailIcon /> : <LinkedInIcon />}
            </a>
          ))}
        </div>
        {locationItem ? (
          <p className="contact-support">{locationItem.value}</p>
        ) : null}
      </div>
    </section>
  )
}
