import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const idParam = req.query.id
  const id = Array.isArray(idParam) ? idParam[0] : idParam

  const result = await prisma.user.findUnique({
    where: { id },
  })

  if (!result) {
    return res.status(404).json({ error: 'User not found' })
  }

  return res.status(200).json(result)
}
