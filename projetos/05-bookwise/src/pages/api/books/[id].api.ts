import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const idParam = req.query.id
  const id = Array.isArray(idParam) ? idParam[0] : idParam

  if (!id) {
    return res.status(400).json({ error: 'ID do livro não encontrado' })
  }

  const [book, rating] = await Promise.all([
    prisma.book.findUnique({
      where: {
        id,
      },
      include: {
        categories: {
          select: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    }),
    prisma.rating.aggregate({
      where: { bookId: id },
      _avg: { rate: true },
      _count: { rate: true },
    }),
  ])

  const results = {
    book: {
      id: book?.id,
      title: book?.title,
      author: book?.author,
      coverUrl: book?.coverUrl,
      summary: book?.summary,
      totalPages: book?.totalPages,
      createdAt: book?.createdAt,
    },
    categories: book?.categories.map((c) => c.category.name) ?? [],
    rateAvg: rating._avg.rate ?? 0,
    rateCount: rating._count.rate ?? 0,
  }

  return res.status(200).json(results)
}
