import { ComponentProps, useState } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { Button } from '../Button'
import { X } from 'phosphor-react'
import { CloseButton, ToastContainer, Title, Description, Viewport } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRadix.Provider> {
  title: string
  description: string
  duration: number
}

export function Toast({ title = 'Title', description = 'Description', duration = 3000, ...props }: ToastProps) {
  const [open, setOpen] = useState(false)
  const handleOpenToast = () => setOpen(true)

  return (
    <ToastRadix.Provider {...props}>
      <Button onClick={handleOpenToast}>Open Toast</Button>

      <ToastContainer duration={duration} open={open} onOpenChange={setOpen}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CloseButton>
          <X weight="bold" size={20} />
        </CloseButton>
      </ToastContainer>

      <Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
