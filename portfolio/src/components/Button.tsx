import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

type ButtonProps = {
  className?: ClassValue
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ className, text, onClick }: ButtonProps) {
  return (
    <button
      role='button'
      aria-label='Click to perform an action'
      onClick={onClick}
      className={cn(
        'flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-4 py-2 text-sm font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        className
      )}
    >
      {text}
    </button>
  )
}
