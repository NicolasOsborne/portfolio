import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'

function App() {
  const items = ['Développeur Front-End', 'Intégrateur Web']
  return (
    <>
      <Header />
      <Hero />
      <Marquee items={items} />
    </>
  )
}

export default App
