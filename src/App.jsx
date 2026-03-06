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

export default function App() {
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
