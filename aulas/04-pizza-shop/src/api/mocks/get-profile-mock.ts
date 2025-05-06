import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      name: 'Rafael Mattei',
      id: '2m34091823n4',
      email: 'rafaelrmattei@gmail.com',
      phone: '41988362556',
      role: 'manager',
      createdAt: '01-01-2025',
      updatedAt: '01-01-2025',
    })
  },
)
