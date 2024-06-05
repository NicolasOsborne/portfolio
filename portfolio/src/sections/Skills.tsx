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
          <SkillIcon
            logo={TbBrandVite}
            name='Vite'
            className='bg-fuchsia-400'
          />
          <SkillIcon
            logo={RiTailwindCssLine}
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
        <div className='border-r-4 border-black'>
          <h3 className='text-center'>Outils</h3>
          <div className='flex flex-row flex-wrap justify-center gap-10 py-12'>
            <SkillIcon logo={FiFigma} name='Figma' className='bg-fuchsia-400' />
            <SkillIcon
              logo={TbBrandVscode}
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
        <div>
          <h3 className='text-center'>Soft Skills</h3>
        </div>
      </div>
    </section>
  )
}

export default Skills
