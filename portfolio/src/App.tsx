import About from './sections/About'
import Header from './components/Header'
import Hero from './sections/Hero'
import Marquee from './components/Marquee'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

function App() {
  const items = ['Développeur Front-End', 'Intégrateur Web']
  return (
    <>
      <Header />
      <Hero />
      <Marquee items={items} />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App
