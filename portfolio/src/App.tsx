import About from './sections/About'
import Header from './layout/Header'
import Hero from './sections/Hero'
import Marquee from './components/Marquee'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import PastJobs from './sections/PastJobs'
import Contact from './sections/Contact'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <PastJobs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
