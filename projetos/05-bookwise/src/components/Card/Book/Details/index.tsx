import { Book } from '@prisma/client'
import Image from 'next/image'
import { BookmarkSimple, BookOpen } from 'phosphor-react'

import { Stars } from '@/components/Stars'

import { Bottom, DetailsBookCardContainer, Footer, Header, Info, Metric, Top } from './styles'

interface DetailsBookCardProps {
  book: Book
  categories: string[]
  rateAvg: number
  rateCount: number
}

export function DetailsBookCard({ book, categories, rateAvg, rateCount }: DetailsBookCardProps) {
  return (
    <DetailsBookCardContainer>
      <Top>
        <Image src={book.coverUrl} alt={book.title} width={172} height={242} />
        <Info>
          <Header>
            <strong>{book.title}</strong>
            <span>{book.author}</span>
          </Header>
          <Footer>
            <Stars rate={rateAvg} size="md" />
            <span>
              {rateCount} {rateCount === 1 ? 'avaliação' : 'avaliações'}
            </span>
          </Footer>
        </Info>
      </Top>
      <Bottom>
        <Metric>
          <BookmarkSimple size={24} />
          <div>
            <span>Categoria</span>
            <strong>{categories.join(', ')}</strong>
          </div>
        </Metric>
        <Metric>
          <BookOpen size={24} />
          <div>
            <span>Páginas</span>
            <strong>{book.totalPages}</strong>
          </div>
        </Metric>
      </Bottom>
    </DetailsBookCardContainer>
  )
}

DetailsBookCard.displayName = 'DetailsBookCard'
