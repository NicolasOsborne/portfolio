import { X } from 'lucide-react'
import { IconType } from 'react-icons'
import Button from './Button'
import SkillIcon from './SkillIcon'

import React, { useEffect, useState } from 'react'
import { FaBootstrap, FaReact, FaWordpress, FaYoast } from 'react-icons/fa'
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
import { DiCss3, DiHtml5, DiSass } from 'react-icons/di'
import { RiJavascriptFill, RiNodejsFill } from 'react-icons/ri'
import { BiLogoMongodb, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi'
import { FiFigma } from 'react-icons/fi'

type ProjectModalProps = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  projectTitle: string
  projectCover: string
  projectContext: React.ReactNode
  projectProcess: React.ReactNode
  projectLanguages: IconType[]
  projectGithubURL?: string | null
  projectWebsiteURL?: string | null
}

export default function ProjectModal({
  active,
  setActive,
  projectTitle,
  projectCover,
  projectContext,
  projectProcess,
  projectLanguages,
  projectGithubURL,
  projectWebsiteURL,
}: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setActive(false)
    }, 300)
  }

  useEffect(() => {
    if (active) {
      setIsVisible(true)
    }
  }, [active])

  if (!active) return null

  return (
    <div
      role='dialog'
      aria-modal='true'
      data-visible={isVisible ? 'true' : 'false'}
      onClick={closeModal}
      className='fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center data-[visible=true]:opacity-100 data-[visible=true]:visible data-[visible=false]:opacity-0 data-[visible=false]:invisible transition-all duration-300 bg-gray-500/50'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative flex w-[80%] group-data-[visible=true]:opacity-100 group-data-[visible=true]:visible group-data-[visible=false]:opacity-0 group-data-[visible=false]:invisible rounded-base border-2 border-black bg-bg p-10 pt-12 shadow-base transition-all duration-300'
      >
        <button onClick={closeModal}>
          <X className='absolute right-3 top-3 h-6 w-6' />
        </button>
        <div className='flex flex-col md:flex-row w-full gap-4 md:justify-between'>
          <div className='flex flex-col w-full md:w-[50%] gap-4'>
            <h4 className='text-2xl font-heading rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white'>
              {projectTitle}
            </h4>
            <img
              src={projectCover}
              alt={projectTitle}
              className='md:hidden rounded-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            ></img>
            <div className='flex flex-col'>
              <div className='rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white'>
                <p className='text-lg font-heading mb-2'>Contexte :</p>
                {projectContext}
              </div>
            </div>
            <div className='rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white'>
              <p className='text-lg font-heading mb-2'>Réalisation :</p>
              {projectProcess}
            </div>
          </div>
          <div className='flex flex-col w-full md:w-[50%] gap-4'>
            <img
              src={projectCover}
              alt={projectTitle}
              className='hidden md:block rounded-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-'
            ></img>
            <div className='rounded-base border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white'>
              <div className='flex flex-wrap gap-4 justify-center'>
                {projectLanguages.map((LanguageIcon, index) => {
                  let color: string
                  let language: string
                  if (LanguageIcon === FaWordpress) {
                    color = 'bg-blue-400'
                    language = 'Wordpress'
                  } else if (LanguageIcon === SiGoogleanalytics) {
                    color = 'bg-orange-400'
                    language = 'Google Analytics'
                  } else if (LanguageIcon === SiGooglesearchconsole) {
                    color = 'bg-sky-400'
                    language = 'Search Console'
                  } else if (LanguageIcon === FaYoast) {
                    color = 'bg-pink-600'
                    language = 'Yoast'
                  } else if (LanguageIcon === DiHtml5) {
                    color = 'bg-red-400'
                    language = 'HTML'
                  } else if (LanguageIcon === DiCss3) {
                    color = 'bg-orange-400'
                    language = 'CSS'
                  } else if (LanguageIcon === DiSass) {
                    color = 'bg-pink-400'
                    language = 'SASS'
                  } else if (LanguageIcon === RiJavascriptFill) {
                    color = 'bg-yellow-400'
                    language = 'JavaScript'
                  } else if (LanguageIcon === BiLogoTypescript) {
                    color = 'bg-blue-400'
                    language = 'TypeScript'
                  } else if (LanguageIcon === FaReact) {
                    color = 'bg-sky-400'
                    language = 'React'
                  } else if (LanguageIcon === BiLogoRedux) {
                    color = 'bg-purple-400'
                    language = 'Redux'
                  } else if (LanguageIcon === RiNodejsFill) {
                    color = 'bg-green-400'
                    language = 'NodeJS'
                  } else if (LanguageIcon === SiTailwindcss) {
                    color = 'bg-cyan-400'
                    language = 'Tailwind'
                  } else if (LanguageIcon === BiLogoMongodb) {
                    color = 'bg-green-600'
                    language = 'MongoDB'
                  } else if (LanguageIcon === FiFigma) {
                    color = 'bg-fuchsia-400'
                    language = 'Figma'
                  } else if (LanguageIcon === SiSwagger) {
                    color = 'bg-lime-400'
                    language = 'Swagger'
                  } else if (LanguageIcon === SiJest) {
                    color = 'bg-red-400'
                    language = 'Jest'
                  } else if (LanguageIcon === FaBootstrap) {
                    color = 'bg-purple-500'
                    language = 'Bootstrap'
                  } else if (LanguageIcon === SiLighthouse) {
                    color = 'bg-orange-600'
                    language = 'Lighthouse'
                  } else if (LanguageIcon === SiReactrouter) {
                    color = 'bg-red-600'
                    language = 'React Router'
                  } else if (LanguageIcon === SiVite) {
                    color = 'bg-purple-600'
                    language = 'Vite'
                  } else {
                    color = 'bg-mainAccent'
                    language = ''
                  }

                  return (
                    <SkillIcon
                      key={index}
                      logo={LanguageIcon}
                      className={color}
                      name={language}
                    />
                  )
                })}
              </div>
            </div>
            <div className='flex flex-row gap-4 justify-end mt-auto'>
              {projectGithubURL && (
                <a href={projectGithubURL} target='_blank'>
                  <Button text='Voir le code' />
                </a>
              )}
              {projectWebsiteURL && (
                <a href={projectWebsiteURL} target='_blank'>
                  <Button text='Voir le site' />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
