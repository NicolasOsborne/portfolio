import { Github, Linkedin } from 'lucide-react'
import Logo from '../components/Logo'

const Footer = () => {
  return (
    <footer className='mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white dark:bg-main px-5 2xl:px-[10%]'>
      <div className='mx-auto flex w-[100%] max-w-full items-center justify-between'>
        <Logo className='max-w-[75%] sm:max-w-[100%]' />
      </div>
      <div className='flex gap-4 sm:gap-10'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/nho-osborne/'
          aria-label="Link to Nicolas Osborne's LinkedIn profile"
          className='flex items-center justify-center rounded-base border-2 bg-mainAccent border-black dark:border-dark-black dark:bg-secondary p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
        >
          <Linkedin />
        </a>
        <a
          target='_blank'
          href='https://github.com/NicolasOsborne'
          aria-label="Link to Nicolas Osborne's Github"
          className='flex items-center justify-center rounded-base border-2 bg-mainAccent border-black dark:border-dark-black dark:bg-secondary p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
        >
          <Github />
        </a>
      </div>
    </footer>
  )
}

export default Footer
