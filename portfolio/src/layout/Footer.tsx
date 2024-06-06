import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white px-5'>
      <div className='mx-auto flex w-[1300px] max-w-full items-center justify-between'>
        <a className='text-4xl font-heading hover:text-mainAccent' href='/'>
          NICOO
        </a>
      </div>
      <div className='flex gap-10'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/nho-osborne/'
          className='flex items-center justify-center border-2 bg-mainAccent border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
        >
          <Linkedin />
        </a>
        <a
          target='_blank'
          href='https://github.com/NicolasOsborne'
          className='flex items-center justify-center border-2 bg-mainAccent border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
        >
          <Github />
        </a>
      </div>
    </footer>
  )
}

export default Footer
