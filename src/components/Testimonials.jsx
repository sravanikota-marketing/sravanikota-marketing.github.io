import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Testimonials() {
  const { testimonials } = siteContent

  return (
    <section className="testimonials" id="testimonials">
      <SectionHeader title={testimonials.title} intro={testimonials.intro} />
      <div className="card-grid">
        {testimonials.items.map((item, index) => (
          <article className="card quote" key={`${item.name}-${index}`}>
            <p className="quote-text">"{item.quote}"</p>
            <p className="quote-name">{item.name}</p>
            <p className="quote-role">{item.role}</p>
            {item.isPlaceholder ? <p className="placeholder">Placeholder testimonial</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
