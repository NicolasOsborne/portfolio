import SkillIcon from '../components/SkillIcon'
import { DiCss3, DiHtml5, DiSass } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import {
  RiGithubFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiReactjsFill,
} from 'react-icons/ri'
import { BiLogoMongodb, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi'
import {
  SiJest,
  SiNotion,
  SiPostman,
  SiPrestashop,
  SiSwagger,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si'
import { FaGitAlt, FaWordpress } from 'react-icons/fa'
import { VscVscodeInsiders } from 'react-icons/vsc'
import Expertise from '../components/Expertise'
import { PiCheese, PiHamburger } from 'react-icons/pi'

const Skills = () => {
  return (
    <section
      className='border-b-4 border-black scroll-mt-header pt-10'
      id='skills'
    >
      <div className='border-b-4 border-black py-[100px]'>
        <h2 className='text-center text-4xl font-heading'>
          Les différentes langues que je pratique
        </h2>
        <h3 className='text-center text-2xl font-heading mt-10'>
          Quand je parle avec les ordinateurs :
        </h3>
        <div className='flex flex-row flex-wrap justify-center gap-10 py-12 px-2'>
          <SkillIcon logo={DiHtml5} name='HTML' className='bg-red-400' />
          <SkillIcon logo={DiCss3} name='CSS' className='bg-orange-400' />
          <SkillIcon logo={DiSass} name='SASS' className='bg-pink-400' />
          <SkillIcon
            logo={RiJavascriptFill}
            name='JavaScript'
            className='bg-yellow-400'
          />
          <SkillIcon
            logo={BiLogoTypescript}
            name='TypeScript'
            className='bg-blue-400'
          />
          <SkillIcon logo={RiReactjsFill} name='React' className='bg-sky-400' />
          <SkillIcon
            logo={BiLogoRedux}
            name='Redux'
            className='bg-purple-400'
          />
          <SkillIcon
            logo={RiNodejsFill}
            name='NodeJS'
            className='bg-green-400'
          />

          <SkillIcon
            logo={SiTailwindcss}
            name='Tailwind'
            className='bg-cyan-400'
          />
          <SkillIcon
            logo={BiLogoMongodb}
            name='MongoDB'
            className='bg-green-600'
          />
        </div>
        <h3 className='text-center text-2xl font-heading mt-5'>
          Quand je parle avec vous :
        </h3>
        <div className='flex flex-row flex-wrap justify-center gap-10 p-12 px-2'>
          <SkillIcon
            logo={PiHamburger}
            name='Anglais'
            description='Ma langue maternelle'
            className='bg-white'
          />
          <SkillIcon
            logo={PiCheese}
            name='Français'
            description='Mon pays natal'
            className='bg-white'
          />
        </div>
      </div>
      <div className='flex flex-col md:grid grid-cols-2'>
        <div className='border-b-4 md:border-r-4 md:border-b-0 border-black py-[100px]'>
          <h3 className='text-center text-3xl font-heading'>Mes outils</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10 py-12 px-2'>
            <SkillIcon logo={FiFigma} name='Figma' className='bg-fuchsia-400' />
            <SkillIcon
              logo={VscVscodeInsiders}
              name='VS Code'
              className='bg-cyan-400'
            />
            <SkillIcon
              logo={RiGithubFill}
              name='Github'
              className='bg-amber-400'
            />
            <SkillIcon logo={FaGitAlt} name='Git' className='bg-orange-400' />
            <SkillIcon
              logo={FaWordpress}
              name='Wordpress'
              className='bg-blue-400'
            />
            <SkillIcon
              logo={SiPrestashop}
              name='Prestashop'
              className='bg-red-400'
            />
            <SkillIcon logo={SiPostman} name='Postman' className='bg-red-600' />
            <SkillIcon logo={SiNotion} name='Notion' className='bg-white-400' />
            <SkillIcon logo={SiVite} name='Vite' className='bg-purple-400' />
            <SkillIcon logo={SiVercel} name='Vercel' className='bg-gray-400' />
            <SkillIcon logo={SiJest} name='Jest' className='bg-red-400' />
            <SkillIcon
              logo={SiSwagger}
              name='Swagger'
              className='bg-lime-400'
            />
          </div>
        </div>
        <div className='py-[100px]'>
          <h3 className='text-center text-3xl font-heading'>Mes compétences</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10 py-12 px-2'>
            <Expertise text='Développement Front-End' className='bg-main' />
            <Expertise text='Intégration Web' className='bg-fuchsia-400' />
            <Expertise text='Référencement' className='bg-main' />
            <Expertise text='Méthode Agile' className='bg-fuchsia-400' />
            <Expertise text='Hébergement' className='bg-main' />
            <Expertise text='UX/UI Design' className='bg-fuchsia-400' />
            <Expertise text='Wireframes & Maquettes' className='bg-main' />
            <Expertise text='Auto-didacte' className='bg-fuchsia-400' />
            <Expertise text='Créatif' className='bg-main' />
            <Expertise text='Curieux' className='bg-fuchsia-400' />
            <Expertise text="Esprit d'équipe" className='bg-main' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
