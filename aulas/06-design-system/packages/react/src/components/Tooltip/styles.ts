import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const Trigger = styled(Tooltip.Trigger, {
  all: 'unset',
  borderRadius: '$sm',
  padding: '$4 $6',
  backgroundColor: '$gray800',
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$md',
  lineHeight: '$base',

  '&[data-active=true]': {
    backgroundColor: '$gray600',
  },
})

export const Content = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$xs',
  color: '$gray100',
  fontFamily: '$secondary',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',
  textAlign: 'center',
})
