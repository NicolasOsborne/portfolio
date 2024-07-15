import About from './sections/About'
import Header from './layout/Header'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import PastJobs from './sections/PastJobs'
import Contact from './sections/Contact'
import Footer from './layout/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About />
      <Skills />
      <PastJobs />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
