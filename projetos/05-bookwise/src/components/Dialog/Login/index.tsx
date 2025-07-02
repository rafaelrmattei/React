import { Description, Portal, Root } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { X } from 'phosphor-react'

import { SocialLoginButton } from '@/components/Form/Buttons/SocialLogin'

import { DialogCloseButton, DialogContent, DialogOverlay, Title } from './styles'

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogCloseButton>
            <X size={24} />
          </DialogCloseButton>

          <Title>Faça login para deixar sua avaliação</Title>

          <SocialLoginButton provider="google" />
          <SocialLoginButton provider="github" />
        </DialogContent>

        <Description>
          <VisuallyHidden>Acesse pelos botões abaixo</VisuallyHidden>
        </Description>
      </Portal>
    </Root>
  )
}
