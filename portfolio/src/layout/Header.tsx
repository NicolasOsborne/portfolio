import { RxHamburgerMenu } from 'react-icons/rx'

import { useState } from 'react'

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  return (
    <nav className='fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white px-5'>
      <div className='mx-auto flex w-[1300px] max-w-full items-center justify-between'>
        <a className='text-6xl font-heading hover:text-mainAccent' href='/'>
          NICOO
        </a>
        <div className='hidden md:flex items-center gap-10'>
          <a
            className='text-xl font-body font-base hover:text-mainAccent'
            href='#about'
          >
            À propos
          </a>
          <a
            className='text-xl font-body font-base hover:text-mainAccent'
            href='#skills'
          >
            Skills
          </a>
          <a
            className='text-xl font-body font-base hover:text-mainAccent'
            href='#projects'
          >
            Projets
          </a>
          <a
            className='text-xl font-body font-base hover:text-mainAccent'
            href='#experience'
          >
            Expérience
          </a>
          <a
            className='text-xl font-body font-base hover:text-mainAccent'
            href='#contact'
          >
            Contact
          </a>
        </div>
        <div className='md:hidden'>
          <button
            className='flex items-center justify-center border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
            onClick={() => {
              setIsMenuActive(true)
            }}
          >
            <RxHamburgerMenu />
          </button>
          {isMenuActive && (
            <div
              className='fixed left-0 top-0 z-50 flex h-[100dvh] w-screen items-start justify-start bg-gray-500/50 transition-all duration-300'
              onClick={() => setIsMenuActive(false)}
            >
              <div
                className='z-10 h-full w-[250px] border-2 border-black bg-main font-body font-base transition-transform duration-300'
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  className='block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
                  href='#about'
                >
                  À propos
                </a>
                <a
                  className='block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
                  href='#skills'
                >
                  Skills
                </a>
                <a
                  className='block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
                  href='#projects'
                >
                  Projets
                </a>
                <a
                  className='block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
                  href='#experience'
                >
                  Expérience
                </a>
                <a
                  className='block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent'
                  href='#contact'
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
