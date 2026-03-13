import { siteContent } from '../data/siteContent'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Product Marketing', href: '#product-marketing' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-logo" href="#top">
        SK
      </a>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="btn small" href={siteContent.hero.ctas[0].href}>
        Resume
      </a>
    </header>
  )
}
