import { IconType } from 'react-icons'
import Button from './Button'

interface ProjectCardProps {
  projectURL: string
  projectCover: string
  projectTitle: string
  projectDescription: string
  projectLanguages: IconType[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectURL,
  projectCover,
  projectTitle,
  projectDescription,
  projectLanguages,
}) => {
  return (
    <a
      target='_blank'
      href={projectURL}
      className='flex flex-col border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
    >
      <figure className='w-full'>
        <img
          src={projectCover}
          alt={projectTitle}
          className='w-full h-full object-cover'
        />
      </figure>
      <figcaption className='text-left my-2 border-y-2 border-black'>
        <h3 className='text-lg font-semibold mx-2'>{projectTitle}</h3>
        <p className='my-2 mx-2'>{projectDescription}</p>
      </figcaption>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-wrap gap-2 mb-2 mx-2'>
          {projectLanguages.map((LanguageIcon, index) => (
            <LanguageIcon key={index} size={20} />
          ))}
        </div>
        <div className='flex flex-row gap-4'>
          <Button text='Voir le code' onClick={() => {}} />
          <Button text='Voir le site' onClick={() => {}} />
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
