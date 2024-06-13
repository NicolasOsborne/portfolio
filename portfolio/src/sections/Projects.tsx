import ProjectCard from '../components/ProjectCard'
import { FaBootstrap, FaReact, FaWordpress, FaYoast } from 'react-icons/fa'
import { DiCss3, DiHtml5, DiSass } from 'react-icons/di'
import { RiJavascriptFill, RiNodejsFill } from 'react-icons/ri'
import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
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
import { FiFigma } from 'react-icons/fi'

const Projects = () => {
  return (
    <section
      className='border-b-4 border-black py-[200px] scroll-mt-header'
      id='projects'
    >
      <h2 className='text-center mb-20 text-4xl font-heading'>
        Et en pratique, ça donne quoi ?
      </h2>
      <h3 className='text-center text-2xl font-heading mt-5'>
        Du site Wordpress...
      </h3>
      <div className='w-full flex flex-wrap justify-center items-center gap-10 my-20'>
        <ProjectCard
          projectCover={Vetipole}
          projectTitle='Vétipôle'
          projectDescription='Site internet de la clinique vétérinaire Vétipôle'
          projectLanguages={[
            FaWordpress,
            FaYoast,
            SiGoogleanalytics,
            SiGooglesearchconsole,
          ]}
          projectWebsiteURL='https://www.vetipole.vet/'
          projectContext={
            <p className='text-md font-body'>
              En mars 2023, une toute nouvelle clinique vétérinaire voit le jour
              à Saint-Jeoire-Prieuré, en Savoie. À cette occasion, j'ai été
              missionné pour travailler en collaboration avec{' '}
              <a
                href='https://claireorvain.fr/'
                target='_blank'
                className='text-mainAccent font-bold'
              >
                Claire Orvain
              </a>{' '}
              sur la création du site internet de la clinique de A à Z, de la
              conception artistique, à l'intégration en utilisant WordPress, à
              la mise en place du référencement et SEO.
            </p>
          }
          projectProcess={
            <div className='text-md font-body'>
              <ul className='list-inside list-image-bulletpoint'>
                <li>Intégration des pages avec WordPress.</li>
                <li>Optimisation des performances du site.</li>
                <li>Optimisation de l'affichage responsive.</li>
                <li>Traduction de pages en anglais et en allemand.</li>
                <li>Mise en place du référencement et SEO du site.</li>
                <li>Optimisation des méta-données des pages.</li>
                <li>Indexation des pages pour les moteurs de recherche.</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Ethereal}
          projectTitle='Ethereal Decibel Company'
          projectDescription="Site internet de l'association Ethereal Decibel Company"
          projectLanguages={[FaWordpress, FaYoast, FiFigma]}
          projectWebsiteURL='https://etherealdecibel.com/'
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Extellient}
          projectTitle='Extellient'
          projectDescription="Refonte du site internet de l'agence grenobloise Extellient. Intégration et référencement SEO"
          projectLanguages={[FaWordpress, FaYoast, FiFigma]}
          projectWebsiteURL='https://www.extellient.com/'
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Dock}
          projectTitle='Dock 14'
          projectDescription='Mise en place du référencement et SEO pour le site du Dock 14, Laser Game à Echirolles'
          projectLanguages={[FaWordpress, FaYoast, SiGooglesearchconsole]}
          projectWebsiteURL='https://dock14.fr/'
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
      </div>
      <h3 className='text-center text-2xl font-heading mt-40'>
        ...au site développé sur mesure
      </h3>
      <div className='w-full flex flex-wrap justify-center gap-10 mt-20'>
        <ProjectCard
          projectCover={Portfolio}
          projectTitle='Portfolio'
          projectDescription='Portfolio personnel'
          projectLanguages={[FaReact, BiLogoTypescript, SiTailwindcss, FiFigma]}
          projectGithubURL='https://github.com/NicolasOsborne/portfolio'
          projectWebsiteURL=''
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
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
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Events}
          projectTitle='724 Events'
          projectDescription='Projet 10 - OpenClassrooms'
          projectLanguages={[FaReact, RiJavascriptFill, DiSass, SiJest]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-10'
          projectWebsiteURL='https://oc-projet-10-724events.vercel.app/'
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
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
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
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
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={SophieBluel}
          projectTitle='Sophie Bluel'
          projectDescription='Projet 6 - OpenClassrooms'
          projectLanguages={[RiJavascriptFill, RiNodejsFill, SiSwagger]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-6/'
          projectWebsiteURL=''
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={PrintIt}
          projectTitle='Print It'
          projectDescription='Projet 5 - OpenClassrooms'
          projectLanguages={[RiJavascriptFill, DiCss3, DiHtml5]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-5'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-5/'
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Ohmyfood}
          projectTitle='Ohmyfood'
          projectDescription='Projet 4 - OpenClassrooms'
          projectLanguages={[DiCss3, DiHtml5, DiSass]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-4'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-4/'
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
        <ProjectCard
          projectCover={Booki}
          projectTitle='Booki'
          projectDescription='Projet 3 - OpenClassrooms'
          projectLanguages={[DiCss3, DiHtml5]}
          projectGithubURL='https://github.com/NicolasOsborne/oc-projet-3'
          projectWebsiteURL='https://nicolasosborne.github.io/oc-projet-3/'
          projectContext={<p className='text-md font-body'></p>}
          projectProcess={
            <div className='text-md font-body'>
              <p>This is a process description.</p>
              <ul>
                <li>Step 1</li>
                <li>Step 2</li>
              </ul>
            </div>
          }
        />
      </div>
    </section>
  )
}

export default Projects
