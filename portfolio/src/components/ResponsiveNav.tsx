import { Github, Linkedin } from 'lucide-react'

interface ResponsiveNavProps {
  isMenuActive: boolean
  setIsMenuActive: (value: boolean) => void
  handleScrollToSection: any
}

const ResponsiveNav = ({
  isMenuActive,
  setIsMenuActive,
  handleScrollToSection,
}: ResponsiveNavProps) => {
  return (
    <div
      className='fixed left-0 top-0 z-50 flex h-[100dvh] w-screen items-start justify-start bg-gray-500/50 transition-all duration-300'
      onClick={() => setIsMenuActive(false)}
    >
      <div
        className='z-10 h-full w-[250px] border-2 border-black bg-main font-heading font-base transition-transform duration-300'
        onClick={(e) => e.stopPropagation()}
      >
        <a
          className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
          onClick={() => handleScrollToSection('about')}
        >
          Qui ?
        </a>
        <a
          className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
          onClick={() => handleScrollToSection('skills')}
        >
          Comment ?
        </a>
        <a
          className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
          onClick={() => handleScrollToSection('projects')}
        >
          Quoi ?
        </a>
        <a
          className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
          onClick={() => handleScrollToSection('experience')}
        >
          Où ?
        </a>
        <a
          className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
          onClick={() => handleScrollToSection('contact')}
        >
          Pourquoi pas ?
        </a>
        <div className='flex flex-row gap-10 justify-center mt-40'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/nho-osborne/'
            className='flex items-center justify-center rounded-base border-2 bg-fuchsia-400 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
          >
            <Linkedin />
          </a>
          <a
            target='_blank'
            href='https://github.com/NicolasOsborne'
            className='flex items-center justify-center rounded-base border-2 bg-fuchsia-400 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNav
