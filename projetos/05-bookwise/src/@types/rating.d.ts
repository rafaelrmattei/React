import { Prisma, Rating, User } from '@prisma/client'

export type RatingWithBookAndUserType = Prisma.RatingGetPayload<{
  include: {
    user: true
    book: true
  }
}>

export type NewRatingPostDataType = {
  bookId: string
  rate: number
  description: string
}

export type RatingListForDialog = Rating & {
  user: User
}
