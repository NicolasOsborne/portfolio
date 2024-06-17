import Star from '../assets/images/brutalist-star.svg'

interface MarqueeItemProps {
  text: string
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ text }) => {
  return (
    <>
      <span className='text-4xl inline-block align-middle mx-12 first:ml-40'>
        {text}
      </span>
      <img
        src={Star}
        alt='Star separator'
        className='w-8 h-8 inline-block align-middle mx-12'
      />
    </>
  )
}

export default function Marquee() {
  const marqueeTexts = ['Développeur Front-End', 'Intégrateur Web']
  const duplicatedMarqueeTexts = [...marqueeTexts, ...marqueeTexts]

  return (
    <div className='relative flex w-full overflow-x-hidden border-b-4 border-t-4 border-black bg-main font-body font-base'>
      <div className='animate-marquee whitespace-nowrap py-12'>
        {duplicatedMarqueeTexts.map((text, index) => (
          <MarqueeItem key={index} text={text} />
        ))}
      </div>

      <div className='absolute top-0 animate-marquee2 whitespace-nowrap py-12'>
        {duplicatedMarqueeTexts.map((text, index) => (
          <MarqueeItem key={index} text={text} />
        ))}
      </div>
    </div>
  )
}
