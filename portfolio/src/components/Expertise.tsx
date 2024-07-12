import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

export default function Expertise({
  className,
  text,
}: {
  className?: ClassValue
  text: string
}) {
  return (
    <div
      className={cn(
        'w-min rounded-base border-2 border-black dark:border-dark-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 py-2 font-body whitespace-nowrap',
        className
      )}
    >
      {text}
    </div>
  )
}
