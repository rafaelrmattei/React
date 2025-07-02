import Image from 'next/image'

import { BookWithReadedFlagAnbRatingType } from '@/@types/book'
import { BookReviewDialog } from '@/components/Dialog/BookReview'
import { Stars } from '@/components/Stars'
import { useBookReviewDialog } from '@/hooks/useBookReviewDialog'

import { BookCardButton, BookCardContainer, Header, Info, ReadedFlag } from './styles'

interface BookCardProps {
  book: BookWithReadedFlagAnbRatingType
  search?: string
  categoryIds?: string[]
}

export function BookCard({ book, search, categoryIds }: BookCardProps) {
  const { open, setOpen, handleOpenDialog, handleMouseEnter } = useBookReviewDialog({ bookId: book.id })

  return (
    <BookCardContainer>
      <BookCardButton onClick={handleOpenDialog} onMouseEnter={handleMouseEnter}>
        {book.readed && <ReadedFlag>LIDO</ReadedFlag>}
        <Image src={book.coverUrl} alt={book.title} width={108} height={152} />
        <Info>
          <Header>
            <strong>{book.title}</strong>
            <span>{book.author}</span>
          </Header>
          <Stars rate={book.rateAvg} size="md" />
        </Info>
      </BookCardButton>

      <BookReviewDialog bookId={book.id} open={open} onOpenChange={setOpen} search={search} categoryIds={categoryIds} />
    </BookCardContainer>
  )
}

BookCard.displayName = 'BookCard'
