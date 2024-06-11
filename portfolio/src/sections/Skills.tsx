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
import SoftSkill from '../components/SoftSkill'

const Skills = () => {
  return (
    <section
      className='border-b-4 border-black scroll-mt-header pt-10'
      id='skills'
    >
      <div className='border-b-4 border-black py-[100px]'>
        <h2 className='text-center text-4xl font-heading'>Skills</h2>
        <div className='flex flex-row flex-wrap justify-center gap-10 py-12'>
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
          <SkillIcon logo={SiVite} name='Vite' className='bg-fuchsia-400' />
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
          <SkillIcon logo={SiJest} name='Jest' className='bg-red-400' />
          <SkillIcon logo={SiSwagger} name='Swagger' className='bg-lime-400' />
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='border-r-4 border-black py-[100px]'>
          <h3 className='text-center text-3xl font-heading'>Outils</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10 py-12'>
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
            <SkillIcon logo={SiVercel} name='Vercel' className='bg-gray-400' />
          </div>
        </div>
        <div className='py-[100px]'>
          <h3 className='text-center text-3xl font-heading'>Soft Skills</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10 py-12'>
            <SoftSkill text='Autonomie' />
            <SoftSkill text='Adaptabilité' />
            <SoftSkill text='Créativité' />
            <SoftSkill text='Empathie' />
            <SoftSkill text='Initiative' />
            <SoftSkill text="Esprit d'équipe" />
            <SoftSkill text='Curiosité' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
