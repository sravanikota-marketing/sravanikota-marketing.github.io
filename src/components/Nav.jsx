import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="nav-logo" href="#top" onClick={() => setOpen(false)}>
        SK
      </a>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <a className="btn small" href={siteContent.hero.ctas[0].href}>
          Resume
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open ? (
        <nav className="nav-mobile-menu">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
