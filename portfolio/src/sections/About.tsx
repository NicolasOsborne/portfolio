import Profile from '../assets/images/profile_pic.webp'
import ProfileHover from '../assets/images/profile_pic_overlay.webp'
import Background from '../assets/images/background.svg'

import { useState } from 'react'

const About = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <section
      className='flex flex-col md:grid grid-cols-2 border-b-4 border-black scroll-mt-header dark:bg-dark-bg dark:border-dark-black'
      id='about'
    >
      <div className='border-b-4 md:border-r-4 md:border-b-0 border-black py-[100px] px-5 sm:px-10 flex flex-col gap-10 2xl:px-[20%] dark:border-dark-black dark:text-white'>
        <h2 className='text-4xl font-heading text-center'>
          Nicoo, c'est qui ?
        </h2>
        <p className='font-body text-xl leading-loose'>
          <span className='text-mainAccent font-bold'>Nico</span>, c'est moi,{' '}
          <span className='text-mainAccent font-bold'>
            Développeur Front-End
          </span>{' '}
          et <span className='text-mainAccent font-bold'>Intégrateur Web</span>{' '}
          à <span className='text-mainAccent font-bold'>Grenoble</span>.
          <br />
          Mon métier ? Donner vie à vos designs en les transformant en sites web
          dynamiques ! <br />
          <span className='text-mainAccent font-bold'>Autodidacte</span> en
          code, je me suis par la suite professionnalisé dans ce domaine en
          rejoignant la filière Développeur - Intégrateur Web d'OpenClassrooms.
          <br />
          Amoureux du{' '}
          <span className='text-mainAccent font-bold'>pixel perfect</span>,
          créatif et possédant un grand sens du détail, j'apprécie
          particulièrement collaborer étroitement avec les designers.
          <br />
          Je suis actuellement{' '}
          <span className='text-mainAccent font-bold'>
            à la recherche d'une entreprise
          </span>{' '}
          qui valorise l'innovation, la créativité, la qualité et le travail en
          équipe. <br /> Si tout cela vous parle, c'est que nous sommes faits
          pour nous entendre ! <br />
          Je suis{' '}
          <span className='text-mainAccent font-bold'>
            disponible immédiatement
          </span>
          , alors n'hésitez pas à me contacter !
        </p>
      </div>
      <div
        className='flex flex-col gap-20 items-center justify-center p-10 bg-no-repeat bg-cover 2xl:px-[20%]'
        style={{ backgroundImage: `url(${Background})` }}
      >
        <img
          src={isHovered ? ProfileHover : Profile}
          alt='Nicoo - Nicolas Osborne - Développeur Web & Intégrateur Web à Grenoble'
          className='rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></img>
        <div>
          <a
            href='./OSBORNE_Nicolas_CV.pdf'
            download='OSBORNE_Nicolas_CV.pdf'
            className='flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-4 py-2 shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none font-heading'
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
