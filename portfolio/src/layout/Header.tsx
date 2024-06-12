import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

import Logo from '../components/Logo'
import ResponsiveNav from '../components/ResponsiveNav'

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  return (
    <nav className='fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white px-5'>
      <div className='mx-auto flex w-[1300px] max-w-full items-center justify-between'>
        <Logo />

        <div className='hidden lg:flex items-center gap-10'>
          <a
            className='text-lg font-heading font-base hover:text-mainAccent'
            href='#about'
          >
            Qui ?
          </a>
          <a
            className='text-lg font-heading font-base hover:text-mainAccent'
            href='#skills'
          >
            Comment ?
          </a>
          <a
            className='text-lg font-heading font-base hover:text-mainAccent'
            href='#projects'
          >
            Quoi ?
          </a>
          <a
            className='text-lg font-heading font-base hover:text-mainAccent'
            href='#experience'
          >
            Où ?
          </a>
          <a
            className='text-lg font-heading font-base hover:text-mainAccent'
            href='#contact'
          >
            Pourquoi pas ?
          </a>
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
            />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
