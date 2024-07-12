import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

type TextareaProps = {
  className?: ClassValue
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  id: string
  name: string
}

export default function Textarea({
  className,
  value,
  setValue,
  placeholder,
  name,
  id,
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        'h-[150px] rounded-base border-2 border-black p-[10px] font-body ring-offset-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 outline-none transition-all dark:bg-bg dark:ring-offset-secondary',
        className
      )}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      required
    ></textarea>
  )
}
