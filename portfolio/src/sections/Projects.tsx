import ProjectCard from '../components/ProjectCard'
import Kasa from '../assets/images/projects/Kasa.jpg'
import { FaReact } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { RiJavascriptFill } from 'react-icons/ri'

const Projects = () => {
  return (
    <section className='border-b-4 border-black py-10'>
      <h2 className='text-center mb-5'>Projets</h2>
      <div className='w-full flex flex-wrap justify-center gap-5'>
        <ProjectCard
          projectURL='https://github.com/NicolasOsborne/oc-projet-8'
          projectCover={Kasa}
          projectTitle='Kasa'
          projectDescription='Projet 8 OpenClassrooms'
          projectLanguages={[FaReact, RiJavascriptFill, DiSass]}
        />
        <ProjectCard
          projectURL='https://github.com/NicolasOsborne/oc-projet-8'
          projectCover={Kasa}
          projectTitle='Kasa'
          projectDescription='Projet 8 OpenClassrooms'
          projectLanguages={[FaReact, RiJavascriptFill, DiSass]}
        />
        <ProjectCard
          projectURL='https://github.com/NicolasOsborne/oc-projet-8'
          projectCover={Kasa}
          projectTitle='Kasa'
          projectDescription='Projet 8 OpenClassrooms'
          projectLanguages={[FaReact, RiJavascriptFill, DiSass]}
        />
        <ProjectCard
          projectURL='https://github.com/NicolasOsborne/oc-projet-8'
          projectCover={Kasa}
          projectTitle='Kasa'
          projectDescription='Projet 8 OpenClassrooms'
          projectLanguages={[FaReact, RiJavascriptFill, DiSass]}
        />
      </div>
    </section>
  )
}

export default Projects
