import NicolasOsborne from '../assets/images/hero.svg'
import NicolasOsborneHover from '../assets/images/hero_hover.svg'
import { useState } from 'react'

// const HeroLogo = () => {
//   return (
//     <div>
//       <img src={NicolasOsborne} className='h-[100px] sm:h-[300px]' />
//     </div>
//   )
// }

// export default HeroLogo

const HeroLogo = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <div>
      <img
        src={isHovered ? NicolasOsborneHover : NicolasOsborne}
        alt='Nicolas Osborne - Développeur Front-End et Intégrateur Web à Grenoble'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='h-[100px] sm:h-[300px]'
      />
    </div>
  )
}

export default HeroLogo
