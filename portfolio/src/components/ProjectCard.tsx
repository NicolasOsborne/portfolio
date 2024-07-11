import { IconType } from 'react-icons'
import { useState } from 'react'
import Button from './Button'
import ProjectModal from './ProjectModal'

interface ProjectCardProps {
  projectCover: string
  projectTitle: string
  projectDescription: string
  projectContext: React.ReactNode
  projectProcess: React.ReactNode
  projectLanguages: IconType[]
  projectGithubURL?: string | null
  projectWebsiteURL?: string | null
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectCover,
  projectTitle,
  projectDescription,
  projectContext,
  projectProcess,
  projectLanguages,
  projectGithubURL,
  projectWebsiteURL,
}) => {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <div
      className='cursor-pointer flex flex-col w-5/6 sm:w-[450px]'
      onClick={() => {
        setIsModalActive(true)
      }}
    >
      <ProjectModal
        active={isModalActive}
        setActive={setIsModalActive}
        projectTitle={projectTitle}
        projectContext={projectContext}
        projectProcess={projectProcess}
        projectCover={projectCover}
        projectLanguages={projectLanguages}
        projectGithubURL={projectGithubURL}
        projectWebsiteURL={projectWebsiteURL}
      />

      <div className='flex flex-col rounded-base border-2 border-black shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none'>
        <figure className='w-full'>
          <img
            src={projectCover}
            alt={`Screenshot from ${projectTitle} website project`}
            className='w-full h-full object-cover'
          />
        </figure>
        <figcaption className='text-left my-2 border-y-2 border-gray-200'>
          <h3 className='text-lg font-body font-base mx-2'>{projectTitle}</h3>
          <p className='my-2 mx-2 font-body'>{projectDescription}</p>
        </figcaption>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center pr-4 pb-4 pt-2'>
          <div className='flex flex-row gap-2 mx-2'>
            {projectLanguages.map((LanguageIcon, index) => (
              <LanguageIcon key={index} size={24} className='text-mainAccent' />
            ))}
          </div>
          <div className='flex flex-row-reverse gap-4 pt-4 sm:pt-0'>
            {projectGithubURL && (
              <a href={projectGithubURL} target='_blank'>
                <Button text='Voir le code' className='text-sm font-body' />
              </a>
            )}
            {projectWebsiteURL && (
              <a href={projectWebsiteURL} target='_blank'>
                <Button text='Voir le site' className='text-sm font-body' />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
