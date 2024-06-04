import { IconType } from 'react-icons'

interface SkillIconProps {
  logo: IconType
  name: string
}

const SkillIcon: React.FC<SkillIconProps> = ({ logo: LogoComponent, name }) => {
  return (
    <div>
      <div className='flex items-center justify-center border-2 bg-mainAccent border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
        <LogoComponent size={24} />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default SkillIcon
