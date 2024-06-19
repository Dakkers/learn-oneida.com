import { Intent, cn } from "../../utils"

type Size = 'md'

type Emphasis = 'fill' | 'outline'

export interface ButtonProps {
  children: string;
  disabled?: boolean
  emphasis?: Emphasis
  intent?: Intent
  onClick: () => void
  size?: Size;
  type?: 'button' | 'submit'
}

export function Button ({
  children,
  disabled = false,
  emphasis = 'outline',
  intent = 'secondary',
  onClick,
  size = 'md',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={
        cn(
          "inline-flex items-center justify-center whitespace-nowrap",
          "rounded-md text-sm font-medium",
          "ring-offset-background transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          emphasisMap[emphasis],
          emphasisIntentMap[emphasis][intent],
          sizeMap[size],
        )
      }
      disabled={disabled}
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  )
}

const emphasisMap: Record<Emphasis, string> = {
  fill: 'border-2 border-transparent text-white',
  outline: 'bg-white'
}

const emphasisIntentMap: Record<Emphasis, Record<Intent, string>> = {
  fill: {
    primary: 'bg-blue-700',
    secondary: 'bg-gray-700',
    magic: 'bg-violet-700',
    positive: 'bg-green-700',
    warning: 'bg-yellow-700',
    negative: 'bg-red-700',
  },
  outline: {
    primary: 'border-2 border-blue-700 text-blue-700',
    secondary: 'border-2 border-gray-700 text-gray-700',
    magic: 'border-2 border-violet-700 text-violet-700',
    positive: 'border-2 border-green-700 text-green-700',
    warning: 'border-2 border-yellow-700 text-yellow-700',
    negative: 'border-2 border-red-700 text-red-700',
  }
}

const sizeMap: Record<Size, string> = {
  md: 'h-[48px] px-4'
} as const;
