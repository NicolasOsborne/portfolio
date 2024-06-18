import { ClassValue } from 'clsx'

import { cn } from '../lib/utils'

type InputProps = {
  className?: ClassValue
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  id: string
  name: string
  type: 'email' | 'text'
}

export default function Input({
  className,
  value,
  setValue,
  placeholder,
  id,
  name,
  type,
}: InputProps) {
  return (
    <input
      className={cn(
        'rounded-base border-2 border-black p-[10px] font-body ring-offset-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 outline-none transition-all',
        className
      )}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      aria-label={placeholder}
      type={type}
      required
    />
  )
}
