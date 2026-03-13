import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Highlights from './components/Highlights'
import ProductMarketing from './components/ProductMarketing'
import Testimonials from './components/Testimonials'
import Credentials from './components/Credentials'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotionCaseStudy from './components/NotionCaseStudy'
import OatlyCaseStudy from './components/OatlyCaseStudy'

function getRoute() {
  return window.location.hash || '#top'
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRoute())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (route === '#/case-studies/notion') {
    return <NotionCaseStudy />
  }

  if (route === '#/case-studies/oatly') {
    return <OatlyCaseStudy />
  }

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Highlights />
        <ProductMarketing />
        <Testimonials />
        <Credentials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
