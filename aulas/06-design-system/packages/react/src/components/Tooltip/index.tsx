import { ComponentProps } from 'react'
import { Content, Trigger } from './styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Provider> {
  active: boolean
  contentButton: string
  contentTooltip: string
  side: 'top' | 'right' | 'bottom' | 'left'
  delayDuration: number
}

export function Tooltip({
  active = false,
  contentButton = 'Button',
  contentTooltip = 'Tooltip',
  delayDuration = 300,
  side = 'bottom',
  ...props
}: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={delayDuration} {...props}>
      <TooltipRadix.Root>
        <Trigger data-active={active}>{contentButton}</Trigger>
        <TooltipRadix.Portal>
          <Content side={side}>
            {contentTooltip}
            <TooltipRadix.Arrow />
          </Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
