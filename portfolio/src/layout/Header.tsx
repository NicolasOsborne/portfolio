import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

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
  return (
    <nav className='fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white px-5'>
      <div className='mx-auto flex w-[1300px] max-w-full items-center justify-between'>
        <Logo />

        <div className='hidden lg:flex items-center gap-10'>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={() => handleScrollToSection('about')}
          >
            À Propos
          </a>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={() => handleScrollToSection('skills')}
          >
            Compétences
          </a>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={() => handleScrollToSection('projects')}
          >
            Projets
          </a>
          <a
            className='cursor-pointer text-lg font-heading font-base hover:text-mainAccent'
            onClick={() => handleScrollToSection('experience')}
          >
            Expériences
          </a>
          <Button
            text='Contact'
            className='text-lg font-heading'
            onClick={() => handleScrollToSection('contact')}
          />
        </div>
        <div className='lg:hidden'>
          <button
            className='flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
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
