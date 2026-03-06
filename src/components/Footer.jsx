import { siteContent } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        {siteContent.meta.name} - {siteContent.meta.location}
      </p>
      <p className="footer-note">Built for GitHub Pages - Fully static</p>
    </footer>
  )
}
