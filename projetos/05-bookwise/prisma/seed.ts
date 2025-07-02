import { prisma } from '@/lib/prisma'

import { books } from './constants/books'
import { categories } from './constants/categories'
import { ratings } from './constants/ratings'
import { users } from './constants/users'

async function main() {
  await prisma.rating.deleteMany()
  await prisma.user.deleteMany()
  await prisma.categoryOnBook.deleteMany()
  await prisma.category.deleteMany()
  await prisma.book.deleteMany()

  const usersSeed = users.map((user) => {
    return prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.avatar_url,
      },
    })
  })

  const categoriesSeed = categories.map((category) => {
    return prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
      },
    })
  })

  const booksSeed = books.map((book) => {
    return prisma.book.create({
      data: {
        id: book.id,
        title: book.name,
        author: book.author,
        summary: book.summary,
        coverUrl: book.cover_url,
        totalPages: book.total_pages,
        categories: {
          create: [
            ...book.categories.map((category) => {
              return {
                category: {
                  connect: {
                    id: category.id,
                  },
                },
              }
            }),
          ],
        },
      },
    })
  })

  const ratingsSeed = ratings.map((rating) => {
    return prisma.rating.create({
      data: {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        user: {
          connect: { id: rating.user_id },
        },
        book: {
          connect: { id: rating.book_id },
        },
      },
    })
  })

  await prisma.$transaction([...usersSeed, ...categoriesSeed, ...booksSeed, ...ratingsSeed])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
