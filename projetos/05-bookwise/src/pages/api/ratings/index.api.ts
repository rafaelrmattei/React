import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { NewRatingPostDataType } from '@/@types/rating'
import { prisma } from '@/lib/prisma'

import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session || !session.user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const body: NewRatingPostDataType = req.body

  const book = await prisma.book.findUnique({
    where: {
      id: body.bookId,
    },
  })

  if (!book) {
    return res.status(404).json({ error: 'Livro não encontrado' })
  }

  const rating = await prisma.rating.create({
    data: {
      userId: session.user.id,
      bookId: body.bookId,
      rate: body.rate,
      description: body.description,
    },
  })

  return res.status(200).json(rating)
}
