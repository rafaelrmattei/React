import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { RatingWithBookAndUserType } from '@/@types/rating'
import { RatingCard } from '@/components/Card/Rating'
import { SearchInput } from '@/components/Form/Inputs/Search'
import { LoaderText } from '@/components/Loader/Text'
import { api } from '@/lib/axios'

import { NotFound, RatingsContainer } from './styles'

interface RatingsProps {
  userId: string
}

export function Ratings({ userId }: RatingsProps) {
  const [search, setSearch] = useState('')

  const { data: ratingsByUser, isLoading } = useQuery({
    queryKey: ['ratings-by-user', userId],
    queryFn: async () => await api.get<RatingWithBookAndUserType[]>(`/ratings/user/${userId}`).then((res) => res.data),
    staleTime: 1000 * 60,
  })

  const filteredRatings = useMemo(() => {
    if (!ratingsByUser) return []
    return ratingsByUser.filter((rating) => {
      const query = search.toLowerCase()
      return (
        rating.book.title.toLowerCase().includes(query) ||
        rating.book.author.toLowerCase().includes(query) ||
        rating.description.toLowerCase().includes(query)
      )
    })
  }, [ratingsByUser, search])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <RatingsContainer>
      <SearchInput placeholder="Buscar livro avaliado" value={search} onChange={handleSearch} full />
      {isLoading ? (
        <LoaderText message="Buscando avaliações..." />
      ) : filteredRatings.length > 0 ? (
        filteredRatings.map((rating) => <RatingCard key={rating.id} rating={rating} type="User" />)
      ) : (
        <NotFound>Nenhum resultado encontrado.</NotFound>
      )}
    </RatingsContainer>
  )
}
