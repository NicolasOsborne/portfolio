import { Github, Linkedin } from 'lucide-react'
// import HeroAnimation from '../components/HeroAnimation'
import HeroLogo from '../components/HeroLogo'
import Marquee from '../components/Marquee'

const Hero = () => {
  return (
    <>
      <section className='relative flex min-h-[80vh] gap-[100px] items-center justify-between bg-bg px-5 text-center'>
        <div className='text-[3vh] sm:text-[8vh] font-hero'>
          {/* <HeroAnimation /> */}
          <HeroLogo />
        </div>
        <div className='hidden sm:flex gap-10'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/nho-osborne/'
            className='flex items-center justify-center rounded-base border-2 bg-mainAccent border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
          >
            <Linkedin />
          </a>
          <a
            target='_blank'
            href='https://github.com/NicolasOsborne'
            className='flex items-center justify-center rounded-base border-2 bg-mainAccent border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
          >
            <Github />
          </a>
        </div>
      </section>
      <Marquee />
    </>
  )
}

export default Hero
