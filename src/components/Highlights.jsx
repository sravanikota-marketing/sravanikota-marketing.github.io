import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Highlights() {
  const { highlights } = siteContent

  return (
    <section className="highlights" id="highlights">
      <SectionHeader title={highlights.title} intro={highlights.intro} />
      <div className="card-grid">
        {highlights.items.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
