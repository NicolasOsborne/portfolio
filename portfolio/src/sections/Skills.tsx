import SkillIcon from '../components/SkillIcon'
import { DiCss3, DiHtml5, DiSass } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { RiGithubFill, RiJavascriptFill, RiNodejsFill } from 'react-icons/ri'
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
import { FaGitAlt, FaReact, FaWordpress } from 'react-icons/fa'
import { VscVscodeInsiders } from 'react-icons/vsc'
import Expertise from '../components/Expertise'
import UsaBackground from '../assets/images/logos/usa.png'
import FranceBackground from '../assets/images/logos/france.png'

const Skills = () => {
  return (
    <section className='border-b-4 border-black scroll-mt-header' id='skills'>
      <div className='border-b-4 border-black py-[100px]'>
        <h2 className='text-center text-4xl font-heading px-2'>
          Les différentes langues que je pratique
        </h2>
        <h3 className='text-center text-2xl font-heading mt-10 px-4'>
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
          <SkillIcon logo={FaReact} name='React' className='bg-sky-400' />
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
        <h3 className='text-center text-2xl font-heading mt-5 px-4'>
          Quand je parle avec vous :
        </h3>
        <div className='flex flex-row flex-wrap justify-center gap-10 pt-12 px-2'>
          <div className='flex flex-col items-center'>
            <div
              className='flex items-center justify-center w-[52px] h-[52px] rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              style={{
                backgroundImage: `url(${UsaBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <p className='text-center text-sm font-body font-base mt-2'>
              Anglais
            </p>
            <p className='text-center text-sm font-body font-base'>
              Ma langue maternelle
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <div
              className='flex items-center justify-center w-[52px] h-[52px] rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              style={{
                backgroundImage: `url(${FranceBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <p className='text-center text-sm font-body font-base mt-2'>
              Français
            </p>
            <p className='text-center text-sm font-body font-base'>
              Mon autre langue maternelle
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:grid grid-cols-2'>
        <div className='border-b-4 md:border-r-4 md:border-b-0 border-black py-[100px] 2xl:px-[20%]'>
          <h3 className='text-center text-3xl font-heading'>Mes outils</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10 py-12 px-2'>
            <SkillIcon logo={FiFigma} name='Figma' className='bg-fuchsia-400' />
            <SkillIcon
              logo={VscVscodeInsiders}
              name='VSCode'
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
            <SkillIcon logo={SiVercel} name='Vercel' className='bg-white-400' />
            <SkillIcon logo={SiJest} name='Jest' className='bg-red-400' />
            <SkillIcon
              logo={SiSwagger}
              name='Swagger'
              className='bg-lime-400'
            />
          </div>
        </div>
        <div className='py-[100px] 2xl:px-[20%]'>
          <h3 className='text-center text-3xl font-heading'>Mes compétences</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10 py-12 px-2'>
            <Expertise text='Développement Front-End' className='bg-main' />
            <Expertise text='Intégration Web' className='bg-secondary' />
            <Expertise text='Référencement & SEO' className='bg-bg' />
            <Expertise text='Méthode Agile' className='bg-main' />
            <Expertise text='Hébergement' className='bg-secondary' />
            <Expertise text='Optimisation' className='bg-bg' />
            <Expertise text='Maintenance' className='bg-main' />
            <Expertise text='UX/UI Design' className='bg-secondary' />
            <Expertise text='Wireframes & Maquettes' className='bg-bg' />
            <Expertise text='Responsive Design' className='bg-main' />
            <Expertise text='Auto-didacte' className='bg-secondary' />
            <Expertise text='Créatif' className='bg-bg' />
            <Expertise text='Curieux' className='bg-main' />
            <Expertise text="Esprit d'équipe" className='bg-secondary' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
