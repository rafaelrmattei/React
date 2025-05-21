import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@rafaelmattei-ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    active: false,
    contentButton: 'Button',
    contentTooltip: 'Tooltip',
    delayDuration: 300,
    side: 'bottom',
  },
  argTypes: {
    side: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Secondary: StoryObj<TooltipProps> = {
  args: {
    active: true,
  },
}
