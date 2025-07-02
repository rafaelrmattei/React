import { Description, Portal, Root, Title } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useQueries } from '@tanstack/react-query'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'

import { BookDetailsForDialog } from '@/@types/book'
import { RatingListForDialog } from '@/@types/rating'
import { DetailsBookCard } from '@/components/Card/Book/Details'
import { RatingCard } from '@/components/Card/Rating'
import { NewRatingForm } from '@/components/Form/NewRating'
import { Loader } from '@/components/Loader/Spinner'
import { SessionContext } from '@/contexts/Session/SessionContext'
import { api } from '@/lib/axios'
import { queryClient } from '@/lib/react-query'

import { LoginDialog } from '../Login'
import { ButtonNewRating, DialogCloseButton, DialogContent, DialogOverlay, LoaderContainer, NewRating, Ratings, Titles } from './styles'

interface BookReviewDialogProps {
  bookId: string
  open: boolean
  onOpenChange: (open: boolean) => void
  search?: string
  categoryIds?: string[]
}

export function BookReviewDialog({ bookId, open, onOpenChange, search, categoryIds }: BookReviewDialogProps) {
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [newRatingFormVisible, setNewRatingFormVisible] = useState(false)
  const sessionStatus = useContextSelector(SessionContext, (context) => context.status)

  function handleClickReviewButton() {
    if (sessionStatus === 'loading') return

    if (sessionStatus === 'authenticated') {
      setNewRatingFormVisible(true)
    } else {
      setOpenLoginDialog(true)
    }
  }

  function handleOpenChange(open: boolean) {
    onOpenChange(open)

    if (!open) {
      queryClient.refetchQueries({ queryKey: ['popular-books-by-rating'] })
    }
  }

  const [bookDetailsResult, ratingListResult] = useQueries({
    queries: [
      {
        queryKey: ['book-details-dialog', bookId],
        queryFn: async () => await api.get<BookDetailsForDialog>(`/books/${bookId}`).then((res) => res.data),
        enabled: open,
      },
      {
        queryKey: ['rating-list-dialog', bookId],
        queryFn: async () => await api.get<RatingListForDialog[]>(`/ratings/book/${bookId}`).then((res) => res.data),
        enabled: open,
      },
    ],
  })

  const bookDetails = bookDetailsResult.data
  const isLoadingBookDetails = bookDetailsResult.isLoading

  const ratingList = ratingListResult.data
  const isLoadingRatingList = ratingListResult.isLoading

  return (
    <Root open={open} onOpenChange={handleOpenChange}>
      <Portal>
        <DialogOverlay />
        <DialogContent>
          {isLoadingBookDetails || isLoadingRatingList ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            bookDetails && (
              <>
                <DialogCloseButton>
                  <X size={24} />
                </DialogCloseButton>

                <DetailsBookCard
                  book={bookDetails.book}
                  categories={bookDetails.categories}
                  rateAvg={bookDetails.rateAvg}
                  rateCount={bookDetails.rateCount}
                />

                {ratingList && (
                  <>
                    <Titles>
                      <h3>Avaliações</h3>
                      <ButtonNewRating onClick={handleClickReviewButton} visible={!newRatingFormVisible}>
                        Avaliar
                      </ButtonNewRating>

                      <LoginDialog open={openLoginDialog} onOpenChange={setOpenLoginDialog} />
                    </Titles>

                    <NewRating visible={newRatingFormVisible}>
                      <NewRatingForm setFormVisible={setNewRatingFormVisible} book={bookDetails.book} search={search} categoryIds={categoryIds} />
                    </NewRating>

                    <Ratings>
                      {ratingList.map((rating) => (
                        <RatingCard
                          key={rating.id}
                          type="Simplified"
                          rating={{
                            ...rating,
                            book: bookDetails.book,
                            user: rating.user,
                          }}
                        />
                      ))}
                    </Ratings>
                  </>
                )}
              </>
            )
          )}

          <Title>
            <VisuallyHidden>Livro</VisuallyHidden>
          </Title>
          <Description>
            <VisuallyHidden>Detalhes do livro com suas respectivas avaliações</VisuallyHidden>
          </Description>
        </DialogContent>
      </Portal>
    </Root>
  )
}
