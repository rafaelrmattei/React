import { useCallback, useState } from 'react'

import { BookDetailsForDialog } from '@/@types/book'
import { RatingListForDialog } from '@/@types/rating'
import { api } from '@/lib/axios'
import { queryClient } from '@/lib/react-query'

interface UseBookReviewDialogProps {
  bookId: string
}

export function useBookReviewDialog({ bookId }: UseBookReviewDialogProps) {
  const [open, setOpen] = useState(false)

  const prefetchDialogData = useCallback(async () => {
    await queryClient.prefetchQuery({
      queryKey: ['book-details-dialog', bookId],
      queryFn: async () => await api.get<BookDetailsForDialog>(`/books/${bookId}`).then((res) => res.data),
    })

    await queryClient.prefetchQuery({
      queryKey: ['rating-list-dialog', bookId],
      queryFn: async () => await api.get<RatingListForDialog[]>(`/ratings/book/${bookId}`).then((res) => res.data),
    })
  }, [bookId])

  const handleOpenDialog = useCallback(() => {
    setOpen(true)
    prefetchDialogData()
  }, [prefetchDialogData])

  const handleMouseEnter = prefetchDialogData

  return {
    open,
    setOpen,
    handleOpenDialog,
    handleMouseEnter,
  }
}
