import { ClassValue } from 'clsx'
import { cn } from '../lib/utils'
import { IconType } from 'react-icons'

interface SkillIconProps {
  logo: IconType
  name: string
  className?: ClassValue
}

const SkillIcon = ({
  logo: LogoComponent,
  name,
  className,
}: SkillIconProps) => {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div
        className={cn(
          'flex items-center justify-center w-[52px] border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
          className
        )}
      >
        <LogoComponent size={30} />
      </div>
      <p className='text-center text-sm font-body font-base'>{name}</p>
    </div>
  )
}

export default SkillIcon
