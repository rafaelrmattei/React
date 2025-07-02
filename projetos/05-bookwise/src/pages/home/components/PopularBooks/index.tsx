import { useQuery } from '@tanstack/react-query'

import { PopularBookType } from '@/@types/book'
import { PopularBookCard } from '@/components/Card/Book/Popular'
import { api } from '@/lib/axios'

import { HeadingCards } from '../HeadingCards'
import { PopularBooksContainer } from './styles'

export function PopularBooks() {
  const { data: popularBooksByRating } = useQuery({
    queryKey: ['popular-books-by-rating'],
    queryFn: async () => api.get<PopularBookType[]>('/books/popular').then((res) => res.data),
    staleTime: Infinity,
  })

  if (popularBooksByRating) {
    return (
      <PopularBooksContainer>
        <HeadingCards title="Livros populares" link={{ title: 'Ver todos', href: 'explore' }} />

        {popularBooksByRating.map((popularBook) => (
          <PopularBookCard key={popularBook.id} book={popularBook} />
        ))}
      </PopularBooksContainer>
    )
  }
}

PopularBooks.displayName = 'PopularBooks'
