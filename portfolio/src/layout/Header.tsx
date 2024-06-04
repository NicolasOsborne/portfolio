const Header = () => {
  return (
    <nav className='fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white px-5'>
      <div className='mx-auto flex w-[1300px] max-w-full items-center justify-between'>
        <a className='text-4xl font-heading' href='/'>
          NICOO
        </a>
        <div className='flex items-center gap-10'>
          <a className='text-xl font-base' href='/about'>
            About
          </a>
          <a className='text-xl font-base' href='/skills'>
            Skills
          </a>
          <a className='text-xl font-base' href='/projects'>
            Projects
          </a>
          <a className='text-xl font-base' href='/experience'>
            Experience
          </a>
          <a className='text-xl font-base' href='/contact'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
