import { useEffect, useRef } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { siteContent } from '../data/siteContent'

const columns = ['Parameter', 'Notion', 'Coda', 'ClickUp', 'Airtable', 'Microsoft Loop']

export default function NotionCaseStudy() {
  const { notionCaseStudy } = siteContent
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
              <p className="case-study-kicker">Product Marketing Case Study</p>
              <h1>{notionCaseStudy.title}</h1>
            </div>
            <div className="case-study-hero-side">
              <p className="case-study-intro">{notionCaseStudy.heroIntro}</p>
            </div>
          </div>
          <div className="case-study-banner notion-banner">
            <div className="notion-banner-visual">
              <video
                ref={videoRef}
                className="notion-banner-video"
                src="/assets/case-studies/notion-workspace.mp4"
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
          <h2>{notionCaseStudy.overview.title}</h2>
          <div className="case-study-copy">
            {notionCaseStudy.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Competitive Positioning</h2>
          <div className="case-study-stack">
            {notionCaseStudy.competitors.map((item) => (
              <article className="case-study-panel" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Competitive Landscape</h2>
          <div className="case-study-table-wrap">
            <table className="case-study-table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {notionCaseStudy.landscape.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Market Gaps</h2>
          <div className="case-study-grid">
            {notionCaseStudy.marketGaps.map((item, index) => (
              <article className="case-study-panel" key={item.title}>
                <p className="case-study-index">{`0${index + 1}`}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Product Opportunities for Notion</h2>
          <div className="case-study-grid">
            {notionCaseStudy.opportunities.map((item, index) => (
              <article className="case-study-panel" key={item.title}>
                <p className="case-study-index">{`0${index + 1}`}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Go-to-Market Strategy</h2>
          <div className="case-study-dual">
            <article className="case-study-panel">
              <h3>Target Audience</h3>
              <p>{notionCaseStudy.gtm.audience}</p>
            </article>
            <article className="case-study-panel">
              <h3>Positioning</h3>
              <p>{notionCaseStudy.gtm.positioning}</p>
            </article>
          </div>
          <div className="case-study-stack">
            {notionCaseStudy.gtm.launch.map((item, index) => (
              <article className="case-study-panel" key={item.title}>
                <p className="case-study-index">{`0${index + 1}`}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Strategic Insight</h2>
          <div className="case-study-copy">
            {notionCaseStudy.insight.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
