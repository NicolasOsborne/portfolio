import { useState } from 'react'
import Nicoo from '../assets/images/nicoo_logo.svg'
import NicooHover from '../assets/images/nicoo_logo_hover.svg'

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <div>
      <a href='/'>
        <img
          src={isHovered ? NicooHover : Nicoo}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </a>
    </div>
  )
}

export default Logo
