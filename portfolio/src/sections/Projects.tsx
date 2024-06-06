import ProjectCard from '../components/ProjectCard'
import { FaBootstrap, FaReact, FaWordpress } from 'react-icons/fa'
import { DiCss3, DiHtml5, DiSass } from 'react-icons/di'
import { RiJavascriptFill, RiNodejsFill } from 'react-icons/ri'
import {
  SiJest,
  SiLighthouse,
  SiReactrouter,
  SiSwagger,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { BiLogoMongodb, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi'

import Kasa from '../assets/images/projects/Kasa.jpg'
import ArgentBank from '../assets/images/projects/ArgentBank.jpg'
import Events from '../assets/images/projects/724Events.jpg'
import NinaCarducci from '../assets/images/projects/NinaCarducci.jpg'
import SophieBluel from '../assets/images/projects/SophieBluel.jpg'
import PrintIt from '../assets/images/projects/PrintIt.jpg'
import Ohmyfood from '../assets/images/projects/Ohmyfood.jpg'
import Booki from '../assets/images/projects/Booki.jpg'
import Portfolio from '../assets/images/projects/Portfolio.jpg'
import Vetipole from '../assets/images/projects/Vetipole.jpg'
import Ethereal from '../assets/images/projects/Ethereal.jpg'
import Extellient from '../assets/images/projects/Extellient.jpg'
import Dock from '../assets/images/projects/Dock.jpg'

const Projects = () => {
  return (
    <section
      className='border-b-4 border-black py-10 scroll-mt-header'
      id='projects'
    >
      <h2 className='text-center mb-5'>Projets</h2>
      <div className='w-full flex flex-wrap justify-center gap-5'>
        <ProjectCard
          projectCover={Vetipole}
          projectTitle='Vétipôle'
          projectDescription='Site internet de la clinique vétérinaire Vétipôle'
          projectLanguages={[FaWordpress]}
          projectGithubURL=''
          projectWebsiteURL='https://www.vetipole.vet/'
        />
        <ProjectCard
          projectCover={Ethereal}
          projectTitle='Ethereal Decibel Company'
          projectDescription="Site internet de l'association Ethereal Decibel Company"
          projectLanguages={[FaWordpress]}
          projectGithubURL=''
          projectWebsiteURL='https://etherealdecibel.com/'
        />
        <ProjectCard
          projectCover={Extellient}
          projectTitle='Extellient'
          projectDescription="Refonte du site internet de l'agence grenobloise Extellient. Intégration et référencement SEO"
          projectLanguages={[FaWordpress]}
          projectGithubURL=''
          projectWebsiteURL='https://www.extellient.com/'
        />
        <ProjectCard
          projectCover={Dock}
          projectTitle='Dock 14'
          projectDescription='Mise en place du référencement et SEO pour le Dock 14 - Laser Game'
          projectLanguages={[FaWordpress]}
          projectGithubURL=''
          projectWebsiteURL='https://dock14.fr/'
        />
        <ProjectCard
          projectCover={Portfolio}
          projectTitle='Porfolio'
          projectDescription='Portfolio personnel'
          projectLanguages={[FaReact, BiLogoTypescript, SiTailwindcss]}
          projectGithubURL='https://github.com/NicolasOsborne/portfolio'
          projectWebsiteURL=''
        />
        <ProjectCard
          projectCover={ArgentBank}
          projectTitle='Argent Bank'
          projectDescription='Projet 11 - OpenClassrooms'
          projectLanguages={[
            FaReact,
            BiLogoRedux,
            BiLogoTypescript,
            BiLogoMongodb,
            DiSass,
            SiSwagger,
            RiNodejsFill,
          ]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-11'
          projectWebsiteURL=''
        />
        <ProjectCard
          projectCover={Events}
          projectTitle='724 Events'
          projectDescription='Projet 10 - OpenClassrooms'
          projectLanguages={[FaReact, RiJavascriptFill, DiSass, SiJest]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-10'
          projectWebsiteURL='https://oc-projet-10-724events.vercel.app/'
        />
        <ProjectCard
          projectCover={NinaCarducci}
          projectTitle='Nina Carducci'
          projectDescription='Projet 9 - OpenClassrooms'
          projectLanguages={[
            DiCss3,
            DiHtml5,
            RiJavascriptFill,
            FaBootstrap,
            SiLighthouse,
          ]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-9'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-9/'
        />
        <ProjectCard
          projectCover={Kasa}
          projectTitle='Kasa'
          projectDescription='Projet 8 - OpenClassrooms'
          projectLanguages={[
            FaReact,
            SiReactrouter,
            RiJavascriptFill,
            SiVite,
            DiSass,
          ]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-8'
          projectWebsiteURL='https://oc-projet-8-kasa.vercel.app/'
        />
        <ProjectCard
          projectCover={SophieBluel}
          projectTitle='Sophie Bluel'
          projectDescription='Projet 6 - OpenClassrooms'
          projectLanguages={[RiJavascriptFill, RiNodejsFill, SiSwagger]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-6/'
          projectWebsiteURL=''
        />
        <ProjectCard
          projectCover={PrintIt}
          projectTitle='Print It'
          projectDescription='Projet 5 - OpenClassrooms'
          projectLanguages={[RiJavascriptFill, DiCss3, DiHtml5]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-5'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-5/'
        />
        <ProjectCard
          projectCover={Ohmyfood}
          projectTitle='Ohmyfood'
          projectDescription='Projet 4 - OpenClassrooms'
          projectLanguages={[DiCss3, DiHtml5, DiSass]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-4'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-4/'
        />
        <ProjectCard
          projectCover={Booki}
          projectTitle='Booki'
          projectDescription='Projet 3 - OpenClassrooms'
          projectLanguages={[DiCss3, DiHtml5]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-3'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-3/'
        />
      </div>
    </section>
  )
}

export default Projects
