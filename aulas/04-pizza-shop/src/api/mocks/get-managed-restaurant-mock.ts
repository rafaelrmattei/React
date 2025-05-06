import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', async () => {
  return HttpResponse.json({
    name: 'Baratier',
    id: '23nm401928734h',
    description: 'Restaurante para marujos experientes',
    managerId: '2m34091823n4',
    createdAt: '01-01-2025',
    updatedAt: '01-01-2025',
  })
})
