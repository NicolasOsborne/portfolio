import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

export default function ExperienceCard({
  className,
  imageUrl,
  title,
  type,
  description,
  dateEnd,
  dateStart,
}: {
  className?: ClassValue
  imageUrl: string
  title: string
  type: string
  description: React.ReactNode
  dateEnd: string
  dateStart?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row justify-between p-4 border-2 border-black dark:border-dark-black rounded-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        className
      )}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            className='h-16 w-16 rounded-full border-2 border-black bg-cover bg-center bg-white'
          ></div>
          <div>
            <h3 className='text-lg font-heading'>{title}</h3>
            <p className='text-lg font-body'>{type}</p>
          </div>
        </div>
        <div className='pr-4'>{description}</div>
      </div>
      <div className='flex flex-col gap-10 items-end justify-center border-t-2 border-l-0 sm:border-l-2 sm:border-t-0 border-black pl-4 pt-4 sm:pt-0 mt-8 sm:mt-0'>
        <p className='text-xl font-heading'>{dateEnd}</p>
        <p className='text-xl font-heading'>{dateStart}</p>
      </div>
    </div>
  )
}
