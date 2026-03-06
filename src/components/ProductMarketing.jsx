import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function ProductMarketing() {
  const { productMarketing } = siteContent

  return (
    <section className="product-marketing" id="product-marketing">
      <SectionHeader title={productMarketing.title} intro={productMarketing.intro} />
      <div className="card-grid">
        {productMarketing.items.map((item) => (
          <article className="card case" key={item.title}>
            <div className="case-header">
              <h3>{item.title}</h3>
              <span className="status">{item.status}</span>
            </div>
            <p>{item.summary}</p>
            <div className="tag-row">
              {item.focus.map((focus) => (
                <span className="tag" key={focus}>
                  {focus}
                </span>
              ))}
            </div>
            {item.isPlaceholder ? <p className="placeholder">Placeholder case study</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
