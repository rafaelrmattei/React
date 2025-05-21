import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@rafaelmattei-ignite-ui/react'

export default {
  title: 'Notification/Toast',
  component: Toast,
  args: {
    title: 'Title',
    description: 'Description',
    duration: 3000,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
