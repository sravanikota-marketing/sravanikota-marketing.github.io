import SectionHeader from './SectionHeader'
import { siteContent } from '../data/siteContent'

export default function ProductMarketing() {
  const { productMarketing } = siteContent

  return (
    <section className="product-marketing" id="product-marketing">
      <SectionHeader title={productMarketing.title} intro={productMarketing.intro} />
      <div className="case-study-list">
        {productMarketing.items.map((item, index) => (
          <article className="case-study-entry" key={item.title}>
            <div className="case-study-marker">{`0${index + 1}`}</div>
            <div className="case-study-body">
              <div className="case-study-frame" />
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
              {item.href ? (
                <div className="case-study-action">
                  <a className="btn secondary" href={item.href}>
                    View Case Study
                  </a>
                </div>
              ) : null}
              {item.isPlaceholder ? <p className="placeholder">Placeholder case study</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
