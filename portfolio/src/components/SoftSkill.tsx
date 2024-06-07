import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

export default function SoftSkill({
  className,
  text,
}: {
  className?: ClassValue
  text: string
}) {
  return (
    <div
      className={cn(
        'w-min border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-main px-3 py-2 font-body whitespace-nowrap',
        className
      )}
    >
      {text}
    </div>
  )
}
