import { siteContent } from '../data/siteContent'

export default function Hero() {
  const { meta, hero, roles } = siteContent

  return (
    <section className="hero" id="top">
      <div className="hero-content hero-full">
        <div className="hero-lower">
          <div className="hero-main">
            <div className="hero-topline">
              <p className="hero-identity">
                <span>{meta.name}</span>
                <span className="hero-identity-separator" />
                <span>{meta.title}</span>
              </p>
            </div>
            <h1 className="hero-headline">{hero.headline}</h1>
            <div className="hero-intro">
              <p className="hero-subheadline">{hero.subheadline}</p>
              <div className="hero-cta">
                {hero.ctas.map((cta) => (
                  <a key={cta.label} className={`btn ${cta.variant}`} href={cta.href}>
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <aside className="hero-side-notes">
            <p className="hero-notes-title">Quick Snapshot</p>
            <div className="hero-proof-grid">
              {hero.proofPoints.map((item) => (
                <article className="hero-proof-card" key={item.value}>
                  <p className="hero-proof-value">{item.value}</p>
                  <p className="hero-proof-label">{item.label}</p>
                </article>
              ))}
            </div>
            <div className="role-list">
              <p className="role-title">{roles.title}</p>
              <div className="role-chips">
                {roles.items.map((role) => (
                  <span className="chip" key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
