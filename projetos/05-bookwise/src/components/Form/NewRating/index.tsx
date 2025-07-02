import { zodResolver } from '@hookform/resolvers/zod'
import { Book, User } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { z } from 'zod'

import { BookDetailsForDialog } from '@/@types/book'
import { NewRatingPostDataType, RatingListForDialog, RatingWithBookAndUserType } from '@/@types/rating'
import { Avatar } from '@/components/Avatar'
import { SessionContext } from '@/contexts/Session/SessionContext'
import { api } from '@/lib/axios'
import { queryClient } from '@/lib/react-query'

import { ActionButton } from '../Buttons/Action'
import { StarsButton } from '../Buttons/Stars'
import { Error, Footer, Header, NewRatingFormContainer, TextareaContainer, UserContainer } from './styles'

interface NewRatingFormProps {
  book: Book
  setFormVisible: (prop: boolean) => void
  search?: string
  categoryIds?: string[]
}

const DESCRIPTION_LIMITS = {
  min: 5,
  max: 450,
}

const NewRatingValidationSchema = z.object({
  description: z
    .string()
    .min(DESCRIPTION_LIMITS.min, { message: `A avaliação precisa de no mínimo ${DESCRIPTION_LIMITS.min} caracteres` })
    .max(DESCRIPTION_LIMITS.max, { message: `Máximo de ${DESCRIPTION_LIMITS.max} caracteres` }),
  rating: z.number({ required_error: 'Selecione uma nota', invalid_type_error: 'Selecione uma nota' }).min(1, { message: 'Selecione uma nota' }),
})

type NewRatingFormData = z.infer<typeof NewRatingValidationSchema>

export function NewRatingForm({ book, setFormVisible, search, categoryIds }: NewRatingFormProps) {
  const sessionUser = useContextSelector(SessionContext, (context) => context.session?.user)
  const [rating, setRating] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NewRatingValidationSchema),
  })

  const numCaracteresTextarea = watch('description', '').length

  const handleClickCancel = useCallback(() => {
    setFormVisible(false)
  }, [setFormVisible])

  function handleRatingChange(newRating: number) {
    setRating(newRating)
    setValue('rating', newRating, { shouldValidate: true })
  }

  const mutation = useMutation({
    mutationFn: (data: NewRatingPostDataType) => api.post('/ratings', data),

    onMutate: async (newRating) => {
      setFormVisible(false)
      setRating(0)
      reset()

      queryClient.setQueryData<BookDetailsForDialog>(['book-details-dialog', book.id], (old) => {
        if (!old) return old
        const newRateCount = old.rateCount + 1
        const newRateAvg = (old.rateAvg * old.rateCount + newRating.rate) / newRateCount
        return {
          ...old,
          rateAvg: newRateAvg,
          rateCount: newRateCount,
        }
      })

      queryClient.setQueryData<RatingWithBookAndUserType>(['last-reading-session-user'], {
        ...newRating,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        user: sessionUser as User,
        userId: (sessionUser as User).id,
        book,
      })

      await queryClient.cancelQueries({ queryKey: ['rating-list-dialog', book.id] })
      const previousReviews = queryClient.getQueryData<RatingListForDialog[]>(['rating-list-dialog', book.id])
      const optimisticRating: RatingListForDialog = {
        ...newRating,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        userId: (sessionUser as User).id,
        user: sessionUser as User,
      }
      queryClient.setQueryData<RatingListForDialog[]>(['rating-list-dialog', book.id], (old = []) => [optimisticRating, ...old])
      return { previousReviews }
    },

    onError: (_, __, context) => {
      if (context?.previousReviews) queryClient.setQueryData(['rating-list-dialog', book.id], context.previousReviews)
      queryClient.invalidateQueries({ queryKey: ['last-reading-session-user'] })
      queryClient.invalidateQueries({ queryKey: ['book-details-dialog', book.id] })
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-books', search, categoryIds] })
    },
  })

  function handleSubmitNewRating(data: NewRatingFormData) {
    mutation.mutate({
      bookId: book.id,
      rate: rating,
      description: data.description,
    })
  }

  if (sessionUser) {
    return (
      <NewRatingFormContainer onSubmit={handleSubmit(handleSubmitNewRating)}>
        <Header>
          <UserContainer>
            <Avatar image={sessionUser.image} name={sessionUser.name} />
            <strong>{sessionUser.name}</strong>
          </UserContainer>
          <StarsButton rating={rating} onRatingChange={handleRatingChange} />
        </Header>

        <TextareaContainer>
          <textarea
            inputMode="text"
            placeholder="Escreva sua avaliação"
            minLength={DESCRIPTION_LIMITS.min}
            maxLength={DESCRIPTION_LIMITS.max}
            {...register('description')}
          ></textarea>
          <span>
            {numCaracteresTextarea}/{DESCRIPTION_LIMITS.max}
          </span>
        </TextareaContainer>
        {errors.rating && <Error>{errors.rating.message}</Error>}
        {errors.description && <Error>{errors.description.message}</Error>}

        <Footer>
          <ActionButton actionType="cancel" onClick={handleClickCancel} />
          <ActionButton type="submit" actionType="confirm" />
        </Footer>
      </NewRatingFormContainer>
    )
  }
}
