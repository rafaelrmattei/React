import { Star, StarHalf } from 'phosphor-react'

import { StarsContainer } from './styles'

interface StarsProps {
  rate: number
  size?: 'sm' | 'md'
}

const sizes = {
  sm: 16,
  md: 20,
}

export function Stars({ size = 'sm', rate = 0 }: StarsProps) {
  return (
    <StarsContainer>
      {[...Array(5)].map((_, index) => {
        if (rate >= index + 1) {
          return <Star key={index} size={sizes[size]} weight="fill" />
        } else if (rate > index && rate < index + 1) {
          return <StarHalf key={index} size={sizes[size]} weight="fill" />
        } else {
          return <Star key={index} size={sizes[size]} />
        }
      })}
    </StarsContainer>
  )
}

Stars.displayName = 'Stars'
