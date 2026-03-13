import { useEffect, useRef } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { siteContent } from '../data/siteContent'

export default function OatlyCaseStudy() {
  const { oatlyCaseStudy } = siteContent
  const heroRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    heroRef.current?.scrollIntoView({ block: 'start', inline: 'nearest' })
  }, [])

  return (
    <div className="app">
      <Nav />
      <main className="case-study-page">
        <section className="case-study-hero" ref={heroRef}>
          <a className="case-study-back" href="#product-marketing">
            Back to portfolio
          </a>
          <div className="case-study-hero-grid">
            <div>
              <p className="case-study-kicker">Go-to-Market Case Study</p>
              <h1>{oatlyCaseStudy.title}</h1>
            </div>
            <div className="case-study-hero-side">
              <p className="case-study-intro">{oatlyCaseStudy.heroIntro}</p>
            </div>
          </div>
          <div className="case-study-banner oatly-banner">
            <div className="oatly-banner-visual">
              <video
                ref={videoRef}
                className="oatly-banner-video"
                src="/assets/case-studies/oatly-barista.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                onLoadedData={() => {
                  videoRef.current?.play().catch(() => {})
                }}
                onTimeUpdate={() => {
                  if (videoRef.current && videoRef.current.currentTime >= 10) {
                    videoRef.current.currentTime = 0
                    videoRef.current.play()
                  }
                }}
              />
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Market Insight</h2>
          <div className="case-study-copy">
            {oatlyCaseStudy.marketInsight.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Consumer Persona</h2>
          <div className="case-study-dual">
            <article className="case-study-panel">
              <h3>{oatlyCaseStudy.persona.name}</h3>
              <p>
                <strong>Location:</strong> {oatlyCaseStudy.persona.location}
              </p>
              <p>
                <strong>Income:</strong> {oatlyCaseStudy.persona.income}
              </p>
              <p>
                <strong>Lifestyle:</strong> {oatlyCaseStudy.persona.lifestyle}
              </p>
            </article>
            <article className="case-study-panel">
              <h3>Behaviours & Needs</h3>
              <div className="case-study-bullets">
                <div>
                  <p className="case-study-list-label">Behaviours</p>
                  <ul>
                    {oatlyCaseStudy.persona.behaviours.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="case-study-list-label">Needs</p>
                  <ul>
                    {oatlyCaseStudy.persona.needs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Key Insight</h2>
          <div className="case-study-copy">
            <p>{oatlyCaseStudy.insight}</p>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Product Positioning</h2>
          <div className="case-study-stack">
            <article className="case-study-panel">
              <h3>Positioning Statement</h3>
              <p>{oatlyCaseStudy.positioning.statement}</p>
            </article>
            <div className="case-study-grid">
              {oatlyCaseStudy.positioning.pillars.map((item, index) => (
                <article className="case-study-panel" key={item}>
                  <p className="case-study-index">{`0${index + 1}`}</p>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>GTM Messaging</h2>
          <div className="case-study-dual">
            <article className="case-study-panel">
              <h3>Core Message</h3>
              <p>{oatlyCaseStudy.messaging.core}</p>
              <p>{oatlyCaseStudy.messaging.support}</p>
            </article>
            <article className="case-study-panel">
              <h3>Messaging Pillars</h3>
              <ul>
                {oatlyCaseStudy.messaging.pillars.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Launch Channels</h2>
          <div className="case-study-grid">
            {oatlyCaseStudy.channels.map((item, index) => (
              <article className="case-study-panel" key={item.title}>
                <p className="case-study-index">{`0${index + 1}`}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Campaign Idea</h2>
          <div className="case-study-dual">
            <article className="case-study-panel">
              <h3>{oatlyCaseStudy.campaign.title}</h3>
              <p>{oatlyCaseStudy.campaign.summary}</p>
            </article>
            <article className="case-study-panel">
              <h3>Activation</h3>
              <ul>
                {oatlyCaseStudy.campaign.activation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Success Metrics</h2>
          <div className="case-study-grid">
            {oatlyCaseStudy.metrics.map((item, index) => (
              <article className="case-study-panel" key={item.title}>
                <p className="case-study-index">{`0${index + 1}`}</p>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Strategic Takeaway</h2>
          <div className="case-study-copy">
            <p>{oatlyCaseStudy.takeaway}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
