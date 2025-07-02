import Image from 'next/image'

import { PopularBookType } from '@/@types/book'
import { BookReviewDialog } from '@/components/Dialog/BookReview'
import { Stars } from '@/components/Stars'
import { useBookReviewDialog } from '@/hooks/useBookReviewDialog'

import { Header, Info, PopularBookCardButton, PopularBookCardContainer } from './styles'

interface PopularBookCardProps {
  book: PopularBookType
}

export function PopularBookCard({ book }: PopularBookCardProps) {
  const { open, setOpen, handleOpenDialog, handleMouseEnter } = useBookReviewDialog({ bookId: book.id })

  return (
    <PopularBookCardContainer>
      <PopularBookCardButton onClick={handleOpenDialog} onMouseEnter={handleMouseEnter}>
        <Image src={book.coverUrl} alt={book.title} width={64} height={94} />
        <Info>
          <Header>
            <strong>{book.title}</strong>
            <span>{book.author}</span>
          </Header>
          <Stars rate={book.rateAvg} />
        </Info>
      </PopularBookCardButton>

      <BookReviewDialog bookId={book.id} open={open} onOpenChange={setOpen} />
    </PopularBookCardContainer>
  )
}

PopularBookCard.displayName = 'PopularBookCard'
