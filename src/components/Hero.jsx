import { siteContent } from '../data/siteContent'

export default function Hero() {
  const { meta, hero, roles } = siteContent

  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div className="hero-badge">
          <span>{meta.location}</span>
          <span className="dot" />
          <span>{meta.eligibility}</span>
        </div>
        <h1>
          {meta.name}
          <span className="hero-subtitle">{meta.title}</span>
        </h1>
        <p className="hero-headline">{hero.headline}</p>
        <p className="hero-subheadline">{hero.subheadline}</p>
        <div className="hero-cta">
          {hero.ctas.map((cta) => (
            <a key={cta.label} className={`btn ${cta.variant}`} href={cta.href}>
              {cta.label}
            </a>
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
      </div>
      <div className="hero-visual">
        <div className="visual-card">
          <p className="visual-title">Strategic focus</p>
          <p className="visual-text">
            Positioning, messaging, and go-to-market clarity powered by measurable campaign delivery.
          </p>
          <div className="visual-metrics">
            <div>
              <span className="metric">Multi-locale</span>
              <span className="metric-label">Execution</span>
            </div>
            <div>
              <span className="metric">Retail media</span>
              <span className="metric-label">Expertise</span>
            </div>
            <div>
              <span className="metric">Performance</span>
              <span className="metric-label">Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
