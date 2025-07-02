import { Star } from 'phosphor-react'

import { StarsContainer } from './styles'

interface StarsButtonProps {
  rating: number
  onRatingChange: (rating: number) => void
}

export function StarsButton({ rating, onRatingChange }: StarsButtonProps) {
  return (
    <StarsContainer title="Nota">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} size={28} weight={rating >= value ? 'fill' : 'regular'} onClick={() => onRatingChange(value)} />
      ))}
    </StarsContainer>
  )
}
