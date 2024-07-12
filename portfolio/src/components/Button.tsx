import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

type ButtonProps = {
  className?: ClassValue
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ className, text, onClick }: ButtonProps) {
  return (
    <button
      role='button'
      onClick={onClick}
      className={cn(
        'flex cursor-pointer items-center rounded-base border-2 border-black bg-main dark:border-dark-black dark:bg-secondary px-4 py-2 shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        className
      )}
    >
      {text}
    </button>
  )
}
