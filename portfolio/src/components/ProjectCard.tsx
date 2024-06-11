import { IconType } from 'react-icons'
import Button from './Button'

interface ProjectCardProps {
  projectCover: string
  projectTitle: string
  projectDescription: string
  projectLanguages: IconType[]
  projectGithubURL?: string
  projectWebsiteURL?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectCover,
  projectTitle,
  projectDescription,
  projectLanguages,
  projectGithubURL,
  projectWebsiteURL,
}) => {
  return (
    <div className='flex flex-col w-[500px] rounded-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
      <figure className='w-full'>
        <img
          src={projectCover}
          alt={projectTitle}
          className='w-full h-full object-cover'
        />
      </figure>
      <figcaption className='text-left my-2 border-y-2 border-black'>
        <h3 className='text-lg font-body font-base mx-2'>{projectTitle}</h3>
        <p className='my-2 mx-2 font-body'>{projectDescription}</p>
      </figcaption>
      <div className='flex flex-row justify-between items-center pr-4 pb-4 pt-2'>
        <div className='flex flex-wrap gap-2 mx-2'>
          {projectLanguages.map((LanguageIcon, index) => (
            <LanguageIcon key={index} size={24} className='text-mainAccent' />
          ))}
        </div>
        <div className='flex flex-row gap-4'>
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
  )
}

export default ProjectCard
