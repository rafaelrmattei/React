import { Avatar } from '@/components/Avatar'
import { Stars } from '@/components/Stars'

import { SharedRatingCardProps } from '..'
import { Header, Profile, Rating, SimplifiedRatingCardContainer } from './styles'

export function SimplifiedRatingCard({ rating, postedAtTimeAgo }: SharedRatingCardProps) {
  return (
    <SimplifiedRatingCardContainer>
      <Header>
        <Profile>
          <Avatar image={rating.user.image} name={rating.user.name} />
          <div>
            <span>{rating.user.name}</span>
            <span>{postedAtTimeAgo}</span>
          </div>
        </Profile>
        <Stars rate={rating.rate} />
      </Header>

      <Rating>{rating.description}</Rating>
    </SimplifiedRatingCardContainer>
  )
}

SimplifiedRatingCard.displayName = 'SimplifiedRatingCard'
