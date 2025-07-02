import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useRef, useState } from 'react'

import { RatingWithBookAndUserType } from '@/@types/rating'

import { LastReadingRatingCard } from './LastReading'
import { PublicRatingCard } from './Public'
import { SimplifiedRatingCard } from './Simplified'
import { UserRatingCard } from './User'

export interface SharedRatingCardProps {
  rating: RatingWithBookAndUserType
  expandedDescription: boolean
  setExpandedDescription: (value: boolean) => void
  expansiveDescription: boolean
  postedAtTimeAgo: string
  descriptionRef: React.RefObject<HTMLParagraphElement>
}

interface RatingCardProps {
  type: 'LastReading' | 'Public' | 'User' | 'Simplified'
  rating: RatingWithBookAndUserType
}

const ratingCardMap: Record<RatingCardProps['type'], React.ComponentType<SharedRatingCardProps>> = {
  LastReading: LastReadingRatingCard,
  User: UserRatingCard,
  Public: PublicRatingCard,
  Simplified: SimplifiedRatingCard,
}

export function RatingCard({ type, rating }: RatingCardProps) {
  const Component = ratingCardMap[type]

  const [expandedDescription, setExpandedDescription] = useState(false)
  const [expansiveDescription, setExpansiveDescription] = useState(false)
  const descriptionRef = useRef<HTMLParagraphElement>(null!)

  const postedAtTimeAgo = formatDistanceToNow(new Date(rating.createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  useEffect(() => {
    if (descriptionRef.current) {
      const el = descriptionRef.current
      const isClampedNow = el.scrollHeight > el.clientHeight
      setExpansiveDescription(isClampedNow)
    }
  }, [expandedDescription])

  return (
    <Component
      rating={rating}
      expandedDescription={expandedDescription}
      setExpandedDescription={setExpandedDescription}
      expansiveDescription={expansiveDescription}
      postedAtTimeAgo={postedAtTimeAgo}
      descriptionRef={descriptionRef}
    />
  )
}

RatingCard.displayName = 'RatingCard'
