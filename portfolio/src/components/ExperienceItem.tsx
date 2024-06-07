import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

export default function ExperienceItem({
  className,
  imageUrl,
  text,
  description,
}: {
  className?: ClassValue
  imageUrl: string
  text: string
  description: string
}) {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={cn(
          'h-16 w-16 rounded-full border-2 border-black bg-cover bg-center',
          className
        )}
      ></div>
      <p className='text-center text-md font-body'>{text}</p>
      <p className='text-center text-sm font-body'>{description}</p>
    </div>
  )
}
