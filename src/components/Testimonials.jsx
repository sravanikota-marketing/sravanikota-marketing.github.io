import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Testimonials() {
  const { testimonials } = siteContent

  return (
    <section className="testimonials" id="testimonials">
      <SectionHeader title={testimonials.title} intro={testimonials.intro} />
      <div className="testimonial-list">
        {testimonials.items.map((item, index) => (
          <article className="testimonial-entry" key={`${item.name}-${index}`}>
            <div className="testimonial-quote-wrap">
              <p className="quote-text">"{item.quote}"</p>
            </div>
            <div className="testimonial-meta">
              <p className="quote-name">{item.name}</p>
              <p className="quote-role">{item.role}</p>
            </div>
            {item.isPlaceholder ? <p className="placeholder">Placeholder testimonial</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
