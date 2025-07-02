import { Check, X } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

import { Button } from './styles'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  actionType: 'confirm' | 'cancel'
}

const ActionButtonMap = {
  confirm: {
    icon: Check,
    color: 'green100',
  },
  cancel: {
    icon: X,
    color: 'purple100',
  },
} as const

export function ActionButton({ actionType, ...props }: ActionButtonProps) {
  const { icon: Icon, color } = ActionButtonMap[actionType]

  return (
    <Button variantColor={color} {...props}>
      <Icon size={24} />
    </Button>
  )
}

ActionButton.displayName = 'ActionButton'
