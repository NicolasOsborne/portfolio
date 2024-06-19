import { useState } from 'react'
import { ClassValue } from 'clsx'
import { cn } from '../lib/utils'
import Nicoo from '../assets/images/nicoo_logo.svg'
import NicooHover from '../assets/images/nicoo_logo_hover.svg'

interface LogoProps {
  className?: ClassValue
}

const Logo = ({ className }: LogoProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <div className={cn('max-w-[100%]', className)}>
      <h1 className='sr-only'>
        Nicoo - Nicolas Osborne - Développeur Web & Intégrateur Web à Grenoble
      </h1>
      <a href='/'>
        <img
          src={isHovered ? NicooHover : Nicoo}
          alt='Nicoo - Nicolas Osborne - Développeur Web & Intégrateur Web à Grenoble'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </a>
    </div>
  )
}

export default Logo
