import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

type ButtonProps = {
  className?: ClassValue
  text: string
}

export default function Button({ className, text }: ButtonProps) {
  return (
    <button
      role='button'
      className={cn(
        'flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-4 py-2 text-sm font-body shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        className
      )}
    >
      {text}
    </button>
  )
}
