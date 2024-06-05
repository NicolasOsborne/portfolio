import { DiCss3, DiHtml5, DiSass } from 'react-icons/di'
import SkillIcon from '../components/SkillIcon'
import { FiFigma } from 'react-icons/fi'
import {
  RiGithubFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssLine,
} from 'react-icons/ri'
import { BiLogoMongodb, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandVite, TbBrandVscode } from 'react-icons/tb'
import {
  SiJest,
  SiNotion,
  SiPostman,
  SiPrestashop,
  SiSwagger,
  SiVercel,
} from 'react-icons/si'
import { FaGitAlt, FaWordpress } from 'react-icons/fa'

const Skills = () => {
  return (
    <section className='border-b-4 border-black'>
      <div className='border-b-4 border-black'>
        <h2 className='text-center'>Langages</h2>
        <div className='flex flex-row flex-wrap justify-center gap-4 py-12'>
          <SkillIcon logo={DiHtml5} name='HTML' />
          <SkillIcon logo={DiCss3} name='CSS' />
          <SkillIcon logo={DiSass} name='SASS' />
          <SkillIcon logo={RiJavascriptFill} name='JavaScript' />
          <SkillIcon logo={BiLogoTypescript} name='TypeScript' />
          <SkillIcon logo={RiReactjsFill} name='React' />
          <SkillIcon logo={BiLogoRedux} name='Redux' />
          <SkillIcon logo={RiNodejsFill} name='NodeJS' />
          <SkillIcon logo={TbBrandVite} name='Vite' />
          <SkillIcon logo={RiTailwindCssLine} name='Tailwind' />
          <SkillIcon logo={BiLogoMongodb} name='MongoDB' />
          <SkillIcon logo={SiJest} name='Jest' />
          <SkillIcon logo={SiSwagger} name='Swagger' />
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='border-r-4 border-black'>
          <h3 className='text-center'>Outils</h3>
          <div className='flex flex-row flex-wrap justify-center gap-4 py-12'>
            <SkillIcon logo={FiFigma} name='Figma' />
            <SkillIcon logo={TbBrandVscode} name='VS Code' />
            <SkillIcon logo={RiGithubFill} name='Github' />
            <SkillIcon logo={FaGitAlt} name='Git' />
            <SkillIcon logo={FaWordpress} name='Wordpress' />
            <SkillIcon logo={SiPrestashop} name='Prestashop' />
            <SkillIcon logo={SiPostman} name='Postman' />
            <SkillIcon logo={SiNotion} name='Notion' />
            <SkillIcon logo={SiVercel} name='Vercel' />
          </div>
        </div>
        <div>
          <h3 className='text-center'>Soft Skills</h3>
        </div>
      </div>
    </section>
  )
}

export default Skills
