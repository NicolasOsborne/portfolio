import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { useEffect, useState } from 'react'

import Logo from '../components/Logo'
import ResponsiveNav from '../components/ResponsiveNav'
import Button from '../components/Button'

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <nav className='fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white dark:bg-main px-5 2xl:px-[10%]'>
      <div className='mx-auto flex w-[100%] max-w-full items-center justify-between'>
        <Logo />

        <div className='hidden xl:flex items-center gap-10'>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('about')
            }}
            href='#about'
          >
            À Propos
          </a>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('skills')
            }}
            href='#skills'
          >
            Compétences
          </a>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('projects')
            }}
            href='#projects'
          >
            Projets
          </a>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('experience')
            }}
            href='#experience'
          >
            Expériences
          </a>
          <Button
            text='Contact'
            className='text-lg font-heading'
            onClick={() => handleScrollToSection('contact')}
          />
          <button
            className='flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:border-dark-black dark:bg-secondary'
            aria-label='Toggle Dark/Light mode'
            onClick={() => {
              setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)
            }}
          >
            {isDarkMode ? (
              <MdOutlineLightMode size={30} />
            ) : (
              <MdOutlineDarkMode size={30} />
            )}
          </button>
        </div>
        <div className='xl:hidden'>
          <button
            className='flex items-center justify-center rounded-base border-2 border-black dark:border-dark-black dark:bg-secondary p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
            aria-label='Menu'
            onClick={() => {
              setIsMenuActive(true)
            }}
          >
            <RxHamburgerMenu />
          </button>
          {isMenuActive && (
            <ResponsiveNav
              isMenuActive={isMenuActive}
              setIsMenuActive={setIsMenuActive}
              handleScrollToSection={handleScrollToSection}
            />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
