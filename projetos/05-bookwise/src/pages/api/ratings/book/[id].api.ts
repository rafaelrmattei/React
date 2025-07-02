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

  const results = await prisma.rating.findMany({
    where: {
      bookId: id,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return res.status(200).json(results)
}
