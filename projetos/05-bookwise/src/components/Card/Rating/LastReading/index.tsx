import Image from 'next/image'

import { BookReviewDialog } from '@/components/Dialog/BookReview'
import { Stars } from '@/components/Stars'
import { useBookReviewDialog } from '@/hooks/useBookReviewDialog'

import { SharedRatingCardProps } from '..'
import { BookInfo, Description, Header, Info, LastReadingRatingCardContainer, Rating, RatingCardButton } from './styles'

export function LastReadingRatingCard({
  rating,
  expandedDescription,
  setExpandedDescription,
  expansiveDescription,
  postedAtTimeAgo,
  descriptionRef,
}: SharedRatingCardProps) {
  const { open, setOpen, handleOpenDialog, handleMouseEnter } = useBookReviewDialog({ bookId: rating.book.id })

  return (
    <LastReadingRatingCardContainer>
      <RatingCardButton role="button" onClick={handleOpenDialog} onMouseEnter={handleMouseEnter}>
        <Rating>
          <Image src={rating.book.coverUrl} alt={rating.book.title} width={120} height={160} />
          <Info>
            <Header>
              <div>{postedAtTimeAgo}</div>
              <Stars rate={rating.rate} />
            </Header>
            <BookInfo>
              <strong>{rating.book.title}</strong>
              <span>{rating.book.author}</span>
              <Description ref={descriptionRef} lines={!expandedDescription ? 2 : 'all'}>
                {rating.description}
              </Description>

              {expansiveDescription && !expandedDescription && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setExpandedDescription(!expandedDescription)
                  }}
                >
                  ver mais
                </button>
              )}
            </BookInfo>
          </Info>
        </Rating>
      </RatingCardButton>

      <BookReviewDialog bookId={rating.book.id} open={open} onOpenChange={setOpen} />
    </LastReadingRatingCardContainer>
  )
}

LastReadingRatingCard.displayName = 'LastReadingRatingCard'
