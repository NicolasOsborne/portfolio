import { Github, Linkedin } from 'lucide-react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import Button from './Button'
import Logo from './Logo'

interface ResponsiveNavProps {
  isMenuActive: boolean
  setIsMenuActive: (value: boolean) => void
  handleScrollToSection: (sectionId: string) => void
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

const ResponsiveNav = ({
  setIsMenuActive,
  handleScrollToSection,
  isDarkMode,
  setIsDarkMode,
}: ResponsiveNavProps) => {
  return (
    <div
      className='fixed left-0 top-0 z-50 flex h-[100dvh] w-screen items-start justify-start bg-gray-500/50 transition-all duration-300'
      onClick={() => setIsMenuActive(false)}
    >
      <div
        className='z-10 h-full w-[250px] border-2 border-black bg-main font-heading transition-transform duration-300 flex flex-col'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='px-5 py-4'>
          <Logo />
        </div>
        <div>
          <a
            className='cursor-pointer block w-full border-b-2 border-t-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('about')
            }}
            href='#about'
          >
            À Propos
          </a>
          <a
            className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('skills')
            }}
            href='#skills'
          >
            Compétences
          </a>
          <a
            className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('projects')
            }}
            href='#projects'
          >
            Projets
          </a>
          <a
            className='cursor-pointer block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('experience')
            }}
            href='#experience'
          >
            Expériences
          </a>
        </div>
        <Button
          text='Contact'
          className='mx-auto mt-10 w-max text-lg font-heading bg-secondary'
          onClick={() => handleScrollToSection('contact')}
        />
        <div className='flex flex-col gap-10 justify-center mt-auto mb-10'>
          <div className='mx-auto'>
            <button
              className='flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:border-dark-black text-lg font-heading bg-dark-bg dark:bg-white'
              aria-label='Toggle Dark/Light mode'
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <MdOutlineLightMode size={24} />
              ) : (
                <MdOutlineDarkMode size={24} className='text-white' />
              )}
            </button>
          </div>
          <div className='flex flex-row gap-10 justify-center'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/nho-osborne/'
              className='flex items-center justify-center rounded-base border-2 bg-secondary border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
            >
              <Linkedin />
            </a>
            <a
              target='_blank'
              href='https://github.com/NicolasOsborne'
              className='flex items-center justify-center rounded-base border-2 bg-secondary border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNav
