import { X } from 'lucide-react'
import { IconType } from 'react-icons'
import Button from './Button'

import React, { useEffect, useState } from 'react'

type ProjectModalProps = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  projectTitle: string
  projectDescription: string
  projectCover: string
  projectContext: string
  projectProcess: string
  projectLanguages: IconType[]
  projectGithubURL?: string | null
  projectWebsiteURL?: string | null
}

export default function ProjectModal({
  active,
  setActive,
  projectTitle,
  projectDescription,
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
        <div className='flex flex-col w-full gap-10'>
          <h4 className='text-2xl font-heading rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white w-[45%]'>
            {projectTitle}
          </h4>
          <div className='flex flex-col-reverse md:flex-row justify-between mt-4'>
            <p className='rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white w-[45%]'>
              {projectDescription}
            </p>
            <img
              src={projectCover}
              alt={projectTitle}
              className='rounded-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[50%]'
            ></img>
          </div>
          <div className='rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white w-[45%]'>
            <p className='text-lg font-heading'>Contexte :</p>
            <p className=''>{projectContext}</p>
          </div>
          <div className='rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white w-[45%]'>
            <p className='text-lg font-heading'>Réalisation :</p>
            <p className=''>{projectProcess}</p>
          </div>
          <div className='rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white w-[45%]'>
            <p className='text-lg font-heading'>Technos :</p>
            <div className='flex flex-wrap gap-4 mt-4'>
              {projectLanguages.map((LanguageIcon, index) => (
                <LanguageIcon
                  key={index}
                  size={24}
                  className='text-mainAccent'
                />
              ))}
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-end'>
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
  )
}
