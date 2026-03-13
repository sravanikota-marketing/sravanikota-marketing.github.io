import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function Highlights() {
  const { highlights } = siteContent

  return (
    <section className="highlights" id="highlights">
      <SectionHeader title={highlights.title} intro={highlights.intro} />
      <div className="editorial-grid">
        {highlights.items.map((item, index) => (
          <article className={`editorial-card editorial-card-${(index % 3) + 1}`} key={item.title}>
            <p className="editorial-index">{`0${index + 1}`}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.detail ? <p>{item.detail}</p> : null}
            {item.outcome ? <p className="editorial-outcome">{item.outcome}</p> : null}
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
